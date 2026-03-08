---
title: Modern Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Modern in Dotfiles v0.2.495.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Modern Reference Appendix | Dotfiles preview
canonical: /en/aliases/modern/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Modern Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/modern/reference/
---

# Modern Reference Appendix

## Source files

- `.chezmoitemplates/aliases/modern/modern.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `cat` | `dot_cat` |
| `fz` | `fzf --preview "bat --color=always --style=numbers {} 2>/dev/null \| head -500 \|\| cat {} 2>/dev/null \| head -500"` |
| `l` | `dot_ls` |
| `la` | `dot_la` |
| `ll` | `dot_ll` |
| `llm` | `command ls -ltA` |
| `lr` | `dot_lr` |
| `lra` | `dot_lra` |
| `ls` | `dot_ls` |
| `lt` | `dot_lt` |
| `lta` | `dot_lta` |
| `lx` | `command ls -la` |
| `tree` | `ls -R` |
| `zj` | `zellij` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
