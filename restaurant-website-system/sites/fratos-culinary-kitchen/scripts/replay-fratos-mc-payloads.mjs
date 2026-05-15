#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const SITE_DIR = path.resolve(path.dirname(__filename), '..');
const LEAD_ID = 'cec3f7af-ab8d-4785-af76-e57e743cdf25';
const BASE_URL = (process.env.MC_API_BASE_URL || process.env.HQ_BASE || 'https://hq.ethantalreja.com').replace(/\/$/, '');
const APPLY = process.argv.includes('--apply');
const TOKEN = process.env.AGENCY_AUTONOMY_API_KEY || process.env.OPENCLAW_WEBHOOK_SECRET || '';

const operations = [
  ['PATCH', `/api/agency/leads/${LEAD_ID}/build`, 'mc-build-writeback-top-3-improvements-2026-05-08-payload.json'],
  ['POST', '/api/heartbeat', 'mc-heartbeat-fratos-top-3-improvements-complete-2026-05-08-payload.json'],
  ['PATCH', `/api/agency/leads/${LEAD_ID}/build`, 'mc-build-writeback-concierge-2026-05-08-payload.json'],
  ['POST', '/api/heartbeat', 'mc-heartbeat-fratos-concierge-complete-2026-05-08-payload.json'],
  ['PATCH', `/api/agency/leads/${LEAD_ID}/build`, 'mc-build-writeback-pitch-2026-05-08-payload.json'],
  ['PATCH', `/api/agency/leads/${LEAD_ID}/build`, 'mc-build-writeback-battle-cards-2026-05-08-payload.json'],
  ['POST', '/api/heartbeat', 'mc-heartbeat-fratos-pitch-battle-cards-complete-2026-05-08-payload.json'],
  ['POST', `/api/agency/leads/${LEAD_ID}/qa-rounds`, 'mc-qa-round-1-2026-05-08-payload.json'],
  ['POST', '/api/heartbeat', 'mc-heartbeat-fratos-qa-round-1-complete-2026-05-08-payload.json'],
  ['POST', `/api/agency/leads/${LEAD_ID}/qa-rounds`, 'mc-qa-round-2-2026-05-08-payload.json'],
  ['POST', '/api/heartbeat', 'mc-heartbeat-fratos-qa-round-2-complete-2026-05-08-payload.json'],
  ['POST', `/api/agency/leads/${LEAD_ID}/qa-rounds`, 'mc-qa-round-3-final-qa-2026-05-08-payload.json'],
  ['PATCH', `/api/agency/leads/${LEAD_ID}/build`, 'mc-delivery-package-2026-05-08-payload.json'],
  ['POST', '/api/heartbeat', 'mc-heartbeat-fratos-final-qa-local-delivery-package-2026-05-08-payload.json'],
];

if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log(`Usage: node scripts/replay-fratos-mc-payloads.mjs [--apply]\n\nDry-run is default and does not require credentials.\nApply requires AGENCY_AUTONOMY_API_KEY or OPENCLAW_WEBHOOK_SECRET.\nMC_API_BASE_URL/HQ_BASE default: ${BASE_URL}`);
  process.exit(0);
}

if (APPLY && !TOKEN) {
  console.error('Refusing --apply: set AGENCY_AUTONOMY_API_KEY or OPENCLAW_WEBHOOK_SECRET first.');
  process.exit(2);
}

const results = [];
for (const [method, route, file] of operations) {
  const filePath = path.join(SITE_DIR, file);
  const raw = await fs.readFile(filePath, 'utf8');
  const body = JSON.parse(raw);
  const url = `${BASE_URL}${route}`;
  if (!APPLY) {
    results.push({ mode: 'dry-run', method, url, file, payloadKeys: Object.keys(body).sort() });
    continue;
  }
  const response = await fetch(url, {
    method,
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${TOKEN}`,
      'x-agency-runtime': 'openclaw',
    },
    body: JSON.stringify(body),
  });
  const text = await response.text();
  let parsed;
  try { parsed = JSON.parse(text); } catch { parsed = text; }
  results.push({ mode: 'apply', method, url, file, ok: response.ok, status: response.status, response: parsed });
  if (!response.ok) break;
}

console.log(JSON.stringify({ site: 'fratos-culinary-kitchen', leadId: LEAD_ID, baseUrl: BASE_URL, apply: APPLY, authPresent: Boolean(TOKEN), operations: results }, null, 2));
