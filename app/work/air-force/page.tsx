import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DAF Training Modernization",
  description:
    "Replacing a 20-year-old Air Force training management system with a unified platform serving 4,000+ Airmen daily — delivered 3 months ahead of schedule.",
};

// ── Data ─────────────────────────────────────────────────────────────────────

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

const hardPart = [
  {
    label: "The initial resistance",
    body: "Initial stakeholder response to early concepts was skeptical — not of the designs, but of change itself. A 20-year-old system builds deep muscle memory even when that memory is painful. Unit Training Managers knew every workaround. The new system asked them to trust that the workarounds wouldn't be needed.",
  },
  {
    label: "How consensus was built",
    body: "We pivoted to a high-touch engagement model: low-fidelity designs shared early and often, a consistent feedback loop through monthly testing sessions with up to 25 testers per session, pass/fail plus written feedback reviewed for every product decision. By month six, the stakeholders who had been most resistant were advocating internally for the new system. They weren't sold on the design — they were sold because the design reflected their input.",
  },
  {
    label: "The feature I had to kill",
    body: "I pushed for a comprehensive training calendar view that would let Airmen see all upcoming requirements in a single timeline. Users loved it in testing. The problem was the underlying data — course scheduling lived in a separate system with no reliable API, meaning the calendar would have been perpetually stale. I killed it rather than ship something misleading. We documented it for Phase 2 once the data integration was in place. Phase 2 was subsequently approved and funded.",
  },
];

const systemItems = [
  {
    title: "Component architecture",
    body: "Standardized the platform's foundational component library — forms, data tables, status indicators — by implementing a two-archetype model (operational vs. administrative users) that eliminated duplicated component definitions across the system.",
  },
  {
    title: "Design token system",
    body: "Implemented a color, spacing, and typography token system structured around two display contexts: standard workstation and low-bandwidth field environments. Same tokens, different resolved values per context.",
  },
  {
    title: "Documentation standard",
    body: "Established joint design–engineering documentation for each component: a usage spec, an anti-patterns doc, and a technical notes field co-maintained by design and engineering — the first co-owned component documentation on the platform.",
  },
  {
    title: "Governance model",
    body: "Implemented a contribution process (proposal → review → adoption) with a named design system owner on the client team. The system was in active use six months after project closeout with no design team involvement.",
  },
];

