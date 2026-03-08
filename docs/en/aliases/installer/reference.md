---
title: Installer Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Installer in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Installer Reference Appendix | Dotfiles preview
canonical: /en/aliases/installer/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Installer Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/installer/reference/
---

# Installer Reference Appendix

## Source files

- `.chezmoitemplates/aliases/installer/installer.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `dot-install` | `bash $HOME/.dotfiles/install.sh` |
| `dot-teleport` | `telegram` |
| `telegram` | `bash $HOME/.dotfiles/scripts/ops/teleport.sh` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
