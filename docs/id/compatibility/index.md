---
title: Matriks Kompatibilitas Lintas Platform | Dotfiles
description: Dukungan platform yang diuji untuk shell, alat, terminal, dan kategori alias di Dotfiles v0.2.495. Kompatibel dengan macOS, Linux, dan WSL melalui Dotfiles.
lang: id-ID
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Matriks Kompatibilitas Lintas Platform preview
canonical: /id/compatibility/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Kompatibilitas
pageType: docs
schemaType: TechArticle
permalink: /id/compatibility/
---

# Matriks Kompatibilitas Lintas Platform

Halaman ini mendokumentasikan dukungan platform yang diuji untuk Dotfiles v0.2.495 di macOS, Linux, dan WSL2.

## Legenda Badge

| Badge | Arti |
|-------|---------|
| ✅ | Sepenuhnya diuji dan didukung |
| ⚠️ | Dukungan parsial — lihat catatan |
| ❌ | Tidak didukung |
| — | Tidak berlaku |

## Lingkungan Shell

| Komponen | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Catatan |
|-----------|:---:|:---:|:---:|-------|
| Bash 5.x | ✅ | ✅ | ✅ | macOS memerlukan Bash Homebrew |
| Zsh 5.9+ | ✅ | ✅ | ✅ | Default di macOS |
| Fish 3.7+ | ✅ | ✅ | ✅ | `apt` / `brew install fish` |
| POSIX sh | ⚠️ | ✅ | ✅ | Dukungan alias terbatas |
| PowerShell | — | — | ⚠️ | Hanya interop WSL |

## Alat Inti Modern

| Alat | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Instalasi |
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

## Emulator Terminal

| Terminal | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Catatan |
|----------|:---:|:---:|:---:|-------|
| Ghostty | ✅ | ✅ | ⚠️ | Wayland native di Linux |
| Alacritty | ✅ | ✅ | ⚠️ | Dipercepat GPU |
| WezTerm | ✅ | ✅ | ✅ | Konfigurasi Lua |
| iTerm2 | ✅ | — | — | Hanya macOS |
| Windows Terminal | — | — | ✅ | Host WSL |

## Manajer Paket

| Manajer | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Catatan |
|---------|:---:|:---:|:---:|-------|
| Homebrew | ✅ | ✅ | ✅ | Utama untuk macOS |
| apt | — | ✅ | ✅ | Paket sistem |
| Cargo | ✅ | ✅ | ✅ | Alat Rust |
| npm / pnpm | ✅ | ✅ | ✅ | Alat Node |
| pip / pipx | ✅ | ✅ | ✅ | Alat Python |

## Keamanan & Penandatanganan

| Fitur | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Catatan |
|---------|:---:|:---:|:---:|-------|
| SSH commit signing | ✅ | ✅ | ✅ | Native, tanpa GPG |
| age encryption | ✅ | ✅ | ✅ | Integrasi Chezmoi |
| SOPS | ✅ | ✅ | ✅ | Backend age atau GPG |
| 1Password CLI | ✅ | ✅ | ⚠️ | WSL memerlukan bridge |
| git-secrets | ✅ | ✅ | ✅ | Hook pre-commit |

## Kategori Alias

| Kategori | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Catatan |
|----------|:---:|:---:|:---:|-------|
| AI | ✅ | ✅ | ✅ | Memerlukan kunci API |
| Archives | ✅ | ✅ | ✅ | — |
| cd (zoxide) | ✅ | ✅ | ✅ | — |
| chmod | ✅ | ✅ | ✅ | — |
| Clear | ✅ | ✅ | ✅ | — |
| Configuration | ✅ | ✅ | ✅ | — |
| Default | ✅ | ✅ | ✅ | — |
| Diagnostics | ✅ | ✅ | ✅ | — |
| dig | ✅ | ✅ | ✅ | — |
| Disk Usage | ✅ | ✅ | ✅ | — |
| Docker | ✅ | ✅ | ✅ | Memerlukan Docker |
| Editor | ✅ | ✅ | ✅ | — |
| Find (fd) | ✅ | ✅ | ✅ | — |
| Fonts | ✅ | ⚠️ | ⚠️ | Terbatas pada headless |
| gcloud | ✅ | ✅ | ✅ | Memerlukan SDK |
| Git | ✅ | ✅ | ✅ | — |
| GNU | ⚠️ | ✅ | ✅ | macOS butuh coreutils |
| Go | ✅ | ✅ | ✅ | Memerlukan Go |
| Heroku | ✅ | ✅ | ✅ | Memerlukan CLI |
| Interactive | ✅ | ✅ | ✅ | — |
| Kubernetes | ✅ | ✅ | ✅ | Memerlukan kubectl |
| Lua | ✅ | ✅ | ✅ | Memerlukan Lua |
| macOS | ✅ | — | — | Hanya macOS |
| Make | ✅ | ✅ | ✅ | — |
| mkdir | ✅ | ✅ | ✅ | — |
| Modern | ✅ | ✅ | ✅ | Pengganti Rust |
| npm | ✅ | ✅ | ✅ | Memerlukan Node |
| Permission | ✅ | ✅ | ✅ | — |
| pnpm | ✅ | ✅ | ✅ | Memerlukan pnpm |
| ps | ✅ | ✅ | ✅ | — |
| Python | ✅ | ✅ | ✅ | Memerlukan Python |
| rsync | ✅ | ✅ | ✅ | — |
| Rust | ✅ | ✅ | ✅ | Memerlukan Rust |
| Security | ✅ | ✅ | ✅ | — |
| Subversion | ✅ | ✅ | ✅ | Memerlukan svn |
| sudo | ✅ | ✅ | ✅ | — |
| Terraform | ✅ | ✅ | ✅ | Memerlukan Terraform |
| tmux | ✅ | ✅ | ✅ | — |
| Update | ✅ | ✅ | ✅ | — |
| UUID | ✅ | ✅ | ✅ | — |
| wget | ✅ | ✅ | ✅ | — |
| Yarn | ✅ | ✅ | ✅ | Memerlukan Yarn |

## Terkait

- [Tentang](/id/about/)
- [Alias](/id/aliases/)
- [Praktik Terbaik Manajemen Rahasia](/id/guides/secret-management/)
