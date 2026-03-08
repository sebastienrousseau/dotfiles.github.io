import { DEFAULT_AUTHOR, SITE_NAME, SITE_URL, type PageMeta, toAbsoluteUrl, slugToTitle } from './seo'

type Frontmatter = Record<string, string | number | boolean | undefined>

function buildBreadcrumb(meta: PageMeta, title: string) {
  const segments = meta.routePath.split('/').filter(Boolean)
  if (segments.length === 0) return null

  const items = segments.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join('/')}/`
    return {
      '@type': 'ListItem',
      position: index + 1,
      name: index === segments.length - 1 ? title : slugToTitle(segment),
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

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}
