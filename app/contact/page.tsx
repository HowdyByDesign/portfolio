import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Contact Ben Howard | UX Strategist & Senior Product Designer" },
  description:
    "Get in touch about UX Strategy, Senior Product Design, or Staff/Principal roles. Houston-based, open to remote.",
  openGraph: {
    title: "Contact Ben Howard | UX Strategist & Senior Product Designer",
    description:
      "Get in touch about UX Strategy, Senior Product Design, or Staff/Principal roles. Houston-based, open to remote.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Ben Howard | UX Strategist & Senior Product Designer",
    description:
      "Get in touch about UX Strategy, Senior Product Design, or Staff/Principal roles. Houston-based, open to remote.",
    images: ["/og-image.png"],
  },
};

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">

      {/* ── Intro ─────────────────────────────────────────────────────────── */}
      <section className="pb-16 border-b border-warm-100">
        <p className="font-signet font-bold tracking-tight text-xl text-[#FF3200] mb-3">
          Howdy!
        </p>
        <p className="label mb-6">Let&apos;s talk</p>
        <h1
          className="font-display font-semibold text-warm-900 leading-tight mb-8"
          style={{ fontSize: "clamp(2.25rem, 4vw + 0.75rem, 3.75rem)", letterSpacing: "-0.035em" }}
        >
          I respond to all inbound within two business days.
        </h1>
        <p className="text-warm-900 font-medium leading-relaxed max-w-prose">
          Open to UX Strategy, Senior Product Design, or Staff/Principal Designer
          roles at enterprise SaaS companies and top-tier consulting practices.
          Houston, TX — open to remote.
        </p>
      </section>

      {/* ── Contact links ─────────────────────────────────────────────────── */}
      <section className="py-16 border-b border-warm-100">
        <div className="space-y-6">

          {/* Email */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 py-5 border-b border-warm-100">
            <p className="label w-24 flex-shrink-0">Email</p>
            <a
              href="mailto:Howdy@Howdybydesign.com"
              className="text-warm-900 font-semibold hover:text-[#FF3200] transition-colors text-lg"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              Howdy@Howdybydesign.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 py-5 border-b border-warm-100">
            <p className="label w-24 flex-shrink-0">LinkedIn</p>
            <a
              href="https://linkedin.com/in/bhowarddesign"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-warm-900 font-semibold hover:text-[#FF3200] transition-colors text-lg"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              linkedin.com/in/bhowarddesign
              <svg width="12" height="12" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path d="M1.5 8.5l7-7M8.5 8V1.5H2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Resume */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 py-5 border-b border-warm-100">
            <p className="label w-24 flex-shrink-0">Resume</p>
            <a
              href="/Ben_Howard_Resume_2026.pdf"
              download
              className="inline-flex items-center gap-2 text-warm-900 font-semibold hover:text-[#FF3200] transition-colors text-lg"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              Download PDF
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M6 1v7M3 8l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 py-5">
            <p className="label w-24 flex-shrink-0">Location</p>
            <p className="text-warm-900 font-semibold text-lg">
              Houston, TX — open to remote
            </p>
          </div>

        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="pt-16">
        <a
          href="mailto:Howdy@Howdybydesign.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF3200] text-white text-sm font-medium rounded-full hover:bg-[#CC2800] transition-colors"
        >
          Send a message →
        </a>
        <p className="text-xs text-warm-400 mt-4">
          I respond to all inbound within two business days.
        </p>
      </section>

    </div>
  );
}
