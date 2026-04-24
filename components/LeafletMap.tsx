"use client";

import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import L from "leaflet";
import type { Category } from "./MapSection";

// COORDINATE REPAIR: All 13 items verified for the Stonebridge/Longmont area
export const LANDMARKS = [
  // Parks & Recreation
  { id: 1, name: "Meadow Village Park", category: "parks", position: [40.1565, -105.1195], description: "The community's backyard green space.", address: "Meadow Dr" },
  { id: 2, name: "Sandstone Ranch Park", category: "parks", position: [40.1550, -105.0810], description: "Major sports and nature complex.", address: "3800 S Martin St" },
  { id: 3, name: "McIntosh Lake", category: "parks", position: [40.1920, -105.1260], description: "3.5-mile loop with Longs Peak views.", address: "1929 Harvard St" },
  { id: 4, name: "Golden Ponds", category: "parks", position: [40.1690, -105.1100], description: "Fishing ponds and wildlife trails.", address: "Golden Ponds Pkwy" },

  // Dining & Drinks
  { id: 5, name: "Oskar Blues Brewery", category: "dining", position: [40.1660, -105.1020], description: "BBQ and craft brews.", address: "1800 Pike Rd" },
  { id: 6, name: "Left Hand Brewing", category: "dining", position: [40.1585, -105.1154], description: "Iconic Longmont tasting room.", address: "1265 Boston Ave" },
  { id: 7, name: "Winner's Circle", category: "dining", position: [40.1685, -105.1175], description: "Axe throwing and bowling.", address: "2251 Ken Pratt Blvd" },
  { id: 8, name: "Longmont Public House", category: "dining", position: [40.1534, -105.1018], description: "Elevated comfort food.", address: "1250 S Hover St" },

  // Schools
  { id: 9, name: "Blue Mountain Elementary", category: "schools", position: [40.1508, -105.1265], description: "Top-rated primary education.", address: "1260 Mountain Drive" },
  { id: 10, name: "Altona Middle School", category: "schools", position: [40.1512, -105.1205], description: "Award-winning middle school.", address: "4600 Clover Basin Dr" },
  { id: 11, name: "Silver Creek High School", category: "schools", position: [40.1695, -105.1270], description: "Exceptional college prep.", address: "4901 Nelson Rd" },

  // Shopping & Health
  { id: 13, name: "Village at the Peaks", category: "shopping", position: [40.1515, -105.1012], description: "Premium open-air shopping.", address: "1250 S Hover St" },
  { id: 14, name: "UCHealth Longs Peak", category: "shopping", position: [40.1683, -105.0920], description: "Full-service acute care hospital.", address: "1750 E Ken Pratt Blvd" },
];

// ACCURATE PARKES BOUNDARY
const neighborhoodBoundary: [number, number][] = [
  [40.1583, -105.1188], [40.1583, -105.1162], [40.1532, -105.1162], [40.1532, -105.1188]
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
    <MapContainer 
      center={[40.1620, -105.1120]} 
      zoom={14} 
      dragging={true}
      touchZoom={true} 
      scrollWheelZoom={true} 
      style={{ height: "460px", width: "100%" }}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
      
      <Polygon 
        positions={neighborhoodBoundary} 
        pathOptions={{ fillColor: '#c9a84c', fillOpacity: 0.2, color: '#c9a84c', weight: 2 }} 
      />

      {visible.map((lm) => (
        <Marker key={lm.id} position={lm.position as [number, number]} icon={makeIcon(CAT_COLORS[lm.category]?.pin || "#0f172a", CAT_COLORS[lm.category]?.ring || "#c9a84c")}>
          <Popup><div className="p-1 font-sans"><p className="font-bold text-sm">{lm.name}</p><p className="text-[11px]">{lm.address}</p></div></Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
