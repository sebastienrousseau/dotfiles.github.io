---
name: "Dotfiles"
short_name: "dotfiles"
title: "Neovim IDE: Modular Lua Configuration"
description: "Complete Neovim setup with native LSP, Treesitter syntax highlighting, and Telescope fuzzy search."
keywords: "neovim lua config, treesitter neovim, telescope fuzzy finder"
author: "Sebastien Rousseau"
date: "2026-09-01"
language: "en-GB"
layout: "page"
permalink: "https://dotfiles.io/editor/index.html"
logo: "https://cloudcdn.pro/cmn/v1/logos/cmn.svg"
banner: "https://cloudcdn.pro/stocks/images/quantum-computer-room-1200.webp"
banner_alt: "Dotfiles — Minimalist macOS & Linux Developer Environment"
---

# Neovim IDE Configuration

Configured in 100% modular Lua with zero deprecated Vimscript.

## Core Plugin Architecture
- **Package Manager:** `lazy.nvim` for declarative plugin synchronization and lazy evaluation.
- **LSP & Autocompletion:** `nvim-lspconfig`, `mason.nvim`, and `nvim-cmp` providing instant code intelligence for Rust, Go, TypeScript, Python, and C/C++.
- **Syntax Highlighting:** `nvim-treesitter` for incremental AST parsing.
- **Fuzzy Navigation:** `telescope.nvim` integrated with `ripgrep` and `fd`.
