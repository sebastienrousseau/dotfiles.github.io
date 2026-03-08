---
title: Tmux Aliases | Dotfiles
description: Short tmux commands. Overview for Dotfiles v0.2.495.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Tmux Aliases | Dotfiles preview
canonical: /en/aliases/tmux/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Tmux Aliases
pageType: docs
schemaType: WebPage
permalink: /en/aliases/tmux/
---

# Tmux Aliases

Short tmux commands.

This page introduces one alias group and its common command shortcuts.
Read it first to understand naming conventions, expected inputs, and safe execution patterns.
Then open the reference appendix for the complete command inventory and exact syntax.
These aliases reduce repeated typing and preserve consistent workflow behavior on macOS, Linux, and WSL.

## When to use

Use this page before daily shell work when you need predictable command patterns.

## What is included

- Aliases: 11
- Helper functions: 1
- Source files: 1

## Quick examples

- `tma` → `'tmux attach-session'     # Attach to last session`
- `tmat` → `'tmux attach-session -t' # Attach to specific session`
- `tmi` → `'tmux info' # Show tmux info`
- `tmka` → `'tmux kill-server'     # Kill all sessions (server)`
- `tmks` → `'tmux kill-session -a' # Kill all sessions except current`
- `tml` → `'tmux list-sessions'    # List all sessions`
- `tmlp` → `'tmux list-panes'   # List panes`
- `tmls` → `'tmux list-windows' # List windows`
- `tmn` → `'tmux new-session'    # New unnamed session`
- `tmr` → `'tmux source ~/.dotfiles/lib/configurations/tmux/tmux' # Reload config`
- `tms` → `'tmux new-session -s' # New named session`

## Next step

Open the full list:

- [Tmux Reference Appendix](./reference.md)
