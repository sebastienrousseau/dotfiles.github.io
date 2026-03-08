<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { LOCALE_KEYS } from '../../config/seo'

const route = useRoute()
const currentYear = new Date().getFullYear()

// Detect locale prefix from current route (e.g. "/fr/about/" → "/fr")
const localePrefix = computed(() => {
  const segments = route.path.split('/').filter(Boolean)
  const first = segments[0]
  if (first && LOCALE_KEYS.has(first)) return `/${first}`
  return '/en'
})

function localLink(path: string): string {
  return `${localePrefix.value}${path}`
}
</script>

<template>
  <footer class="apple-footer" role="contentinfo">
    <div class="apple-footer-inner">
      <nav class="apple-footer-nav" aria-label="Footer navigation">
        <div class="apple-footer-column">
          <h3 class="apple-footer-title">Documentation</h3>
          <ul>
            <li><a :href="localLink('/about/')">About</a></li>
            <li><a :href="localLink('/functions/')">Functions</a></li>
            <li><a :href="localLink('/paths/')">Paths</a></li>
            <li><a :href="localLink('/aliases/')">Aliases</a></li>
          </ul>
        </div>
        <div class="apple-footer-column">
          <h3 class="apple-footer-title">Resources</h3>
          <ul>
            <li>
              <a
                href="https://github.com/sebastienrousseau/dotfiles.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >GitHub<span class="visually-hidden"> (opens in new tab)</span></a>
            </li>
            <li>
              <a
                href="https://github.com/sebastienrousseau/dotfiles.github.io/issues"
                target="_blank"
                rel="noopener noreferrer"
              >Issues<span class="visually-hidden"> (opens in new tab)</span></a>
            </li>
            <li>
              <a
                href="https://github.com/sebastienrousseau/dotfiles.github.io/releases"
                target="_blank"
                rel="noopener noreferrer"
              >Releases<span class="visually-hidden"> (opens in new tab)</span></a>
            </li>
          </ul>
        </div>
        <div class="apple-footer-column">
          <h3 class="apple-footer-title">Legal</h3>
          <ul>
            <li><a :href="localLink('/accessibility/')">Accessibility</a></li>
            <li><a :href="localLink('/privacy/')">Privacy</a></li>
            <li><a :href="localLink('/terms/')">Terms</a></li>
            <li><a :href="localLink('/contact/')">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div class="apple-footer-divider" aria-hidden="true"></div>
      <div class="apple-footer-bottom">
        <p class="apple-footer-copyright">
          Copyright &copy; Dotfiles 2015&ndash;{{ currentYear }}. All rights reserved.
        </p>
        <ul class="apple-footer-legal" aria-label="Legal links">
          <li><a :href="localLink('/privacy/')">Privacy Policy</a></li>
          <li><a :href="localLink('/terms/')">Terms of Use</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.apple-footer {
  background: var(--apple-footer-bg);
  color: var(--apple-footer-text);
  font-size: 13px;
  line-height: 1.47;
  padding: 1.5rem 0 1rem;
}

.apple-footer-inner {
  max-width: 980px;
  margin: 0 auto;
  padding: 0 22px;
}

.apple-footer-nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding-bottom: 1rem;
}

.apple-footer-column ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.apple-footer-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--apple-footer-title);
  margin: 0 0 0.5rem;
  letter-spacing: 0;
}

.apple-footer-column li {
  margin: 0;
}

.apple-footer-column a {
  color: var(--apple-footer-link);
  text-decoration: none;
  display: inline-block;
  line-height: 2.75;
  min-height: 44px;
}

.apple-footer-column a:hover {
  color: var(--apple-text-primary);
  text-decoration: underline;
}

.apple-footer-divider {
  height: 1px;
  background: var(--apple-divider);
  margin: 0.5rem 0 1rem;
}

.apple-footer-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem 1rem;
}

.apple-footer-copyright {
  margin: 0;
  color: var(--apple-footer-text);
}

.apple-footer-legal {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.apple-footer-legal a {
  color: var(--apple-footer-link);
  text-decoration: none;
}

.apple-footer-legal a:hover {
  color: var(--apple-text-primary);
  text-decoration: underline;
}

/* Screen reader only text for external link announcements */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Tablet */
@media (max-width: 1068px) {
  .apple-footer-inner {
    max-width: 692px;
  }
}

/* Mobile — match VitePress hamburger breakpoint */
@media (max-width: 768px) {
  .apple-footer-nav {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .apple-footer-inner {
    width: 87.5%;
    padding: 0;
  }

  .apple-footer-bottom {
    flex-direction: column;
  }
}
</style>
