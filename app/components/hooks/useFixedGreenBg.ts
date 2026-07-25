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
 *
 * Height comes from `window.visualViewport` when available: on mobile, opening the
 * on-screen keyboard shrinks the visual viewport (which `dvh`-based layout tracks)
 * but does NOT reliably fire a `resize` event on `window` — using `innerHeight` there
 * left the fixed background stuck at the old, taller size while the frosted-glass
 * content (laid out with `dvh`) shrank underneath it, so they visibly drifted apart.
 */
export function useFixedGreenBg() {
  const [fixed, setFixed] = useState(false);
  const [size, setSize] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    function update() {
      const el = document.getElementById("invitation");
      if (el) setFixed(window.scrollY >= el.offsetTop - 1);
      const vv = window.visualViewport;
      setSize({
        width: window.innerWidth >= DESKTOP_BREAKPOINT ? MOBILE_COLUMN_WIDTH : window.innerWidth,
        height: vv ? vv.height : window.innerHeight,
      });
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.visualViewport?.addEventListener("resize", update);
    window.visualViewport?.addEventListener("scroll", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.visualViewport?.removeEventListener("resize", update);
      window.visualViewport?.removeEventListener("scroll", update);
    };
  }, []);

  return { fixed, size };
}
