---
description: modern aliases for Dotfiles
lang: es-ES
metaTitle: modern aliases - Dotfiles
permalink: /es/aliases/modern/
---

# Alias de Modern Tooling

Gestionar alias de Modern Tooling. Part of the **Universal Dotfiles** configuration.

![Dotfiles banner][banner]

## 📖 Descripción

Estos alias están definidos en `modern.aliases.sh` y son cargados automáticamente por `chezmoi`.
They provide modern replacements for legacy Unix tools (Rust-based).

## ⚡ Alias

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
