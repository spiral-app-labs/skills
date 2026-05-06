# V's House — Mission Control API Access Check

- Checked at: 2026-05-06T09:39:41Z
- Base URL checked: `https://hq.ethantalreja.com`
- Lead endpoint: `GET /api/agency/leads/1006c1ea-5a06-4703-9994-117bc90d9dba`
  - Result: `HTTP/2 401` without bearer auth, using `x-agency-runtime: openclaw`
- Build endpoint: `GET /api/agency/leads/1006c1ea-5a06-4703-9994-117bc90d9dba/build`
  - Result: `HTTP/2 405`, confirming the build route now exists but requires the proper method/auth.

## Conclusion

Mission Control is reachable at the trusted base URL and the build route now exists. This runtime still cannot mirror V's House packaging evidence because a usable agency bearer token is not configured (`AGENCY_AUTONOMY_API_KEY` / `OPENCLAW_WEBHOOK_SECRET`). Raw Supabase writes were not used.

## Next unblock action

Provide/configure a valid agency bearer token for OpenClaw, then submit `restaurant-website-system/sites/vs-house/mc-writeback-payload-2026-05-04.json` through the official agency API, including the updated preview and MC access-check evidence.
