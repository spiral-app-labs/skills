import fs from 'node:fs/promises';
import path from 'node:path';

const cdpBase = process.env.CDP_BASE || 'http://127.0.0.1:18800';
const baseUrl = process.env.QA_BASE_URL || 'http://127.0.0.1:3076';
const stamp = '2026-05-05';
const root = process.cwd();
const screenshotsDir = path.join(root, 'screenshots');
const scrapesDir = path.join(root, 'scrapes');
await fs.mkdir(screenshotsDir, { recursive: true });
await fs.mkdir(scrapesDir, { recursive: true });

const pages = [
  { slug: 'home', path: '/' },
  { slug: 'about', path: '/about' },
  { slug: 'contact', path: '/contact' },
];
const viewports = [
  { slug: 'desktop', width: 1440, height: 900, deviceScaleFactor: 1, mobile: false },
  { slug: 'mobile', width: 390, height: 844, deviceScaleFactor: 2, mobile: true },
];

async function createTarget(url) {
  let res = await fetch(`${cdpBase}/json/new?${encodeURIComponent(url)}`, { method: 'PUT' });
  if (!res.ok) res = await fetch(`${cdpBase}/json/new?${encodeURIComponent(url)}`);
  if (!res.ok) throw new Error(`create target failed: ${res.status}`);
  return res.json();
}

async function cdp(wsUrl) {
  let seq = 0;
  const pending = new Map();
  const ws = new WebSocket(wsUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true });
    ws.addEventListener('error', reject, { once: true });
  });
  ws.addEventListener('message', ev => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
    }
  });
  return {
    send(method, params = {}) {
      const id = ++seq;
      ws.send(JSON.stringify({ id, method, params }));
      return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
    },
    close() { ws.close(); },
  };
}

function passFail(a) {
  const failures = [];
  if (a.overflowX > 0) failures.push(`horizontal overflow ${a.overflowX}px`);
  if (a.smallTargets.length) failures.push(`${a.smallTargets.length} undersized tap/click targets`);
  if (a.placeholderHits.length) failures.push(`placeholder/template terms: ${a.placeholderHits.join(', ')}`);
  if (!a.hasAddress) failures.push('missing address');
  if (!a.hasPhone) failures.push('missing phone');
  if (!a.hasRealMenuLink) failures.push('missing official menu link');
  if (!a.hasDirectionsLink) failures.push('missing directions link');
  if (!a.hasCallLink) failures.push('missing tel: call link');
  if (!a.ogTitle || !a.ogDescription || !a.ogImage || !a.twitterCard) failures.push('incomplete social metadata');
  if (a.forbiddenClaims.length) failures.push(`unsafe claims: ${a.forbiddenClaims.join(', ')}`);
  return { passed: failures.length === 0, failures };
}

