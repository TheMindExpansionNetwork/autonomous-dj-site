# Autonomous DJ v2 Spec

## Core modules
- core/crowd_state.py
- core/personality.py
- core/scheduler.py
- audio/render_queue.py
- core/fallback.py
- core/engine.py

## Data files
- data/crowd_state.json
- data/dj_profiles.json
- sessions/<set_id>/set_manifest.json

## Loop
1. Read crowd state
2. Determine arc phase (intro/build/peak/cooldown)
3. Pick DJ (avoid repeats)
4. Build prompt
5. Render with retry
6. If fail, use fallback loop
7. Update crowd state
8. Append manifest entry
