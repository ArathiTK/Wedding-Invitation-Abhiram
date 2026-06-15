"use client";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import GoldDivider from "./ui/GoldDivider";
import CountdownTimer from "./ui/CountdownTimer";

export default function InvitationMessage() {
  return (
    <section id="invitation" className="min-h-[100dvh] flex flex-col justify-center py-[clamp(2rem,8vh,5rem)] px-6 bg-paper-1">
      <div className="max-w-2xl mx-auto text-center">
        <AnimateOnScroll>
          <div className="flex justify-center mb-[clamp(0.75rem,3vh,1.25rem)]">
            <div style={{
              width: 40,
              height: 61,
              backgroundColor: "#c9a876",
              opacity: 0.85,
              WebkitMaskImage: "url('/assets/ornaments/ganapati.png')",
              maskImage: "url('/assets/ornaments/ganapati.png')",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }} />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <p className="heading-display text-xs text-[#c9a876] mb-[clamp(0.5rem,2vh,0.75rem)]">Invitation</p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <p className="italic text-lg text-[#c9a876]/80 mb-2" style={{ fontFamily: "var(--font-seasons)" }}>
            With hearts full of joy
          </p>
          <p className="heading-display text-xs text-[#c9a876]">
            Together with Our Families, We Invite You to Celebrate our Wedding
          </p>
        </AnimateOnScroll>

        <GoldDivider className="my-[clamp(1rem,4vh,1.5rem)]" />

        <AnimateOnScroll delay={0.4}>
          <h2 className="heading-gold heading-display leading-tight mt-4"
            style={{ fontSize: "clamp(1.25rem, 5vw, 1.75rem)", letterSpacing: "0.1em" }}>
            Athira K
          </h2>
          <div className="mx-auto my-[clamp(0.5rem,2.5vh,0.75rem)]" style={{
            width: 140,
            height: 79,
            backgroundColor: "#c9a876",
            WebkitMaskImage: "url('/assets/ornaments/and.png')",
            maskImage: "url('/assets/ornaments/and.png')",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }} />
          <h2 className="heading-gold heading-display leading-tight"
            style={{ fontSize: "clamp(1.25rem, 5vw, 1.75rem)", letterSpacing: "0.1em" }}>
            Abhiram TK
          </h2>
        </AnimateOnScroll>

        <GoldDivider className="mt-[clamp(1.5rem,5vh,2rem)]" />

        <AnimateOnScroll delay={0.5}>
          <div className="mt-[clamp(1.5rem,5vh,2rem)]">
            <CountdownTimer />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
