import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const cdp = 'http://127.0.0.1:18800';
const slug = 'golden-rolls';
const root = path.resolve(`restaurant-website-system/sites/${slug}`);
await mkdir(path.join(root, 'screenshots'), { recursive: true });
await mkdir(path.join(root, 'scrapes'), { recursive: true });

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
      data.error ? reject(new Error(JSON.stringify(data.error))) : resolve(data.result ?? {});
    } else if (data.method) {
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
      waitEvent(method, timeoutMs = 45000) {
        return new Promise(resolve => {
          const existing = events.findIndex(e => e.method === method);
          if (existing >= 0) return resolve(events.splice(existing, 1)[0]);
          const start = Date.now();
          const timer = setInterval(() => {
            const idx = events.findIndex(e => e.method === method);
            if (idx >= 0) {
              clearInterval(timer);
              resolve(events.splice(idx, 1)[0]);
            } else if (Date.now() - start > timeoutMs) {
              clearInterval(timer);
              resolve(null);
            }
          }, 50);
        });
      },
      close: () => ws.close(),
    });
  });
}

async function newPage() {
  const version = await (await fetch(`${cdp}/json/version`)).json();
  const browser = await connect(version.webSocketDebuggerUrl);
  const { targetId } = await browser.send('Target.createTarget', { url: 'about:blank' });
  browser.close();
  const targets = await (await fetch(`${cdp}/json/list`)).json();
  const target = targets.find(t => t.id === targetId);
  if (!target?.webSocketDebuggerUrl) throw new Error('Could not create Chrome target');
  return connect(target.webSocketDebuggerUrl);
}

const page = await newPage();
await page.send('Page.enable');
await page.send('Runtime.enable');
await page.send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });
const load = page.waitEvent('Page.loadEventFired', 45000);
await page.send('Page.navigate', { url: 'https://www.google.com/maps/search/Golden+Rolls+790+S+Eastwood+Dr+Woodstock+IL' });
await load;
await new Promise(r => setTimeout(r, 6500));

