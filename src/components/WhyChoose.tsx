import React from "react";
import { WHY_AREDH } from "../data";
import { Droplet, Brain, ShieldCheck, Heart, Sparkles, Leaf, Award } from "lucide-react";

const IconMap: { [key: string]: React.ComponentType<any> } = {
  Droplet,
  Brain,
  ShieldCheck,
  Heart,
  Sparkles,
  Leaf
};

export default function WhyChoose() {
  return (
    <section
      id="why-aredh"
      className="py-24 bg-stone-950 text-stone-100 border-t border-b border-stone-900 relative overflow-hidden"
    >
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-gold-500/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-stone-900/30 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-300 font-mono text-[11px] font-bold tracking-widest uppercase inline-block">
            Purity & Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal font-serif text-stone-100 tracking-tight leading-tight">
            Why Skincare Connoisseurs <br />
            Choose AREDH
          </h2>
          <div className="h-[2px] w-16 bg-gold-400 mx-auto" />
          <p className="text-stone-400 font-sans text-sm leading-relaxed max-w-lg mx-auto">
            We are dedicated to honest labelling, uncompromising purity, and skin health that endures.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_AREDH.map((item, idx) => {
            const IconComponent = IconMap[item.iconName] || Sparkles;
            return (
              <div
                key={idx}
                className="group p-8 rounded-2xl glass-panel glass-panel-hover flex flex-col items-start text-left"
              >
                {/* Icon Badge */}
                <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-300 mb-6 group-hover:bg-gold-500 group-hover:text-stone-950 transition-colors duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Text Block */}
                <h3 className="text-lg font-serif font-medium text-stone-100 mb-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-stone-300 font-sans text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-16 p-8 rounded-2xl glass-card border border-gold-400/20 grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-between shadow-2xl">
          <div className="text-left md:border-r border-stone-800 pr-6">
            <h4 className="text-gold-300 font-serif text-lg leading-tight mb-1">Guaranteed Transparency</h4>
            <p className="text-stone-400 text-xs font-sans">We list every single surfactant, botanical extract, and preservative.</p>
          </div>
          <div className="text-left md:border-r border-stone-800 pr-6">
            <h4 className="text-gold-300 font-serif text-lg leading-tight mb-1">Dermatologically Safe</h4>
            <p className="text-stone-400 text-xs font-sans">Patch-tested under medical control to ensure zero allergy triggers.</p>
          </div>
          <div className="text-left">
            <h4 className="text-gold-300 font-serif text-lg leading-tight mb-1">Cruelty Free Practice</h4>
            <p className="text-stone-400 text-xs font-sans">Our products and ingredients are never ever tested on animals.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
