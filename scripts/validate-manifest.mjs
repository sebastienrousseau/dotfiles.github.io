import fs from 'node:fs'
import path from 'node:path'

const manifestPath = path.resolve('docs/public/manifest.json')
const raw = fs.readFileSync(manifestPath, 'utf8')

let manifest
try {
  manifest = JSON.parse(raw)
} catch (error) {
  console.error(`Manifest JSON parse failed: ${error.message}`)
  process.exit(1)
}

const required = ['name', 'short_name', 'start_url', 'display', 'icons', 'lang', 'theme_color', 'background_color']
const missing = required.filter((key) => !(key in manifest))

if (missing.length) {
  console.error(`Manifest missing required fields: ${missing.join(', ')}`)
  process.exit(1)
}

if (!Array.isArray(manifest.icons) || manifest.icons.length === 0) {
  console.error('Manifest icons must be a non-empty array.')
  process.exit(1)
}

console.log('Manifest validation passed.')
