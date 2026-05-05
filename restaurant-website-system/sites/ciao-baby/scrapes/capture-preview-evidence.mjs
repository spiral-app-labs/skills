import fs from 'node:fs/promises';
import path from 'node:path';

const cdpBase = process.env.CHROME_CDP_URL || 'http://127.0.0.1:18800';
const baseUrl = process.env.PREVIEW_URL || 'http://127.0.0.1:3084';
const outDir = path.resolve('screenshots');
const scrapeDir = path.resolve('scrapes');
const date = '2026-05-04';
const captureLabel = process.env.CAPTURE_LABEL || 'first-preview';

const routes = [
  ['home', '/'],
  ['menu', '/menu'],
  ['about', '/about'],
  ['contact', '/contact'],
];
const viewports = [
  { name: 'desktop', width: 1440, height: 1100, mobile: false, dpr: 1 },
  { name: 'mobile', width: 390, height: 900, mobile: true, dpr: 2 },
];

async function newTarget(url) {
  const res = await fetch(`${cdpBase}/json/new?${encodeURIComponent(url)}`, { method: 'PUT' });
  if (!res.ok) throw new Error(`CDP new target failed: ${res.status} ${await res.text()}`);
  return res.json();
}

async function closeTarget(id) {
  await fetch(`${cdpBase}/json/close/${id}`).catch(() => {});
}

function connect(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let seq = 0;
  const pending = new Map();
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
    }
  };
  const opened = new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });
  return {
    opened,
    send(method, params = {}) {
      const id = ++seq;
      ws.send(JSON.stringify({ id, method, params }));
      return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
    },
    close() { ws.close(); },
  };
}

async function waitForReady(client) {
  for (let i = 0; i < 80; i++) {
    const result = await client.send('Runtime.evaluate', {
      expression: `(() => ({ ready: document.readyState, body: !!document.body, text: document.body?.innerText?.length || 0 }))()`,
      returnByValue: true,
    });
    const v = result.result.value;
    if (v.ready === 'complete' && v.body && v.text > 50) return v;
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error('Timed out waiting for page readiness');
}

async function capture(routeName, routePath, viewport) {
  const separator = routePath.includes('?') ? '&' : '?';
  const url = `${baseUrl}${routePath}${separator}capture=${Date.now()}`;
  const target = await newTarget(url);
  const client = connect(target.webSocketDebuggerUrl);
  await client.opened;
  try {
    await client.send('Page.enable');
    await client.send('Runtime.enable');
    await client.send('Network.enable');
    await client.send('Network.setCacheDisabled', { cacheDisabled: true });
    await client.send('Emulation.setDeviceMetricsOverride', {
      width: viewport.width,
      height: viewport.height,
      deviceScaleFactor: viewport.dpr,
      mobile: viewport.mobile,
    });
    await client.send('Emulation.setTouchEmulationEnabled', { enabled: viewport.mobile });
    await client.send('Page.navigate', { url });
    await waitForReady(client);
    await new Promise((r) => setTimeout(r, 900));

    const evalResult = await client.send('Runtime.evaluate', {
      expression: `(() => {
        const vw = window.innerWidth;
        const doc = document.documentElement;
        const body = document.body;
        const offenders = Array.from(document.querySelectorAll('*'))
          .map((el) => {
            const rect = el.getBoundingClientRect();
            return {
              tag: el.tagName.toLowerCase(),
              className: String(el.className || '').slice(0, 140),
              id: el.id || '',
              text: String(el.innerText || el.getAttribute('alt') || '').trim().replace(/\\s+/g, ' ').slice(0, 100),
              left: Math.round(rect.left),
              right: Math.round(rect.right),
              width: Math.round(rect.width),
              scrollWidth: el.scrollWidth,
            };
          })
          .filter((x) => x.right > vw + 2 || x.left < -2 || x.scrollWidth > vw + 2)
          .slice(0, 12);
        return {
          url: location.href,
          title: document.title,
          ready: document.readyState,
          viewport: { width: vw, height: window.innerHeight, dpr: window.devicePixelRatio },
          scroll: {
            docClientWidth: doc.clientWidth,
            docScrollWidth: doc.scrollWidth,
            bodyClientWidth: body.clientWidth,
            bodyScrollWidth: body.scrollWidth,
            docScrollHeight: doc.scrollHeight,
            bodyScrollHeight: body.scrollHeight,
          },
          h1: Array.from(document.querySelectorAll('h1')).map((h) => (h.innerText || h.textContent || '').trim()),
          links: Array.from(document.querySelectorAll('a')).map((a) => ({ text: a.innerText.trim(), href: a.href })).filter((a) => a.text || a.href).slice(0, 30),
          textSample: body.innerText.trim().replace(/\\s+/g, ' ').slice(0, 1200),
          offenders,
        };
      })()`,
      returnByValue: true,
    });
    const metrics = evalResult.result.value;
    const layout = await client.send('Page.getLayoutMetrics');
    const width = Math.ceil(layout.contentSize.width || viewport.width);
    const height = Math.min(Math.ceil(layout.contentSize.height || viewport.height), 12000);
    const shot = await client.send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: true,
      fromSurface: true,
      clip: { x: 0, y: 0, width, height, scale: 1 },
    });
    const relPath = `screenshots/${captureLabel}-${routeName}-${viewport.name}-${date}.png`;
    const absPath = path.resolve(relPath);
    await fs.writeFile(absPath, Buffer.from(shot.data, 'base64'));
    const stat = await fs.stat(absPath);
    return { route: routePath, routeName, viewport: viewport.name, screenshot: relPath, bytes: stat.size, metrics };
  } finally {
    client.close();
    await closeTarget(target.id);
  }
}

await fs.mkdir(outDir, { recursive: true });
await fs.mkdir(scrapeDir, { recursive: true });
const captures = [];
for (const [routeName, routePath] of routes) {
  for (const viewport of viewports) {
    captures.push(await capture(routeName, routePath, viewport));
  }
}
const result = {
  capturedAt: new Date().toISOString(),
  previewUrl: baseUrl,
  cdpBase,
  templateSlug: 'gusto-01',
  siteSlug: 'ciao-baby',
  captures,
};
await fs.writeFile(path.join(scrapeDir, `${captureLabel}-browser-checks-${date}.json`), JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify(result, null, 2));
