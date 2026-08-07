import React from "react";
import { Flower2, Phone, MapPin, Mail, Sparkles, ArrowUp, Instagram } from "lucide-react";
import AredhLogo from "./AredhLogo";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
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
    <footer className="bg-stone-950 text-stone-100 pt-20 pb-8 border-t border-stone-900 relative overflow-hidden">
      {/* Subtle backdrop light */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gold-900/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-stone-900 text-left">
          
          {/* Col 1: Brand details */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <AredhLogo height={40} className="transition-transform duration-300 hover:scale-[1.02]" />
            </div>

            <p className="text-stone-400 font-sans text-sm leading-relaxed max-w-sm">
              Crafting premium luxury skincare rituals by aligning classic Ayurvedic treatises with modern, sulfate-free green chemistry. Made in India.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-gold-400/80 uppercase tracking-widest">
              <span>Cleanse</span>
              <span>•</span>
              <span>Refresh</span>
              <span>•</span>
              <span>Revive</span>
            </div>
          </div>

          {/* Col 2: Navigation links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
              Quick Navigation
            </h4>
            <div className="flex flex-col space-y-2.5 font-sans text-sm">
              <a href="#home" onClick={(e) => handleScrollTo(e, "home")} className="text-stone-400 hover:text-gold-300 transition-colors">Home</a>
              <a href="#ingredients" onClick={(e) => handleScrollTo(e, "ingredients")} className="text-stone-400 hover:text-gold-300 transition-colors">Botanical Ingredients</a>
              <a href="#why-aredh" onClick={(e) => handleScrollTo(e, "why-aredh")} className="text-stone-400 hover:text-gold-300 transition-colors">Our Philosophy</a>
              <a href="#ritual" onClick={(e) => handleScrollTo(e, "ritual")} className="text-stone-400 hover:text-gold-300 transition-colors">Cleansing Ritual</a>
              <a href="#reviews" onClick={(e) => handleScrollTo(e, "reviews")} className="text-stone-400 hover:text-gold-300 transition-colors">Verified Customer Reviews</a>
              <a href="#blog" onClick={(e) => handleScrollTo(e, "blog")} className="text-stone-400 hover:text-gold-300 transition-colors">Ayurvedic Skincare Journal</a>
              <a href="#location" onClick={(e) => handleScrollTo(e, "location")} className="text-stone-400 hover:text-gold-300 transition-colors">Location & Map</a>
              <a 
                href="#admin" 
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent("open-admin-portal"));
                }} 
                className="text-stone-400 hover:text-gold-300 transition-colors font-medium border-t border-stone-900 pt-2.5 mt-1"
              >
                Admin Login
              </a>
            </div>
          </div>

          {/* Col 3: Contact & Location */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
              AREDH Headquarters
            </h4>
            <div className="space-y-4 font-sans text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <a
                  href="https://maps.app.goo.gl/tcCQ36dyFtKBBMdd6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-gold-300 transition-colors leading-relaxed"
                >
                  AREDH, Mukta Estate, Plot No. 37, Shanker Tekri, Gokul Nagar, Jamnagar, Gujarat — 361006
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <a href="tel:+917016846122" className="text-stone-400 hover:text-gold-300 transition-colors">
                  +91 70168 46122
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <a href="mailto:contact@aredh.in" className="text-stone-400 hover:text-gold-300 transition-colors font-mono text-xs">
                  contact@aredh.in
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0 mt-1" />
                <a 
                  href="https://www.instagram.com/aredh_skincare" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-stone-400 hover:text-pink-300 transition-colors font-mono text-xs flex items-center gap-1"
                >
                  @aredh_skincare
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} AREDH Skincare. All Rights Reserved. Crafted with complete ingredient transparency.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-1 text-gold-400/80 hover:text-gold-300 uppercase font-mono tracking-wider"
            >
              Back To Top
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