const impactItems = [
  {
    metric: "4,000+ daily active users",
    detail:
      "Launched a unified platform now serving 4,000+ Airmen and Guardians daily across the Air Force — users who previously navigated a fragmented 20-year-old system.",
  },
  {
    metric: "25% reduction in development cycles",
    detail:
      "Multi-day co-creation strategy sessions aligned design intent with engineering constraints before a single sprint began — eliminating the rework cycles that had plagued earlier project phases. A direct result of strategic stakeholder alignment, not design speed. Delivered the full project scope 3 months ahead of schedule.",
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

// Sample data for the System Atoms showcase
const rosterSample = [
  { name: "MSgt Chen, R.", afsc: "3D0X2", status: "ready", overdue: 0, updated: "Mar 8" },
  { name: "SrA Davis, T.", afsc: "1C2X1", status: "pending", overdue: 2, updated: "Mar 1" },
  { name: "SSgt Park, J.", afsc: "2T3X1", status: "overdue", overdue: 4, updated: "Feb 12" },
  { name: "A1C Torres, M.", afsc: "3E5X1", status: "exempt", overdue: 0, updated: "Mar 10" },
];

const statusConfig: Record<string, { label: string; className: string }> = {
  ready:   { label: "Ready",          className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  pending: { label: "Pending Review", className: "bg-amber-50 text-amber-700 border-amber-200" },
  overdue: { label: "Overdue",        className: "bg-red-50 text-[#FF3200] border-red-100" },
  exempt:  { label: "Exempt",         className: "bg-warm-100 text-warm-500 border-warm-200" },
};

const technicalConstraints = [
  {
    title: "Designing for the data model, not the ideal model",
    body: `The three-system fragmentation meant our information architecture had to accommodate data states that wouldn't exist in a greenfield design — specifically, a "reconciling" state where data across systems disagreed. Every component needed to handle that state gracefully. Designing for it honestly, rather than assuming clean data, was a non-trivial creative and engineering challenge.`,
  },
  {
    title: "Engineering collaboration mechanism",
    body: `Weekly design–tech syncs with a shared "constraint ledger" — a living document where design decisions and their technical dependencies were tracked together. When a constraint changed, the design team was notified before it affected a sprint. This prevented the two-week rework cycles that had plagued earlier project phases.`,
  },
  {
    title: "Security-first interaction design",
    body: `Every feature touching classified record types required a security review before user testing. I built this cycle in as a fixed checkpoint rather than treating it as a blocker — which meant we never had a feature that passed design review and failed security review.`,
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function AirForceCaseStudy() {
  return (
    <>
      {/* ────────────────────────────────────────────────────────────────────
          ABOVE THE FOLD
      ──────────────────────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="pt-12 pb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-warm-400 hover:text-warm-900 transition-colors"
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <span aria-hidden>←</span>
            Work
          </Link>
        </div>

        {/* Category label */}
        <p className="label mb-5">U.S. Air Force · Enterprise Platform · DAF Modernization</p>

        {/* H1 */}
        <h1 className="font-display text-display font-semibold text-warm-900 leading-tight mb-10">
          Modernizing Mission-Critical Training at Scale
        </h1>

        {/* ── TLDR ───────────────────────────────────────────────────────── */}
        <div className="my-8 border-l-2 border-warm-200 pl-5 space-y-3">
          {[
            {
              label: "Problem",
              text: `A 20-year-old training system was costing the Air Force millions annually — while leaving Airmen with no reliable source of truth for their readiness status.`,
            },
            {
              label: "Action",
              text: `Orchestrated end-to-end modernization of the ETMS platform — developed the customer experience blueprint, synthesized stakeholder needs across commands into a unified strategy, and established a governance structure built to outlast the project team.`,
            },
            {
              label: "Outcome",
              text: `4,000+ daily users at launch. Delivered 3 months early. Millions in legacy costs displaced. Phase 2 approved and funded.`,
            },
          ].map(({ label, text }) => (
            <div key={label} className="flex gap-3 items-baseline">
              <span className="font-signet font-bold text-xs text-[#FF3200] uppercase tracking-widest w-16 flex-shrink-0">
                {label}
              </span>
              <p className="text-sm text-warm-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Primary Metric — the business case in one number */}
        <div className="mb-8">
          <p
            className="font-display font-semibold text-accent leading-none tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
          >
            Millions
          </p>
          <p className="font-display text-h3 font-medium text-warm-400 leading-tight mt-1">
            in legacy maintenance costs displaced.
          </p>
        </div>

        {/* The Problem — one sentence */}
        <p className="text-warm-600 text-[1.0625rem] leading-relaxed max-w-[52ch] mb-2">
          Analog "spaghetti" workflows across the DAF were costing the Department
          millions in annual maintenance — while leaving Airmen and Guardians
          without a single, reliable source of truth for their own readiness status.
        </p>
      </div>

      {/* ────────────────────────────────────────────────────────────────────
          STICKY IMPACT CARD — sticks below the nav as the user reads
      ──────────────────────────────────────────────────────────────────── */}
      <div
        className="sticky top-16 z-10 border-b border-warm-200 bg-warm-50/95 backdrop-blur-md"
        aria-label="Project at a glance"
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-3 divide-x divide-warm-200">
            {[
              { label: "Role",               value: "Strategic Designer" },
              { label: "Timeline",           value: "18 Months" },
              { label: "Daily Active Users", value: "4,000+" },
            ].map((item) => (
              <div key={item.label} className="py-4 px-5 first:pl-0 last:pr-0">
                <p className="label mb-1">{item.label}</p>
                <p className="font-display text-h4 font-semibold text-warm-900 leading-tight">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────────
          BODY — all remaining sections
      ──────────────────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6">

        {/* ── Hook summary + Hero image ─────────────────────────────────── */}
        <section className="pt-12 pb-16 border-b border-warm-100">
          <p className="text-warm-900 font-medium leading-relaxed mb-10 max-w-[58ch]">
            I orchestrated the full modernization of the legacy ETMS on the MyVector
            platform — standardizing the interaction model and component architecture,
            reconciling fragmented training and personnel records across three
            disconnected legacy systems, and implementing a governance structure built
            to outlast the project team. Delivered 3 months ahead of schedule. Now
            serving 4,000+ daily active users, with Phase 2 approved and funded.
          </p>

          <div className="rounded-xl overflow-hidden border border-warm-100">
            <Image
              src="https://framerusercontent.com/images/zVA7Z8FIh18dbzcK8WJYAE3YW58.png"
              alt="MyVector platform — the redesigned ETMS training management system"
              width={1400}
              height={788}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* ── 01 — Context & Constraints ───────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p className="label mb-10">01 — Context & Constraints</p>

          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-sm font-semibold text-warm-700 mb-2">The organization</h3>
              <p className="text-warm-900 font-medium leading-relaxed">
                A mission-critical training and readiness management platform for a major
                branch of the U.S. Armed Forces, operating at scale across multiple
                installations. Users ranged from front-line personnel completing required
                training to program administrators managing compliance across thousands of records.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-warm-700 mb-2">My role</h3>
              <p className="text-warm-900 font-medium leading-relaxed">
                Systems architect and lead UX strategist responsible for orchestrating
                the full modernization — developing the customer experience blueprint,
                synthesizing stakeholder and user needs across multiple commands into a
                unified strategy, and establishing a governance structure built to outlast
                the project team. I orchestrated the technical and business roadmap,
                owned stakeholder relationships across commands, and drove the
                co-creation strategy sessions that aligned design intent with
                engineering constraints before sprints began.
              </p>
            </div>
          </div>

          <h3 className="text-sm font-semibold text-warm-700 mb-5">The real constraints</h3>
          <div className="space-y-4">
            {constraints.map((c) => (
              <div
                key={c.title}
                className="pl-5 border-l-2 border-warm-200 py-1"
              >
                <p className="text-sm font-semibold text-warm-800 mb-1">{c.title}</p>
                <p className="text-sm text-warm-900 font-medium leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-xl overflow-hidden border border-warm-100">
            <Image
              src="https://framerusercontent.com/images/mJ9XlrVIo6WuFo7Pu8cvDSwsgQ.jpg"
              alt="5-day User Centered Design event with Air Force stakeholders"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
            <p className="text-xs text-warm-400 text-center py-3 px-4">
              5-day User Centered Design event with Air Force stakeholders
            </p>
          </div>
        </section>

        {/* ── 02 — The Strategic Frame ─────────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p className="label mb-10">02 — The Strategic Frame</p>

          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-14 lg:items-start">
            {/* ── Main narrative ── */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-warm-700 mb-3">
                  The actual problem under the stated problem
                </h3>
                <p className="text-warm-900 font-medium leading-relaxed">
                  The client brief described a UI modernization. The real problem was
                  organizational: no shared definition of what "training readiness" meant
                  across commands — which meant every downstream system was tracking different
                  things under the same label. You cannot design a good interface on top of a
                  broken data model. The design work had to be preceded by a definitional
                  alignment exercise across stakeholders. That&apos;s not a UX project.
                  That&apos;s an information architecture project with UX implications.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-warm-700 mb-3">
                  How the d.MBA framing shaped the engagement
                </h3>
                <p className="text-warm-900 font-medium leading-relaxed">
                  Coming in with a business lens meant asking questions not in the original
                  brief: What is the operational cost of the current friction? What decisions
                  does the readiness data actually inform? What would it take for this system
                  to scale to additional installations? Those questions shaped product strategy,
                  not just design direction.
                </p>
              </div>
            </div>

            {/* ── Margin aside ── */}
            <aside className="mt-10 lg:mt-0 lg:sticky lg:top-24 space-y-6">
              <div className="border-l-2 border-accent/40 pl-4">
                <p className="text-xs font-semibold text-warm-400 uppercase tracking-widest mb-2">Business case made</p>
                <p className="text-sm text-warm-600 leading-relaxed">
                  Framing the data model problem as operational risk — not technical debt — secured scope approval that would otherwise have been deferred.
                </p>
              </div>
              <div className="border-l-2 border-warm-200 pl-4">
                <p className="text-xs font-semibold text-warm-400 uppercase tracking-widest mb-1">Installations</p>
                <p className="font-display text-3xl font-semibold text-warm-900 leading-none">Multi</p>
                <p className="text-xs text-warm-400 leading-snug mt-1">commands · designed to scale from day one</p>
              </div>
            </aside>
          </div>
        </section>

        {/* ── 03 — System Atoms (Visual System / Technical Deep-Dive) ──── */}
        <section className="py-16 border-b border-warm-100">
          <p className="label mb-3">03 — The Visual System</p>
          <h2 className="font-display text-h2 font-semibold text-warm-900 mb-4 leading-tight">
            Atoms Built for Operational Clarity
          </h2>
          <p className="text-warm-900 font-medium leading-relaxed mb-12 max-w-[56ch]">
            Every component in the system was designed to reduce cognitive load for users
            managing compliance data under time pressure. Here are the atoms that power it.
          </p>

          {/* ── Atom: Status Badges ────────────────────────────── */}
          <div className="mb-12">
            <p className="text-xs font-semibold text-warm-400 uppercase tracking-widest mb-4">
              Status Badges — Readiness States
            </p>
            <div className="flex flex-wrap gap-2">
              {Object.values(statusConfig).map((s) => (
                <span
                  key={s.label}
                  className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold border ${s.className}`}
                >
                  {s.label}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs text-warm-400 leading-relaxed max-w-[52ch]">
              Color never carries meaning alone — each state also has a distinct label and
              is reinforced by the action available in context. Color-blind users can
              distinguish states by label without relying on hue.
            </p>
          </div>

          {/* ── Atom: Data Table ───────────────────────────────── */}
          <div className="mb-12">
            <p className="text-xs font-semibold text-warm-400 uppercase tracking-widest mb-4">
              Data Table — Squadron Roster View
            </p>
            <div className="overflow-hidden rounded border border-warm-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-warm-100 border-b border-warm-200">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-warm-600 uppercase tracking-wider">
                      Airman
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-warm-600 uppercase tracking-wider hidden sm:table-cell">
                      AFSC
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-warm-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-warm-600 uppercase tracking-wider">
                      Overdue
                    </th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-warm-600 uppercase tracking-wider hidden sm:table-cell">
                      Updated
                    </th>
                    <th className="px-4 py-3 hidden sm:table-cell" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-warm-100 bg-white">
                  {rosterSample.map((row) => {
                    const s = statusConfig[row.status];
                    return (
                      <tr
                        key={row.name}
                        className="hover:bg-warm-50 transition-colors duration-150"
                        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                      >
                        <td className="px-4 py-3 font-medium text-warm-900">{row.name}</td>
                        <td className="px-4 py-3 text-warm-400 tabular-nums text-xs hidden sm:table-cell">
                          {row.afsc}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold border ${s.className}`}
                          >
                            {s.label}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right tabular-nums text-warm-700 text-sm">
                          {row.overdue > 0 ? (
                            <span className="text-[#FF3200] font-medium">{row.overdue}</span>
                          ) : (
                            <span className="text-warm-300">—</span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-right text-warm-400 text-xs hidden sm:table-cell">
                          {row.updated}
                        </td>
                        <td className="px-4 py-3 text-right hidden sm:table-cell">
                          <button
                            className="text-xs font-medium text-warm-700 hover:text-accent transition-colors px-3 py-1.5 rounded border border-warm-200 hover:border-accent bg-white"
                            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                          >
                            {row.status === "overdue" || row.status === "pending"
                              ? "Update Readiness"
                              : "Review Readiness"}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-warm-400 leading-relaxed max-w-[52ch]">
              Numbers right-aligned for scan-ability. Action labels name an outcome
              ("Update Readiness"), never a mechanic ("Submit" or "Edit").
            </p>
          </div>

          {/* ── Atom: Input Fields ─────────────────────────────── */}
          <div>
            <p className="text-xs font-semibold text-warm-400 uppercase tracking-widest mb-4">
              Input Fields — Filter & Search Controls
            </p>
            <div className="grid sm:grid-cols-2 gap-5 p-6 bg-white rounded border border-warm-200">
              {/* Search input */}
              <div>
                <label className="block text-xs font-semibold text-warm-700 uppercase tracking-wider mb-1.5">
                  Search Airmen
                </label>
                <div className="relative">
                  <span
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-400 text-sm"
                    aria-hidden
                  >
                    ⌕
                  </span>
                  <input
                    type="text"
                    placeholder="Search by name or AFSC…"
                    readOnly
                    className="w-full pl-8 pr-3 py-2.5 border border-warm-200 bg-warm-50 text-warm-900 text-sm rounded focus:outline-none placeholder-warm-300"
                  />
                </div>
              </div>

              {/* Status filter */}
              <div>
                <label className="block text-xs font-semibold text-warm-700 uppercase tracking-wider mb-1.5">
                  Filter by Training Status
                </label>
                <select
                  className="w-full px-3 py-2.5 border border-warm-200 bg-warm-50 text-warm-900 text-sm rounded focus:outline-none appearance-none"
                  defaultValue=""
                >
                  <option value="">All Statuses</option>
                  <option>Ready</option>
                  <option>Pending Review</option>
                  <option>Overdue</option>
                  <option>Exempt</option>
                </select>
              </div>

              {/* Export action — outcome-named */}
              <div className="sm:col-span-2 pt-2 flex items-center justify-between border-t border-warm-100">
                <p className="text-xs text-warm-400">
                  Showing 4 of 4 Airmen · 1 overdue
                </p>
                <button className="text-xs font-semibold text-warm-900 hover:text-accent transition-colors px-4 py-2 rounded border border-warm-200 hover:border-accent bg-white flex items-center gap-1.5"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
                  Export Squadron Report
                  <span aria-hidden className="text-warm-400">↓</span>
                </button>
              </div>
            </div>
            <p className="mt-3 text-xs text-warm-400 leading-relaxed max-w-[52ch]">
              Top-aligned labels with sufficient contrast. Every action states what
              it produces: "Export Squadron Report" — not "Export" or "Download."
            </p>
          </div>
        </section>

        {/* ── 04 — The Hard Part (Stakeholder Management) ──────────────── */}
        <section className="py-16 border-b border-warm-100">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-14 lg:items-start">
            {/* ── Main narrative ── */}
            <div>
              <p className="label mb-3">04 — Stakeholder Management</p>
              <h2 className="font-display text-h2 font-semibold text-warm-900 mb-4 leading-tight">
                The Hard Part
              </h2>
              <p className="text-warm-900 font-medium leading-relaxed mb-10">
                Junior designers document the ideal flow. This is the section that makes
                everything else credible — the honest account of resistance, pivots, and
                the path to consensus.
              </p>

              <div className="space-y-4">
                {hardPart.map((item) => (
                  <div
                    key={item.label}
                    className="bg-warm-950 text-warm-100 rounded-xl p-8"
                  >
                    <p className="text-xs font-semibold text-warm-600 uppercase tracking-widest mb-4">
                      {item.label}
                    </p>
                    <p className="text-warm-300 leading-relaxed text-[0.9375rem]">{item.body}</p>
                  </div>
                ))}
              </div>

              {/* ── Howdy Quote Callout ─────────────────────────── */}
              <div className="mt-12 pt-10 border-t border-warm-100">
                <p className="label mb-8">From the field</p>
                <blockquote className="relative">
                  <span
                    className="block font-display font-semibold text-accent leading-none mb-4 select-none"
                    style={{ fontSize: "5rem", lineHeight: 0.8 }}
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  <p className="font-display text-h2 font-semibold text-warm-900 leading-tight max-w-[28ch]">
                    This report used to take a full day; now it takes 15 minutes.
                  </p>
                  <footer className="mt-8 flex items-center gap-4">
                    <span className="font-signet font-bold tracking-tight text-base text-accent leading-none">Howdy</span>
                    <span className="w-px h-5 bg-warm-200" aria-hidden />
                    <cite className="not-italic text-xs text-warm-400 uppercase tracking-widest">
                      Unit Training Manager · DAF
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* ── Margin aside — stakeholder scale ── */}
            <aside className="mt-10 lg:mt-12 lg:sticky lg:top-24 space-y-6">
              <div className="border-l-2 border-accent/40 pl-4">
                <p className="text-xs font-semibold text-warm-400 uppercase tracking-widest mb-1">Testers per session</p>
                <p className="font-display text-4xl font-semibold text-warm-900 leading-none">25</p>
                <p className="text-xs text-warm-400 leading-snug mt-1">monthly · pass/fail + written feedback reviewed for every decision</p>
              </div>
              <div className="border-l-2 border-warm-200 pl-4">
                <p className="text-xs font-semibold text-warm-400 uppercase tracking-widest mb-1">Timeline</p>
                <p className="font-display text-4xl font-semibold text-warm-900 leading-none">18</p>
                <p className="text-xs text-warm-400 leading-snug mt-1">months · delivered 3 months ahead of schedule</p>
              </div>
              <div className="border-l-2 border-warm-200 pl-4">
                <p className="text-xs font-bold text-[#FF3200] uppercase tracking-widest mb-2">Outcome</p>
                <p className="text-xs text-warm-900 font-medium leading-relaxed">The stakeholders who resisted most became the loudest internal advocates. Not because we sold them — because the design reflected their input.</p>
              </div>
            </aside>
          </div>
        </section>

        {/* ── 05 — Technical Constraints as Design Inputs ──────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p className="label mb-10">05 — Technical Constraints as Design Inputs</p>
          <p className="text-warm-900 font-medium leading-relaxed mb-8">
            The technical environment wasn&apos;t a background condition — it was an
            active design input. Understanding the constraints precisely is what allowed
            us to design solutions that could actually be built.
          </p>

          <div className="space-y-4">
            {technicalConstraints.map((item) => (
              <div key={item.title} className="pl-5 border-l-2 border-warm-200 py-1">
                <p className="text-sm font-semibold text-warm-800 mb-1">{item.title}</p>
                <p className="text-sm text-warm-900 font-medium leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 06 — The System, Not Just the Screens ────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p className="label mb-10">06 — The System, Not Just the Screens</p>
          <p className="text-warm-900 font-medium leading-relaxed mb-8">
            At Staff/Principal level, the deliverable isn&apos;t a set of screens —
            it&apos;s the system that makes the screens possible and the governance
            model that makes them maintainable.
          </p>

          <div className="grid sm:grid-cols-2 gap-px bg-warm-100 rounded-xl overflow-hidden border border-warm-100">
            {systemItems.map((item) => (
              <div key={item.title} className="p-6 bg-warm-50">
                <p className="text-sm font-semibold text-warm-900 mb-2">{item.title}</p>
                <p className="text-sm text-warm-900 font-medium leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 07 — Business Impact ─────────────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p className="label mb-10">07 — Business Impact</p>

          <div className="space-y-0 mb-10">
            {impactItems.map((item, i) => (
              <div
                key={item.metric}
                className={`flex flex-col sm:flex-row gap-4 py-6 ${
                  i < impactItems.length - 1 ? "border-b border-warm-100" : ""
                }`}
              >
                <p className="sm:w-56 flex-shrink-0 text-sm font-semibold text-warm-900 leading-snug">
                  {item.metric}
                </p>
                <p className="text-sm text-warm-900 font-medium leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            <div className="rounded-xl overflow-hidden border border-warm-100">
              <Image
                src="https://framerusercontent.com/images/SXIbre2GyhwJYLZbjj3rp0d52E.png"
                alt="MyVector platform — final interface design"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-warm-100">
              <Image
                src="https://framerusercontent.com/images/e9I6jC7yIrIahk9irQp1pha6ZwE.png"
                alt="User journey map — training management workflow"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
          <p className="text-xs text-warm-400 mt-3 text-center mb-10">
            Final interface designs on the MyVector platform
          </p>

          <div className="bg-warm-100 rounded-xl p-6 border border-warm-200">
            <p className="label mb-3">Second-Order Outcomes</p>
            <p className="text-sm text-warm-700 leading-relaxed">
              The data model reconciliation pattern created during this project was
              subsequently referenced in a separate platform modernization initiative
              within the same organization — an unplanned reuse that validated the
              architectural decision. The design system documentation standard became
              the template for how the client team structured component libraries in
              subsequent projects, an outcome well outside the original scope.
            </p>
          </div>
        </section>

        {/* ── 08 — What I'd Do Differently ─────────────────────────────── */}
        <section className="py-16">
          <p className="label mb-8">08 — What I&apos;d Do Differently</p>
          <p className="text-warm-900 font-medium leading-relaxed mb-4">
            If I had it to do again, I would have run a structured technical constraint
            workshop with engineering in week one — before any concepting. We lost roughly
            two weeks to designs that couldn&apos;t be built given the legacy data model,
            and a half-day session at the start would have surfaced those constraints earlier.
          </p>
          <p className="text-warm-900 font-medium leading-relaxed">
            I&apos;d also have brought the security review team in during the concepting
            phase rather than the review phase. Their perspective shaped several final
            decisions regardless — the only thing that changed by involving them late
            was the timeline.
          </p>
        </section>

      </div>
    </>
  );
}
