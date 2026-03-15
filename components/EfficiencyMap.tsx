"use client";

import { useEffect, useRef, useState } from "react";

const beforeSteps = [
  { label: "Pull data from 3+ ad platforms manually",  time: "~45 min" },
  { label: "Paste raw data into client Excel template", time: "~30 min" },
  { label: "Build charts and format every cell",        time: "~2 hrs"  },
  { label: "Cross-check for copy-paste errors",         time: "~1 hr"   },
  { label: "Export as PDF and attach to email",         time: "~15 min" },
  { label: "Send — no tracking, no confirmation",       time: "~15 min" },
];

const afterSteps = [
  { label: "Open dashboard — data already live",        time: "instant" },
  { label: "Select client, date range, campaigns",      time: "~30 sec" },
  { label: "Share a live link — explore together",      time: "~30 sec" },
];

// Bridge appears after last Before step, before After column begins
const beforeLastDelay   = (beforeSteps.length - 1) * 65; // 325ms
const bridgeDelay       = beforeSteps.length * 65 + 60;  // 450ms
const afterStartDelay   = beforeSteps.length * 65 + 160; // 550ms

export default function EfficiencyMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid gap-6 items-start sm:grid-cols-[1fr_auto_1fr]"
    >

      {/* ── Before: Excel ─────────────────────────────────── */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-warm-300" aria-hidden />
          <p className="label text-warm-400">Before — Excel Process</p>
        </div>

        <div className="space-y-2">
          {beforeSteps.map((step, i) => (
            <div
              key={step.label}
              className="flex items-start gap-3"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-8px)",
                transition: "opacity 400ms, transform 400ms",
                transitionDelay: `${i * 65}ms`,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded border border-warm-200 bg-warm-100" aria-hidden />
              <div className="flex-1 min-w-0">
                <span className="text-sm text-warm-700 leading-snug">{step.label}</span>
              </div>
              <span className="text-xs text-warm-400 tabular-nums flex-shrink-0 pt-0.5">
                {step.time}
              </span>
            </div>
          ))}
        </div>

        {/* Total: Before */}
        <div
          className="mt-6 p-4 rounded border border-warm-200 bg-warm-50"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 400ms",
            transitionDelay: `${beforeLastDelay + 120}ms`,
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <p className="label mb-1">Time lost per client</p>
          <p className="font-display text-h3 font-semibold text-warm-900 leading-tight">
            8+ hours
          </p>
          <p className="text-xs text-warm-400 mt-0.5">× 50 clients = 400 hrs/mo</p>
        </div>
      </div>

      {/* ── Center Bridge ─────────────────────────────────── */}
      <div
        className="hidden sm:flex flex-col items-center justify-center self-center gap-2 px-1 py-2"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.7)",
          transition: "opacity 380ms, transform 380ms",
          transitionDelay: `${bridgeDelay}ms`,
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        aria-hidden
      >
        {/* Top dashed line segment */}
        <div
          className="w-px bg-warm-200"
          style={{
            height: "32px",
            background: "repeating-linear-gradient(to bottom, #e6e2df 0px, #e6e2df 4px, transparent 4px, transparent 8px)",
          }}
        />

        {/* Arrow pill */}
        <div
          className="flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-full border"
          style={{
            borderColor: "oklch(from #FF3200 l c h / 0.3)",
            backgroundColor: "oklch(from #FF3200 l c h / 0.06)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: "rotate(90deg)" }}>
            <path
              d="M7 1L7 10M7 10L3.5 6.5M7 10L10.5 6.5"
              stroke="#FF3200"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className="text-[9px] font-semibold uppercase tracking-widest"
            style={{ color: "#FF3200", writingMode: "vertical-lr", transform: "rotate(180deg)" }}
          >
            96%
          </span>
        </div>

        {/* Bottom dashed line segment */}
        <div
          className="w-px"
          style={{
            height: "32px",
            background: "repeating-linear-gradient(to bottom, #e6e2df 0px, #e6e2df 4px, transparent 4px, transparent 8px)",
          }}
        />

        {/* Label */}
        <span
          className="text-[9px] font-semibold text-warm-400 uppercase tracking-widest text-center"
          style={{ writingMode: "vertical-lr", transform: "rotate(180deg)", lineHeight: 1.3 }}
        >
          faster
        </span>
      </div>

      {/* ── After: Dashboard ──────────────────────────────── */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-accent" aria-hidden />
          <p className="label text-accent">After — Live Dashboard</p>
        </div>

        <div className="space-y-2">
          {afterSteps.map((step, i) => (
            <div
              key={step.label}
              className="flex items-start gap-3"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(8px)",
                transition: "opacity 400ms, transform 400ms",
                transitionDelay: `${afterStartDelay + i * 65}ms`,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <span
                className="mt-0.5 flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center"
                aria-hidden
                style={{
                  borderColor: "oklch(from #FF3200 l c h / 0.4)",
                  backgroundColor: "oklch(from #FF3200 l c h / 0.08)",
                }}
              >
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="#FF3200" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div className="flex-1 min-w-0">
                <span className="text-sm text-warm-700 leading-snug">{step.label}</span>
              </div>
              <span className="text-xs text-accent tabular-nums flex-shrink-0 pt-0.5 font-medium">
                {step.time}
              </span>
            </div>
          ))}
        </div>

        {/* Total: After */}
        <div
          className="mt-6 p-4 rounded border bg-warm-50"
          style={{
            borderColor: "oklch(from #FF3200 l c h / 0.2)",
            opacity: visible ? 1 : 0,
            transition: "opacity 400ms",
            transitionDelay: `${afterStartDelay + afterSteps.length * 65 + 80}ms`,
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <p className="label mb-1">Time per client</p>
          <p className="font-display text-h3 font-semibold text-accent leading-tight">
            ~2 minutes
          </p>
          <p className="text-xs text-warm-400 mt-0.5">30+ hours reclaimed per strategist / mo</p>
        </div>
      </div>

    </div>
  );
}
