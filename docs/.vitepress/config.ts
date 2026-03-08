import { defineConfig } from 'vitepress'
import { sharedHead } from './config/head'
import { buildJsonLd } from './config/schema'
import { DEFAULT_AUTHOR, DEFAULT_TWITTER, buildHreflangTags, resolvePageMeta, slugToTitle, SITE_NAME, SITE_URL } from './config/seo'
import { getUiStrings } from './config/i18n'

import { arNavbar } from './config/nav/ar'
import { deNavbar } from './config/nav/de'
import { enNavbar } from './config/nav/en'
import { esNavbar } from './config/nav/es'
import { frNavbar } from './config/nav/fr'
import { heNavbar } from './config/nav/he'
import { hiNavbar } from './config/nav/hi'
import { idNavbar } from './config/nav/id'
import { itNavbar } from './config/nav/it'
import { jaNavbar } from './config/nav/ja'
import { koNavbar } from './config/nav/ko'
import { nlNavbar } from './config/nav/nl'
import { ptNavbar } from './config/nav/pt'
import { ruNavbar } from './config/nav/ru'
import { zhNavbar } from './config/nav/zh'
import { viNavbar } from './config/nav/vi'
import { trNavbar } from './config/nav/tr'
import { plNavbar } from './config/nav/pl'
import { ukNavbar } from './config/nav/uk'
import { zhtwNavbar } from './config/nav/zh-tw'
import { thNavbar } from './config/nav/th'
import { roNavbar } from './config/nav/ro'

import { arSidebar } from './config/sidebar/ar'
import { deSidebar } from './config/sidebar/de'
import { enSidebar } from './config/sidebar/en'
import { esSidebar } from './config/sidebar/es'
import { frSidebar } from './config/sidebar/fr'
import { heSidebar } from './config/sidebar/he'
import { hiSidebar } from './config/sidebar/hi'
import { idSidebar } from './config/sidebar/id'
import { itSidebar } from './config/sidebar/it'
import { jaSidebar } from './config/sidebar/ja'
import { koSidebar } from './config/sidebar/ko'
import { nlSidebar } from './config/sidebar/nl'
import { ptSidebar } from './config/sidebar/pt'
import { ruSidebar } from './config/sidebar/ru'
import { zhSidebar } from './config/sidebar/zh'
import { viSidebar } from './config/sidebar/vi'
import { trSidebar } from './config/sidebar/tr'
import { plSidebar } from './config/sidebar/pl'
import { ukSidebar } from './config/sidebar/uk'
import { zhtwSidebar } from './config/sidebar/zh-tw'
import { thSidebar } from './config/sidebar/th'
import { roSidebar } from './config/sidebar/ro'

function hasNavItems(nav: unknown): nav is Array<{ text: string; link: string }> {
  // Require at least 2 items — single-item legacy navs should use the
  // full translated fallbackNav instead.
  return Array.isArray(nav) && nav.length >= 6
}

