"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// ── Easing ─────────────────────────────────────────────────────────────────
const expo = [0.16, 1, 0.3, 1] as const;

// ── Container: stagger children with 70ms delay each ─────────────────────
const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,   // 70ms stagger (within 50-80ms spec)
      delayChildren:   0.05,   // brief pause after nav finishes
    },
  },
};

// ── Shared item variant — slides up from 12px with fade ──────────────────
const heroItem = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: expo },
  },
};

// ── Metric variant — pops in with slight scale for emphasis ───────────────
const metricItem = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: expo },
  },
};

interface Props {
  credentials: { label: string; detail: string }[];
}

export default function HeroAnimated({ credentials }: Props) {
  return (
    <motion.section
      className="pt-28 pb-24"
      variants={heroContainer}
      initial="hidden"
      animate="show"
    >
      {/* ── Howdy greeting ─────────────────────────────────────────────── */}
      <motion.p
        variants={heroItem}
        className="font-signet italic font-bold tracking-tight text-xl text-[#FF3200] mb-3"
      >
        Howdy!
      </motion.p>

      {/* ── Role label ─────────────────────────────────────────────────── */}
      <motion.p variants={heroItem} className="label mb-5">
        Senior Product Designer · 9 Years Experience
      </motion.p>

      {/* ── Headline ───────────────────────────────────────────────────── */}
      <motion.h1
        variants={heroItem}
        className="text-display font-bold text-warm-900 mb-8 max-w-[22ch]"
      >
        I design systems that modernize how complex organizations operate.
      </motion.h1>

      {/* ── Body copy ──────────────────────────────────────────────────── */}
      <motion.p
        variants={heroItem}
        className="text-xl text-warm-500 leading-relaxed max-w-xl mb-12"
      >
        Nine years designing for Pfizer, the U.S. Air Force, and Capital Group
        — at the intersection of organizational complexity, AI integration,
        and measurable business outcomes. A d.MBA graduate, I speak both the
        language of design and the language of business to make it stick.
      </motion.p>

      {/* ── CTAs ───────────────────────────────────────────────────────── */}
      <motion.div variants={heroItem} className="flex flex-wrap gap-3 mb-20">
        <Link
          href="#work"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF3200] text-white text-sm font-medium rounded-full hover:bg-[#CC2800] transition-colors"
        >
          View Work
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-warm-200 text-warm-600 text-sm font-medium rounded-full hover:border-warm-400 hover:text-warm-900 transition-colors"
        >
          About
        </Link>
      </motion.div>

      {/* ── Hero metrics — the final stagger beat ──────────────────────── */}
      <motion.div
        variants={metricItem}
        className="grid grid-cols-3 gap-px bg-warm-100 rounded-xl overflow-hidden border border-warm-100"
      >
        {[
          { value: "9", unit: "yrs",  label: "Enterprise design experience" },
          { value: "4k+", unit: "",   label: "Daily active users on live systems" },
          { value: "3",   unit: "×",  label: "Fortune 500 + DoD clients" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-warm-50/95 px-5 py-5 backdrop-blur-sm"
          >
            <p className="font-display text-3xl font-semibold text-warm-900 leading-none mb-1.5">
              {stat.value}
              {stat.unit && (
                <span className="text-base text-accent font-bold ml-0.5">{stat.unit}</span>
              )}
            </p>
            <p className="text-xs text-warm-400 leading-snug">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
