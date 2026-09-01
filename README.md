<!-- SPDX-License-Identifier: Apache-2.0 OR MIT -->

<p align="center">
  <img src="https://cloudcdn.pro/cmn/v1/logos/cmn.svg" alt="Dotfiles logo" width="128" />
</p>

<h1 align="center">Dotfiles</h1>

<p align="center">
  Engineered macOS and Linux dotfiles configuration featuring Zsh, Starship, Neovim, Tmux, and Homebrew automated setup.
</p>

<p align="center">
  <a href="https://github.com/sebastienrousseau/dotfiles.github.io/actions"><img src="https://img.shields.io/github/actions/workflow/status/sebastienrousseau/dotfiles.github.io/ci.yml?style=for-the-badge&logo=github" alt="Build" /></a>
  <a href="https://github.com/sebastienrousseau/dotfiles.github.io/releases"><img src="https://img.shields.io/github/v/release/sebastienrousseau/dotfiles.github.io?style=for-the-badge&color=fc8d62&logo=git" alt="Release" /></a>
  <a href="https://static-site-generator.com/"><img src="https://img.shields.io/badge/SSG-0.0.56-66c2a5?style=for-the-badge&labelColor=555555&logo=rust" alt="Built with SSG" /></a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/sebastienrousseau/dotfiles.github.io"><img src="https://img.shields.io/ossf-scorecard/github.com/sebastienrousseau/dotfiles.github.io?style=for-the-badge&label=OpenSSF%20Scorecard&logo=openssf" alt="OpenSSF Scorecard" /></a>
</p>

---

## Contents

**Getting started**

- [Overview](#overview) — architecture and design principles
- [Quick Start](#quick-start) — build and serve locally in minutes

**Ecosystem & Architecture**

- [Features](#features) — core capabilities and performance highlights
- [Technology Stack](#technology-stack) — SSG, Rust, and modern web standards
- [Accessibility & Compliance](#accessibility--compliance) — 100% WCAG 2.1 AAA and Lighthouse scores

**Operational**

- [Development](#development) — make targets, quality gates, and automated testing
- [Security](#security) — Subresource Integrity (SRI) and Content Security Policy (CSP)
- [License](#license) — dual Apache-2.0 and MIT licensing

---

## Overview

`dotfiles.github.io` is engineered for speed, privacy, and accessibility. Built with **Static Site Generator (SSG)** and the **Skeletonic Design System**, it delivers lightning-fast static page generation, zero third-party tracking cookies, and responsive Apple Human Interface Guidelines (HIG) navigation.

---

## Quick Start

### Prerequisites

Ensure you have `ssg` installed via Cargo:

```bash
cargo install ssg
```

### Local Build & Development

Clone the repository and compile the static assets:

```bash
git clone https://github.com/sebastienrousseau/dotfiles.github.io.git
cd dotfiles.github.io

# Compile with Static Site Generator (SSG)
ssg build --content _posts --template _layouts --output docs

# Or serve locally using Makefile
make serve
```

---

## Features

- **Static Site Generator (SSG) Compilation**: High-throughput Markdown and Tera template processing with pre-rendered HTML.
- **Apple HIG Responsive Navigation**: Sticky blur glass header with horizontal/vertical element alignment, squarcle buttons, and mobile hamburger drawer.
- **Subresource Integrity (SRI)**: SHA-384 cryptographic hashing on all external and internal stylesheets and scripts.
- **Content Security Policy (CSP)**: Hardened security headers restricting unvetted origins while permitting high-performance execution.
- **Full Client Search Engine**: Instant multi-term indexing and live modal search via `search-index.json`.
- **System Theme Auto-Detection**: Instant switching between Light, Dark, and System modes with zero visual flash.
- **100% WCAG AAA Compliance**: High contrast ratios, full keyboard navigation, ARIA landmarks, and semantic heading hierarchies.

---

## Technology Stack

| Component | Technology | Description |
|---|---|---|
| **Static Engine** | [Static Site Generator (SSG)](https://static-site-generator.com/) | High-speed Rust static site generator |
| **Design Framework** | [Skeletonic CSS](https://skeletonic.io) | Minimalist, zero-dependency layout engine |
| **Icons & Assets** | [CloudCDN](https://cloudcdn.pro) | Distributed edge CDN for SVG vector assets |
| **Runtime** | Vanilla ECMAScript | Zero runtime framework overhead |

---

## Development

Run automated regression tests and the 10-pillar quality audit:

```bash
# Run repository regression test
python3 scripts/regression-test.py

# Run portfolio master quality gate
make test
```

---

## Security

Every deployment adheres to strict security and integrity standards:

- **Zero Inline Code Execution**: All scripts are isolated and digest-verified.
- **Cryptographic Asset Integrity**: Guaranteed Subresource Integrity via SHA-384 digests.
- **Privacy by Default**: No user tracking, analytics cookies, or third-party fingerprinting.

---

## License

Copyright © 2024 - 2026 Sebastien Rousseau. All rights reserved.

Licensed under the Apache License, Version 2.0 or the MIT license at your option.
