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

const highlights = [
  {
    title: "Real-time crowd adaptation",
    body: "Energy, mystery, and groove signals steer set direction every segment.",
  },
  {
    title: "No-silence reliability",
    body: "Fallback loops prevent dead air during generation delays or retries.",
  },
  {
    title: "Story-driven performance arcs",
    body: "Intro → build → peak → cooldown sequencing keeps sets cinematic.",
  },
  {
    title: "Replay-ready manifests",
    body: "Each session logs prompts and transitions for remix, analysis, and QA.",
  },
];

const architecture = [
  "Crowd Brain: tracks live state and momentum",
  "Scheduler: selects DJ + arc phase with anti-repeat logic",
  "Prompt Builder: injects personality + phase intent",
  "Render Queue: handles generation and retries",
  "Transition Engine: smooth cross-agent handoffs",
  "Set Manifest: complete timeline for replay/remix",
];

const liveChecklist = [
  "Run health profile before venue setup",
  "Run demo profile and verify report ok=true",
  "Prepare 15–30 minute fallback playlist",
  "Line-check audio output and limiter",
  "Record set manifests for each show",
  "Capture photos/video clips for social proof",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 inline-block rounded-full border border-cyan-400/40 px-3 py-1 text-xs text-cyan-300">
          INTERGALACTIC DJ // AUTONOMOUS ENGINE
        </p>
        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          Autonomous DJ Engine
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-zinc-300">
          A multi-agent AI DJ system that improvises in real time, reacts to crowd
          signals, and delivers uninterrupted musical journeys for livestreams,
          festivals, and branded activations.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://intergalactic-dj.vercel.app"
            className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black"
          >
            Listen Live
          </a>
          <a
            href="/guide"
            className="rounded-xl border border-cyan-500/50 px-5 py-3 font-semibold text-cyan-300"
          >
            Operator Guide
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-zinc-700 px-5 py-3 font-semibold"
          >
            Book Demo
          </a>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 py-6 md:grid-cols-2">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-zinc-300">{item.body}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {architecture.map((x) => (
            <li
              key={x}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4 text-zinc-200"
            >
              {x}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">Live Set Readiness Checklist</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {liveChecklist.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4 text-zinc-200"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-zinc-400">
          Full setup guide: <a className="text-cyan-300" href="/guide">/guide</a>
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">Agent Roster</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {agents.map((a) => (
            <div
              key={a}
              className="rounded-xl border border-zinc-800 bg-zinc-950 p-4"
            >
              {a}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-8">
          <h3 className="text-2xl font-bold">
            Bring Autonomous DJ to your next event
          </h3>
          <p className="mt-3 text-zinc-200">
            Festival activations, livestream programming, pop-up sound system sets,
            and AI-powered branded experiences.
          </p>
          <p className="mt-4 text-cyan-300">Contact: booking@m1ndb0t.com</p>
        </div>
      </section>
    </main>
  );
}
