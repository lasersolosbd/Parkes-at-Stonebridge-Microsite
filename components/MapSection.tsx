"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Coffee, Trees, GraduationCap, ShoppingBag, LayoutGrid, HeartPulse } from "lucide-react";

export type Category = "all" | "dining" | "parks" | "schools" | "shopping" | "healthcare";

export const CATEGORIES = [
  { id: "all", label: "All", icon: <LayoutGrid size={13} />, activeCls: "bg-navy-900 text-white" },
  { id: "dining", label: "Dining", icon: <Coffee size={13} />, activeCls: "bg-amber-600 text-white" },
  { id: "parks", label: "Parks", icon: <Trees size={13} />, activeCls: "bg-emerald-600 text-white" },
  { id: "schools", label: "Schools", icon: <GraduationCap size={13} />, activeCls: "bg-blue-700 text-white" },
  { id: "shopping", label: "Shopping", icon: <ShoppingBag size={13} />, activeCls: "bg-rose-600 text-white" },
];

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => <div className="w-full h-[520px] bg-slate-100 animate-pulse" />,
});

export default function MapSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  return (
    <section id="map" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="text-gold-600 font-mono text-xs uppercase tracking-widest">Neighborhood Intel</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-950 font-display mt-2">
            Minutes from Your Door.
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as Category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                activeCategory === cat.id ? cat.activeCls : "bg-white text-navy-600 border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200">
          <LeafletMap activeCategory={activeCategory} />
        </div>
      </div>
    </section>
  );
}
