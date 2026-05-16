"use client";

import { useState, useEffect } from "react";
import { Menu, X, Mountain } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (targetId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0f172a]/95 backdrop-blur-md shadow-2xl shadow-black/20 py-3"
          : "bg-[#0f172a]/90 backdrop-blur-sm py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* BRANDING LOGO GROUP */}
        <div className="flex items-center gap-4">
          <a href="https://www.solomonhomeservices.com" className="flex items-center gap-2 group">
            <Mountain
              size={28}
              className="text-[#c9a84c] transition-transform duration-300 group-hover:scale-110"
              strokeWidth={1.5}
            />
            <div className="flex flex-col leading-none">
              <span className="text-lg font-semibold tracking-wide text-white">
                Solomon
              </span>
              <span className="text-[#c9a84c] text-[10px] tracking-[0.2em] uppercase font-medium">
                Home Services
              </span>
            </div>
          </a>

          <div className="w-px h-8 bg-white/20"></div>

          <img
            src="/real-broker-logo-light.png"
            alt="Real Broker, LLC"
            className="h-6 w-auto object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#hero" onClick={(e) => handleScrollToSection(e, "hero")} className="text-sm font-medium tracking-widest uppercase text-stone-200 hover:text-[#c9a84c] transition-colors">
            Community
          </a>
          <a href="#strategy" onClick={(e) => handleScrollToSection(e, "strategy")} className="text-sm font-medium tracking-widest uppercase text-stone-200 hover:text-[#c9a84c] transition-colors">
            Advantage
          </a>
          <a href="#map" onClick={(e) => handleScrollToSection(e, "map")} className="text-sm font-medium tracking-widest uppercase text-stone-200 hover:text-[#c9a84c] transition-colors">
            Market Map
          </a>
          <a
            href="https://www.solomonhomeservices.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2.5 bg-[#c9a84c] hover:bg-[#b8965e] text-[#0f172a] text-sm font-semibold tracking-wider uppercase rounded transition-all duration-200"
          >
            What's My Home Worth?
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-[#c9a84c] transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0f172a]/98 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          <a href="#hero" onClick={(e) => handleScrollToSection(e, "hero")} className="text-stone-200 hover:text-[#c9a84c] text-sm font-medium tracking-widest uppercase">
            Community
          </a>
          <a href="#strategy" onClick={(e) => handleScrollToSection(e, "strategy")} className="text-stone-200 hover:text-[#c9a84c] text-sm font-medium tracking-widest uppercase">
            Advantage
          </a>
          <a href="#map" onClick={(e) => handleScrollToSection(e, "map")} className="text-stone-200 hover:text-[#c9a84c] text-sm font-medium tracking-widest uppercase">
            Market Map
          </a>
          <a
            href="https://www.solomonhomeservices.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-5 py-3 bg-[#c9a84c] text-[#0f172a] text-sm font-semibold tracking-wider uppercase rounded text-center"
          >
            What's My Home Worth?
          </a>
        </div>
      </div>
    </header>
  );
}
