---
description: The next generation of shell configuration. High performance, secure, and AI-native. Managed by Chezmoi.
lang: en-GB
metaTitle: About Dotfiles - Dotfiles (UK)
permalink: /about/

meta:
  - name: keywords
    content: chezmoi, dotfiles, configuration, automation, macos, linux, rust, zellij, shell, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: The next generation of shell configuration. High performance, secure, and AI-native. Managed by Chezmoi.
  - name: twitter:title
    content: About Dotfiles
  - name: og:title
    content: About Dotfiles
  - name: og:description
    content: The next generation of shell configuration. High performance, secure, and AI-native. Managed by Chezmoi.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# About Dotfiles

The modern standard for shell configuration. Built on **Chezmoi** for secure, cross-platform environment management.

## Discover

Dotfiles v0.2.481 transforms your terminal into a powerful, unified workspace. Unlike legacy dotfiles that rely on complex Makefiles or symlink scripts, Dotfiles uses a template-based approach that is atomic, fast, and reproducible.

### What's new

- **Modern Core** — High-performance Rust alternatives replace legacy Unix tools:
  - **Atuin** for shell history
  - **Yazi** for file management
  - **Zellij** for terminal multiplexing
  - **Ghostty** for GPU-accelerated terminal
  - **NeoVim** for modern editing
- **Native Security** — Fully native SSH signing without third-party agents
- **Interactive Mode** — New `dot learn` command guides you through features

## Get started

### Requirements

- **macOS**, **Linux (Ubuntu/Debian)**, or **Windows (WSL)**
- **Curl** and **Git**
- **Chezmoi** (installed automatically)
- **Nerd Font** (for terminal icons)

### Install

Run a single command to install the entire suite:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/v0.2.481/install.sh)"
```

The installer will:

1. Install the `chezmoi` binary
2. Clone the repository
3. Install required packages via Homebrew (macOS) or Apt (Linux)
4. Apply your configuration

### Explore

After installation, restart your terminal and run:

```bash
dot learn
```

This launches an interactive tour of your new environment.

## Make it yours

Your configuration lives in `~/.local/share/chezmoi`:

```
~/.local/share/chezmoi
├── dot_zshenv              # Shell entry point
├── dot_config/             # XDG Base Config (~/.config)
│   ├── atuin/              # Shell history
│   ├── ghostty/            # Terminal emulator
│   ├── git/                # Git configuration
│   ├── yazi/               # File manager
│   ├── zellij/             # Terminal multiplexer
│   ├── zsh/                # Zsh configuration
│   └── shell/              # Shared aliases and paths
├── provision/              # Lifecycle scripts
├── install.sh              # Universal installer
└── docs/                   # Documentation
```

## Contribute

Join the community. Review our [Code of Conduct][code-of-conduct-url] and [Contributing Guidelines][contributing-url].

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
