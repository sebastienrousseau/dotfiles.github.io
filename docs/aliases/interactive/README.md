---
title: "Interactive Aliases: Safe Shell Commands with Confirmation Prompts"
description: "Shell aliases that add interactive prompts before destructive operations like rm, mv, and cp. Prevent accidental file deletion."
lang: en-GB
metaTitle: "Interactive Aliases | Dotfiles"
permalink: /aliases/interactive/
sidebar: true
meta:
  - name: keywords
    content: interactive aliases, shell safety, rm confirmation, cp interactive, mv prompt, dotfiles, bash aliases
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Interactive Aliases | Dotfiles
  - name: twitter:description
    content: Shell aliases that add interactive prompts before destructive operations like rm, mv, and cp.
  - name: og:title
    content: Interactive Aliases | Dotfiles
  - name: og:description
    content: Shell aliases that add interactive prompts before destructive operations like rm, mv, and cp.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Interactive Aliases

Safe shell commands with confirmation prompts before destructive operations.

![Dotfiles banner][banner]

## Overview

Interactive aliases add confirmation prompts to common shell commands that can permanently modify or delete files. Defined in `interactive.aliases.sh` and automatically loaded by chezmoi, these aliases help prevent accidental data loss by requiring user confirmation before executing potentially destructive operations.

## Reference

### File Operations

| Alias | Description |
|-------|-------------|
| `cp` | Copy files and directories interactively with verbose output. Prompts before overwriting existing files. |
| `mv` | Move or rename files interactively with verbose output. Prompts before overwriting existing files. |
| `ln` | Create symbolic links interactively with verbose output. Prompts before overwriting existing links. |

### File Removal

| Alias | Description |
|-------|-------------|
| `rm` | Remove files or directories interactively with verbose output. Prompts before each removal. |
| `del` | Remove files or directories interactively and recursively with verbose output. Prompts before each removal. |
| `zap` | Alias for `rm`. Removes files or directories interactively with verbose output. |

### Trash Management

| Alias | Description |
|-------|-------------|
| `bin` | Remove all files in the trash directory (`~/.Trash`) forcefully and recursively. |

### Permissions and Utilities

| Alias | Description |
|-------|-------------|
| `chmod` | Change file or directory permissions with verbose output. |
| `chown` | Change file or directory owner and group with verbose output. |
| `diff` | Compare and show differences between two files in unified format. |
| `grep` | Search for a pattern in files or output, showing line numbers and case-insensitively. |
| `mkdir` | Create a new directory with parent directories as needed and verbose output. |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
