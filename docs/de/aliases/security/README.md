---
description: security aliases for Dotfiles
lang: de-DE
metaTitle: security aliases - Dotfiles
permalink: /de/aliases/security/
---

# Security-Aliase

Tools for hardening the environment and managing configuration immutability.

## 🔒 Immutability

| Alias | Description |
|-------|-------------|
| `lock-configs` | Locks critical Dateien (`.zshrc`, etc.) to prevent modification (`chflags uchg` / `chattr +i`). |
| `unlock-configs` | Unlocks critical Dateien for editing. |
| `check-locks` | Checks the lock status of critical Dateien. |

## 🔑 Git Signing

(See [Git Aliases](../git/README.md) for signing configuration)
