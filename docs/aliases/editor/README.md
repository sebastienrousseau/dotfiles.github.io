---
title: "Editor Aliases: Streamlined Text Editing Shortcuts"
description: "Shell aliases for Neovim, VS Code, Vim, Nano, Emacs, and Sublime Text. Edit files faster with universal shortcuts."
lang: en-GB
metaTitle: "Editor Aliases | Dotfiles"
permalink: /aliases/editor/
sidebar: true
meta:
  - name: keywords
    content: editor aliases, neovim, vim, vscode, nano, emacs, sublime text, shell shortcuts, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Shell aliases for Neovim, VS Code, Vim, Nano, Emacs, and Sublime Text. Edit files faster with universal shortcuts.
  - name: twitter:title
    content: Editor Aliases | Dotfiles
  - name: og:title
    content: Editor Aliases | Dotfiles
  - name: og:description
    content: Shell aliases for Neovim, VS Code, Vim, Nano, Emacs, and Sublime Text. Edit files faster with universal shortcuts.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Editor Aliases

Shortcuts for launching and configuring your preferred text editor.

![Dotfiles banner](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Dotfiles banner")

## Overview

Editor aliases provide a unified interface for text editing across multiple applications. Defined in `editor.aliases.sh` and loaded automatically by chezmoi, these shortcuts work in harmony with `editor.sh` to detect and configure the best available editor on your system.

The system supports Neovim, Visual Studio Code, Vim, Nano, Emacs, Sublime Text, and Atom. Universal aliases adapt to whichever editor is active, while specialized aliases offer editor-specific functionality.

## Reference

### Universal Aliases

These aliases work with any editor configured by `editor.sh`.

| Alias | Description |
|-------|-------------|
| `e` | Quick edit command |
| `edit` | Standard edit command |
| `editor` | Full editor command |
| `mate` | TextMate-style command |
| `n` | Short edit alias |
| `v` | Vim-like edit alias |

### Neovim Aliases

Available when Neovim is the primary editor.

| Alias | Description |
|-------|-------------|
| `vi` | Redirected to Neovim |
| `vim` | Redirected to Neovim |
| `nvimrc` | Edit Neovim Vimscript configuration |
| `nvimlua` | Edit Neovim Lua configuration |
| `nvimconf` | Open Neovim configuration directory |

### Visual Studio Code Aliases

Available when VS Code is installed.

| Alias | Description |
|-------|-------------|
| `vsc` | Launch VS Code |
| `vsca` | Add folder to current window |
| `vscd` | Compare two files |
| `vscn` | Open new window |
| `vscr` | Reuse window when opening files |
| `vscu` | Open with custom user data directory |
| `vsced` | Open with custom extensions directory |
| `vscex` | Install VS Code extension |
| `vsclist` | List installed extensions |

### Vim Aliases

Available when Vim is the primary editor.

| Alias | Description |
|-------|-------------|
| `vi` | Redirected to Vim |
| `vimrc` | Edit Vim configuration file |
| `vimconf` | Open Vim configuration directory |

### Nano Aliases

Available when Nano is the primary editor.

| Alias | Description |
|-------|-------------|
| `nanorc` | Edit Nano configuration file |
| `ne` | Enhanced Nano with line numbers and smooth scrolling |

### Emacs Aliases

Available when Emacs is installed.

| Alias | Description |
|-------|-------------|
| `em` | Launch Emacs |
| `emacs-nw` | Run Emacs in terminal mode |
| `emacsc` | Launch Emacs client |
| `emacsrc` | Edit Emacs configuration file |
| `et` | Quick terminal-based Emacs |

### Sublime Text Aliases

Available when Sublime Text is installed.

| Alias | Description |
|-------|-------------|
| `st` | Launch Sublime Text |
| `stt` | Open current directory in Sublime Text |
| `stn` | Open in new Sublime Text window |

### Atom Aliases

Available when Atom is installed.

| Alias | Description |
|-------|-------------|
| `a` | Launch Atom |
| `at` | Open current directory in Atom |
| `an` | Open in new Atom window |

### Configuration Editing

The `editrc` function provides quick access to common configuration files.

| Command | Target File |
|---------|-------------|
| `editrc bash` | `~/.bashrc` |
| `editrc zsh` | `~/.zshrc` |
| `editrc vim` | `~/.vimrc` |
| `editrc nvim` | Neovim init file |
| `editrc tmux` | `~/.tmux.conf` |
| `editrc git` | `~/.gitconfig` |
| `editrc ssh` | `~/.ssh/config` |
| `editrc alias` | `~/.dotfiles/aliases` |
| `editrc dotfiles` | `~/.dotfiles` |

### Usage Examples

```bash
# Quick edit a file using the default editor
e myfile.txt

# Edit configuration files directly
nvimrc    # When using Neovim (vimscript)
nvimlua   # When using Neovim (lua)
vimrc     # When using Vim
nanorc    # When using Nano

# Use VS Code to open a folder in a new window
vscn ~/projects/my-project

# Use enhanced nano with line numbers
ne config.txt

# Edit specific configuration files
editrc git    # Edit git configuration
editrc bash   # Edit bash configuration
```
