"use client";

import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import L from "leaflet";
import type { Category } from "./MapSection";

// REPLACE THESE BRACKETS [40.xxx, -105.xxx] WITH YOUR GOOGLE MAPS COORDINATES
export const LANDMARKS = [
  // Original 13
  { id: 1, name: "Sandstone Ranch Park", category: "parks", position: [40.159736783065405, -105.03659635920712], description: "Sports and nature complex.", address: "3800 S Martin St" },
  { id: 2, name: "McIntosh Lake", category: "parks", position: [40.19531149252948, -105.1506932234201], description: "3.5-mile loop trail.", address: "1929 Harvard St" },
  { id: 3, name: "Oskar Blues Homemade Liquids and Solids", category: "dining", position: [40.13948705033737, -105.13149354548801], description: "BBQ and craft brews.", address: "1800 Pike Rd" },
  { id: 4, name: "Left Hand Brewing", category: "dining", position: [40.15866325579601, -105.11498038781549], description: "Local tasting room.", address: "1265 Boston Ave" },
  { id: 5, name: "Winner's Circle", category: "dining", position: [40.141695712207216, -105.12924434548786], description: "Axe throwing and bowling.", address: "2251 Ken Pratt Blvd" },
  { id: 6, name: "Longmont Protos Pizza", category: "dining", position: [40.15244390918571, -105.15246510575655], description: "Elevated comfort food.", address: "1111 Allen Dr" },
  { id: 7, name: "Blue Mountain Elementary", category: "schools", position: [40.14422401050304, -105.17363861665198], description: "Top-rated elementary.", address: "1260 Mountain Drive" },
  { id: 8, name: "Altona Middle School", category: "schools", position: [40.144499104084595, -105.16258574178636], description: "Award-winning middle school.", address: "4600 Clover Basin Dr" },
  { id: 9, name: "Silver Creek High School", category: "schools", position: [40.15137978199581, -105.1673746608307], description: "Exceptional college prep.", address: "4901 Nelson Rd" },
  { id: 10, name: "Village at the Peaks", category: "shopping", position: [40.14716659635498, -105.13004466083099], description: "Premium open-air shopping.", address: "1250 S Hover St" },
  { id: 11, name: "UCHealth Longs Peak Hospital", category: "shopping", position: [40.16179985755167, -105.05829678781535], description: "Acute care hospital.", address: "1750 E Ken Pratt Blvd" },

  // Your 7 Additions
  { id: 12, name: "Ziggi's Coffee", category: "dining", position: [40.14317871710589, -105.15059680315949], description: "Local coffee favorite.", address: "3730 Bramante Dr" },
  { id: 13, name: "Vance Brand Airport", category: "landmarks", position: [40.16448574303451, -105.16337500315852], description: "Public-use municipal airport.", address: "229 Airport Rd" },
  { id: 14, name: "Ozo Coffee", category: "dining", position: [40.147542311437824, -105.12908543384583], description: "Artisan coffee roasters.", address: "1232A S Hover St #400" },
  { id: 15, name: "Super Target", category: "shopping", position: [40.153778481318376, -105.13423703014416], description: "Large department store.", address: "551 S Hover St" },
  { id: 16, name: "The Home Depot", category: "shopping", position: [40.155439472638925, -105.13361240315888], description: "Home improvement center.", address: "393 S Hover St" },
  { id: 17, name: "Veterans Community Project", category: "charity", position: [40.15665546945921, -105.14412288966642], description: "Supporting our veterans.", address: "3095 Mountain Brook Dr" },
  { id: 18, name: "King Soopers", category: "shopping", position: [40.15069368427152, -105.13408537432332], description: "Local grocery store.", address: "995 S Hover St" },
];

// ADJUST THESE CORNERS FOR THE EXACT BOUNDARY BOX
// Format is: [Latitude, Longitude]
const neighborhoodBoundary: [number, number][] = [
  [40.1515, -105.1495], // NW Corner
  [40.1515, -105.1480], // NE Corner
  [40.1485, -105.1480], // SE Corner
  [40.1485, -105.1495]  // SW Corner
];

const CAT_COLORS: Record<string, { pin: string; ring: string }> = {
  dining:    { pin: "#d97706", ring: "#fbbf24" },
  parks:     { pin: "#059669", ring: "#34d399" },
  schools:   { pin: "#1d4ed8", ring: "#60a5fa" },
  shopping:  { pin: "#e11d48", ring: "#fb7185" },
  landmarks: { pin: "#475569", ring: "#94a3b8" }, 
  charity:   { pin: "#9333ea", ring: "#c084fc" }, 
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
