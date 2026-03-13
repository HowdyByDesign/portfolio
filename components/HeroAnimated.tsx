"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// ── Easing ─────────────────────────────────────────────────────────────────
const expo = [0.16, 1, 0.3, 1] as const;

// ── Container: stagger children ──────────────────────────────────────────
const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,  // 70ms stagger
      delayChildren:   0.05,  // brief pause after nav finishes
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
      {/*
       * ── Two-column grid ────────────────────────────────────────────────────
       * md+:   Left (w-2/3) = Howdy! + subhead + headline + body
       *        Right (w-1/3) = circular portrait, centered on its column
       * mobile: single column, portrait stacks below text content
       */}
      <div className="flex flex-col md:grid md:grid-cols-3 md:gap-14 md:items-start mb-16 md:mb-14">

        {/* ── Left column — 2/3 ────────────────────────────────────────────── */}
        <div className="md:col-span-2">

          {/* Howdy! — Zilla Slab Bold, upright (no italic) */}
          <motion.p
            variants={heroItem}
            className="font-signet font-bold tracking-tight text-xl text-[#FF3200] mb-3"
          >
            Howdy!
          </motion.p>

          {/*
           * Role subhead — Instrument Sans, tracking-widest for premium
           * feel. &nbsp; keeps the · separator from wrapping awkwardly.
           */}
          <motion.p
            variants={heroItem}
            className="font-sans text-[0.68rem] font-medium tracking-widest uppercase text-warm-400 mb-6"
          >
            Senior Product Designer&nbsp;&middot;&nbsp;9 Years Experience
          </motion.p>

          {/* Main headline */}
          <motion.h1
            variants={heroItem}
            className="text-display font-bold text-warm-900 mb-8 max-w-[22ch]"
          >
            I design systems that modernize how complex organizations operate.
          </motion.h1>

          {/* Body copy */}
          <motion.p
            variants={heroItem}
            className="text-xl text-warm-500 leading-relaxed max-w-xl"
          >
            Nine years designing for Pfizer, the U.S. Air Force, and Capital
            Group — at the intersection of organizational complexity, AI
            integration, and measurable business outcomes. A d.MBA graduate,
            I speak both the language of design and the language of business
            to make it stick.
          </motion.p>

        </div>

        {/* ── Right column — circular portrait ─────────────────────────────── */}
        {/*
         * items-start on the grid + md:pt-14 here anchors the circle's top edge
         * to the approximate baseline of the "Senior Product Designer" subhead,
         * making it a true counterweight to the text block rather than floating.
         * Mobile: stacks below text centered at w-40 (160px).
         * Desktop: w-56 (224px) — substantial architectural anchor at 1/3 column.
         */}
        {/*
         * md:pt-20 nudges the circle top to align with the h1 baseline,
         * anchoring it to the headline rather than floating mid-column.
         * scale-x-[-1] mirrors Ben so he looks left — into the text block.
         */}
        <motion.div
          variants={heroItem}
          className="flex justify-center mt-10 md:mt-0 md:pt-20"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48 aspect-square rounded-full overflow-hidden border-2 border-warm-100">
            <Image
              src="/images/Ben_shot_cap2.jpg"
              alt="Benjamin Howard — Senior Product Designer"
              fill
              className="object-cover object-top"
              style={{ filter: "sepia(0.1) saturate(1.1)", transform: "scaleX(-1)" }}
              sizes="(max-width: 768px) 160px, 192px"
              priority
            />
          </div>
        </motion.div>

      </div>

      {/* ── Button row — spans the full grid width, grounds the layout ──────── */}
      <motion.div variants={heroItem} className="flex flex-wrap gap-3 mb-20">
        <Link
          href="#work"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF3200] text-white text-sm font-medium rounded-full hover:bg-[#CC2800] transition-colors"
        >
          View Work
        </Link>
        <a
          href="/Benjamin_Howard_Product_Designer.pdf"
          download
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-warm-200 text-warm-600 text-sm font-medium rounded-full hover:border-warm-400 hover:text-warm-900 transition-colors"
        >
          Download Resume
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M6 1v7M3 8l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-warm-200 text-warm-600 text-sm font-medium rounded-full hover:border-warm-400 hover:text-warm-900 transition-colors"
        >
          About
        </Link>
      </motion.div>

      {/* ── Hero metrics — the final stagger beat ──────────────────────────── */}
      <motion.div
        variants={metricItem}
        className="grid grid-cols-3 gap-px bg-warm-100 rounded-xl overflow-hidden border border-warm-100"
      >
        {[
          { value: "9",   unit: "yrs", label: "Enterprise design experience" },
          { value: "4k+", unit: "",    label: "Daily active users on live systems" },
          { value: "3",   unit: "×",   label: "Fortune 500 + DoD clients" },
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
