import { spawn } from 'node:child_process';
import { mkdir, rm, writeFile } from 'node:fs/promises';

const routes = [
  ['home', '/'],
  ['menu', '/menu'],
  ['about', '/about'],
  ['contact', '/contact'],
];

const viewports = [
  ['narrow-mobile', 320, 1200],
  ['mobile', 390, 1200],
  ['desktop', 1440, 1200],
];

const baseUrl = process.env.QA_BASE_URL || 'http://127.0.0.1:3076';
const stamp = '2026-05-05';
const port = 9300 + Math.floor(Math.random() * 500);
const userDataDir = `/tmp/golden-rolls-qa-cdp-${port}`;

await mkdir('screenshots', { recursive: true });
await mkdir('scrapes', { recursive: true });

const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
  '--headless=new',
  '--disable-gpu',
  '--no-first-run',
  '--no-default-browser-check',
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${userDataDir}`,
  'about:blank',
], { stdio: 'ignore' });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchJson(url, init) {
  const response = await fetch(url, init);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.json();
}

async function waitForCdp() {
  for (let i = 0; i < 80; i += 1) {
    try {
      await fetchJson(`http://127.0.0.1:${port}/json/version`);
      return;
    } catch {
      await sleep(100);
    }
  }
  throw new Error('Chrome CDP did not become ready');
}

function createClient(webSocketUrl) {
  const ws = new WebSocket(webSocketUrl);
  let id = 0;
  const pending = new Map();
  ws.onmessage = (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      pending.get(message.id)(message);
      pending.delete(message.id);
    }
  };
  return new Promise((resolve, reject) => {
    ws.onopen = () => resolve({
      send(method, params = {}) {
        return new Promise((res) => {
          const messageId = ++id;
          pending.set(messageId, res);
          ws.send(JSON.stringify({ id: messageId, method, params }));
        });
      },
      close() { ws.close(); },
    });
    ws.onerror = reject;
  });
}

await waitForCdp();
const metrics = [];

for (const [pageName, route] of routes) {
  const target = await fetchJson(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(`${baseUrl}${route}`)}`, { method: 'PUT' });
  const client = await createClient(target.webSocketDebuggerUrl);
  await client.send('Page.enable');
  await client.send('Runtime.enable');

  for (const [viewportName, width, height] of viewports) {
    await client.send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: viewportName === 'mobile',
      screenWidth: width,
      screenHeight: height,
    });
    await client.send('Emulation.setTouchEmulationEnabled', { enabled: viewportName === 'mobile' });
    await client.send('Page.navigate', { url: `${baseUrl}${route}` });
    await client.send('Page.loadEventFired');
    await sleep(800);

    const evalResult = await client.send('Runtime.evaluate', {
      returnByValue: true,
      expression: `(() => {
        const h1 = document.querySelector('h1');
        const nav = document.querySelector('nav');
        const bodyText = document.body.innerText;
        return {
          page: ${JSON.stringify(pageName)},
          viewport: ${JSON.stringify(viewportName)},
          innerWidth,
          clientWidth: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          bodyScrollWidth: document.body.scrollWidth,
          height: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
          h1: h1?.textContent || null,
          h1Rect: h1?.getBoundingClientRect().toJSON() || null,
          navRect: nav?.getBoundingClientRect().toJSON() || null,
          hasPhone: bodyText.includes('(815) 308-5099') || bodyText.includes('815-308-5099'),
          hasAddress: bodyText.includes('790 S Eastwood Dr'),
          hasDirections: bodyText.includes('Directions'),
          hasMenu: bodyText.includes('Godzilla') || bodyText.includes('Golden Rolls menu'),
        };
      })()`,
    });
    const pageMetrics = evalResult.result.result.value;
    metrics.push(pageMetrics);

    const screenshot = await client.send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: true,
      clip: { x: 0, y: 0, width, height: Math.min(pageMetrics.height, 2200), scale: 1 },
    });
    await writeFile(`screenshots/qa2-cdp-${pageName}-${viewportName}-${stamp}.png`, Buffer.from(screenshot.result.data, 'base64'));

    const dom = await client.send('Runtime.evaluate', {
      returnByValue: true,
      expression: 'document.documentElement.outerHTML',
    });
    await writeFile(`scrapes/qa2-cdp-${pageName}-${viewportName}-${stamp}.html`, dom.result.result.value);
  }

  client.close();
}

await writeFile(`scrapes/qa2-responsive-metrics-${stamp}.json`, JSON.stringify(metrics, null, 2) + '\n');
chrome.kill();
try {
  await rm(userDataDir, { recursive: true, force: true, maxRetries: 3, retryDelay: 200 });
} catch {
  // Chrome can briefly keep extension storage handles open after kill; screenshots/metrics are already written.
}
console.log(JSON.stringify(metrics.map(({ page, viewport, innerWidth, clientWidth, scrollWidth, bodyScrollWidth, hasPhone, hasAddress, hasDirections, hasMenu }) => ({ page, viewport, innerWidth, clientWidth, scrollWidth, bodyScrollWidth, hasPhone, hasAddress, hasDirections, hasMenu })), null, 2));
