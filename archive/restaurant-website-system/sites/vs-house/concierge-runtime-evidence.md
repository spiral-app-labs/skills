# V's House — Concierge Runtime Evidence

- Date: 2026-05-04
- Focus: packaging blocker, concierge runtime behavior when no deployed API secret is present.
- Route: `app/api/chat/route.ts`
- Client: `components/AskConcierge.tsx`

## Change made

The concierge route now has a safe no-secret fallback instead of failing at module import or streaming an invisible error when `ANTHROPIC_API_KEY` is absent.

- `Anthropic` is instantiated lazily only after `process.env.ANTHROPIC_API_KEY` is present.
- If the key is missing, `/api/chat` returns a truthful server-sent-events reply grounded only in local V's House content: hours, address, reservation link, ordering link, phone, and menu item names.
- The client now surfaces streamed `error` frames instead of swallowing them as malformed SSE.

## Verification

Commands run from `restaurant-website-system/sites/vs-house`:

```bash
npm run typecheck
npm run build
npm run start -- --hostname 127.0.0.1 --port 3077
curl -sN -X POST http://127.0.0.1:3077/api/chat   -H 'content-type: application/json'   -d '{"messages":[{"role":"user","content":"When are you open and where are you located?"}]}'
```

Observed fallback stream:

```text
data: {"text":"V's House is open today from 10:30 to 21:00. For holiday or last seating questions, please call (682) 777-3690."}

data: {"done":true}
```

## Result

Local production runtime is verified without an API key. Final delivery still needs a deployed preview URL; once deployed, this same route should be smoke-tested on the preview URL.
