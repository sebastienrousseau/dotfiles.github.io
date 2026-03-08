---
title: Matrice de Compatibilitate Cross-Platform | Dotfiles
description: Suportul testat pe platforme pentru shell-uri, instrumente, terminale și categorii de aliasuri în Dotfiles v0.2.495.
lang: ro-RO
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Previzualizare Matrice de Compatibilitate Cross-Platform
canonical: /ro/compatibility/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Compatibilitate
pageType: docs
schemaType: TechArticle
permalink: /ro/compatibility/
---

# Matrice de Compatibilitate Cross-Platform

Această pagină documentează suportul testat pe platforme pentru Dotfiles v0.2.495 pe macOS, Linux și WSL2.

## Legenda insignelor

| Insignă | Semnificație |
|---------|-------------|
| ✅ | Testat complet și suportat |
| ⚠️ | Suport parțial — vezi notele |
| ❌ | Nesuportat |
| — | Nu se aplică |

## Mediul Shell

| Componentă | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Note |
|-----------|:---:|:---:|:---:|-------|
| Bash 5.x | ✅ | ✅ | ✅ | macOS necesită Homebrew Bash |
| Zsh 5.9+ | ✅ | ✅ | ✅ | Implicit pe macOS |
| Fish 3.7+ | ✅ | ✅ | ✅ | `apt` / `brew install fish` |
| POSIX sh | ⚠️ | ✅ | ✅ | Suport limitat pentru aliasuri |
| PowerShell | — | — | ⚠️ | Doar interoperare WSL |

## Instrumente Moderne de Bază

| Instrument | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Instalare |
|------|:---:|:---:|:---:|---------|
| Atuin (istoric) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| bat (cat) | ✅ | ✅ | ✅ | `brew` / `apt` |
| eza (ls) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| fd (find) | ✅ | ✅ | ✅ | `brew` / `apt` |
| fzf (fuzzy) | ✅ | ✅ | ✅ | `brew` / `apt` |
| ripgrep (grep) | ✅ | ✅ | ✅ | `brew` / `apt` |
| starship (prompt) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| zoxide (cd) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| Yazi (manager fișiere) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| Zellij (mux) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| NeoVim | ✅ | ✅ | ✅ | `brew` / `apt` |

## Emulatoare de Terminal

| Terminal | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Note |
|----------|:---:|:---:|:---:|-------|
| Ghostty | ✅ | ✅ | ⚠️ | Wayland nativ pe Linux |
| Alacritty | ✅ | ✅ | ⚠️ | Accelerat GPU |
| WezTerm | ✅ | ✅ | ✅ | Configurare Lua |
| iTerm2 | ✅ | — | — | Doar macOS |
| Windows Terminal | — | — | ✅ | Gazdă WSL |

## Manageri de Pachete

| Manager | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Note |
|---------|:---:|:---:|:---:|-------|
| Homebrew | ✅ | ✅ | ✅ | Principal pentru macOS |
| apt | — | ✅ | ✅ | Pachete de sistem |
| Cargo | ✅ | ✅ | ✅ | Instrumente Rust |
| npm / pnpm | ✅ | ✅ | ✅ | Instrumente Node |
| pip / pipx | ✅ | ✅ | ✅ | Instrumente Python |

## Securitate și Semnare

| Funcționalitate | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Note |
|---------|:---:|:---:|:---:|-------|
| Semnare commit SSH | ✅ | ✅ | ✅ | Nativ, fără GPG |
| Criptare age | ✅ | ✅ | ✅ | Integrare Chezmoi |
| SOPS | ✅ | ✅ | ✅ | Backend age sau GPG |
| 1Password CLI | ✅ | ✅ | ⚠️ | WSL necesită bridge |
| git-secrets | ✅ | ✅ | ✅ | Hook pre-commit |

## Categorii de Aliasuri

| Categorie | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Note |
|----------|:---:|:---:|:---:|-------|
| AI | ✅ | ✅ | ✅ | Necesită chei API |
| Arhive | ✅ | ✅ | ✅ | — |
| cd (zoxide) | ✅ | ✅ | ✅ | — |
| chmod | ✅ | ✅ | ✅ | — |
| Clear | ✅ | ✅ | ✅ | — |
| Configurare | ✅ | ✅ | ✅ | — |
| Implicit | ✅ | ✅ | ✅ | — |
| Diagnosticare | ✅ | ✅ | ✅ | — |
| dig | ✅ | ✅ | ✅ | — |
| Utilizare disc | ✅ | ✅ | ✅ | — |
| Docker | ✅ | ✅ | ✅ | Necesită Docker |
| Editor | ✅ | ✅ | ✅ | — |
| Find (fd) | ✅ | ✅ | ✅ | — |
| Fonturi | ✅ | ⚠️ | ⚠️ | Limitat pe headless |
| gcloud | ✅ | ✅ | ✅ | Necesită SDK |
| Git | ✅ | ✅ | ✅ | — |
| GNU | ⚠️ | ✅ | ✅ | macOS necesită coreutils |
| Go | ✅ | ✅ | ✅ | Necesită Go |
| Heroku | ✅ | ✅ | ✅ | Necesită CLI |
| Interactiv | ✅ | ✅ | ✅ | — |
| Kubernetes | ✅ | ✅ | ✅ | Necesită kubectl |
| Lua | ✅ | ✅ | ✅ | Necesită Lua |
| macOS | ✅ | — | — | Doar macOS |
| Make | ✅ | ✅ | ✅ | — |
| mkdir | ✅ | ✅ | ✅ | — |
| Modern | ✅ | ✅ | ✅ | Înlocuiri Rust |
| npm | ✅ | ✅ | ✅ | Necesită Node |
| Permisiuni | ✅ | ✅ | ✅ | — |
| pnpm | ✅ | ✅ | ✅ | Necesită pnpm |
| ps | ✅ | ✅ | ✅ | — |
| Python | ✅ | ✅ | ✅ | Necesită Python |
| rsync | ✅ | ✅ | ✅ | — |
| Rust | ✅ | ✅ | ✅ | Necesită Rust |
| Securitate | ✅ | ✅ | ✅ | — |
| Subversion | ✅ | ✅ | ✅ | Necesită svn |
| sudo | ✅ | ✅ | ✅ | — |
| Terraform | ✅ | ✅ | ✅ | Necesită Terraform |
| tmux | ✅ | ✅ | ✅ | — |
| Actualizare | ✅ | ✅ | ✅ | — |
| UUID | ✅ | ✅ | ✅ | — |
| wget | ✅ | ✅ | ✅ | — |
| Yarn | ✅ | ✅ | ✅ | Necesită Yarn |

## Legături conexe

- [Despre](/ro/about/)
- [Aliasuri](/ro/aliases/)
- [Cele mai bune practici pentru gestionarea secretelor](/ro/guides/secret-management/)
