---
title: Tmux Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Tmux in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Tmux Reference Appendix | Dotfiles preview
canonical: /en/aliases/tmux/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Tmux Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/tmux/reference/
---

# Tmux Reference Appendix

## Source files

- `.chezmoitemplates/aliases/tmux/tmux.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `tma` | `'tmux attach-session'     # Attach to last session` |
| `tmat` | `'tmux attach-session -t' # Attach to specific session` |
| `tmi` | `'tmux info' # Show tmux info` |
| `tmka` | `'tmux kill-server'     # Kill all sessions (server)` |
| `tmks` | `'tmux kill-session -a' # Kill all sessions except current` |
| `tml` | `'tmux list-sessions'    # List all sessions` |
| `tmlp` | `'tmux list-panes'   # List panes` |
| `tmls` | `'tmux list-windows' # List windows` |
| `tmn` | `'tmux new-session'    # New unnamed session` |
| `tmr` | `'tmux source ~/.dotfiles/lib/configurations/tmux/tmux' # Reload config` |
| `tms` | `'tmux new-session -s' # New named session` |

## Helper functions

- `tm()`

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
