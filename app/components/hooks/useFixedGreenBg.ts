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
 * Save-the-Date/Story/Invitation live inside SnapIntro's own nested scroll container
 * (see SnapIntro.tsx), so "Invitation fully loaded" means that container has been
 * scrolled to its end — not `window.scrollY`, which doesn't move until the outer page
 * takes over scrolling for Events/RSVP. Once that handoff happens the container's
 * scrollTop stays pinned at its max, so this correctly stays "locked" through Events
 * and RSVP too, only unlocking again if the user scrolls back up into Story.
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
    const container = document.getElementById("snap-intro");

    function update() {
      if (container) {
        const atEnd = container.scrollTop >= container.scrollHeight - container.clientHeight - 1;
        setFixed(atEnd);
      }
      setSize({
        width: window.innerWidth >= DESKTOP_BREAKPOINT ? MOBILE_COLUMN_WIDTH : window.innerWidth,
        height: window.innerHeight,
      });
    }
    update();
    container?.addEventListener("scroll", update, { passive: true });
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      container?.removeEventListener("scroll", update);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return { fixed, size };
}
