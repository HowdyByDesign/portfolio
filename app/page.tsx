import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyCard from "@/components/CaseStudyCard";
import HeroAnimated from "@/components/HeroAnimated";

export const metadata: Metadata = {
  title: "Ben Howard | UX Strategist",
  description:
    "Specializing in enterprise digital transformation, AI integration, and design systems for global organizations like the U.S. Air Force and Pfizer.",
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
      "A 20-year-old training platform was costing the Air Force millions annually while leaving Airmen without a reliable readiness source of truth. I orchestrated the full modernization — synthesizing stakeholder needs across commands into a unified strategic blueprint, establishing a governance structure built to outlast the project, and delivering 3 months ahead of schedule through co-creation strategy sessions that aligned design intent before a single sprint began. Now serving 4,000+ daily active users, with Phase 2 approved and funded.",
    href: "/work/air-force",
    nda: true,
  },
  {
    index: "02",
    client: "DCMN",
    category: "Dashboard Design · Data Visualization · Performance Marketing",
    title: "Eliminating 400 Hours of Monthly Reporting Waste",
    description:
      "A performance marketing agency was burning 400 hours monthly on manual Excel reporting while its most strategic talent was trapped doing data entry. I orchestrated the solution — synthesizing stakeholder and user needs across 5 teams into a unified strategic blueprint, then delivering a fully connected live dashboard that eliminated the manual cycle entirely. Adopted by 40 individuals across the organization. The Excel templates are gone.",
    href: "/work/dcmn",
    nda: false,
  },
  {
    index: "03",
    client: "Pfizer",
    category: "Generative AI · Enterprise SaaS · Pharmaceutical",
    title: "Designing for Trust in a Gen AI Marketing System",
    description:
      "Pfizer's marketing teams faced low AI adoption — not because of poor UX, but because marketers couldn't defend generated outputs in medical-legal review. I reframed the problem as a transparency design challenge, orchestrated cross-functional alignment across marketing, regulatory, and engineering stakeholders, and developed the strategic blueprint that repositioned AI as an Idea Accelerator. MVP delivered for beta onboarding.",
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
