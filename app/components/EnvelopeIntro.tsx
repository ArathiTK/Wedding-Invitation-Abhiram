"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import CountdownTimer from "./ui/CountdownTimer";

interface Props {
  onOpen: () => void;
  onTap?: () => void;
  onVideoEnd?: () => void;
}

const IMG   = "/assets/reference/envelope.png";
const VIDEO = "/assets/reference/hero-video.mp4";

type State = "idle" | "playing" | "ended" | "done";

export default function EnvelopeIntro({ onOpen, onTap, onVideoEnd }: Props) {
  const [state, setState] = useState<State>("idle");
  const videoRef = useRef<HTMLVideoElement>(null);

  function smoothScrollTo(target: number, duration: number) {
    const start = window.scrollY;
    const distance = target - start;
    let startTime: number | null = null;
    function ease(t: number) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }
    function step(now: number) {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start + distance * ease(progress));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function handleScrollDown() {
    setState("done");
    setTimeout(() => {
      onOpen();
      requestAnimationFrame(() => {
        const el = document.getElementById("our-story");
        if (el) smoothScrollTo(el.getBoundingClientRect().top + window.scrollY, 1800);
      });
    }, 60);
  }

  function handleTap() {
    if (state === "idle") {
      setState("playing");
      if (videoRef.current) videoRef.current.playbackRate = 1.4;
      videoRef.current?.play();
      onTap?.();
    } else if (state === "ended") {
      handleScrollDown();
    }
  }

  function handleEnded() {
    videoRef.current?.pause();
    setState("ended");
    onVideoEnd?.();
  }

  function handleScrollGesture() {
    if (state === "ended") handleScrollDown();
  }

  return (
    <motion.div
      onClick={handleTap}
      onWheel={handleScrollGesture}
      onTouchMove={handleScrollGesture}
      className="fixed inset-0 z-50 overflow-hidden mx-auto w-full md:max-w-[430px]"
      style={{ height: "100dvh", backgroundColor: "#181e13", cursor: state === "idle" || state === "ended" ? "pointer" : "default" }}
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
        style={{ opacity: state === "playing" || state === "ended" ? 1 : 0 }}
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

      {/* SCROLL DOWN + COUNTDOWN — shown on the final frame of the intro video */}
      <motion.div
        className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-4 z-30 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: state === "ended" ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <CountdownTimer />
        <motion.p
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "0.65rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#000000",
          }}
        >
          Scroll down
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
