"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full bg-white transition-all duration-300 ${scrolled ? "z-[9999] shadow-md py-3" : "z-10 py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between gap-6">
        
        {/* Logos & Branding */}
        <Link href="/" className="flex flex-shrink-0 items-center gap-5">
          <div className="flex flex-col">
            <span className="font-display text-lg font-extrabold text-navy-950 leading-none">Solomon</span>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-navy-600 -mt-0.5">Home Services</span>
          </div>
          <div className="h-8 w-px bg-navy-200" />
          <img src="/real-broker-logo-dark.png" alt="Real Broker" className="h-7 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex flex-col text-right">
            <span className="font-display text-sm font-semibold text-navy-950">Mark Solomon</span>
            <a href="tel:+18168535467" className="font-mono text-sm font-bold text-gold-600 hover:text-gold-500 transition-colors">
              (816) 853-5467
            </a>
          </div>
          <Link href="#contact" className="btn-gold text-sm px-6 py-3 font-bold">
            What&apos;s My Home Worth?
          </Link>
        </div>
      </div>
    </nav>
  );
}
