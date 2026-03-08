---
title: Legal Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Legal in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Legal Reference Appendix | Dotfiles preview
canonical: /en/aliases/legal/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Legal Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/legal/reference/
---

# Legal Reference Appendix

## Source files

- `.chezmoitemplates/aliases/legal/legal.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `add-headers` | `add_headers_fn` |
| `check-cla` | `check_cla_fn` |
| `fossology-stop` | `docker stop fossology && docker rm fossology` |
| `gen-notice` | `gen_notice_fn` |
| `scan-licenses` | `scan_licenses_fn` |

## Helper functions

- `fossology-start()`

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
