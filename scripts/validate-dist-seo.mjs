import fs from 'node:fs'
import path from 'node:path'

const dist = path.resolve('docs/.vitepress/dist')
const htmlFiles = []

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else if (entry.isFile() && full.endsWith('.html')) htmlFiles.push(full)
  }
}

walk(dist)

const requiredSnippets = [
  '<link rel="canonical"',
  'property="og:type"',
  'property="og:title"',
  'property="og:description"',
  'property="og:url"',
  'property="og:image"',
  'name="twitter:card"',
  'name="twitter:title"',
  'name="twitter:description"',
  'name="twitter:image"',
  'application/ld+json',
]

const failures = []

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8')
  const missing = requiredSnippets.filter((snippet) => !html.includes(snippet))
  if (missing.length) {
    failures.push({ file: path.relative(process.cwd(), file), missing })
  }

  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  for (const s of scripts) {
    try {
      JSON.parse(s[1])
    } catch (error) {
      failures.push({
        file: path.relative(process.cwd(), file),
        missing: [`Invalid JSON-LD: ${error.message}`],
      })
    }
  }
}

if (failures.length) {
  console.error(`SEO/schema validation failed in ${failures.length} pages:`)
  for (const failure of failures.slice(0, 40)) {
    console.error(`- ${failure.file}: ${failure.missing.join('; ')}`)
  }
  process.exit(1)
}

console.log(`SEO/schema validation passed for ${htmlFiles.length} pages.`)
