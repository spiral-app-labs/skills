import { mkdir, writeFile, stat, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';

const cdp = process.env.CHROME_CDP_URL || 'http://127.0.0.1:18800';
const base = process.env.PREVIEW_URL || 'http://127.0.0.1:3085';
const label = process.env.CAPTURE_LABEL || 'qa-round-3';
const date = '2026-05-04';
const slug = 'antojitos-mexicanos-la-fonda';
const root = path.resolve(`restaurant-website-system/sites/${slug}`);
const screenshotsDir = path.join(root, 'screenshots', `${label}-2026-05-04`);
const scrapesDir = path.join(root, 'scrapes');
await mkdir(screenshotsDir, { recursive: true });
await mkdir(scrapesDir, { recursive: true });

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function newPage(url) {
  const res = await fetch(`${cdp}/json/new?${encodeURIComponent(url)}`, { method: 'PUT' });
  if (!res.ok) throw new Error(`new target failed ${res.status}: ${await res.text()}`);
  return res.json();
}

function connect(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();
  ws.onmessage = (msg) => {
    const data = JSON.parse(msg.data);
    if (data.id && pending.has(data.id)) {
      const { resolve, reject } = pending.get(data.id);
      pending.delete(data.id);
      data.error ? reject(new Error(JSON.stringify(data.error))) : resolve(data.result);
    }
  };
  return new Promise((resolve, reject) => {
    ws.onerror = reject;
    ws.onopen = () => resolve({
      send(method, params = {}) {
        const callId = ++id;
        ws.send(JSON.stringify({ id: callId, method, params }));
        return new Promise((resolve, reject) => pending.set(callId, { resolve, reject }));
      },
      close: () => ws.close(),
    });
  });
}

async function capture(route, viewportName, viewport) {
  const url = `${base}${route}`;
  const target = await newPage(url);
  const page = await connect(target.webSocketDebuggerUrl);
  await page.send('Page.enable');
  await page.send('Runtime.enable');
  await page.send('Emulation.setDeviceMetricsOverride', viewport);
  await page.send('Page.navigate', { url });
  await delay(2600);
  await page.send('Runtime.evaluate', { expression: 'window.scrollTo(0,0)', awaitPromise: true });
  await delay(450);

  const routeSlug = route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '-');
  const prefix = `${label}-${routeSlug}-${viewportName}`;
  const text = await page.send('Runtime.evaluate', { expression: 'document.body.innerText', returnByValue: true });
  const html = await page.send('Runtime.evaluate', { expression: 'document.documentElement.outerHTML', returnByValue: true });
  await writeFile(path.join(scrapesDir, `${prefix}-text-${date}.txt`), text.result.value || '');
  await writeFile(path.join(scrapesDir, `${prefix}-dom-${date}.html`), html.result.value || '');

  const metricsExpr = `(() => {
    const doc = document.documentElement;
    const body = document.body;
    const bodyText = document.body.innerText || '';
    const bodyDigits = bodyText.replace(/\\D/g, '');
    const vw = window.innerWidth;
    const offenders = [...document.querySelectorAll('body *')].map((el) => {
      const r = el.getBoundingClientRect();
      return { tag: el.tagName, text: (el.innerText || el.alt || el.getAttribute('aria-label') || '').trim().slice(0, 120), left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width), cls: el.className && String(el.className).slice(0, 140) };
    }).filter((r) => r.width > 0 && (r.left < -2 || r.right > vw + 2)).slice(0, 20);
    return {
      title: document.title,
      route: location.pathname,
      viewport: { width: window.innerWidth, height: window.innerHeight, devicePixelRatio: window.devicePixelRatio },
      scrollWidth: Math.max(doc.scrollWidth, body ? body.scrollWidth : 0),
      clientWidth: doc.clientWidth,
      horizontalOverflow: Math.max(doc.scrollWidth, body ? body.scrollWidth : 0) > doc.clientWidth + 2,
      offenders,
      h1: [...document.querySelectorAll('h1')].map(h => h.innerText.trim()),
      ctas: [...document.querySelectorAll('a,button')].map(a => (a.innerText || a.getAttribute('aria-label') || a.href || '').trim()).filter(Boolean).slice(0, 60),
      hasPhone: bodyDigits.includes('8155263633'),
      hasAddress: bodyText.toLowerCase().includes('35 berkshire dr'),
      hasTruthCaveat: /verify|confirm|call|current/i.test(bodyText),
    };
  })()`;
  const metrics = await page.send('Runtime.evaluate', { expression: metricsExpr, returnByValue: true });
  const screenshot = await page.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, fromSurface: true });
  const screenshotPath = path.join(screenshotsDir, `${routeSlug}-${viewportName}-full.png`);
  await writeFile(screenshotPath, Buffer.from(screenshot.data, 'base64'));
  page.close();
  return {
    route,
    viewportName,
    url,
    screenshotPath: path.relative(process.cwd(), screenshotPath),
    textPath: path.relative(process.cwd(), path.join(scrapesDir, `${prefix}-text-${date}.txt`)),
    domPath: path.relative(process.cwd(), path.join(scrapesDir, `${prefix}-dom-${date}.html`)),
    metrics: metrics.result.value,
  };
}

const routes = ['/', '/about', '/contact'];
const viewports = {
  desktop: { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false },
  mobile: { width: 390, height: 844, deviceScaleFactor: 3, mobile: true, screenWidth: 390, screenHeight: 844 },
};

const captures = [];
for (const route of routes) {
  for (const [viewportName, viewport] of Object.entries(viewports)) {
    captures.push(await capture(route, viewportName, viewport));
  }
}

const inventory = [];
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full);
    else if (entry.isFile() && /\.png$/.test(entry.name)) {
      const buf = await import('node:fs/promises').then(fs => fs.readFile(full));
      const s = await stat(full);
      inventory.push({ path: path.relative(process.cwd(), full), bytes: s.size, sha256: createHash('sha256').update(buf).digest('hex') });
    }
  }
}
await walk(screenshotsDir);
const output = {
  capturedAt: new Date().toISOString(),
  base,
  label,
  captures,
  summary: captures.map(c => ({ route: c.route, viewport: c.viewportName, overflow: c.metrics.horizontalOverflow, offenders: c.metrics.offenders.length, h1: c.metrics.h1, hasPhone: c.metrics.hasPhone, hasAddress: c.metrics.hasAddress })),
  screenshotInventory: inventory,
};
await writeFile(path.join(scrapesDir, `${label}-browser-checks-${date}.json`), JSON.stringify(output, null, 2) + '\n');
await writeFile(path.join(root, `screenshot-inventory-${label}-${date}.json`), JSON.stringify(inventory, null, 2) + '\n');
console.log(JSON.stringify(output.summary, null, 2));
