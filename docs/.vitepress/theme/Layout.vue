<script setup lang="ts">
import { onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Breadcrumbs from './components/Breadcrumbs.vue'
import AppleFooter from './components/AppleFooter.vue'

const { Layout } = DefaultTheme

// VitePress renders VPContent as a plain <div>. Adding role="main" provides
// a landmark for screen readers. onMounted runs client-side only, but the
// SSR output is immediately hydrated so the gap is negligible. VitePress
// does not expose a server-side hook for this, so this is the best option.
onMounted(() => {
  const el = document.getElementById('VPContent')
  if (el) el.setAttribute('role', 'main')
})
</script>

<template>
  <!-- Custom skip link (VitePress default VPSkipLink hidden via CSS to avoid
       duplicate skip links which confuse screen readers) -->
  <a class="skip-link" href="#VPContent">Skip to content</a>
  <Layout>
    <template #doc-before>
      <Breadcrumbs />
    </template>
    <template #layout-bottom>
      <AppleFooter />
    </template>
  </Layout>
</template>
