"use client";
import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-11-06T12:10:00+05:30");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeDiff(): { diff: TimeLeft; isPast: boolean } {
  const diff = Date.now() - WEDDING_DATE.getTime();
  const isPast = diff >= 0;
  const abs = Math.abs(diff);
  return {
    isPast,
    diff: {
      days: Math.floor(abs / (1000 * 60 * 60 * 24)),
      hours: Math.floor((abs / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((abs / (1000 * 60)) % 60),
      seconds: Math.floor((abs / 1000) % 60),
    },
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function CountdownTimer() {
  const [state, setState] = useState<{ diff: TimeLeft; isPast: boolean } | null>(null);

  useEffect(() => {
    setState(getTimeDiff());
    const id = setInterval(() => setState(getTimeDiff()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!state) return null;

  const { diff, isPast } = state;
  const units = [
    { label: "Days", value: diff.days },
    { label: "Hours", value: diff.hours },
    { label: "Minutes", value: diff.minutes },
    { label: "Seconds", value: diff.seconds },
  ];

  return (
    <div className="flex flex-col items-center gap-2">
      {isPast && (
        <span className="text-xs tracking-widest uppercase text-white/70">Wedded Since</span>
      )}
      <div className="flex gap-4 justify-center flex-wrap">
        {units.map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center min-w-[60px]">
            <span
              className="text-3xl font-light text-white tabular-nums leading-none"
              style={{ fontFamily: "var(--font-seasons)" }}
            >
              {pad(value)}
            </span>
            <span className="text-xs tracking-widest uppercase text-white/70 mt-1">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
