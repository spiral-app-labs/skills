# Ciao Baby! QA round 2

Date: 2026-05-04  
Stage: `qa_round_2`  
Local preview: `http://127.0.0.1:3084`  
Template: `gusto-01`

## Scope

QA Round 2 focused on sellability, mobile polish, customer-facing language, CTA clarity, and factual-safety polish after QA1.

## Verification commands

- `npm run typecheck` — passed
- `npm run build` — passed, including dynamic `/api/concierge`
- `CAPTURE_LABEL=qa-round-2 PREVIEW_URL=http://127.0.0.1:3084 CHROME_CDP_URL=http://127.0.0.1:18800 node scrapes/capture-preview-evidence.mjs` — passed after fixes

## Findings and fixes

### Finding 1 — Customer-facing copy still sounded internal in places

- Initial QA2 issue: labels such as “Private-party proof,” “Planning helper,” “Source-backed answers,” and “deterministic” felt like build/QA language.
- Fixes:
  - `Private-party proof` became `Private parties`.
  - Concierge UI labels now say `Quick answers`, `Before you call`, `Simple answers`, and `careful`.
  - Concierge helper copy now uses guest-facing wording instead of “preview concierge/source-backed” jargon.
- Result: visual re-check passed with no blocker.

### Finding 2 — Contact page CTA clutter

- Initial QA2 issue: contact had repeated call/directions/source CTAs and internal domain-source actions.
- Fixes:
  - Removed the extra four-button handoff grid from the right contact card.
  - Kept call/directions high in the visit card.
  - Refocused the right card on private-party context plus one `Call about private parties` CTA.
  - Removed public-facing source/domain CTA labels.
- Result: contact mobile screenshot is clearer and lower-clutter.

### Finding 3 — Private-party image crop

- Initial QA2 issue: exterior/logo crop looked awkward on the private-party card.
- Fix: switched the private-party teaser image to a dining-room image that better supports family meals/private-party context.
- Result: visual re-check found the private-party image acceptable.

### Finding 4 — Footer and blank-space polish

- Initial QA2 issue: footer felt long/repetitive and mobile screenshot suggested a large dark gap.
- Fixes:
  - Shortened footer spacing.
  - Replaced `Restaurant` / `Current site` footer labels with `Visit` / `Call`.
- Result: QA2 can pass. Caveat remains to confirm any apparent post-footer blank area is screenshot/full-page capture behavior and not visible as a live device issue.

## Browser capture results

Evidence file: `scrapes/qa-round-2-browser-checks-2026-05-04.json`

- `/` desktop/mobile: rendered, expected H1 present, zero horizontal overflow offenders
- `/menu` desktop/mobile: rendered, expected H1 present, zero horizontal overflow offenders
- `/about` desktop/mobile: rendered, expected H1 present, zero horizontal overflow offenders
- `/contact` desktop/mobile: rendered, expected H1 present, zero horizontal overflow offenders

Screenshot manifest: `screenshot-inventory-qa-round-2-2026-05-04.json`

## QA2 result

Pass with caveats:

- Owner still needs to verify preferred domain, exact current hours, and any changed menu prices before final delivery.
- Confirm phone/address/directions behavior on a real device before final packaging.
- If the large dark area after the homepage footer appears in a manual mobile browser, trim it again before QA3/delivery.

## Evidence

- `restaurant-website-system/sites/ciao-baby/qa-round-2.md`
- `restaurant-website-system/sites/ciao-baby/scrapes/qa-round-2-browser-checks-2026-05-04.json`
- `restaurant-website-system/sites/ciao-baby/screenshot-inventory-qa-round-2-2026-05-04.json`
- `restaurant-website-system/sites/ciao-baby/screenshots/qa-round-2-home-desktop-2026-05-04.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/qa-round-2-home-mobile-2026-05-04.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/qa-round-2-menu-desktop-2026-05-04.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/qa-round-2-menu-mobile-2026-05-04.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/qa-round-2-about-desktop-2026-05-04.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/qa-round-2-about-mobile-2026-05-04.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/qa-round-2-contact-desktop-2026-05-04.png`
- `restaurant-website-system/sites/ciao-baby/screenshots/qa-round-2-contact-mobile-2026-05-04.png`
