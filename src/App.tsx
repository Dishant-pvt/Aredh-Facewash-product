import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandStory from "./components/BrandStory";
import ProductHighlight from "./components/ProductHighlight";
import IngredientsGrid from "./components/IngredientsGrid";
import WhyChoose from "./components/WhyChoose";
import HowToUse from "./components/HowToUse";
import Testimonials from "./components/Testimonials";
import BlogSection from "./components/BlogSection";
import InquiryForm from "./components/InquiryForm";
import LocationSection from "./components/LocationSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [selectedSize, setSelectedSize] = useState("100ml");

  const handleEnquireScroll = () => {
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
  };

  return (
    <div className="min-h-screen bg-stone-950 flex flex-col justify-between selection:bg-gold-400 selection:text-stone-950">
      {/* 1. Header Sticky Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Presentation */}
        <Hero onEnquireClick={handleEnquireScroll} />

        {/* 3. Brand Story / Heritage */}
        <BrandStory />

        {/* 4. Ingredients Showcase */}
        <IngredientsGrid />

        {/* 5. Product Configurator / Size select */}
        <ProductHighlight
          selectedSize={selectedSize}
          onSizeSelect={setSelectedSize}
        />

        {/* 6. Brand Trust & Core Values */}
        <WhyChoose />

        {/* 7. Ritual & Application Sequence */}
        <HowToUse />

        {/* 8. Customers Testimonial */}
        <Testimonials />

        {/* 9. SEO Knowledge Hub & Journal (12 Articles) */}
        <BlogSection onEnquireClick={handleEnquireScroll} />

        {/* 10. Key Form Inquiry section */}
        <InquiryForm selectedSize={selectedSize} />

        {/* 11. Headquarters Location & Google Map */}
        <LocationSection />

        {/* 12. Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* 12. Footer details */}
      <Footer />

      {/* 13. Floating Widgets */}
      <WhatsAppButton />

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}

