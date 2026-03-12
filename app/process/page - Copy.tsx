import type { Metadata } from "next";

// Hidden from nav — shared only in outreach emails. This is a Principal-level power move.
export const metadata: Metadata = {
  title: "Process — [Your Name]",
  description:
    "How I approach design problems — methods, frameworks, and operating model.",
  robots: "noindex, nofollow",
};

// ── Data ─────────────────────────────────────────────────────────────────────

const methods = [
  {
    phase: "Discovery",
    tools: [
      {
        name: "Stakeholder Landscape Mapping",
        description:
          "Before user research, I map who has input, who has veto power, and whose incentives are misaligned. This shapes the research plan and the communication strategy for the rest of the project.",
      },
      {
        name: "Constraint Audit",
        description:
          "A structured exercise in week one to surface technical, regulatory, procurement, and organizational constraints. Not to limit design thinking — to ensure design thinking operates in the real environment rather than an idealized one.",
      },
      {
        name: "Problem Upstream Framing",
        description:
          "Five Whys applied to the brief. Most briefs describe a symptom. I use this to locate the actual problem before any design work begins — and to pressure-test whether the stated problem is the right one to solve.",
      },
    ],
  },
  {
    phase: "Definition",
    tools: [
      {
        name: "Decision Log",
        description:
          "A living document tracking 3–5 pivotal decisions per project: what we were originally designing, what evidence changed it, and what the pivot cost. Becomes the primary artifact for stakeholder alignment and retrospective learning.",
      },
      {
        name: "Business Case Canvas",
        description:
          "Before any concept presentation, I draft a 3-sentence business case connecting the design direction to a business outcome. This is the filter that prevents strong design from failing to get approved.",
      },
    ],
  },
  {
    phase: "Design",
    tools: [
      {
        name: "Constraint-First Concepting",
        description:
          "Concepts are evaluated against the constraint set before they're evaluated on aesthetics or usability. A design that can't be built in the existing technical environment isn't a design — it's a proposal.",
      },
      {
        name: "Anti-Pattern Documentation",
        description:
          "Every component in a design system ships with an anti-patterns doc — what this component is not for. This prevents the misuse that degrades system coherence over time.",
      },
    ],
  },
  {
    phase: "Delivery",
    tools: [
      {
        name: "Handoff Architecture",
        description:
          "The handoff is designed as carefully as the product: documentation a future team can maintain without the original designer, a governance model specifying who owns which decisions, and engineering partners who understand the intent behind components well enough to make good tradeoffs independently.",
      },
      {
        name: "Post-Launch Governance Design",
        description:
          "I advocate for a named design system owner on every project that ships a component library. Without ownership, systems degrade. The best design work I've shipped is still in use because we solved for maintenance at the design stage.",
      },
    ],
  },
];

const tools = [
  { category: "Design", items: ["Figma", "FigJam"] },
  { category: "Prototyping", items: ["Figma Prototyping", "ProtoPie", "Framer"] },
  { category: "Research", items: ["Dovetail", "Maze", "UserTesting"] },
  { category: "Design Systems", items: ["Storybook", "Supernova", "Zero Height"] },
  { category: "Dev Handoff", items: ["Figma Dev Mode", "Zeplin"] },
  { category: "Strategy", items: ["Miro", "Notion", "Coda"] },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function Process() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* Header */}
      <section className="pb-12 border-b border-zinc-100">
        <p className="label mb-4">Not linked in nav</p>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-950 leading-tight mb-6">
          How I Work
        </h1>
        <p className="text-zinc-500 leading-relaxed text-lg max-w-prose-wide">
          This page documents my methods, frameworks, and operating model.
          It&apos;s shared in outreach conversations and not linked from the
          main navigation — a working document, not a marketing page.
        </p>
      </section>

      {/* Methods by phase */}
      <section className="py-16 border-b border-zinc-100">
        <p className="label mb-12">Methods by Phase</p>

        <div className="space-y-16">
          {methods.map((phase) => (
            <div key={phase.phase}>
              <p className="text-xs font-semibold text-zinc-950 uppercase tracking-widest mb-7">
                {phase.phase}
              </p>
              <div className="space-y-6">
                {phase.tools.map((tool) => (
                  <div key={tool.name} className="callout">
                    <p className="text-sm font-semibold text-zinc-700 mb-2">
                      {tool.name}
                    </p>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="py-16">
        <p className="label mb-10">Tools</p>
        <div className="grid sm:grid-cols-2 gap-8">
          {tools.map((group) => (
            <div key={group.category}>
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 rounded-full bg-zinc-100 text-zinc-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
