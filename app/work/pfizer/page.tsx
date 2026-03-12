import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pfizer Gen AI Marketing Platform",
  description:
    "Designing for trust in a generative AI marketing system inside a pharmaceutical regulatory environment — where the hard problem isn't the UI, it's adoption.",
};

// ── Data ─────────────────────────────────────────────────────────────────────

const metaBar = [
  { label: "Role",        value: `Systems Architect · Lead UX Designer` },
  { label: "Deliverables", value: `Stakeholder alignment, design sprints, wireframes, prototypes, user testing` },
  { label: "Status",      value: `MVP delivered · Beta testing` },
];

const constraints = [
  {
    title: `Regulatory environment that doesn't move as fast as the technology`,
    body:  `Every piece of pharmaceutical marketing copy requires review against brand guidelines, regulatory standards, and medical-legal approval processes. A Gen AI tool that generates content faster than it can be reviewed creates compliance risk, not efficiency. The design had to accommodate the review workflow as a first-class feature — not an afterthought.`,
  },
  {
    title: `Marketers who didn't trust the output`,
    body:  `Pfizer's marketing teams are experts at copy. They arrive at pitches with 3–5 carefully developed ideas. Asking them to use AI-generated content meant asking them to stake their professional judgment on output they couldn't fully verify. The adoption problem wasn't technological — it was about trust in a system whose accuracy they had no way to independently evaluate.`,
  },
  {
    title: `Brand-specific language across multiple pharmaceutical brands`,
    body:  `Pfizer operates dozens of pharmaceutical brands, each with its own approved language, tone, and regulatory constraints. The tool couldn't be a generic text generator — it had to produce output that was brand-appropriate and defensible inside Pfizer's review process.`,
  },
  {
    title: `Scalable MVP under active feature expansion`,
    body:  `The initial brief covered copy generation, translation, and image generation. The roadmap included significantly more. The architecture of the UI — layout, navigation, component structure — had to accommodate features that hadn't been scoped yet without requiring a redesign each time one shipped.`,
  },
];

const mvpFeatures = [
  {
    feature: `Copy generation`,
    detail:  `Brand-specific marketing copy for web banners, emails, and advertisements — generated from parameter inputs and evaluated against brand guidelines.`,
  },
  {
    feature: `Translation`,
    detail:  `Workflow for translating generated content across markets, with error-handling for post-generation translation failures and user feedback mechanisms.`,
  },
  {
    feature: `Image generation & regeneration`,
    detail:  `Image selection and generation workflow, designed as wireframes to accommodate the interaction model for visual content within the same generation context.`,
  },
];

