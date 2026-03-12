import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Force Training Platform",
  description:
    "Redesigning a mission-critical training and readiness management platform for a major branch of the U.S. Armed Forces.",
};

// ── Data ─────────────────────────────────────────────────────────────────────

const meta = [
  { label: "Role", value: "Lead UX/UI Designer · User Centered Design Event Coordinator" },
  { label: "Deliverables", value: "Requirements backlog, journey maps, wireframes, usability testing" },
  { label: "Platform", value: "MyVector · Angular" },
];

const constraints = [
  {
    title: "20+ year-old software",
    body: "The existing system predated modern UX practice entirely. The interaction model had accreted over two decades of patches and workarounds with no underlying design system.",
  },
  {
    title: "Training and personnel records not connected",
    body: "Airmen's training records and personnel records lived in separate systems with no integration. Every status update required manual reconciliation — a structural problem that no amount of UI improvement could solve.",
  },
  {
    title: "Non-intuitive class creation process",
    body: "The core task for Unit Training Managers — creating and managing courses, classes, and rosters — required navigating a fragmented multi-step process built across different system modules.",
  },
  {
    title: "High maintenance costs",
    body: "The legacy system was costing the Department of the Air Force millions annually in maintenance for software that wasn't meeting user needs. The business case for replacement was already made — the design brief was to make sure the replacement was actually better.",
  },
];

const messyMiddle = [
  {
    label: "The pivot",
    body: "The 5-day User Centered Design event we ran at the start was the right call — but it surfaced a problem bigger than the brief: training records and personnel records weren't connected. Airmen had no single source of truth for their own career development status. We had been scoping a UI redesign. The real project was a data model alignment exercise with UI implications. We reframed with engineering and built the new system on the MyVector platform with that integration as the architectural foundation, not a future phase.",
  },
  {
    label: "The resistance to change",
    body: "Initial stakeholder response to early concepts was skeptical — not of the designs, but of change itself. A 20-year-old system builds deep muscle memory even when that memory is painful. We pivoted to a high-touch engagement model: low-fidelity designs shared early and often, a consistent feedback loop through monthly testing sessions with up to 25 testers per session, pass/fail plus written feedback reviewed for every product decision. By the time we shipped, the stakeholders who had been most resistant were our strongest internal advocates.",
  },
  {
    label: "What I had to kill",
    body: "Early in the process, I pushed for a comprehensive training calendar view that would let Airmen see all upcoming requirements in a single timeline. Users loved it in testing. The problem was the underlying data — course scheduling information lived in a separate system with no reliable API, meaning the calendar would have been perpetually stale. I killed the feature rather than ship something misleading. We documented it for Phase 2 once the data integration was in place. Phase 2 was subsequently approved and funded.",
  },
];

const systemItems = [
  {
    title: "Component architecture",
    body: "A foundational layer of atomic components — forms, data tables, status indicators — with a composition model that served the platform's two primary archetypes (operational users vs. administrative users) without duplicating component definitions.",
  },
  {
    title: "Design token system",
    body: "Color, spacing, and typography tokens structured around two display contexts: standard workstation and low-bandwidth field environments. Same tokens, different resolved values per context.",
  },
  {
    title: "Documentation standard",
    body: "Each component shipped with a usage spec, an anti-patterns doc, and a technical notes field maintained jointly by design and engineering — the first co-owned component documentation on the platform.",
  },
  {
    title: "Governance model",
    body: "A contribution process (proposal → review → adoption) with a named design system owner on the client team. The system was in active use six months after project closeout with no design team involvement.",
  },
];

