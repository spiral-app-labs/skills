import fs from 'node:fs/promises'

const targetUrl = process.argv[2] || 'https://graceful-ordinary-redesign.vercel.app/'
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
const wsUrl = created.webSocketDebuggerUrl
if (!wsUrl) throw new Error('No webSocketDebuggerUrl from CDP')

const ws = new WebSocket(wsUrl)
let nextId = 1
const callbacks = new Map()
ws.addEventListener('message', (event) => {
  const message = JSON.parse(event.data)
  if (message.id && callbacks.has(message.id)) {
    const { resolve, reject } = callbacks.get(message.id)
    callbacks.delete(message.id)
    if (message.error) reject(new Error(JSON.stringify(message.error)))
    else resolve(message.result)
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

async function waitReady() {
  for (let i = 0; i < 80; i++) {
    const result = await send('Runtime.evaluate', {
      expression: `({ready: document.readyState, height: document.documentElement.scrollHeight, title: document.title})`,
      returnByValue: true,
    })
    const value = result.result?.value
    if (value?.ready === 'complete' && value?.height > 1000) return value
    await new Promise((r) => setTimeout(r, 250))
  }
  return null
}

async function capture(name, width, height, mobile = false) {
  await send('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: 1,
    mobile,
    screenWidth: width,
    screenHeight: height,
  })
  await send('Emulation.setVisibleSize', { width, height })
  await send('Page.navigate', { url: targetUrl })
  await send('Page.enable')
  await waitReady()
  await new Promise((r) => setTimeout(r, 1200))
  const metrics = await send('Page.getLayoutMetrics')
  const contentSize = metrics.contentSize
  const screenshot = await send('Page.captureScreenshot', {
    format: 'png',
    fromSurface: true,
    captureBeyondViewport: true,
    clip: {
      x: 0,
      y: 0,
      width: Math.ceil(contentSize.width),
      height: Math.ceil(contentSize.height),
      scale: 1,
    },
  })
  const path = new URL(`${name}.png`, outDir)
  await fs.writeFile(path, Buffer.from(screenshot.data, 'base64'))
  return { path: path.pathname, width: contentSize.width, height: contentSize.height }
}

await send('Runtime.enable')
await send('Page.enable')
const desktop = await capture('public-stable-preview-desktop-2026-05-06-qa3-recheck', 1440, 1200, false)
const mobile = await capture('public-stable-preview-mobile-2026-05-06-qa3-recheck', 390, 844, true)
const dom = await send('Runtime.evaluate', {
  expression: `document.body.innerText`,
  returnByValue: true,
})
const textPath = new URL('qa-round-3-public-stable-preview-dom-text-2026-05-06-recheck.txt', scrapeDir)
await fs.writeFile(textPath, dom.result?.value || '')
await json(`${cdpBase}/json/close/${created.id}`).catch(() => null)
ws.close()
console.log(JSON.stringify({ targetUrl, desktop, mobile, textPath: textPath.pathname }, null, 2))
