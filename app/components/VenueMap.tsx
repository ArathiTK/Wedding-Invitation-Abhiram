"use client";
import dynamic from "next/dynamic";
import AnimateOnScroll from "./ui/AnimateOnScroll";

const VenueMapClient = dynamic(() => import("./VenueMapClient"), {
  ssr: false,
  loading: () => (
    <div className="h-40 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#332c26" }}>
      <p className="text-[#c9a876] text-sm tracking-wide">Loading map...</p>
    </div>
  ),
});

export default function VenueMap() {
  return (
    <section id="venues" className="min-h-[100dvh] flex flex-col justify-center py-10 px-6 bg-paper-1">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <p className="heading-display text-xs text-[#c9a876] text-center mb-2">Venues</p>
          <h2 className="heading-gold heading-display text-center mb-2"
            style={{ fontSize: "clamp(1.5rem, 6vw, 2.25rem)" }}>
            Find Us Here
          </h2>
          <p className="text-center text-[#f0e6da]/60 text-sm mb-4">Two celebrations, two beautiful venues in Kerala.</p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.15}>
          <VenueMapClient />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
