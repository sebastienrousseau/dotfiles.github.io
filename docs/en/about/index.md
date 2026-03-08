---
title: About Dotfiles | Dotfiles
description: Technical overview of Dotfiles v0.2.495.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: About Dotfiles | Dotfiles preview
canonical: /en/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: About Dotfiles
pageType: docs
schemaType: WebPage
permalink: /en/about/
---

# About Dotfiles

Dotfiles v0.2.495 is a cross-platform shell configuration managed by Chezmoi.

## Install

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/main/install.sh)"
```

## Verify

```bash
dot doctor
```

## Core commands

- `dot apply` applies configuration changes.
- `dot update` updates the repo and warms caches.
- `dot doctor` validates paths, tools, and shell health.
- `dot heal` repairs missing or broken state.
- `dot smoke-test` validates core toolchains.

## Related

- [Aliases](/en/aliases/)
- [Functions](/en/functions/)
- [Paths](/en/paths/)
- [Compatibility Matrix](/en/compatibility/)
