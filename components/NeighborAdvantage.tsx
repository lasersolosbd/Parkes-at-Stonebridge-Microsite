import { Clock, Anchor, TrendingUp } from "lucide-react";

const advantages = [
  {
    icon: Clock,
    eyebrow: "01 / Community",
    title: "5 Years of Local Insight",
    body:
      "I don't just sell homes here — I live here. I know the HOA rules, the best floorplan upgrades, the parking quirks on Building C, and which units get the Rocky Mountain sunset. That insider knowledge is your negotiating edge.",
    highlight: "Every floorplan. Every HOA rule. Every street.",
  },
  {
    icon: Anchor,
    eyebrow: "02 / Integrity",
    title: "Navy Veteran Work Ethic",
    body:
      "Twenty-two years of naval service forged a commitment to mission execution, radical honesty, and unwavering integrity. That discipline translates directly into how I handle every showing, every offer, and every closing on your behalf.",
    highlight: "Mission-driven. Deadline-focused. Zero excuses.",
  },
  {
    icon: TrendingUp,
    eyebrow: "03 / Results",
    title: "Maximum ROI",
    body:
      "I market locally and aggressively — neighborhood-targeted social ads, Parkes community outreach, and precision pricing — because protecting property values here protects my own investment too. Our interests are perfectly aligned.",
    highlight: "Your gain is my gain. Literally.",
  },
];

export default function NeighborAdvantage() {
  return (
    <section id="advantage" className="bg-cream py-24 px-6 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(14,33,73,0.8) 39px, rgba(14,33,73,0.8) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(14,33,73,0.8) 39px, rgba(14,33,73,0.8) 40px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="section-label">The Neighbor Advantage</span>
          <h2 className="font-display text-4xl md:text-5xl text-navy-900 font-bold leading-tight max-w-2xl mx-auto">
            Why hire a neighbor
            <span className="italic text-navy-700"> instead of </span>
            a stranger?
          </h2>
          <div className="gold-rule w-20 mx-auto mt-6" />
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advantages.map((adv, i) => (
            <div key={i} className="advantage-card group">
              {/* Icon */}
              <div className="mb-6 w-12 h-12 rounded-sm bg-navy-900 flex items-center justify-center group-hover:bg-gold-500 transition-colors duration-300">
                <adv.icon size={22} className="text-gold-400 group-hover:text-navy-900 transition-colors duration-300" />
              </div>

              {/* Eyebrow */}
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-gold-600 mb-2">
                {adv.eyebrow}
              </p>

              {/* Title */}
              <h3 className="font-display text-2xl text-navy-900 font-bold mb-3 leading-snug">
                {adv.title}
              </h3>

              {/* Rule */}
              <div className="w-8 h-px bg-gold-400 mb-4" />

              {/* Body */}
              <p className="text-navy-600 text-sm leading-relaxed mb-5">
                {adv.body}
              </p>

              {/* Highlight quote */}
              <p className="text-xs font-mono text-navy-400 italic border-l-2 border-gold-400 pl-3">
                {adv.highlight}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <div className="text-center mt-14">
          <p className="text-navy-500 text-sm mb-4">
            Ready to experience the difference?
          </p>
          <a href="#contact" className="btn-gold">
            Request Your Free Home Valuation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
