import { useState } from "react";
import { FAQS } from "../data";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section
      id="faqs"
      className="py-24 bg-stone-950 text-stone-100 border-b border-stone-900 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-[200px] h-[200px] rounded-full bg-gold-500/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-stone-900/40 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-300 font-mono text-[11px] font-bold tracking-widest uppercase inline-block">
            Skincare Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal font-serif text-stone-100 tracking-tight leading-tight">
            Frequently Answered Concerns
          </h2>
          <div className="h-[2px] w-16 bg-gold-400 mx-auto" />
          <p className="text-stone-400 font-sans text-sm leading-relaxed">
            Have questions about Ayurvedic formulations, patch testing, or bulk shipping? We have compiled detailed clarifications.
          </p>
        </div>

        {/* FAQs List Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = activeId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-gold-400 bg-gold-400/10 shadow-2xl backdrop-blur-md"
                    : "border-stone-800/50 glass-card hover:border-gold-400/25"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer outline-none select-none"
                >
                  <div className="flex items-start gap-4 pr-4">
                    <HelpCircle className={`w-5 h-5 mt-0.5 shrink-0 ${isOpen ? "text-gold-300" : "text-stone-400"}`} />
                    <span className={`font-serif font-medium text-base sm:text-lg transition-colors duration-250 ${isOpen ? "text-gold-300" : "text-stone-100"}`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className="shrink-0 text-stone-400">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-gold-300" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Answer block with transition */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[300px] border-t border-stone-800" : "max-h-0"
                  }`}
                >
                  <div className="p-6 text-stone-300 font-sans text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
