import { MapPin, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="bg-slate-50 pt-36 pb-24 px-6 lg:px-16 border-b border-navy-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Neighborhood Copy */}
        <div className="col-span-1 md:col-span-7">
          <div className="inline-flex items-center gap-1.5 bg-gold-100/50 border border-gold-200/60 text-gold-800 text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-sm mb-6">
            <MapPin size={11} /> Longmont, CO
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-navy-950 leading-[1.1] mb-6">
            Find Your Dream Home in <br />
            <span className="text-gold-600 italic font-light tracking-tight text-4xl md:text-6xl">The Parkes at Stonebridge.</span>
          </h1>
          
          <p className="text-navy-700 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            This mixed-residential community sits on 18 acres of land and includes luxury town homes accompanied by a beautiful pocket park (centered in the community), custom landscaping, walking trails, and a picnic area.
          </p>

          <p className="text-navy-900 font-bold mb-10">
            Mark Solomon — Your neighbor. Your advocate. Your local real estate expert.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-gold px-10 py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold rounded flex items-center gap-2 transition-all shadow-lg text-sm tracking-widest uppercase">
              What&apos;s My Townhome Worth? <ArrowRight size={17} />
            </a>
          </div>
        </div>

        {/* Neighborhood Image */}
        <div className="col-span-1 md:col-span-5">
          <img 
            src="/Parkes-neighborhood-pic.jpg" 
            alt="The Parkes at Stonebridge" 
            className="w-full h-auto object-cover rounded shadow-2xl border-4 border-white" 
          />
        </div>

      </div>
    </section>
  );
}
