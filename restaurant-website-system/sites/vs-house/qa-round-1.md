# V's House — QA Round 1

- Round: 1
- Focus: factual accuracy + source fidelity
- Gate: `qa_round_1`
- Date: 2026-05-04
- Site slug: `vs-house`
- MC parent task: `41da188d-4629-4cb2-91f3-6be31d6b9b6d`

## Checks performed

- Reviewed `content.ts` against `audit.md`, `pitch-doc.md`, `battle-cards.md`, and official conversion links.
- Checked high-risk claims: hours, late-night language, family heritage, review/rating counts, press mentions, 24-hour pho, Toast order/reservation handoffs.
- Rebuilt the local Next.js preview after edits.
- Re-ran TypeScript validation after build regenerated `.next/types`.

## Findings

### Finding 1 — Fixed unsupported late-night bar claim

- Location: `content.ts` hero pitch.
- Old copy: `A Saigon-coded bar that pours past midnight.`
- Why it failed: V's House public hours in the audit and content source show Sun–Thu close at 9 PM and Fri–Sat close at 10 PM. "Past midnight" was not supported and would overpromise.
- Fix applied: changed the line to `A Saigon-coded bar for dinner, happy hour, and Vietnamese-coffee cocktails.`

### Finding 2 — Heritage and review claims remain source-backed

- `since 1982` / three-generation Vu family story is supported by the audit's Fort Worth Magazine / family-history evidence.
- 4.4★ Google / 1,154 reviews and 4.6★ OpenTable / 116 diners are carried from audit evidence and `content.ts` ratings.
- Toast reservation, Toast ordering, phone, directions, gift card, Instagram, Facebook, OpenTable, Google, Yelp, Fort Worth Magazine, and Dallas Observer links are preserved in `content.ts`.

### Finding 3 — Screenshot capture still blocked in this environment

- OpenClaw managed browser cannot start on this host (`No supported browser found`).
- QA Round 1 therefore has source/build evidence but not fresh browser screenshots yet.
- Next unblock action: enable browser access or run a Playwright/Chromium capture path for mobile + desktop screenshots before final delivery.

## Verification evidence

- `npm ci` completed and installed dependencies.
- `npm run build` passed after the content fix.
- `npm run typecheck` passed after build regenerated `.next/types`.

## Result

QA Round 1 is materially advanced: factual issue found and fixed; build/typecheck pass. Keep the MC task in `qa_round_1` until fresh screenshots can be attached or a screenshot blocker is formally accepted for this round.
