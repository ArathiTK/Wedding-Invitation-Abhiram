/**
 * The green floral background layer. Width/height are measured pixel values (from
 * useFixedGreenBg) rather than vh/dvh/cover percentages, so the image is identically
 * scaled/cropped whether this is `position: absolute` (scrolling normally, before the
 * Invitation section is fully loaded) or `position: fixed` (locked once it is) — only
 * where the layer sits changes, never its size, so there's no zoom or offset.
 */
export default function GreenBgLayer({
  fixed,
  size,
}: {
  fixed: boolean;
  size: { width: number; height: number } | null;
}) {
  if (!size) return null;

  return (
    <div
      aria-hidden
      style={{
        position: fixed ? "fixed" : "absolute",
        top: 0,
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
    />
  );
}
