"use client";

import { ArrowRight, Star, Shield, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Subtle floating particles for depth
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; r: number; dx: number; dy: number; alpha: number }[] = [];
    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.25,
        dy: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,151,58,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden noise"
      style={{
        background:
          "radial-gradient(ellipse at 18% 55%, #163060 0%, #0e2149 35%, #040c20 100%)",
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      {/* Diagonal geometric accent */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 50%, rgba(22,48,96,0.5) 50%)",
        }}
      />
      <div
        className="absolute right-0 top-0 w-2/5 h-full pointer-events-none opacity-20"
        style={{
          background:
            "linear-gradient(150deg, transparent 45%, rgba(201,151,58,0.08) 45%)",
        }}
      />

      {/* Gold vertical accent line */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold-500/40 to-transparent ml-16 hidden lg:block" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 pt-32 pb-20 w-full flex flex-col lg:flex-row items-center gap-16">
        <div className="max-w-2xl flex-1">
          {/* Badge row */}
          <div
            className="flex flex-wrap items-center gap-3 mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            <span className="inline-flex items-center gap-1.5 bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded-sm">
              <Shield size={11} />
              Navy Veteran
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/15 text-white/60 text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded-sm">
              <MapPin size={11} />
              Longmont, CO
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/15 text-white/60 text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded-sm">
              <Star size={11} className="text-gold-400" />
              Parkes Resident Since 2019
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-5 opacity-0 animate-fade-up"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            Navy Veteran &
            <span className="block text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #e8c05a 0%, #f5d78e 50%, #c9973a 100%)",
              }}
            >
              Parkes Resident
            </span>
            Since 2019.
          </h1>

          {/* Gold rule */}
          <div
            className="gold-rule w-24 mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
          />

          {/* Subheadline */}
          <p
            className="text-white/65 text-lg md:text-xl leading-relaxed mb-10 max-w-lg opacity-0 animate-fade-up"
            style={{ animationDelay: "350ms", animationFillMode: "forwards" }}
          >
            Your neighbor. Your advocate. Your local real estate expert — who
            knows every floorplan, every HOA nuance, and every community secret
            in The Parkes at Stonebridge.
          </p>

          {/* CTA Row */}
          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "450ms", animationFillMode: "forwards" }}
          >
            <a href="#contact" className="btn-gold text-base">
              What's My Townhome Worth?
              <ArrowRight size={17} />
            </a>
            <a href="#map" className="btn-outline">
              See Neighborhood Sales
            </a>
          </div>

          {/* Trust micro-copy */}
          <p
            className="text-white/30 text-xs mt-6 tracking-wide opacity-0 animate-fade-up"
            style={{ animationDelay: "550ms", animationFillMode: "forwards" }}
          >
            No obligation · Confidential · Responds within 24 hours
          </p>
        </div>

        {/* Headshot Image Container */}
        <div 
          className="flex-1 w-full flex justify-center lg:justify-end opacity-0 animate-fade-up"
          style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gold-500 shadow-[0_0_40px_rgba(201,151,58,0.2)]">
            <img 
              src="/Mark-headshot.JPG" 
              alt="Mark Solomon - Navy Veteran & Local Real Estate Expert" 
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

      </div>

      {/* Bottom scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-white text-[10px] tracking-[0.3em] uppercase font-mono">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}