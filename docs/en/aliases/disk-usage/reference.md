---
title: Disk Usage Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Disk Usage in Dotfiles v0.2.495.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Disk Usage Reference Appendix | Dotfiles preview
canonical: /en/aliases/disk-usage/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Disk Usage Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/disk-usage/reference/
---

# Disk Usage Reference Appendix

## Source files

- `.chezmoitemplates/aliases/disk-usage/du.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `du` | `du -h` |
| `du1` | `du -hxd 1 \| sort -h` |
| `ducks` | `du -cks * .* \| sort -rn \| head -n 10` |
| `duh` | `du` |
| `dus` | `du -hs *` |
| `dusym` | `du * -hsLc` |
| `dut` | `dus` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
