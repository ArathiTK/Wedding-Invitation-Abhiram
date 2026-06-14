"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  onOpen: () => void;
}

const IMG   = "/assets/reference/envelope.png";
const VIDEO = "/assets/reference/hero-video.mp4";

type State = "idle" | "playing" | "done";

export default function EnvelopeIntro({ onOpen }: Props) {
  const [state, setState] = useState<State>("idle");
  const videoRef = useRef<HTMLVideoElement>(null);

  function handleTap() {
    if (state !== "idle") return;
    setState("playing");
    videoRef.current?.play();
  }

  function handleEnded() {
    setState("done");
    setTimeout(onOpen, 60);
  }

  return (
    <motion.div
      onClick={handleTap}
      className="fixed inset-0 z-50 overflow-hidden mx-auto"
      style={{ height: "100dvh", maxWidth: 430, cursor: state === "idle" ? "pointer" : "default" }}
      animate={state === "done" ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Envelope cover */}
      {state === "idle" && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${IMG}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* Intro video */}
      <video
        ref={videoRef}
        src={VIDEO}
        playsInline
        onEnded={handleEnded}
        onError={handleEnded}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: state === "playing" ? 1 : 0 }}
      />

      {/* TAP TO OPEN */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-2 z-30 pointer-events-none"
        animate={{ opacity: state === "idle" ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.p
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: "0.65rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#8a7a5a",
          }}
        >
          Tap to open
        </motion.p>
        <div style={{ width: 24, height: 1, background: "#8a7a5a", opacity: 0.5 }} />
      </motion.div>
    </motion.div>
  );
}
