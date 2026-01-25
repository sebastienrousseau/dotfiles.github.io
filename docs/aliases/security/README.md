---
description: Security aliases for file immutability and configuration protection. Lock and unlock critical shell files.
lang: en-GB
metaTitle: Security Aliases - Dotfiles (UK)
permalink: /aliases/security/
sidebar: true

meta:
  - name: keywords
    content: security, immutability, file lock, shell aliases, dotfiles, configuration protection
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Security aliases for file immutability and configuration protection. Lock and unlock critical shell files.
  - name: twitter:title
    content: Security Aliases - Dotfiles
  - name: og:title
    content: Security Aliases - Dotfiles
  - name: og:description
    content: Security aliases for file immutability and configuration protection. Lock and unlock critical shell files.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Security Aliases

Protect critical configuration files with immutability controls.

## Overview

These aliases are defined in `security.aliases.sh` and loaded automatically by Chezmoi.

## Reference

### Immutability

| Alias | Description |
|:---|:---|
| `lock-configs` | Lock critical files to prevent modification |
| `unlock-configs` | Unlock critical files for editing |
| `check-locks` | Check the lock status of critical files |

