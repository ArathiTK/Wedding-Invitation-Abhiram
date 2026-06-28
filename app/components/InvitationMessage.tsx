"use client";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import GoldDivider from "./ui/GoldDivider";

export default function InvitationMessage() {
  return (
    <section id="invitation" className="h-[100dvh] flex flex-col justify-center overflow-y-auto py-[clamp(2rem,8vh,5rem)] px-6" style={{ backgroundImage: "url('/assets/bg light.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
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
            Abhiram TK
          </h2>
          <p className="text-xs text-[#c9a876]/35 mt-1" style={{ fontFamily: "var(--font-seasons)" }}>
            s/o Mrs. Sheela M &amp; Mr. Thulasidas TK
          </p>
          <div className="mx-auto my-1" style={{
            width: 110,
            height: 62,
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
            Athira K
          </h2>
          <p className="text-xs text-[#c9a876]/35 mt-1" style={{ fontFamily: "var(--font-seasons)" }}>
            d/o Mrs. Sindhu P &amp; Mr. Anil Kumar K
          </p>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
