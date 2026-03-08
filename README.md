<p align="right">
  <img src="https://kura.pro/dotfiles/v2/images/logos/dotfiles.svg" alt="Dotfiles logo" width="64" />
</p>

# Dotfiles Documentation — the official guide for the Trusted Shell Platform

[![Build](https://img.shields.io/github/actions/workflow/status/sebastienrousseau/dotfiles.github.io/release.yml?style=for-the-badge)](https://github.com/sebastienrousseau/dotfiles.github.io/actions) [![Version](https://img.shields.io/badge/Version-v0.2.495-blue?style=for-the-badge)](https://github.com/sebastienrousseau/dotfiles/releases/tag/v0.2.495) [![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE) [![DeepSource](https://img.shields.io/badge/DeepSource-Active-green?style=for-the-badge)](https://app.deepsource.com/gh/sebastienrousseau/dotfiles.github.io/) [![Website](https://img.shields.io/badge/Website-dotfiles.io-purple?style=for-the-badge)](https://dotfiles.io)

---

## Overview

This repository powers [dotfiles.io](https://dotfiles.io), the official documentation site for the [Dotfiles / Trusted Shell Platform](https://github.com/sebastienrousseau/dotfiles). Built with VitePress, it provides comprehensive guides for installation, configuration, aliases, functions, paths, guides, and advanced usage across **22 languages**.

---

## Table of Contents

- [Features](#features)
- [Supported Languages](#supported-languages)
- [Documentation Content](#documentation-content)
- [Quick Start](#quick-start)
- [Development](#development)
- [Build](#build)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Multi-Language Support**: Documentation available in 22 languages with flag-based language selector.
- **Comprehensive CLI Reference**: All 53 `dot` CLI commands documented with usage examples.
- **Alias Reference**: 1,250+ shell aliases across 48 categories with overview and reference pages.
- **SEO Optimized**: JSON-LD structured data, OpenGraph, Twitter Cards, and semantic HTML.
- **PWA Ready**: Progressive Web App support for offline access.
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support.
- **Performance**: Optimized builds with HTML/CSS/JS minification and code splitting.
- **Search**: Integrated search functionality across all documentation.

---

## Supported Languages

| Flag | Language           | Code    | Path      |
| ---- | ------------------ | ------- | --------- |
| 🇬🇧   | English            | en-GB   | `/`       |
| 🇸🇦   | العربية            | ar-SA   | `/ar/`    |
| 🇩🇪   | Deutsch            | de-DE   | `/de/`    |
| 🇪🇸   | Español            | es-ES   | `/es/`    |
| 🇫🇷   | Français           | fr-FR   | `/fr/`    |
| 🇮🇱   | עברית              | he-IL   | `/he/`    |
| 🇮🇳   | हिंदी              | hi-IN   | `/hi/`    |
| 🇮🇩   | Bahasa Indonesia   | id-ID   | `/id/`    |
| 🇮🇹   | Italiano           | it-IT   | `/it/`    |
| 🇯🇵   | 日本語             | ja-JP   | `/ja/`    |
| 🇰🇷   | 한국어             | ko-KR   | `/ko/`    |
| 🇳🇱   | Nederlands         | nl-NL   | `/nl/`    |
| 🇵🇱   | Polski             | pl-PL   | `/pl/`    |
| 🇧🇷   | Português          | pt-BR   | `/pt/`    |
| 🇷🇴   | Română             | ro-RO   | `/ro/`    |
| 🇷🇺   | Русский            | ru-RU   | `/ru/`    |
| 🇹🇭   | ไทย                | th-TH   | `/th/`    |
| 🇹🇷   | Türkçe             | tr-TR   | `/tr/`    |
| 🇺🇦   | Українська         | uk-UA   | `/uk/`    |
| 🇻🇳   | Tiếng Việt         | vi-VN   | `/vi/`    |
| 🇨🇳   | 简体中文           | zh-CN   | `/zh/`    |
| 🇹🇼   | 繁體中文           | zh-TW   | `/zh-tw/` |

---

## Documentation Content

Each locale includes the following sections:

| Section       | Description                                                        | Pages (EN) |
| ------------- | ------------------------------------------------------------------ | ---------- |
| **About**     | Project overview, installation, and full `dot` CLI reference (53 commands) | 1 |
| **Aliases**   | 48 alias categories with overview and reference pages              | 96         |
| **Functions** | Shell functions reference                                          | 1          |
| **Paths**     | PATH configuration reference                                      | 1          |
| **Guides**    | SSH signing, GPG configuration, and secret management guides       | 3          |

### Alias Categories

48 categories covering: AI, Archives, Benchmarks, cd, chmod, clear, Compliance, Configuration, Default, Diagnostics, dig, Disk Usage, Docker, Editor, find, Fonts, GCloud, Git, GNU, Go, Heroku, Installer, Interactive, Kubernetes, Legal, Lua, macOS, Make, mkdir, Modern, npm, Permission, pnpm, ps, Python, rsync, Rust, Security, Subversion, Sudo, System, Terraform, tmux, Update, UUID, Vagrant, wget, and Yarn.

### dot CLI Commands

53 commands organised by category:

- **Core** (11): `apply`, `sync`, `update`, `add`, `diff`, `status`, `remove`, `cd`, `edit`, `clean-cache`, `prewarm`
- **Diagnostics** (14): `doctor`, `heal`, `health`, `verify`, `scorecard`, `snapshot`, `smoke-test`, `chaos`, `bundle`, `rollback`, `drift`, `history`, `benchmark`, `perf`
- **Appearance** (4): `theme`, `wallpaper`, `fonts`, `tune`
- **Security** (7): `backup`, `encrypt-check`, `firewall`, `telemetry`, `dns-doh`, `lock-screen`, `usb-safety`
- **Secrets** (5): `secrets-init`, `secrets`, `secrets-create`, `ssh-key`, `ssh-cert`
- **AI** (3+): `ai`, `ai-setup`, `ai-query`, plus wrappers (`cl`, `gemini`, `kiro`, `sgpt`, `ollama`, `opencode`, `aider`)
- **Tools** (5): `tools`, `new`, `sandbox`, `keys`, `learn`
- **Meta** (3): `upgrade`, `packages`, `version`/`help`

---

## Quick Start

**Prerequisites**

- Node.js v18+
- npm

```bash
# Clone the repository
git clone https://github.com/sebastienrousseau/dotfiles.github.io.git
cd dotfiles.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

---

## Development

```bash
# Start local development server with hot reload
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Run full quality suite (build + SEO validation + accessibility lint)
npm run test:quality
```

### Available Scripts

| Script                  | Description                                      |
| ----------------------- | ------------------------------------------------ |
| `npm run dev`           | Start development server with hot reload         |
| `npm run build`         | Production build                                 |
| `npm run preview`       | Preview production build locally                 |
| `npm run content:normalize` | Normalize frontmatter across all pages       |
| `npm run docs:sync:en`  | Sync EN docs from the dotfiles source repo       |
| `npm run docs:audit:en` | Audit EN docs for accuracy                       |
| `npm run lint:content:a11y` | Lint content for accessibility issues        |
| `npm run validate:manifest` | Validate PWA manifest                       |
| `npm run validate:seo`  | Validate SEO metadata in built output            |
| `npm run test:axe`      | Run axe accessibility tests                      |
| `npm run test:lighthouse` | Run Lighthouse CI audits                       |
| `npm run test:quality`  | Full quality suite (build + manifest + SEO + a11y) |

---

## Build

```bash
# Production build
npm run build
```

Build output is generated in `docs/.vitepress/dist/`. The build process:

- Compiles all 1,450+ pages across 22 locales
- Generates static HTML for all locales
- Produces an XML sitemap

---

## Project Structure

```text
dotfiles.github.io/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts               # Main VitePress configuration
│   │   ├── config/
│   │   │   ├── head/               # SEO meta tags
│   │   │   ├── nav/                # Navigation configs (22 locales)
│   │   │   └── sidebar/            # Sidebar configs (22 locales)
│   │   ├── public/                 # Static assets (favicons, manifest)
│   │   └── theme/                  # Theme overrides and CSS
│   ├── en/                         # English (default locale)
│   │   ├── about/                  # About & dot CLI reference
│   │   ├── aliases/                # 48 alias categories
│   │   │   ├── ai/                 # AI aliases
│   │   │   ├── benchmarks/         # Benchmark aliases
│   │   │   ├── docker/             # Docker aliases
│   │   │   ├── git/                # Git aliases
│   │   │   ├── system/             # System aliases
│   │   │   └── ...                 # 43 more categories
│   │   ├── functions/              # Shell functions
│   │   ├── guides/                 # Guides
│   │   │   ├── ssh-signing/        # SSH signing guide
│   │   │   ├── gpg-configuration/  # GPG configuration guide
│   │   │   └── secret-management/  # Secret management guide
│   │   └── paths/                  # PATH configuration
│   ├── ar/                         # Arabic
│   ├── de/                         # German
│   ├── es/                         # Spanish
│   ├── fr/                         # French
│   ├── he/                         # Hebrew
│   ├── hi/                         # Hindi
│   ├── id/                         # Indonesian
│   ├── it/                         # Italian
│   ├── ja/                         # Japanese
│   ├── ko/                         # Korean
│   ├── nl/                         # Dutch
│   ├── pl/                         # Polish
│   ├── pt/                         # Portuguese
│   ├── ro/                         # Romanian
│   ├── ru/                         # Russian
│   ├── th/                         # Thai
│   ├── tr/                         # Turkish
│   ├── uk/                         # Ukrainian
│   ├── vi/                         # Vietnamese
│   ├── zh/                         # Chinese (Simplified)
│   ├── zh-tw/                      # Chinese (Traditional)
│   └── README.md                   # Homepage
├── scripts/                        # Build and validation scripts
├── package.json
└── README.md                       # This file
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

- All 22 locales are updated simultaneously for content changes
- `npm run build` passes without errors
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
