"use client";

import { useState } from "react";
import Link from "next/link";

const outcomeStats = [
  {
    value: "10",
    label: "Distinct DJ agents",
    detail: "Personality-specific voices for multi-hour sessions with recognizable identities.",
  },
  {
    value: "4",
    label: "Narrative set phases",
    detail: "Intro, build, peak, and cooldown sequencing keeps the room moving with intent.",
  },
  {
    value: "24/7",
    label: "Launch-ready continuity",
    detail: "Fallback logic, manifests, and operator handoff points prevent dead-air chaos.",
  },
];

const pillars = [
  {
    title: "Crowd-reactive decisions",
    body: "Energy, rhythm, and vibe signals steer each segment so the room never feels static or over-rehearsed.",
  },
  {
    title: "Dead-air resistant playback",
    body: "Fallback loops, retries, and continuity rules keep music moving while generation catches up.",
  },
  {
    title: "Operator-grade controls",
    body: "Human-safe runbooks, preflight checks, and intervention points keep the show manageable under pressure.",
  },
  {
    title: "Replay and remix ready",
    body: "Every session produces logs and manifests so you can audit, improve, and repurpose your strongest sets.",
  },
];

const workflow = [
  {
    title: "Preflight rehearsal",
    body: "Run health and demo profiles before load-in so you know the system is stable before the crowd arrives.",
  },
  {
    title: "Live orchestration",
    body: "Scheduler rotates personas across intro, build, peak, and cooldown without repetitive handoffs.",
  },
  {
    title: "Reliability layer",
    body: "Render queue, retries, and fallback material protect continuity when live generation gets weird.",
  },
  {
    title: "Post-show intelligence",
    body: "Manifest data captures timing, transitions, and outcomes so every event gets smarter than the last.",
  },
];

const trustSignals = [
  "Designed for festivals, livestreams, and branded activations",
  "Operator guide and launch checklist included",
  "Session-level logs for accountability and iteration",
  "Human override path for safety and pacing control",
];

const useCases = [
  "Festival side stages",
  "Immersive art spaces",
  "Livestream programming",
  "Brand activations",
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
    a: "The engine can perform autonomously, but the strongest launch setup includes human oversight for pacing, brand fit, and show-day confidence.",
  },
  {
    q: "Can we use this for branded events?",
    a: "Yes. Tone, characters, and set arc can all be tuned for audience profile, venue context, and campaign goals.",
  },
  {
    q: "What do we need on-site?",
    a: "Reliable network, clean audio output, and a short technical rehearsal window. The operator guide covers the practical checklist.",
  },
  {
    q: "What makes this launch-ready instead of just a demo?",
    a: "Operator workflow, fallback behavior, manifest logging, and human override design make it usable in real public environments.",
  },
];

