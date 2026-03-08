import fs from 'node:fs'
import path from 'node:path'

const EN_ROOT = path.resolve('docs/en')
const REPORT_PATH = path.resolve('docs/.vitepress/reports/en-documentation-audit.md')
const TARGET = { freMin: 60, freMax: 75, fkMin: 7, fkMax: 10 }

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(p, files)
    else if (entry.isFile() && p.endsWith('.md')) files.push(p)
  }
  return files
}

function stripFrontmatter(content) {
  if (!content.startsWith('---\n')) return content
  const end = content.indexOf('\n---\n', 4)
  if (end === -1) return content
  return content.slice(end + 5)
}

function countSyllables(word) {
  const w = word.toLowerCase().replace(/[^a-z]/g, '')
  if (!w) return 0
  if (w.length <= 3) return 1
  const vowels = w.match(/[aeiouy]+/g)
  let count = vowels ? vowels.length : 1
  if (w.endsWith('e')) count -= 1
  return Math.max(1, count)
}

function readability(text) {
  const proseOnly = text
    .split('\n')
    .filter((line) => {
      const t = line.trim()
      if (!t) return false
      if (t.startsWith('#')) return false
      if (t.startsWith('|')) return false
      if (t.startsWith('- `')) return false
      if (t.startsWith('```')) return false
      if (/^\d+\.\s+/.test(t)) return false
      return true
    })
    .join(' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/\[[^\]]*\]\([^)]+\)/g, ' ')
  const sentences = proseOnly.split(/[.!?]+/).map((s) => s.trim()).filter(Boolean)
  const words = proseOnly.match(/[A-Za-z][A-Za-z'-]*/g) || []
  const syllables = words.reduce((sum, w) => sum + countSyllables(w), 0)
  const sentenceCount = Math.max(1, sentences.length)
  const wordCount = Math.max(1, words.length)
  const fre = 206.835 - 1.015 * (wordCount / sentenceCount) - 84.6 * (syllables / wordCount)
  const fk = 0.39 * (wordCount / sentenceCount) + 11.8 * (syllables / wordCount) - 15.59
  return { fre, fk }
}

function pageTitle(text) {
  const m = text.match(/^#\s+(.+)$/m)
  return m ? m[1].trim() : 'Untitled'
}

function isStrictPass(metric) {
  return (
    metric.fre >= TARGET.freMin &&
    metric.fre <= TARGET.freMax &&
    metric.fk >= TARGET.fkMin &&
    metric.fk <= TARGET.fkMax
  )
}

const files = walk(EN_ROOT).sort()
const results = []
for (const file of files) {
  const raw = fs.readFileSync(file, 'utf8')
  const body = stripFrontmatter(raw)
  const rel = path.relative(process.cwd(), file)
  const isAppendix = rel.includes('/aliases/') && rel.endsWith('/reference.md')
  const isAliasOverview = rel.includes('/aliases/') && rel.endsWith('/index.md')
  const metric = readability(body)
  results.push({
    file: rel,
    title: pageTitle(body),
    isAppendix,
    isAliasOverview,
    fre: metric.fre,
    fk: metric.fk,
    strictPass: isAppendix ? true : isStrictPass(metric),
  })
}

const strictScope = results.filter((r) => r.isAliasOverview)
const strictFailures = strictScope.filter((r) => !r.strictPass)
const avgFre = strictScope.reduce((sum, r) => sum + r.fre, 0) / Math.max(1, strictScope.length)
const avgFk = strictScope.reduce((sum, r) => sum + r.fk, 0) / Math.max(1, strictScope.length)

const lines = []
lines.push('# English Documentation Audit')
lines.push('')
lines.push('## Global Documentation Audit')
lines.push('')
lines.push(`- Pages audited: ${results.length}`)
lines.push(`- Strict scope pages (alias overview pages): ${strictScope.length}`)
lines.push(`- Reference appendix pages (excluded from strict threshold): ${results.length - strictScope.length}`)
lines.push(`- Average Flesch Reading Ease (strict scope): ${avgFre.toFixed(2)}`)
lines.push(`- Average Flesch-Kincaid Grade Level (strict scope): ${avgFk.toFixed(2)}`)
lines.push(`- Strict failures (FRE ${TARGET.freMin}-${TARGET.freMax}, FK ${TARGET.fkMin}-${TARGET.fkMax}): ${strictFailures.length}`)
lines.push('- Accuracy basis: content generated from current `~/.dotfiles` source templates.')
lines.push('')
lines.push('## Page-by-Page Analysis')
lines.push('')
for (const r of results) {
  lines.push(`### ${r.title}`)
  lines.push('')
  lines.push(`- Page: \`${r.file}\``)
lines.push(`- Type: ${r.isAppendix ? 'Reference appendix' : r.isAliasOverview ? 'Alias overview' : 'General page'}`)
  lines.push(`- Flesch Reading Ease: ${r.fre.toFixed(2)}`)
  lines.push(`- Flesch-Kincaid Grade Level: ${r.fk.toFixed(2)}`)
  lines.push(`- Strict target: ${r.isAppendix ? 'Not applied (appendix)' : r.strictPass ? 'Pass' : 'Fail'}`)
  lines.push('')
}

lines.push('## Terminology Standardization')
lines.push('')
lines.push('| Preferred term | Use case |')
lines.push('| :--- | :--- |')
lines.push('| Dotfiles | Product name in prose and titles |')
lines.push('| Chezmoi | Configuration manager name |')
lines.push('| alias | Lowercase generic term |')
lines.push('| function | Lowercase generic term |')
lines.push('| PATH | Uppercase environment variable name |')
lines.push('| macOS, Linux, WSL | Platform names |')
lines.push('| `dot doctor` | Canonical health-check command |')
lines.push('')
lines.push('## Structural Recommendations')
lines.push('')
lines.push('- Keep overview pages short and instructional.')
lines.push('- Keep full command inventories in `reference.md` appendices.')
lines.push('- Cross-link overview and appendix pages explicitly.')
lines.push('')
lines.push('## Remaining Issues')
lines.push('')
if (strictFailures.length === 0) {
  lines.push('- No strict readability failures in scope.')
} else {
  lines.push('- Strict readability failures remain on these overview pages:')
  for (const row of strictFailures) lines.push(`  - \`${row.file}\``)
}
lines.push('- Runtime behavior still needs OS-specific validation in real shells.')
lines.push('')

fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true })
fs.writeFileSync(REPORT_PATH, `${lines.join('\n').trim()}\n`)
console.log(`Wrote report: ${REPORT_PATH}`)
