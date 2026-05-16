"use client";

import { Mountain, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="bg-[#0f172a] text-stone-400 border-t border-white/[0.05] relative z-10">
      
      {/* Top Disclaimer Header - Center Aligned Bold Statement */}
      <div className="w-full border-b border-white/10 py-6 px-6 bg-white/[0.02]">
        <p className="text-center text-sm text-[#c9a84c] font-black uppercase tracking-wider max-w-4xl mx-auto">
          This is not an attempt to solicit an already listed house.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Brand & Brokerage Compliance */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Mountain size={26} className="text-[#c9a84c]" strokeWidth={1.5} />
              <div className="flex flex-col leading-none">
                <span className="text-white text-lg font-semibold tracking-wide">
                  Solomon
                </span>
                <span className="text-[#c9a84c] text-[10px] tracking-[0.2em] uppercase font-medium">
                  Home Services
                </span>
              </div>
            </div>

            <div className="w-px h-10 bg-white/20"></div>

            <div className="flex items-center">
              <img 
                src="/real-broker-logo-light.png" 
                alt="Real Broker, LLC" 
                className="h-8 object-contain opacity-90"
              />
            </div>
          </div>

          <p className="text-stone-500 text-sm leading-relaxed max-w-sm mb-6">
            Tactical precision. Tenacious negotiation. Over 20 years of military discipline applied to real estate — Your dedicated expert for The Parkes at Stonebridge.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <a href="tel:+18168535467" className="flex items-center gap-2 text-sm text-stone-400 hover:text-[#c9a84c] transition-colors duration-200">
              <Phone size={14} className="text-[#c9a84c]" />
              (816) 853-5467
            </a>
            <a href="mailto:mark@solomonhomeservices.com" className="flex items-center gap-2 text-sm text-stone-400 hover:text-[#c9a84c] transition-colors duration-200">
              <Mail size={14} className="text-[#c9a84c]" />
              mark@solomonhomeservices.com
            </a>
          </div>
        </div>

        {/* Column 2: Internal Mapping Layout Points */}
        <div>
          <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-5">
            Navigate
          </h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="text-sm text-stone-400 hover:text-[#c9a84c] transition-colors duration-200">The Parkes Community</a></li>
            <li><a href="https://www.solomonhomeservices.com/#strategy" target="_blank" rel="noopener noreferrer" className="text-sm text-stone-400 hover:text-[#c9a84c] transition-colors duration-200">Marketing Strategy</a></li>
            <li><a href="https://www.solomonhomeservices.com/#about" target="_blank" rel="noopener noreferrer" className="text-sm text-stone-400 hover:text-[#c9a84c] transition-colors duration-200">About Mark</a></li>
            <li><a href="https://www.solomonhomeservices.com/#contact" target="_blank" rel="noopener noreferrer" className="text-sm text-stone-400 hover:text-[#c9a84c] transition-colors duration-200">Free Home Valuation</a></li>
          </ul>
        </div>

        {/* Column 3: Global Domain Engine Hooks */}
        <div>
          <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-5">
            Legal
          </h4>
          <ul className="flex flex-col gap-3">
            <li><a href="https://www.solomonhomeservices.com/privacy" target="_blank" rel="noopener noreferrer" className="text-sm text-stone-400 hover:text-[#c9a84c] transition-colors">Privacy Policy</a></li>
            <li><a href="https://www.solomonhomeservices.com/terms" target="_blank" rel="noopener noreferrer" className="text-sm text-stone-400 hover:text-[#c9a84c] transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      {/* CREC Compliance Bar & Disclaimer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="bg-white/5 border border-[#c9a84c]/20 rounded-lg px-5 py-5 mb-8 space-y-3">
            <p className="text-center text-xs text-stone-400 leading-relaxed">
              <span className="text-[#c9a84c] font-semibold">Brokerage Disclosure:</span>{" "}
              Mark Solomon is a licensed real estate broker (Colorado license #100084304) operating under{" "}
              <strong className="text-stone-300">Real Broker, LLC</strong>. 
            </p>
            <p className="text-center text-xs text-stone-400 leading-relaxed">
               Broker Contact: Real Broker LLC | 999 18th St Ste 3000, Denver, CO 80202 | (855) 450-0442
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-stone-600 mb-8">
            {/* COMPLIANCE GRAPHICS ASSET FLAGS */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 flex justify-center">
                  <img src="/nar_membershipmark_white.png" alt="REALTOR® Logo" className="h-8 object-contain opacity-80" />
                </div>
                <span>Member of the National Association of REALTORS&reg;</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 flex justify-center">
                  <img src="/equal-housing-opportunity-logo.png" alt="Equal Housing Opportunity" className="h-8 object-contain invert mix-blend-screen opacity-70" />
                </div>
                <span>Equal Housing Opportunity</span>
              </div>
            </div>

            <p className="text-center text-stone-500">
              &copy; {currentYear} Solomon Home Services. All rights reserved.
            </p>
          </div>

          {/* THE DoD DISCLAIMER - Escaped for strict Vercel optimization checks */}
          <div className="pt-8 border-t border-white/10 text-[10px] leading-[1.6] text-stone-500 text-center max-w-4xl mx-auto">
            <p className="mb-2">
              This site has no affiliation with the Department of Defense, the Department of the Navy, or any other branch of the U.S. military. The views, products, and services expressed here are solely those of the author. The DoD does not endorse this website, Mark Solomon or this real estate business.
            </p>
            <p>
              ...But they should. Batteries not included. Void where prohibited. Your mileage may vary. Past performance is not indicative of future results. No sailors were harmed in the making of this business. The Navy reserves the right to take credit for his operational discipline while accepting no responsibility for the jokes.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