const designDecisions = [
  {
    title: `Dual-panel layout built for future features`,
    body:  `The core screen uses a right panel for Gen AI inputs, filters, and generation controls — and a left side panel for user context, settings, and menu items that don't exist yet. The left rail was designed explicitly as a future feature slot, so every new capability has a home without restructuring the primary workspace.`,
  },
  {
    title: `Parameters visible at output time`,
    body:  `Generated content is shown alongside a text description of the parameters that produced it — brand, tone, format, constraints. This was a trust decision: marketers needed to see not just what was generated, but why, so they could evaluate output against the inputs rather than judging content in a vacuum.`,
  },
  {
    title: `Feedback capture as a first-class feature`,
    body:  `Detailed feedback mechanisms for generated content and translation were built in from the start — not as a product analytics play, but as a mechanism for improving the language model with real pharmaceutical marketing data. The loop between user judgment and model improvement was a design requirement, not an engineering afterthought.`,
  },
  {
    title: `Design–engineering bridge on generation constraints`,
    body:  `Leveraged direct collaboration with developers to translate engineering constraints into interaction design decisions: generation attempt limits, duplicate content handling, and content saving behavior. These weren't edge cases — they were load-bearing behaviors in a regulated environment where every generated output is a potential compliance artifact.`,
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function PfizerCaseStudy() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="pt-12 pb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-warm-400 hover:text-warm-900 transition-colors"
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <span aria-hidden>←</span>
            Work
          </Link>
        </div>

        <section className="pb-16 border-b border-warm-100">
          <p className="label mb-5">Pfizer · Generative AI · Enterprise SaaS</p>
          <h1
            className="font-display font-semibold text-warm-900 leading-tight mb-8"
            style={{ fontSize: "clamp(2.25rem, 4vw + 0.75rem, 3.75rem)", letterSpacing: "-0.035em" }}
          >
            Designing for Trust in a Gen AI Marketing System
          </h1>

          {/* ── TLDR ─────────────────────────────────────────────────────── */}
          <div className="my-8 border-l-2 border-warm-200 pl-5 space-y-3">
            {[
              {
                label: "Problem",
                text: `Pfizer's marketing teams had a Gen AI copy tool — but low adoption, because marketers couldn't audit or defend generated content in medical-legal review.`,
              },
              {
                label: "Action",
                text: `Reframed adoption resistance as a transparency design problem. Implemented parameter visibility, generation provenance, and structured feedback capture — aligning cross-functional teams on the Idea Accelerator positioning before a line of production code shipped.`,
              },
              {
                label: "Outcome",
                text: `MVP delivered for beta onboarding. The "Idea Accelerator" reframe unlocked adoption — repositioning AI as a volume generator for human evaluation, not a replacement.`,
              },
            ].map(({ label, text }) => (
              <div key={label} className="flex gap-3 items-baseline">
                <span className="font-signet font-semibold text-xs text-warm-400 uppercase tracking-widest w-16 flex-shrink-0">
                  {label}
                </span>
                <p className="text-sm text-warm-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* Primary metric — massive editorial weight */}
          <div className="mb-10">
            <p
              className="font-display font-semibold text-accent leading-none"
              style={{ fontSize: "clamp(4rem, 10vw, 7rem)", letterSpacing: "-0.05em" }}
            >
              Trust
            </p>
            <p
              className="font-display font-semibold text-warm-400 leading-tight mt-2"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.025em" }}
            >
              is a design problem.<br className="hidden sm:block" /> Not a training problem.
            </p>
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
      <div className="max-w-4xl mx-auto px-6">

        {/* ── The Hook ────────────────────────────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p
            className="font-display font-semibold text-warm-900 leading-snug max-w-[42ch]"
            style={{ fontSize: "clamp(1.25rem, 1.5vw + 0.5rem, 1.875rem)", letterSpacing: "-0.02em" }}
          >
            The design challenge wasn&apos;t &quot;how do you make this look good.&quot;
            It was &quot;how do you design for trust in a system whose outputs
            marketers can&apos;t fully verify, inside a regulatory environment
            that doesn&apos;t move as fast as the technology.&quot;
          </p>
          <p className="mt-6 text-warm-500 leading-relaxed">
            I orchestrated the UX architecture for Pfizer&apos;s generative AI
            marketing platform — leveraging cross-functional alignment across
            marketing, regulatory, and engineering stakeholders to implement a
            shared definition of &quot;trustworthy AI output&quot; inside a
            pharmaceutical review workflow. The real project was institutional:
            reframing AI adoption resistance as a transparency design problem,
            not a training problem, and standardizing that framing across teams
            before a line of production code shipped.
          </p>

          <div className="mt-10 rounded-xl overflow-hidden border border-warm-200">
            <Image
              src="https://framerusercontent.com/images/KEORqrv8KdWrgwnqQBpYoprb8Lg.png"
              alt="Pfizer Gen AI marketing platform — key generation screen"
              width={1400}
              height={788}
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* ── Section 01 — Context & Constraints ──────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p className="label mb-10">01 — Context &amp; Constraints</p>

          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-sm font-semibold text-warm-700 mb-2">The organization</h3>
              <p className="text-warm-500 leading-relaxed">
                Pfizer&apos;s marketing teams develop brand-specific content for
                pharmaceutical products across multiple channels and global
                markets. Content must pass through medical-legal review and comply
                with pharmaceutical advertising regulations. The business case for
                Gen AI was efficiency — the design problem was making that
                efficiency trustworthy.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-warm-700 mb-2">My role</h3>
              <p className="text-warm-500 leading-relaxed">
                Systems architect and lead UX designer responsible for orchestrating
                cross-functional alignment and implementing the end-to-end workflow
                architecture. I facilitated design sprints, navigated stakeholder
                relationships across multiple Pfizer teams, and served as the primary
                bridge between design intent and developer constraints — leveraging
                mid-engagement engineering constraints as design inputs rather than
                treating them as blockers.
              </p>
            </div>
          </div>

          <h3 className="text-sm font-semibold text-warm-700 mb-5">The real constraints</h3>
          <div className="space-y-3">
            {constraints.map((c, i) => (
              <div
                key={c.title}
                className="p-5 rounded-lg border border-warm-200 bg-warm-50"
              >
                <p className="text-sm font-semibold text-warm-800 mb-1">{c.title}</p>
                <p className="text-sm text-warm-500 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 02 — The Strategic Frame ────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-14 lg:items-start">
            {/* ── Main narrative ── */}
            <div>
              <p className="label mb-10">02 — The Strategic Frame</p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-warm-700 mb-3">
                    Reframing adoption resistance as a design problem
                  </h3>
                  <p className="text-warm-500 leading-relaxed">
                    The initial framing of low AI adoption was a change management
                    problem — resistant users who needed training and persuasion. The
                    actual problem was a design failure: the system gave users no
                    basis for trusting its output. A marketer who can&apos;t explain
                    why a piece of copy was generated the way it was can&apos;t
                    defend it in a review meeting. That&apos;s not a training gap.
                    That&apos;s a transparency gap in the interface.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-warm-700 mb-3">
                    Positioning Gen AI as an Idea Accelerator, not a replacement
                  </h3>
                  <p className="text-warm-500 leading-relaxed">
                    Pharmaceutical marketers typically develop 3–5 copy concepts to
                    pitch. The reframe that unlocked adoption: Gen AI as a tool that
                    generates the same volume of initial concepts in minutes, leaving
                    human judgment — which is irreplaceable in regulated
                    communications — for evaluation and refinement rather than first
                    draft generation. The tool doesn&apos;t replace the marketer.
                    It front-loads the work the marketer was least good at.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Margin aside — the design principle ── */}
            <aside className="mt-10 lg:mt-[3.75rem] lg:sticky lg:top-24 space-y-5">
              <div className="border-l-2 border-accent/40 pl-4">
                <p className="text-xs font-semibold text-warm-400 uppercase tracking-widest mb-2">The Design Principle</p>
                <p className="text-sm text-warm-600 leading-relaxed">
                  Every output shows the parameters that produced it. Every action
                  is reversible or auditable. The system never presents generated
                  content as ground truth — only as a starting point.
                </p>
              </div>
              <div className="border-l-2 border-warm-200 pl-4">
                <p className="text-xs font-semibold text-warm-400 uppercase tracking-widest mb-1">Initial concepts</p>
                <p className="font-display text-3xl font-semibold text-warm-900 leading-none">3–5</p>
                <p className="text-xs text-warm-400 leading-snug mt-1">per pitch, developed manually → now generated in minutes, evaluated by human judgment</p>
              </div>
            </aside>
          </div>
        </section>

        {/* ── Section 03 — Prompt Architecture ────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p className="label mb-10">03 — Prompt Architecture</p>

          <p className="text-warm-500 leading-relaxed mb-10">
            The generation workflow was designed as a transparent pipeline.
            Marketers needed to see the parameters they set, trace them through
            to the output, and understand why the system produced what it did —
            before they could defend it in a review meeting.
          </p>

          {/* 12-column grid visualization — 8pt spacing throughout */}
          <div className="rounded-xl border border-warm-200 bg-warm-50 p-6 mb-8">
            <p className="label mb-6">Generation Pipeline</p>

            {/* Grid: 12 columns */}
            <div className="grid grid-cols-12 gap-3 items-stretch">

              {/* Input Parameters — cols 1–5 */}
              <div className="col-span-5 rounded-lg border border-warm-200 bg-white p-4 space-y-2">
                <p className="text-xs font-semibold text-warm-400 uppercase tracking-wider mb-3">Input Parameters</p>
                {[
                  { param: "Brand",       value: "Lipitor · Oncology"   },
                  { param: "Tone",        value: "Clinical · Reassuring" },
                  { param: "Format",      value: "Web banner · 300×250"  },
                  { param: "Constraints", value: "FDA compliant · ISI included" },
                ].map((row) => (
                  <div key={row.param} className="flex items-baseline gap-2">
                    <span className="text-xs text-warm-400 w-20 flex-shrink-0">{row.param}</span>
                    <span className="text-xs font-medium text-warm-800 leading-snug">{row.value}</span>
                  </div>
                ))}
              </div>

              {/* Arrow connector */}
              <div className="col-span-1 flex items-center justify-center">
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden>
                  <path d="M1 7h16M13 1l6 6-6 6" stroke="#b0a79d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Generation Engine — cols 6–7 (2 cols) */}
              <div className="col-span-2 rounded-lg border border-accent/30 bg-accent/5 p-4 flex flex-col items-center justify-center text-center" style={{ backgroundColor: "oklch(from #FF3200 l c h / 0.05)" }}>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Engine</p>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden className="mb-2">
                  <circle cx="14" cy="14" r="13" stroke="#FF3200" strokeWidth="1.5" strokeOpacity="0.4"/>
                  <path d="M9 14l3.5 3.5L19 9" stroke="#FF3200" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-xs text-warm-500 leading-tight">Brand model + regulatory filters</p>
              </div>

              {/* Arrow connector */}
              <div className="col-span-1 flex items-center justify-center">
                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden>
                  <path d="M1 7h16M13 1l6 6-6 6" stroke="#b0a79d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Output + Provenance — cols 8–12 (4 cols) */}
              <div className="col-span-3 rounded-lg border border-warm-200 bg-white p-4 space-y-3">
                <p className="text-xs font-semibold text-warm-400 uppercase tracking-wider mb-3">Output + Provenance</p>
                <div className="rounded border border-warm-200 bg-warm-50 p-2">
                  <p className="text-xs text-warm-700 leading-snug italic">
                    &ldquo;Talk to your doctor about Lipitor…&rdquo;
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-warm-400">Generated from:</p>
                  <div className="flex flex-wrap gap-1">
                    {["Lipitor", "Clinical", "300×250", "FDA"].map((tag) => (
                      <span key={tag} className="text-xs px-1.5 py-0.5 rounded bg-warm-100 text-warm-600">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Feedback loop indicator */}
            <div className="mt-4 pt-4 border-t border-warm-200 flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="flex-shrink-0">
                <path d="M13 7A6 6 0 1 1 7 1M13 1v6h-6" stroke="#b0a79d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-xs text-warm-400">Feedback on output retrains the brand model — closing the trust loop</p>
            </div>
          </div>

          {/* Demo button — outcome-named */}
          <div>
            <button
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white text-sm font-medium transition-colors"
              style={{ backgroundColor: "#FF3200" }}
            >
              Generate Campaign Brief
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <p className="text-xs text-warm-400 mt-2">Parameters are always visible alongside the generated output</p>
          </div>
        </section>

        {/* ── Section 04 — Process ─────────────────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p className="label mb-10">04 — Process</p>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-warm-700 mb-3">Starting with the user journey</h3>
              <p className="text-warm-500 leading-relaxed">
                Before wireframing, I mapped the user journey against the business
                requirements and MVP features — not as a deliverable but as a
                guide that was updated throughout the engagement as features were
                added and scoped. This prevented the workflow design from locking
                in too early around a feature set that was actively changing.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-warm-700 mb-3">Sketching → wireframes → prototype</h3>
              <p className="text-warm-500 leading-relaxed">
                Initial layouts for the copy generation workflow were sketched
                first, then translated to black-and-white wireframes for
                structured feedback before any visual design decisions were made.
                This kept early feedback on the workflow and information
                architecture rather than aesthetics. The wireframes were then
                iterated through user testing cycles with Pfizer marketing teams.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-warm-700 mb-3">Stakeholder presentation cadence</h3>
              <p className="text-warm-500 leading-relaxed">
                Design ideas, workflow diagrams, and interactive prototypes were
                presented to stakeholders across multiple Pfizer teams at regular
                intervals. The cadence was intentional — showing work early and
                often with diverse stakeholder groups in a regulated environment
                surfaces compliance and brand concerns before they become
                late-stage blockers.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-xl overflow-hidden border border-warm-200 mb-3">
            <Image
              src="https://framerusercontent.com/images/xjXPRpTJbJrdPvvx0xy2wtZZM8.png"
              alt="User journey map — MVP features mapped against business requirements"
              width={1400}
              height={788}
              className="w-full h-auto"
            />
          </div>
          <p className="text-xs text-warm-400 text-center mb-8">User journey map used as a guide throughout the engagement</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-warm-200">
              <Image
                src="https://framerusercontent.com/images/SrpydjsUa4EngIvuMBwsH8cMNbc.jpg"
                alt="Early sketches — copy generation workflow layout exploration"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-warm-200">
              <Image
                src="https://framerusercontent.com/images/FMcDvUbqH4kTu0ZGbGRMeCzLACI.png"
                alt="Black and white wireframe — copy generation interface before visual design"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
          <p className="text-xs text-warm-400 mt-3 text-center">Early sketches and wireframes before visual design decisions</p>
        </section>

        {/* ── Section 05 — The Hard Part ───────────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-14 lg:items-start">
          <div>
          <p className="label mb-4">05 — The Hard Part</p>
          <p className="text-warm-500 leading-relaxed mb-10">
            The problems that weren&apos;t in the brief — and how they changed the design.
          </p>

          <div className="space-y-4">
            {/* The trust problem */}
            <div className="rounded-lg bg-warm-950 p-6">
              <p className="text-xs font-semibold text-warm-500 uppercase tracking-widest mb-4">
                The trust problem
              </p>
              <p className="text-warm-300 leading-relaxed">
                Early user testing revealed that marketers weren&apos;t rejecting
                the generated copy because it was bad — they were rejecting the
                process of using it because they couldn&apos;t explain to their
                reviewers why it said what it said. The output quality wasn&apos;t
                the barrier. Auditability was. The entire transparency layer of
                the interface — parameter display, generation history, feedback
                capture — emerged from this finding, not the original brief.
              </p>
            </div>

            {/* The Idea Accelerator reframe — change management victory */}
            <div className="rounded-lg bg-warm-950 p-6">
              <p className="text-xs font-semibold text-warm-500 uppercase tracking-widest mb-4">
                The change management victory — reframing AI as an Idea Accelerator
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="rounded-lg bg-warm-900 p-4 border border-warm-800">
                  <p className="text-xs font-medium text-warm-500 mb-2">Before the reframe</p>
                  <p className="text-sm text-warm-400 leading-relaxed">
                    &ldquo;AI will write your copy. Your job is to check it.&rdquo;<br/>
                    <span className="text-warm-600 text-xs mt-1 block">Result: resistance, low adoption, professional threat framing</span>
                  </p>
                </div>
                <div className="rounded-lg bg-warm-900 p-4 border border-accent/20" style={{ borderColor: "oklch(from #FF3200 l c h / 0.2)" }}>
                  <p className="text-xs font-medium text-accent mb-2">After the reframe</p>
                  <p className="text-sm text-warm-300 leading-relaxed">
                    &ldquo;AI drafts the first five ideas. You decide which one is right.&rdquo;<br/>
                    <span className="text-warm-500 text-xs mt-1 block">Result: adoption unlocked — human judgment repositioned as the premium skill</span>
                  </p>
                </div>
              </div>
              <p className="text-warm-400 text-sm leading-relaxed">
                The language &ldquo;Idea Accelerator&rdquo; came out of a stakeholder
                workshop. It wasn&apos;t a marketing line — it was the framing that
                finally made the tool feel safe to use. Marketers had been trained
                that their value was their ideas. Positioning Gen AI as a tool that
                expands ideation volume rather than replacing ideation entirely was
                the design and change management intervention that moved adoption.
              </p>
            </div>

            {/* Engineering constraints */}
            <div className="rounded-lg bg-warm-950 p-6">
              <p className="text-xs font-semibold text-warm-500 uppercase tracking-widest mb-4">
                Designing around constraints I didn&apos;t control
              </p>
              <p className="text-warm-300 leading-relaxed">
                Generation attempt limits, duplicate content handling, and content
                saving behavior were all engineering constraints that arrived
                mid-design. Each one required a design response — how do you show
                a user they&apos;ve reached their generation limit in a way that
                feels intentional rather than broken? How do you handle similar
                outputs without making the system feel repetitive? These
                constraint-to-design translations were some of the most
                precise problems in the project and weren&apos;t in the
                original scope.
              </p>
            </div>
          </div>
          </div>{/* close main content col */}

          <aside className="mt-10 lg:mt-0 lg:sticky lg:top-24 space-y-6">
            <div className="border-l-2 pl-4" style={{ borderColor: "oklch(from #FF3200 l c h / 0.4)" }}>
              <p className="text-xs font-semibold text-warm-400 uppercase tracking-widest mb-2">The reframe that worked</p>
              <p className="text-sm text-warm-600 leading-relaxed">
                &ldquo;Idea Accelerator&rdquo; came from a stakeholder workshop —
                not a marketing line. It was the framing that finally made the tool
                feel safe to use.
              </p>
            </div>
            <div className="border-l-2 border-warm-200 pl-4">
              <p className="text-xs font-semibold text-warm-400 uppercase tracking-widest mb-1">Root barrier</p>
              <p className="font-display text-3xl font-semibold text-warm-900 leading-none">Trust</p>
              <p className="text-xs text-warm-400 leading-snug mt-1">
                not copy quality — auditability was the adoption blocker
              </p>
            </div>
            <div className="border-l-2 border-warm-200 pl-4">
              <p className="text-xs font-semibold text-warm-400 uppercase tracking-widest mb-1">Mid-design pivots</p>
              <p className="font-display text-3xl font-semibold text-warm-900 leading-none">3</p>
              <p className="text-xs text-warm-400 leading-snug mt-1">
                engineering constraints that required full design responses after brief was set
              </p>
            </div>
          </aside>
          </div>{/* close grid */}
        </section>

        {/* ── Section 06 — Key Design Decisions ───────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p className="label mb-10">06 — Key Design Decisions</p>

          <div className="space-y-3">
            {designDecisions.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-lg border border-warm-200 bg-warm-50"
              >
                <p className="text-sm font-semibold text-warm-800 mb-1">{item.title}</p>
                <p className="text-sm text-warm-500 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-warm-200">
              <Image
                src="https://framerusercontent.com/images/zzPK2r0mCYrSyrwxDcJfzkxVxkM.png"
                alt="Workflow for key features — copy generation interface"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <p className="text-xs text-warm-400 text-center py-3 px-4">Copy generation workflow</p>
            </div>
            <div className="rounded-xl overflow-hidden border border-warm-200">
              <Image
                src="https://framerusercontent.com/images/9ffSpRUmRKUBjuXMcTblMAgQeE.png"
                alt="Workflow for translation — post-generation translation experience"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <p className="text-xs text-warm-400 text-center py-3 px-4">Translation workflow</p>
            </div>
          </div>
        </section>

        {/* ── Section 07 — MVP Feature Set ─────────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p className="label mb-10">07 — MVP Feature Set</p>
          <p className="text-warm-500 leading-relaxed mb-8">
            The MVP was scoped to establish the core generation workflow and
            layout system before expanding. Each feature was designed not just
            for its own workflow but for how it would coexist with future
            features in the same interface.
          </p>

          <div className="space-y-3">
            {mvpFeatures.map((item) => (
              <div
                key={item.feature}
                className="p-5 rounded-lg border border-warm-200 bg-warm-50"
              >
                <p className="text-sm font-semibold text-warm-800 mb-1">{item.feature}</p>
                <p className="text-sm text-warm-500 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section 08 — Outcomes ────────────────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p className="label mb-10">08 — Outcomes</p>

          <div className="space-y-4">
            <div className="p-5 rounded-lg border border-warm-200 bg-warm-50">
              <p className="text-sm font-semibold text-warm-800 mb-1">MVP delivered for beta onboarding</p>
              <p className="text-sm text-warm-500 leading-relaxed">
                The complete MVP workflow — copy generation, translation, image
                selection — was delivered and prepared for the first set of beta
                testers. The flexible layout system means new features can ship
                into the existing interface without redesign.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-warm-200 bg-warm-50">
              <p className="text-sm font-semibold text-warm-800 mb-1">Institutional alignment around a new way of working</p>
              <p className="text-sm text-warm-500 leading-relaxed">
                The Idea Accelerator reframe achieved institutional alignment across
                marketing, regulatory, and leadership stakeholders — making adoption
                a shared goal rather than a top-down mandate. The transparency layer
                — parameter display, generation history, feedback capture — gave
                marketers the auditability they needed to defend generated outputs
                inside Pfizer&apos;s existing review workflow.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-warm-200 bg-warm-50">
              <p className="label mb-2">[Add specific metrics here if available]</p>
              <p className="text-sm text-warm-500 leading-relaxed">
                e.g., number of beta users, time saved per copy iteration,
                adoption rate among target teams, number of brands onboarded,
                stakeholder count, engagement rate — whatever is shareable under NDA terms.
              </p>
            </div>
          </div>
        </section>

        {/* ── Howdy Callout ────────────────────────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <blockquote className="pl-6 border-l-2 border-accent">
            <p
              className="font-signet italic font-bold tracking-tight text-accent leading-snug mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            >
              &ldquo;I&apos;m not using AI to write copy. I&apos;m using it to
              never start from a blank page again.&rdquo;
            </p>
            <p className="text-sm text-warm-400">— Howdy, on the Idea Accelerator framing</p>
          </blockquote>
        </section>

        {/* ── Section 09 — What I'd Do Differently ────────────────────────── */}
        <section className="py-16">
          <p className="label mb-8">09 — What I&apos;d Do Differently</p>
          <p className="text-warm-500 leading-relaxed mb-4">
            I would have pushed for a medical-legal reviewer to be part of the
            design research process earlier — not as a gatekeeper, but as a user.
            The compliance review workflow is downstream of the tool, but its
            requirements shaped every design decision we made. Getting that
            perspective in week two rather than week eight would have changed the
            initial framing significantly.
          </p>
          <p className="text-warm-500 leading-relaxed">
            [Add a second reflection here — something specific to this project
            that you&apos;d change with hindsight.]
          </p>
        </section>

      </div>
    </>
  );
}
