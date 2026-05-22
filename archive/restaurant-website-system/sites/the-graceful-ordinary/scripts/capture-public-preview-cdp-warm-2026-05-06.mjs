import fs from 'node:fs/promises'

const targetUrl = process.argv[2] || 'https://graceful-ordinary-redesign.vercel.app/'
const stamp = process.argv[3] || '2026-05-06-2358Z'
const cdpBase = process.env.CDP_BASE || 'http://127.0.0.1:18800'
const outDir = new URL('../screenshots/qa-round-3/', import.meta.url)
const scrapeDir = new URL('../scrapes/', import.meta.url)
await fs.mkdir(outDir, { recursive: true })
await fs.mkdir(scrapeDir, { recursive: true })

async function json(url, init) {
  const response = await fetch(url, init)
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`)
  return response.json()
}

const created = await json(`${cdpBase}/json/new?${encodeURIComponent(targetUrl)}`, { method: 'PUT' })
const ws = new WebSocket(created.webSocketDebuggerUrl)
let nextId = 1
const callbacks = new Map()
ws.addEventListener('message', (event) => {
  const message = JSON.parse(event.data)
  if (message.id && callbacks.has(message.id)) {
    const cb = callbacks.get(message.id)
    callbacks.delete(message.id)
    message.error ? cb.reject(new Error(JSON.stringify(message.error))) : cb.resolve(message.result)
  }
})
await new Promise((resolve, reject) => {
  ws.addEventListener('open', resolve, { once: true })
  ws.addEventListener('error', reject, { once: true })
})
function send(method, params = {}) {
  const id = nextId++
  ws.send(JSON.stringify({ id, method, params }))
  return new Promise((resolve, reject) => callbacks.set(id, { resolve, reject }))
}
async function wait(ms) { return new Promise(r => setTimeout(r, ms)) }
async function waitReady() {
  for (let i = 0; i < 80; i++) {
    const { result } = await send('Runtime.evaluate', { expression: `document.readyState`, returnByValue: true })
    if (result?.value === 'complete') return
    await wait(250)
  }
}
async function warmScroll() {
  await send('Runtime.evaluate', { expression: `window.scrollTo(0, 0)`, returnByValue: true })
  await wait(400)
  for (let i = 0; i < 24; i++) {
    const done = await send('Runtime.evaluate', { expression: `(() => { const h=document.documentElement.scrollHeight; const y=Math.min(window.scrollY + Math.max(360, window.innerHeight * 0.65), h); window.scrollTo(0,y); return y + window.innerHeight >= h - 5; })()`, returnByValue: true })
    await wait(180)
    if (done.result?.value) break
  }
  await send('Runtime.evaluate', { expression: `window.scrollTo(0, 0)`, returnByValue: true })
  await wait(900)
}
async function capture(name, width, height, mobile) {
  await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile, screenWidth: width, screenHeight: height })
  await send('Emulation.setVisibleSize', { width, height })
  await send('Page.navigate', { url: targetUrl })
  await waitReady()
  await wait(1400)
  await warmScroll()
  const metrics = await send('Page.getLayoutMetrics')
  const contentSize = metrics.contentSize
  const screenshot = await send('Page.captureScreenshot', {
    format: 'png', fromSurface: true, captureBeyondViewport: true,
    clip: { x: 0, y: 0, width: Math.ceil(contentSize.width), height: Math.ceil(contentSize.height), scale: 1 }
  })
  const path = new URL(`${name}-${stamp}.png`, outDir)
  await fs.writeFile(path, Buffer.from(screenshot.data, 'base64'))
  return { path: path.pathname, width: contentSize.width, height: contentSize.height }
}
await send('Runtime.enable'); await send('Page.enable')
const desktop = await capture('public-stable-preview-desktop-warm-qa3', 1440, 1200, false)
const mobile = await capture('public-stable-preview-mobile-warm-qa3', 390, 844, true)
const text = await send('Runtime.evaluate', { expression: `document.body.innerText`, returnByValue: true })
const textPath = new URL(`qa-round-3-public-stable-preview-dom-text-warm-${stamp}.txt`, scrapeDir)
await fs.writeFile(textPath, text.result?.value || '')
await json(`${cdpBase}/json/close/${created.id}`).catch(() => null)
ws.close()
console.log(JSON.stringify({ targetUrl, desktop, mobile, textPath: textPath.pathname }, null, 2))
