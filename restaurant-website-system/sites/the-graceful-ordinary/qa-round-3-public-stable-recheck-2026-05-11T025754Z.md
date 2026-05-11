# The Graceful Ordinary — QA Round 3 Public Preview Recheck BLOCKED

- Date: 2026-05-11T02:57:54Z
- Gate: `qa_round_3`
- MC root task: `377dcee1-820a-4d94-a5b1-0740be57c92c`
- Public stable URL tested: `https://graceful-ordinary-redesign.vercel.app/`
- PR/auth preview tested: `https://skills-git-feat-graceful-or-b80ef9-ethan-ethantalrejas-projects.vercel.app/`

## Result

Still blocked. The stable public URL is reachable, but it still serves stale/factually unsafe proof copy. The PR preview remains behind Vercel Authentication (`401`), so there is still no verified public/shareable URL that reflects the safe local v2 source.

## HTTP findings

Evidence file:

- `restaurant-website-system/sites/the-graceful-ordinary/scrapes/graceful-public-recheck-2026-05-11T025754Z.txt`

Findings:

- PR/auth preview `/`: `HTTP/2 401`
- PR/auth preview `/menu`: `HTTP/2 401`
- Stable public `/`: `HTTP/2 200`
- Stable public `/menu`: `HTTP/2 200`

## DOM marker scan

Evidence file:

- `restaurant-website-system/sites/the-graceful-ordinary/scrapes/qa-round-3-public-stable-dom-marker-recheck-2026-05-11T025754Z.txt`

Markers in current stable public HTML:

- `AAA Three-Diamond`: **present**
- `4.8★`: **present**
- `200+ REVIEWS`: absent in this exact HTML scan
- `TRIPADVISOR`: absent in this exact HTML scan
- `Chris and Megan Curren`: **absent**
- `Kane County Choice Awards`: **absent**
- `Ask Graceful`: **absent**
- `Maytag Bleu Cheese`: **absent**

## Local source contrast

The local v2 source still contains the safer/source-backed markers that are missing from the public stable page:

- `Chris and Megan Curren`
- `Kane County Choice Awards`
- `Ask Graceful`
- `Maytag Bleu Cheese`

The stale public page still exposes unsupported `AAA Three-Diamond` and `4.8★` proof claims, so it is not safe for Ethan to share with an owner.

## Required unblock

1. Redeploy or alias the stable public URL to the safe local v2 source, **or** make the PR preview public/shareable with an approved Vercel bypass.
2. Rerun QA round 3 against the public URL.
3. Confirm unsupported markers are gone and local v2 markers are present.
4. Mirror QA/build writeback through protected MC once agency auth is available.

## MC writeback status

No protected MC writeback was attempted because the heartbeat runtime still lacks `AGENCY_AUTONOMY_API_KEY` / `OPENCLAW_WEBHOOK_SECRET`.
