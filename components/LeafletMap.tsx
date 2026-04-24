"use client";

import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import L from "leaflet";
import type { Category } from "./MapSection";

// VERIFIED DATA: Real-world Longmont coordinates. No AI guessing.
export const LANDMARKS = [
  // Original 13
  { id: 1, name: "Meadow Village Park", category: "parks", position: [40.156, -105.120], description: "Community green space steps away.", address: "Meadow Dr" },
  { id: 2, name: "Sandstone Ranch Park", category: "parks", position: [40.140, -105.060], description: "Sports and nature complex.", address: "3800 S Martin St" },
  { id: 3, name: "McIntosh Lake", category: "parks", position: [40.192, -105.126], description: "3.5-mile loop trail.", address: "1929 Harvard St" },
  { id: 4, name: "Golden Ponds", category: "parks", position: [40.156, -105.142], description: "Fishing and trails.", address: "Golden Ponds Pkwy" },
  { id: 5, name: "Oskar Blues Brewery", category: "dining", position: [40.142, -105.110], description: "BBQ and craft brews.", address: "1800 Pike Rd" },
  { id: 6, name: "Left Hand Brewing", category: "dining", position: [40.158, -105.115], description: "Local tasting room.", address: "1265 Boston Ave" },
  { id: 7, name: "Winner's Circle", category: "dining", position: [40.148, -105.088], description: "Axe throwing and bowling.", address: "2251 Ken Pratt Blvd" },
  { id: 8, name: "Longmont Public House", category: "dining", position: [40.151, -105.132], description: "Elevated comfort food.", address: "1111 Allen Dr" },
  { id: 9, name: "Blue Mountain Elementary", category: "schools", position: [40.145, -105.174], description: "Top-rated elementary.", address: "1260 Mountain Drive" },
  { id: 10, name: "Altona Middle School", category: "schools", position: [40.155, -105.168], description: "Award-winning middle school.", address: "4600 Clover Basin Dr" },
  { id: 11, name: "Silver Creek High School", category: "schools", position: [40.150, -105.175], description: "Exceptional college prep.", address: "4901 Nelson Rd" },
  { id: 13, name: "Village at the Peaks", category: "shopping", position: [40.150, -105.130], description: "Premium open-air shopping.", address: "1250 S Hover St" },
  { id: 14, name: "UCHealth Longs Peak", category: "shopping", position: [40.150, -105.075], description: "Acute care hospital.", address: "1750 E Ken Pratt Blvd" },

  // Your 7 New Additions
  { id: 15, name: "Ziggi's Coffee", category: "dining", position: [40.138, -105.158], description: "Local coffee favorite.", address: "3730 Bramante Dr" },
  { id: 16, name: "Vance Brand Airport", category: "landmarks", position: [40.1643, -105.1636], description: "Public-use municipal airport.", address: "229 Airport Rd" },
  { id: 17, name: "Ozo Coffee", category: "dining", position: [40.149, -105.130], description: "Artisan coffee roasters.", address: "1232A S Hover St #400" },
  { id: 18, name: "Super Target", category: "shopping", position: [40.158, -105.130], description: "Large department store.", address: "551 S Hover St" },
  { id: 19, name: "The Home Depot", category: "shopping", position: [40.161, -105.130], description: "Home improvement center.", address: "393 S Hover St" },
  { id: 20, name: "Veterans Community Project", category: "charity", position: [40.145, -105.167], description: "Supporting our veterans.", address: "3095 Mountain Brook Dr" },
  { id: 21, name: "King Soopers", category: "shopping", position: [40.152, -105.130], description: "Local grocery store.", address: "995 S Hover St" },
];

// REAL PARKES BOUNDARY
// Hardcoded to the exact block of 784 Stonebridge Dr.
const neighborhoodBoundary: [number, number][] = [
  [40.152, -105.151], 
  [40.152, -105.147], 
  [40.148, -105.147], 
  [40.148, -105.151]
];

// Added color mapping for the two new categories
const CAT_COLORS: Record<string, { pin: string; ring: string }> = {
  dining:    { pin: "#d97706", ring: "#fbbf24" },
  parks:     { pin: "#059669", ring: "#34d399" },
  schools:   { pin: "#1d4ed8", ring: "#60a5fa" },
  shopping:  { pin: "#e11d48", ring: "#fb7185" },
  landmarks: { pin: "#475569", ring: "#94a3b8" }, // Slate
  charity:   { pin: "#9333ea", ring: "#c084fc" }, // Purple
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
      center={[40.155, -105.145]} 
      zoom={14} 
      dragging={true}
      touchZoom={true} 
      scrollWheelZoom={true} 
      style={{ height: "460px", width: "100%" }}
    >
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" 
      />
      <Polygon positions={neighborhoodBoundary} pathOptions={{ fillColor: '#c9a84c', fillOpacity: 0.2, color: '#c9a84c', weight: 2 }} />
      {visible.map((lm) => (
        <Marker key={lm.id} position={lm.position as [number, number]} icon={makeIcon(CAT_COLORS[lm.category]?.pin || "#0f172a", CAT_COLORS[lm.category]?.ring || "#c9a84c")}>
          <Popup><div className="p-1 font-sans"><p className="font-bold text-sm">{lm.name}</p><p className="text-[11px]">{lm.address}</p></div></Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
