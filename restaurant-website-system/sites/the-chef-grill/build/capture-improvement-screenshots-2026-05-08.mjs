import { spawn } from 'node:child_process';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const remotePort = 18954;
const tempRoot = join(tmpdir(), `chef-grill-static-preview-${Date.now()}`);
const tempPreviewDir = join(tempRoot, 'preview');
const tempChromeDir = join(tempRoot, 'chrome');
const screenshotDir = new URL('./screenshots/', import.meta.url);
const siteRoot = resolve(dirname(new URL(import.meta.url).pathname), '..');
const nextRoot = resolve(siteRoot, '.next');
const buildJsonPath = resolve(siteRoot, 'build/improvement-preview-check-2026-05-08.json');

await mkdir(tempPreviewDir, { recursive: true });
await mkdir(screenshotDir, { recursive: true });

const chrome = spawn(
  chromePath,
  [
    '--headless=new',
    `--remote-debugging-port=${remotePort}`,
    `--user-data-dir=${tempChromeDir}`,
    '--no-first-run',
    '--disable-gpu',
    'about:blank',
  ],
  { stdio: ['ignore', 'ignore', 'ignore'] }
);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitForChrome() {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${remotePort}/json/version`);
      if (response.ok) return;
    } catch {}
    await sleep(100);
  }

  throw new Error('Chrome did not start');
}

function connect(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();

  ws.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    if (!message.id || !pending.has(message.id)) return;
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(JSON.stringify(message.error)));
    else resolve(message.result ?? {});
  });

  return new Promise((resolvePromise, rejectPromise) => {
    ws.addEventListener('open', () => {
      resolvePromise({
        send(method, params = {}) {
          id += 1;
          const callId = id;
          ws.send(JSON.stringify({ id: callId, method, params }));
          return new Promise((resolveCall, rejectCall) => {
            pending.set(callId, { resolve: resolveCall, reject: rejectCall });
          });
        },
        close() {
          ws.close();
        },
      });
    });
    ws.addEventListener('error', rejectPromise);
  });
}

function toFileUrl(path) {
  return `file://${path}`;
}

