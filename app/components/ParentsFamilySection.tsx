"use client";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import GoldDivider from "./ui/GoldDivider";

export default function ParentsFamilySection() {
  return (
    <section id="family" className="py-20 px-6" style={{ backgroundColor: "#f8f2e7" }}>
      <div className="max-w-3xl mx-auto text-center">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.25em] uppercase text-[#c8a96e] mb-3">Families</p>
          <h2 className="font-light heading-gold mb-10"
            style={{ fontFamily: "var(--font-seasons)", fontSize: "clamp(2rem, 6vw, 3rem)" }}>
            With the Grace of Our Families
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimateOnScroll delay={0.1} direction="left">
            <div className="gold-border-card rounded-lg p-8 h-full" style={{ backgroundColor: "#efe1cb" }}>
              <p className="text-xs tracking-widest uppercase text-[#c8a96e] mb-4">Groom&apos;s Family</p>
              <h3 className="text-2xl heading-gold mb-1" style={{ fontFamily: "var(--font-seasons)" }}>Abhiram TK</h3>
              <p className="text-sm italic text-[#4a3826]/60 mb-5" style={{ fontFamily: "var(--font-seasons)" }}>Son of</p>
              <p className="text-xl text-[#4a3826]/90" style={{ fontFamily: "var(--font-seasons)" }}>Mrs. Sheela M</p>
              <p className="text-xl text-[#4a3826]/90" style={{ fontFamily: "var(--font-seasons)" }}>&amp; Mr. Thulasidas TK</p>
              <div className="w-12 h-px bg-[#c8a96e] opacity-30 mx-auto my-5" />
              <p className="italic text-base text-[#4a3826]/50" style={{ fontFamily: "var(--font-seasons)" }}>
                Grandson of Late TK Padmanabhan<br />&amp; Mrs. CV Chandramathi
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2} direction="right">
            <div className="gold-border-card rounded-lg p-8 h-full" style={{ backgroundColor: "#efe1cb" }}>
              <p className="text-xs tracking-widest uppercase text-[#c8a96e] mb-4">Bride&apos;s Family</p>
              <h3 className="text-2xl heading-gold mb-1" style={{ fontFamily: "var(--font-seasons)" }}>Athira K</h3>
              <p className="text-sm italic text-[#4a3826]/60 mb-5" style={{ fontFamily: "var(--font-seasons)" }}>Daughter of</p>
              <p className="text-xl text-[#4a3826]/90" style={{ fontFamily: "var(--font-seasons)" }}>Mr. Anil Kumar K</p>
              <p className="text-xl text-[#4a3826]/90" style={{ fontFamily: "var(--font-seasons)" }}>&amp; Mrs. Sindhu P</p>
            </div>
          </AnimateOnScroll>
        </div>

        <GoldDivider className="mt-12" />
      </div>
    </section>
  );
}
