"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/**
 * PortraitAnimated
 * ─────────────────────────────────────────────────────────────────────────────
 * Circular headshot (Ben_shot_cap2.jpg) for the About page intro.
 *  • w-44 h-44 (176px) — slightly larger than the homepage circle
 *  • aspect-square rounded-full — perfect circle geometry
 *  • border-2 border-warm-100 — hairline ring defines circle vs warm-50 bg
 *  • sepia(0.1) saturate(1.1) — warms photo to match site palette
 *  • scaleX(-1) — mirrors Ben so he looks LEFT, into the bio text
 *  • object-cover object-top — face + hat priority crop
 *  • duration-700 fade, 230ms delay — second beat of page load
 */
export default function PortraitAnimated() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.23, ease: "easeOut" }}
    >
      <div className="relative w-44 h-44 aspect-square rounded-full overflow-hidden border-2 border-warm-100">
        <Image
          src="/images/Ben_shot_cap2.jpg"
          alt="Benjamin Howard — Senior Product Designer"
          fill
          className="object-cover object-top"
          style={{ filter: "sepia(0.1) saturate(1.1)", transform: "scaleX(-1)" }}
          sizes="176px"
          priority
        />
      </div>
    </motion.div>
  );
}
