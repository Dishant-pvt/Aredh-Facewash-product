import { Sparkles, ArrowDown, ShieldCheck, Heart, Sparkle, Award } from "lucide-react";

interface HeroProps {
  onEnquireClick: () => void;
}

export default function Hero({ onEnquireClick }: HeroProps) {
  const handleScrollTo = (id: string) => {
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

  const trustBadges = [
    { text: "SLS Free", icon: ShieldCheck },
    { text: "Paraben Free", icon: ShieldCheck },
    { text: "100% Ayurvedic Formula", icon: Sparkles },
    { text: "Dermatologically Tested", icon: Award },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-stone-950 flex flex-col justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Decorative atmospheric backgrounds */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gold-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gold-500/5 blur-[100px] pointer-events-none" />
      
      {/* Subtle organic texture pattern */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-8">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-gold-300/10 border border-gold-300/20 text-gold-300 text-xs font-mono tracking-widest uppercase">
              <Sparkle className="w-3.5 h-3.5 animate-pulse text-gold-400" />
              Pure Wellness Experience
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal font-serif tracking-tight text-stone-100 leading-tight">
                Premium Ayurvedic <br className="hidden sm:block" />
                <span className="text-gold-300 relative inline-block">
                  Herbal Cleanser
                  <span className="absolute left-0 bottom-0.5 w-full h-[1px] bg-gold-400/30" />
                </span>
              </h1>
              <p className="text-base sm:text-lg font-mono text-gold-200 tracking-wider font-light uppercase">
                Cleanse. Refresh. Revive.
              </p>
            </div>

            <p className="text-stone-300 font-sans text-base sm:text-lg max-w-xl leading-relaxed">
              The perfect harmony of ancient Ayurvedic wisdom and modern skincare science.
              Crafted from 12 potent botanical extracts to gently detoxify, nourish,
              and unveil your skin&apos;s natural radiant glow.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onEnquireClick}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-stone-950 font-sans font-bold text-sm uppercase tracking-wider rounded-full shadow-lg shadow-gold-500/10 hover:shadow-gold-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Enquire to Buy
                <Sparkles className="w-4 h-4 text-stone-950" />
              </button>

              <button
                onClick={() => handleScrollTo("ingredients")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold-300/30 hover:border-gold-300/60 bg-stone-900/40 hover:bg-stone-900/80 text-stone-100 font-sans font-semibold text-sm uppercase tracking-wider rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Explore Ingredients
                <ArrowDown className="w-4 h-4 text-gold-300" />
              </button>
            </div>

            {/* Horizontal Divider */}
            <div className="h-[1px] w-full bg-stone-900" />

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-1">
              {trustBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl glass-card hover:border-gold-400/40 hover:shadow-[0_4px_20px_rgba(34,211,238,0.06)] transition-all duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-gold-300/10 flex items-center justify-center shrink-0">
                    <badge.icon className="w-3.5 h-3.5 text-gold-300" />
                  </div>
                  <span className="text-stone-300 text-xs font-sans font-medium tracking-wide">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Right Media (Atmospheric Mockup bottle) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
            {/* Visual Backlight */}
            <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-gold-500/10 to-transparent blur-3xl pointer-events-none" />

            {/* Premium Gold Framed Canvas */}
            <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-gold-300/20 group">
              {/* Product Background Image */}
              <img
                src="/img/product1.png"
                alt="AREDH Herbal Cleanser Bottle Lifestyle Setup"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[4s] filter brightness-[0.7] contrast-[1.05]"
                referrerPolicy="no-referrer"
              />

              {/* Luxury Overlay Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />

              {/* Floating Product Tag Info */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-card border border-gold-400/25 flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gold-300 font-serif text-lg tracking-wide">AREDH Cleanser</span>
                  <span className="text-stone-400 font-mono text-[10px] uppercase tracking-wider bg-gold-500/10 px-2 py-0.5 rounded border border-gold-400/20">100% Ayurvedic</span>
                </div>
                <div className="h-[1px] w-full bg-stone-900/40" />
                <p className="text-stone-300 text-xs font-sans leading-relaxed">
                  Infused with premium Sandalwood, Turmeric, Licorice, and 9 other pure botanical herbs.
                </p>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] text-stone-400 font-mono">AVAILABLE SIZES:</span>
                  <span className="text-xs text-gold-200 font-semibold font-mono tracking-wide">50ml | 100ml | 200ml</span>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold-400/40 rounded-tl pointer-events-none" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-gold-400/40 rounded-tr pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-gold-400/40 rounded-bl pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold-400/40 rounded-br pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
