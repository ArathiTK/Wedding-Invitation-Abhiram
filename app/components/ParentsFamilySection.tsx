"use client";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import GoldDivider from "./ui/GoldDivider";

export default function ParentsFamilySection() {
  return (
    <section id="family" className="py-20 px-6 bg-[#f5efe4]">
      <div className="max-w-3xl mx-auto text-center">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.25em] uppercase text-[#c8a96e] mb-3">Families</p>
          <h2 className="font-[var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#3a3a3a] mb-10">
            With the Grace of Our Families
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Groom's family */}
          <AnimateOnScroll delay={0.1} direction="left">
            <div className="gold-border-card rounded-lg bg-[#faf7f2] p-8 h-full">
              <p className="text-xs tracking-widest uppercase text-[#c8a96e] mb-4">Groom&apos;s Family</p>
              <h3 className="font-[var(--font-cormorant)] text-2xl text-[#3a3a3a] mb-1">Abhiram TK</h3>
              <p className="text-sm text-[#6b6b6b] italic font-[var(--font-cormorant)] mb-5">Son of</p>
              <p className="font-[var(--font-cormorant)] text-xl text-[#3a3a3a]">Mrs. Sheela M</p>
              <p className="font-[var(--font-cormorant)] text-xl text-[#3a3a3a]">&amp; Mr. Thulasidas TK</p>
              <div className="w-12 h-px bg-[#c8a96e] opacity-40 mx-auto my-5" />
              <p className="text-xs text-[#6b6b6b] italic font-[var(--font-cormorant)] text-base">
                Grandson of Late TK Padmanabhan
                <br />&amp; Mrs. CV Chandramathi
              </p>
            </div>
          </AnimateOnScroll>

          {/* Bride's family */}
          <AnimateOnScroll delay={0.2} direction="right">
            <div className="gold-border-card rounded-lg bg-[#faf7f2] p-8 h-full">
              <p className="text-xs tracking-widest uppercase text-[#c8a96e] mb-4">Bride&apos;s Family</p>
              <h3 className="font-[var(--font-cormorant)] text-2xl text-[#3a3a3a] mb-1">Athira K</h3>
              <p className="text-sm text-[#6b6b6b] italic font-[var(--font-cormorant)] mb-5">Daughter of</p>
              <p className="font-[var(--font-cormorant)] text-xl text-[#3a3a3a]">Mr. Anil Kumar K</p>
              <p className="font-[var(--font-cormorant)] text-xl text-[#3a3a3a]">&amp; Mrs. Sindhu P</p>
            </div>
          </AnimateOnScroll>
        </div>

        <GoldDivider className="mt-12" />
      </div>
    </section>
  );
}
