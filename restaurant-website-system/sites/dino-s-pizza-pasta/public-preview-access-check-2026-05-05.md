# Dino's Pizza & Pasta — Public Preview Access Check

- Checked at: 2026-05-05T22:32:52Z
- PR: https://github.com/spiral-app-labs/skills/pull/42
- Vercel preview from PR comment: https://skills-git-feature-dino-piz-720266-ethan-ethantalrejas-projects.vercel.app
- Result: **blocked / not owner-shareable**
- Evidence: unauthenticated `curl -I -L` returned `HTTP/2 401` again at 2026-05-05T22:32:52Z from Vercel with `Authentication Required` HTML and `_vercel_sso_nonce` cookie.

## Implication

The preview exists and is deployed, but it is protected by Vercel SSO. Do not send this URL to the restaurant owner. Final delivery still needs either public preview access or a different shareable deployment URL.

## Next unblock action

Configure Vercel preview protection/public sharing for this deployment or create a public deployment, then re-run a no-cookie access check and update Mission Control through the agency API.
