"use client";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import GoldDivider from "./ui/GoldDivider";
import { useFixedGreenBg } from "./hooks/useFixedGreenBg";
import GreenBgLayer from "./ui/GreenBgLayer";

export default function InvitationMessage() {
  const { fixed, size } = useFixedGreenBg();
  return (
    <section id="invitation" className="relative isolate h-[100dvh] flex flex-col justify-center items-center overflow-hidden py-[clamp(3rem,18dvh,10rem)] px-6">
      <GreenBgLayer fixed={fixed} size={size} />
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-[clamp(0.9rem,4dvh,2.5rem)] rounded-2xl px-6 py-10 sm:px-10"
        style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,249,243,0.15)" }}>

        {/* 1. Ganesh icon */}
        <AnimateOnScroll direction="none">
          <div className="flex justify-center">
            <div style={{
              width: 40, height: 61,
              backgroundColor: "#fff9f3", opacity: 0.85,
              WebkitMaskImage: "url('/assets/ornaments/ganapati.png')",
              maskImage: "url('/assets/ornaments/ganapati.png')",
              WebkitMaskSize: "contain", maskSize: "contain",
              WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat",
              WebkitMaskPosition: "center", maskPosition: "center",
            }} />
          </div>
        </AnimateOnScroll>

        {/* 2. Invitation */}
        <AnimateOnScroll direction="none">
          <p className="heading-display text-xs text-[#fff9f3]">Invitation</p>
        </AnimateOnScroll>

        {/* 3. With hearts full of joy */}
        <AnimateOnScroll delay={0.1}>
          <p className="italic text-lg text-[#fff9f3]/80" style={{ fontFamily: "var(--font-seasons)" }}>
            With hearts full of joy
          </p>
        </AnimateOnScroll>

        {/* 4. we */}
        <AnimateOnScroll delay={0.2}>
          <p className="heading-display text-xs text-[#fff9f3]">we</p>
        </AnimateOnScroll>

        {/* 5. Names */}
        <AnimateOnScroll delay={0.3}>
          <h2 className="heading-gold heading-display leading-tight"
            style={{ fontSize: "clamp(1.25rem, 5vw, 1.75rem)", letterSpacing: "0.1em", color: "#fff9f3" }}>
            Abhiram TK
          </h2>
          <div className="mx-auto my-0" style={{
            width: 110, height: 62,
            backgroundColor: "#fff9f3",
            WebkitMaskImage: "url('/assets/ornaments/and.png')",
            maskImage: "url('/assets/ornaments/and.png')",
            WebkitMaskSize: "contain", maskSize: "contain",
            WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat",
            WebkitMaskPosition: "center", maskPosition: "center",
          }} />
          <h2 className="heading-gold heading-display leading-tight"
            style={{ fontSize: "clamp(1.25rem, 5vw, 1.75rem)", letterSpacing: "0.1em", color: "#fff9f3" }}>
            Athira K
          </h2>
        </AnimateOnScroll>

        {/* 6. Together with families */}
        <AnimateOnScroll delay={0.4}>
          <p className="heading-display text-xs text-[#fff9f3] mt-[clamp(0.5rem,3dvh,2rem)]">
            Together with Our Families, Invite You to Celebrate the beginning of our Happily Ever After
          </p>
        </AnimateOnScroll>

        {/* 7. Divider */}
        <AnimateOnScroll delay={0.5}>
          <GoldDivider className="w-48 mt-[clamp(1rem,5dvh,3rem)]" color="#fff9f3" />
        </AnimateOnScroll>

      </div>
    </section>
  );
}
