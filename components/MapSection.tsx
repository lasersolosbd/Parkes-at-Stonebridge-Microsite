"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Coffee, Trees, GraduationCap, ShoppingBag, LayoutGrid } from "lucide-react";

export type Category = "all" | "dining" | "parks" | "schools" | "shopping";

const LeafletMap = dynamic(() => import("./LeafletMap"), { ssr: false });

export default function MapSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  return (
    <section id="map" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="text-gold-600 font-mono text-xs uppercase tracking-widest">The Local Perspective</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-950 font-display mt-2">
            Minutes from Your Door.
          </h2>
        </div>
        {/* Rest of component logic... */}
        <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 h-[600px]">
          <LeafletMap activeCategory={activeCategory} />
        </div>
      </div>
    </section>
  );
}
