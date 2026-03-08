---
title: Fonts Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Fonts in Dotfiles v0.2.495.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Fonts Reference Appendix | Dotfiles preview
canonical: /en/aliases/fonts/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Fonts Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/fonts/reference/
---

# Fonts Reference Appendix

## Source files

- `.chezmoitemplates/aliases/fonts/fonts.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `list-fonts` | `fc-list : family \| sort \| uniq` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
