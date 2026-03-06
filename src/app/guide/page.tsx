import Link from "next/link";

export default function GuidePage() {
  const steps = [
    {
      title: "1) Run health profile",
      cmd: "python scripts/run_local_profile.py --profile health",
      note: "Confirms the core framework wiring, set registry, and local environment are healthy before a show.",
    },
    {
      title: "2) Run demo profile",
      cmd: "python scripts/run_local_profile.py --profile demo",
      note: "Generates an integration report so you can catch problems before the audience ever hears them.",
    },
    {
      title: "3) Validate report",
      cmd: "output/reports/demo_set_integration_report.json",
      note: "Check for ok=true and review warnings before promoting the setup to go-live status.",
    },
    {
      title: "4) Run your live set",
      cmd: "python dj.py run --set sets/rave_experience.json --output ./output",
      note: "Launch the selected blueprint, capture logs, and keep manifests for replay, QA, and promo material.",
    },
  ];

  const promotionNotes = [
    "Record short crowd-reaction clips from every show",
    "Post one recap reel within 24 hours while the hype is alive",
    "Keep a one-page technical rider ready for venues",
    "Collect promoter contact info while the room is still warm",
    "Track set URLs and system reports for social proof",
    "Keep branding consistent across landing page, stream, and deck",
  ];

  return (
    <main className="mx-auto w-full max-w-5xl px-6 pt-14 pb-20 md:px-8 md:pt-20">
      <header className="surface-card rounded-2xl px-6 py-6 md:px-8 md:py-8">
        <Link
          href="/"
          className="text-xs font-semibold tracking-[0.14em] text-brand-strong uppercase"
        >
          Back to Landing Page
        </Link>
        <h1 className="text-glow mt-3 text-4xl font-semibold text-card-ink md:text-5xl">
          Operator Guide
        </h1>
        <p className="mt-4 max-w-3xl text-muted-strong">
          Use this runbook before every Autonomous DJ event to verify reliability,
          reduce on-site risk, and keep your live workflow crisp under pressure.
        </p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-card-ink md:text-3xl">
          Core Workflow
        </h2>
        <div className="mt-5 space-y-4">
          {steps.map((step) => (
            <article key={step.title} className="elevated-card rounded-2xl p-5 md:p-6">
              <h3 className="text-lg font-semibold text-card-ink md:text-xl">
                {step.title}
              </h3>
              <pre className="code-panel mt-3 overflow-x-auto rounded-xl px-4 py-3 font-mono text-sm text-brand-strong">
{step.cmd}
              </pre>
              <p className="mt-3 text-sm text-muted-strong md:text-base">{step.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-card-ink md:text-3xl">
          Live Promotion Notes
        </h2>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {promotionNotes.map((note) => (
            <li
              key={note}
              className="surface-card rounded-xl px-4 py-3 text-sm text-muted-strong md:text-base"
            >
              {note}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
