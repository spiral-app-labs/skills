# The Graceful Ordinary — QA Round 3 Blocker

- Date: 2026-05-06
- Gate: `qa_round_3`
- Status: blocked before final sell-readiness pass
- Local preview tested: `http://127.0.0.1:3025`
- Public preview recorded in MC: `https://graceful-ordinary-redesign.vercel.app`

## Blocker

The public Vercel preview is stale and does not reflect the local v2/QA2 source. A live check of `https://graceful-ordinary-redesign.vercel.app/` returned HTTP 200, but the page still includes unsupported/stale content such as `AAA Three-Diamond`, and does not include local evidence-critical changes such as the Graceful Ordinary concierge (`Ask Graceful`) or local menu/proof updates (`Maytag Bleu Cheese`).

Final sell-readiness QA cannot pass until the public preview URL is redeployed or replaced with an updated preview URL that reflects the local source.

## What was already completed locally

- Top-three improvements implemented locally with before/after evidence.
- Truth-safe Graceful Ordinary concierge implemented locally with screenshots and transcript.
- Pitch doc and battle cards created.
- QA round 1 passed after source-fidelity and build correctness fixes.
- QA round 2 passed after mobile conversion/polish fixes.
- `npm run typecheck` passed.
- `npm run build` passed.

## Evidence paths

- QA round 1: `restaurant-website-system/sites/the-graceful-ordinary/qa-round-1.md`
- QA round 2: `restaurant-website-system/sites/the-graceful-ordinary/qa-round-2.md`
- Top-three improvements: `restaurant-website-system/sites/the-graceful-ordinary/top-3-improvements.md`
- Concierge evidence: `restaurant-website-system/sites/the-graceful-ordinary/concierge-test-transcript.md`
- Pitch doc: `restaurant-website-system/sites/the-graceful-ordinary/pitch-doc.md`
- Battle cards: `restaurant-website-system/sites/the-graceful-ordinary/battle-cards.md`
- Local QA2 screenshots: `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-2/desktop-full.png`, `restaurant-website-system/sites/the-graceful-ordinary/screenshots/qa-round-2/mobile-full.png`

## Next unblock action

Redeploy or replace the public preview URL with the local v2 source, then re-run QA round 3 against the updated public preview. Do not mark packaging or delivered until QA round 3 sees the updated public preview and Mission Control contains all evidence paths.
