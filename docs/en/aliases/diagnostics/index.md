---
title: Diagnostics Aliases | Dotfiles
description: Short health check commands. Overview for Dotfiles v0.2.495.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Diagnostics Aliases | Dotfiles preview
canonical: /en/aliases/diagnostics/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Diagnostics Aliases
pageType: docs
schemaType: WebPage
permalink: /en/aliases/diagnostics/
---

# Diagnostics Aliases

Short health check commands.

This page introduces one alias group and its common command shortcuts.
Read it first to understand naming conventions, expected inputs, and safe execution patterns.
Then open the reference appendix for the complete command inventory and exact syntax.
These aliases reduce repeated typing and preserve consistent workflow behavior on macOS, Linux, and WSL.

## When to use

Use this page before daily shell work when you need predictable command patterns.

## What is included

- Aliases: 14
- Helper functions: 1
- Source files: 1

## Quick examples

- `ca` → `chezmoi apply`
- `capply` → `dot apply`
- `cdiff` → `dot diff`
- `cdrift` → `dot drift`
- `ce` → `chezmoi edit`
- `crem` → `dot remove`
- `cupdate` → `dot update`
- `dot-doctor` → `dotdoc`
- `dot-drift` → `drift`
- `dot-heal` → `heal`
- `dotdoc` → `bash $HOME/.dotfiles/scripts/diagnostics/doctor.sh`
- `dotdoc-full` → `bash $HOME/.dotfiles/scripts/diagnostics/doctor.sh && echo "\n--- Path Info ---" && echo $PATH | tr ":" "\n" | glow -`

## Next step

Open the full list:

- [Diagnostics Reference Appendix](./reference.md)
