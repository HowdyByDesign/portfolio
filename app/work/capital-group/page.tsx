import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import WalkthroughEmbed from "@/components/WalkthroughEmbed";

export const metadata: Metadata = {
  title: { absolute: "Capital Group 401k Platform | Ben Howard" },
  description:
    "From wet ink to one click. A 40-field paper form and scan-and-email workflow replaced by a single platform across three roles, with a required dual approval that finally worked.",
  openGraph: {
    title: "Capital Group 401k Platform | Ben Howard",
    description:
      "From wet ink to one click. A 40-field paper form and scan-and-email workflow replaced by a single platform across three roles, with a required dual approval that finally worked.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital Group 401k Platform | Ben Howard",
    description:
      "A 40-field paper form and a scan-and-email workflow replaced by a single platform. Three roles, one source of truth, required dual approval — made intentional.",
    images: ["/og-image.png"],
  },
};

// ── Data ─────────────────────────────────────────────────────────────────────

const constraints = [
  {
    title: "Three roles, zero differentiation",
    body: "The same paper form was the interface for everyone — a business owner changing one field a year, a TPA managing compliance across multiple plans, an Internal Associate processing updates daily. The form treated them identically.",
  },
  {
    title: "Dual approval was non-negotiable",
    body: "Both TPA and Internal Associate were required to sign off on every plan change — a compliance requirement, not bureaucracy to design around. It couldn't be eliminated. It had to be made intentional.",
  },
  {
    title: "No shared record, no shared visibility",
    body: "Before the platform, a request existed as an email attachment, a scanned PDF, a phone call someone might not remember. Nobody knew where anything was in the approval chain without asking. The absence of a shared record was the root problem.",
  },
];

const sprintSummaries = [
  {
    label: "Sprint 01 — Business Owner",
    body: "Replaced the 40-50 field form with a guided, step-by-step request flow. Business owners see only the fields relevant to their specific change type.",
  },
  {
    label: "Sprint 02 — Third Party Administrator",
    body: "Shared view into the plan record with the ability to review and approve change requests directly in the platform. Read-plus-approve — no direct edit access to a regulated record.",
  },
  {
    label: "Sprint 03 — Internal Associate (Primary MVP)",
    body: "The core deliverable. 40-50 fields organized into tabbed sections: Plan Info, Contributions, Eligibility, Distributions, Admin. Both approvals tracked in the same place.",
  },
];

const hardPart = [
  {
    label: "The stated preference vs. the real need",
    body: "Associates pushed back on the tabbed layout — they wanted a single long page. When we asked why, the answer was specific: they used Cmd+F to jump to the field they needed. Tabbed navigation broke that behavior. We gave them what they actually needed: a persistent search bar and a View All tab. The organized structure stayed intact. Power users got their speed back.",
  },
  {
    label: "Earning trust through testing, not assertion",
    body: "The Cmd+F finding was the inflection point. Once we showed we understood how they actually worked — and addressed it directly — resistance shifted to advocacy. The workarounds weren't needed. They just had to see it.",
  },
];

