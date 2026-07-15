import { Flower2, Heart, ShieldAlert, Sparkles, Check } from "lucide-react";

export default function BrandStory() {
  const values = [
    "Sourced directly from certified organic organic farms in India",
    "Hand-selected botanical herbs harvested at peak potency",
    "Processed using strict temperature-controlled classical decoction methods",
    "Formulated carefully to balance all three skin doshas (Vata, Pitta, Kapha)"
  ];

  return (
    <section
      id="brand-story"
      className="relative py-24 bg-stone-950 text-stone-100 overflow-hidden border-t border-stone-900"
    >
      {/* Decorative floral backdrop */}
      <div className="absolute right-[-10%] top-[10%] w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute left-[-5%] bottom-[-5%] w-[300px] h-[300px] rounded-full bg-stone-900/40 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Brand Story Left Media */}
          <div className="lg:col-span-6 relative order-last lg:order-first">
            {/* Ambient Shadow Box */}
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-gold-500 to-gold-300 opacity-10 blur-xl pointer-events-none" />

            {/* Core Photo */}
            <div className="relative rounded-2xl overflow-hidden border border-gold-300/15 shadow-2xl bg-stone-900 aspect-video group">
              <img
                src="/img/product1.png"
                alt="AREDH Herbal Cleanser elegant matte black pump bottle on a dark reflective pedestal with glowing cyan-blue neon glass panels"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[3s]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlay Stat Card */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl glass-card shadow-lg border-gold-400/20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-400/15 flex items-center justify-center shrink-0 border border-gold-400/20">
                  <Flower2 className="w-5 h-5 text-gold-300 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-100 font-sans">100% Honest Formulation</h4>
                  <p className="text-[10px] text-stone-400 font-sans mt-0.5">Tested for purity, toxicity, and irritants.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Story Right Content */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-gold-400 font-mono text-xs uppercase tracking-[0.2em] font-semibold block">
                The Heritage of AREDH
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif text-stone-100 tracking-tight leading-tight">
                Where Ancient Wisdom <br className="hidden sm:block" />
                Meets Skincare Science
              </h2>
            </div>

            <div className="h-[2px] w-16 bg-gold-400" />

            <div className="space-y-6 text-stone-300 font-sans text-base leading-relaxed">
              <p>
                In the heart of classical Ayurvedic texts lies a secret to timeless, glowing skin: 
                the balanced purification of skin cells. At <strong>AREDH</strong>, we resurrected 
                these sacred treatises, blending premium, hand-harvested Himalayan roots 
                with advanced dermatological formulation protocols.
              </p>
              <p>
                The <strong>AREDH Herbal Cleanser</strong> is not just a soap; it is a mindful daily wellness 
                ritual. We believe that cleansing should never feel like strip-clearing your protective skin barrier. 
                Our formulation is carefully crafted to wash away environmental toxins, smoke, and excess oil 
                while actively sealing in essential hydration and reinforcing cellular health.
              </p>
            </div>

            {/* List of Values */}
            <div className="space-y-3 pt-2">
              {values.map((val, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-gold-300" />
                  </div>
                  <span className="text-stone-300 font-sans text-sm font-medium">
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
