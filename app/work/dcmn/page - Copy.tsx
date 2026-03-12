import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DCMN Reporting Dashboard",
  description:
    "Eliminating 400 hours of monthly manual Excel reporting at a performance marketing agency through user research, workshop facilitation, and a connected dashboard.",
};

// ── Data ─────────────────────────────────────────────────────────────────────

const meta = [
  { label: "Role", value: "Lead UX/UI Designer · Workshop Facilitator" },
  { label: "Timeline", value: "6 months · 2021–2022" },
  {
    label: "Deliverables",
    value:
      "User personas, journey maps, wireframes, usability tests, fully connected dashboard",
  },
];

const constraints = [
  {
    title: "8 hours per report, 50 clients",
    body: "Each monthly client report required up to 8 hours of manual Excel work — data entry, formatting, chart creation, and export. With 50 active clients, that was 400 hours of error-prone effort every month before a single insight reached a client.",
  },
  {
    title: "Inconsistent templates across the company",
    body: "There was no single report standard. Each account manager maintained their own Excel file with their own structure, meaning clients received different-looking reports depending on who handled their account — a quality and trust problem, not just a time problem.",
  },
  {
    title: "No live data connection",
    body: "All data was pulled manually from ad platforms and pasted into spreadsheets. There was no API integration, no version control, and no audit trail. A single copy-paste error could silently corrupt a client's performance numbers.",
  },
  {
    title: "Reporting consumed strategist capacity",
    body: "The people most capable of turning data into insight — the marketing strategists — were spending the bulk of their monthly cycle doing data entry. The reporting process was cannibalizing the work the reports were supposed to enable.",
  },
];

const messyMiddle = [
  {
    label: "The resistance",
    body: "Our Head of Marketing championed the new tool, but some team members quietly ran the old Excel process in parallel — comparing numbers until they fully trusted the data. Rather than forcing a hard cutover, we let the dashboard prove itself. That dual-use period became an unexpected validation phase. When the numbers matched consistently over three cycles, adoption accelerated on its own.",
  },
  {
    label: "The prototype that looked too familiar",
    body: "My first prototype validated the idea of splitting reports into views by marketing funnel stage. But users flagged immediately that it looked and felt too much like the old Excel report — same visual language, same cognitive pattern. That was well-noted feedback. We had redesigned the data model but hadn't redesigned the experience. The second round addressed layout, color system, and navigation before it went to client testing.",
  },
  {
    label: "The KPI negotiation",
    body: "Every team had a different opinion on which metrics belonged on each view. The workshop process was essential here — not to reach consensus by committee, but to surface the underlying disagreement about what 'performance' actually meant across channels. Once we had that conversation explicitly, the KPI prioritization became a product decision rather than a political one.",
  },
];

const dashboardFeatures = [
  {
    view: "Funnel Overview",
    features:
      "5-step marketing funnel, budget breakdown by day, key KPI metrics benchmarked against the previous month and the same month of the previous year, adjustable reporting period and campaign filter.",
  },
  {
    view: "Channel Performance",
    features:
      "Toggle between KPIs via dropdown, clear visual distinction between channel types (Awareness, Volume, Frequency), tooltip showing exact values on hover.",
  },
  {
    view: "Daypart & Timing",
    features:
      "Toggle between daypart and weekday breakdowns, timeline view showing how budget and conversions fluctuated throughout the day, splits for key KPIs by time segment.",
  },
];

