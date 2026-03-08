---
title: Rsync Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Rsync in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Rsync Reference Appendix | Dotfiles preview
canonical: /en/aliases/rsync/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Rsync Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/rsync/reference/
---

# Rsync Reference Appendix

## Source files

- `.chezmoitemplates/aliases/rsync/rsync.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `rs` | `rsync -avz` |
| `rsync` | `rs` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
