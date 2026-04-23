"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Brokerage Side-by-Side Co-branding rule implementation
  const CoBrandingLogos = () => (
    <div className="flex items-center gap-5">
      {/* Solomon Home Services Brand */}
      <div className="flex flex-col">
        <span className="font-display text-lg font-extrabold text-navy-950 leading-none">Solomon</span>
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-navy-600 -mt-0.5">Home Services</span>
      </div>
      
      {/* The Separator Line */}
      <div className="h-8 w-px bg-navy-200" />
      
      {/* Registered Firm (text) and Firm Logo SIDE-by-SIDE */}
      <div className="flex flex-col items-center gap-1">
        <img 
          src="/real-broker-logo-dark.png" 
          alt="Real Broker" 
          className="h-7 w-auto object-contain" 
        />
        <span className="font-body text-[9px] font-semibold text-navy-900 leading-tight">Registered Brokerage Firm: Real</span> {/* Registered firm name plaintext req */}
      </div>
    </div>
  );

  return (
    <nav className={`fixed top-0 left-0 w-full bg-white transition-all duration-300 ${scrolled ? "z-[9999] shadow-md py-3" : "z-10 py-5"}`}> {/* Sticky high z-index fix */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between gap-6">
        
        {/* Logos & Branding */}
        <Link href="/" className="flex-shrink-0">
          <CoBrandingLogos />
        </Link>

        {/* Desktop Nav & compliance State Req (Name/Phone) */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex flex-col text-right">
            <span className="font-display text-sm font-semibold text-navy-950">Mark Solomon</span> {/* Agent Name CO state req */}
            <a href="tel:+19705551234" className="font-mono text-sm font-bold text-gold-600 hover:text-gold-500 transition-colors"> {/* Correct phone req */}
              (970) 555-1234
            </a>
          </div>
          
          <div className="flex items-center gap-6">
            <Link href="#contact" className="btn-gold text-xs px-6 py-2.5">
              Valuation Portal
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
