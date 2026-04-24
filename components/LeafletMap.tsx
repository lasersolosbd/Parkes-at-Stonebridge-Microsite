"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useRef } from "react";
import L from "leaflet";
import type { Category } from "./MapSection";

// ── Landmark data ──────────────────────────────────────────────────────────
export interface Landmark {
  id: number;
  name: string;
  category: Exclude<Category, "all">;
  position: [number, number];
  description: string;
  address: string;
  mapsQuery: string;
}

export const LANDMARKS: Landmark[] = [
  // Parks
  {
    id: 1,
    name: "Meadow Village Park",
    category: "parks",
    position: [40.1565, -105.1195],
    description: "Your neighborhood backyard — a quiet green space with a playground and walking paths just steps from your door.",
    address: "Meadow Dr, Longmont, CO 80503",
    mapsQuery: "Meadow+Village+Park+Longmont+CO",
  },
  {
    id: 2,
    name: "Sandstone Ranch Park",
    category: "parks",
    position: [40.1550, -105.0810],
    description: "A premier destination for sports and nature trails with stunning views of the Front Range.",
    address: "3800 S Martin St, Longmont, CO 80503",
    mapsQuery: "Sandstone+Ranch+Park+Longmont+CO",
  },
  {
    id: 4,
    name: "Golden Ponds Nature Area",
    category: "parks",
    position: [40.1520, -105.1100],
    description: "Peaceful fishing ponds and paved walking paths surrounded by cottonwood trees.",
    address: "Golden Ponds Pkwy, Longmont, CO 80501",
    mapsQuery: "Golden+Ponds+Nature+Area+Longmont+CO",
  },

  // Dining
  {
    id: 6,
    name: "Left Hand Brewing Company",
    category: "dining",
    position: [40.1585, -105.1154],
    description: "Iconic employee-owned craft brewery, famous for Milk Stout Nitro and a great local atmosphere.",
    address: "1265 Boston Ave, Longmont, CO 80501",
    mapsQuery: "Left+Hand+Brewing+Company+Longmont+CO",
  },
  {
    id: 7,
    name: "Winner&apos;s Circle",
    category: "dining",
    position: [40.1685, -105.1175],
    description: "Longmont&apos;s premier entertainment hub — axe throwing, bowling, and arcade games.",
    address: "2251 Ken Pratt Blvd, Longmont, CO 80501",
    mapsQuery: "Winner%27s+Circle+Longmont+CO",
  },

  // Schools
  {
    id: 9,
    name: "Blue Mountain Elementary",
    category: "schools",
    position: [40.1508, -105.1265],
    description: "Highly rated elementary school with a strong focus on community and academic excellence.",
    address: "1260 Mountain Drive, Longmont, CO 80503",
    mapsQuery: "Blue+Mountain+Elementary+Longmont+CO",
  },
  {
    id: 10,
    name: "Altona Middle School",
    category: "schools",
    position: [40.1512, -105.1205],
    description: "Consistently ranked among the top middle schools in Colorado.",
    address: "4600 Clover Basin Dr, Longmont, CO 80503",
    mapsQuery: "Altona+Middle+School+Longmont+CO",
  },

  // Shopping
  {
    id: 13,
    name: "Village at the Peaks",
    category: "shopping",
    position: [40.1515, -105.1012],
    description: "Premier open-air shopping with Target, Whole Foods, and luxury dining options.",
    address: "1250 S Hover St, Longmont, CO 80501",
    mapsQuery: "Village+at+the+Peaks+Longmont+CO",
  },
];

const CAT_COLORS: Record<Exclude<Category, "all">, { pin: string; ring: string; badge: string; text: string }> = {
  dining:     { pin: "#d97706", ring: "#fbbf24", badge: "#92400e", text: "#fef3c7" },
  parks:      { pin: "#059669", ring: "#34d399", badge: "#064e3b", text: "#d1fae5" },
  schools:    { pin: "#1d4ed8", ring: "#60a5fa", badge: "#1e3a8a", text: "#dbeafe" },
  shopping:   { pin: "#e11d48", ring: "#fb7185", badge: "#881337", text: "#ffe4e6" },
  healthcare: { pin: "#0d9488", ring: "#2dd4bf", badge: "#134e4a", text: "#ccfbf1" },
};

const BADGE_LABELS: Record<Exclude<Category, "all">, string> = {
  dining:     "Dining & Coffee",
  parks:      "Parks & Recreation",
  schools:    "Schools",
  shopping:   "Shopping",
  healthcare: "Healthcare",
};

function makeIcon(pinColor: string, ringColor: string): L.DivIcon {
  const w = 30;
  const h = 38;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <path d="M15 0 C6.7 0 0 6.7 0 15 C0 26.25 15 38 15 38 C15 38 30 26.25 30 15 C30 6.7 23.3 0 15 0Z" fill="${pinColor}"/>
      <circle cx="15" cy="15" r="7.5" fill="white" opacity="0.95"/>
      <circle cx="15" cy="15" r="4.5" fill="${ringColor}"/>
    </svg>`;
  return L.divIcon({
    html: svg,
    className: "",
    iconSize: [w, h],
    iconAnchor: [w / 2, h],
    popupAnchor: [0, -(h + 4)],
  });
}

function popupHTML(lm: Landmark): string {
  const c = CAT_COLORS[lm.category];
  const url = `https://www.google.com/maps/search/?api=1&query=${lm.mapsQuery}`;
  return `
    <div style="font-family:sans-serif;width:230px;">
      <div style="background:${c.pin};padding:10px;">
        <span style="font-size:9px;font-weight:700;text-transform:uppercase;color:#fff;">
          ${BADGE_LABELS[lm.category]}
        </span>
        <p style="margin:5px 0 0;font-size:14px;font-weight:700;color:#fff;">${lm.name}</p>
      </div>
      <div style="padding:10px;background:#fff;">
        <p style="font-size:11px;color:#334155;margin:0 0 7px;">${lm.description}</p>
        <a href="${url}" target="_blank" style="display:block;text-align:center;background:#0f172a;color:#c9a84c;font-size:11px;padding:7px;text-decoration:none;border-radius:3px;">
          Get Directions →
        </a>
      </div>
    </div>`;
}

function MapController({ landmarks }: { landmarks: Landmark[] }) {
  const map = useMap();
  useEffect(() => {
    if (landmarks.length === 0) return;
    const bounds = L.latLngBounds(landmarks.map((l) => l.position));
    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 15 });
  }, [landmarks, map]);
  return null;
}

export default function LeafletMap({ activeCategory }: { activeCategory: Category }) {
  const visible = activeCategory === "all" ? LANDMARKS : LANDMARKS.filter((l) => l.category === activeCategory);
  return (
    <MapContainer center={[40.1565, -105.1178]} zoom={14} scrollWheelZoom={false} style={{ height: "100%", minHeight: "520px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {visible.map((lm) => (
        <Marker key={lm.id} position={lm.position} icon={makeIcon(CAT_COLORS[lm.category].pin, CAT_COLORS[lm.category].ring)}>
          <Popup><div dangerouslySetInnerHTML={{ __html: popupHTML(lm) }} /></Popup>
        </Marker>
      ))}
      <MapController landmarks={visible} />
    </MapContainer>
  );
}
