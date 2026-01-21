---
description: modern aliases for Dotfiles
lang: zh-CN
metaTitle: modern aliases - Dotfiles
permalink: /zh/aliases/modern/
---

# Modern Tooling 别名

管理 Modern Tooling 别名。 Part of the **Universal Dotfiles** configuration.

![Dotfiles banner][banner]

## 📖 描述

这些别名定义在 `modern.aliases.sh` 中，并由 `chezmoi` 自动加载。
They provide modern replacements for legacy Unix tools (Rust-based).

## ⚡ 别名

### File Listing (eza)
If `eza` is installed (replacing `ls`):
- `ls` - List files (`eza --icons`)
- `ll` - Long list (`eza -alF`)
- `la` - List all (`eza -a`)
- `lt` - List tree (`eza --tree`)

*(Falls back to standard `ls` if `eza` is missing)*

### File Content (bat)
If `bat` is installed (replacing `cat`):
- `cat` - Display file content with syntax highlighting

### Searching (rg)
If `rg` is installed (replacing `grep`):
- `grep` - Search with Ripgrep

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
