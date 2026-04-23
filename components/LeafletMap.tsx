"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import L from "leaflet";

// ─── Custom SVG marker icons ───────────────────────────────────────────────
function createMarkerIcon(type: "active" | "sold") {
  const color = type === "active" ? "#c9973a" : "#163060";
  const ring = type === "active" ? "#f5d78e" : "#4f78bc";

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="42" viewBox="0 0 34 42">
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="rgba(0,0,0,0.35)"/>
        </filter>
      </defs>
      <path d="M17 0C7.6 0 0 7.6 0 17c0 12.75 17 25 17 25S34 29.75 34 17C34 7.6 26.4 0 17 0z"
        fill="${color}" filter="url(#shadow)"/>
      <circle cx="17" cy="17" r="9" fill="white" opacity="0.95"/>
      <circle cx="17" cy="17" r="5.5" fill="${ring}"/>
    </svg>
  `;

  return L.divIcon({
    html: svg,
    className: "",
    iconSize: [34, 42],
    iconAnchor: [17, 42],
    popupAnchor: [0, -44],
  });
}

// ─── Marker data ───────────────────────────────────────────────────────────
// Note: These markers are placeholder data. You will need to update these 
// manually to reflect real, current MLS data for The Parkes.
const markers = [
  {
    id: 1,
    type: "active" as const,
    position: [40.1534, -105.1179] as [number, number],
    address: "2841 Stonebridge Dr, Unit 4B",
    price: "$418,500",
    beds: 3,
    baths: 2.5,
    sqft: "1,640",
    hoa: "$285/mo",
    status: "Active Listing",
    daysOnMarket: 8,
  },
  {
    id: 2,
    type: "active" as const,
    position: [40.1528, -105.1172] as [number, number],
    address: "2907 Stonebridge Dr, Unit 2A",
    price: "$389,000",
    beds: 2,
    baths: 2,
    sqft: "1,410",
    hoa: "$285/mo",
    status: "Active Listing",
    daysOnMarket: 3,
  },
  {
    id: 3,
    type: "sold" as const,
    position: [40.1538, -105.1182] as [number, number],
    address: "2765 Stonebridge Dr, Unit 7C",
    price: "$401,000",
    beds: 3,
    baths: 2.5,
    sqft: "1,595",
    hoa: "$285/mo",
    status: "Sold — 14 Days",
    daysOnMarket: 14,
  },
  {
    id: 4,
    type: "sold" as const,
    position: [40.1525, -105.1168] as [number, number],
    address: "2993 Stonebridge Dr, Unit 1D",
    price: "$374,900",
    beds: 2,
    baths: 1.5,
    sqft: "1,280",
    hoa: "$285/mo",
    status: "Sold — 6 Days",
    daysOnMarket: 6,
  },
];

// ─── Fix default icon 404 issue ─────────────────────────────────────────────
function FixLeafletIcons() {
  const map = useMap();
  useEffect(() => {
    // no-op — icons are custom SVG
  }, [map]);
  return null;
}

// ─── Popup Card ─────────────────────────────────────────────────────────────
function PopupCard({ m }: { m: typeof markers[0] }) {
  const isActive = m.type === "active";
  return (
    <div className="font-body text-navy-900 rounded-sm overflow-hidden border border-navy-100 shadow-xl" style={{ width: 240 }}>
      {/* Header */}
      <div
        className="px-4 py-3"
        style={{
          background: isActive
            ? "linear-gradient(135deg, #c9973a, #e8c05a)"
            : "linear-gradient(135deg, #163060, #0e2149)",
        }}
      >
        <span
          className="text-[10px] font-mono tracking-[0.2em] uppercase font-semibold"
          style={{ color: isActive ? "#040c20" : "#f5d78e" }}
        >
          {m.status}
        </span>
        <p
          className="text-lg font-display font-bold mt-0.5"
          style={{ color: isActive ? "#040c20" : "white" }}
        >
          {m.price}
        </p>
      </div>

      {/* Body */}
      <div className="px-4 py-3 bg-white">
        <p className="text-navy-800 text-xs font-semibold mb-3 leading-tight">
          {m.address}
        </p>

        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            { label: "Beds", val: m.beds },
            { label: "Baths", val: m.baths },
            { label: "Sq Ft", val: m.sqft },
          ].map((s) => (
            <div key={s.label} className="text-center bg-navy-50 rounded-sm py-2">
              <p className="text-navy-900 text-sm font-bold">{s.val}</p>
              <p className="text-navy-400 text-[9px] font-mono tracking-wider uppercase">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between text-[10px] text-navy-400 font-mono border-t border-navy-100 pt-2">
          <span>HOA: {m.hoa}</span>
          <span>{m.daysOnMarket} DOM</span>
        </div>

        <a
          href="#contact"
          className="block text-center text-[11px] font-semibold tracking-wider uppercase mt-3 py-2 rounded-sm transition-colors shadow"
          style={{ background: "#081535", color: "#e8c05a" }}
        >
          Get Full Details →
        </a>
      </div>
    </div>
  );
}

// ─── Main Map Component ──────────────────────────────────────────────────────
export default function LeafletMap() {
  // Corrected coordinates for Nelson Rd & Stonebridge Dr
  const center: [number, number] = [40.1530, -105.1175]; 

  return (
    <MapContainer
      center={center}
      zoom={16}
      style={{ height: "500px", width: "100%" }}
      zoomControl={true}
    >
      <FixLeafletIcons />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((m) => (
        <Marker key={m.id} position={m.position} icon={createMarkerIcon(m.type)}>
          <Popup>
            <PopupCard m={m} />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
