---
title: Interactive Aliases | Dotfiles
description: Discover interactive shell aliases in Dotfiles v0.2.495. Prompts and confirmations for destructive operations on macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Interactive Aliases | Dotfiles preview
canonical: /en/aliases/interactive/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Interactive Aliases
pageType: docs
schemaType: WebPage
permalink: /en/aliases/interactive/
---

# Interactive Aliases

Short interactive shell commands.

This page introduces one alias group and its common command shortcuts.
Read it first to understand naming conventions, expected inputs, and safe execution patterns.
Then open the reference appendix for the complete command inventory and exact syntax.
These aliases reduce repeated typing and preserve consistent workflow behavior on macOS, Linux, and WSL.

## When to use

Use this page before daily shell work when you need predictable command patterns.

## What is included

- Aliases: 8
- Helper functions: 0
- Source files: 1

## Quick examples

- `bin` → `dot_confirm_destructive "rm -fr ${HOME}/.Trash" && rm -fr ${HOME}/.Trash`
- `cp` → `cp -vi`
- `del` → `dot_confirm_destructive "rm -rfvi (del)" && rm -rfvi`
- `diff` → `diff -u`
- `ln` → `ln -vi`
- `mkdir` → `mkdir -pv`
- `mv` → `mv -vi`
- `rm` → `rm -vi`

## Next step

Open the full list:

- [Interactive Reference Appendix](./reference.md)
