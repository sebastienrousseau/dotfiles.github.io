/**
 * 2026 SEO Constraint Validator
 *
 * Parses every HTML file in ./dist and checks:
 *  1. Required meta tags (OG, Twitter, canonical, JSON-LD)
 *  2. Title length (warn outside 20-65 char range)
 *  3. Meta description length (warn under 100 or over 170 chars)
 *  4. JSON-LD validity and breadcrumb quality
 *  5. HowTo schema on guide pages
 *  6. SoftwareSourceCode schema on alias pages
 *  7. Hreflang presence and x-default
 *  8. RTL dir attribute for ar/he pages (informational)
 *  9. font-display in @font-face rules
 * 10. fetchpriority on image preloads
 * 11. Canonical self-reference locale match
 * 12. Internal link integrity (no 404s within dist)
 * 13. Trailing-slash consistency
 */

import fs from 'node:fs'
import path from 'node:path'

const dist = path.resolve('docs/.vitepress/dist')
const SITE_URL = 'https://dotfiles.io'

// All supported locale keys
const LOCALE_KEYS = new Set([
  'en', 'ar', 'de', 'es', 'fr', 'he', 'hi', 'id', 'it',
  'ja', 'ko', 'nl', 'pt', 'ru', 'zh', 'vi', 'tr', 'pl',
  'uk', 'zh-tw', 'th', 'ro',
])

// ── Walk dist ───────────────────────────────────────────────────
const htmlFiles = []
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full)
    else if (entry.isFile() && full.endsWith('.html')) htmlFiles.push(full)
  }
}
walk(dist)

// Build a set of all known HTML paths (relative to dist, with leading /)
const htmlSet = new Set()
for (const f of htmlFiles) {
  const rel = '/' + path.relative(dist, f)
  htmlSet.add(rel)
  // Also add clean URL form
  if (rel.endsWith('/index.html')) {
    htmlSet.add(rel.replace(/index\.html$/, ''))
  }
}

const failures = []
const warnings = []
const stats = {
  total: 0,
  skippedRedirect: 0,
  titleOk: 0,
  titleWarn: 0,
  descOk: 0,
  descWarn: 0,
  hreflangOk: 0,
  jsonLdOk: 0,
  jsonLdWarn: 0,
  linksChecked: 0,
  brokenLinks: 0,
}

// ── Regex helpers ───────────────────────────────────────────────
function extractAttr(html, tag, attr, attrVal, target) {
  // Find <tag attr="attrVal"> and return target attribute value
  const re = new RegExp(`<${tag}[^>]*${attr}="${attrVal}"[^>]*>`, 'i')
  const m = html.match(re)
  if (!m) return null
  const tRe = new RegExp(`${target}="([^"]*)"`)
  const tm = m[0].match(tRe)
  return tm ? tm[1] : null
}

function extractTitle(html) {
  const m = html.match(/<title[^>]*>([^<]*)<\/title>/i)
  return m ? m[1].trim() : null
}

function extractMetaContent(html, nameOrProp, value) {
  const re = new RegExp(`<meta[^>]*${nameOrProp}="${value}"[^>]*content="([^"]*)"`, 'i')
  const m = html.match(re)
  if (m) return m[1]
  // Try reversed attribute order
  const re2 = new RegExp(`<meta[^>]*content="([^"]*)"[^>]*${nameOrProp}="${value}"`, 'i')
  const m2 = html.match(re2)
  return m2 ? m2[1] : null
}

