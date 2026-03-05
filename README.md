# Autonomous DJ Site

Promo + technical showcase site for the **Autonomous DJ Engine**.

Live: https://autonomous-dj-site.vercel.app  
Repo: https://github.com/TheMindExpansionNetwork/autonomous-dj-site

## What this project contains

- Marketing homepage for the Autonomous DJ concept
- High-level architecture and operational flow
- Technical planning docs for v2 backend modules
- SEO/social metadata for better link previews

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm start
```

## Deploy

```bash
npx vercel --prod --yes
```

## Documentation

- `AUTONOMOUS_DJ_V2_SPEC.md` — concise v2 scaffold
- `docs/README_AUTONOMOUS_DJ.md` — project overview + architecture
- `docs/ROADMAP.md` — delivery phases
- `docs/API_CONTRACT.md` — planned API endpoints
- `data/dj_profiles.json` — 10-agent profile seed data

## Next build targets

- Hook real crowd-state telemetry into scheduler decisions
- Connect render queue to generation endpoints
- Persist set manifests for replay analytics and remix tooling
- Add auth/rate-limits for external API access
