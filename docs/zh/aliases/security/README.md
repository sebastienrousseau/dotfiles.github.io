---
description: security aliases for Dotfiles
lang: zh-CN
metaTitle: security aliases - Dotfiles
permalink: /zh/aliases/security/
---

# Security 别名

Tools for hardening the environment and managing configuration immutability.

## 🔒 Immutability

| Alias | Description |
|-------|-------------|
| `lock-configs` | Locks critical files (`.zshrc`, etc.) to prevent modification (`chflags uchg` / `chattr +i`). |
| `unlock-configs` | Unlocks critical files for editing. |
| `check-locks` | Checks the lock status of critical files. |

## 🔑 Git Signing

(See [Git Aliases](../git/README.md) for signing configuration)
