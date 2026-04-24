"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Coffee, Trees, GraduationCap, ShoppingBag, LayoutGrid } from "lucide-react";

export type Category = "all" | "dining" | "parks" | "schools" | "shopping";

const CATEGORIES = [
  { id: "all", label: "All", icon: <LayoutGrid size={13} /> },
  { id: "dining", label: "Dining", icon: <Coffee size={13} /> },
  { id: "parks", label: "Parks", icon: <Trees size={13} /> },
  { id: "schools", label: "Schools", icon: <GraduationCap size={13} /> },
  { id: "shopping", label: "Shopping", icon: <ShoppingBag size={13} /> },
];

const LeafletMap = dynamic(() => import("./LeafletMap"), { ssr: false });

export default function MapSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  return (
    <section id="map" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <span className="text-gold-600 font-mono text-xs uppercase tracking-widest">The Local Perspective</span>
          <h2 className="text-4xl font-bold text-navy-950 font-display mt-2">Minutes from Your Door.</h2>
        </div>

        {/* RESTORED BUTTONS */}
        <div className="flex flex-wrap gap-2 mb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as Category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                activeCategory === cat.id ? "bg-navy-900 text-white border-navy-900" : "bg-white text-navy-600 border-slate-200 hover:border-gold-500"
              }`}
            >
              <span className="flex items-center gap-2">{cat.icon} {cat.label}</span>
            </button>
          ))}
        </div>

        <div className="rounded-xl overflow-hidden shadow-xl border border-slate-200">
          <LeafletMap activeCategory={activeCategory} />
        </div>

        {/* UPDATED DISCLAIMER BELOW MAP */}
        <p className="mt-4 text-navy-900 text-xs font-semibold italic text-center max-w-2xl mx-auto opacity-80">
          This is a curated list of some featured amenities close to the Parkes At Stonebridge. The area has much more to offer.
        </p>
      </div>
    </section>
  );
}
