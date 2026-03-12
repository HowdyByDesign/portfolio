import Link from "next/link";
import CaseStudyCard from "@/components/CaseStudyCard";
import HeroAnimated from "@/components/HeroAnimated";

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
      "A 20-year-old training and readiness management system was costing the Air Force millions in annual maintenance and weeks of operational friction per cycle. I led the end-to-end redesign — new interaction model, unified design system, governance structure — and delivered 3 months ahead of schedule. Now serving 4,000+ daily active users, with Phase 2 approved and funded.",
    href: "/work/air-force",
    nda: true,
  },
  {
    index: "02",
    client: "DCMN",
    category: "Dashboard Design · Data Visualization · Performance Marketing",
    title: "Eliminating 400 Hours of Monthly Reporting Waste",
    description:
      "A performance marketing agency with 50 clients was burning 400 hours every month on manual Excel reporting — error-prone, inconsistent, and impossible to scale. I led the end-to-end redesign through weekly workshops, user research, and a fully connected live dashboard. Adopted by 40 individuals across 5 internal teams. The Excel templates are gone.",
    href: "/work/dcmn",
    nda: false,
  },
  {
    index: "03",
    client: "Pfizer",
    category: "Generative AI · Enterprise SaaS · Pharmaceutical",
    title: "Designing for Trust in a Gen AI Marketing System",
    description:
      "Pfizer's marketing teams needed a Gen AI tool for brand-specific pharmaceutical copy — inside a regulatory environment that doesn't move as fast as the technology. The design challenge wasn't the UI. It was building enough transparency into the system that marketers could use and defend its outputs. I led UX through MVP delivery and beta onboarding.",
    href: "/work/pfizer",
    nda: true,
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
