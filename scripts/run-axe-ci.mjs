import { spawn } from 'node:child_process'
import http from 'node:http'

const HOST = '127.0.0.1'
const PORT = 4173
const base = `http://${HOST}:${PORT}`
const urls = [`${base}/`, `${base}/en/`, `${base}/aliases/`, `${base}/fr/aliases/`]

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

const preview = spawn('npm', ['run', 'preview', '--', '--host', HOST, '--port', String(PORT)], {
  stdio: 'inherit',
  shell: true,
})

try {
  await waitForServer()

  for (const url of urls) {
    await new Promise((resolve, reject) => {
      const axe = spawn('npx', ['@axe-core/cli', url, '--exit'], { stdio: 'inherit', shell: true })
      axe.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`axe failed for ${url}`))))
    })
  }

  console.log('Axe audit passed.')
} finally {
  preview.kill('SIGTERM')
}