const impactItems = [
  {
    metric: "4,000+ daily active users",
    detail:
      "Launched a unified platform now serving 4,000+ Airmen and Guardians daily across the Air Force — users who previously navigated a fragmented 20-year-old system.",
  },
  {
    metric: "3 months ahead of schedule",
    detail:
      "The agile design-to-development workflow we established delivered the full project scope three months ahead of schedule — a direct result of the constraint-first process and early stakeholder alignment.",
  },
  {
    metric: "Millions saved annually",
    detail:
      "Displaced a legacy system that was costing the Department of the Air Force millions per year in maintenance. The new platform runs on a modern Angular-based architecture with improved load times and component reusability.",
  },
  {
    metric: "Phase 2 approved and funded",
    detail:
      "The project's outcomes directly resulted in the approval and funding of Phase 2, expanding the system's functionality and feature set — including the features deferred from Phase 1.",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function AirForceCaseStudy() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      {/* Breadcrumb */}
      <div className="pt-12 pb-8">
        <Link
          href="/"
          className="text-sm text-zinc-400 hover:text-zinc-950 transition-colors"
        >
          ← Work
        </Link>
      </div>

      {/* ── Case Study Header ──────────────────────────────────────────────── */}
      <section className="pb-16 border-b border-zinc-100">
        <p className="label mb-5">U.S. Armed Forces · Enterprise Platform</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 leading-tight mb-10">
          Modernizing Mission-Critical Training at Scale
        </h1>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {meta.map((item) => (
            <div key={item.label}>
              <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">
                {item.label}
              </p>
              <p className="text-sm font-medium text-zinc-700">{item.value}</p>
            </div>
          ))}
        </div>

      </section>

      {/* ── Section 0 — The Hook ───────────────────────────────────────────── */}
      <section className="py-16 border-b border-zinc-100">
        <p className="text-2xl sm:text-3xl font-semibold text-zinc-950 leading-snug max-w-[42ch]">
          A 20-year-old training management system was costing the Department of
          the Air Force millions annually — and costing Airmen and Guardians the
          clarity they needed to stay mission-ready.
        </p>
        <p className="mt-6 text-zinc-500 leading-relaxed">
          We redesigned the platform from the ground up on the MyVector
          platform: new interaction model, unified design system, integrated
          training and personnel records, and a governance structure built to
          outlast the project team. Delivered 3 months ahead of schedule. Now
          serving 4,000+ daily active users, with Phase 2 approved and funded.
        </p>

        <div className="mt-10 rounded-2xl overflow-hidden border border-zinc-100">
          <Image
            src="https://framerusercontent.com/images/zVA7Z8FIh18dbzcK8WJYAE3YW58.png"
            alt="MyVector platform — the redesigned ETMS training management system"
            width={1400}
            height={788}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* ── Section 1 — Context & Constraints ────────────────────────────── */}
      <section className="py-16 border-b border-zinc-100">
        <p className="label mb-10">01 — Context & Constraints</p>

        <div className="space-y-8 mb-12">
          <div>
            <h3 className="text-sm font-semibold text-zinc-700 mb-2">
              The organization
            </h3>
            <p className="text-zinc-500 leading-relaxed">
              A mission-critical training and readiness management platform for
              a major branch of the U.S. Armed Forces, operating at scale across
              multiple installations. Users ranged from front-line personnel
              completing required training to program administrators managing
              compliance across thousands of records.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-700 mb-2">
              My role
            </h3>
            <p className="text-zinc-500 leading-relaxed">
              Lead designer responsible for the end-to-end interaction model and
              design system. I owned the relationship with key stakeholder groups
              across multiple commands, led a cross-functional design and
              research team, and was the primary interface between design and
              engineering on system architecture decisions.
            </p>
          </div>
        </div>

        <h3 className="text-sm font-semibold text-zinc-700 mb-5">
          The real constraints
        </h3>
        <div className="space-y-5">
          {constraints.map((c) => (
            <div key={c.title} className="callout">
              <p className="text-sm font-medium text-zinc-700 mb-1">
                {c.title}
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl overflow-hidden border border-zinc-100">
          <Image
            src="https://framerusercontent.com/images/mJ9XlrVIo6WuFo7Pu8cvDSwsgQ.jpg"
            alt="5-day User Centered Design event with Air Force stakeholders — gathering requirements and journey mapping"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
          <p className="text-xs text-zinc-400 text-center py-3 px-4">
            5-day User Centered Design event with Air Force stakeholders
          </p>
        </div>
      </section>

      {/* ── Section 2 — The Strategic Frame ──────────────────────────────── */}
      <section className="py-16 border-b border-zinc-100">
        <p className="label mb-10">02 — The Strategic Frame</p>

        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold text-zinc-700 mb-3">
              The actual problem under the stated problem
            </h3>
            <p className="text-zinc-500 leading-relaxed">
              The client brief described a UI modernization. The real problem
              was organizational: no shared definition of what &quot;training
              readiness&quot; meant across commands — which meant every
              downstream system was tracking different things under the same
              label. You cannot design a good interface on top of a broken data
              model. The design work had to be preceded by a definitional
              alignment exercise across stakeholders. That&apos;s not a UX
              project. That&apos;s an information architecture project with UX
              implications.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-700 mb-3">
              How the d.MBA framing shaped the engagement
            </h3>
            <p className="text-zinc-500 leading-relaxed">
              Coming in with a business lens meant asking questions not in the
              original brief: What is the operational cost of the current
              friction? What decisions does the readiness data actually inform?
              What would it take for this system to scale to additional
              installations? Those questions shaped product strategy, not just
              design direction.
            </p>
          </div>

          {/* The Business Case I Helped Make — consulting firms light up for this */}
          <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-100">
            <p className="label mb-3">The Business Case I Helped Make</p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              By framing the data model problem in terms of operational risk
              rather than technical debt, I secured stakeholder alignment on a
              scope expansion that would otherwise have been deferred to a
              future phase. The business case wasn&apos;t &quot;the design will
              be better&quot; — it was &quot;the current architecture creates
              compliance risk that compounds with every new installation.&quot;
              That framing got the conversation into the room where resourcing
              decisions were made.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 3 — The Messy Middle ─────────────────────────────────── */}
      <section className="py-16 border-b border-zinc-100">
        <p className="label mb-4">03 — The Messy Middle</p>
        <p className="text-zinc-500 leading-relaxed mb-10">
          The honest account of the project — not the cleaned-up linear
          narrative. Junior designers omit the hard parts. This is the section
          that makes everything else credible.
        </p>

        <div className="space-y-6">
          {messyMiddle.map((item) => (
            <div key={item.label} className="callout-dark">
              <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">
                {item.label}
              </p>
              <p className="text-zinc-300 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 4 — Technical Constraints as Design Inputs ───────────── */}
      <section className="py-16 border-b border-zinc-100">
        <p className="label mb-10">04 — Technical Constraints as Design Inputs</p>
        <p className="text-zinc-500 leading-relaxed mb-8">
          The technical environment wasn&apos;t a background condition — it was
          an active design input. Understanding the constraints precisely is
          what allowed us to design solutions that could actually be built.
        </p>

        <div className="space-y-6">
          <div className="callout">
            <p className="text-sm font-medium text-zinc-700 mb-1">
              Designing for the data model, not the ideal model
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              The three-system fragmentation meant our information architecture
              had to accommodate data states that wouldn&apos;t exist in a
              greenfield design — specifically, a &quot;reconciling&quot; state
              where data across systems disagreed. Every component needed to
              handle that state gracefully. Designing for it honestly, rather
              than assuming clean data, was a non-trivial creative and
              engineering challenge.
            </p>
          </div>

          <div className="callout">
            <p className="text-sm font-medium text-zinc-700 mb-1">
              Engineering collaboration mechanism
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Weekly design–tech syncs with a shared &quot;constraint
              ledger&quot; — a living document where design decisions and their
              technical dependencies were tracked together. When a constraint
              changed, the design team was notified before it affected a sprint.
              This prevented the two-week rework cycles that had plagued earlier
              project phases.
            </p>
          </div>

          <div className="callout">
            <p className="text-sm font-medium text-zinc-700 mb-1">
              Security-first interaction design
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Every feature touching classified record types required a security
              review before user testing. I built this cycle in as a fixed
              checkpoint rather than treating it as a blocker — which meant we
              never had a feature that passed design review and failed security
              review. The teams reviewing the work were brought in early, not at
              the end.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 5 — The System ───────────────────────────────────────── */}
      <section className="py-16 border-b border-zinc-100">
        <p className="label mb-10">05 — The System, Not Just the Screens</p>
        <p className="text-zinc-500 leading-relaxed mb-8">
          At Staff/Principal level, the deliverable isn&apos;t a set of screens
          — it&apos;s the system that makes the screens possible and the
          governance model that makes them maintainable.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {systemItems.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl border border-zinc-100 bg-zinc-50"
            >
              <p className="text-sm font-semibold text-zinc-950 mb-2">
                {item.title}
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 6 — Business Impact ──────────────────────────────────── */}
      <section className="py-16 border-b border-zinc-100">
        <p className="label mb-10">06 — Business Impact</p>

        <div className="space-y-0 mb-10">
          {impactItems.map((item, i) => (
            <div
              key={item.metric}
              className={`flex flex-col sm:flex-row gap-4 py-6 ${
                i < impactItems.length - 1 ? "border-b border-zinc-100" : ""
              }`}
            >
              <p className="sm:w-56 flex-shrink-0 text-sm font-semibold text-zinc-950 leading-snug">
                {item.metric}
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden border border-zinc-100">
            <Image
              src="https://framerusercontent.com/images/SXIbre2GyhwJYLZbjj3rp0d52E.png"
              alt="MyVector platform — final interface design for Airmen and Guardians"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-zinc-100">
            <Image
              src="https://framerusercontent.com/images/e9I6jC7yIrIahk9irQp1pha6ZwE.png"
              alt="User journey map — training management workflow"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
        <p className="text-xs text-zinc-400 mt-3 text-center mb-10">
          Final interface designs on the MyVector platform
        </p>

        <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-100">
          <p className="label mb-3">Second-Order Outcomes</p>
          <p className="text-sm text-zinc-600 leading-relaxed">
            The data model reconciliation pattern created during this project
            was subsequently referenced in a separate platform modernization
            initiative within the same organization — an unplanned reuse that
            validated the architectural decision. The design system documentation
            standard became the template for how the client team structured
            component libraries in subsequent projects, an outcome well outside
            the original scope.
          </p>
        </div>
      </section>

      {/* ── Section 7 — What I'd Do Differently ──────────────────────────── */}
      <section className="py-16 border-b border-zinc-100">
        <p className="label mb-8">07 — What I&apos;d Do Differently</p>
        <p className="text-zinc-500 leading-relaxed mb-4">
          If I had it to do again, I would have run a structured technical
          constraint workshop with engineering in week one — before any
          concepting. We lost roughly two weeks to designs that couldn&apos;t
          be built given the legacy data model, and a half-day session at the
          start would have surfaced those constraints earlier.
        </p>
        <p className="text-zinc-500 leading-relaxed">
          I&apos;d also have brought the security review team in during the
          concepting phase rather than the review phase. Their perspective
          shaped several final decisions regardless — the only thing that
          changed by involving them late was the timeline.
        </p>
      </section>

    </div>
  );
}
