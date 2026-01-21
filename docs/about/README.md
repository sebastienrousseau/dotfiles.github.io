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
- **Native Security**: Fully native SSH signing (Keyless/Proprietary-free) without 3rd party agents.
- **Interactive Mode**: New `dot learn` command to guide you through features.

## Getting Started

### :one: Prerequisites

- **macOS** or **Linux** (Debian/Ubuntu/Fedora/Arch)
- **Curl** (to download the installer)
- **Git** (managed automatically)

### :two: Installation (One-Line)

The entire suite installs via a single command using Chezmoi:

```bash
sh -c "$(curl -fsLS get.chezmoi.io)" -- init --apply sebastienrousseau
```

This command will:
1.  Install the `chezmoi` binary.
2.  Clone the repository to `~/.local/share/chezmoi`.
3.  Calculate the difference between your current state and the desired state.
4.  Apply the configuration (installing packages, fonts, and tools).

### :three: Post-Installation

Once installed, simply type:

```bash
dot learn
```

This will launch the interactive tour to help you get familiar with your new environment.

## What's Included

Your configuration is managed in `~/.local/share/chezmoi`.

```bash
~/.local/share/chezmoi
├── dot_config/          # ~/.config (Ghostty, Zellij, Starship, etc.)
├── dot_local/           # ~/.local (Custom scripts, bin)
├── dot_ssh/             # SSH Security
├── dot_zshrc.tmpl       # Zsh Configuration
├── provision/           # Installation scripts (Darwin/Linux)
└── docs/                # Documentation
```

## Contributing

We welcome contributions! Please review our [Code of Conduct][code-of-conduct-url] and [Contributing Guidelines][contributing-url].

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
