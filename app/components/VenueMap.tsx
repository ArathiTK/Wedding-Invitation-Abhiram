"use client";
import dynamic from "next/dynamic";
import AnimateOnScroll from "./ui/AnimateOnScroll";

const VenueMapClient = dynamic(() => import("./VenueMapClient"), {
  ssr: false,
  loading: () => (
    <div className="h-64 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#efe1cb" }}>
      <p className="text-[#c8a96e] text-sm tracking-wide">Loading map...</p>
    </div>
  ),
});

export default function VenueMap() {
  return (
    <section id="venues" className="py-20 px-6" style={{ backgroundColor: "#efe1cb" }}>
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.25em] uppercase text-[#c8a96e] text-center mb-3">Venues</p>
          <h2 className="font-light heading-gold text-center mb-4"
            style={{ fontFamily: "var(--font-seasons)", fontSize: "clamp(2rem, 6vw, 3rem)" }}>
            Find Us Here
          </h2>
          <p className="text-center text-[#4a3826]/60 text-sm mb-10">Two celebrations, two beautiful venues in Kerala.</p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.15}>
          <VenueMapClient />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
