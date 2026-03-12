import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pfizer Gen AI Marketing Platform",
  description:
    "Designing for trust in a generative AI marketing system inside a pharmaceutical regulatory environment — where the hard problem isn't the UI, it's adoption.",
};

// ── Data ─────────────────────────────────────────────────────────────────────

const meta = [
  { label: "Role", value: "Lead UX Designer · Workshop Facilitator" },
  {
    label: "Deliverables",
    value:
      "Design sprints, stakeholder management, wireframes, prototypes, user testing",
  },
  { label: "Status", value: "MVP delivered · Beta testing" },
];

const constraints = [
  {
    title: "Regulatory environment that doesn't move as fast as the technology",
    body: "Every piece of marketing copy at a pharmaceutical company requires review against brand guidelines, regulatory standards, and medical-legal approval processes. A Gen AI tool that generates content faster than it can be reviewed creates compliance risk, not efficiency. The design had to accommodate the review workflow as a first-class feature, not an afterthought.",
  },
  {
    title: "Marketers who didn't trust the output",
    body: "Pfizer's marketing teams are experts at copy. They come to pitches with 3–5 carefully developed ideas. Asking them to use AI-generated content meant asking them to stake their professional judgment on output they couldn't fully verify. The adoption problem wasn't technological — it was about trust in a system whose accuracy they had no way to independently evaluate.",
  },
  {
    title: "Brand-specific language across multiple pharmaceutical brands",
    body: "Pfizer operates dozens of pharmaceutical brands, each with its own approved language, tone, and regulatory constraints. The tool couldn't be a generic text generator — it had to produce output that was brand-appropriate and defensible inside Pfizer's review process.",
  },
  {
    title: "Scalable MVP under active feature expansion",
    body: "The initial brief covered copy generation, translation, and image generation. The roadmap included significantly more. The architecture of the UI — layout, navigation, component structure — had to accommodate features that hadn't been scoped yet without requiring a redesign each time one shipped.",
  },
];

const mvpFeatures = [
  {
    feature: "Copy generation",
    detail:
      "Brand-specific marketing copy for web banners, emails, and advertisements — generated from parameter inputs and evaluated against brand guidelines.",
  },
  {
    feature: "Translation",
    detail:
      "Workflow for translating generated content across markets, with error-handling for post-generation translation failures and user feedback mechanisms.",
  },
  {
    feature: "Image generation & regeneration",
    detail:
      "Image selection and generation workflow, designed as wireframes to accommodate the interaction model for visual content within the same generation context.",
  },
];