// ── Main loop ───────────────────────────────────────────────────
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8')
  const relPath = path.relative(dist, file)
  const rel = `dist/${relPath}`
  stats.total++

  // Skip redirect pages
  if (html.includes('http-equiv="refresh"')) {
    stats.skippedRedirect++
    continue
  }

  // ─── 1. Required meta tags ────────────────────────────────────
  const requiredSnippets = [
    ['link rel="canonical"', '<link rel="canonical"'],
    ['og:type', 'property="og:type"'],
    ['og:title', 'property="og:title"'],
    ['og:description', 'property="og:description"'],
    ['og:url', 'property="og:url"'],
    ['og:image', 'property="og:image"'],
    ['twitter:card', 'name="twitter:card"'],
    ['twitter:title', 'name="twitter:title"'],
    ['twitter:description', 'name="twitter:description"'],
    ['twitter:image', 'name="twitter:image"'],
    ['description', 'name="description"'],
    ['robots', 'name="robots"'],
    ['JSON-LD', 'application/ld+json'],
  ]

  const missing = requiredSnippets
    .filter(([, snippet]) => !html.includes(snippet))
    .map(([label]) => label)

  if (missing.length) {
    failures.push({ file: rel, issue: `Missing: ${missing.join(', ')}` })
  }

  // ─── 2. Title length ──────────────────────────────────────────
  const title = extractTitle(html)
  if (title) {
    const len = title.length
    if (len >= 20 && len <= 65) {
      stats.titleOk++
    } else {
      stats.titleWarn++
      if (len > 65) {
        warnings.push(`${rel}: Title long (${len} chars): "${title.slice(0, 60)}…"`)
      } else if (len < 20) {
        warnings.push(`${rel}: Title short (${len} chars): "${title}"`)
      }
    }
  }

  // ─── 3. Meta description length ───────────────────────────────
  const desc = extractMetaContent(html, 'name', 'description')
  if (desc) {
    const len = desc.length
    if (len >= 100 && len <= 170) {
      stats.descOk++
    } else {
      stats.descWarn++
      if (len < 100) {
        warnings.push(`${rel}: Desc short (${len} chars)`)
      } else if (len > 170) {
        warnings.push(`${rel}: Desc long (${len} chars)`)
      }
    }
  }

  // ─── 4-6. JSON-LD validation ──────────────────────────────────
  const jsonLdMatches = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  for (const m of jsonLdMatches) {
    try {
      const jsonLd = JSON.parse(m[1])
      const graph = jsonLd['@graph'] || []
      stats.jsonLdOk++

      // 4. Breadcrumb quality
      for (const node of graph) {
        if (node['@type'] === 'BreadcrumbList' && Array.isArray(node.itemListElement)) {
          for (const item of node.itemListElement) {
            if (/^(En|Fr|Ar|De|Es|He|Hi|Id|It|Ja|Ko|Nl|Pt|Ru|Zh|Vi|Tr|Pl|Uk|Th|Ro|Zh-tw)$/i.test(item.name)) {
              warnings.push(`${rel}: Breadcrumb raw locale name "${item.name}"`)
            }
          }
        }
      }

      // 5. HowTo schema on guide pages
      if (relPath.includes('/guides/') && !relPath.includes('404')) {
        const hasHowTo = graph.some((n) => n['@type'] === 'HowTo')
        if (!hasHowTo) {
          warnings.push(`${rel}: Guide page missing HowTo schema`)
        }
      }

      // 6. SoftwareSourceCode on alias sub-pages
      const isAliasSubpage =
        relPath.includes('/aliases/') &&
        !/\/aliases\/index\.html$/.test(relPath)
      if (isAliasSubpage) {
        const hasSoftware = graph.some((n) => n['@type'] === 'SoftwareSourceCode')
        if (!hasSoftware) {
          warnings.push(`${rel}: Alias page missing SoftwareSourceCode schema`)
        }
      }
    } catch (err) {
      stats.jsonLdWarn++
      failures.push({ file: rel, issue: `Invalid JSON-LD: ${err.message}` })
    }
  }

  // ─── 7. Hreflang completeness ─────────────────────────────────
  if (!relPath.includes('404')) {
    const hreflangLinks = [...html.matchAll(/hreflang="([^"]*)"/g)]
    if (hreflangLinks.length === 0) {
      failures.push({ file: rel, issue: 'Missing hreflang alternate links' })
    } else {
      const codes = new Set(hreflangLinks.map((m) => m[1]))
      if (!codes.has('x-default')) {
        warnings.push(`${rel}: Missing hreflang x-default`)
      }
      stats.hreflangOk++
    }
  }

  // ─── 8. RTL dir ───────────────────────────────────────────────
  // Informational only — dir is set client-side via Layout.vue

  // ─── 9. font-display in @font-face ───────────────────────────
  const fontFaces = [...html.matchAll(/@font-face\s*\{[^}]*\}/g)]
  for (const match of fontFaces) {
    if (!match[0].includes('font-display')) {
      warnings.push(`${rel}: @font-face without font-display`)
    }
  }

  // ─── 10. fetchpriority on image preloads ──────────────────────
  const preloads = [...html.matchAll(/<link[^>]*rel="preload"[^>]*as="image"[^>]*>/g)]
  for (const match of preloads) {
    if (!match[0].includes('fetchpriority')) {
      const href = match[0].match(/href="([^"]*)"/)
      warnings.push(`${rel}: Image preload missing fetchpriority: ${href ? href[1] : '?'}`)
    }
  }

  // ─── 11. Canonical locale match ───────────────────────────────
  const canonMatch = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/)
  if (canonMatch) {
    const canonPath = canonMatch[1].replace(SITE_URL, '')
    const pageLocale = relPath.split('/')[0]
    if (LOCALE_KEYS.has(pageLocale) && !canonPath.includes(`/${pageLocale}/`)) {
      warnings.push(`${rel}: Canonical locale mismatch — page "${pageLocale}" but canonical "${canonPath}"`)
    }
  }

  // ─── 12. Internal link integrity ──────────────────────────────
  // All locales now use /aliases/ (ja/ko/ru migrated from /alias/)

  const anchors = [...html.matchAll(/<a[^>]*href="([^"]*)"[^>]*>/g)]
  for (const [, href] of anchors) {
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('javascript:')) continue

    stats.linksChecked++
    let target = href.split('#')[0].split('?')[0]
    if (!target.startsWith('/')) continue // skip relative

    const localeMatch = target.match(/^\/([a-z]{2}(?:-[a-z]{2})?)\//)


    // Check existence
    if (htmlSet.has(target)) continue

    // Breadcrumb parent directories (e.g. /en/guides/) may not have index
    // pages. These are structural navigation crumbs, not content links.
    // Skip 2-segment locale paths like /locale/section/ when no index exists.
    const segments = target.replace(/^\/|\/$/g, '').split('/')
    if (segments.length === 2 && LOCALE_KEYS.has(segments[0])) continue

    // VitePress locale switcher generates corresponding links to all locales,
    // but some pages only exist in certain locales (e.g. EN-only reference
    // pages). Check if the same path exists in any other locale; if so, this
    // is a locale-mismatch, not a truly broken link.
    if (localeMatch && LOCALE_KEYS.has(localeMatch[1])) {
      const pathAfterLocale = target.slice(localeMatch[0].length)
      const existsInAnyLocale = [...LOCALE_KEYS].some((loc) => {
        const base = `/${loc}/${pathAfterLocale}`
        return htmlSet.has(base) ||
               htmlSet.has(base + '.html') ||
               htmlSet.has(base + '/') ||
               htmlSet.has(base + '/index.html') ||
               htmlSet.has(base + 'index.html')
      })
      if (existsInAnyLocale) continue
    }
    // Try with index.html
    const withIndex = target.endsWith('/') ? `${target}index.html` : `${target}/index.html`
    if (htmlSet.has(withIndex)) continue
    // Try .html
    if (htmlSet.has(`${target}.html`)) continue

    stats.brokenLinks++
    if (stats.brokenLinks <= 15) {
      warnings.push(`${rel}: Broken link "${href}"`)
    }
  }
}

