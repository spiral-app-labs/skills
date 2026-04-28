#!/usr/bin/env node

const args = new Map();
for (let i = 2; i < process.argv.length; i += 2) {
  args.set(process.argv[i], process.argv[i + 1]);
}

if (args.has('--help') || !args.has('--tenant') || !args.has('--site') || !args.has('--month')) {
  console.log(`Usage:
  node scripts/generate-concierge-report.mjs --tenant <uuid> --site <uuid> --month <YYYY-MM>

Env:
  SUPABASE_URL
  SUPABASE_SERVICE_ROLE_KEY

Output:
  Markdown report memo printed to stdout. This is intentionally editable by a human before sending.`);
  process.exit(args.has('--help') ? 0 : 1);
}

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.');
  process.exit(1);
}

const tenantId = args.get('--tenant');
const siteId = args.get('--site');
const month = args.get('--month');
const monthStart = `${month}-01T00:00:00.000Z`;
const monthEndDate = new Date(monthStart);
monthEndDate.setUTCMonth(monthEndDate.getUTCMonth() + 1);
const monthEnd = monthEndDate.toISOString();

async function rest(path) {
  const url = `${SUPABASE_URL.replace(/\/$/, '')}/rest/v1/${path}`;
  const res = await fetch(url, {
    headers: {
      apikey: SERVICE_KEY,
      authorization: `Bearer ${SERVICE_KEY}`,
    },
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  return res.json();
}

function countBy(rows, key) {
  const out = new Map();
  for (const row of rows) {
    const value = row[key] || 'unknown';
    out.set(value, (out.get(value) || 0) + 1);
  }
  return [...out.entries()].sort((a, b) => b[1] - a[1]);
}

function top(rows, key, limit = 8) {
  return countBy(rows, key).slice(0, limit);
}

function asBulletList(items) {
  if (items.length === 0) return '- No data yet.';
  return items.map(([label, count]) => `- ${label}: ${count}`).join('\n');
}

const eventFilter =
  `tenant_id=eq.${tenantId}&site_id=eq.${siteId}` +
  `&occurred_at=gte.${encodeURIComponent(monthStart)}` +
  `&occurred_at=lt.${encodeURIComponent(monthEnd)}`;

const messageFilter =
  `tenant_id=eq.${tenantId}&site_id=eq.${siteId}` +
  `&created_at=gte.${encodeURIComponent(monthStart)}` +
  `&created_at=lt.${encodeURIComponent(monthEnd)}`;

const [events, messages, siteRows] = await Promise.all([
  rest(`events?select=event_name,surface_id,page_type,properties,occurred_at&${eventFilter}`),
  rest(`messages?select=role,redacted_text,surface_id,page_type,created_at&${messageFilter}&order=created_at.desc&limit=1000`),
  rest(`sites?select=brand_name,domain&id=eq.${siteId}&tenant_id=eq.${tenantId}&limit=1`),
]);

const site = siteRows[0] || { brand_name: 'Restaurant', domain: 'unknown domain' };
const userMessages = messages.filter((m) => m.role === 'user');
const assistantMessages = messages.filter((m) => m.role === 'assistant');
const queryEvents = events.filter((e) => e.event_name === 'query_submitted');
const answerEvents = events.filter((e) => e.event_name === 'answer_completed');
const ctaEvents = events.filter((e) => e.event_name === 'cta_click');
const entryClicks = events.filter((e) => e.event_name === 'entry_click');
const starterClicks = events.filter((e) => e.event_name === 'starter_prompt_click');

const ctaTypes = new Map();
for (const event of ctaEvents) {
  const cta = event.properties?.cta_type || 'unknown';
  ctaTypes.set(cta, (ctaTypes.get(cta) || 0) + 1);
}

const sampleQuestions = userMessages
  .map((m) => m.redacted_text)
  .filter(Boolean)
  .slice(0, 12);

const recommendations = [];
if (starterClicks.length === 0 && entryClicks.length > 0) {
  recommendations.push(['quick_fix', 'Rewrite starter prompts so they feel more specific to the page.']);
}
if (ctaEvents.length === 0 && queryEvents.length > 0) {
  recommendations.push(['content_update', 'Review answers for stronger reservation, call, directions, and menu follow-up paths.']);
}
if (top(userMessages, 'page_type', 1)[0]?.[0] === 'menu') {
  recommendations.push(['menu_ops_insight', 'Use menu-page questions to add a short "what regulars order" or dietary guidance block.']);
}
if (queryEvents.length >= 10) {
  recommendations.push(['paid_improvement_opportunity', 'Turn repeated diner questions into an FAQ/menu improvement sprint next month.']);
}
if (recommendations.length === 0) {
  recommendations.push(['quick_fix', 'Keep collecting questions until there is enough volume for stronger recommendations.']);
}

console.log(`# ${site.brand_name} AI Concierge Report - ${month}

Domain: ${site.domain}

## Executive Memo

Diners submitted ${queryEvents.length} questions through the concierge this month. The strongest early signals came from ${entryClicks.length} entrance clicks, ${starterClicks.length} starter prompt clicks, and ${ctaEvents.length} downstream CTA clicks.

## Recommended Actions

${recommendations.map(([tag, text]) => `- ${tag}: ${text}`).join('\n')}

## Usage And Entrances

- Entry clicks: ${entryClicks.length}
- Starter prompt clicks: ${starterClicks.length}
- Questions submitted: ${queryEvents.length}
- Answers completed: ${answerEvents.length}
- Assistant messages stored: ${assistantMessages.length}

### Entrances By Surface

${asBulletList(top(events.filter((e) => e.event_name === 'entry_click'), 'surface_id'))}

### Questions By Page Type

${asBulletList(top(userMessages, 'page_type'))}

## CTA Signals

${asBulletList([...ctaTypes.entries()].sort((a, b) => b[1] - a[1]))}

## Redacted Transcript Samples

${sampleQuestions.length ? sampleQuestions.map((q) => `- "${q}"`).join('\n') : '- No user messages stored yet.'}

## Human Editing Notes

- Cluster repeated questions before sending.
- Add owner-friendly interpretation, not just counts.
- Convert 3 to 7 findings into site/menu/operations recommendations.
- Use raw transcripts only during the configured short retention window.
`);
