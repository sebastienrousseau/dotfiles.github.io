---
description: The Modern Core is a suite of Rust-powered tools that replace legacy Unix utilities with faster, smarter alternatives.
lang: pt-BR
metaTitle: Modern Core - Dotfiles (BR)
permalink: /pt/aliases/modern-core/

meta:
  - name: keywords
    content: modern core, atuin, yazi, zellij, ghostty, rust, shell, tools
---

# Modern Core Tools

In **v0.2.471**, we introduced the "Modern Core" — a suite of high-performance, Rust-powered tools designed to replace legacy Unix utilities.

## Tools Overview

| Tool        | Replaces        | Description                                             | Keybinding      |
| :---------- | :-------------- | :------------------------------------------------------ | :-------------- |
| **Atuin**   | `history`       | Syncable, encrypted shell history with fuzzy search.    | `Ctrl+R` / `Up` |
| **Yazi**    | `ranger` / `ls` | Blazing fast terminal file manager with image previews. | `yy` (alias)    |
| **Zellij**  | `tmux`          | Modern terminal multiplexer with intuitive layouts.     | `Alt+n`         |
| **Ghostty** | `Terminal.app`  | GPU-accelerated, cross-platform terminal emulator.      | N/A             |

## Atuin (Magical History)

Atuin replaces your existing shell history with a SQLite database.

- **Search**: Press `Ctrl+R` or `Up Arrow` to open the search UI.
- **Filter**: Type natural language queries or specific exit codes.
- **Sync**: Your history is encrypted and synced across your devices.

## Yazi (File Manager)

Yazi is a terminal file manager written in Rust, based on async I/O.

- **Launch**: Type `yy` in your terminal.
- **Features**:
  - Instant startup.
  - Sixel/Kitty image preview support.
  - Lua plugin system.

## Zellij (Multiplexer)

Zellij is a terminal workspace with batteries included.

- **Launch**: Type `zellij` (or use your configured alias).
- **Features**:
  - Layout engine (save/restore workspace layouts).
  - Floating panes.
  - User-friendly keybindings (shown on screen).

## Ghostty (Terminal)

Ghostty is the default terminal emulator for the Modern Core.

- **Features**:
  - Native performance (GPU accelerated).
  - Ligatures and modern font support.
  - Zero-flicker rendering.
