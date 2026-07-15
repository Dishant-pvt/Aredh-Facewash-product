import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;
const INQUIRIES_FILE = path.join(process.cwd(), "inquiries.json");

// Parse JSON bodies
app.use(express.json());

// Serve /img directory statically
app.use("/img", express.static(path.join(process.cwd(), "img")));

// Helper to read inquiries
const readInquiries = (): any[] => {
  try {
    if (fs.existsSync(INQUIRIES_FILE)) {
      const data = fs.readFileSync(INQUIRIES_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Error reading inquiries file:", err);
  }
  return [];
};

// Helper to write inquiries
const writeInquiries = (inquiries: any[]) => {
  try {
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2), "utf-8");
  } catch (err) {
    console.error("Error writing inquiries file:", err);
  }
};

// API: Submit inquiry
app.post("/api/enquire", (req, res) => {
  const { name, phone, email, size, quantity, message, bulk } = req.body;

  if (!name || !phone || !email) {
    return res.status(400).json({ error: "Name, Phone Number, and Email Address are required." });
  }

  const parsedQty = Number(quantity);
  if (isNaN(parsedQty) || parsedQty < 1 || parsedQty > 100) {
    return res.status(400).json({ error: "Order quantity must be between 1 and 100." });
  }

  const inquiries = readInquiries();

  // Find the highest existing sequential ID index
  let nextIndex = 1;
  inquiries.forEach((inq) => {
    if (inq.id && typeof inq.id === "string") {
      const match = inq.id.match(/^Iqury-i-(\d+)$/);
      if (match) {
        const num = parseInt(match[1], 10);
        if (num >= nextIndex) {
          nextIndex = num + 1;
        }
      }
    }
  });

  const newInquiry = {
    id: `Iqury-i-${nextIndex}`,
    name,
    phone,
    email,
    size: size || "100ml",
    quantity: parsedQty,
    message: message || "",
    bulk: !!bulk,
    createdAt: new Date().toISOString(),
  };

  inquiries.push(newInquiry);
  writeInquiries(inquiries);

  res.json({ success: true, inquiry: newInquiry });
});

// API: Get inquiries (for dashboard)
app.get("/api/enquiries", (req, res) => {
  const inquiries = readInquiries();
  // Sort by date descending
  inquiries.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  res.json(inquiries);
});

// API: Delete inquiry
app.delete("/api/enquiries/:id", (req, res) => {
  const { id } = req.params;
  let inquiries = readInquiries();
  const initialLength = inquiries.length;
  inquiries = inquiries.filter((inq) => inq.id !== id);
  
  if (inquiries.length < initialLength) {
    writeInquiries(inquiries);
    return res.json({ success: true });
  }
  res.status(404).json({ error: "Inquiry not found" });
});

async function startServer() {
  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
