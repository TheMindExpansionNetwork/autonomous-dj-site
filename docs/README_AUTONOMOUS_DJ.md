# Autonomous DJ Engine — Project Overview

## Vision

Build an always-on, crowd-reactive AI DJ system that can perform as a livestream station, festival activation, and branded music experience.

## Core goals

1. Keep music continuous (no dead air)
2. React to crowd momentum in real time
3. Rotate distinct DJ personalities without repetitive loops
4. Log every set decision for replay, QA, and remix

## System architecture (v2)

- `core/crowd_state.py` — current energy/mystery/groove + history
- `core/personality.py` — per-agent style and constraints
- `core/scheduler.py` — picks next DJ + arc phase
- `audio/render_queue.py` — generation requests, retries, queue control
- `core/fallback.py` — safe loop fallback when generation fails
- `core/engine.py` — orchestration loop

## Runtime loop

1. Read crowd state
2. Resolve arc phase (intro/build/peak/cooldown)
3. Select DJ with anti-repeat logic
4. Build prompt using personality + phase
5. Render segment with retry policy
6. Trigger fallback if render misses SLA
7. Update crowd state
8. Append set manifest entry

## Data files

- `data/crowd_state.json`
- `data/dj_profiles.json`
- `sessions/<set_id>/set_manifest.json`

## Deployment model

- Frontend: Vercel-hosted Next.js site
- Backend: Python service (future) for orchestration APIs
- Storage: JSON now, move to DB/object storage during Beta

## Immediate next steps

- Implement scheduler simulation endpoint
- Add manifest write/read API
- Integrate render queue adapter for ACE Step pipeline
- Add health + readiness probes for live ops
