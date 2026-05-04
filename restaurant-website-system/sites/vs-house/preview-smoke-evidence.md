# V's House — Vercel Preview Smoke Evidence

- Date: 2026-05-04
- PR: https://github.com/spiral-app-labs/skills/pull/1
- Vercel preview URL from PR comment: `https://skills-git-feat-agency-hear-42992d-ethan-ethantalrejas-projects.vercel.app`

## What was checked

The PR has a Vercel Preview Comments status marked success, and the Vercel bot posted a ready preview URL.

Command attempted:

```bash
curl -sS -L -o /tmp/vs-vercel-home.html -w '%{http_code} %{url_effective}\n' https://skills-git-feat-agency-hear-42992d-ethan-ethantalrejas-projects.vercel.app/
curl -sS -L -X POST https://skills-git-feat-agency-hear-42992d-ethan-ethantalrejas-projects.vercel.app/api/chat \
  -H 'content-type: application/json' \
  -d '{"messages":[{"role":"user","content":"Where are you located?"}]}'
```

Observed result:

- `GET /` returned `401` with Vercel `Authentication Required` deployment protection page.
- `POST /api/chat` also returned `401` with the same Vercel authentication page.
- Local production `/api/chat` fallback was already verified in `concierge-runtime-evidence.md`, but deployed smoke testing cannot complete until preview protection is bypassed or disabled for this URL.

## Result

A deployed preview URL exists, but it is not owner-shareable and cannot be externally smoke-tested from OpenClaw without Vercel auth/bypass. Treat this as a packaging blocker, not a code/build blocker.

## Next unblock action

Use one of:

1. Provide/enable a Vercel deployment-protection bypass token for this preview URL.
2. Disable Vercel preview deployment protection for this project/branch.
3. Create a public owner-shareable preview deployment for `vs-house` and smoke-test `/` plus `/api/chat` there.
