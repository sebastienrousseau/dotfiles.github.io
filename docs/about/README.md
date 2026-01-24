---
description: The next generation of configuration files, managed by Chezmoi. High performance, secure, and AI-native.
lang: en-GB
metaTitle: About Dotfiles - Dotfiles (UK)
permalink: /about/

meta:
  - name: keywords
    content: chezmoi, dotfiles, configuration, automation, macos, linux, rust, zellij
---

# About Dotfiles v0.2.471

## Introduction

Dotfiles represents the modern standard for environment configuration. It is built on top of **Chezmoi**, providing a secure, reliable, and cross-platform way to manage your shell, applications, and secrets.

Unlike legacy dotfiles that rely on complex Makefiles or symlink scripts, Dotfiles uses a template-based approach that is atomic and fast.

## What's New in v0.2.471

- **Modern Core**: We've replaced legacy Unix tools with high-performance Rust alternatives:
  - **Atuin** (replaces `history`)
  - **Yazi** (replaces `ls`/`ranger`)
  - **Zellij** (replaces `tmux`)
  - **Ghostty** (Modern GPU-accelerated terminal)
  - **NeoVim** (Modern Vim-based editor)
- **Native Security**: Fully native SSH signing (Keyless/Proprietary-free) without 3rd party agents.
- **Interactive Mode**: New `dot learn` command to guide you through features.

## Getting Started

### :one: Prerequisites

- **macOS**, **Linux (Ubuntu/Debian)**, or **Windows (WSL)**
- **Curl** (to download the installer)
- **Git**
- **Chezmoi** (installed by the script if missing)
- **Nerd Font** (for terminal icons)

### :two: Installation (One-Line)

The entire suite installs via a single command using Chezmoi:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/v0.2.471/install.sh)"
```

This command will:

1.  Install the `chezmoi` binary.
2.  Clone the repository.
3.  **Automatically** install required packages (via Homebrew on macOS or Apt on Linux).
4.  Apply the configuration.

### :three: Post-Installation

Once installed, restart your terminal and then run:

```bash
dot learn
```

This will launch the interactive tour to help you get familiar with your new environment.

## What's Included

Your configuration is managed in `~/.local/share/chezmoi`.

```bash
~/.local/share/chezmoi
├── dot_zshenv              # Shell entry point (XDG Bootloader)
├── dot_config/             # XDG Base Config (Mapped to ~/.config)
│   ├── atuin/              # Shell History (config.toml)
│   ├── ghostty/            # Terminal Emulator (config)
│   ├── git/                # Git Config (config)
│   ├── yazi/               # File Manager (yazi.toml)
│   ├── zellij/             # Multiplexer (config.kdl)
│   ├── zsh/                # Zsh config (.zshrc)
│   └── shell/              # Shared shell config (aliases, paths)
├── provision/              # Lifecycle scripts (install packages, fonts)
├── install.sh              # Universal Installer
├── README.md               # Documentation
└── docs/                   # Detailed documentation
```

## Contributing

We welcome contributions! Please review our [Code of Conduct][code-of-conduct-url] and [Contributing Guidelines][contributing-url].

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
