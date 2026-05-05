import fs from 'node:fs/promises';
import path from 'node:path';

const cdpBase = 'http://127.0.0.1:18800';
const siteUrl = `http://127.0.0.1:3073/?capture=${Date.now()}`;
const outDir = path.resolve(process.cwd(), 'screenshots');
await fs.mkdir(outDir, { recursive: true });

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

async function capture(name, viewport) {
  const target = await createTarget(siteUrl);
  const client = await cdp(target.webSocketDebuggerUrl);
  await client.send('Page.enable');
  await client.send('Runtime.enable');
  await client.send('Network.enable');
  await client.send('Network.setCacheDisabled', { cacheDisabled: true });
  await client.send('Emulation.setDeviceMetricsOverride', viewport);
  await client.send('Page.navigate', { url: siteUrl });
  await client.send('Page.loadEventFired').catch(() => {});
  await new Promise(r => setTimeout(r, 1200));
  const evalResult = await client.send('Runtime.evaluate', {
    expression: `({title: document.title, body: document.body.innerText.slice(0, 2000), width: innerWidth, height: innerHeight})`,
    returnByValue: true,
  });
  const shot = await client.send('Page.captureScreenshot', { format: 'png', fromSurface: true, captureBeyondViewport: false });
  const filePath = path.join(outDir, name);
  await fs.writeFile(filePath, Buffer.from(shot.data, 'base64'));
  client.close();
  return { filePath, page: evalResult.result.value };
}

const desktop = await capture('preview-home-desktop-2026-05-05.png', { width: 1440, height: 1100, deviceScaleFactor: 1, mobile: false });
const mobile = await capture('preview-home-mobile-2026-05-05.png', { width: 390, height: 900, deviceScaleFactor: 2, mobile: true });
console.log(JSON.stringify({ ok: true, desktop, mobile }, null, 2));
