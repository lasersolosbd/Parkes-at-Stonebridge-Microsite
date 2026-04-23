import { MapPin, ArrowRight, Home, Building2, Handshake } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="bg-white pt-36 pb-24 px-6 lg:px-16 border-b border-navy-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
        
        {/* Neighborhood-First content priority */}
        <div className="col-span-1 md:col-span-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-gold-100/50 border border-gold-200/60 text-gold-800 text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-sm">
                <MapPin size={11} />
                Longmont, CO
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-extrabold text-navy-950 leading-tight mb-6">
            Neighborhood Intel: The Parkes at <br />
            <span className="block text-gold-600 italic font-light tracking-tight mt-0.5">Stonebridge Living</span>
          </h1>
          
          <p className="text-navy-700 text-xl leading-relaxed mb-10 max-w-xl">
            A comprehensive data portal providing real-time market activity, local listings, and essential equity information for residents.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#map" className="btn-gold flex items-center gap-2">
              <Home size={17} />
              The Parkes Market Map
            </a>
            <a href="#contact" className="btn-outline flex items-center gap-2">
              <Handshake size={17} />
              Whats My Home Worth?
              <ArrowRight size={17} />
            </a>
          </div>
        </div>

        {/* Combined neighborhood details \& sign photo */}
        <div className="col-span-1 md:col-span-4 bg-slate-50 border border-navy-100 p-8 rounded-sm shadow-sm space-y-8">
            {/* Asset integration: Neighborhood Sign photo (subtle description usage as requested) */}
            <div className="relative group overflow-hidden border border-navy-100 bg-white p-3 rounded-sm">
              <img 
                src="/Parkes-neighborhood-pic.jpg" 
                alt="The Parkes at Stonebridge neighborhood sign at the entrance." 
                className="w-full h-auto object-cover rounded-sm group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-x-3 bottom-3 bg-white/95 backdrop-blur-sm p-3 text-center rounded-sm border border-navy-100">
                <p className="text-navy-900 text-xs font-semibold leading-tight">Entrance to Our Community: Stonebridge.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
                <Building2 size={24} className="text-gold-500 mt-1 flex-shrink-0" />
                <div className="flex-grow">
                    <p className="font-display text-base font-bold text-navy-950 leading-snug mb-1">99 Total Units</p>
                    <p className="text-navy-600 text-sm leading-relaxed">Distinctive Stonebridge Living.</p>
                </div>
            </div>
            
            <div className="flex flex-col gap-2.5 text-center text-xs text-navy-400 font-mono border-t border-navy-100 pt-6">
              <span> Confidential · Responds Today</span> {/* 24 hours creepy secrecy removed */}
            </div>
        </div>
      </div>
    </section>
  );
}
