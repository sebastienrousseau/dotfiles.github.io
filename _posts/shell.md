---
name: "Dotfiles"
short_name: "dotfiles"
title: "Shell Architecture: Zsh & Starship Configuration"
description: "Deep dive into Zsh configuration, Starship cross-shell prompt, and sub-20ms startup optimization."
keywords: "zshrc config, starship prompt setup, fast zsh startup"
author: "Sebastien Rousseau"
date: "2026-09-01"
language: "en-GB"
layout: "page"
permalink: "https://dotfiles.io/shell/index.html"
logo: "https://cloudcdn.pro/cmn/v1/logos/cmn.svg"
banner: "https://cloudcdn.pro/stocks/images/quantum-computer-room-1200.webp"
banner_alt: "Dotfiles — Minimalist macOS & Linux Developer Environment"
---

# Shell Architecture: Zsh & Starship

Achieving instant interactive prompt rendering without sluggish plugin managers.

## Key Performance Techniques

1. **Lazy Loading:** Heavy completions (NVM, SDKMAN, Pyenv, Kubectl) are loaded on-demand only when their commands are first invoked.
2. **Compiled Zsh Bytecode:** The `.zshrc` and functions are pre-compiled into `.zwc` wordcode for instant execution.
3. **Starship Prompt:** Written in Rust, evaluating Git status asynchronously without blocking keystroke input.
