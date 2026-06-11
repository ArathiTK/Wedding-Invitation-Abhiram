"use client";
import dynamic from "next/dynamic";
import AnimateOnScroll from "./ui/AnimateOnScroll";

const VenueMapClient = dynamic(() => import("./VenueMapClient"), {
  ssr: false,
  loading: () => (
    <div className="h-64 bg-[#f0ebe0] rounded-lg flex items-center justify-center">
      <p className="text-[#c8a96e] text-sm tracking-wide">Loading map...</p>
    </div>
  ),
});

export default function VenueMap() {
  return (
    <section id="venues" className="py-20 px-6 bg-[#faf7f2]">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.25em] uppercase text-[#c8a96e] text-center mb-3">
            Venues
          </p>
          <h2 className="font-[var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#3a3a3a] text-center mb-4">
            Find Us Here
          </h2>
          <p className="text-center text-[#6b6b6b] text-sm mb-10">
            Two celebrations, two beautiful venues in Kerala.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <VenueMapClient />
        </AnimateOnScroll>
      </div>
    </section>
  );
}
