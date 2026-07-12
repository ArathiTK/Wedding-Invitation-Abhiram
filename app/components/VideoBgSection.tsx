"use client";
import { useEffect, useRef } from "react";

export default function VideoBgSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // load() only once — buffers the video without discarding progress on retry
    v.load();

    const tryPlay = () => v.play().catch(() => {});

    // Play immediately; also re-attempt on first user gesture (iOS blocks autoplay until gesture)
    tryPlay();
    const onGesture = () => tryPlay();
    document.addEventListener("touchstart", onGesture, { once: true });
    document.addEventListener("click", onGesture, { once: true });

    // Re-attempt whenever section scrolls back into view
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) tryPlay(); },
      { threshold: 0.1 }
    );
    observer.observe(v);

    // Pause/resume on tab switch
    const handleVisibility = () => {
      if (document.hidden) v.pause();
      else tryPlay();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      document.removeEventListener("touchstart", onGesture);
      document.removeEventListener("click", onGesture);
    };
  }, []);

  return (
    <section id="our-story" className="relative h-[100dvh] overflow-hidden flex flex-col justify-start px-8 pt-[12vh]">
      <video
        ref={videoRef}
        src="/assets/bg%20video%20-%20walking%203.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        suppressHydrationWarning
      />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(20, 25, 15, 0.28)" }} />
      <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none z-10" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, transparent 100%)" }} />

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
