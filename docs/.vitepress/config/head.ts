import type { HeadConfig } from 'vitepress'

// Only truly static, non-page-specific head elements belong here.
// Page-specific OG/Twitter/canonical/robots/title tags are generated
// dynamically in config.ts → transformHead() to avoid duplicates.
export const sharedHead: HeadConfig[] = [
  ['meta', { charset: 'utf-8' }],
  ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  ['meta', { name: 'theme-color', media: '(prefers-color-scheme: light)', content: '#f5f5f7' }],
  ['meta', { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#1d1d1f' }],
  ['meta', { name: 'application-name', content: 'Dotfiles' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'Dotfiles' }],
  ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'author', content: 'Sebastien Rousseau' }],
  ['meta', { name: 'format-detection', content: 'telephone=no' }],
  ['link', { rel: 'icon', href: '/favicon.ico' }],
  ['link', { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32', fetchpriority: 'high' }],
  ['link', { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' }],
  ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', fetchpriority: 'high' }],
  ['link', { rel: 'manifest', href: '/manifest.json' }],
  ['link', { rel: 'preload', href: '/images/hero-bg.webp', as: 'image', type: 'image/webp', fetchpriority: 'high' }],
]
