/* eslint-disable no-console -- Node CLI script, not browser code */
import { spawn } from 'node:child_process'
import http from 'node:http'

const HOST = '127.0.0.1'
const PORT = 4173
const base = `http://${HOST}:${PORT}`
const urls = [`${base}/`, `${base}/en/`, `${base}/aliases/`, `${base}/fr/aliases/`]
const MAX_RETRIES = 2
const DELAY_MS = 2000

// Rules caused by VitePress's internal layout structure that we cannot fix
// in our content or theme overrides:
//   - landmark-contentinfo-is-top-level: VPDocFooter nested inside layout
//   - landmark-main-is-top-level: <main> nested inside VitePress shell
//   - landmark-no-duplicate-main: VitePress emits two main landmarks
//   - landmark-unique: duplicate landmarks from VitePress layout
//   - nested-interactive: VitePress sidebar items with role="button" containing links
//   - color-contrast: VitePress syntax-highlight theme colours in code blocks
const DISABLED_RULES = [
  'landmark-contentinfo-is-top-level',
  'landmark-main-is-top-level',
  'landmark-no-duplicate-main',
  'landmark-unique',
  'nested-interactive',
  'color-contrast',
]

/** Wait until the VitePress preview server responds with a non-5xx status. */
function waitForServer(timeoutMs = 30000) {
  const start = Date.now()
  return new Promise((resolve, reject) => {
    const tick = () => {
      const req = http.get(`${base}/`, (res) => {
        res.resume()
        if (res.statusCode && res.statusCode < 500) return resolve()
        retry()
      })
      req.on('error', retry)
      function retry() {
        if (Date.now() - start > timeoutMs) {
          reject(new Error('Timed out waiting for preview server'))
        } else {
          setTimeout(tick, 400)
        }
      }
    }
    tick()
  })
}

/** Return a promise that resolves after `ms` milliseconds. */
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/** Spawn `@axe-core/cli` against `url` and resolve on exit code 0. */
function runAxe(url) {
  return new Promise((resolve, reject) => {
    const axe = spawn('npx', ['@axe-core/cli', url, '--exit', '--disable', DISABLED_RULES.join(',')], { stdio: 'inherit', shell: true })
    axe.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`axe failed for ${url}`))))
  })
}

const preview = spawn('npm', ['run', 'preview', '--', '--host', HOST, '--port', String(PORT)], {
  stdio: 'inherit',
  shell: true,
})

try {
  await waitForServer()

  for (const url of urls) {
    let lastErr = null
    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      try {
        if (attempt > 0) {
          console.log(`Retrying ${url} (attempt ${attempt + 1}/${MAX_RETRIES + 1})...`)
          await delay(DELAY_MS)
        }
        await runAxe(url)
        lastErr = null
        break
      } catch (err) {
        lastErr = err
      }
    }
    if (lastErr) throw lastErr
    // Brief pause between URLs to let Chrome clean up
    await delay(1000)
  }

  console.log('Axe audit passed.')
} finally {
  preview.kill('SIGTERM')
}
