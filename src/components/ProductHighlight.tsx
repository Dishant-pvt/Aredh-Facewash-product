import { useState } from "react";
import { SIZES } from "../data";
import { Check, ShieldCheck, ShoppingBag, Star } from "lucide-react";

interface ProductHighlightProps {
  onSizeSelect: (size: string) => void;
  selectedSize: string;
}

export default function ProductHighlight({ onSizeSelect, selectedSize }: ProductHighlightProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const productImages = [
    {
      url: "/img/product1.png",
      caption: "Front View — Amber protective bottle packaging"
    },
    {
      url: "/img/product1.png",
      caption: "Lifestyle — Prepared on natural river stones"
    },
    {
      url: "/img/product1.png",
      caption: "Ingredients — Infused with fresh botanical herbs"
    }
  ];

  const handleSizeClick = (sizeId: string) => {
    onSizeSelect(sizeId);
  };

  const benefits = [
    "100% Free from Parabens, SLS, Silicones, and artificial foaming agents.",
    "Formulated in a gentle base of Coco Glucoside to protect sensitive skin barriers.",
    "Regulates oily T-zones while deeply hydrating dry cheeks and necks.",
    "Dermatologically tested, non-comedogenic (won't clog pores), and hypoallergenic.",
    "Organic Ayurvedic aroma from pure sandalwood, turmeric, and essential oils."
  ];

  return (
    <section
      id="product"
      className="py-24 bg-stone-950 text-stone-100 border-t border-stone-900 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-stone-900/40 blur-[100px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-[200px] h-[200px] rounded-full bg-gold-500/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-300 font-mono text-[11px] font-bold tracking-widest uppercase inline-block">
            Sulfate-Free Cleansing
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal font-serif text-stone-100 tracking-tight leading-tight">
            Discover the Perfect Size <br />
            For Your Skincare Ritual
          </h2>
          <p className="text-stone-400 font-sans text-sm leading-relaxed">
            Choose from three tailored volumes designed for trial, daily routine, or complete wellness.
            Selecting a size will pre-configure your buying inquiry form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Gallery Left - Product Images */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-gold-300/10 shadow-2xl aspect-square bg-stone-900 group">
              <img
                src={productImages[activeImageIdx].url}
                alt="AREDH Cleanser Gallery Zoom"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-stone-950/80 backdrop-blur-md px-3.5 py-2 rounded-lg border border-gold-300/10 text-stone-200 text-xs font-sans text-center">
                {productImages[activeImageIdx].caption}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative rounded-xl overflow-hidden aspect-square border transition-all cursor-pointer ${
                    activeImageIdx === idx
                      ? "border-gold-400 scale-[1.02] shadow-xl ring-1 ring-gold-400/35"
                      : "border-stone-800/50 hover:border-stone-700 bg-stone-900/20 backdrop-blur-sm"
                  }`}
                >
                  <img
                    src={img.url}
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {activeImageIdx === idx && (
                    <div className="absolute inset-0 bg-gold-400/10 pointer-events-none" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Configuration & Details Right */}
          <div className="lg:col-span-6 text-left space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gold-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
                <span className="text-stone-400 text-xs font-mono ml-1">4.9/5 (180+ verified inquiries)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-normal font-serif text-stone-100 leading-snug">
                AREDH Herbal Cleanser
              </h3>
              <p className="text-stone-300 font-sans text-sm leading-relaxed">
                Packaged in durable dark amber bottles which protect active biological nutrients from solar light decomposition.
                Features a premium drip-lock pump mechanism for precise dosage control.
              </p>
            </div>

            {/* Selectable Sizes Grid */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-wider text-stone-400 block uppercase">
                Select Your Size Option:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {SIZES.map((sizeObj) => {
                  const isSelected = selectedSize === sizeObj.id;
                  return (
                    <button
                      key={sizeObj.id}
                      onClick={() => handleSizeClick(sizeObj.id)}
                      className={`relative p-5 rounded-xl border text-left flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? "border-gold-400 bg-gold-400/10 shadow-2xl ring-1 ring-gold-400/40"
                          : "border-stone-800/40 glass-card hover:bg-stone-900/40 hover:border-gold-400/20"
                      }`}
                    >
                      {/* Top Row Badge */}
                      <span
                        className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full self-start mb-3 ${
                          isSelected
                            ? "bg-gold-400/20 text-gold-300 border border-gold-400/20"
                            : "bg-stone-800 text-stone-400"
                        }`}
                      >
                        {sizeObj.badge}
                      </span>

                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl font-bold font-serif text-stone-100">{sizeObj.size}</span>
                        </div>
                        <h4 className="text-xs font-bold text-stone-200 font-sans mt-1">{sizeObj.name}</h4>
                        <p className="text-[11px] text-stone-400 font-sans mt-1 leading-normal line-clamp-2">
                          {sizeObj.desc}
                        </p>
                      </div>

                      {/* Selected Indicator Check */}
                      {isSelected && (
                        <div className="absolute top-4 right-4 w-5 h-5 rounded-full bg-gold-400 flex items-center justify-center">
                          <Check className="w-3 h-3 text-stone-950" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Core Benefits Bullets */}
            <div className="space-y-4 pt-2">
              <span className="text-xs font-mono font-bold tracking-wider text-stone-400 block uppercase">
                Product Core Values:
              </span>
              <div className="space-y-3">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-gold-300" />
                    </div>
                    <p className="text-stone-300 font-sans text-sm font-medium">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fast Action Enquire Button */}
            <div className="pt-2">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-stone-950 font-sans font-bold text-xs uppercase tracking-wider rounded-full shadow-lg hover:shadow-gold-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <ShoppingBag className="w-4 h-4 text-stone-950" />
                Select {SIZES.find(s => s.id === selectedSize)?.size || "100ml"} and Pre-fill Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
