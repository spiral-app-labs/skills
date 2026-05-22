import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const cdp = 'http://127.0.0.1:18800';
const slug = 'antojitos-mexicanos-la-fonda';
const root = path.resolve(`restaurant-website-system/sites/${slug}`);
await mkdir(path.join(root, 'screenshots'), { recursive: true });
await mkdir(path.join(root, 'scrapes'), { recursive: true });
const delay = ms => new Promise(r => setTimeout(r, ms));

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

async function capture(url, prefix, viewport, waitMs = 3500) {
  const target = await newPage(url);
  const page = await connect(target.webSocketDebuggerUrl);
  await page.send('Page.enable');
  await page.send('Runtime.enable');
  await page.send('Emulation.setDeviceMetricsOverride', viewport);
  await page.send('Page.navigate', { url });
  await delay(waitMs);
  await page.send('Runtime.evaluate', { expression: 'window.scrollTo(0,0)', awaitPromise: true });
  await delay(500);
  const text = await page.send('Runtime.evaluate', { expression: 'document.body.innerText', returnByValue: true });
  const html = await page.send('Runtime.evaluate', { expression: 'document.documentElement.outerHTML', returnByValue: true });
  await writeFile(path.join(root, 'scrapes', `${prefix}-browser-text-2026-05-04.txt`), text.result.value || '');
  await writeFile(path.join(root, 'scrapes', `${prefix}-browser-dom-snapshot-2026-05-04.html`), html.result.value || '');
  const full = await page.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, fromSurface: true });
  await writeFile(path.join(root, 'screenshots', `${prefix}-full.png`), Buffer.from(full.data, 'base64'));
  if (viewport.mobile) {
    const fold = await page.send('Page.captureScreenshot', { format: 'png', fromSurface: true, clip: { x: 0, y: 0, width: viewport.width, height: viewport.height, scale: viewport.deviceScaleFactor || 1 } });
    await writeFile(path.join(root, 'screenshots', `${prefix}-fold.png`), Buffer.from(fold.data, 'base64'));
  }
  page.close();
}

const googlePlace = 'https://www.google.com/maps/place/Antojitos+Mexicanos+La+Fonda/@42.2179964,-88.3189578,17z/data=!4m8!3m7!1s0x880f0ddbc42b18c1:0x67112e53c48d4b64!8m2!3d42.2179964!4d-88.3189578!9m1!1b1!16s%2Fg%2F11r9b4q5ly';
const restaurantji = 'https://www.restaurantji.com/il/crystal-lake/antojitos-mexicanos-la-fonda-/';
const guru = 'https://restaurantguru.com/Antojitos-Mexicanos-La-Fonda-Crystal-Lake';

await capture(googlePlace, 'current-site-google-listing-desktop', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false }, 5500);
await capture(googlePlace, 'current-site-google-listing-mobile', { width: 390, height: 844, deviceScaleFactor: 3, mobile: true, screenWidth: 390, screenHeight: 844 }, 5500);
await capture(restaurantji, 'restaurantji-desktop', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false }, 3500);
await capture(restaurantji, 'current-site-mobile', { width: 390, height: 844, deviceScaleFactor: 3, mobile: true, screenWidth: 390, screenHeight: 844 }, 3500);
await capture(guru, 'restaurantguru-desktop', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false }, 3500);

// Canonical current-site aliases point at the public discovery evidence because no owned website is listed.
const googleText = await import('node:fs/promises').then(fs => fs.readFile(path.join(root, 'scrapes', 'current-site-google-listing-desktop-browser-text-2026-05-04.txt'), 'utf8'));
const googleHtml = await import('node:fs/promises').then(fs => fs.readFile(path.join(root, 'scrapes', 'current-site-google-listing-desktop-browser-dom-snapshot-2026-05-04.html'), 'utf8'));
await writeFile(path.join(root, 'scrapes', 'current-site-browser-text-2026-05-04.txt'), googleText);
await writeFile(path.join(root, 'scrapes', 'current-site-browser-dom-snapshot-2026-05-04.html'), googleHtml);

console.log(JSON.stringify({
  captured: [
    `restaurant-website-system/sites/${slug}/screenshots/current-site-google-listing-desktop-full.png`,
    `restaurant-website-system/sites/${slug}/screenshots/current-site-google-listing-mobile-full.png`,
    `restaurant-website-system/sites/${slug}/screenshots/current-site-mobile-full.png`,
    `restaurant-website-system/sites/${slug}/screenshots/restaurantji-desktop-full.png`,
    `restaurant-website-system/sites/${slug}/screenshots/restaurantguru-desktop-full.png`,
    `restaurant-website-system/sites/${slug}/scrapes/current-site-browser-dom-snapshot-2026-05-04.html`
  ]
}, null, 2));
