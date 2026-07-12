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
  const audioUnlockedRef = useRef(false);

  // Called synchronously inside the tap gesture — the only reliable way to
  // unlock audio on iOS Safari. We start at volume 0 so it's silent until fade.
  function handleTap() {
    const audio = audioRef.current;
    if (!audio || audioUnlockedRef.current) return;
    audio.volume = 0;
    audio.play().then(() => {
      audioUnlockedRef.current = true;
    }).catch(() => {
      // Some browsers reject even gesture-initiated play; we'll retry on next gesture
    });
  }

  // Fade audio in once the intro video finishes
  useEffect(() => {
    if (!started) return;
    const audio = audioRef.current;
    if (!audio) return;

    // If the gesture-initiated play already worked, just fade in
    // If not (e.g. browser rejected it), try again — we're now past the intro
    // so any subsequent touch will also retry via the global listener below
    const startFade = () => {
      const start = performance.now();
      let frame: number;
      function fade(now: number) {
        const progress = Math.min((now - start) / FADE_DURATION, 1);
        if (audio) audio.volume = progress * TARGET_VOLUME;
        if (progress < 1) frame = requestAnimationFrame(fade);
      }
      frame = requestAnimationFrame(fade);
      return () => cancelAnimationFrame(frame);
    };

    if (!audio.paused) {
      // Already playing from the gesture unlock — just fade in
      return startFade();
    }

    // Not playing yet — attempt play now (works on Android Chrome after gesture)
    audio.play().then(() => {
      audioUnlockedRef.current = true;
      startFade();
    }).catch(() => {
      // Still blocked — attach a one-time gesture listener as last resort
      const retry = () => {
        audio.play().then(() => {
          audioUnlockedRef.current = true;
          startFade();
        }).catch(() => {});
      };
      document.addEventListener("touchstart", retry, { once: true });
      document.addEventListener("click", retry, { once: true });
    });
  }, [started]);

  // Pause when tab hidden, resume when visible
  useEffect(() => {
    if (!started) return;
    const handleVisibility = () => {
      const audio = audioRef.current;
      if (!audio) return;
      if (document.hidden) audio.pause();
      else audio.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [started]);

  // Lock scroll until envelope opened
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
    return () => { document.body.style.overflow = ""; };
  }, [opened]);

  return (
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
