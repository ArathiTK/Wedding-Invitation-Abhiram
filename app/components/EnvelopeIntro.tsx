"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Props {
  onOpen: () => void;
  onTap?: () => void;
  onVideoEnd?: () => void;
}

const VIDEO = "/assets/bg%20video%202%20-%20evelope.mp4";

type State = "idle" | "playing" | "done";

export default function EnvelopeIntro({ onOpen, onTap, onVideoEnd }: Props) {
  const [state, setState] = useState<State>("idle");
  const videoRef = useRef<HTMLVideoElement>(null);
  const endedRef = useRef(false);

  // Force-load so first frame renders as preview on all devices
  useEffect(() => {
    videoRef.current?.load();
  }, []);

  function handleEnd() {
    if (endedRef.current) return;
    endedRef.current = true;
    videoRef.current?.pause();
    onVideoEnd?.();
    setState("done");
    setTimeout(() => onOpen(), 60);
  }

  function handleTap() {
    if (state !== "idle") return;
    setState("playing");
    const v = videoRef.current;
    if (v) {
      try { v.playbackRate = 1.4; } catch {}
      v.play().catch(() => {});
    }
    onTap?.();
  }

  return (
    <motion.div
      onClick={handleTap}
      className="fixed inset-0 z-50 overflow-hidden mx-auto w-full md:max-w-[430px]"
      style={{ height: "100dvh", backgroundColor: "#181e13", cursor: state === "idle" ? "pointer" : "default" }}
      animate={{ opacity: state === "done" ? 0 : 1 }}
      transition={{ duration: 0.3 }}
    >
      <video
        ref={videoRef}
        src={VIDEO}
        playsInline
        preload="auto"
        onEnded={handleEnd}
        onError={handleEnd}
        onTimeUpdate={() => {
          const v = videoRef.current;
          if (state === "playing" && v && v.duration && v.currentTime >= v.duration - 1) handleEnd();
        }}
        className="absolute inset-0 h-full w-full object-cover"
        suppressHydrationWarning
      />

      {/* TAP TO OPEN */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-2 z-30 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: state === "idle" ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.p
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "0.65rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#1f1710",
          }}
        >
          Tap to open
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
