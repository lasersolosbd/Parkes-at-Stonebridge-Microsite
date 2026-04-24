"use client";

import { MapContainer, TileLayer, Marker, Popup, Polygon, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";
import type { Category } from "./MapSection";

// Full Landmark Data Restored
export const LANDMARKS = [
  { id: 1, name: "Meadow Village Park", category: "parks", position: [40.1565, -105.1195], description: "Your neighborhood backyard.", address: "Meadow Dr, Longmont, CO 80503" },
  { id: 6, name: "Left Hand Brewing Company", category: "dining", position: [40.1585, -105.1154], description: "Iconic craft brewery.", address: "1265 Boston Ave, Longmont, CO 80501" },
  { id: 9, name: "Blue Mountain Elementary", category: "schools", position: [40.1508, -105.1265], description: "Highly rated elementary.", address: "1260 Mountain Drive, Longmont, CO 80503" },
  { id: 10, name: "Altona Middle School", category: "schools", position: [40.1512, -105.1205], description: "Top-ranked middle school.", address: "4600 Clover Basin Dr, Longmont, CO 80503" },
  { id: 13, name: "Village at the Peaks", category: "shopping", position: [40.1515, -105.1012], description: "Open-air shopping & dining.", address: "1250 S Hover St, Longmont, CO 80501" },
];

// Neighborhood Boundary
const neighborhoodBoundary: [number, number][] = [
  [40.1585, -105.1186], [40.1585, -105.1165], [40.1537, -105.1165], 
  [40.1537, -105.1179], [40.1530, -105.1182], [40.1530, -105.1186]
];

const CAT_COLORS: Record<string, { pin: string; ring: string }> = {
  dining: { pin: "#d97706", ring: "#fbbf24" },
  parks: { pin: "#059669", ring: "#34d399" },
  schools: { pin: "#1d4ed8", ring: "#60a5fa" },
  shopping: { pin: "#e11d48", ring: "#fb7185" },
};

function makeIcon(pinColor: string, ringColor: string): L.DivIcon {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 30 38">
      <path d="M15 0 C6.7 0 0 6.7 0 15 C0 26.25 15 38 15 38 C15 38 30 26.25 30 15 C30 6.7 23.3 0 15 0Z" fill="${pinColor}"/>
      <circle cx="15" cy="15" r="7.5" fill="white" opacity="0.95"/><circle cx="15" cy="15" r="4.5" fill="${ringColor}"/>
    </svg>`;
  return L.divIcon({ html: svg, className: "", iconSize: [28, 36], iconAnchor: [14, 36], popupAnchor: [0, -40] });
}

export default function LeafletMap({ activeCategory }: { activeCategory: Category }) {
  const visible = activeCategory === "all" ? LANDMARKS : LANDMARKS.filter((l) => l.category === activeCategory);

  return (
    <MapContainer center={[40.1565, -105.1178]} zoom={15} scrollWheelZoom={false} style={{ height: "480px", width: "100%" }}>
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
      
      {/* THE PARKES BOUNDARY BOX */}
      <Polygon positions={neighborhoodBoundary} pathOptions={{ fillColor: '#c9a84c', fillOpacity: 0.2, color: '#c9a84c', weight: 2 }} />

      {visible.map((lm) => (
        <Marker key={lm.id} position={lm.position as [number, number]} icon={makeIcon(CAT_COLORS[lm.category]?.pin || "#0f172a", CAT_COLORS[lm.category]?.ring || "#c9a84c")}>
          <Popup><div className="p-1 font-sans"><p className="font-bold text-sm">{lm.name}</p><p className="text-[11px]">{lm.address}</p></div></Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
