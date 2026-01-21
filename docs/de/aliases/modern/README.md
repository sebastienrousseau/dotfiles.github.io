---
description: modern aliases for Dotfiles
lang: de-DE
metaTitle: modern aliases - Dotfiles
permalink: /de/aliases/modern/
---

# Modern Tooling-Aliase

Verwalten Sie Modern Tooling-Aliase. Part of the **Universal Dotfiles** configuration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `modern.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.
They provide modern replacements for legacy Unix tools (Rust-based).

## ⚡ Aliase

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
