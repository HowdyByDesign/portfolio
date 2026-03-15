import type { Metadata } from "next";
import Image from "next/image";
import PortraitAnimated from "@/components/PortraitAnimated";

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
      <section className="pb-20 border-b border-warm-100">
        {/*
          Two-column on desktop: text left, portrait right.
          Portrait sits first in DOM so it stacks *above* the text on mobile,
          then shifts to the right via order-last on md+.
          Extra bottom padding (pb-20) gives the "Howdy!" overlay room to breathe.
        */}
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-14">

          {/* ── Portrait — centered on mobile, right on desktop ──────────── */}
          <div className="order-first md:order-last flex justify-center md:block flex-shrink-0 md:pt-3 pb-2 md:pb-0">
            <PortraitAnimated />
          </div>

          {/* ── Text column ─────────────────────────────────────────────── */}
          <div className="flex-1 min-w-0">
            <p className="font-signet font-bold tracking-tight text-xl text-[#FF3200] mb-3">
              Howdy!
            </p>
            <p className="label mb-6">UX Strategist</p>
            <h1
              className="font-display font-semibold text-warm-900 leading-tight mb-8"
              style={{ fontSize: "clamp(2.25rem, 4vw + 0.75rem, 3.75rem)", letterSpacing: "-0.035em" }}
            >
              Ben Howard
            </h1>

            {/* Senior summary — d.MBA + 25% Air Force metric as first-read context */}
            <div className="space-y-5 text-warm-900 font-medium leading-relaxed text-[1.05rem]">
              <p>
                I build high-performance digital environments where business
                strategy and technical feasibility meet. With a{" "}
                <span className="text-warm-700 font-medium">d.MBA lens</span>,
                I orchestrate the systems that make interfaces scalable —
                from modernizing 20-year-old Air Force records systems{" "}
                <span className="text-warm-700 font-medium">
                  (cutting development cycles by 25%
                </span>{" "}
                through co-creation workshops) to navigating the high-stakes
                regulatory landscape of Pfizer&apos;s Gen AI tools.
              </p>

              {/*
               * Darcy paragraph — flex layout wraps the bio text with the
               * Polaroid portrait. On mobile they stack; on sm+ the Polaroid
               * floats to the right of the text, tilt-anchored via rotate-3.
               */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
                <p className="flex-1">
                  When I&apos;m not auditing data models, you&apos;ll find me
                  in Houston with my wife, Dakota, and our dog, Darcy. I&apos;m
                  a fan of technical apparel, intentional craft, and a perfectly
                  executed &ldquo;Howdy.&rdquo;
                </p>

                {/* ── Darcy Polaroid ──────────────────────────────────────── */}
                {/*
                 * Classic Polaroid geometry: white bg, equal padding on 3 sides,
                 * extra padding-bottom for the caption band.
                 * rotate-3 creates the casual-drop editorial feel.
                 * shadow-md lifts it off the warm-50 background.
                 * sepia(0.1) applied for palette consistency with all other images.
                 */}
                <figure className="flex-shrink-0 mt-6 sm:mt-0 self-center sm:self-start rotate-3 shadow-xl bg-white p-3 pb-0 w-56 sm:w-64">
                  <div className="relative w-full aspect-square overflow-hidden">
                    <Image
                      src="/images/darcy_planter.jpg"
                      alt="Darcy — Chief of Investigations & Quality Assurance"
                      fill
                      className="object-cover"
                      style={{ filter: "sepia(0.1) saturate(1.1)" }}
                      sizes="(max-width: 640px) 224px, 256px"
                    />
                  </div>
                  <figcaption className="font-sans text-[0.56rem] uppercase tracking-widest text-warm-700 leading-snug py-3 text-center">
                    DARCY &mdash; CHIEF OF INVESTIGATIONS &amp; QUALITY
                    ASSURANCE. Specializes in structural integrity testing of
                    garden furniture and deep-soil data retrieval.
                  </figcaption>
                </figure>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Why the d.MBA ─────────────────────────────────────────────────── */}
      <section className="py-16 border-b border-warm-100">
        <p className="label mb-6">Why the d.MBA</p>

        <div className="space-y-5 text-warm-900 font-medium leading-relaxed">
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
              <p className="text-warm-900 font-medium leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Technical Stack & Skills ──────────────────────────────────────── */}
      <section className="py-16 border-b border-warm-100">
        <p className="label mb-10">Technical Stack &amp; Skills</p>

        {/* Skills grid */}
        <div className="grid grid-cols-2 gap-3 mb-10">
          {[
            { tool: "Figma",        level: "Expert",                  detail: "Design systems, prototyping, component architecture" },
            { tool: "WCAG 2.2",     level: "Accessibility",           detail: "Audit, remediation, and compliance across enterprise products" },
            { tool: "React JS",     level: "Component-level",         detail: "Implementation, design–engineering handoff, token integration" },
            { tool: "Claude Code",  level: "AI-native tooling",       detail: "Agentic workflows, prompt architecture, AI-assisted design" },
          ].map((s) => (
            <div key={s.tool} className="p-4 rounded-lg border border-warm-200 bg-warm-50">
              <div className="flex items-baseline justify-between gap-2 mb-1.5">
                <p className="text-sm font-semibold text-warm-900">{s.tool}</p>
                <span className="text-xs font-medium text-accent shrink-0">{s.level}</span>
              </div>
              <p className="text-xs text-warm-400 leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>

        {/* Metric callout */}
        <div className="flex items-start gap-5 p-5 rounded-xl border border-warm-200 bg-warm-50">
          <div className="flex-shrink-0">
            <p
              className="font-display font-semibold text-accent leading-none tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
            >
              25%
            </p>
          </div>
          <div className="pt-1">
            <p className="text-sm font-semibold text-warm-900 mb-1">
              Reduction in development cycles
            </p>
            <p className="text-sm text-warm-900 leading-relaxed">
              Achieved through multi-day co-creation workshops that aligned design
              intent with engineering constraints before a single sprint began —
              eliminating the rework cycles that typically follow late-stage
              constraint discovery.
            </p>
          </div>
        </div>
      </section>

      {/* ── Currently / CTA ───────────────────────────────────────────────── */}
      <section className="py-16">
        <p className="label mb-6">Currently</p>
        <p className="text-warm-900 font-medium leading-relaxed mb-8 max-w-prose-wide">
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
