---
title: Cross-Platform Compatibility Matrix | Dotfiles
description: Check cross-platform compatibility for Dotfiles v0.2.495. Tested support matrix for shells, terminals, CLI tools, and alias categories on macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Cross-Platform Compatibility Matrix preview
canonical: /en/compatibility/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Compatibility
pageType: docs
schemaType: TechArticle
permalink: /en/compatibility/
---

# Cross-Platform Compatibility Matrix

This page documents tested platform support for Dotfiles v0.2.495 across macOS Sonoma and later, Ubuntu 24.04, and WSL2. Every shell, tool, terminal emulator, and alias category listed below has been verified on real hardware, with badges indicating full support, partial support, or known incompatibilities to help you plan your setup.

## Badge Legend

| Badge | Meaning |
|-------|---------|
| ✅ | Fully tested and supported |
| ⚠️ | Partial support — see notes |
| ❌ | Not supported |
| — | Not applicable |

## Shell Environment

| Component | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Notes |
|-----------|:---:|:---:|:---:|-------|
| Bash 5.x | ✅ | ✅ | ✅ | macOS requires Homebrew Bash |
| Zsh 5.9+ | ✅ | ✅ | ✅ | Default on macOS |
| Fish 3.7+ | ✅ | ✅ | ✅ | `apt` / `brew install fish` |
| POSIX sh | ⚠️ | ✅ | ✅ | Limited alias support |
| PowerShell | — | — | ⚠️ | WSL interop only |

## Modern Core Tools

| Tool | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Install |
|------|:---:|:---:|:---:|---------|
| Atuin (history) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| bat (cat) | ✅ | ✅ | ✅ | `brew` / `apt` |
| eza (ls) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| fd (find) | ✅ | ✅ | ✅ | `brew` / `apt` |
| fzf (fuzzy) | ✅ | ✅ | ✅ | `brew` / `apt` |
| ripgrep (grep) | ✅ | ✅ | ✅ | `brew` / `apt` |
| starship (prompt) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| zoxide (cd) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| Yazi (file mgr) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| Zellij (mux) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| NeoVim | ✅ | ✅ | ✅ | `brew` / `apt` |

## Terminal Emulators

| Terminal | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Notes |
|----------|:---:|:---:|:---:|-------|
| Ghostty | ✅ | ✅ | ⚠️ | Native Wayland on Linux |
| Alacritty | ✅ | ✅ | ⚠️ | GPU-accelerated |
| WezTerm | ✅ | ✅ | ✅ | Lua config |
| iTerm2 | ✅ | — | — | macOS only |
| Windows Terminal | — | — | ✅ | WSL host |

## Package Managers

| Manager | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Notes |
|---------|:---:|:---:|:---:|-------|
| Homebrew | ✅ | ✅ | ✅ | Primary for macOS |
| apt | — | ✅ | ✅ | System packages |
| Cargo | ✅ | ✅ | ✅ | Rust tools |
| npm / pnpm | ✅ | ✅ | ✅ | Node tooling |
| pip / pipx | ✅ | ✅ | ✅ | Python tooling |

## Security & Signing

| Feature | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Notes |
|---------|:---:|:---:|:---:|-------|
| SSH commit signing | ✅ | ✅ | ✅ | Native, no GPG |
| age encryption | ✅ | ✅ | ✅ | Chezmoi integration |
| SOPS | ✅ | ✅ | ✅ | age or GPG backend |
| 1Password CLI | ✅ | ✅ | ⚠️ | WSL requires bridge |
| git-secrets | ✅ | ✅ | ✅ | Pre-commit hook |

## Alias Categories

| Category | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Notes |
|----------|:---:|:---:|:---:|-------|
| AI | ✅ | ✅ | ✅ | Requires API keys |
| Archives | ✅ | ✅ | ✅ | — |
| cd (zoxide) | ✅ | ✅ | ✅ | — |
| chmod | ✅ | ✅ | ✅ | — |
| Clear | ✅ | ✅ | ✅ | — |
| Configuration | ✅ | ✅ | ✅ | — |
| Default | ✅ | ✅ | ✅ | — |
| Diagnostics | ✅ | ✅ | ✅ | — |
| dig | ✅ | ✅ | ✅ | — |
| Disk Usage | ✅ | ✅ | ✅ | — |
| Docker | ✅ | ✅ | ✅ | Requires Docker |
| Editor | ✅ | ✅ | ✅ | — |
| Find (fd) | ✅ | ✅ | ✅ | — |
| Fonts | ✅ | ⚠️ | ⚠️ | Limited on headless |
| gcloud | ✅ | ✅ | ✅ | Requires SDK |
| Git | ✅ | ✅ | ✅ | — |
| GNU | ⚠️ | ✅ | ✅ | macOS needs coreutils |
| Go | ✅ | ✅ | ✅ | Requires Go |
| Heroku | ✅ | ✅ | ✅ | Requires CLI |
| Interactive | ✅ | ✅ | ✅ | — |
| Kubernetes | ✅ | ✅ | ✅ | Requires kubectl |
| Lua | ✅ | ✅ | ✅ | Requires Lua |
| macOS | ✅ | — | — | macOS only |
| Make | ✅ | ✅ | ✅ | — |
| mkdir | ✅ | ✅ | ✅ | — |
| Modern | ✅ | ✅ | ✅ | Rust replacements |
| npm | ✅ | ✅ | ✅ | Requires Node |
| Permission | ✅ | ✅ | ✅ | — |
| pnpm | ✅ | ✅ | ✅ | Requires pnpm |
| ps | ✅ | ✅ | ✅ | — |
| Python | ✅ | ✅ | ✅ | Requires Python |
| rsync | ✅ | ✅ | ✅ | — |
| Rust | ✅ | ✅ | ✅ | Requires Rust |
| Security | ✅ | ✅ | ✅ | — |
| Subversion | ✅ | ✅ | ✅ | Requires svn |
| sudo | ✅ | ✅ | ✅ | — |
| Terraform | ✅ | ✅ | ✅ | Requires Terraform |
| tmux | ✅ | ✅ | ✅ | — |
| Update | ✅ | ✅ | ✅ | — |
| UUID | ✅ | ✅ | ✅ | — |
| wget | ✅ | ✅ | ✅ | — |
| Yarn | ✅ | ✅ | ✅ | Requires Yarn |

## Related

- [About](/en/about/)
- [Aliases](/en/aliases/)
- [Secret Management Best Practices](/en/guides/secret-management/)
