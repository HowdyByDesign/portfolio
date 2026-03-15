import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import EfficiencyMap from "@/components/EfficiencyMap";

export const metadata: Metadata = {
  title: "DCMN Reporting Dashboard",
  description:
    "Eliminating 400 hours of monthly manual Excel reporting at a performance marketing agency through co-creation strategy sessions, user research, and a strategic reporting system that unified 50 clients onto a single platform.",
};

// ── Data ─────────────────────────────────────────────────────────────────────

const meta = [
  { label: "Role",      value: "UX Strategist · Sole Strategic Designer" },
  { label: "Timeline",  value: "6 months · 2021–2022" },
  { label: "Deliverables", value: "Co-creation strategy sessions, user research, customer experience blueprints, standardized reporting system" },
];

const constraints = [
  {
    title: "8 hours per report, 50 clients",
    body: `Each monthly client report required up to 8 hours of manual Excel work — data entry, formatting, chart creation, and export. With 50 active clients, that was 400 hours of error-prone effort every month before a single insight reached a client.`,
  },
  {
    title: "Inconsistent templates across the company",
    body: `There was no single report standard. Each account manager maintained their own Excel file with their own structure, meaning clients received different-looking reports depending on who handled their account — a quality and trust problem, not just a time problem.`,
  },
  {
    title: "No live data connection",
    body: `All data was pulled manually from ad platforms and pasted into spreadsheets. There was no API integration, no version control, and no audit trail. A single copy-paste error could silently corrupt a client's performance numbers.`,
  },
  {
    title: "Reporting consumed strategist capacity",
    body: `The people most capable of turning data into insight — the marketing strategists — were spending the bulk of their monthly cycle doing data entry. The reporting process was cannibalizing the work the reports were supposed to enable.`,
  },
];

const hardPart = [
  {
    label: "The resistance",
    body: `Our Head of Marketing championed the new tool, but some team members quietly ran the old Excel process in parallel — comparing numbers until they fully trusted the data. Rather than forcing a hard cutover, we let the dashboard prove itself. That dual-use period became an unexpected validation phase. When the numbers matched consistently over three cycles, adoption accelerated on its own.`,
  },
  {
    label: `The prototype that looked "too familiar"`,
    body: `My first prototype validated splitting reports into views by funnel stage. But users flagged immediately that it looked and felt too much like the old Excel report — same visual language, same cognitive pattern. That was well-noted feedback. We had redesigned the data model but hadn't redesigned the experience. The second round addressed layout, color system, and navigation before it went to client testing.`,
  },
  {
    label: "The KPI negotiation",
    body: `Every team had a different opinion on which metrics belonged on each view. The workshop process was essential here — not to reach consensus by committee, but to surface the underlying disagreement about what "performance" actually meant across channels. Once we had that conversation explicitly, the KPI prioritization became a product decision rather than a political one.`,
  },
];

const dashboardFeatures = [
  {
    view: "Funnel Overview",
    features: `5-step marketing funnel, budget breakdown by day, key KPI metrics benchmarked against the previous month and the same month of the previous year, adjustable reporting period and campaign filter.`,
  },
  {
    view: "Channel Performance",
    features: `Toggle between KPIs via dropdown, clear visual distinction between channel types (Awareness, Volume, Frequency), tooltip showing exact values on hover.`,
  },
  {
    view: "Daypart & Timing",
    features: `Toggle between daypart and weekday breakdowns, timeline view showing how budget and conversions fluctuated throughout the day, splits for key KPIs by time segment.`,
  },
];