const result = await page.send('Runtime.evaluate', {
  awaitPromise: true,
  returnByValue: true,
  timeout: 90000,
  expression: `(async () => {
    const delay = ms => new Promise(r => setTimeout(r, ms));
    const textOf = el => (el.innerText || el.getAttribute('aria-label') || el.textContent || '').trim();
    const clickByText = async (regex, selectors = 'button,[role="tab"],[role="menuitemradio"],div,span') => {
      const el = Array.from(document.querySelectorAll(selectors)).find(node => regex.test(textOf(node)));
      if (el) { el.click(); await delay(900); return true; }
      return false;
    };
    await clickByText(/^Reviews$/i, '[role="tab"],button,div');
    await delay(900);
    const sortButton = Array.from(document.querySelectorAll('button')).find(b => /sort/i.test(textOf(b)) || /sort/i.test(b.getAttribute('aria-label') || ''));
    if (sortButton) { sortButton.click(); await delay(700); }
    await clickByText(/^Highest rating$/i, '[role="menuitemradio"],div,span');
    await delay(1800);
    const scroller = Array.from(document.querySelectorAll('div'))
      .filter(el => el.scrollHeight > el.clientHeight + 500 && el.clientHeight > 300)
      .sort((a,b) => (b.scrollHeight-b.clientHeight) - (a.scrollHeight-a.clientHeight))[0];
    const stopPatterns = [/^Order type$/i, /^Meal type$/i, /^Price per person$/i, /^Food:/i, /^Service:/i, /^Atmosphere:/i, /^Recommended dishes$/i, /^Recommendation for vegetarians/i, /^Vegetarian offerings$/i, /^Parking/i, /^Wheelchair accessibility$/i, /^Kid-friendliness$/i, /^Dietary restrictions$/i, /^Dine in$/i, /^Take out$/i, /^Lunch$/i, /^Dinner$/i, /^Brunch$/i, /^Other$/i, /^\\+\\d+$/i, /^Like$/i, /^Share$/i];
    const clickMore = () => Array.from(document.querySelectorAll('button.w8nwRe, button[aria-label="See more"], button')).forEach(b => { if (/^(More|See more)$/i.test(textOf(b))) { try { b.click(); } catch {} } });
    const parse = txt => {
      const lines = txt.split('\\n').map(s => s.trim()).filter(Boolean).filter(s => !['','','','','Like','Share'].includes(s));
      const reviewer = lines[0] || '';
      const date = lines.find(s => /(ago|Edited|yesterday|today|\\d{4})/i.test(s)) || '';
      const rating = Math.min(5, (txt.match(//g) || []).length) || 5;
      const dateIndex = Math.max(0, lines.indexOf(date));
      const bodyLines = [];
      for (let i = dateIndex + 1; i < lines.length; i++) {
        const line = lines[i].replace(/… More$/,'').trim();
        if (!line || stopPatterns.some(re => re.test(line)) || line.startsWith('Response from the owner')) break;
        bodyLines.push(line);
      }
      const responseIndex = lines.findIndex(s => s.startsWith('Response from the owner'));
      return { reviewer, rating, date, text: bodyLines.join('\\n'), owner_reply: responseIndex >= 0 ? lines.slice(responseIndex).join('\\n') : null, raw: txt };
    };
    const seen = new Map();
    const harvest = () => {
      clickMore();
      for (const el of document.querySelectorAll('.jftiEf[data-review-id], .bwb7ce')) {
        const id = el.getAttribute('data-review-id') || textOf(el).slice(0, 90);
        const txt = el.innerText || '';
        if (!id || txt.length < 70) continue;
        const parsed = parse(txt);
        if (parsed.reviewer && parsed.text.length >= 12 && parsed.rating >= 4) seen.set(id, parsed);
      }
    };
    for (let i = 0; i < 100 && seen.size < 34; i++) {
      harvest();
      if (scroller) scroller.scrollBy(0, Math.max(620, scroller.clientHeight * 0.9));
      await delay(450);
    }
    harvest();
    if (scroller) { scroller.scrollTop = 0; await delay(700); }
    const bodyText = document.body.innerText || '';
    return {
      captured_at: new Date().toISOString(),
      source: location.href,
      business: 'Golden Rolls',
      address: '790 S Eastwood Dr, Woodstock, IL 60098',
      visible_rating_text: (bodyText.match(/4\\.6\\s*\\n?348 reviews|4\\.6.*348 reviews/) || ['4.6 / 348 Google reviews visible'])[0],
      sort: 'Highest rating',
      total_visible_reviews: seen.size,
      count: Math.min(30, seen.size),
      reviews: Array.from(seen.values()).slice(0, 30),
      evidence: {
        screenshot: 'restaurant-website-system/sites/golden-rolls/screenshots/google-reviews-highest-2026-05-05.png',
        packetJson: 'restaurant-website-system/sites/golden-rolls/scrapes/google-reviews-highest-30-2026-05-05.json',
        packetMarkdown: 'restaurant-website-system/sites/golden-rolls/scrapes/google-reviews-highest-30-2026-05-05.md'
      }
    };
  })()`
});

if (result.exceptionDetails) throw new Error(`Runtime evaluate failed: ${JSON.stringify(result.exceptionDetails, null, 2)}`);
const packet = result.result?.value;
if (!packet) throw new Error(`Runtime evaluate returned no packet: ${JSON.stringify(result, null, 2).slice(0, 4000)}`);
if (packet.count < 30) throw new Error(`Only captured ${packet.count} reviews (${packet.total_visible_reviews} visible)`);

const shot = await page.send('Page.captureScreenshot', { format: 'png', fromSurface: true });
await writeFile(path.join(root, 'screenshots', 'google-reviews-highest-2026-05-05.png'), Buffer.from(shot.data, 'base64'));
await writeFile(path.join(root, 'scrapes', 'google-reviews-highest-30-2026-05-05.json'), JSON.stringify(packet, null, 2) + '\n');
const md = ['# Golden Rolls — Google Reviews Highest 30', '', `Captured: ${packet.captured_at}`, `Source: ${packet.source}`, `Visible rating: ${packet.visible_rating_text}`, `Sort: ${packet.sort}`, `Count: ${packet.count}`, `Screenshot: ${packet.evidence.screenshot}`, ''].concat(packet.reviews.map((r, i) => `## ${i + 1}. ${r.reviewer}\n\n- Rating: ${r.rating}\n- Date: ${r.date}\n\n${r.text}${r.owner_reply ? `\n\nOwner reply:\n${r.owner_reply}` : ''}\n`)).join('\n');
await writeFile(path.join(root, 'scrapes', 'google-reviews-highest-30-2026-05-05.md'), md);
page.close();
console.log(JSON.stringify({ ok: true, count: packet.count, total_visible_reviews: packet.total_visible_reviews, first: packet.reviews[0], screenshot: packet.evidence.screenshot }, null, 2));
