---
title: Modern Aliases | Dotfiles
description: Short modern tool commands. Overview for Dotfiles v0.2.495.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Modern Aliases | Dotfiles preview
canonical: /en/aliases/modern/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Modern Aliases
pageType: docs
schemaType: WebPage
permalink: /en/aliases/modern/
---

# Modern Aliases

Short modern tool commands.

This page introduces one alias group and its common command shortcuts.
Read it first to understand naming conventions, expected inputs, and safe execution patterns.
Then open the reference appendix for the complete command inventory and exact syntax.
These aliases reduce repeated typing and preserve consistent workflow behavior on macOS, Linux, and WSL.

## When to use

Use this page before daily shell work when you need predictable command patterns.

## What is included

- Aliases: 14
- Helper functions: 0
- Source files: 1

## Quick examples

- `cat` → `dot_cat`
- `fz` → `fzf --preview "bat --color=always --style=numbers {} 2>/dev/null | head -500 || cat {} 2>/dev/null | head -500"`
- `l` → `dot_ls`
- `la` → `dot_la`
- `ll` → `dot_ll`
- `llm` → `command ls -ltA`
- `lr` → `dot_lr`
- `lra` → `dot_lra`
- `ls` → `dot_ls`
- `lt` → `dot_lt`
- `lta` → `dot_lta`
- `lx` → `command ls -la`

## Next step

Open the full list:

- [Modern Reference Appendix](./reference.md)
