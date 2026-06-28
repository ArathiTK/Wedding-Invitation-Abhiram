"use client";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import { WEDDING, makeGoogleCalendarUrl } from "@/lib/constants";

export default function EventsSection() {
  const events = [
    {
      name: "Wedding Ceremony",
      graphic: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
          <path d="M4 4c0 5 3.5 9 8 9s8-4 8-9" stroke="#c9a876" strokeWidth="1.3" strokeLinecap="round"/>
          <circle cx="10" cy="13.5" r="1" fill="#c9a876"/>
          <circle cx="14" cy="13.5" r="1" fill="#c9a876"/>
          <path d="M12 13.5v2" stroke="#c9a876" strokeWidth="1.3" strokeLinecap="round"/>
          <path d="M12 15.5l-2.2 2.2a1.6 1.6 0 0 0 0 2.2l1.5 1.5a1 1 0 0 0 1.4 0l1.5-1.5a1.6 1.6 0 0 0 0-2.2L12 15.5z" stroke="#c9a876" strokeWidth="1.3" strokeLinejoin="round"/>
        </svg>
      ),
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
      graphic: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
          <path d="M12 2v3" stroke="#c9a876" strokeWidth="1.3" strokeLinecap="round"/>
          <path d="M12 5c-1 0-1.5.8-1.5 1.5S11 8 12 8s1.5-.8 1.5-1.5S13 5 12 5z" stroke="#c9a876" strokeWidth="1.3"/>
          <path d="M4 21v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6" stroke="#c9a876" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 21h16" stroke="#c9a876" strokeWidth="1.3" strokeLinecap="round"/>
          <path d="M6 13v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" stroke="#c9a876" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 17c1-1 2 1 3 0s2 1 3 0 2 1 3 0 2 1 3 0 2 1 3 0" stroke="#c9a876" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
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
    <section id="events" className="bg-flip-y h-[100dvh] flex flex-col justify-center overflow-y-auto py-[clamp(1.5rem,5vh,2.5rem)] px-6" style={{ "--flip-bg": "url('/assets/bg.png')" } as React.CSSProperties}>
      <div className="max-w-xl mx-auto w-full">
        <AnimateOnScroll>
          <p className="heading-display text-xs text-[#c9a876] text-center mb-[clamp(0.75rem,3vh,1.25rem)]">Events</p>
        </AnimateOnScroll>

        <div className="flex flex-col gap-[clamp(0.75rem,3vh,1.5rem)]">
          {events.map(({ name, graphic, date, time, venue, address, cardBg, cardBgPosition, googleMapsUrl }, i) => (
            <AnimateOnScroll key={name} delay={0.1 + i * 0.1}>
              <div className="gold-border-card rounded-lg p-5">
                <div className="flex justify-center mb-[clamp(0.4rem,1.5vh,0.75rem)]">{graphic}</div>
                <h3 className="heading-gold heading-display text-center mb-[clamp(0.5rem,2vh,1rem)]"
                  style={{ fontSize: "clamp(1.1rem, 4.5vw, 1.5rem)", letterSpacing: "0.1em" }}>
                  {name}
                </h3>
                <div className="space-y-[clamp(0.5rem,2vh,0.85rem)]">
                  {[
                    {
                      label: "Date", value: date,
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="5" width="18" height="16" rx="2" stroke="#c9a876" strokeWidth="1.5"/>
                          <path d="M3 9h18M8 3v4M16 3v4" stroke="#c9a876" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      ),
                    },
                    {
                      label: "Time", value: time,
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="9" stroke="#c9a876" strokeWidth="1.5"/>
                          <path d="M12 7v5l3 2" stroke="#c9a876" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ),
                    },
                    {
                      label: "Venue", value: venue, sub: address,
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" stroke="#c9a876" strokeWidth="1.5"/>
                          <circle cx="12" cy="10" r="2.5" stroke="#c9a876" strokeWidth="1.5"/>
                        </svg>
                      ),
                    },
                  ].map(({ label, value, icon, sub }) => (
                    <div key={label} className={`flex justify-center gap-2.5 ${sub ? "items-start" : "items-center"}`}>
                      <div className="flex-shrink-0" style={sub ? { marginTop: "0.15em" } : undefined}>{icon}</div>
                      <div className="text-center">
                        <p className="text-[#f0e6da] text-base" style={{ fontFamily: "var(--font-seasons)" }}>{value}</p>
                        {sub && <p className="text-xs text-[#f0e6da]/60 mt-0.5">{sub}</p>}
                        {label === "Venue" && (
                          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-block text-xs text-[#c9a876] underline mt-1 hover:text-[#f0e6da] transition-colors">
                            Get Directions
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
