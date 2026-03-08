---
title: Find Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Find in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Find Reference Appendix | Dotfiles preview
canonical: /en/aliases/find/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Find Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/find/reference/
---

# Find Reference Appendix

## Source files

- `.chezmoitemplates/aliases/find/find.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `fd` | `fd --color always` |
| `fda` | `fd --absolute-path` |
| `fdc` | `fd --ignore-case` |
| `fdd` | `fd --list-details` |
| `fde` | `fd --extension` |
| `fdf` | `fd --follow` |
| `fdh` | `fd --help` |
| `fdH` | `fd --hidden` |
| `fdn` | `fd --glob` |
| `fdo` | `fd --owner` |
| `fds` | `fd --size` |
| `fdu` | `fd --exclude` |
| `fdv` | `fd --version` |
| `fdx` | `fd --exec` |
| `find` | `fd` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
