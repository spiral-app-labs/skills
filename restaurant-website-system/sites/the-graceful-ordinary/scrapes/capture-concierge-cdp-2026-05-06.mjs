import { writeFile } from 'node:fs/promises';

const CDP = 'http://127.0.0.1:18800';
const BASE = 'http://127.0.0.1:3025/';

async function newPage(url = 'about:blank') {
  const r = await fetch(`${CDP}/json/new?${encodeURIComponent(url)}`, { method: 'PUT' });
  if (!r.ok) throw new Error(`new page failed ${r.status}: ${await r.text()}`);
  return r.json();
}

class Client {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.id = 0;
    this.pending = new Map();
    this.events = [];
  }
  async open() {
    await new Promise((resolve, reject) => {
      const t = setTimeout(() => reject(new Error('CDP websocket timeout')), 10_000);
      this.ws.addEventListener('open', () => { clearTimeout(t); resolve(); }, { once: true });
      this.ws.addEventListener('error', (e) => { clearTimeout(t); reject(e.error || new Error('ws error')); }, { once: true });
      this.ws.addEventListener('message', (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id && this.pending.has(msg.id)) {
          const { resolve, reject } = this.pending.get(msg.id);
          this.pending.delete(msg.id);
          if (msg.error) reject(new Error(JSON.stringify(msg.error)));
          else resolve(msg.result);
        } else if (msg.method) {
          this.events.push(msg);
        }
      });
    });
  }
  send(method, params = {}) {
    const id = ++this.id;
    this.ws.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => {
      const t = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error(`${method} timed out`));
      }, 30_000);
      this.pending.set(id, {
        resolve: (v) => { clearTimeout(t); resolve(v); },
        reject: (e) => { clearTimeout(t); reject(e); },
      });
    });
  }
  close() { this.ws.close(); }
}

async function waitFor(c, expr, timeout = 15_000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    const r = await c.send('Runtime.evaluate', { expression: expr, returnByValue: true });
    if (r.result.value) return r.result.value;
    await new Promise((res) => setTimeout(res, 250));
  }
  throw new Error(`Timed out waiting for ${expr}`);
}

async function screenshot(c, path, { fullPage = false } = {}) {
  let clip;
  if (fullPage) {
    const { contentSize } = await c.send('Page.getLayoutMetrics');
    clip = { x: 0, y: 0, width: Math.ceil(contentSize.width), height: Math.ceil(contentSize.height), scale: 1 };
  }
  const shot = await c.send('Page.captureScreenshot', { format: 'png', fromSurface: true, captureBeyondViewport: fullPage, clip });
  await writeFile(path, Buffer.from(shot.data, 'base64'));
}

const page = await newPage('about:blank');
const c = new Client(page.webSocketDebuggerUrl);
await c.open();
await c.send('Page.enable');
await c.send('Runtime.enable');
await c.send('Network.enable');
await c.send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1100, deviceScaleFactor: 1, mobile: false });
const nav = await c.send('Page.navigate', { url: BASE });
console.log('navigated', JSON.stringify(nav));
await waitFor(c, 'document.readyState === "complete"');
await waitFor(c, 'document.body && document.body.innerText.includes("The Graceful Ordinary")');
await c.send('Runtime.evaluate', { expression: 'window.scrollTo(0, Math.floor(window.innerHeight * 0.6)); true', returnByValue: true });
await waitFor(c, '!!document.querySelector("button[aria-label=\\"Ask The Graceful Ordinary\\"]") && getComputedStyle(document.querySelector("button[aria-label=\\"Ask The Graceful Ordinary\\"]")).opacity === "1"');
await screenshot(c, 'screenshots/concierge/concierge-entry-point-desktop.png', { fullPage: false });
await c.send('Runtime.evaluate', { expression: 'document.querySelector("button[aria-label=\\"Ask The Graceful Ordinary\\"]").click(); true', returnByValue: true });
await waitFor(c, '!!document.querySelector("[role=dialog][aria-label=\\"The Graceful Ordinary concierge\\"]")');
await c.send('Runtime.evaluate', { expression: `(() => {
  const input = document.querySelector('input[placeholder="Ask Graceful Ordinary…"]');
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  setter.call(input, 'My wife and I are coming Saturday for her birthday. Can you suggest something and help us reserve?');
  input.dispatchEvent(new Event('input', { bubbles: true }));
  document.querySelector('form button[type="submit"]').click();
  return true;
})()`, returnByValue: true });
await waitFor(c, 'document.body.innerText.includes("birthday dinner") && document.body.innerText.includes("Maytag Bleu Cheese") && document.body.innerText.toLowerCase().includes("reserve on resy")', 20_000);
await screenshot(c, 'screenshots/concierge/concierge-test-transcript-desktop.png', { fullPage: false });
const transcript = await c.send('Runtime.evaluate', { expression: `(() => { const d = document.querySelector('[role=\"dialog\"]'); return d ? d.innerText.slice(0, 4000) : 'NO_DIALOG'; })()`, returnByValue: true });
console.log(transcript.result.value);
c.close();
