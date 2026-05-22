import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const cdp = process.env.CHROME_CDP_URL || 'http://127.0.0.1:18800';
const base = process.env.PREVIEW_URL || 'http://127.0.0.1:3085';
const outDir = path.resolve('restaurant-website-system/sites/antojitos-mexicanos-la-fonda/evidence/qa3-visual-review/viewports');
await mkdir(outDir, { recursive: true });
const delay = ms => new Promise(r => setTimeout(r, ms));
const res = await fetch(`${cdp}/json/new?${encodeURIComponent(`${base}/`)}`, { method: 'PUT' });
if (!res.ok) throw new Error(await res.text());
const target = await res.json();
const ws = new WebSocket(target.webSocketDebuggerUrl);
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
await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject; });
const send = (method, params = {}) => {
  const callId = ++id;
  ws.send(JSON.stringify({ id: callId, method, params }));
  return new Promise((resolve, reject) => pending.set(callId, { resolve, reject }));
};
await send('Page.enable');
await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 3, mobile: true, screenWidth: 390, screenHeight: 844 });
await send('Page.navigate', { url: `${base}/` });
await delay(2200);
const height = (await send('Runtime.evaluate', { expression: 'document.documentElement.scrollHeight', returnByValue: true })).result.value;
const positions = [0, 700, 1600, 2600, 3800, Math.max(0, height - 900)];
for (const [i, y] of positions.entries()) {
  await send('Runtime.evaluate', { expression: `window.scrollTo(0, ${y})`, awaitPromise: true });
  await delay(350);
  const ss = await send('Page.captureScreenshot', { format: 'png', fromSurface: true });
  await writeFile(path.join(outDir, `home-mobile-viewport-${i + 1}-${Math.round(y)}.png`), Buffer.from(ss.data, 'base64'));
}
await send('Target.closeTarget', { targetId: target.id }).catch(() => {});
ws.close();
console.log(JSON.stringify({ height, positions, outDir }, null, 2));