function fallbackNav(prefix: string, aliasSegment = 'aliases') {
  const locale = prefix.replace(/\//g, '') || 'en'
  const t = getUiStrings(locale).nav
  return [
    { text: t.about, link: `${prefix}about/` },
    { text: t.functions, link: `${prefix}functions/` },
    { text: t.paths, link: `${prefix}paths/` },
    { text: t.aliases, link: `${prefix}${aliasSegment}/` },
    { text: t.compatibility, link: `${prefix}compatibility/` },
    { text: t.guides, link: `${prefix}guides/secret-management/` },
  ]
}

type NavItem = { text: string; link?: string; items?: Array<{ text: string; link: string }>; ariaLabel?: string }
function withLocalizedLegalNav(nav: NavItem[]): NavItem[] {
  return nav.filter((item) => item.text !== 'Legal')
}

type LegacySidebarGroup = {
  title?: string
  collapsed?: boolean
  collapsable?: boolean
  children?: string[]
}

function titleFromLink(link: string): string {
  const clean = link.replace(/^\/+|\/+$/g, '')
  if (!clean) return 'Home'
  const last = clean.split('/').pop() || clean
  return slugToTitle(last)
}

function convertSidebar(raw: unknown): Array<{ text: string; collapsed?: boolean; items: Array<{ text: string; link: string }> }> {
  if (!Array.isArray(raw)) return []
  return raw.map((group) => {
    const g = group as LegacySidebarGroup
    const children = Array.isArray(g.children) ? g.children : []
    return {
      text: g.title || 'Section',
      collapsed: g.collapsed ?? g.collapsable ?? false,
      items: children.map((link) => ({ text: titleFromLink(link), link })),
    }
  })
}

function prefixLegacySidebar(raw: unknown, prefix: string): unknown {
  if (!Array.isArray(raw)) return []
  return raw.map((group) => {
    const g = group as LegacySidebarGroup
    return {
      ...g,
      children: Array.isArray(g.children)
        ? g.children.map((link) => (link.startsWith(prefix) ? link : `${prefix}${link.startsWith('/') ? link : `/${link}`}`))
        : [],
    }
  })
}

export default defineConfig({
  title: SITE_NAME,
  description:
    'Cross-platform shell configuration for macOS, Linux, and WSL. Managed by Chezmoi with Zsh, Neovim, and tmux.',
  cleanUrls: true,
  ignoreDeadLinks: [/\/reference(\.md)?$/],
  sitemap: {
    hostname: SITE_URL,
    transformItems(items) {
      return items.map((item) => ({
        ...item,
        lastmod: item.lastmod || new Date().toISOString().split('T')[0],
      }))
    },
  },
  lastUpdated: true,
  head: sharedHead,
  transformPageData(pageData) {
    const fm = pageData.frontmatter
    const meta = resolvePageMeta(pageData)

    if (typeof fm.metaTitle === 'string' && !fm.title) {
      fm.title = fm.metaTitle
    }

    fm.title = fm.title || meta.title

    // Set pageData.title so VitePress's auto-generated <title> includes
    // the locale suffix (e.g. "(FR)") — meta.title already contains it.
    // Use :title to suppress VitePress's default " | SiteName" suffix
    // since meta.title already includes "| Dotfiles".
    pageData.title = meta.title
    pageData.titleTemplate = ':title'
    fm.description = fm.description || meta.description
    fm.lang = fm.lang || meta.locale
    fm.author = fm.author || DEFAULT_AUTHOR
    fm.image = fm.image || '/logo.png'
    fm.imageAlt = fm.imageAlt || meta.title
    fm.canonical = fm.canonical || meta.routePath
    fm.robots = fm.robots || meta.robots
    fm.pageType = fm.pageType || meta.pageType
    fm.schemaType = fm.schemaType || meta.schemaType
    fm.breadcrumbTitle = fm.breadcrumbTitle || fm.title

    if (fm.home === true && !fm.layout) {
      fm.layout = 'home'
    }

    if (fm.layout === 'home' && !fm.hero) {
      const actionText = typeof fm.actionText === 'string' ? fm.actionText : 'Read more'
      const actionLink = typeof fm.actionLink === 'string' ? fm.actionLink : '/en/about/'
      fm.hero = {
        name: typeof fm.heroText === 'string' ? fm.heroText : fm.title || 'Dotfiles',
        text: '',
        tagline: typeof fm.tagline === 'string' ? fm.tagline : fm.subtitle || fm.description || '',
        actions: [
          {
            theme: 'brand',
            text: actionText,
            link: actionLink,
          },
        ],
      }

      if (Array.isArray(fm.features)) {
        fm.features = fm.features.map((feature: Record<string, unknown>) => ({
          title: feature.title || '',
          details: feature.details || '',
        }))
      }
    }
  },
  transformHead({ pageData }) {
    // Root index.md → instant redirect to /en/ (the root locale's link
    // is '/en/' which confuses VitePress's locale-switcher path math).
    if (pageData.relativePath === 'index.md') {
      return [
        ['meta', { 'http-equiv': 'refresh', content: '0;url=/en/' }],
        ['link', { rel: 'canonical', href: `${SITE_URL}/en/` }],
      ]
    }

    const fm = pageData.frontmatter as Record<string, string | undefined>
    const meta = resolvePageMeta(pageData)
    const jsonLd = buildJsonLd(meta, pageData.frontmatter, meta.title, pageData.lastUpdated)
    const datePublished = typeof fm.date === 'string' ? fm.date : undefined
    const dateModified = pageData.lastUpdated ? new Date(pageData.lastUpdated).toISOString() : undefined
    const hreflangTags = buildHreflangTags(meta.routePath)

    return [
      ['meta', { name: 'description', content: meta.description }],
      ['link', { rel: 'canonical', href: meta.canonical }],
      ['meta', { name: 'robots', content: meta.robots }],
      // Open Graph
      ['meta', { property: 'og:type', content: meta.ogType }],
      ['meta', { property: 'og:title', content: meta.title }],
      ['meta', { property: 'og:description', content: meta.description }],
      ['meta', { property: 'og:url', content: meta.canonical }],
      ['meta', { property: 'og:site_name', content: SITE_NAME }],
      ['meta', { property: 'og:locale', content: meta.localeOg }],
      ['meta', { property: 'og:image', content: meta.ogImage }],
      ['meta', { property: 'og:image:alt', content: meta.ogImageAlt }],
      // Twitter/X
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:title', content: meta.title }],
      ['meta', { name: 'twitter:description', content: meta.description }],
      ['meta', { name: 'twitter:image', content: meta.ogImage }],
      ['meta', { name: 'twitter:image:alt', content: meta.ogImageAlt }],
      ['meta', { name: 'twitter:site', content: DEFAULT_TWITTER }],
      ['meta', { name: 'twitter:creator', content: DEFAULT_TWITTER }],
      // Article metadata
      ['meta', { property: 'article:author', content: (fm.author as string) || DEFAULT_AUTHOR }],
      ...(datePublished ? ([['meta', { property: 'article:published_time', content: datePublished }]] as const) : []),
      ...(dateModified ? ([['meta', { property: 'article:modified_time', content: dateModified }]] as const) : []),
      // Hreflang alternate tags for all 15 locales
      ...hreflangTags,
      // JSON-LD structured data
      ['script', { type: 'application/ld+json' }, JSON.stringify(jsonLd)],
    ]
  },
  themeConfig: {
    siteTitle: 'Dotfiles',
    langMenuLabel: 'Languages',
    nav: fallbackNav('/en/'),
    sidebar: convertSidebar(prefixLegacySidebar(enSidebar['/'], '/en')),
    search: {
      provider: 'local',
      options: {
        locales: {
          root: { translations: { button: { buttonText: 'Search' } } },
          en: { translations: { button: { buttonText: 'Search' } } },
          ar: { translations: { button: { buttonText: 'بحث' } } },
          de: { translations: { button: { buttonText: 'Suche' } } },
          es: { translations: { button: { buttonText: 'Buscar' } } },
          fr: { translations: { button: { buttonText: 'Rechercher' } } },
          he: { translations: { button: { buttonText: 'חיפוש' } } },
          hi: { translations: { button: { buttonText: 'खोजें' } } },
          id: { translations: { button: { buttonText: 'Cari' } } },
          it: { translations: { button: { buttonText: 'Cerca' } } },
          ja: { translations: { button: { buttonText: '検索' } } },
          ko: { translations: { button: { buttonText: '검색' } } },
          nl: { translations: { button: { buttonText: 'Zoeken' } } },
          pt: { translations: { button: { buttonText: 'Pesquisar' } } },
          ru: { translations: { button: { buttonText: 'Поиск' } } },
          zh: { translations: { button: { buttonText: '搜索' } } },
          vi: { translations: { button: { buttonText: 'Tìm kiếm' } } },
          tr: { translations: { button: { buttonText: 'Ara' } } },
          pl: { translations: { button: { buttonText: 'Szukaj' } } },
          uk: { translations: { button: { buttonText: 'Пошук' } } },
          'zh-tw': { translations: { button: { buttonText: '搜尋' } } },
          th: { translations: { button: { buttonText: 'ค้นหา' } } },
          ro: { translations: { button: { buttonText: 'Căutare' } } },
        },
      },
    },
    editLink: {
      pattern: 'https://github.com/sebastienrousseau/dotfiles.github.io/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    footer: {
      message: '',
      copyright: '',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/sebastienrousseau/dotfiles.github.io' }],
  },
  locales: {
    root: {
      label: '🇬🇧 English', link: '/en/', lang: 'en-GB', title: 'Dotfiles',
      description: 'Cross-platform shell configuration for macOS, Linux, and WSL. Managed by Chezmoi with Zsh, Neovim, and tmux.',
      themeConfig: { nav: withLocalizedLegalNav(fallbackNav('/en/') as NavItem[]), sidebar: { '/': convertSidebar(enSidebar['/']), '/en/': convertSidebar(prefixLegacySidebar(enSidebar['/'], '/en')) } },
    },
    ar: {
      label: '🇸🇦 العربية', link: '/ar/', lang: 'ar-SA', title: 'Dotfiles',
      description: 'تكوين شل عابر للمنصات لنظام macOS و Linux و WSL. مُدار بواسطة Chezmoi مع Zsh و Neovim و tmux.',
      themeConfig: { nav: withLocalizedLegalNav(fallbackNav('/ar/') as NavItem[]), sidebar: { '/ar/': convertSidebar(arSidebar['/ar/']) } },
    },
    de: {
      label: '🇩🇪 Deutsch', link: '/de/', lang: 'de-DE', title: 'Dotfiles',
      description: 'Plattformübergreifende Shell-Konfiguration für macOS, Linux und WSL. Verwaltet mit Chezmoi, Zsh, Neovim und tmux.',
      themeConfig: { nav: withLocalizedLegalNav(fallbackNav('/de/') as NavItem[]), sidebar: { '/de/': convertSidebar(deSidebar['/de/']) } },
    },
    es: {
      label: '🇪🇸 Español', link: '/es/', lang: 'es-ES', title: 'Dotfiles',
      description: 'Configuración de shell multiplataforma para macOS, Linux y WSL. Gestionada con Chezmoi, Zsh, Neovim y tmux.',
      themeConfig: { nav: withLocalizedLegalNav(fallbackNav('/es/') as NavItem[]), sidebar: { '/es/': convertSidebar(esSidebar['/es/']) } },
    },
    fr: {
      label: '🇫🇷 Français', link: '/fr/', lang: 'fr-FR', title: 'Dotfiles',
      description: 'Configuration shell multiplateforme pour macOS, Linux et WSL. Gérée par Chezmoi avec Zsh, Neovim et tmux.',
      themeConfig: { nav: withLocalizedLegalNav(fallbackNav('/fr/') as NavItem[]), sidebar: { '/fr/': convertSidebar(frSidebar['/fr/']) } },
    },
    he: {
      label: '🇮🇱 עברית', link: '/he/', lang: 'he-IL', title: 'Dotfiles',
      description: 'תצורת של חוצה פלטפורמות עבור macOS, Linux ו-WSL. מנוהל על ידי Chezmoi עם Zsh, Neovim ו-tmux.',
      themeConfig: { nav: withLocalizedLegalNav(fallbackNav('/he/') as NavItem[]), sidebar: { '/he/': convertSidebar(heSidebar['/he/']) } },
    },
    hi: {
      label: '🇮🇳 हिंदी', link: '/hi/', lang: 'hi-IN', title: 'Dotfiles',
      description: 'macOS, Linux और WSL के लिए क्रॉस-प्लेटफ़ॉर्म शेल कॉन्फ़िगरेशन। Chezmoi, Zsh, Neovim और tmux द्वारा प्रबंधित।',
      themeConfig: { nav: withLocalizedLegalNav(fallbackNav('/hi/') as NavItem[]), sidebar: { '/hi/': convertSidebar(hiSidebar['/hi/']) } },
    },
    id: {
      label: '🇮🇩 Bahasa Indonesia', link: '/id/', lang: 'id-ID', title: 'Dotfiles',
      description: 'Konfigurasi shell lintas platform untuk macOS, Linux, dan WSL. Dikelola dengan Chezmoi, Zsh, Neovim, dan tmux.',
      themeConfig: { nav: withLocalizedLegalNav(fallbackNav('/id/') as NavItem[]), sidebar: { '/id/': convertSidebar(idSidebar['/id/']) } },
    },
    it: {
      label: '🇮🇹 Italiano', link: '/it/', lang: 'it-IT', title: 'Dotfiles',
      description: 'Configurazione shell multipiattaforma per macOS, Linux e WSL. Gestita con Chezmoi, Zsh, Neovim e tmux.',
      themeConfig: { nav: withLocalizedLegalNav(fallbackNav('/it/') as NavItem[]), sidebar: { '/it/': convertSidebar(itSidebar['/it/']) } },
    },
    ja: {
      label: '🇯🇵 日本語', link: '/ja/', lang: 'ja-JP', title: 'Dotfiles',
      description: 'macOS、Linux、WSL向けのクロスプラットフォームシェル設定。Chezmoi、Zsh、Neovim、tmuxで管理。',
      themeConfig: { nav: withLocalizedLegalNav(fallbackNav('/ja/', 'alias') as NavItem[]), sidebar: { '/ja/': convertSidebar(jaSidebar['/ja/']) } },
    },
    ko: {
      label: '🇰🇷 한국어', link: '/ko/', lang: 'ko-KR', title: 'Dotfiles',
      description: 'macOS, Linux, WSL을 위한 크로스 플랫폼 셸 구성. Chezmoi, Zsh, Neovim, tmux로 관리.',
      themeConfig: { nav: withLocalizedLegalNav(fallbackNav('/ko/', 'alias') as NavItem[]), sidebar: { '/ko/': convertSidebar(koSidebar['/ko/']) } },
    },
    nl: {
      label: '🇳🇱 Nederlands', link: '/nl/', lang: 'nl-NL', title: 'Dotfiles',
      description: 'Cross-platform shellconfiguratie voor macOS, Linux en WSL. Beheerd met Chezmoi, Zsh, Neovim en tmux.',
      themeConfig: { nav: withLocalizedLegalNav(fallbackNav('/nl/') as NavItem[]), sidebar: { '/nl/': convertSidebar(nlSidebar['/nl/']) } },
    },
    pt: {
      label: '🇧🇷 Português', link: '/pt/', lang: 'pt-BR', title: 'Dotfiles',
      description: 'Configuração de shell multiplataforma para macOS, Linux e WSL. Gerenciada com Chezmoi, Zsh, Neovim e tmux.',
      themeConfig: { nav: withLocalizedLegalNav(fallbackNav('/pt/') as NavItem[]), sidebar: { '/pt/': convertSidebar(ptSidebar['/pt/']) } },
    },
    ru: {
      label: '🇷🇺 Русский', link: '/ru/', lang: 'ru-RU', title: 'Dotfiles',
      description: 'Кроссплатформенная конфигурация оболочки для macOS, Linux и WSL. Управляется Chezmoi с Zsh, Neovim и tmux.',
      themeConfig: { nav: withLocalizedLegalNav(fallbackNav('/ru/', 'alias') as NavItem[]), sidebar: { '/ru/': convertSidebar(ruSidebar['/ru/']) } },
    },
    zh: {
      label: '🇨🇳 简体中文', link: '/zh/', lang: 'zh-CN', title: 'Dotfiles',
      description: '适用于 macOS、Linux 和 WSL 的跨平台 Shell 配置。使用 Chezmoi、Zsh、Neovim 和 tmux 管理。',
      themeConfig: { nav: withLocalizedLegalNav(fallbackNav('/zh/') as NavItem[]), sidebar: { '/zh/': convertSidebar(zhSidebar['/zh/']) } },
    },
    vi: {
      label: '🇻🇳 Tiếng Việt', link: '/vi/', lang: 'vi-VN', title: 'Dotfiles',
      description: 'Cấu hình shell đa nền tảng cho macOS, Linux và WSL. Quản lý bởi Chezmoi với Zsh, Neovim và tmux.',
      themeConfig: { nav: withLocalizedLegalNav(fallbackNav('/vi/') as NavItem[]), sidebar: { '/vi/': convertSidebar(viSidebar['/vi/']) } },
    },
    tr: {
      label: '🇹🇷 Türkçe', link: '/tr/', lang: 'tr-TR', title: 'Dotfiles',
      description: 'macOS, Linux ve WSL için çapraz platform kabuk yapılandırması. Chezmoi, Zsh, Neovim ve tmux ile yönetilir.',
      themeConfig: { nav: withLocalizedLegalNav(fallbackNav('/tr/') as NavItem[]), sidebar: { '/tr/': convertSidebar(trSidebar['/tr/']) } },
    },
    pl: {
      label: '🇵🇱 Polski', link: '/pl/', lang: 'pl-PL', title: 'Dotfiles',
      description: 'Wieloplatformowa konfiguracja powłoki dla macOS, Linux i WSL. Zarządzana przez Chezmoi z Zsh, Neovim i tmux.',
      themeConfig: { nav: withLocalizedLegalNav(fallbackNav('/pl/') as NavItem[]), sidebar: { '/pl/': convertSidebar(plSidebar['/pl/']) } },
    },
    uk: {
      label: '🇺🇦 Українська', link: '/uk/', lang: 'uk-UA', title: 'Dotfiles',
      description: 'Кросплатформна конфігурація оболонки для macOS, Linux та WSL. Керується Chezmoi з Zsh, Neovim та tmux.',
      themeConfig: { nav: withLocalizedLegalNav(fallbackNav('/uk/') as NavItem[]), sidebar: { '/uk/': convertSidebar(ukSidebar['/uk/']) } },
    },
    'zh-tw': {
      label: '🇹🇼 繁體中文', link: '/zh-tw/', lang: 'zh-TW', title: 'Dotfiles',
      description: '適用於 macOS、Linux 和 WSL 的跨平台 Shell 配置。使用 Chezmoi、Zsh、Neovim 和 tmux 管理。',
      themeConfig: { nav: withLocalizedLegalNav(fallbackNav('/zh-tw/') as NavItem[]), sidebar: { '/zh-tw/': convertSidebar(zhtwSidebar['/zh-tw/']) } },
    },
    th: {
      label: '🇹🇭 ไทย', link: '/th/', lang: 'th-TH', title: 'Dotfiles',
      description: 'การกำหนดค่าเชลล์ข้ามแพลตฟอร์มสำหรับ macOS, Linux และ WSL จัดการโดย Chezmoi พร้อม Zsh, Neovim และ tmux',
      themeConfig: { nav: withLocalizedLegalNav(fallbackNav('/th/') as NavItem[]), sidebar: { '/th/': convertSidebar(thSidebar['/th/']) } },
    },
    ro: {
      label: '🇷🇴 Română', link: '/ro/', lang: 'ro-RO', title: 'Dotfiles',
      description: 'Configurare shell cross-platform pentru macOS, Linux și WSL. Gestionată cu Chezmoi, Zsh, Neovim și tmux.',
      themeConfig: { nav: withLocalizedLegalNav(fallbackNav('/ro/') as NavItem[]), sidebar: { '/ro/': convertSidebar(roSidebar['/ro/']) } },
    },
  },
})