const impactItems = [
  {
    metric: "400 hrs/mo eliminated",
    detail:
      "Four hundred hours of manual Excel work removed from the monthly cycle across 50 clients — time that returned directly to strategists for analysis, client communication, and campaign optimization.",
  },
  {
    metric: "40 adopters across 5 teams",
    detail:
      "Rolled out to 40 individuals across 5 internal teams, starting with 3 beta testers. The adoption curve was steep once the parallel validation period resolved — no mandate required.",
  },
  {
    metric: "One report, company-wide",
    detail:
      "A single standardized report template replaced the inconsistent Excel patchwork. Every client now receives the same structure, same visual language, and the same quality floor regardless of account manager.",
  },
  {
    metric: "Reactive → proactive",
    detail:
      "Real-time, shareable reports shifted the team's relationship with data from reactive entry to proactive storytelling. Strategists could pull a live view during a client call rather than scheduling a reporting cycle.",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function DcmnCaseStudy() {
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
        <p className="label mb-5">DCMN · Dashboard Design · Data Visualization</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 leading-tight mb-10">
          Eliminating 400 Hours of Monthly Reporting Waste
        </h1>

        <div className="grid sm:grid-cols-3 gap-6">
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
          A performance marketing agency with 50 clients was burning 400 hours
          every month on manual Excel reporting — before a single insight
          reached a client.
        </p>
        <p className="mt-6 text-zinc-500 leading-relaxed">
          I led the end-to-end redesign: weekly discovery workshops, user
          research, a standardized reporting system, and a fully connected live
          dashboard. Adopted by 40 individuals across 5 internal teams. The
          Excel templates are gone.
        </p>

        <div className="mt-10 rounded-2xl overflow-hidden border border-zinc-100">
          <Image
            src="https://framerusercontent.com/images/9HCoWtNKaquV4mQyBQAyp2MqDs.png"
            alt="DCMN reporting dashboard — live connected performance reporting"
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
              DCMN is a performance marketing agency specializing in offline
              channels — TV, audio, out-of-home — for growth-stage companies.
              The business model depends on demonstrating measurable channel
              performance to clients every month. The reporting process was the
              primary mechanism for that demonstration. It was broken.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-700 mb-2">
              The target user
            </h3>
            <p className="text-zinc-500 leading-relaxed">
              Janine — a senior marketing strategist and our primary target user
              — put it plainly: a single client report could consume a full
              working day, and at the start of each month, she had up to five
              clients expecting reports simultaneously. This was not an edge
              case. It was the standard experience for every account manager on
              the offline marketing teams.
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

      {/* ── Section 02 — Discovery & Research ────────────────────────────── */}
      <section className="py-16 border-b border-zinc-100">
        <p className="label mb-10">02 — Discovery & Research</p>

        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold text-zinc-700 mb-3">
              Weekly workshops as the engine
            </h3>
            <p className="text-zinc-500 leading-relaxed">
              I facilitated weekly workshops via Miro with the product team and
              internal users throughout the engagement. These weren&apos;t
              status meetings or presentations — they were working sessions
              where we audited the current reports together, surfaced
              disagreements about what data mattered, and negotiated the
              information architecture of the new system in real time.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-700 mb-3">
              Auditing what existed
            </h3>
            <p className="text-zinc-500 leading-relaxed">
              Before designing anything, I audited the current reports and
              catalogued the most common data points across all client accounts.
              The audit revealed that roughly 70% of the content was consistent
              across reports — the inconsistency was in structure, not
              substance. That meant standardization was viable. It also meant
              the data model could be designed before the UI was.
            </p>
          </div>

          <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-100">
            <p className="label mb-3">The Reframe</p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              The brief described a reporting tool. The real project was an
              operational redesign: how does a 50-client agency create a
              scalable, standardized communication layer between its data
              infrastructure and its clients? The UI was downstream of that
              answer, not the starting point.
            </p>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden border border-zinc-100">
            <Image
              src="https://framerusercontent.com/images/ipz4xCY9qimNjvZdObVA71LcRQY.png"
              alt="The previous Excel-based reporting process — manual data entry across 50 clients"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-zinc-100">
            <Image
              src="https://framerusercontent.com/images/LPnYzLOB9iXjwX8woxwPsM6MVYc.png"
              alt="Workshop facilitation — auditing existing reports and aligning on data structure"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
        <p className="text-xs text-zinc-400 mt-3 text-center">
          The previous process (left) and workshop artifacts (right)
        </p>
      </section>

      {/* ── Section 03 — The Messy Middle ─────────────────────────────────── */}
      <section className="py-16 border-b border-zinc-100">
        <p className="label mb-4">03 — The Messy Middle</p>
        <p className="text-zinc-500 leading-relaxed mb-10">
          The honest account — the resistance, the prototype that missed, and
          the political KPI negotiations that shaped the final system.
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

      {/* ── Section 04 — The Dashboard ────────────────────────────────────── */}
      <section className="py-16 border-b border-zinc-100">
        <p className="label mb-10">04 — The Dashboard System</p>
        <p className="text-zinc-500 leading-relaxed mb-8">
          The final dashboard split reporting into three distinct views aligned
          to how strategists actually communicate performance — not how the data
          happened to be structured in the source systems.
        </p>

        <div className="space-y-5">
          {dashboardFeatures.map((item) => (
            <div key={item.view} className="callout">
              <p className="text-sm font-medium text-zinc-700 mb-1">
                {item.view}
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {item.features}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-4">
          <div className="rounded-2xl overflow-hidden border border-zinc-100">
            <Image
              src="https://framerusercontent.com/images/9HCoWtNKaquV4mQyBQAyp2MqDs.png"
              alt="Funnel overview — 5-step marketing funnel with budget and KPI breakdown"
              width={1400}
              height={788}
              className="w-full h-auto"
            />
            <p className="text-xs text-zinc-400 text-center py-3 px-4">Funnel overview view</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-zinc-100">
              <Image
                src="https://framerusercontent.com/images/Bde4pAcz329j4jJlFqj8CbFI9ZE.png"
                alt="Channel performance view — KPI toggle with channel type breakdown"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <p className="text-xs text-zinc-400 text-center py-3 px-4">Channel performance view</p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-zinc-100">
              <Image
                src="https://framerusercontent.com/images/Q5sj3pphU9PkMkiFGXBdGLt9k.png"
                alt="Daypart & timing view — budget and conversion fluctuation by time segment"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <p className="text-xs text-zinc-400 text-center py-3 px-4">Daypart & timing view</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-zinc-50 rounded-xl p-6 border border-zinc-100">
          <p className="label mb-3">Design Principle: Shareable by Default</p>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Every view was designed to be shared live — directly in a client
            call, not as a static export. This changed the interaction model
            from &quot;we prepare, they receive&quot; to &quot;we explore
            together.&quot; Strategists reported that client conversations
            became materially more productive once the data was live in the
            room.
          </p>
        </div>
      </section>

      {/* ── Section 05 — Business Impact ──────────────────────────────────── */}
      <section className="py-16 border-b border-zinc-100">
        <p className="label mb-10">05 — Business Impact</p>

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

        <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-100">
          <p className="label mb-3">Second-Order Outcome</p>
          <p className="text-sm text-zinc-600 leading-relaxed">
            The standardized report structure built for this engagement became
            the template for how DCMN onboarded new clients — the design
            artifact outlasted the project and became operational infrastructure.
            That&apos;s the marker I use to distinguish design that sticks from
            design that gets replaced.
          </p>
        </div>
      </section>

      {/* ── Section 06 — What I'd Do Differently ──────────────────────────── */}
      <section className="py-16">
        <p className="label mb-8">06 — What I&apos;d Do Differently</p>
        <p className="text-zinc-500 leading-relaxed mb-4">
          I would have built the parallel validation period into the rollout
          plan intentionally rather than discovering it emergently. The insight
          — that letting teams self-verify accelerates adoption more than a
          hard cutover — was real and useful, but we stumbled into it. A
          planned transition protocol would have been faster and less anxious
          for the team members running dual systems.
        </p>
        <p className="text-zinc-500 leading-relaxed">
          I would also have pushed earlier for a client-facing version of the
          dashboard. We built for internal users first, and the shareable
          reporting capability was partially retrofitted. The client interaction
          model — exploring data live in a call — was the most valuable
          behavioral shift that came out of this project, and it deserved to
          be a design brief in its own right from the start.
        </p>
      </section>
    </div>
  );
}
