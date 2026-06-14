"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { WEDDING } from "@/lib/constants";

function createIcon(color: string) {
  return L.divIcon({
    className: "",
    html: `<div style="width:28px;height:36px"><svg viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2C8.5 2 4 6.5 4 12C4 20 14 34 14 34C14 34 24 20 24 12C24 6.5 19.5 2 14 2Z" fill="${color}" stroke="white" stroke-width="1.5"/><circle cx="14" cy="12" r="4" fill="white" fill-opacity="0.8"/></svg></div>`,
    iconSize: [28, 36],
    iconAnchor: [14, 36],
    popupAnchor: [0, -36],
  });
}

export default function VenueMapClient() {
  const ceremonyPos: [number, number] = [WEDDING.ceremony.coordinates.lat, WEDDING.ceremony.coordinates.lng];
  const receptionPos: [number, number] = [WEDDING.reception.coordinates.lat, WEDDING.reception.coordinates.lng];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {[
        { label: "Wedding Ceremony", venue: WEDDING.ceremony, pos: ceremonyPos, color: "#c8a96e", zoom: 15 },
        { label: "Reception", venue: WEDDING.reception, pos: receptionPos, color: "#a8854e", zoom: 14 },
      ].map(({ label, venue, pos, color, zoom }) => (
        <div key={label} className="rounded-lg overflow-hidden gold-border-card">
          <div className="px-5 py-4 border-b border-[#c8a96e]/20" style={{ backgroundColor: "#f8f2e7" }}>
            <p className="text-xs tracking-widest uppercase text-[#c8a96e]">{label}</p>
            <p className="text-xl text-[#4a3826] mt-1" style={{ fontFamily: "var(--font-seasons)" }}>{venue.venue}</p>
            <p className="text-sm text-[#4a3826]/60">{venue.address}</p>
          </div>
          <MapContainer center={pos} zoom={zoom} style={{ height: "240px", width: "100%" }} scrollWheelZoom={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'/>
            <Marker position={pos} icon={createIcon(color)}>
              <Popup><strong>{venue.venue}</strong><br />{venue.address}</Popup>
            </Marker>
          </MapContainer>
          <div className="px-5 py-3" style={{ backgroundColor: "#f8f2e7" }}>
            <a href={venue.googleMapsUrl} target="_blank" rel="noopener noreferrer"
              className="text-sm text-[#c8a96e] hover:text-[#e0c896] flex items-center gap-2 transition-colors">
              <svg width="13" height="13" fill="none" viewBox="0 0 16 16">
                <path d="M8 1C5.2 1 3 3.2 3 6c0 4 5 9 5 9s5-5 5-9c0-2.8-2.2-5-5-5z" stroke="currentColor" strokeWidth="1.3"/>
                <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
              </svg>
              Open in Google Maps
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
