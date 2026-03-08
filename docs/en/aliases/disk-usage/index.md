---
title: Disk Usage Aliases | Dotfiles
description: Short disk usage commands. Overview for Dotfiles v0.2.495.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Disk Usage Aliases | Dotfiles preview
canonical: /en/aliases/disk-usage/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Disk Usage Aliases
pageType: docs
schemaType: WebPage
permalink: /en/aliases/disk-usage/
---

# Disk Usage Aliases

Short disk usage commands.

This page introduces one alias group and its common command shortcuts.
Read it first to understand naming conventions, expected inputs, and safe execution patterns.
Then open the reference appendix for the complete command inventory and exact syntax.
These aliases reduce repeated typing and preserve consistent workflow behavior on macOS, Linux, and WSL.

## When to use

Use this page before daily shell work when you need predictable command patterns.

## What is included

- Aliases: 7
- Helper functions: 0
- Source files: 1

## Quick examples

- `du` → `du -h`
- `du1` → `du -hxd 1 | sort -h`
- `ducks` → `du -cks * .* | sort -rn | head -n 10`
- `duh` → `du`
- `dus` → `du -hs *`
- `dusym` → `du * -hsLc`
- `dut` → `dus`

## Next step

Open the full list:

- [Disk Usage Reference Appendix](./reference.md)
