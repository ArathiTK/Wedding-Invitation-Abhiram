/**
 * Wraps Save-the-Date / Story / Invitation in their own nested scroll container with
 * mandatory scroll-snap: any scroll gesture lands squarely on the next section, one at
 * a time (scroll-snap-stop: always prevents a fast fling from skipping a section).
 * This also works around the Android "jumpy" scroll caused by `dvh` recalculating
 * mid-scroll — snapping forces a clean rest position every time.
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
      className="h-[100dvh] overflow-y-scroll"
      style={{ scrollSnapType: "y mandatory", WebkitOverflowScrolling: "touch" }}
    >
      {children}
    </div>
  );
}
