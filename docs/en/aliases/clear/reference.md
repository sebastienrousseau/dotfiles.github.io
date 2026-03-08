---
title: Clear Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Clear in Dotfiles v0.2.495.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Clear Reference Appendix | Dotfiles preview
canonical: /en/aliases/clear/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Clear Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/clear/reference/
---

# Clear Reference Appendix

## Source files

- `.chezmoitemplates/aliases/clear/clear.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `c` | `clear_screen` |
| `cdw` | `cd_workspace` |
| `clh` | `clear_history` |
| `clp` | `print_working_dir` |
| `cls` | `clear_list_current` |
| `clt` | `clear_print_tree` |
| `cpl` | `clear_pwd_list` |
| `cplt` | `clear_pwd_tree` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
