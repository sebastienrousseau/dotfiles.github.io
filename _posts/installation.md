---
name: "Dotfiles"
short_name: "dotfiles"
title: "Installation & Setup Guide: macOS & Linux"
description: "Step-by-step installation guide for automated and manual dotfiles deployment with Homebrew Brewfile."
keywords: "install dotfiles, macos setup script, brewfile automation"
author: "Sebastien Rousseau"
date: "2026-09-01"
language: "en-GB"
layout: "page"
permalink: "https://dotfiles.io/installation/index.html"
logo: "https://cloudcdn.pro/cmn/v1/logos/cmn.svg"
banner: "https://cloudcdn.pro/stocks/images/quantum-computer-room-1200.webp"
banner_alt: "Dotfiles — Minimalist macOS & Linux Developer Environment"
---

# Installation & Workstation Setup

## 1. Automated Installation (Recommended)

Run the automated installer in your terminal:

```bash
bash -c "$(curl -fsSL https://dotfiles.io/install.sh)"
```

### What the installer does:
1. Backs up existing config files to `~/.dotfiles_backup/`.
2. Clones the repository to `~/.dotfiles`.
3. Installs Homebrew (if missing) and runs `brew bundle` from `Brewfile`.
4. Creates atomic symlinks for Zsh, Tmux, Git, and Neovim configurations.
5. Installs Starship prompt and modern CLI binaries (`bat`, `eza`, `ripgrep`, `zoxide`).

---

## 2. Manual Installation

```bash
# 1. Clone repository
git clone https://github.com/sebastienrousseau/dotfiles.github.io.git ~/.dotfiles
cd ~/.dotfiles

# 2. Symlink core configurations
ln -sf ~/.dotfiles/.zshrc ~/.zshrc
ln -sf ~/.dotfiles/.tmux.conf ~/.tmux.conf
ln -sf ~/.dotfiles/.gitconfig ~/.gitconfig
mkdir -p ~/.config
ln -sf ~/.dotfiles/.config/nvim ~/.config/nvim

# 3. Install packages via Homebrew
brew bundle --file=~/.dotfiles/Brewfile
```
