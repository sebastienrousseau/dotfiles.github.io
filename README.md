<p align="right">
  <img src="https://kura.pro/dotfiles/v2/images/logos/dotfiles.svg" alt="Dotfiles logo" width="64" />
</p>

# Dotfiles Documentation — the official guide for the Trusted Shell Platform

[![Build](https://img.shields.io/github/actions/workflow/status/sebastienrousseau/dotfiles.github.io/release.yml?style=for-the-badge)](https://github.com/sebastienrousseau/dotfiles.github.io/actions) [![Version](https://img.shields.io/badge/Version-v0.2.474-blue?style=for-the-badge)](https://github.com/sebastienrousseau/dotfiles/releases/tag/v0.2.474) [![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE) [![DeepSource](https://img.shields.io/badge/DeepSource-Active-green?style=for-the-badge)](https://app.deepsource.com/gh/sebastienrousseau/dotfiles.github.io/) [![Website](https://img.shields.io/badge/Website-dotfiles.io-purple?style=for-the-badge)](https://dotfiles.io)

---

## Overview

This repository powers [dotfiles.io](https://dotfiles.io), the official documentation site for the [Dotfiles / Trusted Shell Platform](https://github.com/sebastienrousseau/dotfiles). Built with VuePress v1.9.8, it provides comprehensive guides for installation, configuration, aliases, functions, and advanced usage across **15 languages**.

---

## Table of Contents

- [Features](#features)
- [Supported Languages](#supported-languages)
- [Quick Start](#quick-start)
- [Development](#development)
- [Build](#build)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Multi-Language Support**: Documentation available in 15 languages with flag-based language selector.
- **SEO Optimized**: JSON-LD structured data, OpenGraph, Twitter Cards, and semantic HTML.
- **PWA Ready**: Progressive Web App support for offline access.
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support.
- **Performance**: Optimized builds with HTML/CSS/JS minification and code splitting.
- **Search**: Integrated search functionality across all documentation.

---

## Supported Languages

| Flag | Language         | Code  | Path   |
| ---- | ---------------- | ----- | ------ |
| 🇬🇧   | English          | en-GB | `/`    |
| 🇫🇷   | Français         | fr-FR | `/fr/` |
| 🇪🇸   | Español          | es-ES | `/es/` |
| 🇩🇪   | Deutsch          | de-DE | `/de/` |
| 🇧🇷   | Português        | pt-BR | `/pt/` |
| 🇨🇳   | 简体中文         | zh-CN | `/zh/` |
| 🇯🇵   | 日本語           | ja-JP | `/ja/` |
| 🇰🇷   | 한국어           | ko-KR | `/ko/` |
| 🇷🇺   | Русский          | ru-RU | `/ru/` |
| 🇮🇹   | Italiano         | it-IT | `/it/` |
| 🇸🇦   | العربية          | ar-SA | `/ar/` |
| 🇮🇱   | עברית            | he-IL | `/he/` |
| 🇮🇳   | हिंदी            | hi-IN | `/hi/` |
| 🇳🇱   | Nederlands       | nl-NL | `/nl/` |
| 🇮🇩   | Bahasa Indonesia | id-ID | `/id/` |

---

## Quick Start

**Prerequisites**

- Node.js v18+
- pnpm

```bash
# Clone the repository
git clone https://github.com/sebastienrousseau/dotfiles.github.io.git
cd dotfiles.github.io

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

Open [http://localhost:8080](http://localhost:8080) to view the site.

---

## Development

```bash
# Start local development server with hot reload
pnpm run dev

# Lint code and markdown
pnpm run lint
```

The development server watches for changes and automatically rebuilds.

---

## Build

```bash
# Production build
pnpm run build
```

Build output is generated in `docs/.vuepress/dist/`. The build process:

- Compiles all 736 pages across 15 locales
- Generates sitemap.xml
- Creates PWA service worker
- Minifies HTML, CSS, and JavaScript

---

## Project Structure

```text
dotfiles.github.io/
├── docs/
│   ├── .vuepress/
│   │   ├── config.ts           # Main VuePress configuration
│   │   ├── config/
│   │   │   ├── head/           # SEO meta tags
│   │   │   ├── nav/            # Navigation configs (15 locales)
│   │   │   └── sidebar/        # Sidebar configs (15 locales)
│   │   ├── public/             # Static assets (favicons, manifest)
│   │   └── styles/             # Stylus stylesheets
│   ├── about/                  # About page (EN)
│   ├── aliases/                # Alias documentation (EN)
│   ├── functions/              # Functions documentation (EN)
│   ├── paths/                  # Paths documentation (EN)
│   ├── fr/                     # French locale
│   ├── es/                     # Spanish locale
│   ├── de/                     # German locale
│   ├── pt/                     # Portuguese locale
│   ├── zh/                     # Chinese locale
│   ├── ja/                     # Japanese locale
│   ├── ko/                     # Korean locale
│   ├── ru/                     # Russian locale
│   ├── it/                     # Italian locale
│   ├── ar/                     # Arabic locale
│   ├── he/                     # Hebrew locale
│   ├── hi/                     # Hindi locale
│   ├── nl/                     # Dutch locale
│   ├── id/                     # Indonesian locale
│   └── README.md               # Homepage
├── package.json
└── README.md                   # This file
```

---

## Deployment

This repository is automatically deployed to [GitHub Pages](https://pages.github.com/) via GitHub Actions on every push to the `main` branch.

**Live site**: [https://dotfiles.io](https://dotfiles.io)

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

Please ensure:

- All 15 locales are updated simultaneously for content changes
- `pnpm run build` passes without errors
- Front matter follows the [schema guidelines](CLAUDE.md)

---

## Related

- [Dotfiles Repository](https://github.com/sebastienrousseau/dotfiles) — The main dotfiles source code
- [Live Documentation](https://dotfiles.io) — The deployed documentation site

---

## License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---

<p align="right"><a href="#dotfiles-documentation--the-official-guide-for-the-trusted-shell-platform">↑ Back to Top</a></p>
