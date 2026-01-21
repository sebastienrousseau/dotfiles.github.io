---
description: modern aliases for Dotfiles
lang: pt-BR
metaTitle: modern aliases - Dotfiles
permalink: /pt/aliases/modern/
---

# Aliases de Modern Tooling

Gerenciar aliases de Modern Tooling. Part of the **Universal Dotfiles** configuration.

![Dotfiles banner][banner]

## 📖 Descrição

Estes aliases são definidos em `modern.aliases.sh` e são carregados automaticamente por `chezmoi`.
They provide modern replacements for legacy Unix tools (Rust-based).

## ⚡ Aliases

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
