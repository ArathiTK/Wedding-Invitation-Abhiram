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
    <section id="ceremony" className="min-h-[100dvh] flex flex-col justify-center py-10 px-6 bg-paper-2">
      <div className="max-w-xl mx-auto">
        <AnimateOnScroll>
          <p className="heading-display text-xs text-[#c9a876] text-center mb-2">Event One</p>
          <h2 className="heading-gold heading-display text-center mb-5"
            style={{ fontSize: "clamp(1.5rem, 6vw, 2.25rem)" }}>
            Wedding Ceremony
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="gold-border-card rounded-lg p-6 md:p-8" style={{ backgroundColor: "#332c26" }}>
            <div className="flex justify-center mb-3">
              <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
                <path d="M20 4 C12 4 6 10 6 18 C6 28 20 36 20 36 C20 36 34 28 34 18 C34 10 28 4 20 4Z"
                  stroke="#c9a876" strokeWidth="1.5" fill="none"/>
                <circle cx="20" cy="18" r="4" fill="#c9a876" fillOpacity="0.5"/>
              </svg>
            </div>

            <div className="space-y-3 text-center">
              {[
                { label: "Date", value: WEDDING.ceremony.date },
                { label: "Time", value: WEDDING.ceremony.time },
                { label: "Venue", value: WEDDING.ceremony.venue, sub: WEDDING.ceremony.address },
              ].map(({ label, value, sub }) => (
                <div key={label}>
                  <p className="heading-display text-xs text-[#c9a876] mb-1">{label}</p>
                  <p className="text-[#f0e6da] text-lg" style={{ fontFamily: "var(--font-seasons)" }}>{value}</p>
                  {sub && <p className="text-sm text-[#f0e6da]/60 mt-1">{sub}</p>}
                  <div className="w-12 h-px bg-[#c9a876] opacity-30 mx-auto mt-2" />
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-5 justify-center">
              <a href={calUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-[#c9a876] text-[#c9a876] text-sm tracking-wide rounded hover:bg-[#c9a876] hover:text-[#f0e6da] transition-colors duration-300">
                <svg width="14" height="14" fill="none" viewBox="0 0 16 16" className="flex-shrink-0">
                  <rect x="1" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M5 1v4M11 1v4M1 7h14" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                Add to Calendar
              </a>
              <a href={WEDDING.ceremony.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#c9a876] text-[#f0e6da] text-sm tracking-wide rounded font-medium hover:bg-[#c9a876] transition-colors duration-300">
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
