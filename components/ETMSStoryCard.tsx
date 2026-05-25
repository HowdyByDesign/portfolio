import Link from "next/link";

export default function ETMSStoryCard() {
  return (
    <div className="rounded-xl overflow-hidden border border-warm-300/60 bg-warm-200">
      <div className="flex flex-col sm:flex-row gap-0">

        {/* ── Left: copy + CTA ─────────────────────────────────────── */}
        <div className="flex-1 min-w-0 p-8 sm:p-10 flex flex-col justify-center gap-5">
          <div>
            <p className="label mb-3 text-warm-500">A story in two roles</p>
            <h3 className="font-display text-h3 font-semibold text-warm-900 leading-tight mb-3">
              Closing the loop on overdue training.
            </h3>
            <p className="text-sm text-warm-600 leading-relaxed max-w-[44ch]">
              An Airman has two courses past due. No alert was sent.
              See how the platform surfaces the gap — and closes it — across two roles.
            </p>
          </div>

          <Link
            href="/etms-story.html"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start inline-flex items-center gap-2 text-sm font-semibold text-warm-900 border border-warm-400 bg-warm-100 hover:bg-warm-50 hover:border-warm-500 px-4 py-2.5 rounded-lg transition-colors duration-200"
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            See how it works
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* ── Right: schematic preview ──────────────────────────────── */}
        <div
          className="sm:w-64 flex-shrink-0 border-t sm:border-t-0 sm:border-l border-warm-300 p-6 flex flex-col gap-3"
          aria-hidden="true"
        >
          {/* Member panel */}
          <div className="bg-warm-100 rounded-lg p-4 flex flex-col gap-2">
            <p className="text-[9px] font-semibold text-warm-400 uppercase tracking-[0.18em] mb-1">
              Member view
            </p>
            {/* Row: past due */}
            <div className="flex items-center gap-2">
              <div className="w-12 h-2 rounded flex-shrink-0" style={{ backgroundColor: "#D6CDB8" }} />
              <div className="w-10 h-2 rounded flex-shrink-0" style={{ backgroundColor: "#fca5a5" }} />
              <div className="flex-1 h-2 rounded" style={{ backgroundColor: "#E8E2D4" }} />
            </div>
            {/* Row: past due */}
            <div className="flex items-center gap-2">
              <div className="w-12 h-2 rounded flex-shrink-0" style={{ backgroundColor: "#D6CDB8" }} />
              <div className="w-10 h-2 rounded flex-shrink-0" style={{ backgroundColor: "#fca5a5" }} />
              <div className="flex-1 h-2 rounded" style={{ backgroundColor: "#E8E2D4" }} />
            </div>
            {/* Row: validated */}
            <div className="flex items-center gap-2">
              <div className="w-12 h-2 rounded flex-shrink-0" style={{ backgroundColor: "#D6CDB8" }} />
              <div className="w-10 h-2 rounded flex-shrink-0" style={{ backgroundColor: "#6ee7b7" }} />
              <div className="flex-1 h-2 rounded" style={{ backgroundColor: "#E8E2D4" }} />
            </div>
          </div>

          {/* Transition arrow */}
          <div className="flex items-center gap-2 px-1">
            <div className="flex-1 h-px bg-warm-300" />
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-warm-400 flex-shrink-0">
              <path d="M7 2.5L11.5 7L7 11.5M2.5 7H11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="flex-1 h-px bg-warm-300" />
          </div>

          {/* Supervisor panel */}
          <div className="bg-warm-100 rounded-lg p-4 flex flex-col gap-2">
            <p className="text-[9px] font-semibold text-warm-400 uppercase tracking-[0.18em] mb-1">
              Supervisor view
            </p>
            {/* Row: flagged */}
            <div className="flex items-center gap-2">
              <div className="w-16 h-2 rounded flex-shrink-0" style={{ backgroundColor: "#D6CDB8" }} />
              <div className="w-10 h-2 rounded flex-shrink-0" style={{ backgroundColor: "#fca5a5" }} />
              <div className="flex-1 h-2 rounded" style={{ backgroundColor: "#E8E2D4" }} />
            </div>
            {/* Row: flagged */}
            <div className="flex items-center gap-2">
              <div className="w-16 h-2 rounded flex-shrink-0" style={{ backgroundColor: "#D6CDB8" }} />
              <div className="w-10 h-2 rounded flex-shrink-0" style={{ backgroundColor: "#fca5a5" }} />
              <div className="flex-1 h-2 rounded" style={{ backgroundColor: "#E8E2D4" }} />
            </div>
            {/* Row: action taken */}
            <div className="flex items-center gap-2">
              <div className="w-16 h-2 rounded flex-shrink-0" style={{ backgroundColor: "#D6CDB8" }} />
              <div className="w-14 h-2 rounded flex-shrink-0" style={{ backgroundColor: "#6ee7b7" }} />
              <div className="flex-1 h-2 rounded" style={{ backgroundColor: "#E8E2D4" }} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
