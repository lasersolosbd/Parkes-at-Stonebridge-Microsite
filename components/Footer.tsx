import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Block */}
        <div className="col-span-1 md:col-span-2">
          {/* Logo is now a clickable link */}
          <Link href="/" className="inline-flex items-center gap-5 mb-6 hover:opacity-80 transition-opacity">
            <div className="flex flex-col">
              <span className="font-display text-xl font-extrabold text-white leading-none">Solomon</span>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/60 -mt-0.5">Home Services</span>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <img src="/real-broker-logo-light.png" alt="Real Broker" className="h-7 w-auto object-contain" />
          </Link>
          <p className="text-white/60 text-sm leading-relaxed max-w-md">
            Mark Solomon – Your neighbor. Your advocate. Your local real estate expert serving The Parkes at Stonebridge.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-5">Contact Mark</h4>
          <ul className="space-y-4">
            <li>
              <a href="tel:+18168535467" className="flex items-center gap-3 text-white/80 hover:text-gold-500 transition-colors text-sm">
                <Phone size={18} className="text-gold-500 flex-shrink-0" />
                (816) 853-5467
              </a>
            </li>
            <li>
              <a href="mailto:mark@solomonhomeservices.com" className="flex items-center gap-3 text-white/80 hover:text-gold-500 transition-colors text-sm">
                <Mail size={18} className="text-gold-500 flex-shrink-0" />
                mark@solomonhomeservices.com
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/80 text-sm pt-1">
              <MapPin size={18} className="text-gold-500 flex-shrink-0 mt-1" />
              Serving The Parkes at Stonebridge
            </li>
          </ul>
        </div>

        {/* Quick Links & Legal */}
        <div>
          <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-5">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link href="/#hero" className="text-white/80 hover:text-gold-500 transition-colors text-sm">The Parkes Community</Link></li>
            <li><Link href="/#map" className="text-white/80 hover:text-gold-500 transition-colors text-sm">Active Market Map</Link></li>
            <li><Link href="/#contact" className="text-white/80 hover:text-gold-500 transition-colors text-sm">Free Home Valuation</Link></li>
            <li className="pt-4 border-t border-white/10 flex items-center gap-4">
              <Link href="/privacy" className="text-white/60 hover:text-gold-500 transition-colors text-xs">Privacy Policy</Link>
              <span className="text-white/20">|</span>
              <Link href="/terms" className="text-white/60 hover:text-gold-500 transition-colors text-xs">Terms of Service</Link>
            </li>
            <li className="pt-2">
              <img src="/equal-housing-opportunity-logo.png" alt="Equal Housing" className="h-8 w-auto invert opacity-70" />
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8 text-center md:text-left">
        <p className="text-white/40 text-xs font-mono">
          &copy; {currentYear} Solomon Home Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
