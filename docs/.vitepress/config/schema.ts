import { DEFAULT_AUTHOR, LOCALE_HOME_LABELS, LOCALE_KEYS, SITE_NAME, SITE_URL, type PageMeta, toAbsoluteUrl, slugToTitle } from './seo'

type Frontmatter = Record<string, string | number | boolean | undefined>

function buildBreadcrumb(meta: PageMeta, title: string) {
  const segments = meta.routePath.split('/').filter(Boolean)
  if (segments.length === 0) return null

  const items = segments.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join('/')}/`
    let name: string
    if (index === segments.length - 1) {
      name = title
    } else if (LOCALE_KEYS.has(segment)) {
      name = LOCALE_HOME_LABELS[segment] ?? slugToTitle(segment)
    } else {
      name = slugToTitle(segment)
    }
    return {
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: toAbsoluteUrl(path),
    }
  })

  return {
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }
}

export function buildJsonLd(meta: PageMeta, frontmatter: Frontmatter, pageTitle: string, lastUpdated?: number) {
  const graph: Array<Record<string, unknown>> = []

  if (meta.pageType === 'home') {
    graph.push({
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: meta.locale,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    })
  }

  graph.push({
    '@type': meta.schemaType,
    '@id': `${meta.canonical}#webpage`,
    url: meta.canonical,
    name: pageTitle,
    description: meta.description,
    inLanguage: meta.locale,
    isPartOf: { '@id': `${SITE_URL}/#website` },
  })

  const breadcrumb = buildBreadcrumb(meta, pageTitle)
  if (breadcrumb) graph.push(breadcrumb)

  if (meta.pageType === 'article') {
    graph.push({
      '@type': 'Person',
      name: (typeof frontmatter.author === 'string' && frontmatter.author.trim()) || DEFAULT_AUTHOR,
    })
    graph.push({
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: toAbsoluteUrl('/logo.png'),
    })
    graph.push({
      '@type': 'TechArticle',
      headline: pageTitle,
      description: meta.description,
      author: {
        '@type': 'Person',
        name: (typeof frontmatter.author === 'string' && frontmatter.author.trim()) || DEFAULT_AUTHOR,
      },
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        logo: {
          '@type': 'ImageObject',
          url: toAbsoluteUrl('/logo.png'),
        },
      },
      datePublished: typeof frontmatter.date === 'string' ? frontmatter.date : undefined,
      dateModified: lastUpdated ? new Date(lastUpdated).toISOString() : undefined,
      mainEntityOfPage: meta.canonical,
      image: meta.ogImage,
    })
  }

  // HowTo schema for guide pages
  if (meta.routePath.includes('/guides/') && meta.schemaType === 'TechArticle') {
    graph.push({
      '@type': 'HowTo',
      name: pageTitle,
      description: meta.description,
      step: (frontmatter.steps as unknown as string[] | undefined)?.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: String(s),
      })) ?? [
        { '@type': 'HowToStep', position: 1, name: 'Read the prerequisites and golden rules' },
        { '@type': 'HowToStep', position: 2, name: 'Choose an encryption method (age, SOPS, or 1Password)' },
        { '@type': 'HowToStep', position: 3, name: 'Configure Chezmoi integration' },
        { '@type': 'HowToStep', position: 4, name: 'Verify with pre-commit hooks and audit checklist' },
      ],
    })
  }

  // SoftwareSourceCode schema for alias pages (not index)
  if (meta.routePath.includes('/aliases/') && !meta.routePath.endsWith('/aliases/')) {
    graph.push({
      '@type': 'SoftwareSourceCode',
      name: pageTitle,
      programmingLanguage: 'Shell',
      runtimePlatform: 'Bash/Zsh',
      codeRepository: 'https://github.com/sebastienrousseau/dotfiles',
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}
