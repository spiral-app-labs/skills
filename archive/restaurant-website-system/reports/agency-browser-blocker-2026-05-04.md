# Agency Browser Blocker — 2026-05-04

## Summary

All current Mission Control website-agency epics are either already blocked or now waiting on the same environment gate: required in-app browser evidence cannot be captured because OpenClaw cannot find a Chromium-family executable on this host.

This blocks the canonical website-agency gates that require browser proof:

- desktop/mobile screenshots
- live DOM/text snapshots
- Google Maps verification of official website, hours, status, and rating
- Google Reviews capture using the **Highest** filter with 30 written reviews
- QA screenshots for preview builds

## Browser diagnostic evidence

OpenClaw browser doctor result, captured from the host profile:

- Browser plugin: enabled
- Profile: `openclaw` via CDP
- Chromium executable: warning — `No Chromium executable detected`
- CDP HTTP: browser is not currently running
- CDP WebSocket: browser is launchable but not running
- Detected executable path: `null`
- Chosen browser: `null`
- CDP URL: `http://127.0.0.1:18800`
- Sandbox browser check: unavailable — `Enable agents.defaults.sandbox.browser.enabled or use target="host" if allowed.`

OpenClaw's fix hint: install Chrome/Chromium/Brave/Edge or set `browser.executablePath`.

Local executable probe found no installed Chrome/Chromium/Brave/Edge app at the expected macOS paths. `/usr/bin/open` exists, but no supported browser binary was found.

## Affected current agency roots

These Mission Control website root tasks remain blocked on this browser gate or on a deliberate lead-fit blocker:

- `0ee079ce-2e26-4d44-8fdf-96e0db2e4047` — Mary's Mexican Grill — `reviews`
- `41da188d-4629-4cb2-91f3-6be31d6b9b6d` — VS House — `qa_round_1`
- `35f58383-0074-4a64-85cc-46ea2cfcd6bb` — Winestock Market & Lounge — `blocked`
- `3ae4091c-c686-4270-8298-afd0cc5c913b` — Als Cafe and Creamery — `blocked` / lead-fit skip
- `c2dc290b-4a51-4d61-96ff-ec0a4ccc52dc` — Antojitos Mexicanos La Fonda — `auditing`
- `2d9738de-cfb4-4528-a017-b49ec7119785` — Ciao Baby! — `auditing`
- `0d4123df-83b0-4d81-bc75-88263ebb402b` — Dino's Pizza & Pasta — `auditing`
- `c98d74ad-1a44-4df4-b313-bd20d675ae71` — Golden Rolls — `auditing`
- `fd7f4976-daac-42aa-8c9a-1ddb09a9d12f` — La Hacienda Mexican Restaurant — `auditing`
- `503320f6-a3e2-4286-887b-a7900ffaaed8` — Mackey's Hideout — `auditing`
- `6eb6cf29-eaf5-4751-8aab-3dc5f827e40e` — Main Street Tacos — `auditing`
- `cc4330f0-b3e9-4ed5-8036-292649576916` — Restaurante Hondureño Bustillo Matute — `auditing`
- `28641d8b-ed9c-4fc3-9326-9c3436bbdc31` — Snuggery River Roadhouse — `auditing`
- `e6c4701f-c3f6-49f6-aab3-e3ce56ece6cc` — Sofia's Place Restaurant — `auditing`
- `216314e9-4af6-4f99-92ab-54e7912b9173` — Strawberry Moon — `auditing`
- `b5ce710c-c4b4-431e-a258-82fb71ab60a0` — Sushi U — `auditing`
- `b19181d6-a00f-4d82-9c38-707c9dcb5372` — Tasty Bistro — `auditing`
- `173436b8-bcc1-4ebd-85ac-44b2541409dc` — Tin Man's Pub — `auditing`
- `779ffaee-407f-4ad1-a87c-cece1392a57c` — Your Sister's Tomato — `auditing` / nurture-verify only

## Recommended unblock

Pick one:

1. Install or expose a supported Chromium-family browser on this host.
2. Set OpenClaw `browser.executablePath` to an existing supported browser binary.
3. Enable the sandbox browser (`agents.defaults.sandbox.browser.enabled`) if that is the preferred capture environment.

After browser access is restored, resume in this order:

1. Mary's Mexican Grill reviews gate — Highest-filter 30 written Google reviews.
2. VS House QA round 1 screenshots/evidence.
3. Current-site audit screenshots/DOM for the in-progress audit backlog.

## Notes

Source/web-fetch audits and local checklist artifacts have been created for the queued leads, but the agency state machine should not mark those canonical gates complete until browser evidence is captured and mirrored to Mission Control.
