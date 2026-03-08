import fs from 'node:fs'
import path from 'node:path'
import YAML from 'yaml'

const DOCS_DIR = path.resolve('docs')
const SITE = 'Dotfiles'
const DEFAULT_IMAGE = '/logo.png'
const DEFAULT_AUTHOR = 'Sebastien Rousseau'
const LOCALES = new Set(['en', 'ar', 'de', 'es', 'fr', 'he', 'hi', 'id', 'it', 'ja', 'ko', 'nl', 'pt', 'ru', 'zh', 'vi', 'tr', 'pl', 'uk', 'zh-tw', 'th', 'ro'])
const LOCALE_LANG = {
  root: 'en-GB',
  en: 'en-GB',
  ar: 'ar-SA',
  de: 'de-DE',
  es: 'es-ES',
  fr: 'fr-FR',
  he: 'he-IL',
  hi: 'hi-IN',
  id: 'id-ID',
  it: 'it-IT',
  ja: 'ja-JP',
  ko: 'ko-KR',
  nl: 'nl-NL',
  pt: 'pt-BR',
  ru: 'ru-RU',
  zh: 'zh-CN',
  vi: 'vi-VN',
  tr: 'tr-TR',
  pl: 'pl-PL',
  uk: 'uk-UA',
  'zh-tw': 'zh-TW',
  th: 'th-TH',
  ro: 'ro-RO',
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.vitepress') continue
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(fullPath, files)
    } else if (entry.isFile() && fullPath.endsWith('.md')) {
      files.push(fullPath)
    }
  }
  return files
}

function splitFrontmatter(content) {
  if (!content.startsWith('---\n')) return { fm: {}, body: content, hasFm: false }
  const end = content.indexOf('\n---\n', 4)
  if (end === -1) return { fm: {}, body: content, hasFm: false }
  const fmRaw = content.slice(4, end)
  const body = content.slice(end + 5)
  const fm = YAML.parse(fmRaw) ?? {}
  return { fm, body, hasFm: true }
}

function extractFirstHeading(body) {
  const match = body.match(/^#\s+(.+)$/m)
  return match ? match[1].trim() : ''
}

function extractFirstParagraph(body) {
  const lines = body.split('\n').map((line) => line.trim())
  const candidates = lines.filter(
    (line) =>
      line &&
      !line.startsWith('#') &&
      !line.startsWith('![') &&
      !line.startsWith('|') &&
      !line.startsWith('```') &&
      !line.startsWith('<!--') &&
      !line.startsWith('- ') &&
      !line.startsWith('* ') &&
      !line.startsWith('1. ')
  )
  return candidates[0] || ''
}

function titleFromMetaTitle(metaTitle) {
  if (!metaTitle || typeof metaTitle !== 'string') return ''
  return metaTitle.replace(/\s*[-|]\s*Dotfiles(?:\s*\(.+\))?\s*$/i, '').trim()
}

function routeFromFile(filePath) {
  const rel = path.relative(DOCS_DIR, filePath).replace(/\\/g, '/')
  const route = rel.replace(/index\.md$/i, '').replace(/\.md$/i, '').replace(/\/+$/, '')
  return route ? `/${route}/` : '/'
}

function detectLocale(route) {
  const first = route.split('/').filter(Boolean)[0]
  if (first && LOCALES.has(first)) return first
  return 'root'
}

function detectPageType(route, fm) {
  if (typeof fm.pageType === 'string' && fm.pageType.trim()) return fm.pageType
  if (route === '/' || /^\/[a-z]{2}(-[a-z]{2})?\/$/i.test(route)) return 'home'
  if (/\/(accessibility|privacy|terms|contact)\//.test(route)) return 'legal'
  if (typeof fm.date === 'string' && fm.date.trim()) return 'article'
  return 'docs'
}

function schemaFromPageType(pageType, fm) {
  if (typeof fm.schemaType === 'string' && fm.schemaType.trim()) return fm.schemaType
  if (pageType === 'home') return 'WebSite'
  if (pageType === 'article') return 'TechArticle'
  return 'WebPage'
}

function ensureSiteTitle(title) {
  if (!title) return SITE
  return title.includes(SITE) ? title : `${title} | ${SITE}`
}

function deriveTitle(fm, body, route) {
  const t1 = typeof fm.title === 'string' ? fm.title.trim() : ''
  if (t1) return t1
  const t2 = titleFromMetaTitle(fm.metaTitle)
  if (t2) return t2
  const t3 = extractFirstHeading(body)
  if (t3) return t3
  const last = route.split('/').filter(Boolean).at(-1) || SITE
  return last
    .split('-')
    .filter(Boolean)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(' ')
}

function deriveDescription(fm, body, title) {
  const existing = typeof fm.description === 'string' ? fm.description.trim() : ''
  if (existing) return existing
  const paragraph = extractFirstParagraph(body)
  const candidate = paragraph || `Documentation for ${title}.`
  return candidate.length > 160 ? `${candidate.slice(0, 157).trimEnd()}...` : candidate
}

function writeFileWithFm(filePath, fm, body) {
  const yaml = YAML.stringify(fm, { lineWidth: 0 }).trimEnd()
  const out = `---\n${yaml}\n---\n\n${body.replace(/^\n+/, '')}`
  fs.writeFileSync(filePath, out)
}

const files = walk(DOCS_DIR)
let changed = 0

for (const filePath of files) {
  const original = fs.readFileSync(filePath, 'utf8')
  const { fm, body } = splitFrontmatter(original)
  const route = routeFromFile(filePath)
  const localeKey = detectLocale(route)
  const pageType = detectPageType(route, fm)
  const schemaType = schemaFromPageType(pageType, fm)
  const title = deriveTitle(fm, body, route)
  const description = deriveDescription(fm, body, title)
  const robots =
    typeof fm.robots === 'string' && fm.robots.trim()
      ? fm.robots
      : fm.noindex === true || fm.noindex === 'true' || fm.draft === true || fm.draft === 'true'
      ? 'noindex, nofollow'
      : 'index, follow'

  const ordered = {
    title: ensureSiteTitle(title),
    description,
    lang: typeof fm.lang === 'string' && fm.lang.trim() ? fm.lang : LOCALE_LANG[localeKey],
    author: typeof fm.author === 'string' && fm.author.trim() ? fm.author : DEFAULT_AUTHOR,
    lastUpdated: fm.lastUpdated ?? true,
    image: typeof fm.image === 'string' && fm.image.trim() ? fm.image : DEFAULT_IMAGE,
    imageAlt: typeof fm.imageAlt === 'string' && fm.imageAlt.trim() ? fm.imageAlt : `${title} preview`,
    canonical: typeof fm.canonical === 'string' && fm.canonical.trim() ? fm.canonical : route,
    robots,
    draft: fm.draft ?? false,
    noindex: fm.noindex ?? false,
    sitemap: fm.sitemap ?? true,
    breadcrumbTitle: typeof fm.breadcrumbTitle === 'string' && fm.breadcrumbTitle.trim() ? fm.breadcrumbTitle : title,
    pageType,
    schemaType,
    ...fm,
  }

  const before = original
  writeFileWithFm(filePath, ordered, body)
  const after = fs.readFileSync(filePath, 'utf8')
  if (after !== before) changed += 1
}

console.log(`Normalized frontmatter in ${changed} files.`)
