export default function GuidePage() {
  const steps = [
    {
      title: "1) Run health profile",
      cmd: "python scripts/run_local_profile.py --profile health",
      note: "Confirms core framework wiring and set registry are healthy.",
    },
    {
      title: "2) Run demo profile",
      cmd: "python scripts/run_local_profile.py --profile demo",
      note: "Generates integration report JSON with pass/fail status.",
    },
    {
      title: "3) Validate report",
      cmd: "output/reports/demo_set_integration_report.json",
      note: "Check ok=true before going live.",
    },
    {
      title: "4) Run your live set",
      cmd: "python dj.py run --set sets/rave_experience.json --output ./output",
      note: "Use your selected set blueprint and capture logs + manifest.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <a href="/" className="text-cyan-300">← Back</a>
        <h1 className="mt-4 text-4xl font-bold md:text-6xl">Operator Guide</h1>
        <p className="mt-4 max-w-3xl text-zinc-300">
          This is the practical runbook for preparing and operating live Autonomous DJ sets.
          Use this flow for upcoming pop-ups, venue demos, and festival pilots.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="text-2xl font-semibold">Core Workflow</h2>
        <div className="mt-6 space-y-4">
          {steps.map((s) => (
            <article key={s.title} className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <pre className="mt-3 overflow-x-auto rounded-lg bg-zinc-900 p-3 text-sm text-cyan-300">
{s.cmd}
              </pre>
              <p className="mt-3 text-zinc-300">{s.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <h2 className="text-2xl font-semibold">Live Promotion Notes</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            "Record short crowd-reaction clips from every show",
            "Post one recap reel per event within 24 hours",
            "Keep one-page technical rider ready for venues",
            "Collect emails/contacts from promoters on-site",
            "Track each set URL + report status for social proof",
            "Use consistent branding: Autonomous DJ Engine",
          ].map((item) => (
            <li key={item} className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-zinc-300">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
