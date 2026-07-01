"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import EnvelopeIntro from "./EnvelopeIntro";
import FallingFlowers from "./FallingFlowers";
import { IntroContext } from "@/app/context/IntroContext";

const TRACK = "/assets/audio/bgm-bansuri-tarana.mp3";
const TARGET_VOLUME = 0.35;
const FADE_DURATION = 4000;

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = useState(false);
  const [started, setStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Start playback silently inside the tap's user-gesture so the browser allows it.
  function handleTap() {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0;
    audio.play().catch(() => {});
  }

  // Once the intro video's last frame is showing, fade the (already-playing) track
  // in smoothly and start the falling flowers — no need to wait for a scroll.
  useEffect(() => {
    if (!started) return;
    const audio = audioRef.current;
    if (!audio) return;

    audio.play().catch(() => {});
    const start = performance.now();
    let frame: number;

    function fade(now: number) {
      const progress = Math.max(0, Math.min((now - start) / FADE_DURATION, 1));
      audio!.volume = progress * TARGET_VOLUME;
      if (progress < 1) frame = requestAnimationFrame(fade);
    }
    frame = requestAnimationFrame(fade);

    return () => cancelAnimationFrame(frame);
  }, [started]);

  // Lock scrolling until the envelope is opened; snap to top when revealed.
  useEffect(() => {
    if (opened) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      document.body.style.overflow = "";
      return;
    }
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  // Pause when tab is hidden, resume when it becomes visible again.
  useEffect(() => {
    if (!started) return;
    function handleVisibility() {
      const audio = audioRef.current;
      if (!audio) return;
      if (document.hidden) audio.pause();
      else audio.play().catch(() => {});
    }
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [started]);

  return (
    // relative so the absolute-positioned envelope is contained within the mobile column
    <IntroContext.Provider value={{ opened }}>
    <div className="relative">
      <audio ref={audioRef} src={TRACK} loop preload="auto" aria-hidden="true" />
      <AnimatePresence>
        {!opened && (
          <EnvelopeIntro onOpen={() => setOpened(true)} onTap={handleTap} onVideoEnd={() => setStarted(true)} />
        )}
      </AnimatePresence>
      {started && <FallingFlowers />}
      {children}
    </div>
    </IntroContext.Provider>
  );
}
