"use client";
import { motion, AnimatePresence } from "framer-motion";
import CountdownTimer from "./ui/CountdownTimer";
import { useIntro } from "@/app/context/IntroContext";

export default function SaveTheDateSection() {
  const { opened } = useIntro();

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "100dvh", width: "100%" }}>
      <video
        src="/assets/bg%20video%202%20-%20card.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        suppressHydrationWarning
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)" }}
      />
      <AnimatePresence>
        {opened && (
          <motion.div
            className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-4 pointer-events-none"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
          >
            <CountdownTimer />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
