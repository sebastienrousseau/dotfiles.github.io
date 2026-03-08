---
title: Default Aliases | Dotfiles
description: Main daily shell aliases. Overview for Dotfiles v0.2.495.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Default Aliases | Dotfiles preview
canonical: /en/aliases/default/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Default Aliases
pageType: docs
schemaType: WebPage
permalink: /en/aliases/default/
---

# Default Aliases

Main daily shell aliases.

This page introduces one alias group and its common command shortcuts.
Read it first to understand naming conventions, expected inputs, and safe execution patterns.
Then open the reference appendix for the complete command inventory and exact syntax.
These aliases reduce repeated typing and preserve consistent workflow behavior on macOS, Linux, and WSL.

## When to use

Use this page before daily shell work when you need predictable command patterns.

## What is included

- Aliases: 17
- Helper functions: 2
- Source files: 1

## Quick examples

- `clearasl` → `clear_asl_logs`
- `ctf` → `echo $(ls -1 | wc -l)`
- `da` → `date "+%Y-%m-%d %A %T %Z"`
- `halt` → `sudo shutdown -h now`
- `history` → `'fc -il 1' # Show history with ISO 8601 timestamps (zsh)`
- `ipinfo` → `ip -br addr`
- `ipinfo` → `ipconfig getpacket en0`
- `ping` → `ping -c 5`
- `poweroff` → `sudo shutdown -h now`
- `q` → `quit`
- `qfind` → `find . -name `
- `quit` → `exit`

## Next step

Open the full list:

- [Default Reference Appendix](./reference.md)
