import { Compass, Sparkles, Smile, RefreshCw } from "lucide-react";

export default function HowToUse() {
  const steps = [
    {
      number: "01",
      title: "Wet & Awaken",
      desc: "Splash lukewarm water gently onto your face to open skin pores. Squeeze a small, pea-sized dollop of AREDH cleanser onto your clean fingertips.",
      icon: Compass,
      time: "Morning & Night"
    },
    {
      number: "02",
      title: "Massage & Infuse",
      desc: "Gently massage in circular upward motions across your cheeks, forehead, nose, and neck. Lather will be light, creamy, and deeply aromatic.",
      icon: Smile,
      time: "Massage for 60 Seconds"
    },
    {
      number: "03",
      title: "Rinse & Reveal",
      desc: "Rinse thoroughly with cold water to tighten skin pores. Pat dry with a fresh soft towel and observe an instant cool, bright, non-tight complexion.",
      icon: RefreshCw,
      time: "Feel the Calm Glow"
    }
  ];

  return (
    <section
      id="ritual"
      className="py-24 bg-stone-950 text-stone-100 border-b border-stone-900 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[150px] h-[150px] rounded-full bg-gold-500/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-stone-900/40 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-300 font-mono text-[11px] font-bold tracking-widest uppercase inline-block">
            Daily Skin Sadhana
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal font-serif text-stone-100 tracking-tight leading-tight">
            The 3-Step Ayurvedic Cleansing Ritual
          </h2>
          <div className="h-[2px] w-16 bg-gold-400 mx-auto" />
          <p className="text-stone-400 font-sans text-sm leading-relaxed max-w-lg mx-auto">
            Take 60 seconds twice a day to detoxify your skin and awaken your facial channels.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-gold-300/10 via-gold-400/40 to-gold-300/10 -translate-y-12 z-0" />

          {steps.map((step, idx) => {
            return (
              <div
                key={idx}
                className="relative flex flex-col items-center text-center group z-10"
              >
                {/* Large Background Step Number */}
                <span className="absolute -top-10 text-8xl font-serif font-black text-stone-900/60 select-none group-hover:text-gold-400/10 transition-colors duration-300 pointer-events-none z-0">
                  {step.number}
                </span>

                {/* Icon Container */}
                <div className="relative w-16 h-16 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 shadow-md group-hover:border-gold-400 group-hover:text-gold-300 transition-colors duration-300 z-10 mb-6">
                  <step.icon className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  {/* Step tiny indicator */}
                  <span className="absolute -bottom-1 right-[-4px] w-5 h-5 rounded-full bg-gold-400 text-stone-950 font-mono text-[10px] font-bold flex items-center justify-center border border-stone-900">
                    {idx + 1}
                  </span>
                </div>

                {/* Text Blocks */}
                <div className="space-y-3 z-10">
                  <span className="text-[10px] font-mono font-bold text-gold-300 uppercase tracking-wider block">
                    {step.time}
                  </span>
                  <h3 className="text-xl font-serif font-medium text-stone-100 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-stone-300 font-sans text-sm leading-relaxed max-w-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
