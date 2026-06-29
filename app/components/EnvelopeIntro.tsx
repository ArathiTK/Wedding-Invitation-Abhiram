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

  function handleScrollDown() {
    setState("done");
    setTimeout(() => {
      onOpen();
      requestAnimationFrame(() => {
        document.getElementById("our-story")?.scrollIntoView({ behavior: "smooth" });
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
