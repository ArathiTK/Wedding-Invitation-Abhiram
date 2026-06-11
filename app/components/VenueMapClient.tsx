"use client";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { WEDDING } from "@/lib/constants";

// Fix Leaflet default icon issue with webpack
function createIcon(color: string) {
  return L.divIcon({
    className: "",
    html: `<div style="
      width:28px;height:36px;position:relative;
    ">
      <svg viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2C8.5 2 4 6.5 4 12C4 20 14 34 14 34C14 34 24 20 24 12C24 6.5 19.5 2 14 2Z" fill="${color}" stroke="white" stroke-width="1.5"/>
        <circle cx="14" cy="12" r="4" fill="white" fill-opacity="0.8"/>
      </svg>
    </div>`,
    iconSize: [28, 36],
    iconAnchor: [14, 36],
    popupAnchor: [0, -36],
  });
}

export default function VenueMapClient() {
  useEffect(() => {
    // Ensure CSS is loaded
  }, []);

  const ceremonyCenter: [number, number] = [
    WEDDING.ceremony.coordinates.lat,
    WEDDING.ceremony.coordinates.lng,
  ];
  const receptionCenter: [number, number] = [
    WEDDING.reception.coordinates.lat,
    WEDDING.reception.coordinates.lng,
  ];

  // Center map between both venues
  const mapCenter: [number, number] = [
    (ceremonyCenter[0] + receptionCenter[0]) / 2,
    (ceremonyCenter[1] + receptionCenter[1]) / 2,
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Ceremony map */}
      <div className="rounded-lg overflow-hidden gold-border-card">
        <div className="bg-[#faf7f2] px-5 py-4 border-b border-[#c8a96e]/20">
          <p className="text-xs tracking-widest uppercase text-[#c8a96e]">Wedding Ceremony</p>
          <p className="font-[var(--font-cormorant)] text-xl text-[#3a3a3a] mt-1">{WEDDING.ceremony.venue}</p>
          <p className="text-sm text-[#6b6b6b]">{WEDDING.ceremony.address}</p>
        </div>
        <MapContainer
          center={ceremonyCenter}
          zoom={15}
          style={{ height: "250px", width: "100%" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
          />
          <Marker position={ceremonyCenter} icon={createIcon("#c8a96e")}>
            <Popup>
              <strong>{WEDDING.ceremony.venue}</strong>
              <br />{WEDDING.ceremony.address}
            </Popup>
          </Marker>
        </MapContainer>
        <div className="bg-[#faf7f2] px-5 py-3">
          <a
            href={WEDDING.ceremony.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#c8a96e] hover:text-[#a8854e] flex items-center gap-2 transition-colors"
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
              <path d="M8 1C5.2 1 3 3.2 3 6c0 4 5 9 5 9s5-5 5-9c0-2.8-2.2-5-5-5z" stroke="currentColor" strokeWidth="1.3"/>
              <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
            </svg>
            Open in Google Maps
          </a>
        </div>
      </div>

      {/* Reception map */}
      <div className="rounded-lg overflow-hidden gold-border-card">
        <div className="bg-[#faf7f2] px-5 py-4 border-b border-[#c8a96e]/20">
          <p className="text-xs tracking-widest uppercase text-[#c8a96e]">Reception</p>
          <p className="font-[var(--font-cormorant)] text-xl text-[#3a3a3a] mt-1">{WEDDING.reception.venue}</p>
          <p className="text-sm text-[#6b6b6b]">{WEDDING.reception.address}</p>
        </div>
        <MapContainer
          center={receptionCenter}
          zoom={14}
          style={{ height: "250px", width: "100%" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
          />
          <Marker position={receptionCenter} icon={createIcon("#a8854e")}>
            <Popup>
              <strong>{WEDDING.reception.venue}</strong>
              <br />{WEDDING.reception.address}
            </Popup>
          </Marker>
        </MapContainer>
        <div className="bg-[#faf7f2] px-5 py-3">
          <a
            href={WEDDING.reception.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#c8a96e] hover:text-[#a8854e] flex items-center gap-2 transition-colors"
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 16 16">
              <path d="M8 1C5.2 1 3 3.2 3 6c0 4 5 9 5 9s5-5 5-9c0-2.8-2.2-5-5-5z" stroke="currentColor" strokeWidth="1.3"/>
              <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
            </svg>
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
