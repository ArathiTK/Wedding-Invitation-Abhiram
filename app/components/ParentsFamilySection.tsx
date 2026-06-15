"use client";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import GoldDivider from "./ui/GoldDivider";

export default function ParentsFamilySection() {
  return (
    <section id="family" className="min-h-[100dvh] flex flex-col justify-center py-10 px-6 bg-paper-2">
      <div className="max-w-3xl mx-auto text-center">
        <AnimateOnScroll>
          <p className="heading-display text-xs text-[#c9a876] mb-2">Families</p>
          <h2 className="heading-gold heading-display mb-5"
            style={{ fontSize: "clamp(1.25rem, 5vw, 1.75rem)", letterSpacing: "0.1em" }}>
            With the Grace of Our Families
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-4">
          <AnimateOnScroll delay={0.1} direction="left">
            <div className="gold-border-card rounded-lg p-5 md:p-6 h-full" style={{ backgroundColor: "#332c26" }}>
              <p className="heading-display text-xs text-[#c9a876] mb-2">Groom&apos;s Family</p>
              <h3 className="text-2xl heading-gold heading-script mb-1">Abhiram TK</h3>
              <p className="text-sm italic text-[#f0e6da]/60 mb-3" style={{ fontFamily: "var(--font-seasons)" }}>Son of</p>
              <p className="text-lg text-[#f0e6da]/90" style={{ fontFamily: "var(--font-seasons)" }}>Mrs. Sheela M</p>
              <p className="text-lg text-[#f0e6da]/90" style={{ fontFamily: "var(--font-seasons)" }}>&amp; Mr. Thulasidas TK</p>
              <div className="w-12 h-px bg-[#c9a876] opacity-30 mx-auto my-3" />
              <p className="italic text-sm text-[#f0e6da]/50" style={{ fontFamily: "var(--font-seasons)" }}>
                Grandson of Late TK Padmanabhan<br />&amp; Mrs. CV Chandramathi
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2} direction="right">
            <div className="gold-border-card rounded-lg p-5 md:p-6 h-full" style={{ backgroundColor: "#332c26" }}>
              <p className="heading-display text-xs text-[#c9a876] mb-2">Bride&apos;s Family</p>
              <h3 className="text-2xl heading-gold heading-script mb-1">Athira K</h3>
              <p className="text-sm italic text-[#f0e6da]/60 mb-3" style={{ fontFamily: "var(--font-seasons)" }}>Daughter of</p>
              <p className="text-lg text-[#f0e6da]/90" style={{ fontFamily: "var(--font-seasons)" }}>Mr. Anil Kumar K</p>
              <p className="text-lg text-[#f0e6da]/90" style={{ fontFamily: "var(--font-seasons)" }}>&amp; Mrs. Sindhu P</p>
            </div>
          </AnimateOnScroll>
        </div>

        <GoldDivider className="mt-6" />
      </div>
    </section>
  );
}
