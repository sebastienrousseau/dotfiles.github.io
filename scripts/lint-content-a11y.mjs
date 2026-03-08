import fs from 'node:fs'
import path from 'node:path'

const docsDir = path.resolve('docs')
const reportPath = path.resolve('docs/.vitepress/reports/content-a11y-report.md')
const genericLinkTexts = new Set(['click here', 'here', 'read more', 'learn more', 'more', 'link'])
const genericAltTexts = new Set(['image', 'photo', 'picture', 'banner', 'screenshot', 'graphic'])

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.vitepress') continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, files)
    else if (entry.isFile() && full.endsWith('.md')) files.push(full)
  }
  return files
}

function lineOf(content, index) {
  return content.slice(0, index).split('\n').length
}

function lintFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const rel = path.relative(process.cwd(), filePath)
  const issues = []

  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g
  for (const m of content.matchAll(linkRe)) {
    const text = m[1].trim().toLowerCase()
    if (genericLinkTexts.has(text)) {
      issues.push({ type: 'generic-link-text', line: lineOf(content, m.index), message: `Generic link text "${m[1]}"` })
    }
  }

  const imgRe = /!\[([^\]]*)\]\(([^)]+)\)/g
  for (const m of content.matchAll(imgRe)) {
    const alt = m[1].trim().toLowerCase()
    if (!alt) {
      issues.push({ type: 'missing-image-alt', line: lineOf(content, m.index), message: 'Image is missing alt text' })
    } else if (genericAltTexts.has(alt)) {
      issues.push({ type: 'generic-image-alt', line: lineOf(content, m.index), message: `Generic image alt "${m[1]}"` })
    }
  }

  const isHomePage = /^home:\s*true/m.test(content) || /^pageType:\s*home/m.test(content)
  if (!isHomePage) {
    const contentOutsideFences = content.replace(/^```[\s\S]*?^```/gm, '')
    const h1 = (contentOutsideFences.match(/^#\s+/gm) || []).length
    if (h1 !== 1) {
      issues.push({ type: 'h1-count', line: 1, message: `Expected exactly one H1, found ${h1}` })
    }
  }

  return { rel, issues }
}

const files = walk(docsDir)
const results = files.map(lintFile).filter((r) => r.issues.length > 0)
const issueCount = results.reduce((sum, r) => sum + r.issues.length, 0)

const lines = [
  '# Content Accessibility Lint Report',
  '',
  `- Scanned files: ${files.length}`,
  `- Files with findings: ${results.length}`,
  `- Total findings: ${issueCount}`,
  '',
]

for (const result of results) {
  lines.push(`## ${result.rel}`)
  for (const issue of result.issues) {
    lines.push(`- [${issue.type}] line ${issue.line}: ${issue.message}`)
  }
  lines.push('')
}

fs.mkdirSync(path.dirname(reportPath), { recursive: true })
fs.writeFileSync(reportPath, `${lines.join('\n').trim()}\n`)

console.log(`Generated report: ${reportPath}`)
console.log(`Findings: ${issueCount}`)
