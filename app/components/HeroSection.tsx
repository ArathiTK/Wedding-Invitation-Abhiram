"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import CountdownTimer from "./ui/CountdownTimer";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#faf7f2] px-6 py-16">
      {/* Subtle background texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #c8a96e 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c8a96e] to-transparent opacity-60" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Floral ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <Image
            src="/assets/ornaments/floral-top.svg"
            alt=""
            width={120}
            height={80}
            className="opacity-80"
          />
        </motion.div>

        {/* "Together" */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-[var(--font-cormorant)] italic text-xl text-[#c8a96e] tracking-widest mb-4"
        >
          Together in love
        </motion.p>

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-[var(--font-cormorant)] font-light leading-tight text-[#3a3a3a]"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
        >
          Abhiram
          <span className="block text-[#c8a96e] font-light italic" style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", margin: "0.25em 0" }}>
            &amp;
          </span>
          Athira
        </motion.h1>

        {/* Gold line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-24 h-px bg-[#c8a96e] my-6 origin-center"
        />

        {/* Date teaser */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="font-[var(--font-cormorant)] text-xl text-[#6b6b6b] tracking-wide mb-2"
        >
          06 &amp; 07 November 2026
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-sm tracking-widest uppercase text-[#c8a96e] mb-10"
        >
          Kozhikode &middot; Payyanur · Kerala
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mb-12"
        >
          <CountdownTimer />
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById("invitation")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span className="text-xs tracking-widest uppercase text-[#c8a96e]">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-[#c8a96e] to-transparent"
          />
        </motion.div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e] to-transparent opacity-40" />
    </section>
  );
}
