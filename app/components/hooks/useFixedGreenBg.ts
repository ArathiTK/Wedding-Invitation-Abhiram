"use client";
import { useEffect, useState } from "react";

const DESKTOP_BREAKPOINT = 768;
const MOBILE_COLUMN_WIDTH = 430;

/**
 * The green floral background scrolls normally through the Story section and while
 * the Invitation section is entering view. Once Invitation has fully reached the top
 * of the viewport, the background locks fixed through Invitation/Events/RSVP, and
 * unlocks again if the user scrolls back up past that point.
 *
 * Also returns the pixel width/height to render the background at — measured directly
 * from the window instead of vh/dvh/cover, so the image never rescales when `fixed`
 * toggles, and is capped to the site's mobile-width column (matching layout.tsx's
 * `w-full md:max-w-[430px]`) instead of stretching across a wide desktop viewport.
 */
export function useFixedGreenBg() {
  const [fixed, setFixed] = useState(false);
  const [size, setSize] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    function update() {
      const el = document.getElementById("invitation");
      if (el) setFixed(window.scrollY >= el.offsetTop - 1);
      setSize({
        width: window.innerWidth >= DESKTOP_BREAKPOINT ? MOBILE_COLUMN_WIDTH : window.innerWidth,
        height: window.innerHeight,
      });
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return { fixed, size };
}
