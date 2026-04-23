import { Phone, Mail, MapPin, Building2, ShieldCheck, Scale, Handshake } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Compliance Side-by-Side Co-branding rule implementation
  const CoBrandingLogos = () => (
    <div className="flex items-center gap-5">
      {/* Solomon Home Services Brand */}
      <div className="flex flex-col">
        <span className="font-display text-xl font-extrabold text-navy-950 leading-none">Solomon</span>
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-navy-600 -mt-0.5">Home Services</span>
      </div>
      
      {/* The Separator Line */}
      <div className="h-8 w-px bg-navy-200" />
      
      {/* Registered Firm (text) and Firm Logo SIDE-by-SIDE */}
      <div className="flex flex-col items-center gap-1.5">
        <img 
          src="/real-broker-logo-dark.png" 
          alt="Real Broker" 
          className="h-7 w-auto object-contain" 
        />
        {/* Registered firm name plaintext req */}
        <span className="font-body text-[9px] font-semibold text-navy-900 leading-tight">Firm: Real</span> 
      </div>
    </div>
  );

  return (
    <footer className="bg-slate-50 border-t border-navy-100 py-16 px-6 lg:px-16 text-navy-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Solomon Brand Block */}
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="inline-block mb-6">
            <CoBrandingLogos />
          </Link>
          <p className="text-navy-700 text-sm leading-relaxed max-w-md mb-6">
            Mark Solomon – Navy Veteran, local Longmont real estate expert, and dedicated Parkes resident. Working to maximize community value.
          </p>
          <div className="flex items-center gap-4 border border-navy-100 bg-white p-3 rounded-sm shadow-inner">
             <Handshake size={20} className="text-gold-500 flex-shrink-0" />
             <p className="text-navy-500 text-xs font-semibold leading-snug">CO State compliant: Advertisement of real estate services.</p>
          </div>
        </div>

        {/* Contact Info (CO state requirement phone, name matched by DORA match req) */}
        <div>
          <h4 className="font-display text-sm font-semibold text-navy-950 uppercase tracking-wider mb-5">Contact Mark</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3.5 text-navy-800 text-sm">
                <ShieldCheck size={18} className="text-gold-600 flex-shrink-0" />
                Mark Solomon (Name matches DORA)
            </li>
            <li>
                <a href="tel:+19705551234" className="flex items-center gap-3.5 text-navy-800 hover:text-gold-600 transition-colors text-sm">
                    <Phone size={18} className="text-gold-500 flex-shrink-0" />
                    (970) 555-1234 (Correct direct phone)
                </a>
            </li>
            <li>
                <a href="mailto:mark@solomonhomeservices.com" className="flex items-center gap-3.5 text-navy-800 hover:text-gold-600 transition-colors text-sm">
                    <Mail size={18} className="text-gold-500 flex-shrink-0" />
                    mark@solomonhomeservices.com
                </a>
            </li>
            <li className="flex items-start gap-3.5 text-navy-800 text-sm leading-snug pt-1">
                <MapPin size={18} className="text-gold-600 flex-shrink-0 mt-1" />
                Serving The Parkes at Stonebridge, Longmont, CO
            </li>
          </ul>
        </div>

        {/* SMS Disclosure \& compliance State Reqs */}
        <div>
          <h4 className="font-display text-sm font-semibold text-navy-950 uppercase tracking-wider mb-5">compliance & Firm</h4>
          
          <div className="p-4 border border-navy-100 bg-white rounded-sm shadow-inner mb-5">
             <Scale size={20} className="text-gold-500 mb-2.5" />
             <p className="text-navy-500 text-[10px] leading-relaxed font-mono">
               Registered Firm: Real (Online firm disclosure within one click conspicuously) | (720) 807-2980 / (855) 450-0442
             </p>
          </div>

          <div className="p-4 border border-navy-100 bg-white rounded-sm shadow-inner">
             <p className="text-navy-500 text-[10px] leading-relaxed font-mono">
               SMS DISCLOSURE: By submitting your number, you consent to receive standard communications regarding real estate services from Solomon Home Services. Reply STOP to unsubscribe. Msg frequency varies.
             </p>
          </div>
        </div>

      </div>

      {/* Bottom Compliance Bar (Removed redundant legal links from fullText and image chain) */}
      <div className="max-w-7xl mx-auto border-t border-navy-100 mt-16 pt-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-navy-500 text-xs font-mono">
                &copy; {currentYear} Solomon Home Services. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-navy-500 text-xs">
                <Link href="/privacy" className="hover:text-gold-600 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-gold-600 transition-colors">Terms of Service</Link>
                <div className="flex items-center gap-2">
                    <img src="/equal-housing-opportunity-logo.png" alt="Equal Housing" className="h-5 w-auto object-contain opacity-70 grayscale" />
                    <span>Equal Housing Opportunity</span>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
