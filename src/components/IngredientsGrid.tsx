import React, { useState, useEffect } from "react";
import { INGREDIENTS } from "../data";
import { Ingredient } from "../types";
import { X, Sparkles, Sun, Shield, Flame, Activity, Droplet, Maximize2, Award, Leaf, Heart, Flower2, Check, ArrowRight, BookOpen, FlaskConical, ShieldCheck } from "lucide-react";

// Map icon string to component
const IconMap: { [key: string]: React.ComponentType<any> } = {
  Sparkles,
  Sun,
  Shield,
  FlameKindling: Flame,
  Activity,
  Droplet,
  Maximize2,
  Award,
  Leaf,
  Heart,
  Flower2,
  Check,
  FlaskConical,
  ShieldCheck
};

export default function IngredientsGrid() {
  const [selectedIng, setSelectedIng] = useState<Ingredient | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Prevent main site background scrolling when ingredient modal is open
  useEffect(() => {
    if (selectedIng) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIng]);

  // Handle ESC key to close ingredient modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedIng) {
        setSelectedIng(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIng]);

  return (
    <section
      id="ingredients"
      className="py-24 bg-stone-950 text-stone-100 relative overflow-hidden"
    >
      {/* Background radial atmosphere */}
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gold-900/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gold-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-400/20 text-gold-300 font-mono text-[10px] tracking-widest uppercase">
            <BookOpen className="w-3.5 h-3.5 text-gold-400" />
            Sacred Botanicals
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-serif tracking-tight leading-tight">
            13 Sacred Ingredients <br />
            <span className="gold-gradient-text font-serif">What&apos;s Inside AREDH</span>
          </h2>
          <div className="h-[2px] w-24 bg-gold-400 mx-auto" />
          <p className="text-stone-400 font-sans text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            We practice complete ingredient transparency. Here are the 13 active Ayurvedic herbs and natural botanicals 
            that make up our cooling, skin-healing herbal cleanser.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {INGREDIENTS.map((ing) => {
            const IconComponent = IconMap[ing.iconName] || Sparkles;
            return (
              <div
                key={ing.id}
                onClick={() => setSelectedIng(ing)}
                onMouseEnter={() => setHoveredId(ing.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative rounded-2xl glass-panel glass-panel-hover p-5 flex flex-col items-center text-center cursor-pointer transition-all duration-300 shadow-lg"
              >
                {/* Circular image framed with gold accent */}
                <div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-b from-gold-300/20 to-stone-800 mb-4 group-hover:from-gold-300/60 transition-all duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden bg-stone-950">
                    <img
                      src={ing.imageUrl}
                      alt={ing.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Small gold icon badge on circle */}
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-gold-500 text-stone-950 flex items-center justify-center border-2 border-stone-950 shadow">
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Name & Sanskrit Name */}
                <div className="space-y-1 mb-2">
                  <h3 className="text-stone-100 font-serif text-base tracking-wide font-medium">
                    {ing.name}
                  </h3>
                  {ing.sanskritName && (
                    <span className="text-gold-400 font-mono text-[10px] tracking-widest uppercase font-semibold">
                      {ing.sanskritName}
                    </span>
                  )}
                </div>

                {/* Short Benefit */}
                <p className="text-stone-400 font-sans text-xs leading-relaxed mt-2 line-clamp-3">
                  {ing.shortDesc}
                </p>

                {/* "Learn More" link appearing on hover */}
                <div className="mt-auto pt-4 flex items-center gap-1.5 text-gold-300 text-[11px] font-semibold uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                  Full Benefits
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Expandable Ingredient Overlay Modal */}
        {selectedIng && (
          <div 
            onClick={() => setSelectedIng(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-fade-in overscroll-contain"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-2xl bg-stone-900/95 backdrop-blur-xl border border-gold-400/30 shadow-2xl overflow-hidden text-left max-h-[92vh] flex flex-col animate-zoom-in overscroll-contain"
            >
              
              {/* Outer Decorative Gold Line Frame */}
              <div className="absolute inset-2 border border-gold-400/10 pointer-events-none rounded-xl" />

              {/* Close Button Top Right */}
              <button
                onClick={() => setSelectedIng(null)}
                className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-stone-900 border border-stone-800 hover:border-gold-400/40 text-stone-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Catalog Page Header: Crest & Logo */}
              <div className="pt-8 pb-4 text-center shrink-0 relative">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <div className="w-6 h-6 rounded-full border border-gold-400/40 flex items-center justify-center">
                    <Flower2 className="w-3.5 h-3.5 text-gold-400" />
                  </div>
                </div>
                <span className="text-lg font-bold tracking-[0.25em] text-gold-300 font-serif block leading-none">
                  AREDH
                </span>
                <span className="text-[9px] font-mono tracking-[0.3em] text-stone-400 uppercase block mt-1.5 leading-none">
                  Ayurveda
                </span>
                <div className="flex items-center justify-center gap-2 mt-3 opacity-60">
                  <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-gold-400" />
                  <span className="text-gold-400 text-[10px]">⚜</span>
                  <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-gold-400" />
                </div>
              </div>

              {/* Main Ingredient Title Headers */}
              <div className="px-6 pb-2 shrink-0 text-center">
                <h3 className="text-2xl sm:text-3.5xl font-serif text-gold-400 tracking-widest font-normal uppercase leading-tight">
                  {selectedIng.name}
                </h3>
                {selectedIng.headerTitle && (
                  <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-stone-200 uppercase block mt-1 font-semibold">
                    {selectedIng.headerTitle}
                  </span>
                )}
                <div className="h-[1px] w-20 bg-gold-400/30 mx-auto mt-3" />
              </div>

              {/* Scrollable Content Container (2-Column Grid on Desktop) */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-grow relative z-10 overscroll-contain">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Framed Portrait Image & Sanskrit */}
                  <div className="md:col-span-5 flex flex-col items-center space-y-4">
                    <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-gold-400/20 p-1.5 bg-stone-900 shadow-xl">
                      <div className="w-full h-full rounded-lg overflow-hidden relative">
                        <img
                          src={selectedIng.imageUrl}
                          alt={selectedIng.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/30 to-transparent pointer-events-none" />
                      </div>
                    </div>

                    {selectedIng.sanskritName && (
                      <div className="px-4 py-1.5 rounded-full bg-gold-500/5 border border-gold-400/20 text-center">
                        <span className="text-stone-400 font-serif italic text-xs block">
                          Sanskrit Name:{" "}
                          <span className="text-gold-300 font-semibold font-mono not-italic uppercase tracking-wider text-[11px] ml-1">
                            {selectedIng.sanskritName}
                          </span>
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Descriptions & Detailed Benefits */}
                  <div className="md:col-span-7 space-y-6 text-left">
                    {/* Paragraph description matching catalog */}
                    <p className="text-stone-300 font-sans text-sm sm:text-[14.5px] leading-relaxed">
                      {selectedIng.shortDesc}
                    </p>

                    <div className="h-[1px] w-full bg-stone-850" />

                    {/* Benefits List */}
                    <div className="space-y-4">
                      <h4 className="text-[11px] font-mono tracking-[0.2em] text-gold-400 uppercase font-bold border-b border-stone-800 pb-1.5 inline-block">
                        BENEFITS
                      </h4>
                      <div className="space-y-2.5">
                        {selectedIng.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-gold-400/10 flex items-center justify-center shrink-0 mt-0.5 border border-gold-400/20">
                              <Check className="w-3 h-3 text-gold-300" />
                            </div>
                            <span className="text-stone-200 font-sans text-[13.5px] leading-relaxed">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Elegant Catalog Callout Quote Box */}
                    {selectedIng.quote && (
                      <div className="relative rounded-xl border border-gold-400/20 p-4 bg-gradient-to-tr from-gold-500/[0.04] to-transparent text-center overflow-hidden">
                        <span className="absolute -top-1 -left-1 text-4xl text-gold-400/10 font-serif select-none pointer-events-none">“</span>
                        <p className="text-gold-300 font-serif italic text-sm leading-relaxed px-2 relative z-10">
                          {selectedIng.quote}
                        </p>
                        <span className="absolute -bottom-4 -right-1 text-4xl text-gold-400/10 font-serif select-none pointer-events-none">”</span>
                      </div>
                    )}

                  </div>

                </div>
              </div>

              {/* Bottom Catalog Footer Quality Badges */}
              <div className="bg-stone-950 px-6 py-5 border-t border-gold-400/15 shrink-0 z-10">
                <div className="grid grid-cols-5 gap-1.5 text-center items-start divide-x divide-stone-800">
                  
                  {/* Badge 1: Natural Ingredients */}
                  <div className="flex flex-col items-center justify-center px-1">
                    <Leaf className="w-4 h-4 text-gold-400 mb-1" />
                    <span className="text-[7.5px] sm:text-[9px] font-mono tracking-wider text-stone-400 uppercase font-semibold leading-tight">
                      Natural
                    </span>
                    <span className="text-[6.5px] sm:text-[7.5px] font-mono tracking-wider text-stone-500 uppercase leading-none mt-0.5">
                      Ingredients
                    </span>
                  </div>

                  {/* Badge 2: Ayurvedic Wisdom */}
                  <div className="flex flex-col items-center justify-center px-1">
                    <Flower2 className="w-4 h-4 text-gold-400 mb-1" />
                    <span className="text-[7.5px] sm:text-[9px] font-mono tracking-wider text-stone-400 uppercase font-semibold leading-tight">
                      Ayurvedic
                    </span>
                    <span className="text-[6.5px] sm:text-[7.5px] font-mono tracking-wider text-stone-500 uppercase leading-none mt-0.5">
                      Wisdom
                    </span>
                  </div>

                  {/* Badge 3: Science Backed */}
                  <div className="flex flex-col items-center justify-center px-1">
                    <FlaskConical className="w-4 h-4 text-gold-400 mb-1" />
                    <span className="text-[7.5px] sm:text-[9px] font-mono tracking-wider text-stone-400 uppercase font-semibold leading-tight">
                      Science
                    </span>
                    <span className="text-[6.5px] sm:text-[7.5px] font-mono tracking-wider text-stone-500 uppercase leading-none mt-0.5">
                      Backed
                    </span>
                  </div>

                  {/* Badge 4: Safe & Gentle */}
                  <div className="flex flex-col items-center justify-center px-1">
                    <Heart className="w-4 h-4 text-gold-400 mb-1" />
                    <span className="text-[7.5px] sm:text-[9px] font-mono tracking-wider text-stone-400 uppercase font-semibold leading-tight">
                      Safe &amp;
                    </span>
                    <span className="text-[6.5px] sm:text-[7.5px] font-mono tracking-wider text-stone-500 uppercase leading-none mt-0.5">
                      Gentle
                    </span>
                  </div>

                  {/* Badge 5: Dermatologically Tested */}
                  <div className="flex flex-col items-center justify-center px-1">
                    <ShieldCheck className="w-4 h-4 text-gold-400 mb-1" />
                    <span className="text-[7.5px] sm:text-[9px] font-mono tracking-wider text-stone-400 uppercase font-semibold leading-tight">
                      Dermato-
                    </span>
                    <span className="text-[6.5px] sm:text-[7.5px] font-mono tracking-wider text-stone-500 uppercase leading-none mt-0.5 animate-pulse">
                      Tested
                    </span>
                  </div>

                </div>
              </div>

              {/* Close Button Bottom Accent Bar */}
              <div className="bg-stone-900 px-6 py-3 border-t border-stone-850 flex justify-end shrink-0 z-10">
                <button
                  onClick={() => setSelectedIng(null)}
                  className="px-4 py-1.5 rounded-lg border border-gold-400/30 hover:border-gold-400/60 bg-gold-500/10 hover:bg-gold-500/20 text-gold-300 font-sans font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close Catalog Page
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