const impactItems = [
  {
    metric: "30+ hours reclaimed",
    detail: `Per strategist, per month. Not hours saved on a spreadsheet — hours returned to campaign strategy, client storytelling, and the analysis the reports were supposed to enable in the first place.`,
  },
  {
    metric: "400 hrs/mo — eliminated",
    detail: `Four hundred hours of manual Excel work removed from the monthly cycle across 50 clients. Every hour that was being silently lost to data entry is now billable capacity.`,
  },
  {
    metric: "40 adopters across 5 teams",
    detail: `Rolled out to 40 individuals across 5 internal teams, starting with 3 beta testers. The adoption curve was steep once the parallel validation period resolved — no mandate required.`,
  },
  {
    metric: "One report, company-wide",
    detail: `A single standardized report template replaced the inconsistent Excel patchwork. Every client now receives the same structure, same visual language, and the same quality floor regardless of account manager.`,
  },
  {
    metric: "Reactive → proactive",
    detail: `Real-time, shareable reports shifted the team's relationship with data from reactive entry to proactive storytelling. Strategists could pull a live view during a client call rather than scheduling a reporting cycle.`,
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function DcmnCaseStudy() {
  return (
    <>
      {/* ── ABOVE THE FOLD ──────────────────────────────────────────────── */}
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
        <p className="label mb-5">DCMN · Dashboard Design · Data Visualization</p>

        {/* H1 */}
        <h1 className="font-display text-h1 font-semibold text-warm-900 leading-tight mb-8">
          Eliminating 400 Hours of Monthly Reporting Waste
        </h1>

        {/* ── TLDR ───────────────────────────────────────────────────────── */}
        <div className="mb-8 border-l-2 border-warm-200 pl-5 space-y-3">
          {[
            {
              label: "Problem",
              text: `400 hours of manual Excel reporting every month — error-prone, inconsistent, and consuming the strategists most capable of turning data into insight.`,
            },
            {
              label: "Action",
              text: `Orchestrated 6 months of facilitated workshops and user research — standardizing 50 client accounts onto a single live platform and reclaiming 400 hours of monthly strategist capacity from manual Excel work.`,
            },
            {
              label: "Outcome",
              text: `400 hrs/month eliminated. 40 adopters across 5 teams. One standardized report, company-wide. Excel templates are gone.`,
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

        {/* Primary Metric — Loss Aversion framing */}
        <div className="mb-8">
          <p
            className="font-display font-semibold text-accent leading-none tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
          >
            30+ Hours
          </p>
          <p className="font-display text-h3 font-medium text-warm-400 leading-tight mt-1">
            per strategist, per month. No longer wasted.
          </p>
        </div>

        {/* Janine Quote — massive display editorial weight */}
        <blockquote className="relative mb-2">
          <span
            className="block font-display font-semibold text-accent leading-none mb-3 select-none"
            style={{ fontSize: "5rem", lineHeight: 0.8 }}
            aria-hidden
          >
            &ldquo;
          </span>
          <p className="font-display text-display font-semibold text-warm-900 leading-tight max-w-[22ch]">
            At the start of each month, I had five reports due. Each one could take a full day.
          </p>
          <footer className="mt-6 flex items-center gap-4">
            <span className="font-signet font-bold tracking-tight text-base text-accent leading-none">Howdy</span>
            <span className="w-px h-5 bg-warm-200" aria-hidden />
            <cite className="not-italic text-xs text-warm-400 uppercase tracking-widest">
              Janine · Senior Marketing Strategist, DCMN
            </cite>
          </footer>
        </blockquote>
      </div>

      {/* ── STICKY META BAR ─────────────────────────────────────────────── */}
      <div
        className="sticky top-16 z-10 border-b border-warm-200 bg-warm-50/95 backdrop-blur-md"
        aria-label="Project at a glance"
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="grid grid-cols-3 divide-x divide-warm-200">
            {[
              { label: "Role",      value: "Strategic Designer" },
              { label: "Timeline",  value: "6 Months" },
              { label: "Impact",    value: "400 hrs/mo" },
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

      {/* ── BODY ────────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6">

        {/* ── Hook summary + Hero image ─────────────────────────────────── */}
        <section className="pt-12 pb-16 border-b border-warm-100">
          <p className="text-warm-900 font-medium leading-relaxed mb-10 max-w-[58ch]">
            400 hours of monthly strategist capacity reclaimed. I orchestrated the
            full transformation — leading co-creation strategy sessions to synthesize
            stakeholder and user needs across 5 teams, then developing the strategic
            blueprint for a live dashboard that unified 50 client accounts onto a
            single platform and achieved institutional alignment company-wide.
            Adopted by 40 individuals across the organization. The Excel templates are gone.
          </p>

          <div className="rounded-xl overflow-hidden border border-warm-100">
            <Image
              src="https://framerusercontent.com/images/9HCoWtNKaquV4mQyBQAyp2MqDs.png"
              alt="DCMN reporting dashboard — live connected performance reporting"
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
                DCMN is a performance marketing agency specializing in offline channels —
                TV, audio, out-of-home — for growth-stage companies. The business model
                depends on demonstrating measurable channel performance to clients every
                month. The reporting process was the primary mechanism for that
                demonstration. It was broken.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-warm-700 mb-2">The target user</h3>
              <p className="text-warm-900 font-medium leading-relaxed">
                Janine — a senior marketing strategist and our primary target user — put it
                plainly: a single client report could consume a full working day, and at
                the start of each month, she had up to five clients expecting reports
                simultaneously. This was not an edge case. It was the standard experience
                for every account manager on the offline marketing teams.
              </p>
            </div>
          </div>

          <h3 className="text-sm font-semibold text-warm-700 mb-5">The real constraints</h3>
          <div className="space-y-4">
            {constraints.map((c) => (
              <div key={c.title} className="pl-5 border-l-2 border-warm-200 py-1">
                <p className="text-sm font-semibold text-warm-800 mb-1">{c.title}</p>
                <p className="text-sm text-warm-900 font-medium leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 02 — Efficiency Map (Before → After) ─────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-14 lg:items-start">
            {/* ── Main: label + heading + map ── */}
            <div>
              <p className="label mb-3">02 — The Efficiency Map</p>
              <h2 className="font-display text-h2 font-semibold text-warm-900 mb-4 leading-tight">
                From Excel Slog to Live Dashboard
              </h2>
              <p className="text-warm-900 font-medium leading-relaxed mb-10">
                Every step below represents time that was no longer available for the work
                that matters. The left column shows what the team was losing every month.
                The right column is what replaced it.
              </p>

              <EfficiencyMap />
            </div>

            {/* ── Margin aside — transformation stats ── */}
            <aside className="mt-10 lg:mt-14 lg:sticky lg:top-24 space-y-6">
              <div className="border-l-2 border-accent/40 pl-4">
                <p className="text-xs font-semibold text-warm-400 uppercase tracking-widest mb-1">Report time</p>
                <div className="flex items-baseline gap-2">
                  <p className="font-display text-3xl font-semibold text-warm-900 leading-none">8 hrs</p>
                </div>
                <p className="text-xs text-warm-400 leading-snug mt-1">
                  → <span className="text-accent font-medium">2 min</span> per client
                </p>
              </div>
              <div className="border-l-2 border-warm-200 pl-4">
                <p className="text-xs font-semibold text-warm-400 uppercase tracking-widest mb-1">Monthly waste</p>
                <p className="font-display text-3xl font-semibold text-warm-900 leading-none">400</p>
                <p className="text-xs text-warm-400 leading-snug mt-1">hours eliminated across 50 clients</p>
              </div>
              <div className="border-l-2 border-warm-200 pl-4">
                <p className="text-xs font-semibold text-warm-400 uppercase tracking-widest mb-2">Process age</p>
                <p className="text-xs text-warm-900 font-medium leading-relaxed">The Excel workflow had existed for 4+ years before the redesign killed it in 6 months.</p>
              </div>
            </aside>
          </div>
        </section>

        {/* ── 03 — Discovery & Research ────────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-14 lg:items-start">
            {/* ── Main narrative ── */}
            <div>
              <p className="label mb-10">03 — Discovery &amp; Research</p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-warm-700 mb-3">
                    Co-creation strategy sessions as the engine
                  </h3>
                  <p className="text-warm-900 font-medium leading-relaxed">
                    I orchestrated weekly co-creation strategy sessions via Miro with the
                    product team and internal users throughout the engagement. These weren&apos;t
                    status meetings — they were structured alignment sessions where we audited
                    the current reports together, synthesized competing views on what data
                    mattered, and built stakeholder consensus on the information architecture
                    of the new system before a single component was designed.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-warm-700 mb-3">
                    Auditing what existed — before designing anything new
                  </h3>
                  <p className="text-warm-900 font-medium leading-relaxed">
                    Before committing to a direction, I audited the existing reports and
                    catalogued the most common data points across all client accounts. The
                    audit revealed that roughly 70% of the content was consistent — the
                    inconsistency was in structure, not substance. That meant standardization
                    was viable by leveraging what already existed. The data model could be
                    implemented before the UI was designed.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Margin aside — the reframe ── */}
            <aside className="mt-10 lg:mt-[3.75rem] lg:sticky lg:top-24 space-y-5">
              <div className="border-l-2 border-accent/40 pl-4">
                <p className="text-xs font-semibold text-warm-400 uppercase tracking-widest mb-2">The Reframe</p>
                <p className="text-sm text-warm-600 leading-relaxed">
                  The brief described a reporting tool. The real project was an operational
                  redesign: how does a 50-client agency build a scalable communication layer
                  between its data infrastructure and its clients?
                </p>
              </div>
              <div className="border-l-2 border-warm-200 pl-4">
                <p className="text-xs font-semibold text-warm-400 uppercase tracking-widest mb-1">Content consistency</p>
                <p className="font-display text-3xl font-semibold text-warm-900 leading-none">70%</p>
                <p className="text-xs text-warm-400 leading-snug mt-1">of report content was identical across clients — the inconsistency was structure, not substance</p>
              </div>
            </aside>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-warm-100">
              <Image
                src="https://framerusercontent.com/images/ipz4xCY9qimNjvZdObVA71LcRQY.png"
                alt="The previous Excel-based reporting process"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-warm-100">
              <Image
                src="https://framerusercontent.com/images/LPnYzLOB9iXjwX8woxwPsM6MVYc.png"
                alt="Workshop facilitation — auditing existing reports"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
          <p className="text-xs text-warm-400 mt-3 text-center">
            The previous process (left) and workshop artifacts (right)
          </p>
        </section>

        {/* ── 04 — The Hard Part ───────────────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p className="label mb-3">04 — Stakeholder Management</p>
          <h2 className="font-display text-h2 font-semibold text-warm-900 mb-4 leading-tight">
            The Hard Part
          </h2>
          <p className="text-warm-900 font-medium leading-relaxed mb-10 max-w-[54ch]">
            The resistance, the prototype that missed, and the political KPI negotiations
            that shaped the final system.
          </p>

          <div className="space-y-4">
            {hardPart.map((item) => (
              <div key={item.label} className="bg-warm-950 text-warm-100 rounded-xl p-8">
                <p className="text-xs font-semibold text-warm-600 uppercase tracking-widest mb-4">
                  {item.label}
                </p>
                <p className="text-warm-300 leading-relaxed text-[0.9375rem]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 05 — The Dashboard System ────────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p className="label mb-10">05 — The Dashboard System</p>
          <p className="text-warm-900 font-medium leading-relaxed mb-8">
            The final dashboard split reporting into three distinct views aligned to how
            strategists actually communicate performance — not how the data happened to
            be structured in the source systems.
          </p>

          <div className="space-y-4">
            {dashboardFeatures.map((item) => (
              <div key={item.view} className="pl-5 border-l-2 border-warm-200 py-1">
                <p className="text-sm font-semibold text-warm-800 mb-1">{item.view}</p>
                <p className="text-sm text-warm-900 font-medium leading-relaxed">{item.features}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-4">
            <div className="rounded-xl overflow-hidden border border-warm-100">
              <Image
                src="https://framerusercontent.com/images/9HCoWtNKaquV4mQyBQAyp2MqDs.png"
                alt="Funnel overview — 5-step marketing funnel with budget and KPI breakdown"
                width={1400}
                height={788}
                className="w-full h-auto"
              />
              <p className="text-xs text-warm-400 text-center py-3 px-4">Funnel overview view</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-warm-100">
                <Image
                  src="https://framerusercontent.com/images/Bde4pAcz329j4jJlFqj8CbFI9ZE.png"
                  alt="Channel performance view"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <p className="text-xs text-warm-400 text-center py-3 px-4">Channel performance view</p>
              </div>
              <div className="rounded-xl overflow-hidden border border-warm-100">
                <Image
                  src="https://framerusercontent.com/images/Q5sj3pphU9PkMkiFGXBdGLt9k.png"
                  alt="Daypart & timing view"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <p className="text-xs text-warm-400 text-center py-3 px-4">Daypart & timing view</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-warm-100 rounded-xl p-6 border border-warm-200">
            <p className="label mb-3">Design Principle: Shareable by Default</p>
            <p className="text-sm text-warm-700 leading-relaxed">
              Every view was designed to be shared live — directly in a client call, not as
              a static export. This changed the interaction model from &quot;we prepare,
              they receive&quot; to &quot;we explore together.&quot; Strategists reported
              that client conversations became materially more productive once the data was
              live in the room.
            </p>
          </div>
        </section>

        {/* ── 06 — Business Impact ─────────────────────────────────────── */}
        <section className="py-16 border-b border-warm-100">
          <p className="label mb-10">06 — Business Impact</p>

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

          <div className="bg-warm-100 rounded-xl p-6 border border-warm-200">
            <p className="label mb-3">Second-Order Outcome</p>
            <p className="text-sm text-warm-700 leading-relaxed">
              The standardized report structure implemented for this engagement became
              the template for how DCMN onboarded new clients — institutional alignment
              that outlasted the project and became operational infrastructure. That&apos;s
              the marker I use to distinguish design that sticks from design that gets replaced.
            </p>
          </div>
        </section>

        {/* ── 07 — What I'd Do Differently ─────────────────────────────── */}
        <section className="py-16">
          <p className="label mb-8">07 — What I&apos;d Do Differently</p>
          <p className="text-warm-900 font-medium leading-relaxed mb-4">
            I would have built the parallel validation period into the rollout plan
            intentionally rather than discovering it emergently. The insight — that letting
            teams self-verify accelerates adoption more than a hard cutover — was real and
            useful, but we stumbled into it. A planned transition protocol would have been
            faster and less anxious for the team members running dual systems.
          </p>
          <p className="text-warm-900 font-medium leading-relaxed">
            I would also have pushed earlier for a client-facing version of the dashboard.
            We built for internal users first, and the shareable reporting capability was
            partially retrofitted. The client interaction model — exploring data live in a
            call — was the most valuable behavioral shift that came out of this project,
            and it deserved to be a design brief in its own right from the start.
          </p>
        </section>

      </div>
    </>
  );
}
