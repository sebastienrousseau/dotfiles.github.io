---
title: Cd Aliases | Dotfiles
description: Navigate faster with cd aliases in Dotfiles v0.2.495. Quick directory-switching shortcuts for common project paths on macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Cd Aliases | Dotfiles preview
canonical: /en/aliases/cd/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Cd Aliases
pageType: docs
schemaType: WebPage
permalink: /en/aliases/cd/
---

# Cd Aliases

Short folder move commands.

This page introduces one alias group and its common command shortcuts.
Read it first to understand naming conventions, expected inputs, and safe execution patterns.
Then open the reference appendix for the complete command inventory and exact syntax.
These aliases reduce repeated typing and preserve consistent workflow behavior on macOS, Linux, and WSL.

## When to use

Use this page before daily shell work when you need predictable command patterns.

## What is included

- Aliases: 16
- Helper functions: 6
- Source files: 12

## Quick examples

- `bm` → `'bm add'            # Create bookmark`
- `bmg` → `'cd "$(bm goto $1)"' # Go to bookmark (requires shell cd)`
- `bml` → `'bm list'           # List bookmarks`
- `bmr` → `'bm remove'         # Remove bookmark`
- `bmu` → `'bm update'         # Update bookmark`
- `cd` → `'cd_with_history' # Override default cd command`
- `cdh` → `'cd_with_history' # Explicit enhanced cd helper`
- `cdhelp` → `cd_aliases_help`
- `cdversion` → `cd_aliases_version`
- `dh` → `'dirhistory' # Show directory history`
- `dirs` → `'dirs -v'        # List directory stack with indices`
- `ld` → `'lwd'        # Return to last directory`

## Next step

Open the full list:

- [Cd Reference Appendix](./reference.md)
