import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const cdp = 'http://127.0.0.1:18800';
const root = path.resolve('restaurant-website-system/sites/ciao-baby');
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
  const events = [];
  ws.onmessage = (msg) => {
    const data = JSON.parse(msg.data);
    if (data.id && pending.has(data.id)) {
      const { resolve, reject } = pending.get(data.id);
      pending.delete(data.id);
      data.error ? reject(new Error(JSON.stringify(data.error))) : resolve(data.result);
    } else {
      events.push(data);
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
      events,
    });
  });
}

const delay = ms => new Promise(r => setTimeout(r, ms));

async function capture({ url, name }) {
  const target = await newPage(url);
  const page = await connect(target.webSocketDebuggerUrl);
  await page.send('Page.enable');
  await page.send('Runtime.enable');
  await page.send('Network.enable');

  async function gotoWithViewport(viewport) {
    await page.send('Emulation.setDeviceMetricsOverride', viewport);
    await page.send('Page.navigate', { url });
    await delay(6500);
    await page.send('Runtime.evaluate', { expression: 'window.scrollTo(0,0)', awaitPromise: true });
    await delay(500);
  }

  await gotoWithViewport({ width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  const text = await page.send('Runtime.evaluate', { expression: 'document.body.innerText', returnByValue: true });
  const html = await page.send('Runtime.evaluate', { expression: 'document.documentElement.outerHTML', returnByValue: true });
  await writeFile(path.join(root, 'scrapes', `${name}-browser-text.txt`), text.result.value || '');
  await writeFile(path.join(root, 'scrapes', `${name}-browser-dom-snapshot.html`), html.result.value || '');
  const desktop = await page.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, fromSurface: true });
  await writeFile(path.join(root, 'screenshots', `${name}-desktop-full.png`), Buffer.from(desktop.data, 'base64'));

  await gotoWithViewport({ width: 390, height: 844, deviceScaleFactor: 3, mobile: true, screenWidth: 390, screenHeight: 844 });
  const mobileFull = await page.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, fromSurface: true });
  await writeFile(path.join(root, 'screenshots', `${name}-mobile-full.png`), Buffer.from(mobileFull.data, 'base64'));
  const mobileFold = await page.send('Page.captureScreenshot', { format: 'png', fromSurface: true, clip: { x: 0, y: 0, width: 390, height: 844, scale: 3 } });
  await writeFile(path.join(root, 'screenshots', `${name}-mobile-fold.png`), Buffer.from(mobileFold.data, 'base64'));
  page.close();
}

await capture({ url: 'https://www.ciaobabyonline.com/', name: 'current-site' });
await capture({ url: 'https://ciaobaby.net/', name: 'ciaobaby-net-shell' });
console.log('Captured Ciao Baby browser evidence');
