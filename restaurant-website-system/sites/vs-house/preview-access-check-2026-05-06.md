# V's House — Preview Access Check

- Checked at: 2026-05-06T09:39:40Z
- Preview URL from PR #1: `https://skills-git-feat-agency-hear-42992d-ethan-ethantalrejas-projects.vercel.app`
- `GET /` result: `HTTP/2 401` from Vercel with `Authentication Required` HTML and `_vercel_sso_nonce` cookie.
- `POST /api/chat` result: `401` from the same protected preview.
- Verdict: **blocked / not owner-shareable**.

## Implication

The deployed preview exists, but Vercel deployment protection still prevents unauthenticated smoke testing of both the homepage and concierge API. Do not send this URL to the owner. Final delivery needs a public preview URL, Vercel protection bypass, or authenticated smoke-test evidence from Ethan.

## Next unblock action

Configure public/shareable preview access or provide a Vercel protection bypass token, then smoke-test both `/` and `/api/chat` from a no-cookie environment and mirror the evidence to Mission Control.
