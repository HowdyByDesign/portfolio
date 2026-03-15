import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capital Group Client Service Center",
  description:
    "Replacing a print-fill-scan-email retirement plan process with a digital guided platform for Capital Group's small business clients.",
};

// ── Data ─────────────────────────────────────────────────────────────────────

const metaBar = [
  { label: "Role",        value: `UX Strategist · Workshop Facilitator` },
  { label: "Deliverables", value: `Design sprints, user journeys, wireframes, prototypes, user testing` },
  { label: "Domain",      value: `Retirement planning · Financial services` },
];

const researchFindings = [
  {
    title: `No clarity on which form to use`,
    body:  `Users couldn't determine which form applied to their situation or where to find it. The form catalog was large, the language was technical, and there was no guidance system — just a list.`,
  },
  {
    title: `No in-form guidance`,
    body:  `Once users found the right form, there was no contextual help for filling it out. Business owners managing retirement plans are not pension administrators — the forms assumed expertise they didn't have.`,
  },
  {
    title: `Print → fill → scan → email`,
    body:  `The entire submission process was analog. Users printed forms, filled them by hand, scanned them, and emailed them to associates. No confirmation, no tracking, no audit trail on the user's side.`,
  },
  {
    title: `Manual re-entry on the associate side`,
    body:  `Associates receiving the scanned forms manually re-keyed the data into a legacy system. This introduced a second layer of human error downstream from the first, with no mechanism to catch discrepancies.`,
  },
  {
    title: `No confirmation of success`,
    body:  `After submitting, users had no way to know whether their change had been received, processed, or applied. The process ended with an email into a void.`,
  },
];

const designDecisions = [
  {
    title: `Homepage as navigation, not a form portal`,
    body:  `The entry point uses a CTA alongside categorized navigation cards — not a flat form list. Illustrations replace business jargon as wayfinding signals. The goal was to give users enough orientation to self-direct without reading dense copy.`,
  },
  {
    title: `A guided form flexible enough for 40+ form types`,
    body:  `All 40+ form types were mapped to a single guided experience architecture. Simplified, contextual copy replaced regulatory language. A progress tracker shows users exactly how long the form is. The continue button sets expectations for what comes next — eliminating the uncertainty that was causing abandonment.`,
  },
  {
    title: `Search and categorization for discoverability`,
    body:  `Forms were categorized by business need (not regulatory type) and made searchable. The redesign of the information architecture was as impactful as the UI — users who couldn't find the right form never reached the design.`,
  },
  {
    title: `Digital submission with confirmation`,
    body:  `The print/fill/scan/email process was replaced entirely. Users submit digitally and receive explicit confirmation of a successful change. Associates receive structured digital data, eliminating manual re-entry. The feedback loop that was missing from the original process was built in as a design requirement.`,
  },
];

