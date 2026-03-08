---
title: Mkdir Aliases | Dotfiles
description: Short folder create commands. Overview for Dotfiles v0.2.495.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Mkdir Aliases | Dotfiles preview
canonical: /en/aliases/mkdir/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Mkdir Aliases
pageType: docs
schemaType: WebPage
permalink: /en/aliases/mkdir/
---

# Mkdir Aliases

Short folder create commands.

This page introduces one alias group and its common command shortcuts.
Read it first to understand naming conventions, expected inputs, and safe execution patterns.
Then open the reference appendix for the complete command inventory and exact syntax.
These aliases reduce repeated typing and preserve consistent workflow behavior on macOS, Linux, and WSL.

## When to use

Use this page before daily shell work when you need predictable command patterns.

## What is included

- Aliases: 6
- Helper functions: 0
- Source files: 1

## Quick examples

- `md` → `mkdir -v`
- `mdd` → `mkdir -pv "$(date +%Y%m%d)" && cd "$(date +%Y%m%d)"`
- `mde` → `mkdir -pv "$(date +%Y%m%d)-example"`
- `mdn` → `mkdir -pv "$(date +%Y%m%d)-notes"`
- `mdt` → `mkdir -pv "$(date +%H%M%S)"`
- `mdw` → `mkdir -pv "$(date +%Y%m%d)-work"`

## Next step

Open the full list:

- [Mkdir Reference Appendix](./reference.md)
