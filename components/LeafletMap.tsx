"use client";

import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import L from "leaflet";

// Custom SVG marker icons
function createMarkerIcon(type: "active" | "sold") {
  const color = type === "active" ? "#c9973a" : "#163060";
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="42" viewBox="0 0 34 42">
      <path d="M17 0C7.6 0 0 7.6 0 17c0 12.75 17 25 17 25S34 29.75 34 17C34 7.6 26.4 0 17 0z" fill="${color}"/>
      <circle cx="17" cy="17" r="7" fill="white" />
    </svg>`;

  return L.divIcon({
    html: svg,
    className: "",
    iconSize: [34, 42],
    iconAnchor: [17, 42],
    popupAnchor: [0, -44],
  });
}

// Neighborhood Boundary Coordinates from your screenshot
const neighborhoodBoundary: [number, number][] = [
  [40.15854, -105.11868], // NW Corner near Nelson
  [40.15854, -105.11655], // NE Corner
  [40.15372, -105.11655], // SE Corner
  [40.15372, -105.11790], // Bend 1
  [40.15300, -105.11820], // Bottom point
  [40.15300, -105.11868], // SW Corner
];

const markers = [
  { id: 1, type: "active" as const, position: [40.1578, -105.1178] as [number, number], address: "2841 Stonebridge Dr", price: "$418,500" },
  { id: 2, type: "sold" as const, position: [40.1545, -105.1172] as [number, number], address: "2907 Stonebridge Dr", price: "$389,000" },
];

export default function LeafletMap() {
  // Center centered on the Parkes units cluster
  const center: [number, number] = [40.1565, -105.1178]; 

  return (
    <MapContainer center={center} zoom={16} style={{ height: "500px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      {/* Highlighting the neighborhood */}
      <Polygon 
        positions={neighborhoodBoundary} 
        pathOptions={{ 
          fillColor: '#c9973a', 
          fillOpacity: 0.1, 
          color: '#c9973a', 
          weight: 2 
        }} 
      />

      {markers.map((m) => (
        <Marker key={m.id} position={m.position} icon={createMarkerIcon(m.type)}>
          <Popup>
            <div className="p-2">
              <p className="font-bold">{m.price}</p>
              <p className="text-xs">{m.address}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
