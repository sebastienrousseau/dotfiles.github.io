---
title: "Modern Tooling Aliases: Rust-Based Unix Replacements"
description: "Modern shell aliases for eza, bat, and ripgrep. Replace legacy Unix tools with faster Rust-based alternatives."
lang: en-GB
metaTitle: "Modern Tooling Aliases | Dotfiles"
permalink: /aliases/modern/
sidebar: true
meta:
  - name: keywords
    content: "modern aliases, eza, bat, ripgrep, rust cli tools, dotfiles, shell"
---

# Modern Tooling Aliases

Faster, smarter replacements for legacy Unix commands.

## Overview

The modern aliases defined in `modern.aliases.sh` provide Rust-based alternatives to traditional Unix tools. These aliases are automatically loaded by `chezmoi` and gracefully fall back to standard commands when modern tools are unavailable.

## Reference

### File Listing with eza

Replaces `ls` when `eza` is installed.

| Alias | Command | Description |
|-------|---------|-------------|
| `ls` | `eza --icons` | List files with icons |
| `ll` | `eza -alF` | Long list format |
| `la` | `eza -a` | List all files including hidden |
| `lt` | `eza --tree` | Display directory tree |

Falls back to standard `ls` if `eza` is not installed.

### File Content with bat

Replaces `cat` when `bat` is installed.

| Alias | Command | Description |
|-------|---------|-------------|
| `cat` | `bat` | Display file content with syntax highlighting |

### Searching with ripgrep

Replaces `grep` when `rg` is installed.

| Alias | Command | Description |
|-------|---------|-------------|
| `grep` | `rg` | Search file contents with Ripgrep |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
