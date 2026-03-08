---
title: Make Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Make in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Make Reference Appendix | Dotfiles preview
canonical: /en/aliases/make/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Make Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/make/reference/
---

# Make Reference Appendix

## Source files

- `.chezmoitemplates/aliases/make/make.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `mk` | `make` |
| `mka` | `make all` |
| `mkc` | `make clean` |
| `mkd` | `make doc` |
| `mkf` | `make format` |
| `mkh` | `make help` |
| `mki` | `make install` |
| `mkr` | `make run` |
| `mkt` | `make test` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