export default function Home() {
  const [secretClicks, setSecretClicks] = useState(0);

  const handleSecretClick = () => {
    const newCount = secretClicks + 1;
    setSecretClicks(newCount);
    if (newCount >= 11) {
      window.location.href = "/matrix";
    }
  };

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
          <nav className="hidden items-center gap-7 text-sm text-muted-strong md:flex">
            <a href="#outcomes" className="hover:text-white">
              Outcomes
            </a>
            <a href="#architecture" className="hover:text-white">
              Architecture
            </a>
            <a href="#trust" className="hover:text-white">
              Trust
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="primary-button rounded-full px-4 py-2 text-sm font-semibold transition"
          >
            Book a Pilot
          </a>
        </div>
      </header>

      <section className="mx-auto w-full max-w-6xl px-6 pt-16 pb-12 md:px-8 md:pt-24 md:pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="inline-flex items-center rounded-full border border-brand-strong/25 bg-brand-soft px-3 py-1 text-xs font-semibold tracking-[0.15em] text-brand-strong uppercase">
              Cyber-Rave Performance Platform
            </p>
            <h1 className="text-glow mt-6 max-w-4xl text-4xl leading-tight font-semibold text-card-ink md:text-6xl">
              Launch an AI DJ system that feels alive, reactive, and stage-ready.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-strong">
              Autonomous DJ blends multi-agent generation, narrative set design,
              crowd-reactive flow, and operator-safe controls into one launchable
              platform for festivals, livestreams, and branded experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="primary-button rounded-xl px-6 py-3 text-sm font-semibold transition"
              >
                Start Your Pilot
              </a>
              <a
                href="https://intergalactic-dj.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="secondary-button rounded-xl px-6 py-3 text-sm font-semibold transition"
              >
                Listen to Live Demo
              </a>
              <Link
                href="/guide"
                className="secondary-button rounded-xl px-6 py-3 text-sm font-semibold transition"
              >
                Read Operator Guide
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Dark-mode launch polish",
                "Runbook included",
                "Replay-ready manifests",
              ].map((item) => (
                <span
                  key={item}
                  className="neon-pill rounded-full px-3 py-1 text-xs font-medium"
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
              Autonomous set control in one command surface.
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-muted-strong">
              <li className="code-panel rounded-xl px-4 py-3">
                Crowd Brain updates momentum every segment.
              </li>
              <li className="code-panel rounded-xl px-4 py-3">
                Scheduler rotates agents with anti-repeat logic.
              </li>
              <li className="code-panel rounded-xl px-4 py-3">
                Transition engine keeps handoffs smooth and intentional.
              </li>
              <li className="code-panel rounded-xl px-4 py-3">
                Manifest logs the full timeline for replay and QA.
              </li>
            </ul>
            <button
              onClick={handleSecretClick}
              className="mt-4 w-full rounded-lg border border-line px-3 py-2 text-xs text-muted opacity-40 transition hover:border-brand-strong/40 hover:text-brand-strong hover:opacity-100"
              title="System diagnostics"
            >
              {secretClicks > 0 ? `Diagnostic: ${secretClicks}/11` : "System Check"}
            </button>
          </aside>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-6 md:px-8 md:pb-10">
        <div className="surface-card rounded-2xl px-5 py-5 md:px-7">
          <p className="text-xs font-semibold tracking-[0.14em] text-brand-strong uppercase">
            Built for teams shipping public-facing music experiences
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {useCases.map((item) => (
              <span
                key={item}
                className="neon-pill rounded-full px-3 py-1 text-sm"
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
              Built to perform when the room is live and the stakes are real.
            </h2>
          </div>
          <a
            href="#contact"
            className="secondary-button rounded-full px-4 py-2 text-sm font-semibold transition"
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
              <p className="mt-2 text-sm text-muted-strong">{item.detail}</p>
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
          Engineering fundamentals that protect flow, quality, and operator control.
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {pillars.map((item) => (
            <article key={item.title} className="elevated-card rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-card-ink">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-strong">{item.body}</p>
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
              <p className="mt-3 text-muted-strong">{item.body}</p>
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
              Confidence for technical teams, creatives, and venue partners.
            </h2>
            <ul className="mt-5 grid gap-3">
              {trustSignals.map((item) => (
                <li
                  key={item}
                  className="code-panel rounded-xl px-4 py-3 text-sm text-muted-strong"
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
              10 personalities, one coherent autonomous show system.
            </h3>
            <div className="mt-5 grid grid-cols-2 gap-2 text-sm">
              {agents.map((item) => (
                <div
                  key={item}
                  className="code-panel rounded-lg px-3 py-2 text-muted-strong"
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
          What teams want to know before launch.
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
              <p className="mt-3 text-sm leading-relaxed text-muted-strong">{item.a}</p>
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
          <p className="mt-4 max-w-2xl text-muted-strong">
            Share your format, audience size, and target vibe. We'll map a pilot,
            a rehearsal plan, and a show-day operating checklist that actually works.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="mailto:booking@m1ndb0t.com?subject=Autonomous%20DJ%20Pilot"
              className="primary-button rounded-xl px-6 py-3 text-sm font-semibold transition"
            >
              Email booking@m1ndb0t.com
            </a>
            <Link
              href="/guide"
              className="secondary-button rounded-xl px-6 py-3 text-sm font-semibold transition"
            >
              Review Operator Guide
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-line/80 bg-black/20">
        <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-3 px-6 py-6 text-sm text-muted-strong md:flex-row md:items-center md:px-8">
          <p>Autonomous DJ Engine</p>
          <p>Production-ready AI music for live audiences.</p>
        </div>
      </footer>
    </main>
  );
}
