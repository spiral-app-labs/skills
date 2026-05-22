# Mary's Mexican Grill — Mission Control API Access Check

- Checked at: 2026-05-06T05:52:19Z
- Base URL checked: `https://hq.ethantalreja.com`
- Lead endpoint: `GET /api/agency/leads/4416524d-0894-4e47-a4e7-880ba6579aa3`
- Result: `HTTP/2 401` without a bearer token, using `x-agency-runtime: openclaw`

## Conclusion

Mission Control is reachable at the trusted base URL and the agency lead route exists, but this runtime still cannot mirror the latest QA2 screenshot refresh / preview access recheck because a usable agency bearer token is not configured (`AGENCY_AUTONOMY_API_KEY` / `OPENCLAW_WEBHOOK_SECRET`). Raw Supabase writes were not used.

## Next unblock action

Provide/configure a valid agency bearer token for OpenClaw, then submit `restaurant-website-system/sites/marys-mexican-grill/mc-build-writeback-packaging-2026-05-05.json` through the official agency API.
