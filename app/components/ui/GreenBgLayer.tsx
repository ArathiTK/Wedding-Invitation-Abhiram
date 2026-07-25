"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/**
 * The green floral background layer, portaled onto `document.body` so it renders in
 * true document coordinates and is never clipped by a section's own `overflow`/height
 * (which happens once its `top` needs to sit outside the Invitation section's box,
 * while scrolling through Events/RSVP). See useFixedGreenBg for the positioning logic.
 */
export default function GreenBgLayer({
  top,
  size,
}: {
  top: number;
  size: { width: number; height: number } | null;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || !size) return null;

  return createPortal(
    <div
      aria-hidden
      style={{
        position: "absolute",
        top,
        left: "50%",
        transform: "translateX(-50%)",
        width: size.width,
        height: size.height,
        backgroundImage: "url('/assets/green%20bg%20with%20flower%20motif.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#414b3b",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />,
    document.body
  );
}
