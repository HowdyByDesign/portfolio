import type { Metadata } from "next";
import CaseStudyCard from "@/components/CaseStudyCard";

export const metadata: Metadata = {
  title: { absolute: "Selected Work | Ben Howard" },
  description:
    "Case studies in enterprise UX, AI design, and operational redesign — for the U.S. Air Force, Capital Group, Pfizer, and DCMN.",
  openGraph: {
    title: "Selected Work | Ben Howard",
    description:
      "Case studies in enterprise UX, AI design, and operational redesign — for the U.S. Air Force, Capital Group, Pfizer, and DCMN.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Work | Ben Howard",
    description:
      "Case studies in enterprise UX, AI design, and operational redesign — for the U.S. Air Force, Capital Group, Pfizer, and DCMN.",
    images: ["/og-image.png"],
  },
};

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
      "A 40-field paper form and a scan-and-email workflow were the only tools business owners, advisors, and Capital Group associates had to manage Small Business 401k plans. I redesigned the entire experience role by role — replacing a seven-step analog chain with a single platform and a dual approval workflow that finally worked.",
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

export default function WorkIndex() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-32">
      <section>
        <div className="rule mb-6">
          <p className="label">Selected Work</p>
        </div>
        <p className="text-warm-400 font-medium text-[1.05rem] leading-relaxed mb-16 max-w-[60ch]">
          Four engagements where business strategy and design craft had to
          operate at the same scale.
        </p>
        <div className="space-y-4">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.href} {...cs} />
          ))}
        </div>
      </section>
    </div>
  );
}
