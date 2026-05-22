# La Hacienda Mexican Restaurant — Mission Control API Access Check

- Checked at: 2026-05-06T04:47:10Z
- Base URL checked: `https://hq.ethantalreja.com`
- Lead endpoint: `GET /api/agency/leads/7cba3fe2-8f65-4516-b46b-05c2c07ab235`
- Result: `HTTP/2 401` without a bearer token, using `x-agency-runtime: openclaw`

## Conclusion

The trusted Mission Control base URL is reachable, but this runtime still cannot mirror La Hacienda local packaging evidence because `AGENCY_AUTONOMY_API_KEY` / `OPENCLAW_WEBHOOK_SECRET` is not configured with a usable agency bearer token. Raw Supabase writes were not used.

## Next unblock action

Provide/configure a valid agency bearer token for OpenClaw, then submit `restaurant-website-system/sites/la-hacienda-mexican-restaurant/mission-control-writeback-payload-2026-05-05.json` through the official agency API.
