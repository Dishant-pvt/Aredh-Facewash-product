import React, { useState, useEffect } from "react";
import { Phone, MapPin, Mail, Sparkles, CheckCircle2, AlertCircle, Lock, RefreshCw, Trash2, FileDown, Eye, MessageSquare } from "lucide-react";
import { Inquiry } from "../types";

interface InquiryFormProps {
  selectedSize: string;
}

export default function InquiryForm({ selectedSize }: InquiryFormProps) {
  // Form States
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [size, setSize] = useState("100ml");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const [bulk, setBulk] = useState(false);

  // UI States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  // Admin Panel States
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminPasscode, setAdminPasscode] = useState("");
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminError, setAdminError] = useState("");
  const [inquiriesList, setInquiriesList] = useState<Inquiry[]>([]);
  const [isLoadingInquiries, setIsLoadingInquiries] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Sync selectedSize from parent props
  useEffect(() => {
    if (selectedSize) {
      setSize(selectedSize);
    }
  }, [selectedSize]);

  // Listen to open-admin-portal event from footer or other elements
  useEffect(() => {
    const handleOpenAdmin = () => {
      setShowAdmin(true);
      setTimeout(() => {
        const element = document.getElementById("contact");
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 50);
    };

    window.addEventListener("open-admin-portal", handleOpenAdmin);
    return () => {
      window.removeEventListener("open-admin-portal", handleOpenAdmin);
    };
  }, []);

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    // Simple validations
    if (!name.trim()) {
      setFormError("Please enter your full name.");
      return;
    }
    if (!phone.trim()) {
      setFormError("Please enter your mobile phone number.");
      return;
    }
    if (!email.trim()) {
      setFormError("Please enter your email address.");
      return;
    }
    if (!email.includes("@")) {
      setFormError("Please enter a valid email address.");
      return;
    }
    if (!quantity || quantity < 1 || quantity > 100) {
      setFormError("Order quantity must be between 1 and 100.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          size,
          quantity,
          message,
          bulk,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitSuccess(true);
        // Reset fields
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        setQuantity(1);
        setBulk(false);
      } else {
        setFormError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setFormError("Could not connect to the server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fetch inquiries for Admin
  const fetchInquiries = async () => {
    setIsLoadingInquiries(true);
    setAdminError("");
    try {
      const response = await fetch("/api/enquiries");
      if (response.ok) {
        const data = await response.json();
        setInquiriesList(data);
      } else {
        setAdminError("Failed to fetch inquiries from server.");
      }
    } catch (err) {
      setAdminError("Network error while loading inquiries.");
    } finally {
      setIsLoadingInquiries(false);
    }
  };

  // Authenticate Admin
  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPasscode === "aredh@2026@codeorbittechsolutions.in") {
      setIsAdminAuthenticated(true);
      setAdminError("");
      fetchInquiries();
    } else {
      setAdminError("Invalid administrator passcode.");
    }
  };

  // Delete an inquiry
  const handleDeleteInquiry = async (id: string) => {
    setIsDeleting(true);
    setAdminError("");
    try {
      const response = await fetch(`/api/enquiries/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setInquiriesList((prev) => prev.filter((inq) => inq.id !== id));
        setConfirmDeleteId(null);
      } else {
        setAdminError("Failed to delete the inquiry from database.");
      }
    } catch (err) {
      setAdminError("Network error while trying to delete inquiry.");
    } finally {
      setIsDeleting(false);
    }
  };

  // Download Leads as CSV
  const downloadCSV = () => {
    if (inquiriesList.length === 0) return;

    const headers = ["ID", "Name", "Phone", "Email", "Size", "Quantity", "Bulk?", "Message", "Created At"];
    const rows = inquiriesList.map((inq) => [
      inq.id,
      `"${inq.name.replace(/"/g, '""')}"`,
      inq.phone,
      inq.email,
      inq.size,
      inq.quantity,
      inq.bulk ? "Yes" : "No",
      `"${inq.message.replace(/"/g, '""')}"`,
      inq.createdAt,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `AREDH_Skincare_Inquiries_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // WhatsApp chat configuration
  const whatsappNumber = "917016846122";
  const whatsappMessage = encodeURIComponent("Hi, I'm interested in AREDH Herbal Cleanser. Please share ordering details.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section
      id="contact"
      className="py-24 bg-stone-950 text-stone-100 relative overflow-hidden"
    >
      {/* Visual background accents */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold-900/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-sky-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="inquiry-section">
        
        {/* Exit Admin Panel Button (only shown when admin portal is open) */}
        {showAdmin && (
          <div className="absolute top-0 right-4 sm:right-8 z-20">
            <button
              onClick={() => {
                setShowAdmin(false);
                setAdminPasscode("");
                setIsAdminAuthenticated(false);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900/60 hover:bg-stone-900 text-stone-500 hover:text-gold-300 border border-stone-800 text-[10px] font-mono tracking-widest uppercase transition-colors"
            >
              <Lock className="w-3 h-3" />
              Exit Admin
            </button>
          </div>
        )}

        {/* ADMIN MODE */}
        {showAdmin ? (
          <div className="max-w-4xl mx-auto glass-card rounded-3xl border-gold-400/20 p-6 sm:p-10 space-y-8 animate-fade-in text-left shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-6">
              <div>
                <h2 className="text-2xl font-serif text-gold-300">Lead Manager Dashboard</h2>
                <p className="text-stone-400 text-xs font-sans mt-1">Review active customer buying inquiries for AREDH.</p>
              </div>
              
              {isAdminAuthenticated && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={fetchInquiries}
                    className="p-2 rounded bg-stone-950 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors"
                    title="Refresh List"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={downloadCSV}
                    disabled={inquiriesList.length === 0}
                    className="flex items-center gap-1.5 px-4 py-2 rounded bg-gold-500 hover:bg-gold-400 disabled:opacity-40 text-stone-950 font-sans font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <FileDown className="w-4 h-4" />
                    Export CSV
                  </button>
                </div>
              )}
            </div>

            {/* Login Frame */}
            {!isAdminAuthenticated ? (
              <form onSubmit={handleAdminLogin} className="max-w-sm mx-auto space-y-4 py-8">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-stone-400 block uppercase">Enter Admin Passcode:</label>
                  <input
                    type="password"
                    value={adminPasscode}
                    onChange={(e) => setAdminPasscode(e.target.value)}
                    placeholder="Enter administrator passcode"
                    className="w-full px-4 py-3 rounded-xl glass-input text-stone-100 font-mono text-sm outline-none transition-colors"
                  />
                </div>

                {adminError && (
                  <div className="flex items-center gap-2 text-rose-400 text-xs bg-rose-500/10 p-3 rounded-lg border border-rose-500/25">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{adminError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-gold-500 to-gold-400 text-stone-950 font-sans font-bold text-xs uppercase tracking-wider rounded-xl hover:scale-[1.01] transition-all"
                >
                  Access Dashboard
                </button>
              </form>
            ) : (
              /* Inquiries Table or List */
              <div className="space-y-4">
                {isLoadingInquiries ? (
                  <div className="text-center py-12 flex flex-col items-center justify-center gap-2">
                    <RefreshCw className="w-8 h-8 text-gold-400 animate-spin" />
                    <span className="text-stone-400 font-sans text-sm">Loading records from database...</span>
                  </div>
                ) : inquiriesList.length === 0 ? (
                  <div className="text-center py-12 border-2 border-dashed border-stone-800 rounded-xl">
                    <Eye className="w-10 h-10 text-stone-600 mx-auto mb-3" />
                    <span className="text-stone-400 font-sans text-sm block">No inquiry submissions recorded yet.</span>
                    <span className="text-stone-500 text-xs font-sans block mt-1">Submit a test inquiry via the form!</span>
                  </div>
                ) : (
                  <div className="overflow-x-auto rounded-xl border border-stone-800 bg-stone-950">
                    <table className="w-full min-w-[800px] border-collapse text-left font-sans text-xs">
                      <thead>
                        <tr className="bg-stone-900 border-b border-stone-800 text-gold-300 font-mono uppercase tracking-wider text-[10px]">
                          <th className="p-4">Inquiry ID</th>
                          <th className="p-4">Contact Detail</th>
                          <th className="p-4">Size Choice</th>
                          <th className="p-4 text-center">Qty</th>
                          <th className="p-4">Bulk Order?</th>
                          <th className="p-4">Message / Inquiry Query</th>
                          <th className="p-4">Received At</th>
                          <th className="p-4 text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-900 text-stone-300">
                        {inquiriesList.map((inq) => (
                          <tr key={inq.id} className="hover:bg-stone-900/40 transition-colors">
                            <td className="p-4 font-mono text-gold-400 font-semibold">{inq.id}</td>
                            <td className="p-4 space-y-1">
                              <div className="text-white font-semibold text-sm">{inq.name}</div>
                              <div className="text-stone-400">{inq.phone}</div>
                              {inq.email && <div className="text-stone-500 font-mono">{inq.email}</div>}
                            </td>
                            <td className="p-4 font-semibold text-stone-200">
                              <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/25">
                                {inq.size}
                              </span>
                            </td>
                            <td className="p-4 text-center font-bold font-mono text-white">{inq.quantity}</td>
                            <td className="p-4">
                              {inq.bulk ? (
                                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 text-[10px] font-bold border border-amber-500/30">
                                  WHOLESALE
                                </span>
                              ) : (
                                <span className="text-stone-600 font-mono">Retail</span>
                              )}
                            </td>
                            <td className="p-4 max-w-xs truncate" title={inq.message}>
                              {inq.message ? (
                                <span className="text-stone-300">{inq.message}</span>
                              ) : (
                                <span className="text-stone-600 italic">No message attached</span>
                              )}
                            </td>
                            <td className="p-4 font-mono text-stone-500">
                              {new Date(inq.createdAt).toLocaleString("en-IN", {
                                day: "numeric",
                                month: "short",
                                hour: "2-digit",
                                minute: "2-digit"
                              })}
                            </td>
                            <td className="p-4 text-center">
                              {confirmDeleteId === inq.id ? (
                                <div className="flex items-center justify-center gap-1.5 animate-fade-in">
                                  <button
                                    onClick={() => handleDeleteInquiry(inq.id)}
                                    disabled={isDeleting}
                                    className="px-2 py-1 rounded bg-rose-500/20 hover:bg-rose-500 text-rose-300 hover:text-white border border-rose-500/30 text-[10px] font-mono tracking-tight transition-all uppercase"
                                  >
                                    {isDeleting ? "..." : "Confirm"}
                                  </button>
                                  <button
                                    onClick={() => setConfirmDeleteId(null)}
                                    disabled={isDeleting}
                                    className="px-2 py-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 text-[10px] font-mono tracking-tight transition-all uppercase"
                                  >
                                    No
                                  </button>
                                </div>
                              ) : (
                                <button
                                  onClick={() => setConfirmDeleteId(inq.id)}
                                  className="p-1.5 rounded hover:bg-rose-500/10 text-stone-500 hover:text-rose-400 transition-colors"
                                  title="Delete Lead Record"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          /* STANDARD LEAD INQUIRY SCREEN */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Details Left Side */}
            <div className="lg:col-span-5 text-left space-y-10">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold tracking-widest text-gold-400 uppercase block">
                  Connect Privately
                </span>
                <h2 className="text-3xl sm:text-4xl font-normal font-serif text-stone-100 tracking-tight leading-snug">
                  Interested in AREDH? <br />
                  Let&apos;s Start a Conversation
                </h2>
                <div className="h-[2px] w-16 bg-gold-400" />
                <p className="text-stone-400 font-sans text-sm leading-relaxed max-w-sm">
                  We are a premium, luxury skincare brand focused on customized attention. We sell through individual consultations 
                  to ensure your Ayurvedic path is authentic and safe. Fill in our secure inquiry card, and our certified Jamnagar 
                  wellness experts will contact you within 2-4 hours.
                </p>
              </div>

              {/* Direct Info list */}
              <div className="space-y-6">
                {/* Location */}
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-gold-400/10 border border-gold-400/25 flex items-center justify-center shrink-0 text-gold-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-stone-500 font-mono tracking-wider block">DISPATCH LOCATION</span>
                    <p className="text-stone-200 font-sans text-sm font-medium">Jamnagar, Gujarat, India - 361005</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-gold-400/10 border border-gold-400/25 flex items-center justify-center shrink-0 text-gold-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-stone-500 font-mono tracking-wider block">PHONE CALLS & INQUIRIES</span>
                    <a
                      href="tel:+917016846122"
                      className="text-stone-200 hover:text-gold-300 font-sans text-sm font-semibold block transition-colors"
                    >
                      +91 70168 46122
                    </a>
                  </div>
                </div>

                {/* Email (Derived from metadata or user contact if available, or official contact) */}
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-xl bg-gold-400/10 border border-gold-400/25 flex items-center justify-center shrink-0 text-gold-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-stone-500 font-mono tracking-wider block">EMAIL SUPPORT</span>
                    <a
                      href="mailto:contact@aredh.in"
                      className="text-stone-200 hover:text-gold-300 font-mono text-xs block transition-colors"
                    >
                      contact@aredh.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Button */}
              <div className="p-6 rounded-2xl bg-stone-900/40 border border-stone-800 space-y-4 max-w-sm">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-stone-200 uppercase tracking-wider font-mono">Instant Chat Options</span>
                </div>
                <p className="text-stone-400 text-xs font-sans leading-relaxed">
                  Prefer a conversational process? Chat immediately with our care advisor on WhatsApp for instant assistance.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-all duration-300 cursor-pointer"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Inquiry Form Right Side */}
            <div className="lg:col-span-7 w-full">
              {submitSuccess ? (
                <div className="bg-stone-900/60 border border-gold-400/20 rounded-3xl p-8 sm:p-12 text-center space-y-6 flex flex-col items-center justify-center animate-fade-in min-h-[500px]">
                  <div className="w-16 h-16 rounded-full bg-gold-400/10 flex items-center justify-center border border-gold-400/30 text-gold-300">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif text-white tracking-wide">Inquiry Sent Successfully</h3>
                    <p className="text-stone-400 text-xs font-mono uppercase tracking-widest text-gold-400">Hari Om. Thank You.</p>
                  </div>
                  <p className="text-stone-300 font-sans text-sm leading-relaxed max-w-md mx-auto">
                    We have securely logged your inquiry for the <strong>AREDH Herbal Cleanser ({size})</strong>. 
                    Our Jamnagar wellness representatives will analyze your details and contact you via Phone / WhatsApp 
                    within the next 2-4 hours.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2.5 rounded-lg border border-gold-400/30 text-gold-300 hover:text-white hover:border-gold-300 text-xs font-sans font-bold uppercase tracking-wider transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass-card rounded-3xl border-gold-400/20 p-6 sm:p-10 space-y-6 text-left shadow-2xl"
                >
                  <div className="flex justify-between items-center pb-2 border-b border-stone-800/40">
                    <h3 className="text-lg font-serif font-medium text-gold-300 tracking-wide">Secure Booking Inquiry Card</h3>
                    <span className="text-[9px] font-mono tracking-widest text-stone-500 uppercase">NO TRANSACTION NEEDED</span>
                  </div>

                  {/* Form Error Notification */}
                  {formError && (
                    <div className="flex items-center gap-3 text-rose-400 text-xs bg-rose-500/10 p-3 rounded-lg border border-rose-500/25">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Field Name & Phone (Horizontal on desktop) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-stone-400 block uppercase">
                        Full Name <span className="text-gold-400 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Priyal Shah"
                        className="w-full px-4 py-3 rounded-xl glass-input text-stone-100 font-sans text-sm outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono text-stone-400 block uppercase">
                        Mobile Phone <span className="text-gold-400 font-bold">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 977-323-5862"
                        className="w-full px-4 py-3 rounded-xl glass-input text-stone-100 font-sans text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-stone-400 block uppercase">
                      Email Address <span className="text-gold-400 font-bold">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. support@aredh.com"
                      className="w-full px-4 py-3 rounded-xl glass-input text-stone-100 font-mono text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Preferred Size & Quantity (Horizontal) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-stone-400 block uppercase">Preferred Volume:</label>
                      <select
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl glass-input text-stone-100 font-sans text-sm outline-none transition-all cursor-pointer"
                      >
                        <option value="50ml" className="bg-stone-900">50ml — Trial Travel Pack</option>
                        <option value="100ml" className="bg-stone-900">100ml — Standard Signature Pump</option>
                        <option value="200ml" className="bg-stone-900">200ml — Luxury Wellness Pack</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono text-stone-400 block uppercase">
                        Order Quantity <span className="text-gold-400 font-bold">*</span> <span className="text-stone-500 text-[10px]">(1-100)</span>
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        required
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="w-full px-4 py-3 rounded-xl glass-input text-stone-100 font-mono text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Message/Query */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-stone-400 block uppercase">
                      Special Message / Skin Query <span className="text-stone-500">(Optional)</span>
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="List any skin concerns (e.g. acne, sensitivity) or shipping instructions here..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl glass-input text-stone-100 font-sans text-sm outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Bulk inquiry Checkbox */}
                  <div className="flex items-start gap-3 py-1">
                    <input
                      type="checkbox"
                      id="bulk-checkbox"
                      checked={bulk}
                      onChange={(e) => setBulk(e.target.checked)}
                      className="w-5 h-5 rounded glass-input border-stone-800/40 text-gold-500 focus:ring-0 cursor-pointer mt-0.5"
                    />
                    <label htmlFor="bulk-checkbox" className="text-stone-300 font-sans text-xs sm:text-sm leading-relaxed cursor-pointer select-none">
                      <strong>I am interested in bulk / corporate wholesale orders.</strong> (Please check this for spas, luxury resorts, boutique shops, or corporate gifting)
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 disabled:opacity-40 text-stone-950 font-sans font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-4 h-4 text-stone-950 animate-spin" />
                          Logging Inquiry...
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <Sparkles className="w-4 h-4 text-stone-950" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
