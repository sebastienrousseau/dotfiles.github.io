---
title: Git Aliases | Dotfiles
description: Explore Git aliases in Dotfiles v0.2.495. Short, memorable commands for commit, branch, merge, and rebase workflows on macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Git Aliases | Dotfiles preview
canonical: /en/aliases/git/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Git Aliases
pageType: docs
schemaType: WebPage
permalink: /en/aliases/git/
---

# Git Aliases

Short Git commands.

This page introduces one alias group and its common command shortcuts.
Read it first to understand naming conventions, expected inputs, and safe execution patterns.
Then open the reference appendix for the complete command inventory and exact syntax.
These aliases reduce repeated typing and preserve consistent workflow behavior on macOS, Linux, and WSL.

## When to use

Use this page before daily shell work when you need predictable command patterns.

## What is included

- Aliases: 84
- Helper functions: 7
- Source files: 2

## Quick examples

- `check-signing` → `git config --list | grep "gpg\|signing"`
- `ci` → `git commit`
- `enable-signing` → `enable_signing_fn`
- `g` → `git`
- `ga` → `git add`
- `gaa` → `git add --all`
- `gad` → `git add .`
- `gau` → `git add --update`
- `gb` → `git branch`
- `gbd` → `git branch -d`
- `gbl` → `git branch -l`
- `gbr` → `git branch -r`

## Next step

Open the full list:

- [Git Reference Appendix](./reference.md)
