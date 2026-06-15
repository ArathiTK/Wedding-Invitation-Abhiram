"use client";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import GoldDivider from "./ui/GoldDivider";

export default function InvitationMessage() {
  return (
    <section id="invitation" className="min-h-[100dvh] flex flex-col justify-center py-20 px-6 bg-paper-1">
      <div className="max-w-2xl mx-auto text-center">
        <AnimateOnScroll>
          <p className="heading-display text-xs text-[#c9a876] mb-6">Invitation</p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <p className="italic text-lg text-[#c9a876]/80 mb-2" style={{ fontFamily: "var(--font-seasons)" }}>
            With hearts full of joy
          </p>
          <p className="heading-display text-xs text-[#c9a876]">
            Together with Our Families, We Invite You to Celebrate
          </p>
        </AnimateOnScroll>

        <GoldDivider className="my-6" />

        <AnimateOnScroll delay={0.3}>
          <p className="text-xl text-[#f0e6da]/70 mt-6 mb-2" style={{ fontFamily: "var(--font-seasons)" }}>
            the wedding of
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.4}>
          <h2 className="heading-gold heading-script leading-tight mt-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            Athira K
          </h2>
          <p className="italic text-[#c9a876] text-2xl my-3" style={{ fontFamily: "var(--font-seasons)" }}>with</p>
          <h2 className="heading-gold heading-script leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            Abhiram TK
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.5}>
          <p className="italic text-lg text-[#f0e6da]/60 mt-4" style={{ fontFamily: "var(--font-seasons)" }}>
            Your presence is the best gift we could ask for
          </p>
        </AnimateOnScroll>

        <GoldDivider className="mt-8" />
      </div>
    </section>
  );
}