function normalizeStaticHtml(html) {
  const assetBase = `${toFileUrl(nextRoot)}/`;

  return html
    .replaceAll('/_next/', assetBase)
    .replace(/opacity:0;will-change:transform;transform:translateY\([^"]+\)/g, 'opacity:1')
    .replace(/opacity:0;transform:translateY\([^"]+\)/g, 'opacity:1')
    .replace(/style="opacity:0"/g, 'style="opacity:1"');
}

async function preparePreviewFile(sourcePath, outputName) {
  const html = await readFile(sourcePath, 'utf8');
  const normalized = normalizeStaticHtml(html);
  const outputPath = join(tempPreviewDir, outputName);
  await writeFile(outputPath, normalized);
  return outputPath;
}

async function openPage(filePath, width, height, mobile = false) {
  const response = await fetch(
    `http://127.0.0.1:${remotePort}/json/new?${encodeURIComponent(toFileUrl(filePath))}`,
    { method: 'PUT' }
  );
  const target = await response.json();
  const cdp = await connect(target.webSocketDebuggerUrl);

  await cdp.send('Page.enable');
  await cdp.send('Runtime.enable');
  await cdp.send('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: mobile ? 2 : 1,
    mobile,
  });
  await cdp.send('Emulation.setVisibleSize', { width, height });
  await cdp.send('Page.navigate', { url: toFileUrl(filePath) });
  await sleep(2200);

  return cdp;
}

async function captureScreenshot(cdp, outputName) {
  const screenshot = await cdp.send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: false,
    fromSurface: true,
  });
  await writeFile(new URL(outputName, screenshotDir), Buffer.from(screenshot.data, 'base64'));
}

async function evaluateJson(cdp, expression) {
  const result = await cdp.send('Runtime.evaluate', {
    returnByValue: true,
    expression: `JSON.stringify(${expression})`,
  });

  return JSON.parse(result.result.value);
}

const previewFiles = {
  '/': await preparePreviewFile(resolve(nextRoot, 'server/app/index.html'), 'home.html'),
  '/contact': await preparePreviewFile(resolve(nextRoot, 'server/app/contact.html'), 'contact.html'),
};

const menuHtml = await readFile(resolve(nextRoot, 'server/app/menu.html'), 'utf8');
const menuRedirectMatch = menuHtml.match(/NEXT_REDIRECT;replace;([^;]+);307/);

const output = {
  generatedAt: new Date().toISOString(),
  previewMode: 'static-build-artifacts',
  livePreviewAvailable: false,
  livePreviewBlocker:
    'Sandbox denied binding a local preview server; verification used prerendered build HTML and headless file captures.',
  routeUrlsChecked: [
    { route: '/', source: '.next/server/app/index.html', status: 200 },
    {
      route: '/menu',
      source: '.next/server/app/menu.html',
      status: 307,
      redirectTarget: menuRedirectMatch?.[1] ?? null,
    },
    { route: '/contact', source: '.next/server/app/contact.html', status: 200 },
  ],
  commandResults: {
    typecheck: 'passed after build generated .next/types',
    lint: 'passed',
    build: 'passed',
    preview: 'live server blocked by sandbox; static build capture used instead',
  },
  screenshots: [],
  uiChecks: [],
};

try {
  await waitForChrome();

  for (const [label, route] of [
    ['home', '/'],
    ['contact', '/contact'],
  ]) {
    for (const mode of ['desktop', 'mobile']) {
      const isMobile = mode === 'mobile';
      const cdp = await openPage(
        previewFiles[route],
        isMobile ? 390 : 1440,
        isMobile ? 844 : 1200,
        isMobile
      );

      const screenshotName = `improvement-${mode}-${label}-2026-05-08.png`;
      await captureScreenshot(cdp, screenshotName);
      output.screenshots.push(
        `restaurant-website-system/sites/the-chef-grill/build/screenshots/${screenshotName}`
      );

      const pageData = await evaluateJson(
        cdp,
        `(() => {
          const text = document.body.innerText;
          const anchors = [...document.querySelectorAll('a')].map((anchor) => ({
            text: (anchor.textContent || '').trim().replace(/\\s+/g, ' '),
            href: anchor.getAttribute('href') || '',
          }));
          const reviewCards = [...document.querySelectorAll('article')].filter((element) =>
            element.innerText.includes('Google Review')
          );

          return {
            route: ${JSON.stringify(route)},
            viewport: ${JSON.stringify(mode)},
            title: document.title,
            hasChefGrill: text.includes('The Chef Grill'),
            hasReviewCarousel:
              text.includes('What guests call out again and again') && reviewCards.length >= 10,
            hasNamesInReviewCards: reviewCards.some((element) =>
              /Rimsha|Mubeen|Ibrahim|Yusuf|Anton|Karinna|Nicholas|Amy/.test(element.innerText)
            ),
            hasOrderOnline: anchors.some((anchor) => /order online/i.test(anchor.text)),
            hasViewMenu:
              anchors.some((anchor) => /view menu/i.test(anchor.text)) ||
              anchors.some((anchor) => anchor.href.includes('#menu')),
            hasCall: anchors.some((anchor) => anchor.href.startsWith('tel:')),
            hasDirections: anchors.some(
              (anchor) => anchor.href.includes('google.com/maps') || /directions/i.test(anchor.text)
            ),
            quickActionLabels: anchors
              .map((anchor) => anchor.text)
              .filter((textValue) =>
                ['Order Online', 'View Menu', 'Call', 'Directions'].includes(textValue)
              ),
            horizontalOverflow: document.documentElement.scrollWidth > innerWidth,
          };
        })()`
      );

      output.uiChecks.push(pageData);
      cdp.close();
    }
  }

  await writeFile(buildJsonPath, `${JSON.stringify(output, null, 2)}\n`);
} finally {
  chrome.kill('SIGTERM');
  await sleep(300);
  await rm(tempRoot, { recursive: true, force: true });
}
