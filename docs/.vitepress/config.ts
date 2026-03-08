import { defineConfig } from 'vitepress'
import { sharedHead } from './config/head'
import { buildJsonLd } from './config/schema'
import { DEFAULT_AUTHOR, DEFAULT_TWITTER, buildHreflangTags, resolvePageMeta, slugToTitle, SITE_NAME, SITE_URL } from './config/seo'

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
  return Array.isArray(nav) && nav.length > 0
}

function fallbackNav(prefix: string, aliasSegment = 'aliases') {
  return [
    { text: 'About', link: `${prefix}about/` },
    { text: 'Functions', link: `${prefix}functions/` },
    { text: 'Paths', link: `${prefix}paths/` },
    { text: 'Aliases', link: `${prefix}${aliasSegment}/` },
    { text: 'Compatibility', link: `${prefix}compatibility/` },
    { text: 'Guides', link: `${prefix}guides/secret-management/` },
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
    const fm = pageData.frontmatter as Record<string, string | undefined>
    const meta = resolvePageMeta(pageData)
    const jsonLd = buildJsonLd(meta, pageData.frontmatter, meta.title, pageData.lastUpdated)
    const datePublished = typeof fm.date === 'string' ? fm.date : undefined
    const dateModified = pageData.lastUpdated ? new Date(pageData.lastUpdated).toISOString() : undefined
    const hreflangTags = buildHreflangTags(meta.routePath)

    return [
      ['title', {}, meta.title],
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
    nav: withLocalizedLegalNav([
      { text: 'About', link: '/en/about/' },
      { text: 'Functions', link: '/en/functions/' },
      { text: 'Paths', link: '/en/paths/' },
      { text: 'Aliases', link: '/en/aliases/' },
      { text: 'Compatibility', link: '/en/compatibility/' },
      { text: 'Guides', link: '/en/guides/secret-management/' },
      {
        text: 'Languages',
        items: [
          { text: 'English', link: '/en/' },
          { text: 'العربية', link: '/ar/' },
          { text: 'Deutsch', link: '/de/' },
          { text: 'Español', link: '/es/' },
          { text: 'Français', link: '/fr/' },
          { text: 'עברית', link: '/he/' },
          { text: 'हिंदी', link: '/hi/' },
          { text: 'Bahasa Indonesia', link: '/id/' },
          { text: 'Italiano', link: '/it/' },
          { text: '日本語', link: '/ja/' },
          { text: '한국어', link: '/ko/' },
          { text: 'Nederlands', link: '/nl/' },
          { text: 'Português', link: '/pt/' },
          { text: 'Русский', link: '/ru/' },
          { text: '简体中文', link: '/zh/' },
          { text: 'Tiếng Việt', link: '/vi/' },
          { text: 'Türkçe', link: '/tr/' },
          { text: 'Polski', link: '/pl/' },
          { text: 'Українська', link: '/uk/' },
          { text: '繁體中文', link: '/zh-tw/' },
          { text: 'ไทย', link: '/th/' },
          { text: 'Română', link: '/ro/' },
        ],
      },
    ]),
    sidebar: {
      '/': convertSidebar(enSidebar['/']),
      '/en/': convertSidebar(prefixLegacySidebar(enSidebar['/'], '/en')),
      '/ar/': convertSidebar(arSidebar['/ar/']),
      '/de/': convertSidebar(deSidebar['/de/']),
      '/es/': convertSidebar(esSidebar['/es/']),
      '/fr/': convertSidebar(frSidebar['/fr/']),
      '/he/': convertSidebar(heSidebar['/he/']),
      '/hi/': convertSidebar(hiSidebar['/hi/']),
      '/id/': convertSidebar(idSidebar['/id/']),
      '/it/': convertSidebar(itSidebar['/it/']),
      '/ja/': convertSidebar(jaSidebar['/ja/']),
      '/ko/': convertSidebar(koSidebar['/ko/']),
      '/nl/': convertSidebar(nlSidebar['/nl/']),
      '/pt/': convertSidebar(ptSidebar['/pt/']),
      '/ru/': convertSidebar(ruSidebar['/ru/']),
      '/zh/': convertSidebar(zhSidebar['/zh/']),
      '/vi/': convertSidebar(viSidebar['/vi/']),
      '/tr/': convertSidebar(trSidebar['/tr/']),
      '/pl/': convertSidebar(plSidebar['/pl/']),
      '/uk/': convertSidebar(ukSidebar['/uk/']),
      '/zh-tw/': convertSidebar(zhtwSidebar['/zh-tw/']),
      '/th/': convertSidebar(thSidebar['/th/']),
      '/ro/': convertSidebar(roSidebar['/ro/']),
    },
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
    locales: {
      root: {
        label: 'English',
        link: '/',
        nav: withLocalizedLegalNav((hasNavItems(enNavbar) ? enNavbar : fallbackNav('/en/')) as NavItem[]),
        sidebar: convertSidebar(prefixLegacySidebar(enSidebar['/'], '/en')),
      },
      en: {
        label: 'English',
        link: '/en/',
        nav: withLocalizedLegalNav((hasNavItems(enNavbar) ? enNavbar : fallbackNav('/en/')) as NavItem[]),
        sidebar: convertSidebar(prefixLegacySidebar(enSidebar['/'], '/en')),
      },
      ar: {
        label: 'العربية',
        link: '/ar/',
        nav: withLocalizedLegalNav((hasNavItems(arNavbar) ? arNavbar : fallbackNav('/ar/')) as NavItem[]),
        sidebar: convertSidebar(arSidebar['/ar/']),
      },
      de: {
        label: 'Deutsch',
        link: '/de/',
        nav: withLocalizedLegalNav((hasNavItems(deNavbar) ? deNavbar : fallbackNav('/de/')) as NavItem[]),
        sidebar: convertSidebar(deSidebar['/de/']),
      },
      es: {
        label: 'Español',
        link: '/es/',
        nav: withLocalizedLegalNav((hasNavItems(esNavbar) ? esNavbar : fallbackNav('/es/')) as NavItem[]),
        sidebar: convertSidebar(esSidebar['/es/']),
      },
      fr: {
        label: 'Français',
        link: '/fr/',
        nav: withLocalizedLegalNav((hasNavItems(frNavbar) ? frNavbar : fallbackNav('/fr/')) as NavItem[]),
        sidebar: convertSidebar(frSidebar['/fr/']),
      },
      he: {
        label: 'עברית',
        link: '/he/',
        nav: withLocalizedLegalNav((hasNavItems(heNavbar) ? heNavbar : fallbackNav('/he/')) as NavItem[]),
        sidebar: convertSidebar(heSidebar['/he/']),
      },
      hi: {
        label: 'हिंदी',
        link: '/hi/',
        nav: withLocalizedLegalNav((hasNavItems(hiNavbar) ? hiNavbar : fallbackNav('/hi/')) as NavItem[]),
        sidebar: convertSidebar(hiSidebar['/hi/']),
      },
      id: {
        label: 'Bahasa Indonesia',
        link: '/id/',
        nav: withLocalizedLegalNav((hasNavItems(idNavbar) ? idNavbar : fallbackNav('/id/')) as NavItem[]),
        sidebar: convertSidebar(idSidebar['/id/']),
      },
      it: {
        label: 'Italiano',
        link: '/it/',
        nav: withLocalizedLegalNav((hasNavItems(itNavbar) ? itNavbar : fallbackNav('/it/')) as NavItem[]),
        sidebar: convertSidebar(itSidebar['/it/']),
      },
      ja: {
        label: '日本語',
        link: '/ja/',
        nav: withLocalizedLegalNav((hasNavItems(jaNavbar) ? jaNavbar : fallbackNav('/ja/', 'alias')) as NavItem[]),
        sidebar: convertSidebar(jaSidebar['/ja/']),
      },
      ko: {
        label: '한국어',
        link: '/ko/',
        nav: withLocalizedLegalNav((hasNavItems(koNavbar) ? koNavbar : fallbackNav('/ko/', 'alias')) as NavItem[]),
        sidebar: convertSidebar(koSidebar['/ko/']),
      },
      nl: {
        label: 'Nederlands',
        link: '/nl/',
        nav: withLocalizedLegalNav((hasNavItems(nlNavbar) ? nlNavbar : fallbackNav('/nl/')) as NavItem[]),
        sidebar: convertSidebar(nlSidebar['/nl/']),
      },
      pt: {
        label: 'Português',
        link: '/pt/',
        nav: withLocalizedLegalNav((hasNavItems(ptNavbar) ? ptNavbar : fallbackNav('/pt/')) as NavItem[]),
        sidebar: convertSidebar(ptSidebar['/pt/']),
      },
      ru: {
        label: 'Русский',
        link: '/ru/',
        nav: withLocalizedLegalNav((hasNavItems(ruNavbar) ? ruNavbar : fallbackNav('/ru/', 'alias')) as NavItem[]),
        sidebar: convertSidebar(ruSidebar['/ru/']),
      },
      zh: {
        label: '简体中文',
        link: '/zh/',
        nav: withLocalizedLegalNav((hasNavItems(zhNavbar) ? zhNavbar : fallbackNav('/zh/')) as NavItem[]),
        sidebar: convertSidebar(zhSidebar['/zh/']),
      },
      vi: {
        label: 'Tiếng Việt',
        link: '/vi/',
        nav: withLocalizedLegalNav((hasNavItems(viNavbar) ? viNavbar : fallbackNav('/vi/')) as NavItem[]),
        sidebar: convertSidebar(viSidebar['/vi/']),
      },
      tr: {
        label: 'Türkçe',
        link: '/tr/',
        nav: withLocalizedLegalNav((hasNavItems(trNavbar) ? trNavbar : fallbackNav('/tr/')) as NavItem[]),
        sidebar: convertSidebar(trSidebar['/tr/']),
      },
      pl: {
        label: 'Polski',
        link: '/pl/',
        nav: withLocalizedLegalNav((hasNavItems(plNavbar) ? plNavbar : fallbackNav('/pl/')) as NavItem[]),
        sidebar: convertSidebar(plSidebar['/pl/']),
      },
      uk: {
        label: 'Українська',
        link: '/uk/',
        nav: withLocalizedLegalNav((hasNavItems(ukNavbar) ? ukNavbar : fallbackNav('/uk/')) as NavItem[]),
        sidebar: convertSidebar(ukSidebar['/uk/']),
      },
      'zh-tw': {
        label: '繁體中文',
        link: '/zh-tw/',
        nav: withLocalizedLegalNav((hasNavItems(zhtwNavbar) ? zhtwNavbar : fallbackNav('/zh-tw/')) as NavItem[]),
        sidebar: convertSidebar(zhtwSidebar['/zh-tw/']),
      },
      th: {
        label: 'ไทย',
        link: '/th/',
        nav: withLocalizedLegalNav((hasNavItems(thNavbar) ? thNavbar : fallbackNav('/th/')) as NavItem[]),
        sidebar: convertSidebar(thSidebar['/th/']),
      },
      ro: {
        label: 'Română',
        link: '/ro/',
        nav: withLocalizedLegalNav((hasNavItems(roNavbar) ? roNavbar : fallbackNav('/ro/')) as NavItem[]),
        sidebar: convertSidebar(roSidebar['/ro/']),
      },
    },
  },
  locales: {
    root: {
      lang: 'en-GB',
      title: 'Dotfiles',
      description: 'Cross-platform shell configuration for macOS, Linux, and WSL. Managed by Chezmoi with Zsh, Neovim, and tmux.',
    },
    en: {
      lang: 'en-GB',
      title: 'Dotfiles',
      description: 'Cross-platform shell configuration for macOS, Linux, and WSL. Managed by Chezmoi with Zsh, Neovim, and tmux.',
    },
    ar: {
      lang: 'ar-SA',
      title: 'Dotfiles',
      description: 'تكوين شل عابر للمنصات لنظام macOS و Linux و WSL. مُدار بواسطة Chezmoi مع Zsh و Neovim و tmux.',
    },
    de: {
      lang: 'de-DE',
      title: 'Dotfiles',
      description: 'Plattformübergreifende Shell-Konfiguration für macOS, Linux und WSL. Verwaltet mit Chezmoi, Zsh, Neovim und tmux.',
    },
    es: {
      lang: 'es-ES',
      title: 'Dotfiles',
      description: 'Configuración de shell multiplataforma para macOS, Linux y WSL. Gestionada con Chezmoi, Zsh, Neovim y tmux.',
    },
    fr: {
      lang: 'fr-FR',
      title: 'Dotfiles',
      description: 'Configuration shell multiplateforme pour macOS, Linux et WSL. Gérée par Chezmoi avec Zsh, Neovim et tmux.',
    },
    he: {
      lang: 'he-IL',
      title: 'Dotfiles',
      description: 'תצורת של חוצה פלטפורמות עבור macOS, Linux ו-WSL. מנוהל על ידי Chezmoi עם Zsh, Neovim ו-tmux.',
    },
    hi: {
      lang: 'hi-IN',
      title: 'Dotfiles',
      description: 'macOS, Linux और WSL के लिए क्रॉस-प्लेटफ़ॉर्म शेल कॉन्फ़िगरेशन। Chezmoi, Zsh, Neovim और tmux द्वारा प्रबंधित।',
    },
    id: {
      lang: 'id-ID',
      title: 'Dotfiles',
      description: 'Konfigurasi shell lintas platform untuk macOS, Linux, dan WSL. Dikelola dengan Chezmoi, Zsh, Neovim, dan tmux.',
    },
    it: {
      lang: 'it-IT',
      title: 'Dotfiles',
      description: 'Configurazione shell multipiattaforma per macOS, Linux e WSL. Gestita con Chezmoi, Zsh, Neovim e tmux.',
    },
    ja: {
      lang: 'ja-JP',
      title: 'Dotfiles',
      description: 'macOS、Linux、WSL向けのクロスプラットフォームシェル設定。Chezmoi、Zsh、Neovim、tmuxで管理。',
    },
    ko: {
      lang: 'ko-KR',
      title: 'Dotfiles',
      description: 'macOS, Linux, WSL을 위한 크로스 플랫폼 셸 구성. Chezmoi, Zsh, Neovim, tmux로 관리.',
    },
    nl: {
      lang: 'nl-NL',
      title: 'Dotfiles',
      description: 'Cross-platform shellconfiguratie voor macOS, Linux en WSL. Beheerd met Chezmoi, Zsh, Neovim en tmux.',
    },
    pt: {
      lang: 'pt-BR',
      title: 'Dotfiles',
      description: 'Configuração de shell multiplataforma para macOS, Linux e WSL. Gerenciada com Chezmoi, Zsh, Neovim e tmux.',
    },
    ru: {
      lang: 'ru-RU',
      title: 'Dotfiles',
      description: 'Кроссплатформенная конфигурация оболочки для macOS, Linux и WSL. Управляется Chezmoi с Zsh, Neovim и tmux.',
    },
    zh: {
      lang: 'zh-CN',
      title: 'Dotfiles',
      description: '适用于 macOS、Linux 和 WSL 的跨平台 Shell 配置。使用 Chezmoi、Zsh、Neovim 和 tmux 管理。',
    },
    vi: {
      lang: 'vi-VN',
      title: 'Dotfiles',
      description: 'Cấu hình shell đa nền tảng cho macOS, Linux và WSL. Quản lý bởi Chezmoi với Zsh, Neovim và tmux.',
    },
    tr: {
      lang: 'tr-TR',
      title: 'Dotfiles',
      description: 'macOS, Linux ve WSL için çapraz platform kabuk yapılandırması. Chezmoi, Zsh, Neovim ve tmux ile yönetilir.',
    },
    pl: {
      lang: 'pl-PL',
      title: 'Dotfiles',
      description: 'Wieloplatformowa konfiguracja powłoki dla macOS, Linux i WSL. Zarządzana przez Chezmoi z Zsh, Neovim i tmux.',
    },
    uk: {
      lang: 'uk-UA',
      title: 'Dotfiles',
      description: 'Кросплатформна конфігурація оболонки для macOS, Linux та WSL. Керується Chezmoi з Zsh, Neovim та tmux.',
    },
    'zh-tw': {
      lang: 'zh-TW',
      title: 'Dotfiles',
      description: '適用於 macOS、Linux 和 WSL 的跨平台 Shell 配置。使用 Chezmoi、Zsh、Neovim 和 tmux 管理。',
    },
    th: {
      lang: 'th-TH',
      title: 'Dotfiles',
      description: 'การกำหนดค่าเชลล์ข้ามแพลตฟอร์มสำหรับ macOS, Linux และ WSL จัดการโดย Chezmoi พร้อม Zsh, Neovim และ tmux',
    },
    ro: {
      lang: 'ro-RO',
      title: 'Dotfiles',
      description: 'Configurare shell cross-platform pentru macOS, Linux și WSL. Gestionată cu Chezmoi, Zsh, Neovim și tmux.',
    },
  },
})
