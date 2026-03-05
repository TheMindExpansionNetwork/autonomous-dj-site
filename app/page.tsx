export default function Home() {
  const agents = [
    "Jack", "Drummer", "Aurora", "Rust-E", "Static Rex",
    "Pizza Dave", "Lighter Larry", "Reality Shift", "Chillbot", "MINDBOT"
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 inline-block rounded-full border border-cyan-400/40 px-3 py-1 text-xs text-cyan-300">
          INTERGALACTIC DJ // AUTONOMOUS ENGINE
        </p>
        <h1 className="text-5xl font-bold leading-tight md:text-7xl">Autonomous DJ Engine</h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-300">
          AI DJs that improvise in real time, react to crowd energy, and never stop the music.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="https://intergalactic-dj.vercel.app" className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black">
            Listen Live
          </a>
          <a href="#contact" className="rounded-xl border border-zinc-700 px-5 py-3 font-semibold">
            Book Demo
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Crowd Brain: tracks energy/mystery/groove",
            "Scheduler: selects DJ + arc phase",
            "ACE Step generation per segment",
            "Transition engine for smooth handoffs",
            "Fallback loops for no-silence reliability",
            "Set manifest logging for replay/remix"
          ].map((x) => (
            <li key={x} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4 text-zinc-200">{x}</li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold">Agent Roster</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {agents.map((a) => (
            <div key={a} className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">{a}</div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-8">
          <h3 className="text-2xl font-bold">Bring Autonomous DJ to your event</h3>
          <p className="mt-3 text-zinc-200">Festival activations, livestreams, branded experiences, and AI radio.</p>
          <p className="mt-4 text-cyan-300">Contact: booking@m1ndb0t.com</p>
        </div>
      </section>
    </main>
  );
}
