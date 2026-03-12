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
      <section className="pb-16 border-b border-zinc-100">
        <p className="font-sriracha text-3xl text-[#FF3200] mb-3">
          Howdy!
        </p>
        <p className="label mb-6">About</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 leading-tight mb-10">
          Ben Howard
        </h1>

        <div className="space-y-5 text-zinc-500 leading-relaxed text-lg">
          <p>
            Howdy — I&apos;m a senior product designer with over nine years of
            experience creating digital experiences by leveraging user input,
            business goals, and data. I&apos;ve delivered high-fidelity
            solutions for Pfizer, Capital Group, and the U.S. Air Force — and
            my work sits at the intersection of organizational complexity and
            user experience, the kind of problems where the hard part
            isn&apos;t the UI, it&apos;s understanding the system well enough
            to know what the UI should actually do.
          </p>
          <p>
            My background spans enterprise software, government systems,
            performance marketing, and global pharmaceutical R&D. Before
            design, I served in the U.S. Air Force — working inside one of the
            world&apos;s most complex organizational systems with real stakes
            attached to every decision. That experience shapes how I approach
            ambiguity, constraint navigation, and cross-functional alignment in
            ways that are genuinely difficult to replicate from other career
            paths.
          </p>
          <p>
            More recently I&apos;ve been leading design on AI-native tools —
            most significantly a generative AI marketing workflow system at
            Pfizer — where the design challenge isn&apos;t &quot;how do you
            make this look good&quot; but &quot;how do you design for trust in
            a system whose outputs marketers can&apos;t fully verify, inside a
            regulatory environment that doesn&apos;t move as fast as the
            technology.&quot; Reframing AI adoption resistance as a design
            problem, not a change management problem, was the key shift.
          </p>
        </div>
      </section>

      {/* ── Why the d.MBA ─────────────────────────────────────────────────── */}
      <section className="py-16 border-b border-zinc-100">
        <p className="label mb-6">Why the d.MBA</p>

        <div className="space-y-5 text-zinc-500 leading-relaxed">
          <p>
            I pursued the{" "}
            <span className="text-zinc-700 font-medium">
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
      <section className="py-16 border-b border-zinc-100">
        <p className="label mb-10">How I Work</p>

        <div className="space-y-9">
          {workingPrinciples.map((p) => (
            <div key={p.title} className="callout">
              <p className="font-semibold text-zinc-950 mb-2">{p.title}</p>
              <p className="text-zinc-500 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Currently / CTA ───────────────────────────────────────────────── */}
      <section className="py-16">
        <p className="label mb-6">Currently</p>
        <p className="text-zinc-500 leading-relaxed mb-8 max-w-prose-wide">
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
