import fs from 'node:fs/promises';
import path from 'node:path';

const CDP = 'http://127.0.0.1:18800';
const TARGET_URL = 'https://www.thegracefulordinary.com/';
const root = path.resolve(new URL('..', import.meta.url).pathname);
const screenshotsDir = path.join(root, 'screenshots');
const scrapesDir = path.join(root, 'scrapes');
await fs.mkdir(screenshotsDir, { recursive: true });
await fs.mkdir(scrapesDir, { recursive: true });

async function cdpRequest(pathname, options = {}) {
  const res = await fetch(`${CDP}${pathname}`, options);
  if (!res.ok) throw new Error(`${pathname} failed: ${res.status} ${await res.text()}`);
  return res.json();
}

async function newTarget(url) {
  // Chrome accepts PUT for /json/new in recent versions.
  return cdpRequest(`/json/new?${encodeURIComponent(url)}`, { method: 'PUT' });
}

async function closeTarget(id) {
  try { await cdpRequest(`/json/close/${id}`); } catch {}
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

async function capture({ name, width, height, mobile = false }) {
  const target = await newTarget(TARGET_URL);
  const client = await connect(target.webSocketDebuggerUrl);
  try {
    await client.send('Page.enable');
    await client.send('Runtime.enable');
    await client.send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: mobile ? 3 : 1,
      mobile,
    });
    await client.send('Page.navigate', { url: TARGET_URL });
    await new Promise((resolve) => setTimeout(resolve, 7000));
    const textEval = await client.send('Runtime.evaluate', {
      expression: `(() => ({ title: document.title, url: location.href, text: document.body.innerText, html: document.documentElement.outerHTML, links: Array.from(document.links).map(a => ({text: a.innerText || a.getAttribute('aria-label') || '', href: a.href})).slice(0,200) }))()`,
      returnByValue: true,
    });
    const metrics = await client.send('Page.getLayoutMetrics');
    const contentSize = metrics.cssContentSize || metrics.contentSize;
    await client.send('Emulation.setDeviceMetricsOverride', {
      width,
      height: Math.ceil(contentSize.height),
      deviceScaleFactor: mobile ? 3 : 1,
      mobile,
    });
    const full = await client.send('Page.captureScreenshot', {
      format: 'png',
      fromSurface: true,
      captureBeyondViewport: true,
      clip: { x: 0, y: 0, width: contentSize.width, height: contentSize.height, scale: 1 },
    });
    await fs.writeFile(path.join(screenshotsDir, `${name}-full.png`), Buffer.from(full.data, 'base64'));
    await client.send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: mobile ? 3 : 1, mobile });
    const fold = await client.send('Page.captureScreenshot', { format: 'png', fromSurface: true });
    await fs.writeFile(path.join(screenshotsDir, `${name}-fold.png`), Buffer.from(fold.data, 'base64'));
    return textEval.result.value;
  } finally {
    client.close();
    await closeTarget(target.id);
  }
}

const desktop = await capture({ name: 'current-site-desktop', width: 1440, height: 900 });
const mobile = await capture({ name: 'current-site-mobile', width: 390, height: 844, mobile: true });
const scrape = {
  captured_at: new Date().toISOString(),
  url: TARGET_URL,
  desktop,
  mobile_text_sample: mobile.text,
};
await fs.writeFile(path.join(scrapesDir, 'current-site-dom-snapshot.txt'), [
  `Captured: ${scrape.captured_at}`,
  `URL: ${TARGET_URL}`,
  `Title: ${desktop.title}`,
  '',
  'VISIBLE TEXT',
  desktop.text,
  '',
  'LINKS',
  JSON.stringify(desktop.links, null, 2),
  '',
  'HTML',
  desktop.html,
].join('\n'));
await fs.writeFile(path.join(scrapesDir, 'current-site-summary.json'), JSON.stringify(scrape, null, 2));
console.log(JSON.stringify({ ok: true, screenshotsDir, scrapesDir, title: desktop.title, textLength: desktop.text?.length ?? 0 }, null, 2));
