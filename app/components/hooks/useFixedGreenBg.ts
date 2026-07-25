"use client";
import { useEffect, useState } from "react";

const DESKTOP_BREAKPOINT = 768;
const MOBILE_COLUMN_WIDTH = 430;

/**
 * The green floral background scrolls normally through the Story section and while
 * the Invitation section is entering view. Once Invitation has fully reached the top
 * of the viewport, the background locks in place through Invitation/Events/RSVP, and
 * unlocks again if the user scrolls back up past that point.
 *
 * Deliberately avoids native `position: fixed`: iOS Safari pans fixed-position elements
 * incorrectly while the on-screen keyboard is open (a long-standing engine bug), which
 * made the background visibly drift from the frosted-glass content while typing in the
 * RSVP form. Instead `top` is a plain document-coordinate pixel value — continuously
 * recomputed from the live scroll position — applied to a `position: absolute` element
 * portaled onto `document.body` (so no ancestor's `overflow` clips it once it needs to
 * sit outside the Invitation section's own box).
 *
 * Width/height are measured pixel values (not vh/dvh/cover), so the image never
 * rescales when locking/unlocking, and width is capped to the site's mobile-width
 * column (matching layout.tsx's `w-full md:max-w-[430px]`).
 */
export function useFixedGreenBg() {
  const [top, setTop] = useState(0);
  const [size, setSize] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    let raf = 0;

    function measure() {
      const el = document.getElementById("invitation");
      const invitationTop = el?.offsetTop ?? 0;
      const locked = window.scrollY >= invitationTop - 1;
      setTop(locked ? window.scrollY : invitationTop);
      const vv = window.visualViewport;
      setSize({
        width: window.innerWidth >= DESKTOP_BREAKPOINT ? MOBILE_COLUMN_WIDTH : window.innerWidth,
        height: vv ? vv.height : window.innerHeight,
      });
    }

    function update() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    }

    measure();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.visualViewport?.addEventListener("resize", update);
    window.visualViewport?.addEventListener("scroll", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.visualViewport?.removeEventListener("resize", update);
      window.visualViewport?.removeEventListener("scroll", update);
    };
  }, []);

  return { top, size };
}
