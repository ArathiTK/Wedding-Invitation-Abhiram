"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import CountdownTimer from "./ui/CountdownTimer";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-16"
      style={{ backgroundColor: "#f8f2e7" }}>

      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }} />

      {/* Top gold border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e] to-transparent opacity-60" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Ornament */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }} className="mb-8">
          <Image src="/assets/ornaments/floral-top.svg" alt="" width={100} height={66} className="opacity-70" />
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="italic text-lg text-[#c8a96e] tracking-widest mb-4"
          style={{ fontFamily: "var(--font-seasons)" }}>
          Together in love
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-light leading-tight heading-gold"
          style={{ fontFamily: "var(--font-seasons)", fontSize: "clamp(3rem, 8vw, 6rem)" }}>
          Athira
          <span className="block italic font-light heading-gold"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", margin: "0.25em 0" }}>
            &amp;
          </span>
          Abhiram
        </motion.h1>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-24 h-px bg-[#c8a96e] my-6 origin-center" />

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-xl text-[#c8a96e]/80 tracking-wide mb-2"
          style={{ fontFamily: "var(--font-seasons)" }}>
          06 &amp; 07 November 2026
        </motion.p>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-xs tracking-widest uppercase text-[#c8a96e] mb-10">
          Kozhikode &middot; Payyanur · Kerala
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }} className="mb-12">
          <CountdownTimer />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.getElementById("invitation")?.scrollIntoView({ behavior: "smooth" })}>
          <span className="text-xs tracking-widest uppercase text-[#c8a96e]/70">Scroll to explore</span>
          <motion.div animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-[#c8a96e] to-transparent" />
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e] to-transparent opacity-30" />
    </section>
  );
}
