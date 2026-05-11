import fs from 'node:fs/promises';

const outDir = new URL('../screenshots/qa-round-3/', import.meta.url);
const scrapeDir = new URL('../scrapes/', import.meta.url);
await fs.mkdir(outDir, { recursive: true });
await fs.mkdir(scrapeDir, { recursive: true });

const base = 'https://graceful-ordinary-redesign.vercel.app';
const tabs = await (await fetch('http://127.0.0.1:18800/json/new?' + encodeURIComponent(base), { method: 'PUT' })).json();
const wsUrl = tabs.webSocketDebuggerUrl;
const ws = new WebSocket(wsUrl);
let seq = 0;
const pending = new Map();
ws.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  if (msg.id && pending.has(msg.id)) {
    const {resolve, reject} = pending.get(msg.id);
    pending.delete(msg.id);
    if (msg.error) reject(new Error(JSON.stringify(msg.error)));
    else resolve(msg.result);
  }
};
await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject; });
function send(method, params = {}) {
  const id = ++seq;
  ws.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, {resolve, reject}));
}
async function delay(ms) { return new Promise(r => setTimeout(r, ms)); }
async function load(url) {
  await send('Page.navigate', { url });
  await delay(3000);
}
async function capture(name, width, height, mobile=false) {
  await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile });
  await send('Emulation.setUserAgentOverride', { userAgent: mobile ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36' });
  await load(base + '/');
  const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, fromSurface: true });
  await fs.writeFile(new URL(`${name}.png`, outDir), Buffer.from(shot.data, 'base64'));
}
await send('Page.enable');
await send('Runtime.enable');
await capture('desktop-full-public-preview-2026-05-06', 1440, 900, false);
await capture('mobile-full-public-preview-2026-05-06', 390, 844, true);
await load(base + '/');
const text = await send('Runtime.evaluate', { expression: 'document.body.innerText', returnByValue: true });
await fs.writeFile(new URL('qa-round-3-public-preview-dom-text-2026-05-06.txt', scrapeDir), text.result.value || '');
const routes = [];
for (const path of ['/', '/menu', '/about', '/contact']) {
  await load(base + path);
  const info = await send('Runtime.evaluate', { expression: `({url: location.href, title: document.title, h1: document.querySelector('h1')?.innerText || '', text: document.body.innerText.slice(0, 800)})`, returnByValue: true });
  routes.push({ path, ...info.result.value });
}
await fs.writeFile(new URL('qa-round-3-route-smoke-2026-05-06.json', scrapeDir), JSON.stringify({ base, capturedAt: new Date().toISOString(), routes }, null, 2));
await fetch('http://127.0.0.1:18800/json/close/' + tabs.id).catch(() => {});
ws.close();
console.log(JSON.stringify({ screenshots: [`${outDir.pathname}desktop-full-public-preview-2026-05-06.png`, `${outDir.pathname}mobile-full-public-preview-2026-05-06.png`], scrapes: [`${scrapeDir.pathname}qa-round-3-public-preview-dom-text-2026-05-06.txt`, `${scrapeDir.pathname}qa-round-3-route-smoke-2026-05-06.json`] }, null, 2));
