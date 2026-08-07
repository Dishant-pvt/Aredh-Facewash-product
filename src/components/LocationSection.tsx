import React from "react";
import { MapPin, Phone, Mail, Instagram, ExternalLink, Clock, Navigation, Sparkles, Building2 } from "lucide-react";

export default function LocationSection() {
  const mapSearchUrl = "https://maps.app.goo.gl/tcCQ36dyFtKBBMdd6";
  const embeddedMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.44227105177254!2d70.04382273392181!3d22.45096765373771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395715fc3ae61bbf%3A0x55d57dd1e3729676!2sAredh!5e0!3m2!1sen!2sin!4v1786080785136!5m2!1sen!2sin" ;

  return (
    <section id="location" className="py-20 bg-stone-950 relative overflow-hidden border-t border-stone-900">
      {/* Soft Background Accent Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-300 font-mono text-xs uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5" />
            <span>Headquarters & Dispatch</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-100 font-normal tracking-tight">
            Our <span className="italic text-gold-300">Location</span>
          </h2>
          <p className="font-sans text-stone-400 text-sm sm:text-base leading-relaxed">
            Formulated and dispatched with care from our facility in Jamnagar, Gujarat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Google Map Embed */}
          <div className="lg:col-span-7 bg-stone-900/60 border border-stone-800 rounded-3xl p-3 sm:p-4 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
            <div className="relative w-full h-[340px] sm:h-[400px] rounded-2xl overflow-hidden border border-stone-800/80 bg-stone-950">
              <iframe
                title="AREDH Location Map - Jamnagar Gujarat"
                src={embeddedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.08) saturate(1.1)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[25%] hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Overlay Badge over map */}
              <div className="absolute top-4 left-4 bg-stone-950/90 backdrop-blur-md border border-gold-400/30 px-3.5 py-2 rounded-xl text-xs font-mono text-stone-200 flex items-center gap-2 shadow-lg">
                <MapPin className="w-4 h-4 text-gold-400 animate-bounce" />
                <span>Gokul Nagar, Jamnagar — 361006</span>
              </div>
            </div>

            <div className="mt-4 px-2 sm:px-4 pb-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
                <Navigation className="w-4 h-4 text-gold-400" />
                <span>GPS Coordinates: 22.4509° N, 70.0439° E</span>
              </div>
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gold-400/10 hover:bg-gold-400/20 border border-gold-400/30 text-gold-300 font-mono text-xs rounded-xl transition-all hover:scale-105"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Location Contact Card & Hours */}
          <div className="lg:col-span-5 bg-stone-900/60 border border-stone-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-8 shadow-2xl">
            
            <div className="space-y-6">
              <div className="border-b border-stone-800 pb-4">
                <h3 className="font-serif text-xl sm:text-2xl text-stone-100 font-normal">
                  AREDH Skincare Headquarters
                </h3>
                <p className="text-stone-400 text-xs font-sans mt-1">
                  Authentic Ayurvedic formulations crafted in Jamnagar.
                </p>
              </div>

              {/* Location details list */}
              <div className="space-y-5 text-sm font-sans">
                
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0 text-gold-300 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 font-mono uppercase tracking-wider block">Address & Dispatch Center</span>
                    <a
                      href={mapSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-200 hover:text-gold-300 font-medium leading-relaxed transition-colors block"
                    >
                      AREDH, Mukta Estate, Plot No. 37, Shanker Tekri, Gokul Nagar, Jamnagar, Gujarat — 361006
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0 text-gold-300 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 font-mono uppercase tracking-wider block">Direct Phone</span>
                    <a href="tel:+917016846122" className="text-stone-200 hover:text-gold-300 font-semibold transition-colors">
                      +91 70168 46122
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0 text-gold-300 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 font-mono uppercase tracking-wider block">Email Support</span>
                    <a href="mailto:contact@aredh.in" className="text-stone-200 hover:text-gold-300 font-mono text-xs transition-colors">
                      contact@aredh.in
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0 text-pink-400 mt-0.5">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 font-mono uppercase tracking-wider block">Instagram</span>
                    <a
                      href="https://www.instagram.com/aredh_skincare"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-200 hover:text-pink-300 font-mono text-xs transition-colors"
                    >
                      @aredh_skincare
                    </a>
                  </div>
                </div>

                {/* Operational Hours */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-stone-800/80">
                  <div className="w-10 h-10 rounded-xl bg-stone-800 flex items-center justify-center shrink-0 text-stone-400 mt-0.5">
                    <Clock className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 font-mono uppercase tracking-wider block">Dispatch & Support Hours</span>
                    <p className="text-stone-300 text-xs font-mono">
                      Monday – Saturday: 9:00 AM – 7:00 PM IST
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row gap-3">
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-stone-950 font-sans font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all duration-300"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
              <a
                href="tel:+917016846122"
                className="px-5 py-3 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-sans font-semibold text-xs rounded-xl transition-colors text-center"
              >
                Call Office
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
