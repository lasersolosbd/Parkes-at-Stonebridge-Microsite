"use client";

import { Car, GraduationCap, Mountain, MapPin } from "lucide-react";

const pillars = [
  {
    icon: GraduationCap,
    title: "Top-Tier Education",
    desc: "The Parkes is served by the St. Vrain Valley School District, including Blue Mountain Elementary and Altona Middle School—consistently ranked among the best in the state.",
  },
  {
    icon: Car,
    title: "Strategic Commute",
    desc: "Located minutes from the Diagonal Highway (119), residents enjoy a seamless 15-minute drive to Boulder and quick access to I-25 for Denver commutes.",
  },
  {
    icon: Mountain,
    title: "Outdoor Lifestyle",
    desc: "Direct access to the Dry Creek Trail system and steps away from Meadow Village Park. Experience the best of Longmont's active, outdoor culture right outside your door.",
  },
];

export default function NeighborAdvantage() {
  return (
    <section id="lifestyle" className="py-24 bg-white px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold-600 text-xs font-semibold tracking-[0.3em] uppercase block mb-3">Community Lifestyle</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-950 font-display">Living in The Parkes.</h2>
          <div className="h-1 w-20 bg-gold-500 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((p, idx) => (
            <div key={idx} className="group p-8 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:border-gold-200 transition-all duration-500">
              <div className="w-14 h-14 bg-navy-950 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-500">
                <p.icon size={28} className="text-gold-400 group-hover:text-navy-950" />
              </div>
              <h3 className="text-xl font-bold text-navy-950 mb-4 font-display">{p.title}</h3>
              <p className="text-navy-700 text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
