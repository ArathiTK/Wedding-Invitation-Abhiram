"use client";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import GoldDivider from "./ui/GoldDivider";

export default function InvitationMessage() {
  return (
    <section id="invitation" className="h-[100dvh] flex flex-col justify-center overflow-y-auto py-[clamp(3rem,18dvh,10rem)] px-6" style={{ backgroundImage: "url('/assets/bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-[clamp(0.9rem,4dvh,2.5rem)]">

        {/* 1. Ganesh icon */}
        <AnimateOnScroll>
          <div className="flex justify-center">
            <div style={{
              width: 40, height: 61,
              backgroundColor: "#c9a876", opacity: 0.85,
              WebkitMaskImage: "url('/assets/ornaments/ganapati.png')",
              maskImage: "url('/assets/ornaments/ganapati.png')",
              WebkitMaskSize: "contain", maskSize: "contain",
              WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat",
              WebkitMaskPosition: "center", maskPosition: "center",
            }} />
          </div>
        </AnimateOnScroll>

        {/* 2. Invitation */}
        <AnimateOnScroll>
          <p className="heading-display text-xs text-[#c9a876]">Invitation</p>
        </AnimateOnScroll>

        {/* 3. With hearts full of joy */}
        <AnimateOnScroll delay={0.1}>
          <p className="italic text-lg text-[#c9a876]/80" style={{ fontFamily: "var(--font-seasons)" }}>
            With hearts full of joy
          </p>
        </AnimateOnScroll>

        {/* 4. we */}
        <AnimateOnScroll delay={0.2}>
          <p className="heading-display text-xs text-[#c9a876]">we</p>
        </AnimateOnScroll>

        {/* 5. Names */}
        <AnimateOnScroll delay={0.3}>
          <h2 className="heading-gold heading-display leading-tight"
            style={{ fontSize: "clamp(1.25rem, 5vw, 1.75rem)", letterSpacing: "0.1em" }}>
            Abhiram TK
          </h2>
          <div className="mx-auto my-0" style={{
            width: 110, height: 62,
            backgroundColor: "#c9a876",
            WebkitMaskImage: "url('/assets/ornaments/and.png')",
            maskImage: "url('/assets/ornaments/and.png')",
            WebkitMaskSize: "contain", maskSize: "contain",
            WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat",
            WebkitMaskPosition: "center", maskPosition: "center",
          }} />
          <h2 className="heading-gold heading-display leading-tight"
            style={{ fontSize: "clamp(1.25rem, 5vw, 1.75rem)", letterSpacing: "0.1em" }}>
            Athira K
          </h2>
        </AnimateOnScroll>

        {/* 6. Together with families */}
        <AnimateOnScroll delay={0.4}>
          <p className="heading-display text-xs text-[#c9a876] mt-[clamp(0.5rem,3dvh,2rem)]">
            Together with Our Families, Invite You to Celebrate our Wedding
          </p>
        </AnimateOnScroll>

        {/* 7. Divider */}
        <AnimateOnScroll delay={0.5}>
          <GoldDivider className="w-48 mt-[clamp(1rem,5dvh,3rem)]" />
        </AnimateOnScroll>

      </div>
    </section>
  );
}