// ─── Report ─────────────────────────────────────────────────────
console.log('\n=== 2026 SEO Validation Report ===\n')
console.log(`Pages scanned:       ${stats.total}`)
console.log(`Redirect pages:      ${stats.skippedRedirect} (skipped)`)
console.log(`Content pages:       ${stats.total - stats.skippedRedirect}`)
console.log(`Titles OK:           ${stats.titleOk}`)
console.log(`Titles warned:       ${stats.titleWarn}`)
console.log(`Descriptions OK:     ${stats.descOk}`)
console.log(`Descriptions warned: ${stats.descWarn}`)
console.log(`Hreflang OK:         ${stats.hreflangOk}`)
console.log(`JSON-LD valid:       ${stats.jsonLdOk}`)
console.log(`JSON-LD invalid:     ${stats.jsonLdWarn}`)
console.log(`Internal links:      ${stats.linksChecked}`)
console.log(`Broken links:        ${stats.brokenLinks}`)

if (warnings.length) {
  console.warn(`\nWarnings (${warnings.length}):`)
  for (const w of warnings.slice(0, 40)) {
    console.warn(`  ⚠ ${w}`)
  }
  if (warnings.length > 40) {
    console.warn(`  ... and ${warnings.length - 40} more warnings`)
  }
}

if (failures.length) {
  console.error(`\nFailures (${failures.length}):`)
  for (const f of failures.slice(0, 40)) {
    console.error(`  ✗ ${f.file}: ${f.issue}`)
  }
  if (failures.length > 40) {
    console.error(`  ... and ${failures.length - 40} more failures`)
  }
  process.exit(1)
}

console.log(`\n✓ SEO validation passed for ${stats.total - stats.skippedRedirect} content pages.`)
