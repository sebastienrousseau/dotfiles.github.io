---
title: Permission Aliases | Dotfiles
description: Manage permission aliases in Dotfiles v0.2.495. Short commands for chmod, chown, and ACL management across macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Permission Aliases | Dotfiles preview
canonical: /en/aliases/permission/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Permission Aliases
pageType: docs
schemaType: WebPage
permalink: /en/aliases/permission/
---

# Permission Aliases

Short permission and owner commands.

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

- `000` → `chmod -R 000`
- `400` → `chmod -R 400`
- `444` → `chmod -R 444`
- `600` → `chmod -R 600`
- `644` → `chmod -R 644`
- `755` → `chmod -R 755`
- `764` → `chmod -R 764`
- `chgrp` → `chgrp -v`
- `chgrpr` → `chgrp -Rv`
- `chgrpu` → `chgrp -Rv ${USER}`
- `chmod` → `chmod -v`
- `chmodr` → `chmod -Rv`

## Next step

Open the full list:

- [Permission Reference Appendix](./reference.md)
