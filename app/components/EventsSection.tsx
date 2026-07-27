"use client";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import { WEDDING, makeGoogleCalendarUrl } from "@/lib/constants";

export default function EventsSection() {
  const events = [
    {
      name: "Pre-Wedding Reception",
      date: WEDDING.preWeddingReception.date,
      time: WEDDING.preWeddingReception.time,
      venue: WEDDING.preWeddingReception.venue,
      address: WEDDING.preWeddingReception.address,
      cardBg: "url('/assets/bg.png')",
      cardBgPosition: "center",
      googleMapsUrl: WEDDING.preWeddingReception.googleMapsUrl,
      calUrl: makeGoogleCalendarUrl({
        title: "Abhiram TK & Athira K — Pre-Wedding Reception",
        isoDate: WEDDING.preWeddingReception.isoDate,
        startTime: WEDDING.preWeddingReception.startTime,
        endTime: WEDDING.preWeddingReception.endTime,
        venue: WEDDING.preWeddingReception.venue,
        address: WEDDING.preWeddingReception.address,
      }),
    },
    {
      name: "Wedding Ceremony",
      date: WEDDING.ceremony.date,
      time: WEDDING.ceremony.time,
      venue: WEDDING.ceremony.venue,
      address: WEDDING.ceremony.address,
      cardBg: "url('/assets/bg.png')",
      cardBgPosition: "center 20%",
      googleMapsUrl: WEDDING.ceremony.googleMapsUrl,
      calUrl: makeGoogleCalendarUrl({
        title: "Abhiram TK & Athira K — Wedding Ceremony",
        isoDate: WEDDING.ceremony.isoDate,
        startTime: WEDDING.ceremony.startTime,
        endTime: WEDDING.ceremony.endTime,
        venue: WEDDING.ceremony.venue,
        address: WEDDING.ceremony.address,
      }),
    },
    {
      name: "Reception",
      date: WEDDING.reception.date,
      time: WEDDING.reception.time,
      venue: WEDDING.reception.venue,
      address: WEDDING.reception.address,
      cardBg: "url('/assets/bg.png')",
      cardBgPosition: "center",
      googleMapsUrl: WEDDING.reception.googleMapsUrl,
      calUrl: makeGoogleCalendarUrl({
        title: "Abhiram TK & Athira K — Wedding Reception",
        isoDate: WEDDING.reception.isoDate,
        startTime: WEDDING.reception.startTime,
        endTime: WEDDING.reception.endTime,
        venue: WEDDING.reception.venue,
        address: WEDDING.reception.address,
      }),
    },
  ];

  return (
    <section id="events" className="h-[100svh] flex flex-col justify-center items-center overflow-y-auto py-[clamp(1.5rem,5vh,2.5rem)] px-6">
      <div className="max-w-xl mx-auto w-full rounded-2xl px-4 py-[clamp(1.25rem,4vh,2rem)] sm:px-6"
        style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,249,243,0.15)" }}>
        <AnimateOnScroll>
          <p className="heading-display text-xs text-[#fff9f3] text-center mb-[clamp(0.5rem,2vh,0.75rem)]">Events</p>
        </AnimateOnScroll>

        <div className="flex flex-col gap-[clamp(0.4rem,1.5vh,0.75rem)]">
          {events.map(({ name, date, time, venue, address, googleMapsUrl }, i) => (
            <AnimateOnScroll key={name} delay={0.1 + i * 0.1}>
              <div className="rounded-lg px-3 py-[clamp(0.5rem,1.5vh,0.85rem)]">
                <h3 className="heading-gold heading-display text-center mb-[clamp(0.25rem,1vh,0.4rem)]"
                  style={{ fontSize: "clamp(1rem, 4vw, 1.3rem)", letterSpacing: "0.08em", color: "#fff9f3" }}>
                  {name}
                </h3>
                <div className="flex items-center justify-center flex-wrap mb-[clamp(0.2rem,1vh,0.35rem)]" style={{ columnGap: "clamp(0.6rem,3vw,1.5rem)", rowGap: "0.2rem" }}>
                  <span className="flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                      <rect x="3" y="5" width="18" height="16" rx="2" stroke="#fff9f3" strokeWidth="1.5"/>
                      <path d="M3 9h18M8 3v4M16 3v4" stroke="#fff9f3" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <p className="text-[#fff9f3] text-sm" style={{ fontFamily: "var(--font-seasons)" }}>{date}</p>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                      <circle cx="12" cy="12" r="9" stroke="#fff9f3" strokeWidth="1.5"/>
                      <path d="M12 7v5l3 2" stroke="#fff9f3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-[#fff9f3] text-sm" style={{ fontFamily: "var(--font-seasons)" }}>{time}</p>
                  </span>
                </div>
                <div className="flex items-start justify-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0" style={{ marginTop: "0.15em" }}>
                    <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" stroke="#fff9f3" strokeWidth="1.5"/>
                    <circle cx="12" cy="10" r="2.5" stroke="#fff9f3" strokeWidth="1.5"/>
                  </svg>
                  <div className="text-center">
                    <p className="text-[#fff9f3] text-sm" style={{ fontFamily: "var(--font-seasons)" }}>{venue}</p>
                    <p className="text-xs text-[#fff9f3]/60 mt-0.5">{address}</p>
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-block text-xs text-[#fff9f3] underline mt-1 hover:text-[#fff9f3] transition-colors">
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
