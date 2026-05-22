import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const cdp = 'http://127.0.0.1:18800';
const root = path.resolve('restaurant-website-system/sites/ciao-baby');
await mkdir(path.join(root, 'screenshots'), { recursive: true });
await mkdir(path.join(root, 'scrapes'), { recursive: true });

const targets = await (await fetch(`${cdp}/json/list`)).json();
const target = targets.find(t => t.url.includes('google.com/maps/place/Ciao+Baby') || t.url.includes('google.com/maps/place/Ciao%2BBaby'));
if (!target) throw new Error('Ciao Baby Google Maps tab not found');

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

const page = await connect(target.webSocketDebuggerUrl);
await page.send('Page.enable');
await page.send('Runtime.enable');
await page.send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });

const result = await page.send('Runtime.evaluate', {
  awaitPromise: true,
  returnByValue: true,
  expression: `(async () => {
    const delay = ms => new Promise(r => setTimeout(r, ms));
    const scroller = Array.from(document.querySelectorAll('div')).filter(el => el.scrollHeight > el.clientHeight + 500).sort((a,b)=>b.scrollHeight-a.scrollHeight)[0];
    const clickMore = () => document.querySelectorAll('button.w8nwRe, button[aria-label="See more"]').forEach(b => { try { b.click(); } catch {} });
    const seen = new Map();
    const parse = txt => {
      const lines = txt.split('\\n').map(s => s.trim()).filter(Boolean).filter(s => !['','','','','Like','Share'].includes(s));
      const name = lines[0] || '';
      const date = lines.find(s => /(ago|Edited|yesterday|today)/i.test(s)) || '';
      const rating = (txt.match(//g) || []).length;
      const responseIndex = lines.findIndex(s => s.startsWith('Response from the owner'));
      const stopLabels = new Set(['Order type','Meal type','Price per person','Food: 5','Food: 4','Service: 5','Service: 4','Atmosphere: 5','Atmosphere: 4','Recommended dishes','Recommendation for vegetarians','Vegetarian offerings','Parking space','Parking options','Parking','Noise level','Wait time','Group size','Seating type','Reservation','Dietary restrictions','Special events','Kid-friendliness']);
      const dateIndex = lines.indexOf(date);
      const bodyLines = [];
      for (let i = Math.max(0, dateIndex + 1); i < lines.length; i++) {
        const line = lines[i];
        if (stopLabels.has(line) || line.startsWith('Response from the owner') || /^\\+\\d+$/.test(line) || /^\\d+:\\d+$/.test(line)) break;
        bodyLines.push(line);
      }
      const ownerReply = responseIndex >= 0 ? lines.slice(responseIndex).join('\\n') : null;
      return { reviewer: name, rating, date, text: bodyLines.join('\\n'), owner_reply: ownerReply, raw: txt };
    };
    const harvest = () => {
      clickMore();
      for (const el of document.querySelectorAll('.jftiEf[data-review-id]')) {
        const id = el.getAttribute('data-review-id');
        const txt = el.innerText || '';
        if (!id || txt.length < 80) continue;
        const parsed = parse(txt);
        if (parsed.text.length >= 12) seen.set(id, parsed);
      }
    };
    for (let i=0; i<60 && seen.size<35; i++) {
      harvest();
      if (scroller) scroller.scrollBy(0, Math.max(600, scroller.clientHeight * 0.85));
      await delay(450);
    }
    harvest();
    return {
      captured_at: new Date().toISOString(),
      source: location.href,
      business: 'Ciao Baby!',
      sort: document.body.innerText.includes('sorted from highest rated to lowest rated') ? 'Highest rating' : 'Unknown/attempted highest',
      total_visible_reviews: seen.size,
      reviews: Array.from(seen.values()).slice(0,30)
    };
  })()`
});

const packet = result.result.value;
await writeFile(path.join(root, 'scrapes', 'google-reviews-highest-30.json'), JSON.stringify(packet, null, 2) + '\n');
const shot = await page.send('Page.captureScreenshot', { format: 'png', fromSurface: true });
await writeFile(path.join(root, 'screenshots', 'google-reviews-highest.png'), Buffer.from(shot.data, 'base64'));
page.close();
console.log(JSON.stringify({ count: packet.reviews.length, sort: packet.sort, screenshot: 'restaurant-website-system/sites/ciao-baby/screenshots/google-reviews-highest.png' }, null, 2));
