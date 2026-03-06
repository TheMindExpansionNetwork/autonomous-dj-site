import Link from "next/link";

const outcomeStats = [
  {
    value: "10",
    label: "Distinct DJ agents",
    detail: "Personality-specific voices for multi-hour sessions.",
  },
  {
    value: "4",
    label: "Narrative set phases",
    detail: "Intro, build, peak, and cooldown sequencing.",
  },
  {
    value: "100%",
    label: "Manifested sessions",
    detail: "Every run logs prompts, transitions, and outcomes.",
  },
];

const pillars = [
  {
    title: "Crowd-reactive decisions",
    body: "Energy and groove signals steer each segment so the room never feels static.",
  },
  {
    title: "Dead-air resistant playback",
    body: "Fallback loops and retry paths keep audio continuous during generation variance.",
  },
  {
    title: "Operator-grade controls",
    body: "Runbook-friendly setup, preflight checks, and clear handoff points for human oversight.",
  },
  {
    title: "Replay and remix ready",
    body: "Session manifests make every show auditable, repeatable, and easier to improve.",
  },
];

const workflow = [
  {
    title: "Preflight",
    body: "Run health and demo profiles before load-in to verify system readiness.",
  },
  {
    title: "Live orchestration",
    body: "Scheduler rotates agents by phase while anti-repeat logic keeps variation high.",
  },
  {
    title: "Reliability layer",
    body: "Render queue, retries, and fallback material protect continuity under pressure.",
  },
  {
    title: "Post-set intelligence",
    body: "Manifest data captures timeline and transition quality for post-show optimization.",
  },
];

const trustSignals = [
  "Built for festivals, livestreams, and brand activations",
  "Structured operator guide for technical rehearsal and go-live",
  "Session-level logs for accountability and iteration",
  "Clear escalation path with manual override options",
];

const useCases = [
  "Festival side stages",
  "Retail and brand launches",
  "Livestream programming",
  "Immersive art spaces",
  "Afterparty programming",
  "Tech conference socials",
];

const agents = [
  "Jack",
  "Drummer",
  "Aurora",
  "Rust-E",
  "Static Rex",
  "Pizza Dave",
  "Lighter Larry",
  "Reality Shift",
  "Chillbot",
  "MINDBOT",
];

