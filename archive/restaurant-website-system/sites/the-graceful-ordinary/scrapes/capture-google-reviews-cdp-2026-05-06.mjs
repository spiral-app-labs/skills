import fs from 'node:fs/promises';
import path from 'node:path';

const CDP = 'http://127.0.0.1:18800';
const TARGET_ID = '1AB71FFA26ABD60A1DA532FFE333B2CA';
const root = path.resolve(new URL('..', import.meta.url).pathname);
const screenshotsDir = path.join(root, 'screenshots');
const reviewsDir = path.join(root, 'reviews');
await fs.mkdir(screenshotsDir, { recursive: true });
await fs.mkdir(reviewsDir, { recursive: true });

async function listTargets() {
  const res = await fetch(`${CDP}/json/list`);
  if (!res.ok) throw new Error(`CDP list failed ${res.status}`);
  return res.json();
}

async function connect(wsUrl) {
  const ws = new WebSocket(wsUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true });
    ws.addEventListener('error', reject, { once: true });
  });
  let id = 0;
  const pending = new Map();
  ws.addEventListener('message', (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
    }
  });
  return {
    send(method, params = {}) {
      const callId = ++id;
      ws.send(JSON.stringify({ id: callId, method, params }));
      return new Promise((resolve, reject) => pending.set(callId, { resolve, reject }));
    },
    close() { ws.close(); },
  };
}

const targets = await listTargets();
const target = targets.find((t) => t.id === TARGET_ID) || targets.find((t) => t.url?.includes('The+Graceful+Ordinary') && t.type === 'page');
if (!target) throw new Error('Google Maps tab for The Graceful Ordinary not found.');
const client = await connect(target.webSocketDebuggerUrl);
await client.send('Runtime.enable');
await client.send('Page.enable');

async function evaluate(expression) {
  const result = await client.send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
  return result.result.value;
}

await evaluate(`(async()=>{
  // Ensure Reviews tab and Highest rating sort are active if visible.
  const clickByName = (role, pattern) => {
    const items=[...document.querySelectorAll('[role="'+role+'"], button')];
    const el=items.find(e => pattern.test(e.getAttribute('aria-label')||e.innerText||''));
    if(el){ el.click(); return true; }
    return false;
  };
  clickByName('tab', /Reviews/i);
  await new Promise(r=>setTimeout(r,800));
  const sort=[...document.querySelectorAll('button')].find(e=>/Sort/i.test(e.getAttribute('aria-label')||e.innerText||''));
  if(sort){ sort.click(); await new Promise(r=>setTimeout(r,400)); }
  const high=[...document.querySelectorAll('[role="menuitemradio"], div, span')].find(e=>/Highest rating/i.test(e.getAttribute('aria-label')||e.innerText||''));
  if(high){ high.click(); await new Promise(r=>setTimeout(r,1200)); }
  return true;
})()`);

async function captureScreenshot(name) {
  const png = await client.send('Page.captureScreenshot', { format: 'png', fromSurface: true });
  const out = path.join(screenshotsDir, name);
  await fs.writeFile(out, Buffer.from(png.data, 'base64'));
  return out;
}

const initialScreenshot = await captureScreenshot('google-reviews-highest-filter-visible.png');

const scrollAndCollect = `async () => {
  const sleep = (ms) => new Promise(r => setTimeout(r, ms));
  const container = [...document.querySelectorAll('div')]
    .filter(e => e.scrollHeight > e.clientHeight + 300)
    .sort((a,b)=>b.scrollHeight-a.scrollHeight)[0];
  if (!container) return {error:'no scroll container'};
  const seen = new Map();
  const extract = () => {
    [...document.querySelectorAll('.jftiEf[data-review-id]')].forEach(card => {
      const id = card.getAttribute('data-review-id');
      const more = card.querySelector('button[aria-label="See more"]');
      if (more) more.click();
    });
    [...document.querySelectorAll('.jftiEf[data-review-id]')].forEach(card => {
      const id = card.getAttribute('data-review-id');
      const name = card.querySelector('.d4r55')?.innerText?.trim() || card.getAttribute('aria-label') || '';
      const reviewer_meta = card.querySelector('.RfnDt')?.innerText?.trim() || '';
      const rating = card.querySelector('.kvMYJc')?.getAttribute('aria-label') || '';
      const date = card.querySelector('.rsqaWe')?.innerText?.trim() || '';
      const text = card.querySelector('.wiI7pd')?.innerText?.replace(/\\s+/g,' ')?.trim() || '';
      if (id && name && text.length > 20 && /5 stars/i.test(rating)) seen.set(id, { id, name, reviewer_meta, rating, date, text });
    });
  };
  container.scrollTop = 0;
  await sleep(500);
  for (let i=0; i<80 && seen.size < 35; i++) {
    extract();
    container.scrollTop += Math.floor(container.clientHeight * 0.85);
    await sleep(650);
  }
  extract();
  return { count: seen.size, reviews: [...seen.values()].slice(0, 35), scrollTop: container.scrollTop, scrollHeight: container.scrollHeight };
}`;
const collected = await evaluate(`(${scrollAndCollect})()`);
const finalScreenshot = await captureScreenshot('google-reviews-highest-filter-scrolled.png');

const payload = {
  captured_at: new Date().toISOString(),
  restaurant: 'The Graceful Ordinary',
  source: target.url,
  filter: 'Highest rating',
  required_written_reviews: 30,
  collected_written_five_star_reviews: collected.reviews?.length || 0,
  screenshots: [
    path.relative('/Users/ethantalreja/.openclaw/workspace/GitHub/skills', initialScreenshot),
    path.relative('/Users/ethantalreja/.openclaw/workspace/GitHub/skills', finalScreenshot),
  ],
  ...collected,
};
await fs.writeFile(path.join(reviewsDir, 'google-reviews-highest.json'), JSON.stringify(payload, null, 2));
const md = [
  '# The Graceful Ordinary — Google Reviews Packet',
  '',
  `Captured: ${payload.captured_at}`,
  `Source: ${payload.source}`,
  `Filter: ${payload.filter}`,
  `Written 5-star reviews captured: ${payload.collected_written_five_star_reviews}`,
  '',
  'Evidence screenshots:',
  ...payload.screenshots.map((p) => `- \`${p}\``),
  '',
  '## Reviews',
  ...(payload.reviews || []).slice(0, 30).map((r, i) => [
    `### ${i + 1}. ${r.name}`,
    '',
    `- Rating: ${r.rating}`,
    `- Date: ${r.date}`,
    `- Reviewer meta: ${r.reviewer_meta || 'n/a'}`,
    '',
    `> ${r.text}`,
    '',
  ].join('\n')),
].join('\n');
await fs.writeFile(path.join(reviewsDir, 'google-reviews-highest.md'), md);
console.log(JSON.stringify({ ok: true, count: payload.collected_written_five_star_reviews, json: path.join(reviewsDir, 'google-reviews-highest.json'), md: path.join(reviewsDir, 'google-reviews-highest.md'), screenshots: payload.screenshots }, null, 2));
client.close();
