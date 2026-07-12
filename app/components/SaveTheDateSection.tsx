"use client";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountdownTimer from "./ui/CountdownTimer";
import { useIntro } from "@/app/context/IntroContext";

export default function SaveTheDateSection() {
  const { opened } = useIntro();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = () => v.play().catch(() => {});

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) tryPlay(); },
      { threshold: 0.25 }
    );
    observer.observe(v);

    const handleVisibility = () => {
      if (document.hidden) v.pause();
      else tryPlay();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "100dvh", width: "100%" }}>
      <video
        ref={videoRef}
        src="/assets/bg%20video%203%20-%20card.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        suppressHydrationWarning
      />
      <AnimatePresence>
        {opened && (
          <>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)" }}
            />
            <motion.div
              className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-4 pointer-events-none"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
            >
              <CountdownTimer />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
