# Dotfiles Documentation (v0.2.471)

[![DeepSource](https://app.deepsource.com/gh/sebastienrousseau/dotfiles.github.io.svg/?label=active+issues&show_trend=true&token=l0x8d5_z4Q-5rK3-)](https://app.deepsource.com/gh/sebastienrousseau/dotfiles.github.io/?ref=repository-badge)
[![Build Status](https://github.com/sebastienrousseau/dotfiles.github.io/actions/workflows/release.yml/badge.svg)](https://github.com/sebastienrousseau/dotfiles.github.io/actions/workflows/release.yml)

The official documentation site for the [Trusted Shell Platform](https://github.com/sebastienrousseau/dotfiles). Built with VuePress, it serves as the comprehensive guide for installation, configuration, and advanced usage of the dotfiles ecosystem.

## Features

- **Multi-Language Support**: Documentation available in English, French, Spanish, German, Chinese, and Portuguese.
- **Search Optimized**: Integrated Algolia search and SEO best practices (JSON-LD, Meta Tags).
- **PWA Ready**: Progressive Web App support for offline access.
- **DeepSource Verified**: Codebase continuously analyzed for security and quality issues.

## Prerequisites

- Node.js (v18+)
- pnpm

## Development

```bash
# Install dependencies
pnpm install

# Start local development server
pnpm run dev
```

Open `http://localhost:8080` to view the site.

## Deployment

This repository is deployed to GitHub Pages via GitHub Actions on every push to the `main` branch.
