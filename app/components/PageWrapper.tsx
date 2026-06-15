"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import EnvelopeIntro from "./EnvelopeIntro";
import FallingFlowers from "./FallingFlowers";

const TRACK = "/assets/audio/bgm-kashia-beloved.mp3";
const TARGET_VOLUME = 0.35;
const FADE_DURATION = 4000;

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Start playback silently inside the tap's user-gesture so the browser allows it.
  function handleTap() {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0;
    audio.play().catch(() => {});
  }

  // Once the envelope is open, fade the (already-playing) track in smoothly.
  useEffect(() => {
    if (!opened) return;
    const audio = audioRef.current;
    if (!audio) return;

    audio.play().catch(() => {});
    const start = performance.now();
    let frame: number;

    function fade(now: number) {
      const progress = Math.min((now - start) / FADE_DURATION, 1);
      audio.volume = progress * TARGET_VOLUME;
      if (progress < 1) frame = requestAnimationFrame(fade);
    }
    frame = requestAnimationFrame(fade);

    return () => cancelAnimationFrame(frame);
  }, [opened]);

  return (
    // relative so the absolute-positioned envelope is contained within the mobile column
    <div className="relative">
      <audio ref={audioRef} src={TRACK} loop preload="auto" aria-hidden="true" />
      <AnimatePresence>
        {!opened && <EnvelopeIntro onOpen={() => setOpened(true)} onTap={handleTap} />}
      </AnimatePresence>
      {opened && <FallingFlowers />}
      {children}
    </div>
  );
}