async function capture(page, viewport) {
  const url = `${baseUrl}${page.path}?qa3=${Date.now()}`;
  const target = await createTarget(url);
  const client = await cdp(target.webSocketDebuggerUrl);
  await client.send('Page.enable');
  await client.send('Runtime.enable');
  await client.send('Network.enable');
  await client.send('Network.setCacheDisabled', { cacheDisabled: true });
  await client.send('Emulation.setDeviceMetricsOverride', viewport);
  await client.send('Page.navigate', { url });
  await new Promise(r => setTimeout(r, 1500));
  const audit = await client.send('Runtime.evaluate', {
    returnByValue: true,
    expression: `(() => {
      const anchors = [...document.querySelectorAll('a')].map(a => ({
        text: (a.innerText || a.getAttribute('aria-label') || '').trim().replace(/\\s+/g, ' '),
        href: a.href,
        target: a.target || null,
        rel: a.rel || null,
      }));
      const controls = [...document.querySelectorAll('a,button')].map(el => {
        const r = el.getBoundingClientRect();
        return { text: (el.innerText || el.getAttribute('aria-label') || '').trim().replace(/\\s+/g, ' '), w: Math.round(r.width), h: Math.round(r.height), href: el.href || null };
      }).filter(x => x.w > 0 && x.h > 0);
      const smallTargets = controls.filter(x => x.w < 36 || x.h < 36);
      const overflowX = Math.max(0, document.documentElement.scrollWidth - window.innerWidth);
      const text = document.body.innerText.replace(/\\s+/g, ' ');
      const lower = text.toLowerCase();
      const forbiddenTerms = [
        'lorem', 'placeholder', 'template', 'coming soon', 'todo', 'aviator', 'london',
        'reserve a table', 'reservations', 'live wait', 'order online now', 'guaranteed delivery'
      ];
      const forbiddenClaims = forbiddenTerms.filter(term => lower.includes(term));
      const h2s = [...document.querySelectorAll('h2')].map(h => h.innerText.trim());
      const h3s = [...document.querySelectorAll('h3')].map(h => h.innerText.trim()).slice(0, 30);
      const visibleAboveFold = text.slice(0, 900);
      return {
        url: location.href,
        title: document.title,
        h1: document.querySelector('h1')?.innerText || null,
        width: window.innerWidth,
        height: window.innerHeight,
        scrollWidth: document.documentElement.scrollWidth,
        bodyHeight: document.documentElement.scrollHeight,
        overflowX,
        controls,
        smallTargets,
        anchors,
        h2s,
        h3s,
        metaDescription: document.querySelector('meta[name="description"]')?.content || null,
        ogTitle: document.querySelector('meta[property="og:title"]')?.content || null,
        ogDescription: document.querySelector('meta[property="og:description"]')?.content || null,
        ogImage: document.querySelector('meta[property="og:image"]')?.content || null,
        twitterCard: document.querySelector('meta[name="twitter:card"]')?.content || null,
        hasAddress: text.includes('6 Miller Rd') && text.includes('Lake in the Hills'),
        hasPhone: text.includes('(847) 658-3300') || text.includes('847 658 3300'),
        hasRealMenuLink: anchors.some(a => a.href === 'https://www.dinospizzalith.com/menu/'),
        hasDirectionsLink: anchors.some(a => a.href.startsWith('https://www.google.com/maps/search/?api=1&query=6+Miller+Rd')),
        hasCallLink: anchors.some(a => a.href === 'tel:+18476583300'),
        hasEmail: text.includes('dinospizza64@gmail.com') || anchors.some(a => a.href === 'mailto:dinospizza64@gmail.com'),
        hasHours: text.includes('Wednesday') && text.includes('Friday') && text.includes('Closed'),
        hasGoogleProof: text.includes('4.5') && (text.includes('252') || text.includes('250+')) && text.includes('30'),
        hasMenuSpecificity: ['Thin Crust', 'Double Dough', 'Stuffed Deep Dish', 'Wise Guy', 'Lasagna', 'Beer Nuggets'].every(t => text.includes(t)),
        placeholderHits: (text.match(/lorem|placeholder|aviator|london|template|coming soon|TODO/gi) || []).slice(0, 20),
        forbiddenClaims,
        visibleAboveFold,
        textSnippet: text.slice(0, 2200),
      };
    })()`,
  });
  const screenshot = await client.send('Page.captureScreenshot', { format: 'png', fromSurface: true, captureBeyondViewport: false });
  const screenshotPath = path.join(screenshotsDir, `qa-round-3-${page.slug}-${viewport.slug}-${stamp}.png`);
  await fs.writeFile(screenshotPath, Buffer.from(screenshot.data, 'base64'));
  client.close();
  const a = audit.result.value;
  return { page: page.slug, viewport: viewport.slug, screenshotPath, audit: a, result: passFail(a) };
}

const results = [];
for (const page of pages) {
  for (const viewport of viewports) results.push(await capture(page, viewport));
}
const summary = results.map(r => ({
  page: r.page,
  viewport: r.viewport,
  passed: r.result.passed,
  failures: r.result.failures,
  overflowX: r.audit.overflowX,
  smallTargets: r.audit.smallTargets.length,
  placeholders: r.audit.placeholderHits,
  hasAddress: r.audit.hasAddress,
  hasPhone: r.audit.hasPhone,
  hasRealMenuLink: r.audit.hasRealMenuLink,
  hasDirectionsLink: r.audit.hasDirectionsLink,
  hasCallLink: r.audit.hasCallLink,
  hasHours: r.audit.hasHours,
  hasGoogleProof: r.audit.hasGoogleProof,
  hasMenuSpecificity: r.audit.hasMenuSpecificity,
}));
const outPath = path.join(scrapesDir, `qa-round-3-final-audit-${stamp}.json`);
await fs.writeFile(outPath, JSON.stringify({ capturedAt: new Date().toISOString(), baseUrl, results, summary }, null, 2));
console.log(JSON.stringify({ ok: summary.every(s => s.passed), outPath, screenshots: results.map(r => r.screenshotPath), summary }, null, 2));
