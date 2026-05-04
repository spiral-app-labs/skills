# Mary's Mexican Grill build evidence - 2026-05-04

## Commands run

1. `npm ci`
2. `npm run typecheck`
3. `npm run build`
4. `npm audit --json`

## Results

- `npm ci` succeeded and installed packages from `package-lock.json`.
- `npm run typecheck` succeeded (`tsc --noEmit`).
- `npm run build` succeeded with Next.js 14.2.35.
- Top-three improvement verification is now covered locally in `top-3-improvements-2026-05-04.md` and `mc-build-writeback-top-3-improvements-2026-05-04.json`.
- Upgraded `next` from 14.2.15 to 14.2.35 to remove the critical audit finding available within the current Next 14 line.
- `npm audit` still reports 2 findings (1 moderate, 1 high) with `fixAvailable` requiring `next@16.2.4` / a semver-major framework upgrade; defer to a dependency-hardening pass before production deploy.
- The standalone `lint` script was removed because this fork did not include an ESLint config and `next lint` prompts interactively. The successful `next build` still ran Next's built-in lint/type validity step.

## Successful build summary

```text
Route (app)                              Size     First Load JS
┌ ○ /                                    37 kB           146 kB
├ ○ /_not-found                          875 B          88.2 kB
├ ○ /about                               206 B           109 kB
├ ƒ /api/chat                            0 B                0 B
├ ○ /contact                             206 B           109 kB
├ ○ /menu                                206 B           109 kB
└ ○ /news                                206 B           109 kB
+ First Load JS shared by all            87.3 kB
```

## Notes

- First fork/build is local and ready for PR review.
- Mission Control writeback remains local-only because `AGENCY_AUTONOMY_API_KEY` and `OPENCLAW_WEBHOOK_SECRET` are unavailable in this runtime.
