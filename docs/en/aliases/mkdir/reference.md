---
title: Mkdir Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Mkdir in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Mkdir Reference Appendix | Dotfiles preview
canonical: /en/aliases/mkdir/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Mkdir Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/mkdir/reference/
---

# Mkdir Reference Appendix

## Source files

- `.chezmoitemplates/aliases/mkdir/mkdir.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `md` | `mkdir -v` |
| `mdd` | `mkdir -pv "$(date +%Y%m%d)" && cd "$(date +%Y%m%d)"` |
| `mde` | `mkdir -pv "$(date +%Y%m%d)-example"` |
| `mdn` | `mkdir -pv "$(date +%Y%m%d)-notes"` |
| `mdt` | `mkdir -pv "$(date +%H%M%S)"` |
| `mdw` | `mkdir -pv "$(date +%Y%m%d)-work"` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
