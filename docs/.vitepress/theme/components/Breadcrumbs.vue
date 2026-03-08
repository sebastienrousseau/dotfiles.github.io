<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import { LOCALE_HOME_LABELS, LOCALE_KEYS, slugToTitle } from '../../config/seo'

const route = useRoute()
const { frontmatter } = useData()

const localePrefix = computed(() => {
  const segments = route.path.split('/').filter(Boolean)
  const first = segments[0]
  if (first && LOCALE_KEYS.has(first)) return `/${first}`
  return '/en'
})

const items = computed(() => {
  const path = route.path.replace(/index\.html$/, '').replace(/\/+$/, '/')
  const segments = path.split('/').filter(Boolean)
  if (segments.length <= 1) return []

  return segments.map((segment, index) => {
    const link = `/${segments.slice(0, index + 1).join('/')}/`
    const isLast = index === segments.length - 1
    const lastText = typeof frontmatter.value.breadcrumbTitle === 'string' ? frontmatter.value.breadcrumbTitle : null
    return {
      text: isLast && lastText ? lastText : slugToTitle(segment),
      link,
      isLast,
    }
  })
})
</script>

<template>
  <nav v-if="items.length" aria-label="Breadcrumb" class="vp-breadcrumb">
    <ol>
      <li><a :href="`${localePrefix}/`">{{ LOCALE_HOME_LABELS[localePrefix.slice(1)] ?? 'Home' }}</a></li>
      <li v-for="item in items" :key="item.link">
        <span aria-hidden="true" class="sep">&#x203A;</span>
        <a v-if="!item.isLast" :href="item.link">{{ item.text }}</a>
        <span v-else aria-current="page" class="current">{{ item.text }}</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.vp-breadcrumb {
  margin: 0 0 1rem;
  font-size: 13px;
}

.vp-breadcrumb ol {
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.vp-breadcrumb a {
  color: var(--apple-link);
  text-decoration: none;
}

.vp-breadcrumb a:hover {
  color: var(--apple-link-hover);
  text-decoration: underline;
}

.sep {
  margin: 0 0.35rem;
  color: var(--apple-text-secondary);
}

.current {
  color: var(--apple-text-secondary);
}
</style>
