import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand block */}
          <div className="md:col-span-1">
            <div className="flex flex-col mb-4">
              <span className="font-display text-white text-xl font-semibold">
                Solomon Home Services
              </span>
              <span className="text-gold-500 text-[10px] tracking-[0.3em] uppercase font-mono mt-0.5">
                The Parkes at Stonebridge
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Your neighbor. Your advocate. Your local real estate expert in Longmont, CO.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-500 text-[10px] font-mono tracking-[0.3em] uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><Link href="/#hero" className="text-slate-300 hover:text-gold-400 text-sm transition-colors">The Parkes</Link></li>
              <li><Link href="/#map" className="text-slate-300 hover:text-gold-400 text-sm transition-colors">Market Map</Link></li>
              <li><Link href="/#contact" className="text-slate-300 hover:text-gold-400 text-sm transition-colors">Free Valuation</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-slate-500 text-[10px] font-mono tracking-[0.3em] uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+19705550000" className="flex items-center gap-3 text-slate-300 hover:text-gold-400 text-sm transition-colors">
                  <Phone size={14} className="text-gold-500 flex-shrink-0" />
                  (970) 555-0000
                </a>
              </li>
              <li>
                <a href="mailto:mark@solomonhomeservices.com" className="flex items-center gap-3 text-slate-300 hover:text-gold-400 text-sm transition-colors">
                  <Mail size={14} className="text-gold-500 flex-shrink-0" />
                  mark@solomonhomeservices.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-slate-300 text-sm">
                  <MapPin size={14} className="text-gold-500 flex-shrink-0 mt-0.5" />
                  The Parkes at Stonebridge<br />Longmont, CO 80503
                </span>
              </li>
            </ul>
          </div>

          {/* Compliance & Logos Col */}
          <div className="md:col-span-1">
             <h4 className="text-slate-500 text-[10px] font-mono tracking-[0.3em] uppercase mb-5">
                Brokerage & Compliance
             </h4>
             <p className="text-slate-400 text-xs mb-4 leading-relaxed">
               Brokerage: Real<br />
               Agent: Mark Solomon
             </p>
             <div className="flex flex-col gap-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <img 
                  src="/real-broker-logo-light.png" 
                  alt="Real Broker" 
                  className="h-10 w-auto object-contain object-left" 
                />
                <div className="flex gap-6">
                  <img 
                    src="/nar_membershipmark_white.png" 
                    alt="REALTOR®" 
                    className="h-10 w-auto object-contain" 
                  />
                  <img 
                    src="/equal-housing-opportunity-logo.png" 
                    alt="Equal Housing Opportunity" 
                    className="h-10 w-auto object-contain invert" 
                  />
                </div>
             </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs font-mono">
            © {currentYear} Solomon Home Services. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-gold-400 transition-colors">Terms of Service</Link>
            <span>·</span>
            <span>Equal Housing Opportunity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