const outcomes = [
  {
    metric: "Analog process eliminated",
    detail:
      "Print, fill, scan, and email replaced with a digital submission flow. The outcome was incredibly well received by both end users and the internal associates who had been re-entering data manually.",
  },
  {
    metric: "One form architecture for 40+ types",
    detail:
      "A single guided experience structure handles the full range of retirement plan forms. This reduced development complexity and gave users a consistent, learnable pattern regardless of which form they needed.",
  },
  {
    metric: "Simplified language throughout",
    detail:
      "Illustrations and plain-language copy replaced business and regulatory terminology. The language simplification addressed the clarity gap that user research identified as the primary source of friction.",
  },
  {
    metric: "Discoverability solved at the IA level",
    detail:
      "Categorization and search reduced the time-to-form for users who previously couldn't identify which form applied to their situation — a problem that no amount of UI polish could fix without addressing the underlying information architecture.",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function CapitalGroupCaseStudy() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="pt-12 pb-8">
          <Link
            href="/"
            className="text-sm text-warm-400 hover:text-warm-900 transition-colors"
          >
            ← Work
          </Link>
        </div>

        <section className="pb-16 border-b border-warm-100">
          <p className="label mb-5">Capital Group · Financial Services · Platform Design</p>
          <h1
            className="font-display font-semibold text-warm-900 leading-tight mb-8"
            style={{ fontSize: "clamp(2.25rem, 4vw + 0.75rem, 3.75rem)", letterSpacing: "-0.035em" }}
          >
            Replacing an Analog Retirement Plan Process with a Digital Platform
          </h1>

          <div className="rounded-xl overflow-hidden border border-warm-200">
            <Image
              src="https://framerusercontent.com/images/nndmupd15IlC7Eaf3bsszdjes.png"
              alt="Capital Group Client Service Center — homepage design with navigation cards"
              width={1400}
              height={788}
              className="w-full h-auto"
            />
          </div>
        </section>
      </div>

      {/* ── Sticky Meta Bar ────────────────────────────────────────────────── */}
      <div className="sticky top-16 z-10 border-b border-warm-200" style={{ backdropFilter: "blur(12px)", backgroundColor: "oklch(from #faf8f7 l c h / 0.95)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-3 divide-x divide-warm-200">
            {metaBar.map((item) => (
              <div key={item.label} className="py-4 first:pl-0 px-5">
                <p className="label mb-0.5">{item.label}</p>
                <p className="text-xs text-warm-700 leading-snug">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Body Content ───────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6">

        {/* ── The Hook ────────────────────────────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p
            className="font-display font-semibold text-warm-900 leading-snug max-w-[42ch]"
            style={{ fontSize: "clamp(1.25rem, 1.5vw + 0.5rem, 1.875rem)", letterSpacing: "-0.02em" }}
          >
            Business owners managing retirement plans for their employees
            shouldn&apos;t need to be pension administrators. The existing process
            assumed they were.
          </p>
          <p className="mt-6 text-warm-900 font-medium leading-relaxed">
            Capital Group&apos;s Client Service Center handled retirement plan
            management for small businesses — a complex, high-stakes domain where
            users were filling out forms they didn&apos;t understand, submitting
            them through an analog process that had no feedback loop, and getting
            no confirmation that anything had worked. I led the UX redesign from
            user research through delivery.
          </p>
        </section>

        {/* ── Section 01 — Context & Research ──────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p className="label mb-10">01 — Context &amp; User Research</p>

          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-sm font-semibold text-warm-700 mb-2">The organization</h3>
              <p className="text-warm-900 font-medium leading-relaxed">
                Capital Group is one of the largest investment management firms in
                the world. The Client Service Center is the platform through which
                employers — typically small business owners — create and maintain
                retirement plans for their employees. The users are not financial
                professionals. The product had been built as if they were.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-warm-700 mb-2">My role</h3>
              <p className="text-warm-900 font-medium leading-relaxed">
                Orchestrated the end-to-end design process — from initial user
                interviews through design sprints, wireframes, prototyping, and
                usability testing. Facilitated workshops with the product team
                and internal stakeholders to align on information architecture
                and form system design.
              </p>
            </div>
          </div>

          <h3 className="text-sm font-semibold text-warm-700 mb-5">What user interviews revealed</h3>
          <div className="space-y-3">
            {researchFindings.map((f) => (
              <div key={f.title} className="p-5 rounded-lg border border-warm-200 bg-warm-50">
                <p className="text-sm font-semibold text-warm-800 mb-1">{f.title}</p>
                <p className="text-sm text-warm-900 font-medium leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 02 — Process ──────────────────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p className="label mb-10">02 — Process</p>

          <div className="space-y-8 mb-10">
            <div>
              <h3 className="text-sm font-semibold text-warm-700 mb-3">
                Design sprints to move from research to concept
              </h3>
              <p className="text-warm-900 font-medium leading-relaxed">
                After user interviews established the five core friction points, I
                ran a series of design sprints to ideate, sketch, and test
                solutions before committing to full wireframes. The sprint format
                was intentional — the problem space was large enough that
                premature wireframing would have locked in the wrong solutions.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-warm-700 mb-3">
                The IA problem came first
              </h3>
              <p className="text-warm-900 font-medium leading-relaxed">
                Form discoverability was an information architecture problem, not
                a UI problem. Before designing any screens, we mapped the 40+
                form types against user needs (not regulatory categories) and
                built a classification system that a small business owner could
                navigate. This work preceded all wireframes.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-warm-200">
              <Image
                src="https://framerusercontent.com/images/OHZb0WzL9TiuB5GGCcw1nwHvSOg.png"
                alt="Design sprint sketches — early ideation for the Client Service Center"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-warm-200">
              <Image
                src="https://framerusercontent.com/images/V0sX2L5QzifrDpva3GtCzXhBgU.jpg"
                alt="Workshop sketching — form system and navigation ideation"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
          <p className="text-xs text-warm-400 mt-3 text-center">
            Design sprint sketches from early ideation sessions
          </p>
        </section>

        {/* ── Section 03 — Design Decisions ────────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p className="label mb-10">03 — Key Design Decisions</p>

          <div className="space-y-3 mb-10">
            {designDecisions.map((item) => (
              <div key={item.title} className="p-5 rounded-lg border border-warm-200 bg-warm-50">
                <p className="text-sm font-semibold text-warm-800 mb-1">{item.title}</p>
                <p className="text-sm text-warm-900 font-medium leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl overflow-hidden border border-warm-200 mb-3">
            <Image
              src="https://framerusercontent.com/images/shC2uvmSCzP96lBDfnl80tO7A.png"
              alt="Wireframe — guided form experience with progress tracker"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>
          <p className="text-xs text-warm-400 text-center mb-8">
            Wireframe of the guided form experience
          </p>

          <div className="rounded-xl overflow-hidden border border-warm-200 mb-3">
            <Image
              src="https://framerusercontent.com/images/E0YJ3sM3t7fDdt1J3rWkDGA3k.png"
              alt="Final form design — simplified copy, progress tracker, contextual guidance"
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>
          <p className="text-xs text-warm-400 text-center">
            Final form design — simplified copy with progress tracking
          </p>
        </section>

        {/* ── Section 04 — The Hard Part ───────────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p className="label mb-4">04 — The Hard Part</p>
          <p className="text-warm-900 font-medium leading-relaxed mb-10">
            The hardest part of this project wasn&apos;t the UI — it was
            negotiating what &quot;simplified&quot; actually meant in a regulated
            financial context.
          </p>

          <div className="space-y-4">
            <div className="rounded-lg bg-warm-950 p-6">
              <p className="text-xs font-semibold text-warm-600 uppercase tracking-widest mb-4">
                The language problem
              </p>
              <p className="text-warm-300 leading-relaxed">
                Simplifying copy in a regulated financial product isn&apos;t just
                a writing exercise — every change to form language requires legal
                and compliance review. What reads as plain English to a small
                business owner may omit a required disclosure. The design process
                had to account for legal review cycles that weren&apos;t in the
                original brief, and the &quot;simplified copy&quot; that shipped
                was the product of multiple rounds of negotiation between plain
                language and regulatory requirement.
              </p>
            </div>

            <div className="rounded-lg bg-warm-950 p-6">
              <p className="text-xs font-semibold text-warm-600 uppercase tracking-widest mb-4">
                40+ forms, one pattern
              </p>
              <p className="text-warm-300 leading-relaxed">
                The decision to design a single guided form architecture for all
                40+ form types was right — but proving it required mapping every
                form against the proposed pattern before a single wireframe was
                built. There were edge cases that required the pattern to flex in
                ways the initial architecture didn&apos;t accommodate. Finding
                those edge cases early, before they became late-stage
                engineering problems, was the value of the sprint format.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 05 — Outcomes ─────────────────────────────────────────── */}
        <section className="py-16">
          <p className="label mb-10">05 — Outcomes</p>

          <div className="space-y-0">
            {outcomes.map((item, i) => (
              <div
                key={item.metric}
                className={`flex flex-col sm:flex-row gap-4 py-6 ${
                  i < outcomes.length - 1 ? "border-b border-warm-100" : ""
                }`}
              >
                <p className="sm:w-56 flex-shrink-0 text-sm font-semibold text-warm-900 leading-snug">
                  {item.metric}
                </p>
                <p className="text-sm text-warm-900 font-medium leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
