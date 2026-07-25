/**
 * Wraps Save-the-Date / Story / Invitation in their own nested scroll container with
 * mandatory scroll-snap: a scroll gesture lands on the nearest section. (Each section
 * used to also set scroll-snap-stop: always to force stopping at every section one at
 * a time, but that combination is known to "trap" scrolling on some mobile browsers —
 * a backward swipe off the last section could get pulled right back instead of
 * registering — so it's mandatory-only now.) This also works around the Android
 * "jumpy" scroll caused by `dvh` recalculating mid-scroll — snapping forces a clean
 * rest position every time.
 *
 * Once the user reaches the bottom of this container (end of Invitation), the scroll
 * gesture chains naturally into the outer page for Events/RSVP, which stay in normal
 * (non-snapped) document flow for a free scroll feel — their frosted-glass panels use
 * ElasticReveal for a springy entrance instead.
 */
export default function SnapIntro({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="snap-intro"
      className="h-[100svh] overflow-y-scroll"
      style={{ scrollSnapType: "y mandatory", WebkitOverflowScrolling: "touch" }}
    >
      {children}
    </div>
  );
}
