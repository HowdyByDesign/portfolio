export default function Footer() {
  return (
    <footer className="border-t border-warm-100 mt-16">
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-6">

        {/* ── Top row: signature + links ───────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8 pb-8 border-b border-warm-100">

          {/* Left — Howdy! signet + name + title */}
          <div>
            <p className="font-signet font-bold tracking-tight text-[#FF3200] text-lg leading-none mb-1.5">
              Howdy!
            </p>
            <p className="text-sm font-semibold text-warm-900 leading-none mb-1">
              Ben Howard
            </p>
            <p className="text-xs text-warm-400">
              UX Strategist
            </p>
          </div>

          {/* Right — professional links */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://linkedin.com/in/bhowarddesign"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-warm-400 hover:text-warm-900 transition-colors"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              LinkedIn
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path d="M1.5 8.5l7-7M8.5 8V1.5H2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="/Benjamin_Howard_Product_Designer.pdf"
              download
              className="inline-flex items-center gap-1.5 text-sm text-warm-400 hover:text-warm-900 transition-colors"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              Resume
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path d="M5 1v6M2 7l3 2.5L8 7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="mailto:Howdy@Howdybydesign.com"
              className="inline-flex items-center gap-1.5 text-sm text-warm-400 hover:text-warm-900 transition-colors"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              Howdy@Howdybydesign.com
            </a>
          </div>
        </div>

        {/* ── Bottom: copyright ────────────────────────────────────────────── */}
        <p className="text-xs text-warm-300 pt-5">
          © 2026 Howdy by Design — Houston, Texas
        </p>

      </div>
    </footer>
  );
}
