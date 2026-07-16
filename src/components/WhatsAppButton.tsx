import React from "react";
import { MessageSquare, Sparkles } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "917016846122";
  const whatsappMessage = encodeURIComponent("Hi, I'm interested in AREDH Herbal Cleanser. Please share ordering details.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleScrollToInquiry = (e: React.MouseEvent) => {
    e.preventDefault();
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
    <>
      {/* 1. Floating WhatsApp Chat Badge (Bottom-Right, always visible) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        referrerPolicy="no-referrer"
        className="fixed bottom-20 md:bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-emerald-500 text-white rounded-full shadow-2xl hover:bg-emerald-400 hover:scale-110 active:scale-95 transition-all duration-300 group"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
        {/* Hover label */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 bg-stone-900 text-white text-xs px-3 py-1.5 rounded-lg border border-stone-800 tracking-wide transition-all duration-200 shadow whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>

      {/* 2. Mobile Bottom Sticky Ribbon for fast enquiry (Visible ONLY on mobile devices) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-stone-950/95 backdrop-blur-md border-t border-gold-300/15 py-3 px-4 z-40 flex items-center justify-between gap-4 shadow-2xl">
        <div className="text-left">
          <span className="text-[9px] font-mono tracking-wider text-gold-400 uppercase leading-none block">AREDH SKINCARE</span>
          <span className="text-xs text-stone-200 font-serif leading-tight">Herbal Cleanser</span>
        </div>
        
        <button
          onClick={handleScrollToInquiry}
          className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-400 text-stone-950 font-sans font-bold text-xs uppercase tracking-wider rounded-full shadow"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Enquire Now
        </button>
      </div>
    </>
  );
}
