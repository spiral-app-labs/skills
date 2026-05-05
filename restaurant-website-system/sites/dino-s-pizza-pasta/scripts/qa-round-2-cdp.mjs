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

async function capture(page, viewport) {
  const url = `${baseUrl}${page.path}?qa2=${Date.now()}`;
  const target = await createTarget(url);
  const client = await cdp(target.webSocketDebuggerUrl);
  await client.send('Page.enable');
  await client.send('Runtime.enable');
  await client.send('Network.enable');
  await client.send('Network.setCacheDisabled', { cacheDisabled: true });
  await client.send('Emulation.setDeviceMetricsOverride', viewport);
  await client.send('Page.navigate', { url });
  await new Promise(r => setTimeout(r, 1400));
  const audit = await client.send('Runtime.evaluate', {
    returnByValue: true,
    expression: `(() => {
      const anchors = [...document.querySelectorAll('a')].map(a => ({ text: (a.innerText || a.getAttribute('aria-label') || '').trim(), href: a.href, target: a.target || null }));
      const buttonsAndLinks = [...document.querySelectorAll('a,button')].map(el => {
        const r = el.getBoundingClientRect();
        return { text: (el.innerText || el.getAttribute('aria-label') || '').trim(), w: Math.round(r.width), h: Math.round(r.height), href: el.href || null };
      }).filter(x => x.w > 0 && x.h > 0);
      const smallTargets = buttonsAndLinks.filter(x => x.w < 36 || x.h < 36);
      const overflowX = document.documentElement.scrollWidth - window.innerWidth;
      const text = document.body.innerText;
      const metas = [...document.querySelectorAll('meta')].map(m => ({ name: m.getAttribute('name'), property: m.getAttribute('property'), content: m.getAttribute('content') })).filter(m => m.content);
      return {
        url: location.href,
        title: document.title,
        h1: document.querySelector('h1')?.innerText || null,
        width: window.innerWidth,
        height: window.innerHeight,
        scrollWidth: document.documentElement.scrollWidth,
        overflowX,
        anchors,
        smallTargets,
        metaDescription: document.querySelector('meta[name="description"]')?.content || null,
        ogTitle: document.querySelector('meta[property="og:title"]')?.content || null,
        ogDescription: document.querySelector('meta[property="og:description"]')?.content || null,
        ogImage: document.querySelector('meta[property="og:image"]')?.content || null,
        twitterCard: document.querySelector('meta[name="twitter:card"]')?.content || null,
        hasAddress: text.includes('6 Miller Rd'),
        hasPhone: text.includes('(847) 658-3300') || text.includes('847'),
        hasMenu: text.toLowerCase().includes('menu'),
        hasGoogleProof: text.includes('4.5') && text.includes('252'),
        placeholderHits: (text.match(/lorem|placeholder|aviator|london|template|coming soon|TODO/gi) || []).slice(0, 20),
        textSnippet: text.slice(0, 1400),
      };
    })()`,
  });
  const screenshot = await client.send('Page.captureScreenshot', { format: 'png', fromSurface: true, captureBeyondViewport: false });
  const screenshotPath = path.join(screenshotsDir, `qa-round-2-${page.slug}-${viewport.slug}-${stamp}.png`);
  await fs.writeFile(screenshotPath, Buffer.from(screenshot.data, 'base64'));
  client.close();
  return { page: page.slug, viewport: viewport.slug, screenshotPath, audit: audit.result.value };
}

const results = [];
for (const page of pages) {
  for (const viewport of viewports) results.push(await capture(page, viewport));
}
const outPath = path.join(scrapesDir, `qa-round-2-page-audit-${stamp}.json`);
await fs.writeFile(outPath, JSON.stringify({ capturedAt: new Date().toISOString(), baseUrl, results }, null, 2));
console.log(JSON.stringify({ ok: true, outPath, screenshots: results.map(r => r.screenshotPath), summary: results.map(r => ({ page: r.page, viewport: r.viewport, overflowX: r.audit.overflowX, smallTargets: r.audit.smallTargets.length, placeholders: r.audit.placeholderHits, ogTitle: r.audit.ogTitle })) }, null, 2));
