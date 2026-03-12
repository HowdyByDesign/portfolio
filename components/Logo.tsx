"use client";

import { motion } from "framer-motion";

// ── Easing ─────────────────────────────────────────────────────────────────
const expo = [0.16, 1, 0.3, 1] as const;

interface LogoProps {
  /** Rendered size in px — defaults to 32 */
  size?: number;
  /** Optional additional className on the wrapper */
  className?: string;
}

/**
 * H Signet — the brand mark for Howdy by Design.
 * Animates in on mount with ease-out-expo: opacity 0→1, y 10→0.
 */
export default function Logo({ size = 32, className }: LogoProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: expo }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        width={size}
        height={size}
        aria-label="Howdy by Design"
        role="img"
        fill="none"
      >
        {/*
          H Signet — two vertical pillars joined by a horizontal crossbar.
          Architectural structure that reads at any size from 16px to display.
        */}
        <path
          d="M124.2 39.71V22.07H75.67v17.64h15.08v13.56H37.66V39.71h15.07V22.07H4.2v17.64h15.13v48.82H4.2v17.7h48.53v-17.7H37.66V71.12h53.09v17.41H75.67v17.7h48.53v-17.7h-15.12V39.71z"
          fill="#FF3200"
        />
      </svg>
    </motion.div>
  );
}
