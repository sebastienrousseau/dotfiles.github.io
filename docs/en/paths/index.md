---
title: Paths | Dotfiles
description: Explore PATH configuration in Dotfiles v0.2.495. Understand precedence, custom entries, and environment variable management across macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Paths | Dotfiles preview
canonical: /en/paths/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Paths
pageType: docs
schemaType: WebPage
permalink: /en/paths/
---

# Paths

Dotfiles sets PATH order in one template and prepends entries by priority.

## Precedence

1. Start with system paths.
2. Prepend runtime and package manager paths.
3. Prepend local user paths last for highest priority.
4. Deduplicate entries while preserving first match.

## Declared entries

- `"/usr/bin"`
- `"/bin"`
- `"/sbin"`
- `"/opt/homebrew/sbin"`
- `"/opt/homebrew/bin"`
- `"/opt/homebrew/opt/ruby/bin"`
- `"${HOME}/.gem/ruby/bin"`
- `"${PIPX_BIN_DIR}"`
- `"${HOME}/.cargo/bin"`
- `"${HOME}/go/bin"`
- `"${HOME}/.node_modules/bin"`
- `"/Library/Apple/usr/bin"`
- `"/Library/TeX/texbin"`
- `"/Applications/Topaz Photo AI.app/Contents/Resources/bin"`
- `"/Applications/Little Snitch.app/Contents/Components"`
- `"/Applications/iTerm.app/Contents/Resources/utilities"`
- `"/home/linuxbrew/.linuxbrew/bin"`
- `"${HOME}/.local/bin"`
- `"${HOME}/bin"`
