"use client";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import GoldDivider from "./ui/GoldDivider";

export default function InvitationMessage() {
  return (
    <section id="invitation" className="py-20 px-6 bg-[#faf7f2]">
      <div className="max-w-2xl mx-auto text-center">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.25em] uppercase text-[#c8a96e] mb-6">
            Invitation
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <p className="font-[var(--font-cormorant)] text-lg text-[#6b6b6b] italic mb-2">
            With the blessings of
          </p>
          <p className="font-[var(--font-cormorant)] text-lg text-[#3a3a3a] font-medium">
            Late TK Padmanabhan &amp; Mrs. CV Chandramathi
          </p>
        </AnimateOnScroll>

        <GoldDivider className="my-6" />

        <AnimateOnScroll delay={0.2}>
          <p className="font-[var(--font-cormorant)] text-xl text-[#6b6b6b] italic mb-2">
            Mrs. Sheela M &amp; Mr. Thulasidas TK
          </p>
          <p className="text-sm tracking-wide text-[#c8a96e] uppercase">
            cordially invite you with your family
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3}>
          <p className="font-[var(--font-cormorant)] text-xl text-[#6b6b6b] mt-6 mb-2">
            to the wedding of their son
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.4}>
          <h2
            className="font-[var(--font-cormorant)] font-light text-[#3a3a3a] leading-tight mt-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Abhiram TK
          </h2>
          <p className="font-[var(--font-cormorant)] italic text-[#c8a96e] text-2xl my-3">with</p>
          <h2
            className="font-[var(--font-cormorant)] font-light text-[#3a3a3a] leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Athira K
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.5}>
          <p className="font-[var(--font-cormorant)] italic text-lg text-[#6b6b6b] mt-4">
            Daughter of Mr. Anil Kumar K &amp; Mrs. Sindhu P
          </p>
        </AnimateOnScroll>

        <GoldDivider className="mt-8" />
      </div>
    </section>
  );
}
