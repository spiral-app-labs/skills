# The Graceful Ordinary — PR Preview Blocker

- Date: 2026-05-06
- PR: https://github.com/spiral-app-labs/skills/pull/83
- Vercel PR preview: https://skills-git-feat-graceful-or-b80ef9-ethan-ethantalrejas-projects.vercel.app
- Gate: `qa_round_3`

## Progress

A clean branch/PR was created from `origin/main` to isolate The Graceful Ordinary v2 source and avoid mixing unrelated local work:

- Branch: `feat/graceful-ordinary-v2-preview`
- PR: https://github.com/spiral-app-labs/skills/pull/83
- Verification in clean worktree:
  - `npm ci`
  - `npm run typecheck`
  - `npm run build`

Vercel created a PR preview and reported it Ready in the PR comment.

## Current blocker

The PR preview URL returns HTTP 401 / Vercel authentication protection for `/`, `/menu`, `/about`, and `/contact` when fetched without credentials. Because the URL is not publicly/shareably accessible, QA round 3 and founder-facing delivery still cannot pass.

The stale production-style preview `https://graceful-ordinary-redesign.vercel.app` must also not be used for delivery because it still contains stale unsupported content and does not reflect local v2.

## Required unblock

Make the PR preview public/shareable or configure an approved preview bypass for QA/founder review, then rerun QA round 3 against the accessible public preview. Only after QA3 passes should packaging/delivery proceed.
