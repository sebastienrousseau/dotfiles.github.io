---
title: Matrice di compatibilità multipiattaforma | Dotfiles
description: Supporto piattaforme testato per shell, strumenti, terminali e categorie di alias in Dotfiles v0.2.495.
lang: it-IT
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Matrice di compatibilità multipiattaforma preview
canonical: /it/compatibility/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Compatibilità
pageType: docs
schemaType: TechArticle
permalink: /it/compatibility/
---

# Matrice di compatibilità multipiattaforma

Questa pagina documenta il supporto piattaforme testato per Dotfiles v0.2.495 su macOS, Linux e WSL2.

## Legenda badge

| Badge | Significato |
|-------|---------|
| ✅ | Completamente testato e supportato |
| ⚠️ | Supporto parziale — vedi note |
| ❌ | Non supportato |
| — | Non applicabile |

## Ambiente shell

| Componente | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Note |
|-----------|:---:|:---:|:---:|-------|
| Bash 5.x | ✅ | ✅ | ✅ | macOS richiede Bash di Homebrew |
| Zsh 5.9+ | ✅ | ✅ | ✅ | Predefinito su macOS |
| Fish 3.7+ | ✅ | ✅ | ✅ | `apt` / `brew install fish` |
| POSIX sh | ⚠️ | ✅ | ✅ | Supporto alias limitato |
| PowerShell | — | — | ⚠️ | Solo interoperabilità WSL |

## Strumenti principali moderni

| Strumento | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Installazione |
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

## Emulatori di terminale

| Terminale | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Note |
|----------|:---:|:---:|:---:|-------|
| Ghostty | ✅ | ✅ | ⚠️ | Wayland nativo su Linux |
| Alacritty | ✅ | ✅ | ⚠️ | Accelerato GPU |
| WezTerm | ✅ | ✅ | ✅ | Configurazione Lua |
| iTerm2 | ✅ | — | — | Solo macOS |
| Windows Terminal | — | — | ✅ | Host WSL |

## Gestori di pacchetti

| Gestore | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Note |
|---------|:---:|:---:|:---:|-------|
| Homebrew | ✅ | ✅ | ✅ | Principale per macOS |
| apt | — | ✅ | ✅ | Pacchetti di sistema |
| Cargo | ✅ | ✅ | ✅ | Strumenti Rust |
| npm / pnpm | ✅ | ✅ | ✅ | Strumenti Node |
| pip / pipx | ✅ | ✅ | ✅ | Strumenti Python |

## Sicurezza e firma

| Funzionalità | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Note |
|---------|:---:|:---:|:---:|-------|
| SSH commit signing | ✅ | ✅ | ✅ | Nativo, senza GPG |
| age encryption | ✅ | ✅ | ✅ | Integrazione Chezmoi |
| SOPS | ✅ | ✅ | ✅ | Backend age o GPG |
| 1Password CLI | ✅ | ✅ | ⚠️ | WSL richiede bridge |
| git-secrets | ✅ | ✅ | ✅ | Hook pre-commit |

## Categorie alias

| Categoria | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Note |
|----------|:---:|:---:|:---:|-------|
| AI | ✅ | ✅ | ✅ | Richiede chiavi API |
| Archives | ✅ | ✅ | ✅ | — |
| cd (zoxide) | ✅ | ✅ | ✅ | — |
| chmod | ✅ | ✅ | ✅ | — |
| Clear | ✅ | ✅ | ✅ | — |
| Configuration | ✅ | ✅ | ✅ | — |
| Default | ✅ | ✅ | ✅ | — |
| Diagnostics | ✅ | ✅ | ✅ | — |
| dig | ✅ | ✅ | ✅ | — |
| Disk Usage | ✅ | ✅ | ✅ | — |
| Docker | ✅ | ✅ | ✅ | Richiede Docker |
| Editor | ✅ | ✅ | ✅ | — |
| Find (fd) | ✅ | ✅ | ✅ | — |
| Fonts | ✅ | ⚠️ | ⚠️ | Limitato su headless |
| gcloud | ✅ | ✅ | ✅ | Richiede SDK |
| Git | ✅ | ✅ | ✅ | — |
| GNU | ⚠️ | ✅ | ✅ | macOS necessita coreutils |
| Go | ✅ | ✅ | ✅ | Richiede Go |
| Heroku | ✅ | ✅ | ✅ | Richiede CLI |
| Interactive | ✅ | ✅ | ✅ | — |
| Kubernetes | ✅ | ✅ | ✅ | Richiede kubectl |
| Lua | ✅ | ✅ | ✅ | Richiede Lua |
| macOS | ✅ | — | — | Solo macOS |
| Make | ✅ | ✅ | ✅ | — |
| mkdir | ✅ | ✅ | ✅ | — |
| Modern | ✅ | ✅ | ✅ | Sostituti Rust |
| npm | ✅ | ✅ | ✅ | Richiede Node |
| Permission | ✅ | ✅ | ✅ | — |
| pnpm | ✅ | ✅ | ✅ | Richiede pnpm |
| ps | ✅ | ✅ | ✅ | — |
| Python | ✅ | ✅ | ✅ | Richiede Python |
| rsync | ✅ | ✅ | ✅ | — |
| Rust | ✅ | ✅ | ✅ | Richiede Rust |
| Security | ✅ | ✅ | ✅ | — |
| Subversion | ✅ | ✅ | ✅ | Richiede svn |
| sudo | ✅ | ✅ | ✅ | — |
| Terraform | ✅ | ✅ | ✅ | Richiede Terraform |
| tmux | ✅ | ✅ | ✅ | — |
| Update | ✅ | ✅ | ✅ | — |
| UUID | ✅ | ✅ | ✅ | — |
| wget | ✅ | ✅ | ✅ | — |
| Yarn | ✅ | ✅ | ✅ | Richiede Yarn |

## Correlati

- [Informazioni](/it/about/)
- [Alias](/it/aliases/)
- [Best practice per la gestione dei segreti](/it/guides/secret-management/)
