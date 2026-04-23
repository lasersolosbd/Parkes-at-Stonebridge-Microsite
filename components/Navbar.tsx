"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "Advantage", href: "#advantage" },
    { label: "Listings", href: "#map" },
    { label: "Valuation", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md shadow-lg shadow-navy-950/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex flex-col leading-tight group">
          <span className="font-display text-white text-lg font-semibold tracking-wide group-hover:text-gold-300 transition-colors duration-200">
            Solomon Home Services
          </span>
          <span className="text-gold-500 text-[10px] tracking-[0.3em] uppercase font-mono">
            The Parkes at Stonebridge
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="nav-link pb-0.5">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+19705550000"
            className="flex items-center gap-2 text-white/60 hover:text-gold-400 transition-colors duration-200 text-sm"
          >
            <Phone size={14} />
            <span className="font-mono tracking-wide">(970) 555‑0000</span>
          </a>
          <a href="#contact" className="btn-gold text-sm py-2.5 px-5">
            Free Valuation
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-navy-950/98 px-6 py-4 flex flex-col gap-4 border-t border-white/10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-gold-400 text-sm tracking-widest uppercase transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-gold text-sm py-2.5 text-center mt-2"
          >
            Free Valuation
          </a>
        </div>
      </div>
    </header>
  );
}
