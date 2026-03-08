---
title: Wget Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Wget in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Wget Reference Appendix | Dotfiles preview
canonical: /en/aliases/wget/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Wget Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/wget/reference/
---

# Wget Reference Appendix

## Source files

- `.chezmoitemplates/aliases/wget/wget.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `wg` | `wget` |
| `wgc` | `wg` |
| `wge` | `wg -e robots=off` |
| `wget` | `wget -c` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
