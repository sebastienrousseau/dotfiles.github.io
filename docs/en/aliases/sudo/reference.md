---
title: Sudo Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Sudo in Dotfiles v0.2.495.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Sudo Reference Appendix | Dotfiles preview
canonical: /en/aliases/sudo/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Sudo Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/sudo/reference/
---

# Sudo Reference Appendix

## Source files

- `.chezmoitemplates/aliases/sudo/sudo.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `_` | `sudo ` |
| `s` | `sudoi` |
| `su` | `sudo su` |
| `sudo` | `sudoi` |
| `sudoi` | `sudo -i` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
