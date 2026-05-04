import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const cdp = 'http://127.0.0.1:18800';
const root = path.resolve('restaurant-website-system/sites/marys-mexican-grill');
await mkdir(path.join(root, 'screenshots'), { recursive: true });
await mkdir(path.join(root, 'scrapes'), { recursive: true });

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

const delay = ms => new Promise(r => setTimeout(r, ms));
const url = 'http://www.marysmexicangrillil.com/';
const target = await newPage(url);
const page = await connect(target.webSocketDebuggerUrl);
await page.send('Page.enable');
await page.send('Runtime.enable');

async function goto(viewport) {
  await page.send('Emulation.setDeviceMetricsOverride', viewport);
  await page.send('Page.navigate', { url });
  await delay(4500);
  await page.send('Runtime.evaluate', { expression: 'window.scrollTo(0,0)', awaitPromise: true });
  await delay(500);
}

await goto({ width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
const text = await page.send('Runtime.evaluate', { expression: 'document.body.innerText', returnByValue: true });
const html = await page.send('Runtime.evaluate', { expression: 'document.documentElement.outerHTML', returnByValue: true });
await writeFile(path.join(root, 'scrapes', 'current-site-browser-text-2026-05-04.txt'), text.result.value || '');
await writeFile(path.join(root, 'scrapes', 'current-site-browser-dom-snapshot-2026-05-04.html'), html.result.value || '');
const desktop = await page.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, fromSurface: true });
await writeFile(path.join(root, 'screenshots', 'current-site-desktop-full.png'), Buffer.from(desktop.data, 'base64'));

await goto({ width: 390, height: 844, deviceScaleFactor: 3, mobile: true, screenWidth: 390, screenHeight: 844 });
const mobileFull = await page.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, fromSurface: true });
await writeFile(path.join(root, 'screenshots', 'current-site-mobile-full.png'), Buffer.from(mobileFull.data, 'base64'));
const mobileFold = await page.send('Page.captureScreenshot', { format: 'png', fromSurface: true, clip: { x: 0, y: 0, width: 390, height: 844, scale: 3 } });
await writeFile(path.join(root, 'screenshots', 'current-site-mobile-fold.png'), Buffer.from(mobileFold.data, 'base64'));
page.close();
console.log('Captured Mary current-site browser evidence');
