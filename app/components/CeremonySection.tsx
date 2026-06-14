"use client";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import { WEDDING, makeGoogleCalendarUrl } from "@/lib/constants";

export default function CeremonySection() {
  const calUrl = makeGoogleCalendarUrl({
    title: "Abhiram TK & Athira K — Wedding Ceremony",
    isoDate: WEDDING.ceremony.isoDate,
    startTime: WEDDING.ceremony.startTime,
    endTime: WEDDING.ceremony.endTime,
    venue: WEDDING.ceremony.venue,
    address: WEDDING.ceremony.address,
  });

  return (
    <section id="ceremony" className="py-20 px-6" style={{ backgroundColor: "#f8f2e7" }}>
      <div className="max-w-xl mx-auto">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.25em] uppercase text-[#c8a96e] text-center mb-3">Event One</p>
          <h2 className="font-light heading-gold text-center mb-10"
            style={{ fontFamily: "var(--font-seasons)", fontSize: "clamp(2rem, 6vw, 3rem)" }}>
            Wedding Ceremony
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="gold-border-card rounded-lg p-8 md:p-10" style={{ backgroundColor: "#efe1cb" }}>
            <div className="flex justify-center mb-6">
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                <path d="M20 4 C12 4 6 10 6 18 C6 28 20 36 20 36 C20 36 34 28 34 18 C34 10 28 4 20 4Z"
                  stroke="#c8a96e" strokeWidth="1.5" fill="none"/>
                <circle cx="20" cy="18" r="4" fill="#c8a96e" fillOpacity="0.5"/>
              </svg>
            </div>

            <div className="space-y-5 text-center">
              {[
                { label: "Date", value: WEDDING.ceremony.date },
                { label: "Time", value: WEDDING.ceremony.time },
                { label: "Venue", value: WEDDING.ceremony.venue, sub: WEDDING.ceremony.address },
              ].map(({ label, value, sub }) => (
                <div key={label}>
                  <p className="text-xs tracking-widest uppercase text-[#c8a96e] mb-1">{label}</p>
                  <p className="text-[#4a3826] text-xl" style={{ fontFamily: "var(--font-seasons)" }}>{value}</p>
                  {sub && <p className="text-sm text-[#4a3826]/60 mt-1">{sub}</p>}
                  <div className="w-12 h-px bg-[#c8a96e] opacity-30 mx-auto mt-4" />
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center">
              <a href={calUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#c8a96e] text-[#c8a96e] text-sm tracking-wide rounded hover:bg-[#c8a96e] hover:text-[#4a3826] transition-colors duration-300">
                <svg width="14" height="14" fill="none" viewBox="0 0 16 16" className="flex-shrink-0">
                  <rect x="1" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M5 1v4M11 1v4M1 7h14" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                Add to Calendar
              </a>
              <a href={WEDDING.ceremony.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#c8a96e] text-[#4a3826] text-sm tracking-wide rounded font-medium hover:bg-[#e0c896] transition-colors duration-300">
                <svg width="14" height="14" fill="none" viewBox="0 0 16 16" className="flex-shrink-0">
                  <path d="M8 1C5.2 1 3 3.2 3 6c0 4 5 9 5 9s5-5 5-9c0-2.8-2.2-5-5-5z" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
