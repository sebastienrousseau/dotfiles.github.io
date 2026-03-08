---
title: Chmod Aliases | Dotfiles
description: Short permission commands. Overview for Dotfiles v0.2.495.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Chmod Aliases | Dotfiles preview
canonical: /en/aliases/chmod/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Chmod Aliases
pageType: docs
schemaType: WebPage
permalink: /en/aliases/chmod/
---

# Chmod Aliases

Short permission commands.

This page introduces one alias group and its common command shortcuts.
Read it first to understand naming conventions, expected inputs, and safe execution patterns.
Then open the reference appendix for the complete command inventory and exact syntax.
These aliases reduce repeated typing and preserve consistent workflow behavior on macOS, Linux, and WSL.

## When to use

Use this page before daily shell work when you need predictable command patterns.

## What is included

- Aliases: 17
- Helper functions: 0
- Source files: 1

## Quick examples

- `chmod_000` → `change_permission 000`
- `chmod_1755` → `'change_permission 1755' # Sticky bit + 755`
- `chmod_2755` → `'change_permission 2755' # Setgid + 755`
- `chmod_400` → `'change_permission 400' # Read-only for owner`
- `chmod_444` → `'change_permission 444' # Read-only for all`
- `chmod_4755` → `'change_permission 4755' # Setuid + 755`
- `chmod_600` → `'change_permission 600' # Read/write for owner`
- `chmod_644` → `'change_permission 644' # Read/write for owner, read for others`
- `chmod_664` → `'change_permission 664' # Read/write for owner and group, read for others`
- `chmod_666` → `'change_permission 666' # Read/write for all`
- `chmod_700` → `'change_permission 700' # Full for owner only`
- `chmod_744` → `'change_permission 744' # Full for owner, read for others`

## Next step

Open the full list:

- [Chmod Reference Appendix](./reference.md)
