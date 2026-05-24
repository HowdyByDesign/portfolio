import type { Metadata } from "next";
import Image from "next/image";
import CaseStudyCard from "@/components/CaseStudyCard";
import HeroAnimated from "@/components/HeroAnimated";

export const metadata: Metadata = {
  title: { absolute: "Ben Howard | UX Strategist & Senior Product Designer" },
  description:
    "10+ years orchestrating strategic blueprints for Pfizer, Capital Group, and the U.S. Air Force. d.MBA. Open to UX Strategy and Senior/Principal Product Design roles.",
  openGraph: {
    title: "Ben Howard | UX Strategist & Senior Product Designer",
    description:
      "10+ years orchestrating strategic blueprints for Pfizer, Capital Group, and the U.S. Air Force. d.MBA. Open to UX Strategy and Senior/Principal Product Design roles.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ben Howard | UX Strategist & Senior Product Designer",
    description:
      "10+ years orchestrating strategic blueprints for Pfizer, Capital Group, and the U.S. Air Force. d.MBA. Open to UX Strategy and Senior/Principal Product Design roles.",
    images: ["/og-image.png"],
  },
};

// ─── UPDATE THESE ────────────────────────────────────────────────────────────
const credentials = [
  { label: "U.S. Air Force", detail: "Department of Defense" },
  { label: "Pfizer", detail: "Global Pharmaceutical" },
  { label: "Capital Group", detail: "Asset Management" },
];

const caseStudies = [
  {
    index: "01",
    client: "U.S. Armed Forces",
    category: "Enterprise Platform · Design Systems · Defense",
    title: "Modernizing Mission-Critical Training at Scale",
    description:
      "A 20-year-old DAF training platform was costing millions annually while leaving Airmen without a reliable readiness source of truth. I orchestrated end-to-end modernization — unifying three fragmented systems, establishing governance built to outlast the project, and delivering 3 months early. 4,000+ daily users at launch. Phase 2 funded.",
    href: "/work/air-force",
  },
  {
    index: "02",
    client: "Capital Group",
    category: "Financial Services · Enterprise UX · Multi-Role Systems",
    title: "From Wet Ink to One Click",
    description:
      "A 40-field paper form and a scan-and-email workflow were the only tools business owners, advisors, and Capital Group associates had to manage Small Business 401k plans. Three design sprints. Seven steps collapsed into one platform with a dual approval workflow that finally worked.",
    href: "/work/capital-group",
  },
  {
    index: "03",
    client: "DCMN",
    category: "Dashboard Design · Data Visualization · Performance Marketing",
    title: "Eliminating 400 Hours of Monthly Reporting Waste",
    description:
      "A performance marketing agency was burning 400 hours monthly on manual Excel reporting while its sharpest strategists were trapped doing data entry. I orchestrated the full transformation — workshops across 5 teams, a unified data model, and a live dashboard adopted by 40 individuals company-wide. The Excel templates are gone.",
    href: "/work/dcmn",
  },
  {
    index: "04",
    client: "Pfizer",
    category: "Generative AI · Enterprise SaaS · Pharmaceutical",
    title: "Designing for Trust in a Gen AI Marketing System",
    description:
      "Pfizer's marketing teams had low Gen AI adoption — not because of poor UX, but because marketers couldn't defend generated outputs in medical-legal review. I reframed the problem as a transparency challenge, orchestrated cross-functional alignment, and positioned AI as an Idea Accelerator rather than a replacement. MVP delivered for beta onboarding.",
    href: "/work/pfizer",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* ── Hero — animated client component ─────────────────────────── */}
      <HeroAnimated credentials={credentials} />

      {/* ── Selected Work ────────────────────────────────────────────────── */}
      <section id="work" className="pb-24">
        <div className="rule mb-12">
          <p className="label">Selected Work</p>
        </div>
        <div className="space-y-4">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.href} {...cs} />
          ))}
        </div>
      </section>

      {/* ── Art Studio cross-link ────────────────────────────────────────── */}
      {/* Parallel-practice feature: positions Howdy Art Works as the art    */}
      {/* studio sibling to this design practice. Single anchor wraps the    */}
      {/* image + text so the whole block is clickable; group:hover drives   */}
      {/* the title + arrow color shift to the accent (matches the           */}
      {/* CaseStudyCard interaction pattern, so visitors learn one          */}
      {/* affordance and reuse it).                                          */}
      <section id="art" className="pb-24">
        <div className="rule mb-12">
          <p className="label">When I&apos;m Not Designing</p>
        </div>
        <a
          href="https://howdyart.works"
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative overflow-hidden"
        >
          {/* Accent rule — mirrors the case-study card hover behaviour */}
          <span
            className="absolute bottom-0 left-0 h-px bg-accent w-0 group-hover:w-full"
            style={{ transition: "width 600ms cubic-bezier(0.16, 1, 0.3, 1)" }}
            aria-hidden
          />

          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center pb-10">
            {/* Image — wider column on desktop so the Tessera tile field reads */}
            <div className="md:col-span-3 relative overflow-hidden rounded-sm">
              <Image
                src="/howdyart-hero.png"
                alt="Tessera artwork engine output — a photograph rendered as a wide tile grid of blue sky and cloud color, the artwork engine studio's signature visual"
                width={1529}
                height={463}
                className="w-full h-auto block"
                priority={false}
              />
            </div>

            {/* Text — narrower column with the label, title, body, CTA */}
            <div className="md:col-span-2">
              <p className="label mb-4">Artwork Engine Studio · 2026 →</p>
              <h2
                className="font-display text-h2 font-semibold text-warm-900 leading-tight mb-4 group-hover:text-accent"
                style={{ transition: "color 400ms cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                Howdy Art Works
              </h2>
              <p className="text-warm-900 font-medium leading-relaxed text-[0.9375rem] mb-6">
                An artwork engine studio built alongside the design practice.
                The same systems thinking applied to code, ink, and thread —
                methodical software that produces murals, woven panels, and
                plotted prints at scale.
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-warm-700 group-hover:text-accent"
                style={{ transition: "color 300ms cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                Visit the studio
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path d="M1.5 8.5l7-7M8.5 8V1.5H2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </div>
        </a>
      </section>

      {/* ── Background / Credentials ─────────────────────────────────────── */}
      <section className="pb-32">
        <div className="rule mb-12">
          <p className="label">Clients I&apos;ve Worked With</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {credentials.map((c) => (
            <div key={c.label} className="py-5 border-t-2 border-[#FF3200]">
              <p className="font-semibold text-warm-900 mb-1">{c.label}</p>
              <p className="text-sm text-warm-400">{c.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
