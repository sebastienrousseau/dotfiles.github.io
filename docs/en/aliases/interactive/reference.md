---
title: Interactive Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Interactive in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Interactive Reference Appendix | Dotfiles preview
canonical: /en/aliases/interactive/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Interactive Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/interactive/reference/
---

# Interactive Reference Appendix

## Source files

- `.chezmoitemplates/aliases/interactive/interactive.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `bin` | `dot_confirm_destructive "rm -fr ${HOME}/.Trash" && rm -fr ${HOME}/.Trash` |
| `cp` | `cp -vi` |
| `del` | `dot_confirm_destructive "rm -rfvi (del)" && rm -rfvi` |
| `diff` | `diff -u` |
| `ln` | `ln -vi` |
| `mkdir` | `mkdir -pv` |
| `mv` | `mv -vi` |
| `rm` | `rm -vi` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
