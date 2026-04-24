"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import type { Category } from "./MapSection";

// Landmark Data
export const LANDMARKS = [
  { id: 1, name: "Meadow Village Park", category: "parks", position: [40.1565, -105.1195], description: "Your neighborhood backyard.", address: "Meadow Dr, Longmont, CO 80503" },
  { id: 9, name: "Blue Mountain Elementary", category: "schools", position: [40.1508, -105.1265], description: "Highly rated local elementary.", address: "1260 Mountain Drive, Longmont, CO 80503" },
  { id: 13, name: "Village at the Peaks", category: "shopping", position: [40.1515, -105.1012], description: "Premium open-air shopping.", address: "1250 S Hover St, Longmont, CO 80501" },
];

const CAT_COLORS: Record<string, { pin: string; ring: string }> = {
  dining:     { pin: "#d97706", ring: "#fbbf24" },
  parks:      { pin: "#059669", ring: "#34d399" },
  schools:    { pin: "#1d4ed8", ring: "#60a5fa" },
  shopping:   { pin: "#e11d48", ring: "#fb7185" },
};

function makeIcon(pinColor: string, ringColor: string): L.DivIcon {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="38" viewBox="0 0 30 38">
      <path d="M15 0 C6.7 0 0 6.7 0 15 C0 26.25 15 38 15 38 C15 38 30 26.25 30 15 C30 6.7 23.3 0 15 0Z" fill="${pinColor}"/>
      <circle cx="15" cy="15" r="7.5" fill="white" opacity="0.95"/>
      <circle cx="15" cy="15" r="4.5" fill="${ringColor}"/>
    </svg>`;
  return L.divIcon({ html: svg, className: "", iconSize: [30, 38], iconAnchor: [15, 38], popupAnchor: [0, -42] });
}

export default function LeafletMap({ activeCategory }: { activeCategory: Category }) {
  const visible = activeCategory === "all" ? LANDMARKS : LANDMARKS.filter((l) => l.category === activeCategory);

  return (
    <div className="relative h-full w-full">
      <MapContainer center={[40.1565, -105.1178]} zoom={14} scrollWheelZoom={false} style={{ height: "100%", minHeight: "520px" }}>
        {/* NEW MUTED COLOR TILESET */}
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
        {visible.map((lm) => (
          <Marker key={lm.id} position={lm.position as [number, number]} icon={makeIcon(CAT_COLORS[lm.category]?.pin || "#0f172a", CAT_COLORS[lm.category]?.ring || "#c9a84c")}>
            <Popup><div className="p-2 font-sans"><p className="font-bold">{lm.name}</p><p className="text-xs">{lm.description}</p></div></Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* CURATED LIST DISCLAIMER */}
      <div className="absolute bottom-4 left-4 right-4 z-[1000] bg-white/90 border border-slate-200 p-3 rounded shadow-lg text-center backdrop-blur-sm">
        <p className="text-navy-900 text-xs font-semibold italic">
          This is just a curated list of some featured amenities close to the Parkes At Stonebridge. The area has much more to offer.
        </p>
      </div>
    </div>
  );
}
