import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Staff designer working at the intersection of organizational complexity, AI integration, and measurable business outcomes.",
};

// ── Data ─────────────────────────────────────────────────────────────────────

const workingPrinciples = [
  {
    title: "Start with the organizational problem",
    body: "Most design briefs describe a UI problem. The real problem is usually upstream — in a workflow, a data model, a stakeholder misalignment, or a business model constraint. I spend disproportionate time in the first two weeks of any engagement trying to locate that upstream problem before committing to a design direction.",
  },
  {
    title: "Design the handoff as carefully as the product",
    body: "A design that doesn't survive the designer's departure isn't finished. That means documentation a future team can actually maintain, a governance model that specifies who owns what decisions, and engineering partners who understand the intent behind components well enough to make good tradeoffs on their own.",
  },
  {
    title: "Translate fluently in both directions",
    body: "Between users and business stakeholders. Between design and engineering. Between what exists today and what's possible to build. My d.MBA was specifically about developing business-language fluency — not to become a businessperson, but to be a designer who can operate credibly at the table where strategy gets made.",
  },
  {
    title: "Bring constraints in early",
    body: "Technical, regulatory, procurement, organizational — these aren't blockers to good design. They're design inputs. The best work I've shipped has been designed with constraints at the center, not around them.",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* ── Intro ─────────────────────────────────────────────────────────── */}
      <section className="pb-16 border-b border-warm-100">
        <p className="font-signet italic font-bold tracking-tight text-xl text-[#FF3200] mb-3">
          Howdy!
        </p>
        <p className="label mb-6">Systems Architect &amp; Design Strategist</p>
        <h1
          className="font-display font-semibold text-warm-900 leading-tight mb-10"
          style={{ fontSize: "clamp(2.25rem, 4vw + 0.75rem, 3.75rem)", letterSpacing: "-0.035em" }}
        >
          Ben Howard
        </h1>

        <div className="space-y-5 text-warm-500 leading-relaxed text-lg">
          <p>
            I build high-performance digital environments where business
            strategy and technical feasibility meet. With a d.MBA lens, I
            don&apos;t just design interfaces — I orchestrate the systems that
            make them scalable. From modernizing 20-year-old legacy records for
            the U.S. Air Force to navigating the high-stakes regulatory
            landscape of Pfizer&apos;s Gen AI tools, my work is defined by
            bridging the gap between design vision and engineering reality.
          </p>
          <p>
            When I&apos;m not auditing data models, you&apos;ll find me in
            Houston with my wife, Dakota, and our dog, Darcy. I&apos;m a fan
            of technical apparel, intentional craft, and a perfectly executed
            &ldquo;Howdy.&rdquo;
          </p>
        </div>
      </section>

      {/* ── Why the d.MBA ─────────────────────────────────────────────────── */}
      <section className="py-16 border-b border-warm-100">
        <p className="label mb-6">Why the d.MBA</p>

        <div className="space-y-5 text-warm-500 leading-relaxed">
          <p>
            I pursued the{" "}
            <span className="text-warm-700 font-medium">
              Design MBA (d.MBA)
            </span>{" "}
            because I kept running into the same ceiling: I could design a
            strong solution but couldn&apos;t always make the business case for
            why it was the right solution. That&apos;s a credibility gap that
            matters at the table where resourcing and roadmap decisions get
            made.
          </p>
          <p>
            The program is specifically about operating at the intersection of
            design and business strategy — not to become an MBA, but to stop
            being the designer who gets cut from the room when the P&L
            conversation starts. It changed how I frame problems, how I write
            case studies, and how I communicate with stakeholders who
            don&apos;t care about design but very much care about outcomes.
          </p>
          <p>
            The immediate effect: I started leading with business outcomes
            instead of design rationale. That one shift changed the reception
            of my work with executive stakeholders more than any other single
            change I&apos;ve made in how I communicate.
          </p>
        </div>
      </section>

      {/* ── How I Work ────────────────────────────────────────────────────── */}
      <section className="py-16 border-b border-warm-100">
        <p className="label mb-10">How I Work</p>

        <div className="space-y-4">
          {workingPrinciples.map((p) => (
            <div key={p.title} className="p-5 rounded-lg border border-warm-200 bg-warm-50">
              <p className="font-semibold text-warm-900 mb-2">{p.title}</p>
              <p className="text-warm-500 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Currently / CTA ───────────────────────────────────────────────── */}
      <section className="py-16">
        <p className="label mb-6">Currently</p>
        <p className="text-warm-500 leading-relaxed mb-8 max-w-prose-wide">
          Open to Staff / Principal Designer roles at enterprise SaaS companies
          and top-tier consulting practices where design operates at the
          strategic level — particularly teams building AI-native products in
          complex, regulated, or mission-critical environments.
        </p>
        <a
          href="mailto:Howdy@Howdybydesign.com"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF3200] text-white text-sm font-medium rounded-full hover:bg-[#CC2800] transition-colors"
        >
          Get in touch →
        </a>
      </section>
    </div>
  );
}
