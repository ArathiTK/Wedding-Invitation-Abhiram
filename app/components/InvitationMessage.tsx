"use client";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import GoldDivider from "./ui/GoldDivider";

export default function InvitationMessage() {
  return (
    <section id="invitation" className="py-20 px-6" style={{ backgroundColor: "#efe1cb" }}>
      <div className="max-w-2xl mx-auto text-center">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.25em] uppercase text-[#c8a96e] mb-6">Invitation</p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <p className="italic text-lg text-[#c8a96e]/80 mb-2" style={{ fontFamily: "var(--font-seasons)" }}>
            With hearts full of joy
          </p>
          <p className="text-sm tracking-wide text-[#c8a96e] uppercase">
            together with our families, we invite you to celebrate
          </p>
        </AnimateOnScroll>

        <GoldDivider className="my-6" />

        <AnimateOnScroll delay={0.3}>
          <p className="text-xl text-[#4a3826]/70 mt-6 mb-2" style={{ fontFamily: "var(--font-seasons)" }}>
            the wedding of
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.4}>
          <h2 className="font-light heading-gold leading-tight mt-4"
            style={{ fontFamily: "var(--font-seasons)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            Athira K
          </h2>
          <p className="italic text-[#c8a96e] text-2xl my-3" style={{ fontFamily: "var(--font-seasons)" }}>with</p>
          <h2 className="font-light heading-gold leading-tight"
            style={{ fontFamily: "var(--font-seasons)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            Abhiram TK
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.5}>
          <p className="italic text-lg text-[#4a3826]/60 mt-4" style={{ fontFamily: "var(--font-seasons)" }}>
            Your presence is the best gift we could ask for
          </p>
        </AnimateOnScroll>

        <GoldDivider className="mt-8" />
      </div>
    </section>
  );
}
