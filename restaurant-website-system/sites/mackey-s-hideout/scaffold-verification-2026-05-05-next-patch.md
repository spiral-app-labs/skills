# Mackey's Hideout scaffold verification — Next patch

## Context

Mackey's Hideout is still canonical `reviews` in Mission Control because agency API replay/writeback is blocked, but local audit/reviews/routing evidence and a non-canonical Bramble scaffold exist. This pass packages that scaffold for review without marking canonical fork/build, QA, or delivery complete.

## Change

- Preserved the local `bramble-01` Mackey's Hideout scaffold and support artifacts.
- Upgraded the scaffold's `next` dependency from `14.2.15` to exact `14.2.35` before shipping, matching the safer patch posture used on other packaged sites.

## Verification

Ran from `restaurant-website-system/sites/mackey-s-hideout`:

```text
npm install --save-exact next@14.2.35
npm run typecheck
npm run build
node -e "JSON.parse(require('fs').readFileSync('checklist.json','utf8')); console.log('json ok')"
```

Results:

- `npm run typecheck` passed.
- `npm run build` passed on Next.js `14.2.35`.
- Build generated `/`, `/_not-found`, and `/reserve`.
- `checklist.json` parsed successfully.

## Still not canonical complete

This verification does not complete the canonical fork/build or QA gates. Mission Control replay/writeback is still required, owner-confirmed hours remain pending, and official QA rounds plus public preview/delivery evidence are still outstanding.