const faq = [
  {
    q: "Is this autonomous or human-assisted?",
    a: "The system performs autonomously by default, with human checkpoints for safety, pacing, and brand alignment.",
  },
  {
    q: "Can we use this for branded events?",
    a: "Yes. The prompt and phase strategy can be tuned for tone, audience profile, and activation goals.",
  },
  {
    q: "What do we need on-site?",
    a: "Stable network, audio output path, and a short technical rehearsal window. The operator guide defines a practical setup checklist.",
  },
  {
    q: "How fast can we run a pilot?",
    a: "Most teams can execute a guided pilot after one alignment session and a rehearsal pass.",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <div className="hero-mesh" />

      <header className="sticky top-0 z-50 border-b border-line/70 bg-canvas/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-8">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.24em] text-brand-strong uppercase"
          >
            Autonomous DJ
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
            <a href="#outcomes" className="hover:text-ink">
              Outcomes
            </a>
            <a href="#architecture" className="hover:text-ink">
              Architecture
            </a>
            <a href="#trust" className="hover:text-ink">
              Trust
            </a>
            <a href="#contact" className="hover:text-ink">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-strong"
          >
            Book a Pilot
          </a>
        </div>
      </header>

      <section className="mx-auto w-full max-w-6xl px-6 pt-16 pb-12 md:px-8 md:pt-24 md:pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="inline-flex items-center rounded-full border border-brand/20 bg-brand-soft px-3 py-1 text-xs font-semibold tracking-[0.15em] text-brand-strong uppercase">
              Premium AI Performance Platform
            </p>
            <h1 className="mt-6 text-4xl leading-tight font-semibold text-card-ink md:text-6xl">
              Turn live events into adaptive, cinematic AI DJ experiences.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Autonomous DJ blends multi-agent generation, live crowd response,
              and operator-safe reliability into one production-ready stack for
              festivals, livestreams, and branded activations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-strong"
              >
                Start Your Pilot
              </a>
              <a
                href="https://intergalactic-dj.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-brand/30 bg-white px-6 py-3 text-sm font-semibold text-brand-strong transition hover:border-brand/60"
              >
                Listen to Live Demo
              </a>
              <Link
                href="/guide"
                className="rounded-xl border border-line bg-canvas px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white"
              >
                Read Operator Guide
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "No plugin bloat",
                "Runbook included",
                "Replay-ready manifests",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="elevated-card glow-ring rounded-2xl p-6 md:p-7">
            <p className="text-xs font-semibold tracking-[0.14em] text-brand-strong uppercase">
              Live Session Snapshot
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-card-ink">
              Autonomous set control in one view.
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li className="rounded-xl border border-line bg-canvas px-4 py-3">
                Crowd Brain updates momentum every segment.
              </li>
              <li className="rounded-xl border border-line bg-canvas px-4 py-3">
                Scheduler rotates agents with anti-repeat logic.
              </li>
              <li className="rounded-xl border border-line bg-canvas px-4 py-3">
                Transition engine keeps handoffs smooth and intentional.
              </li>
              <li className="rounded-xl border border-line bg-canvas px-4 py-3">
                Manifest logs timeline for replay and QA.
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-6 md:px-8 md:pb-10">
        <div className="surface-card rounded-2xl px-5 py-5 md:px-7">
          <p className="text-xs font-semibold tracking-[0.14em] text-brand-strong uppercase">
            Built for teams running public-facing music experiences
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {useCases.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-white px-3 py-1 text-sm text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="outcomes" className="mx-auto w-full max-w-6xl px-6 py-14 md:px-8">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-brand-strong uppercase">
              Outcomes
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-card-ink md:text-4xl">
              Built to perform reliably when the room is live.
            </h2>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-brand/30 bg-white px-4 py-2 text-sm font-semibold text-brand-strong transition hover:border-brand/60"
          >
            Request Technical Walkthrough
          </a>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {outcomeStats.map((item) => (
            <article key={item.label} className="elevated-card rounded-2xl p-5">
              <p className="text-4xl leading-none font-semibold text-card-ink">
                {item.value}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-card-ink">
                {item.label}
              </h3>
              <p className="mt-2 text-sm text-muted">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="architecture"
        className="mx-auto w-full max-w-6xl px-6 py-14 md:px-8"
      >
        <p className="text-xs font-semibold tracking-[0.14em] text-brand-strong uppercase">
          Core Platform
        </p>
        <h2 className="mt-2 max-w-3xl text-3xl font-semibold text-card-ink md:text-4xl">
          Engineering fundamentals that protect flow, quality, and control.
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {pillars.map((item) => (
            <article key={item.title} className="elevated-card rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-card-ink">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-14 md:px-8">
        <p className="text-xs font-semibold tracking-[0.14em] text-brand-strong uppercase">
          Delivery Flow
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-card-ink md:text-4xl">
          From rehearsal to post-show intelligence.
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {workflow.map((item, index) => (
            <article key={item.title} className="surface-card rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-[0.14em] text-brand-strong uppercase">
                Step {index + 1}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-card-ink">{item.title}</h3>
              <p className="mt-3 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="trust" className="mx-auto w-full max-w-6xl px-6 py-14 md:px-8">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="elevated-card rounded-2xl p-6 md:p-7">
            <p className="text-xs font-semibold tracking-[0.14em] text-brand-strong uppercase">
              Trust Signals
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-card-ink">
              Deployment confidence for technical and creative teams.
            </h2>
            <ul className="mt-5 grid gap-3">
              {trustSignals.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-line bg-canvas px-4 py-3 text-sm text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="elevated-card rounded-2xl p-6 md:p-7">
            <p className="text-xs font-semibold tracking-[0.14em] text-brand-strong uppercase">
              Agent Roster
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-card-ink">
              10 personalities, one consistent brand experience.
            </h3>
            <div className="mt-5 grid grid-cols-2 gap-2 text-sm">
              {agents.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-line bg-canvas px-3 py-2 text-muted"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-14 md:px-8">
        <p className="text-xs font-semibold tracking-[0.14em] text-brand-strong uppercase">
          FAQ
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-card-ink md:text-4xl">
          Answers teams ask before launch.
        </h2>
        <div className="mt-7 space-y-3">
          {faq.map((item) => (
            <details
              key={item.q}
              className="surface-card rounded-xl px-5 py-4 text-card-ink"
            >
              <summary className="cursor-pointer list-none font-semibold">
                {item.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-6 pt-8 pb-20 md:px-8">
        <div className="elevated-card glow-ring rounded-2xl p-8 md:p-10">
          <p className="text-xs font-semibold tracking-[0.14em] text-brand-strong uppercase">
            Launch CTA
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl leading-tight font-semibold text-card-ink md:text-4xl">
            Bring Autonomous DJ to your next audience-facing event.
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Share your event format, audience size, and target vibe. We will map
            a pilot plan, rehearsal flow, and show-day operating checklist.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="mailto:booking@m1ndb0t.com?subject=Autonomous%20DJ%20Pilot"
              className="rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-strong"
            >
              Email booking@m1ndb0t.com
            </a>
            <Link
              href="/guide"
              className="rounded-xl border border-line bg-white px-6 py-3 text-sm font-semibold text-card-ink transition hover:bg-canvas"
            >
              Review Operator Guide
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-line/80 bg-white/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-3 px-6 py-6 text-sm text-muted md:flex-row md:items-center md:px-8">
          <p>Autonomous DJ Engine</p>
          <p>Production-ready AI music for live audiences.</p>
        </div>
      </footer>
    </main>
  );
}
