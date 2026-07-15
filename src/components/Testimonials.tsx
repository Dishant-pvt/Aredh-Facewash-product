import React, { useState, useEffect, useRef } from "react";
import { TESTIMONIALS } from "../data";
import { Star, Quote, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Get total slides/testimonials
  const totalItems = TESTIMONIALS.length;

  // Scroll to a specific testimonial index smoothly
  const scrollToCard = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cards = container.children;
    if (cards.length > 0 && cards[index]) {
      const card = cards[index] as HTMLElement;
      const containerWidth = container.clientWidth;
      const cardWidth = card.clientWidth;
      
      // Center the active card in the scroll view
      const targetScrollLeft = card.offsetLeft - (containerWidth - cardWidth) / 2;
      
      container.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  // Auto-scroll loop
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => {
          const nextIndex = (prev + 1) % totalItems;
          scrollToCard(nextIndex);
          return nextIndex;
        });
      }, 3500); // Rotate every 3.5 seconds
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, totalItems]);

  // Handle manual scroll detection to update active dot indicator
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const containerWidth = container.clientWidth;
    const scrollLeft = container.scrollLeft;
    
    // Find the card closest to the center
    const cards = Array.from(container.children) as HTMLElement[];
    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const containerCenter = scrollLeft + containerWidth / 2;
      const distance = Math.abs(cardCenter - containerCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + totalItems) % totalItems;
    scrollToCard(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % totalItems;
    scrollToCard(nextIndex);
  };

  return (
    <section
      id="reviews"
      className="py-24 bg-stone-950 text-stone-100 border-b border-stone-900 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute top-1/2 right-0 w-[200px] h-[200px] rounded-full bg-gold-500/5 blur-[80px] pointer-events-none" />
      <div className="absolute top-10 left-0 w-[300px] h-[300px] rounded-full bg-stone-900/40 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-300 font-mono text-[11px] font-bold tracking-widest uppercase inline-block">
            Customer Devotion
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal font-serif text-stone-100 tracking-tight leading-tight">
            Loved By Skin Enthusiasts
          </h2>
          <div className="h-[2px] w-16 bg-gold-400 mx-auto" />
          <p className="text-stone-400 font-sans text-sm leading-relaxed max-w-lg mx-auto">
            Discover real experiences from individuals who transitioned to our sulfate-free, botanical Ayurvedic formula.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel px-2">
          
          {/* Scroll Track */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8 pt-4 scroll-smooth"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {TESTIMONIALS.map((t, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={t.id}
                  className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-center relative p-8 rounded-2xl border transition-all duration-500 flex flex-col justify-between ${
                    isActive 
                      ? "border-gold-400/50 bg-stone-900/60 backdrop-blur-md shadow-[0_8px_32px_rgba(34,211,238,0.1)] scale-[1.01]" 
                      : "border-stone-800/50 glass-card hover:border-gold-400/25 hover:bg-stone-900/40"
                  }`}
                >
                  {/* Quote Icon Overlay */}
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-stone-800/20 pointer-events-none z-0" />

                  <div className="space-y-6 relative z-10 text-left">
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 text-gold-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                      ))}
                    </div>

                    {/* Quote text */}
                    <p className="text-stone-300 font-sans text-sm sm:text-base leading-relaxed italic min-h-[110px]">
                      &ldquo;{t.text}&rdquo;
                    </p>

                    {/* Shared review image if available */}
                    {t.imageUrl && (
                      <div className="mt-4 overflow-hidden rounded-xl border border-stone-800 bg-stone-950/40 max-w-[220px]">
                        <img
                          src={t.imageUrl}
                          alt="Shared product review photo"
                          className="w-full h-auto object-cover max-h-[160px] opacity-90 hover:opacity-100 transition-opacity duration-300"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                  </div>

                  {/* User info row */}
                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-stone-800/80 relative z-10 text-left">
                    {/* Avatar */}
                    {t.avatarUrl ? (
                      <img
                        src={t.avatarUrl}
                        alt={t.name}
                        className="w-11 h-11 rounded-full object-cover shrink-0 border border-gold-400/20 shadow-inner"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-11 h-11 rounded-full bg-gold-400/10 text-gold-300 font-bold font-serif text-sm flex items-center justify-center shrink-0 border border-gold-400/20 shadow-inner">
                        {t.avatarInitials}
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-stone-100 font-sans truncate">{t.name}</h4>
                      <p className="text-xs text-stone-400 font-sans mt-0.5 truncate">{t.location}</p>
                    </div>

                    {/* Verified badge */}
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold tracking-wider uppercase border border-emerald-500/20 shrink-0 select-none">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Nav Buttons (Hidden on mobile, beautiful gold icons on desktop) */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonials"
            className="absolute left-[-20px] top-[45%] -translate-y-1/2 w-12 h-12 rounded-full bg-stone-900 border border-stone-800 hover:border-gold-400 text-stone-400 hover:text-gold-300 flex items-center justify-center transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 pointer-events-auto hidden sm:flex shadow-2xl z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next testimonials"
            className="absolute right-[-20px] top-[45%] -translate-y-1/2 w-12 h-12 rounded-full bg-stone-900 border border-stone-800 hover:border-gold-400 text-stone-400 hover:text-gold-300 flex items-center justify-center transition-all duration-300 opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 pointer-events-auto hidden sm:flex shadow-2xl z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Indicators/Dots at bottom */}
        <div className="flex justify-center items-center gap-2.5 mt-6 select-none relative z-10">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                index === activeIndex 
                  ? "w-8 bg-gold-400 shadow-[0_0_8px_rgba(212,163,89,0.4)]" 
                  : "w-2.5 bg-stone-800 hover:bg-stone-700"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
