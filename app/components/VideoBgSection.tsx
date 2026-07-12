"use client";
import { useEffect, useRef } from "react";
import GoldDivider from "./ui/GoldDivider";

export default function VideoBgSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {
      const retry = () => { v.play().catch(() => {}); document.removeEventListener("touchstart", retry); document.removeEventListener("click", retry); };
      document.addEventListener("touchstart", retry, { once: true });
      document.addEventListener("click", retry, { once: true });
    });
    const handleVisibility = () => {
      if (document.hidden) v.pause();
      else v.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return (
    <section id="our-story" className="relative h-[100dvh] overflow-hidden flex flex-col justify-start px-8 pt-[12vh]">
      <video
        ref={videoRef}
        src="/assets/bg%20video%201.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        suppressHydrationWarning
      />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(20, 25, 15, 0.28)" }} />

      <div className="relative z-10 w-full mx-auto text-center">
        <p className="heading-display text-xs text-black mb-[clamp(1rem,4vh,2rem)]">Our Story</p>
        <p className="text-black leading-relaxed mb-[clamp(1.5rem,5vh,3rem)]"
          style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.15rem, 4vw, 1.35rem)", fontStyle: "italic" }}>
          Two separate paths, moving at their own pace, quietly led us to each other. Through a million tiny moments of laughter, comfort, and shared dreams, our individual journeys seamlessly became one beautiful love story.
        </p>


      </div>
    </section>
  );
}
