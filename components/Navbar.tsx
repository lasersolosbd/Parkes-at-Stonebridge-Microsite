import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 py-4 px-6 sticky top-0 z-[9999] shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Co-Branding Logo Section */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex flex-col">
             <span className="text-xl md:text-2xl font-display font-bold text-slate-900 tracking-tight leading-none">
               SOLOMON <span className="font-light">HOME SERVICES</span>
             </span>
             <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mt-1">
               Mark Solomon
             </span>
          </div>
          
          <div className="h-8 w-px bg-slate-300"></div>
          
          <div className="flex items-center gap-2">
            <img 
              src="/real-broker-logo-dark.png" 
              alt="Real Broker" 
              className="h-6 md:h-8 w-auto object-contain" 
            />
            <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">Real</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/#hero" className="hidden md:block hover:text-gold-600 transition-colors">The Parkes</Link>
          <Link href="/#map" className="hidden md:block hover:text-gold-600 transition-colors">Market Map</Link>
          <a href="tel:+19705550000" className="hidden md:block text-slate-900 font-bold hover:text-gold-600 transition-colors">(970) 555-0000</a>
          <Link href="/#contact" className="px-5 py-2 bg-slate-900 text-white rounded hover:bg-gold-600 transition-all">
            Get Home Value
          </Link>
        </div>

      </div>
    </nav>
  );
}
