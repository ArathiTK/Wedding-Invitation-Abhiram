"use client";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import { WEDDING, makeGoogleCalendarUrl } from "@/lib/constants";

export default function ReceptionSection() {
  const calUrl = makeGoogleCalendarUrl({
    title: "Abhiram TK & Athira K — Wedding Reception",
    isoDate: WEDDING.reception.isoDate,
    startTime: WEDDING.reception.startTime,
    endTime: WEDDING.reception.endTime,
    venue: WEDDING.reception.venue,
    address: WEDDING.reception.address,
  });

  return (
    <section id="reception" className="py-20 px-6 bg-[#faf7f2]">
      <div className="max-w-xl mx-auto">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.25em] uppercase text-[#c8a96e] text-center mb-3">
            Event Two
          </p>
          <h2 className="font-[var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#3a3a3a] text-center mb-10">
            Reception
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="gold-border-card rounded-lg bg-[#f5efe4] p-8 md:p-10">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 32 L8 16 L20 8 L32 16 L32 32" stroke="#c8a96e" strokeWidth="1.5" fill="none"/>
                <rect x="15" y="22" width="10" height="10" stroke="#c8a96e" strokeWidth="1.2" fill="none"/>
                <path d="M8 16 L20 8 L32 16" stroke="#c8a96e" strokeWidth="1.2" fill="none"/>
              </svg>
            </div>

            <div className="space-y-5 text-center">
              <div>
                <p className="text-xs tracking-widest uppercase text-[#c8a96e] mb-1">Date</p>
                <p className="font-[var(--font-cormorant)] text-2xl text-[#3a3a3a]">{WEDDING.reception.date}</p>
              </div>
              <div className="w-16 h-px bg-[#c8a96e] opacity-40 mx-auto" />
              <div>
                <p className="text-xs tracking-widest uppercase text-[#c8a96e] mb-1">Time</p>
                <p className="font-[var(--font-cormorant)] text-2xl text-[#3a3a3a]">{WEDDING.reception.time}</p>
              </div>
              <div className="w-16 h-px bg-[#c8a96e] opacity-40 mx-auto" />
              <div>
                <p className="text-xs tracking-widest uppercase text-[#c8a96e] mb-1">Venue</p>
                <p className="font-[var(--font-cormorant)] text-2xl text-[#3a3a3a]">{WEDDING.reception.venue}</p>
                <p className="text-sm text-[#6b6b6b] mt-1">{WEDDING.reception.address}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center">
              <a
                href={calUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#c8a96e] text-[#c8a96e] text-sm tracking-wide rounded hover:bg-[#c8a96e] hover:text-white transition-colors duration-300"
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="flex-shrink-0">
                  <rect x="1" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M5 1v4M11 1v4M1 7h14" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                Add to Calendar
              </a>
              <a
                href={WEDDING.reception.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#c8a96e] text-white text-sm tracking-wide rounded hover:bg-[#a8854e] transition-colors duration-300"
              >
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="flex-shrink-0">
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
