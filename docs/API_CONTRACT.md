# Autonomous DJ API Contract (Planned)

Base URL (example): `/api/v1`

## 1) Crowd State

### GET `/crowd-state`
Returns current state snapshot.

```json
{
  "energy": 0.72,
  "mystery": 0.45,
  "groove": 0.81,
  "last_updated": "2026-03-05T09:00:00Z"
}
```

### PATCH `/crowd-state`
Partial update from telemetry/operator controls.

```json
{
  "energy": 0.8,
  "source": "operator"
}
```

## 2) Scheduler

### POST `/scheduler/next`
Returns next DJ + phase recommendation.

Request:
```json
{
  "recent_djs": ["Jack", "Aurora"],
  "target_duration_sec": 60
}
```

Response:
```json
{
  "phase": "build",
  "dj": "Static Rex",
  "reason": "energy rising + anti-repeat rules"
}
```

## 3) Render Queue

### POST `/render/jobs`
Enqueue a generation request.

```json
{
  "dj": "Static Rex",
  "phase": "build",
  "prompt": "high-voltage rave lift, 128 bpm, peak tension",
  "duration_sec": 60,
  "set_id": "set_20260305_01"
}
```

### GET `/render/jobs/{job_id}`
Check status.

```json
{
  "job_id": "job_123",
  "status": "completed",
  "audio_url": "https://...",
  "latency_ms": 18200
}
```

## 4) Set Manifest

### POST `/sessions/{set_id}/manifest`
Append a timeline event.

```json
{
  "ts": "2026-03-05T09:02:10Z",
  "dj": "Static Rex",
  "phase": "build",
  "job_id": "job_123",
  "fallback_used": false
}
```

### GET `/sessions/{set_id}/manifest`
Return ordered manifest entries.

## Reliability notes

- All write endpoints should support idempotency keys
- Render queue should expose timeout + retry metadata
- Fallback activation must be logged explicitly for auditability
