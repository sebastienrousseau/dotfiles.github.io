export const SITE_URL = 'https://dotfiles.io'
export const SITE_NAME = 'Dotfiles'
export const DEFAULT_OG_IMAGE = '/logo.png'
export const DEFAULT_AUTHOR = 'Sebastien Rousseau'
export const DEFAULT_TWITTER = '@wwdseb'

const LOCALE_BY_KEY: Record<string, string> = {
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

export const LOCALE_KEYS = new Set(Object.keys(LOCALE_BY_KEY).filter((k) => k !== 'root'))

export const LOCALE_HOME_LABELS: Record<string, string> = {
  en: 'Home',
  ar: 'الرئيسية',
  de: 'Startseite',
  es: 'Inicio',
  fr: 'Accueil',
  he: 'דף הבית',
  hi: 'मुखपृष्ठ',
  id: 'Beranda',
  it: 'Home',
  ja: 'ホーム',
  ko: '홈',
  nl: 'Home',
  pt: 'Início',
  ru: 'Главная',
  zh: '首页',
  vi: 'Trang chủ',
  tr: 'Ana Sayfa',
  pl: 'Strona główna',
  uk: 'Головна',
  'zh-tw': '首頁',
  th: 'หน้าแรก',
  ro: 'Acasă',
}

// Mapping from locale key to the hreflang value (BCP-47 language tag)
const HREFLANG_BY_KEY: Record<string, string> = {
  en: 'en',
  ar: 'ar',
  de: 'de',
  es: 'es',
  fr: 'fr',
  he: 'he',
  hi: 'hi',
  id: 'id',
  it: 'it',
  ja: 'ja',
  ko: 'ko',
  nl: 'nl',
  pt: 'pt',
  ru: 'ru',
  zh: 'zh',
  vi: 'vi',
  tr: 'tr',
  pl: 'pl',
  uk: 'uk',
  'zh-tw': 'zh-Hant',
  th: 'th',
  ro: 'ro',
}

// All locales now use /aliases/ (ja/ko/ru were migrated from /alias/)

type Frontmatter = Record<string, string | number | boolean | undefined>

export type PageMeta = {
  title: string
  description: string
  canonical: string
  locale: string
  localeOg: string
  ogImage: string
  ogImageAlt: string
  robots: string
  pageType: string
  schemaType: string
  ogType: 'website' | 'article'
  routePath: string
}

export function toAbsoluteUrl(pathname: string): string {
  if (!pathname) return SITE_URL
  if (pathname.startsWith('http://') || pathname.startsWith('https://')) return pathname
  return `${SITE_URL}${pathname.startsWith('/') ? pathname : `/${pathname}`}`
}

export function slugToTitle(value: string): string {
  const map: Record<string, string> = {
    aliases: 'Aliases',
    alias: 'Aliases',
    ai: 'AI',
    npm: 'NPM',
    pnpm: 'PNPM',
    uuid: 'UUID',
    ps: 'PS',
    macos: 'macOS',
  }
  const lower = value.toLowerCase()
  if (map[lower]) return map[lower]
  return value
    .split('-')
    .filter(Boolean)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(' ')
}

function routeFromRelativePath(relativePath: string): string {
  const clean = relativePath
    .replace(/README\.md$/i, '')
    .replace(/index\.md$/i, '')
    .replace(/\.md$/i, '')
    .replace(/\/+$/g, '')
  return clean ? `/${clean}/` : '/'
}

function localeFromRoute(routePath: string): string {
  const segments = routePath.split('/').filter(Boolean)
  const first = segments[0]
  if (first && LOCALE_KEYS.has(first)) return LOCALE_BY_KEY[first]
  return LOCALE_BY_KEY.root
}

function detectPageType(routePath: string, fm: Frontmatter): string {
  if (typeof fm.pageType === 'string' && fm.pageType.trim()) return fm.pageType.trim()
  if (routePath === '/' || /^\/[a-z]{2}(-[a-z]{2})?\/$/i.test(routePath)) return 'home'
  if (routePath === '/404.html' || routePath === '/404/') return '404'
  if (/\/(privacy|terms|accessibility|contact)\//.test(routePath)) return 'legal'
  if (typeof fm.date === 'string' && fm.date.trim()) return 'article'
  return 'docs'
}

function detectSchemaType(pageType: string, fm: Frontmatter): string {
  if (typeof fm.schemaType === 'string' && fm.schemaType.trim()) return fm.schemaType.trim()
  if (pageType === 'home') return 'WebSite'
  if (pageType === 'article') return 'TechArticle'
  return 'WebPage'
}

function normalizedTitle(baseTitle: string): string {
  if (!baseTitle) return SITE_NAME
  return baseTitle.includes(SITE_NAME) ? baseTitle : `${baseTitle} | ${SITE_NAME}`
}

function fallbackDescription(title: string, routePath: string): string {
  if (routePath === '/') {
    return 'Cross-platform shell configuration with security-first defaults for macOS, Linux, and WSL.'
  }
  return `Documentation for ${title.replace(/\s+\|\s+Dotfiles$/, '')} in Dotfiles.`
}

function parseNoindex(fm: Frontmatter, pageType: string): boolean {
  if (pageType === '404') return true
  const noindexRaw = fm.noindex
  if (noindexRaw === true || noindexRaw === 'true') return true
  const draftRaw = fm.draft
  if (draftRaw === true || draftRaw === 'true') return true
  return false
}

/**
 * Build hreflang <link rel="alternate"> tags for all locales.
 * Translates the current page's route to equivalent routes in other locales.
 * Returns HeadConfig[] compatible with VitePress transformHead.
 */
export function buildHreflangTags(routePath: string): Array<[string, Record<string, string>]> {
  // Determine current locale and the path suffix after the locale prefix
  const segments = routePath.split('/').filter(Boolean)
  const first = segments[0]
  const currentLocale = first && LOCALE_KEYS.has(first) ? first : 'en'
  const pathSuffix = LOCALE_KEYS.has(first!) ? `/${segments.slice(1).join('/')}/`.replace(/\/+/g, '/') : routePath

  const tags: Array<[string, Record<string, string>]> = []

  for (const [key, hreflang] of Object.entries(HREFLANG_BY_KEY)) {
    const href = toAbsoluteUrl(`/${key}${pathSuffix}`)
    tags.push(['link', { rel: 'alternate', hreflang, href }])
  }

  // x-default points to English
  const defaultHref = toAbsoluteUrl(`/en${pathSuffix}`)
  tags.push(['link', { rel: 'alternate', hreflang: 'x-default', href: defaultHref }])

  return tags
}

export function resolvePageMeta(pageData: { title?: string; relativePath: string; frontmatter: Frontmatter; description?: string }): PageMeta {
  const fm = pageData.frontmatter
  const routePath = routeFromRelativePath(pageData.relativePath)
  const pageType = detectPageType(routePath, fm)
  const schemaType = detectSchemaType(pageType, fm)
  const baseTitle =
    (typeof fm.title === 'string' && fm.title.trim()) ||
    (typeof fm.metaTitle === 'string' && fm.metaTitle.trim()) ||
    pageData.title ||
    slugToTitle(routePath.split('/').filter(Boolean).at(-1) || 'Dotfiles')
  const localeSegment = routePath.split('/').filter(Boolean)[0]
  const localeSuffix = localeSegment && LOCALE_KEYS.has(localeSegment) ? ` (${localeSegment.toUpperCase()})` : ''
  const titleBaseNormalized = normalizedTitle(baseTitle)
  const title = localeSuffix && !titleBaseNormalized.includes(localeSuffix) ? `${titleBaseNormalized}${localeSuffix}` : titleBaseNormalized
  const description =
    (typeof fm.description === 'string' && fm.description.trim()) || pageData.description || fallbackDescription(title, routePath)
  const locale = (typeof fm.lang === 'string' && fm.lang.trim()) || localeFromRoute(routePath)
  const localeOg = locale.replace('-', '_')
  const canonical = toAbsoluteUrl((typeof fm.canonical === 'string' && fm.canonical.trim()) || routePath)
  const ogImage = toAbsoluteUrl((typeof fm.image === 'string' && fm.image.trim()) || DEFAULT_OG_IMAGE)
  const ogImageAlt = ((typeof fm.imageAlt === 'string' && fm.imageAlt.trim()) || title) as string
  const robots = ((typeof fm.robots === 'string' && fm.robots.trim()) || (parseNoindex(fm, pageType) ? 'noindex, nofollow' : 'index, follow')) as string
  const ogType = pageType === 'home' ? 'website' : 'article'

  return {
    title,
    description,
    canonical,
    locale,
    localeOg,
    ogImage,
    ogImageAlt,
    robots,
    pageType,
    schemaType,
    ogType,
    routePath,
  }
}
