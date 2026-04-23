"use client";

import dynamic from "next/dynamic";
import { Home, DollarSign } from "lucide-react";

// Dynamically import the map to avoid SSR issues
const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] bg-navy-100 flex items-center justify-center rounded-sm">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-gold-400 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-navy-500 text-sm font-mono tracking-wide">Loading map…</p>
      </div>
    </div>
  ),
});

export default function MapSection() {
  return (
    <section id="map" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <span className="section-label">Neighborhood Intel</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-navy-900 font-bold leading-tight">
                Active Listings &
                <span className="block text-navy-600 font-normal italic">Recent Sales</span>
              </h2>
              <div className="gold-rule w-16 mt-4" />
            </div>
            <p className="text-navy-500 text-sm max-w-xs leading-relaxed md:text-right">
              Real-time neighborhood activity in The Parkes at Stonebridge.
              Click any marker for full property details.
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-6 mb-6">
          <div className="flex items-center gap-2 text-sm text-navy-600">
            <span className="w-4 h-4 rounded-full bg-gold-500 border-2 border-white shadow-md" />
            <span className="font-mono tracking-wide text-xs">Active Listing</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-navy-600">
            <span className="w-4 h-4 rounded-full bg-navy-700 border-2 border-white shadow-md" />
            <span className="font-mono tracking-wide text-xs">Recent Sale</span>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-sm overflow-hidden shadow-2xl shadow-navy-200/40 border border-navy-100">
          <LeafletMap />
        </div>

        {/* Disclaimer */}
        <p className="text-navy-400 text-xs mt-4 font-mono">
          * Listing data shown is for demonstration purposes. Contact Mark for live MLS data.
        </p>
      </div>
    </section>
  );
}
