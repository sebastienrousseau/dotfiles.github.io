---
title: Diagnostics Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Diagnostics in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Diagnostics Reference Appendix | Dotfiles preview
canonical: /en/aliases/diagnostics/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Diagnostics Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/diagnostics/reference/
---

# Diagnostics Reference Appendix

## Source files

- `.chezmoitemplates/aliases/diagnostics/diagnostics.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `ca` | `chezmoi apply` |
| `capply` | `dot apply` |
| `cdiff` | `dot diff` |
| `cdrift` | `dot drift` |
| `ce` | `chezmoi edit` |
| `crem` | `dot remove` |
| `cupdate` | `dot update` |
| `dot-doctor` | `dotdoc` |
| `dot-drift` | `drift` |
| `dot-heal` | `heal` |
| `dotdoc` | `bash $HOME/.dotfiles/scripts/diagnostics/doctor.sh` |
| `dotdoc-full` | `bash $HOME/.dotfiles/scripts/diagnostics/doctor.sh && echo "\n--- Path Info ---" && echo $PATH \| tr ":" "\n" \| glow -` |
| `drift` | `chezmoi verify` |
| `heal` | `chezmoi apply --verbose` |

## Helper functions

- `cdot()`

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