const designDecisions = [
  {
    title: "Dual-panel layout built for future features",
    body: "The core screen uses a right panel for Gen AI inputs, filters, and generation controls — and a left side panel for user context, settings, and menu items that don't exist yet. The left rail was designed explicitly as a future feature slot, so every new capability has a home without restructuring the primary workspace.",
  },
  {
    title: "Parameters visible at output time",
    body: "Generated content is shown alongside a text description of the parameters that produced it — brand, tone, format, constraints. This was a trust decision: marketers needed to see not just what was generated, but why, so they could evaluate output against the inputs rather than judging content in a vacuum.",
  },
  {
    title: "Feedback capture as a first-class feature",
    body: "Detailed feedback mechanisms for generated content and translation were built in from the start — not as a product analytics play, but as a mechanism for improving the language model with real pharmaceutical marketing data. The loop between user judgment and model improvement was a design requirement, not an engineering afterthought.",
  },
  {
    title: "Generation constraints with engineering",
    body: "Worked directly with developers on interaction design for constraints: generation attempt limits, handling of similar or duplicate content, and saving generated content for later review. These weren't edge cases — they were load-bearing behaviors in a regulated environment where every generated output is a potential compliance artifact.",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function PfizerCaseStudy() {
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
        <p className="label mb-5">Pfizer · Generative AI · Enterprise SaaS</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 leading-tight mb-10">
          Designing for Trust in a Gen AI Marketing System
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

      {/* ── The Hook ──────────────────────────────────────────────────────── */}
      <section className="py-16 border-b border-zinc-100">
        <p className="text-2xl sm:text-3xl font-semibold text-zinc-950 leading-snug max-w-[42ch]">
          The design challenge wasn&apos;t &quot;how do you make this look
          good.&quot; It was &quot;how do you design for trust in a system
          whose outputs marketers can&apos;t fully verify, inside a regulatory
          environment that doesn&apos;t move as fast as the technology.&quot;
        </p>
        <p className="mt-6 text-zinc-500 leading-relaxed">
          I led the UX process for Pfizer&apos;s generative AI marketing
          platform — a tool for creating brand-specific pharmaceutical marketing
          copy across web banners, emails, and advertisements. The MVP covered
          copy generation, translation, and image generation. The real project
          was reframing AI adoption resistance as a design problem.
        </p>

        <div className="mt-10 rounded-2xl overflow-hidden border border-zinc-100">
          <Image
            src="https://framerusercontent.com/images/KEORqrv8KdWrgwnqQBpYoprb8Lg.png"
            alt="Pfizer Gen AI marketing platform — key generation screen"
            width={1400}
            height={788}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* ── Section 01 — Context & Constraints ───────────────────────────── */}
      <section className="py-16 border-b border-zinc-100">
        <p className="label mb-10">01 — Context & Constraints</p>

        <div className="space-y-8 mb-12">
          <div>
            <h3 className="text-sm font-semibold text-zinc-700 mb-2">
              The organization
            </h3>
            <p className="text-zinc-500 leading-relaxed">
              Pfizer&apos;s marketing teams develop brand-specific content for
              pharmaceutical products across multiple channels and global
              markets. Content must pass through medical-legal review and comply
              with pharmaceutical advertising regulations. The business case for
              Gen AI was efficiency — the design problem was making that
              efficiency trustworthy.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-700 mb-2">
              My role
            </h3>
            <p className="text-zinc-500 leading-relaxed">
              Lead UX designer responsible for the end-to-end interaction model
              and workflow design. I ran design sprints, managed stakeholder
              relationships across multiple Pfizer teams, and owned the
              relationship between design intent and developer constraints
              throughout the engagement.
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
      </section>

      {/* ── Section 02 — The Strategic Frame ──────────────────────────────── */}
      <section className="py-16 border-b border-zinc-100">
        <p className="label mb-10">02 — The Strategic Frame</p>

        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold text-zinc-700 mb-3">
              Reframing adoption resistance as a design problem
            </h3>
            <p className="text-zinc-500 leading-relaxed">
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
            <h3 className="text-sm font-semibold text-zinc-700 mb-3">
              Positioning Gen AI as an idea generation tool, not a replacement
            </h3>
            <p className="text-zinc-500 leading-relaxed">
              Pharmaceutical marketers typically develop 3–5 copy concepts to
              pitch. The reframe that unlocked adoption: Gen AI as a tool that
              generates the same volume of initial concepts in minutes, leaving
              human judgment — which is irreplaceable in regulated
              communications — for evaluation and refinement rather than first
              draft generation. The tool doesn&apos;t replace the marketer. It
              front-loads the work the marketer was least good at.
            </p>
          </div>

          <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-100">
            <p className="label mb-3">The Design Principle That Followed</p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Every generated output should show the parameters that produced
              it. Every action the user takes should be reversible or
              auditable. The system should never present generated content as
              ground truth — only as a starting point. This principle shaped
              every interaction in the product, from the generation workflow to
              the feedback loop to the error handling.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 03 — Process ──────────────────────────────────────────── */}
      <section className="py-16 border-b border-zinc-100">
        <p className="label mb-10">03 — Process</p>

        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold text-zinc-700 mb-3">
              Starting with the user journey
            </h3>
            <p className="text-zinc-500 leading-relaxed">
              Before wireframing, I mapped the user journey against the business
              requirements and MVP features — not as a deliverable but as a
              guide that was updated throughout the engagement as features were
              added and scoped. This prevented the workflow design from locking
              in too early around a feature set that was actively changing.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-700 mb-3">
              Sketching → wireframes → prototype
            </h3>
            <p className="text-zinc-500 leading-relaxed">
              Initial layouts for the copy generation workflow were sketched
              first, then translated to black-and-white wireframes for
              structured feedback before any visual design decisions were made.
              This kept early feedback on the workflow and information
              architecture rather than aesthetics. The wireframes were then
              iterated through user testing cycles with Pfizer marketing teams.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-700 mb-3">
              Stakeholder presentation cadence
            </h3>
            <p className="text-zinc-500 leading-relaxed">
              Design ideas, workflow diagrams, and interactive prototypes were
              presented to stakeholders across multiple Pfizer teams at regular
              intervals. The cadence was intentional — showing work early and
              often with diverse stakeholder groups in a regulated environment
              surfaces compliance and brand concerns before they become
              late-stage blockers.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl overflow-hidden border border-zinc-100 mb-3">
          <Image
            src="https://framerusercontent.com/images/xjXPRpTJbJrdPvvx0xy2wtZZM8.png"
            alt="User journey map — MVP features mapped against business requirements"
            width={1400}
            height={788}
            className="w-full h-auto"
          />
        </div>
        <p className="text-xs text-zinc-400 text-center mb-4">User journey map used as a guide throughout the engagement</p>

        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div className="rounded-2xl overflow-hidden border border-zinc-100">
            <Image
              src="https://framerusercontent.com/images/SrpydjsUa4EngIvuMBwsH8cMNbc.jpg"
              alt="Early sketches — copy generation workflow layout exploration"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-zinc-100">
            <Image
              src="https://framerusercontent.com/images/FMcDvUbqH4kTu0ZGbGRMeCzLACI.png"
              alt="Black and white wireframe — copy generation interface before visual design"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
        <p className="text-xs text-zinc-400 mt-3 text-center">Early sketches and wireframes before visual design decisions</p>
      </section>

      {/* ── Section 04 — The Messy Middle ─────────────────────────────────── */}
      <section className="py-16 border-b border-zinc-100">
        <p className="label mb-4">04 — The Messy Middle</p>
        <p className="text-zinc-500 leading-relaxed mb-10">
          The honest account — what was harder than the brief suggested and
          what had to change midway through.
        </p>

        <div className="space-y-6">
          <div className="callout-dark">
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">
              The trust problem
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Early user testing revealed that marketers weren&apos;t rejecting
              the generated copy because it was bad — they were rejecting the
              process of using it because they couldn&apos;t explain to their
              reviewers why it said what it said. The output quality wasn&apos;t
              the barrier. Auditability was. The entire transparency layer of
              the interface — parameter display, generation history, feedback
              capture — emerged from this finding, not the original brief.
            </p>
          </div>

          <div className="callout-dark">
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">
              Designing around constraints I didn&apos;t control
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Generation attempt limits, duplicate content handling, and content
              saving behavior were all engineering constraints that arrived
              mid-design. Each one required a design response — how do you show
              a user they&apos;ve reached their generation limit in a way that
              feels intentional rather than broken? How do you handle similar
              outputs without making the system feel repetitive? These
              constraint-to-design translations were some of the most
              interesting problems in the project and weren&apos;t in the
              original scope.
            </p>
          </div>

          {/* Placeholder — user to fill in third messy middle item */}
          <div className="callout-dark">
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">
              [Your third messy middle story — a pivot, a stakeholder conflict,
              something you killed]
            </p>
            <p className="text-zinc-300 leading-relaxed">
              [Fill in here — what was the hardest unexpected moment in this
              project? A feature that didn&apos;t survive? A stakeholder
              alignment challenge? A regulatory constraint that changed the
              design direction?]
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 05 — Design Decisions ─────────────────────────────────── */}
      <section className="py-16 border-b border-zinc-100">
        <p className="label mb-10">05 — Key Design Decisions</p>

        <div className="space-y-5">
          {designDecisions.map((item) => (
            <div key={item.title} className="callout">
              <p className="text-sm font-medium text-zinc-700 mb-1">
                {item.title}
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden border border-zinc-100">
            <Image
              src="https://framerusercontent.com/images/zzPK2r0mCYrSyrwxDcJfzkxVxkM.png"
              alt="Workflow for key features — copy generation interface"
              width={800}
              height={600}
              className="w-full h-auto"
            />
            <p className="text-xs text-zinc-400 text-center py-3 px-4">Copy generation workflow</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-zinc-100">
            <Image
              src="https://framerusercontent.com/images/9ffSpRUmRKUBjuXMcTblMAgQeE.png"
              alt="Workflow for translation — post-generation translation experience"
              width={800}
              height={600}
              className="w-full h-auto"
            />
            <p className="text-xs text-zinc-400 text-center py-3 px-4">Translation workflow</p>
          </div>
        </div>
      </section>

      {/* ── Section 06 — MVP Scope ────────────────────────────────────────── */}
      <section className="py-16 border-b border-zinc-100">
        <p className="label mb-10">06 — MVP Feature Set</p>
        <p className="text-zinc-500 leading-relaxed mb-8">
          The MVP was scoped to establish the core generation workflow and
          layout system before expanding. Each feature was designed not just
          for its own workflow but for how it would coexist with future
          features in the same interface.
        </p>

        <div className="space-y-5">
          {mvpFeatures.map((item) => (
            <div key={item.feature} className="callout">
              <p className="text-sm font-medium text-zinc-700 mb-1">
                {item.feature}
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 07 — Outcomes ─────────────────────────────────────────── */}
      <section className="py-16 border-b border-zinc-100">
        <p className="label mb-10">07 — Outcomes</p>

        <div className="space-y-6">
          <div className="callout">
            <p className="text-sm font-medium text-zinc-700 mb-1">
              MVP delivered for beta onboarding
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              The complete MVP workflow — copy generation, translation, image
              selection — was delivered and prepared for the first set of beta
              testers. The flexible layout system means new features can ship
              into the existing interface without redesign.
            </p>
          </div>

          <div className="callout">
            <p className="text-sm font-medium text-zinc-700 mb-1">
              Adoption reframed as a design problem
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              The transparency layer — parameter display, generation history,
              feedback capture — directly addressed the trust barrier that was
              blocking adoption. Marketers using the system could explain and
              defend generated outputs within Pfizer&apos;s existing review
              workflow.
            </p>
          </div>

          {/* Placeholder for specific metrics */}
          <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-100">
            <p className="label mb-3">
              [Add specific metrics here if available]
            </p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              [e.g., number of beta users, time saved per copy iteration,
              adoption rate among target teams, number of brands onboarded,
              stakeholder count, engagement rate — whatever you have that&apos;s
              shareable under NDA terms]
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 08 — What I'd Do Differently ──────────────────────────── */}
      <section className="py-16 border-b border-zinc-100">
        <p className="label mb-8">08 — What I&apos;d Do Differently</p>
        <p className="text-zinc-500 leading-relaxed mb-4">
          I would have pushed for a medical-legal reviewer to be part of the
          design research process earlier — not as a gatekeeper, but as a user.
          The compliance review workflow is downstream of the tool, but its
          requirements shaped every design decision we made. Getting that
          perspective in week two rather than week eight would have changed the
          initial framing significantly.
        </p>
        <p className="text-zinc-500 leading-relaxed">
          [Add a second reflection here — something specific to this project
          that you&apos;d change with hindsight.]
        </p>
      </section>

    </div>
  );
}
