"use client";
import GoldDivider from "./ui/GoldDivider";

export default function VideoBgSection() {
  return (
    <section id="our-story" className="sticky top-0 h-[100dvh] overflow-hidden flex flex-col justify-center px-8" style={{ zIndex: 1 }}>
      <video
        src="/assets/bg video 1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(31, 37, 25, 0.55)" }} />

      <div className="relative z-10 w-full mx-auto text-center">
        <p className="heading-display text-xs text-[#f0e6da]/90 mb-[clamp(1rem,4vh,2rem)]">Our Story</p>
        <p className="text-[#f0e6da]/90 leading-relaxed mb-[clamp(1.5rem,5vh,3rem)]"
          style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.15rem, 4vw, 1.35rem)", fontStyle: "italic" }}>
          Two separate paths, moving at their own pace, quietly led us to each other. Through a million tiny moments of laughter, comfort, and shared dreams, our individual journeys seamlessly became one beautiful love story.
        </p>
        <p className="text-[#f0e6da]/90 leading-relaxed"
          style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.15rem, 4vw, 1.35rem)", fontStyle: "italic" }}>
          Now, we are ready to take our biggest step yet and promise a lifetime side by side. But a beautiful story is meant to be shared with the people we love and care about most. Please join us to celebrate the beginning of our forever.
        </p>
        <GoldDivider className="w-48 mx-auto mt-[clamp(1rem,4vh,2rem)]" color="#f0e6da" />
      </div>
    </section>
  );
}
