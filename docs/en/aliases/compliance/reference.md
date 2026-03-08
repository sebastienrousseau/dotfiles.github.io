---
title: Compliance Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Compliance in Dotfiles v0.2.495.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Compliance Reference Appendix | Dotfiles preview
canonical: /en/aliases/compliance/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Compliance Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/compliance/reference/
---

# Compliance Reference Appendix

## Source files

- `.chezmoitemplates/aliases/compliance/compliance.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `dot-audit` | `audit_fn` |
| `privacy-mode` | `privacy_mode_fn` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
