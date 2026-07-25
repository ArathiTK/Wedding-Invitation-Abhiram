"use client";
import { useFixedGreenBg } from "./hooks/useFixedGreenBg";
import GreenBgLayer from "./ui/GreenBgLayer";

/**
 * Hosts the shared green background as a sibling of SnapIntro (not nested inside it),
 * because many mobile browsers incorrectly treat `position: fixed` descendants of ANY
 * scrollable ancestor as pinned only within that scroll container, not the true
 * viewport — so a bg nested inside SnapIntro's own `overflow-y-scroll` box would
 * disappear the moment the outer page scrolled that box off-screen for Events/RSVP.
 * Desktop browsers are spec-compliant (fixed always escapes ancestor overflow unless a
 * transform/filter intervenes), which is why this only broke on mobile.
 */
export default function GreenBgHost() {
  const { fixed, size } = useFixedGreenBg();
  return <GreenBgLayer fixed={fixed} size={size} />;
}
