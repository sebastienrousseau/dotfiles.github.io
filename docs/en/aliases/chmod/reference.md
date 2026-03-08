---
title: Chmod Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Chmod in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Chmod Reference Appendix | Dotfiles preview
canonical: /en/aliases/chmod/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Chmod Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/chmod/reference/
---

# Chmod Reference Appendix

## Source files

- `.chezmoitemplates/aliases/chmod/chmod.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `chmod_000` | `change_permission 000` |
| `chmod_1755` | `'change_permission 1755' # Sticky bit + 755` |
| `chmod_2755` | `'change_permission 2755' # Setgid + 755` |
| `chmod_400` | `'change_permission 400' # Read-only for owner` |
| `chmod_444` | `'change_permission 444' # Read-only for all` |
| `chmod_4755` | `'change_permission 4755' # Setuid + 755` |
| `chmod_600` | `'change_permission 600' # Read/write for owner` |
| `chmod_644` | `'change_permission 644' # Read/write for owner, read for others` |
| `chmod_664` | `'change_permission 664' # Read/write for owner and group, read for others` |
| `chmod_666` | `'change_permission 666' # Read/write for all` |
| `chmod_700` | `'change_permission 700' # Full for owner only` |
| `chmod_744` | `'change_permission 744' # Full for owner, read for others` |
| `chmod_755` | `'change_permission 755' # Full for owner, read/execute for others` |
| `chmod_764` | `'change_permission 764' # Full for owner, read/write for group, read for others` |
| `chmod_775` | `'change_permission 775' # Full for owner and group, read/execute for others` |
| `chmod_777` | `'change_permission 777' # Full permissions for all` |
| `permissions` | `show_permissions` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
