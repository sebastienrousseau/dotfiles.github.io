---
title: Security Aliases | Dotfiles
description: Discover security aliases in Dotfiles v0.2.495. Short commands for SSH key management, encryption, and vulnerability scanning on macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Security Aliases | Dotfiles preview
canonical: /en/aliases/security/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Security Aliases
pageType: docs
schemaType: WebPage
permalink: /en/aliases/security/
---

# Security Aliases

Short security commands.

This page introduces one alias group and its common command shortcuts.
Read it first to understand naming conventions, expected inputs, and safe execution patterns.
Then open the reference appendix for the complete command inventory and exact syntax.
These aliases reduce repeated typing and preserve consistent workflow behavior on macOS, Linux, and WSL.

## When to use

Use this page before daily shell work when you need predictable command patterns.

## What is included

- Aliases: 98
- Helper functions: 61
- Source files: 21

## Quick examples

- `ccc` → `ccrypt -c`
- `ccd` → `ccrypt -d`
- `cce` → `ccrypt -e`
- `check-locks` → `bash $script_path check`
- `f2b` → `sudo fail2ban-client`
- `f2br` → `sudo fail2ban-client reload`
- `f2bs` → `sudo fail2ban-client status`
- `f2bsa` → `sudo fail2ban-client status all`
- `f2bssh` → `sudo fail2ban-client status sshd`
- `fwahttp` → `sudo ufw allow http`
- `fwahttps` → `sudo ufw allow https`
- `fwaimaps` → `sudo ufw allow imaps`

## Next step

Open the full list:

- [Security Reference Appendix](./reference.md)
