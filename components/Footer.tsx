import { Phone, Mail, MapPin, Shield } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "The Advantage", href: "/#advantage" },
    { label: "Map & Listings", href: "/#map" },
    { label: "Free Valuation", href: "/#contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="bg-navy-950 border-t border-white/8">
      {/* Top band */}
      <div className="gold-rule" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
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
            <p className="text-white/40 text-sm leading-relaxed mb-5">
              Your neighbor. Your advocate. Your local real estate expert in
              Longmont, CO since 2019.
            </p>

            {/* Veteran badge */}
            <div className="inline-flex items-center gap-2 border border-gold-500/30 bg-gold-500/5 px-3 py-2 rounded-sm">
              <Shield size={14} className="text-gold-400" />
              <span className="text-gold-400 text-[10px] font-mono tracking-widest uppercase">
                Navy Veteran | 22 Yrs Service
              </span>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-white/30 text-[10px] font-mono tracking-[0.3em] uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-white/55 hover:text-gold-400 text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white/30 text-[10px] font-mono tracking-[0.3em] uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+19705550000"
                  className="flex items-center gap-3 text-white/55 hover:text-gold-400 text-sm transition-colors duration-200"
                >
                  <Phone size={14} className="text-gold-500 flex-shrink-0" />
                  (970) 555‑0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:mark@solomonhomeservices.com"
                  className="flex items-center gap-3 text-white/55 hover:text-gold-400 text-sm transition-colors duration-200"
                >
                  <Mail size={14} className="text-gold-500 flex-shrink-0" />
                  mark@solomonhomeservices.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-white/55 text-sm">
                  <MapPin size={14} className="text-gold-500 flex-shrink-0 mt-0.5" />
                  The Parkes at Stonebridge
                  <br />
                  Longmont, CO 80504
                </span>
              </li>
            </ul>

            {/* SMS disclaimer */}
            <div className="mt-6 p-3 border border-white/8 rounded-sm">
              <p className="text-white/25 text-[10px] leading-relaxed font-mono">
                SMS DISCLOSURE: By providing your phone number and opting in, you
                consent to receive SMS messages from Solomon Home Services.
                Msg &amp; data rates may apply. Reply STOP to opt-out. Reply HELP
                for assistance. Message frequency varies.
              </p>
            </div>
          </div>

          {/* Compliance & Logos Col */}
          <div className="md:col-span-1">
             <h4 className="text-white/30 text-[10px] font-mono tracking-[0.3em] uppercase mb-5">
                Brokerage & Compliance
             </h4>
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
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs font-mono">
            © {currentYear} Solomon Home Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-white/25 hover:text-gold-400 text-xs transition-colors">
              Privacy Policy
            </a>
            <span className="text-white/15">·</span>
            <a href="/terms" className="text-white/25 hover:text-gold-400 text-xs transition-colors">
              Terms of Service
            </a>
            <span className="text-white/15">·</span>
            <span className="text-white/25 text-xs flex items-center gap-2">
              Equal Housing Opportunity
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}