"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Springy "overshoot then settle" entrance for the Events/RSVP frosted-glass panels —
 * distinct from AnimateOnScroll's plain fade+slide. Background stays static; only this
 * panel bounces in once it scrolls into view.
 */
export default function ElasticReveal({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const hidden = { opacity: 0, y: 70, scale: 0.9 };
  const shown = { opacity: 1, y: 0, scale: 1 };

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isInView ? shown : hidden}
      transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.9 }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
