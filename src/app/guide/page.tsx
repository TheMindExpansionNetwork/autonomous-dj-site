import Link from "next/link";

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
      note: "Use your selected set blueprint and capture logs plus manifest.",
    },
  ];

  const promotionNotes = [
    "Record short crowd-reaction clips from every show",
    "Post one recap reel per event within 24 hours",
    "Keep one-page technical rider ready for venues",
    "Collect emails and contacts from promoters on-site",
    "Track each set URL plus report status for social proof",
    "Use consistent branding: Autonomous DJ Engine",
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
        <h1 className="mt-3 text-4xl font-semibold text-card-ink md:text-5xl">
          Operator Guide
        </h1>
        <p className="mt-4 max-w-3xl text-muted">
          Use this runbook before every Autonomous DJ event to verify reliability,
          reduce on-site risk, and keep your live set workflow predictable.
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
              <pre className="mt-3 overflow-x-auto rounded-xl border border-line bg-canvas px-4 py-3 font-mono text-sm text-brand-strong">
{step.cmd}
              </pre>
              <p className="mt-3 text-sm text-muted md:text-base">{step.note}</p>
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
              className="surface-card rounded-xl px-4 py-3 text-sm text-muted md:text-base"
            >
              {note}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
