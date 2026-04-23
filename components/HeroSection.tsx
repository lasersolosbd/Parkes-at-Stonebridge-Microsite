import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-slate-50 overflow-hidden py-24 lg:py-32 px-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Neighborhood Content First */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-mono tracking-widest uppercase mb-6">
            <MapPin className="w-4 h-4" />
            Longmont, Colorado
          </div>
          
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            The Parkes at <br />
            <span className="text-gold-600 italic font-light">Stonebridge.</span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Welcome to Longmont's premier townhouse community. Explore real-time neighborhood sales data, view active listings, and discover what your home is worth today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link 
              href="/#map" 
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded transition-all flex items-center gap-2 shadow-lg"
            >
              Explore Market Map
            </Link>
            <Link 
              href="/#contact" 
              className="px-8 py-4 bg-white border border-gray-300 hover:border-gold-500 text-slate-900 font-medium rounded transition-all flex items-center gap-2"
            >
              What's My Home Worth? <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Agent Info Secondary */}
        <div className="w-full lg:w-1/3 flex flex-col items-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
          <img 
            src="/Mark-headshot.JPG" 
            alt="Mark Solomon" 
            className="w-32 h-32 rounded-full object-cover object-top border-4 border-slate-50 mb-4 shadow-md"
          />
          <h3 className="text-xl font-bold text-slate-900">Mark Solomon</h3>
          <p className="text-gold-600 text-sm font-bold uppercase tracking-wider mb-3">Resident Since 2019</p>
          <p className="text-slate-500 text-sm text-center leading-relaxed">
            Navy Veteran. Your neighbor. Your advocate. Your local real estate expert.
          </p>
        </div>

      </div>
    </section>
  );
}
