import React, { useState, useEffect } from "react";
import { Menu, X, Flower2, Sparkles, Instagram } from "lucide-react";
import AredhLogo from "./AredhLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Ingredients", href: "#ingredients" },
    { name: "Why AREDH", href: "#why-aredh" },
    { name: "Ritual", href: "#ritual" },
    { name: "Reviews", href: "#reviews" },
    { name: "Journal", href: "#blog" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      id="navbar"
      className={`fixed left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 rounded-2xl transition-all duration-300 ${
        isScrolled
          ? "top-3 bg-stone-950/50 backdrop-blur-md py-2.5 shadow-xl border border-gold-400/20"
          : "top-5 bg-stone-950/10 backdrop-blur-sm py-4 border border-stone-800/15"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <AredhLogo height={32} className="transition-transform duration-300 group-hover:scale-[1.03]" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href.substring(1))}
                className="text-stone-300 hover:text-gold-300 font-sans text-sm tracking-wide transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Call to Action Button & Instagram */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.instagram.com/aredh_skincare"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @aredh_skincare"
              className="p-2 bg-stone-900/60 hover:bg-stone-800 text-stone-300 hover:text-pink-400 rounded-full border border-stone-800 hover:border-pink-500/30 transition-all duration-300 hover:scale-105"
              title="Follow @aredh_skincare on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold-500/80 to-gold-400/80 hover:from-gold-500 hover:to-gold-400 text-stone-950 font-sans font-semibold text-xs uppercase tracking-wider rounded-full shadow-lg border border-gold-300/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-300 hover:text-gold-300 p-1.5 rounded-xl bg-stone-900/30 border border-stone-800/40 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-[calc(100%+0.5rem)] left-0 w-full bg-stone-950/75 backdrop-blur-lg border border-gold-400/20 shadow-2xl rounded-2xl overflow-hidden transition-all duration-300">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href.substring(1))}
                className="block text-stone-300 hover:text-gold-300 font-sans text-base py-2 border-b border-stone-900/40"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="w-full text-center block px-5 py-3 bg-gradient-to-r from-gold-500/80 to-gold-400/80 text-stone-950 font-semibold text-xs uppercase tracking-wider rounded-xl shadow-lg border border-gold-300/20"
              >
                Enquire Now
              </a>
              <a
                href="https://www.instagram.com/aredh_skincare"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center flex items-center justify-center gap-2 px-5 py-2.5 bg-stone-900 border border-stone-800 text-pink-300 hover:text-pink-200 font-mono text-xs tracking-wider rounded-xl transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                @aredh_skincare
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