const outcomes = [
  {
    metric: "Seven steps became one request",
    detail: "The phone call, emailed form, scan, email back, chased approvals, and manual update — replaced by a single tracked request that all three parties act on in the same platform.",
  },
  {
    metric: "Speed and visibility were the same outcome",
    detail: "The platform didn't speed things up by cutting steps — it sped things up by making every step visible. When reviewers can see what's waiting, the required approval chain stops feeling like a bottleneck.",
  },
  {
    metric: "The compliance requirement became a feature",
    detail: "Dual approval was non-negotiable. In the paper process it was invisible friction. In the platform it became an explicit, trackable workflow state. The requirement didn't change. The experience of it did.",
  },
  {
    metric: "MVP shipped · feedback in hand",
    detail: "Launched with real associates. Post-launch feedback grounded in actual usage — a better foundation for phase two than any pre-launch assumption.",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function CapitalGroupCaseStudy() {
  return (
    <>
      {/* ────────────────────────────────────────────────────────────────────
          ABOVE THE FOLD
      ──────────────────────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="pt-12 pb-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-warm-400 hover:text-warm-900 transition-colors"
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <span aria-hidden>←</span>
            Work
          </Link>
        </div>

        {/* Category label */}
        <p className="label mb-5">Capital Group · Financial Services · Enterprise UX</p>

        {/* H1 */}
        <h1 className="font-display text-display font-semibold text-warm-900 leading-tight mb-4">
          From wet ink to one click.
        </h1>

        {/* Sub-headline */}
        <p className="text-warm-500 text-[1.0625rem] leading-relaxed mb-10">
          A 40-field paper form and a scan-and-email workflow were the only tools three roles had to manage Small Business 401k plans. I redesigned the entire experience — role by role, sprint by sprint.
        </p>

        {/* ── TLDR ───────────────────────────────────────────────────────── */}
        <div className="my-8 border-l-2 border-warm-200 pl-5 space-y-3">
          {[
            {
              label: "Problem",
              text: "Adding a single employee to a Small Business 401k plan required a phone call, an emailed paper form, a handwritten change, a scan, an email back, parallel sign-off from two parties, and a manual system update. Seven steps across three people — with no visibility into where any request stood.",
            },
            {
              label: "Action",
              text: "Served as sole designer across a series of design sprints, each targeting a specific role. Reframed the brief from \"digitize the form\" to \"build a single source of truth for plan changes.\" Designed purpose-built interfaces for Business Owners, TPAs, and Internal Associates — all acting on the same underlying record.",
            },
            {
              label: "Outcome",
              text: "MVP launched and adopted by internal associates. The scan-and-email loop replaced by a single platform. Change requests became trackable in real time. Speed and visibility improved as the same outcome — not two separate ones.",
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

        {/* Pull quote */}
        <p className="text-warm-600 text-[1.0625rem] leading-relaxed max-w-[52ch] mb-2">
          The approval chain couldn&apos;t be removed. It had to be made intentional.
        </p>
      </div>

      {/* ────────────────────────────────────────────────────────────────────
          STICKY IMPACT CARD
      ──────────────────────────────────────────────────────────────────── */}
      <div
        className="sticky top-16 z-10 border-b border-warm-200 bg-warm-50/95 backdrop-blur-md"
        aria-label="Project at a glance"
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-3 divide-x divide-warm-200">
            {[
              { label: "Role",         value: "Sole Designer" },
              { label: "Methodology", value: "Design Sprints" },
              { label: "Roles Served", value: "3 — Owner, TPA, Associate" },
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
          BODY
      ──────────────────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6">

        {/* ── Hero image ───────────────────────────────────────────────── */}
        <section className="pt-12 pb-16 border-b border-warm-100">
          <div className="rounded-xl overflow-hidden border border-warm-100">
            <Image
              src="/images/csc-plan-info.png"
              alt="Client Service Center — Plan Info tab, Internal Associate view"
              width={1400}
              height={952}
              className="w-full h-auto"
              priority
            />
          </div>
        </section>

        {/* ── 01 — Context & Constraints ───────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p className="label mb-3">01 — Context &amp; Constraints</p>
          <h2 className="font-display text-h2 font-semibold text-warm-900 mb-6 leading-tight">
            The workflow, not the form.
          </h2>

          <div className="mb-10">
            <p className="text-warm-900 font-medium leading-relaxed mb-4">
              The ask was to modernize a dated internal tool. Mapping the actual workflow made the real problem visible fast.
            </p>
            <p className="text-warm-900 font-medium leading-relaxed">
              Adding one employee: associate emails the full 40-50 field form → owner fills in the one relevant field → scans everything → emails it back → TPA and Internal Associate both review and sign off in parallel → associate manually updates the system. Seven steps. No visibility into where any of it stood.
            </p>
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
        </section>

        {/* ── 02 — Strategic Frame ─────────────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p className="label mb-3">02 — The Strategic Frame</p>
          <h2 className="font-display text-h2 font-semibold text-warm-900 mb-6 leading-tight">
            3 Roles. 3 Design Sprints.
          </h2>

          <p className="text-warm-900 font-medium leading-relaxed mb-10">
            One sprint per role. Each a contained design problem. Purpose-built interfaces for each user type — all acting on the same underlying record.
          </p>

          <div className="space-y-4 mb-10">
            {sprintSummaries.map((sp) => (
              <div
                key={sp.label}
                className="p-5 rounded-lg border border-warm-200 bg-warm-50"
              >
                <p className="text-sm font-semibold text-warm-800 mb-1">{sp.label}</p>
                <p className="text-sm text-warm-900 font-medium leading-relaxed">{sp.body}</p>
              </div>
            ))}
          </div>

          {/* Two-up: Business Owner + Guided Request */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-warm-200">
              <Image
                src="/images/csc-business-owner.png"
                alt="Client Service Center — Business Owner dashboard view"
                width={1300}
                height={885}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-warm-200">
              <Image
                src="/images/csc-guided-request.png"
                alt="Client Service Center — guided change request flow, step 1 of 3"
                width={1300}
                height={885}
                className="w-full h-auto"
              />
            </div>
          </div>
          <p className="text-xs text-warm-400 mt-3 text-center">
            Business Owner portal — dashboard and guided change request flow
          </p>

          <div className="mt-10 rounded-lg bg-warm-950 p-6">
            <p className="text-xs font-semibold text-warm-600 uppercase tracking-widest mb-4">
              The approval workflow was a constraint, not a choice
            </p>
            <p className="text-warm-300 leading-relaxed">
              Both TPA and Internal Associate approval on every plan change — in parallel, both required. That wasn&apos;t going away. What changed: instead of a request disappearing into an email chain, it lived in the platform. Both reviewers notified simultaneously, acting on the same record. The approval chain stayed intact. The chaos around it was gone.
            </p>
          </div>
        </section>

        {/* ── 03 — The Key Insight ─────────────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p className="label mb-3">03 — The Key Insight</p>
          <h2 className="font-display text-h2 font-semibold text-warm-900 mb-6 leading-tight">
            The Cmd+F Finding
          </h2>

          <p className="text-warm-900 font-medium leading-relaxed mb-8">
            User testing on the Internal Associate experience surfaced a specific tension. Some associates pushed back on the tabbed layout — they wanted a single, scrollable long page. We pushed back and asked why.
          </p>

          <div className="space-y-4 mb-10">
            {hardPart.map((h) => (
              <div key={h.label} className="rounded-lg bg-warm-950 p-6">
                <p className="text-xs font-semibold text-warm-600 uppercase tracking-widest mb-4">
                  {h.label}
                </p>
                <p className="text-warm-300 leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>

          {/* View All + Search screenshot */}
          <div className="rounded-xl overflow-hidden border border-warm-200 mb-3">
            <Image
              src="/images/csc-view-all-search.png"
              alt="Client Service Center — View All tab with search active, safe harbor fields highlighted"
              width={1400}
              height={952}
              className="w-full h-auto"
            />
          </div>
          <p className="text-xs text-warm-400 text-center">
            View All tab with persistent search — &ldquo;safe harbor&rdquo; surfaces two matches across sections
          </p>
        </section>

        {/* ── 04 — The Design Decisions ────────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p className="label mb-3">04 — The Design Decisions</p>
          <h2 className="font-display text-h2 font-semibold text-warm-900 mb-8 leading-tight">
            Authority Encoded in Interface, Not Just Permissions
          </h2>

          <div className="space-y-4 mb-10">
            {[
              {
                title: "Tabs as primary navigation, search as power-user escape hatch",
                body: "The tabbed structure maps to how 401k plans are structured as documents — Plan Info, Contributions, Eligibility, Distributions, Admin. Associates build a mental model quickly. The search bar handles experienced users without dismantling the structure.",
              },
              {
                title: "The View All tab as deliberate pressure valve",
                body: "Rather than fighting the long-page preference, we accommodated it explicitly. View All drops into an unfiltered view for complex changes or senior associates who have internalized the full field set.",
              },
              {
                title: "The entire IA shifts by role, not just the permissions",
                body: "Business Owner: only the fields relevant to their change. Internal Associate: full record with workflow context — pending requests, change history, validation status. Same data. Completely different frames.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="pl-5 border-l-2 border-warm-200 py-1"
              >
                <p className="text-sm font-semibold text-warm-800 mb-1">{item.title}</p>
                <p className="text-sm text-warm-900 font-medium leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Walkthrough ──────────────────────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p className="label mb-3">The Flow in Motion</p>
          <h2 className="font-display text-h2 font-semibold text-warm-900 mb-4 leading-tight">
            From change request to approved.
          </h2>
          <p className="text-warm-600 text-[1.0625rem] leading-relaxed mb-8">
            Business owner initiates a change, it routes through the platform, and both the TPA and Internal Associate approve — in parallel, tracked the whole way.
          </p>
          <WalkthroughEmbed />
        </section>

        {/* ── 05 — Outcomes ─────────────────────────────────────────────── */}
        <section className="py-16">
          <p className="label mb-3">05 — Outcomes</p>
          <h2 className="font-display text-h2 font-semibold text-warm-900 mb-10 leading-tight">
            One Place. No More Guessing.
          </h2>

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
