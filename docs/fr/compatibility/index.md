---
title: Matrice de compatibilité multiplateforme | Dotfiles
description: Support des plateformes testées pour les shells, outils, terminaux et catégories d'alias dans Dotfiles v0.2.495.
lang: fr-FR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Matrice de compatibilité multiplateforme preview
canonical: /fr/compatibility/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Compatibilité
pageType: docs
schemaType: TechArticle
permalink: /fr/compatibility/
---

# Matrice de compatibilité multiplateforme

Cette page documente le support des plateformes testées pour Dotfiles v0.2.495 sur macOS, Linux et WSL2.

## Légende des badges

| Badge | Signification |
|-------|---------|
| ✅ | Entièrement testé et supporté |
| ⚠️ | Support partiel — voir notes |
| ❌ | Non supporté |
| — | Non applicable |

## Environnement shell

| Composant | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Notes |
|-----------|:---:|:---:|:---:|-------|
| Bash 5.x | ✅ | ✅ | ✅ | macOS nécessite Bash via Homebrew |
| Zsh 5.9+ | ✅ | ✅ | ✅ | Par défaut sur macOS |
| Fish 3.7+ | ✅ | ✅ | ✅ | `apt` / `brew install fish` |
| POSIX sh | ⚠️ | ✅ | ✅ | Support limité des alias |
| PowerShell | — | — | ⚠️ | Interopérabilité WSL uniquement |

## Outils modernes principaux

| Outil | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Installation |
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

## Émulateurs de terminal

| Terminal | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Notes |
|----------|:---:|:---:|:---:|-------|
| Ghostty | ✅ | ✅ | ⚠️ | Wayland natif sur Linux |
| Alacritty | ✅ | ✅ | ⚠️ | Accéléré par GPU |
| WezTerm | ✅ | ✅ | ✅ | Configuration Lua |
| iTerm2 | ✅ | — | — | macOS uniquement |
| Windows Terminal | — | — | ✅ | Hôte WSL |

## Gestionnaires de paquets

| Gestionnaire | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Notes |
|---------|:---:|:---:|:---:|-------|
| Homebrew | ✅ | ✅ | ✅ | Principal pour macOS |
| apt | — | ✅ | ✅ | Paquets système |
| Cargo | ✅ | ✅ | ✅ | Outils Rust |
| npm / pnpm | ✅ | ✅ | ✅ | Outils Node |
| pip / pipx | ✅ | ✅ | ✅ | Outils Python |

## Sécurité et signature

| Fonctionnalité | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Notes |
|---------|:---:|:---:|:---:|-------|
| SSH commit signing | ✅ | ✅ | ✅ | Natif, sans GPG |
| age encryption | ✅ | ✅ | ✅ | Intégration Chezmoi |
| SOPS | ✅ | ✅ | ✅ | Backend age ou GPG |
| 1Password CLI | ✅ | ✅ | ⚠️ | WSL nécessite un bridge |
| git-secrets | ✅ | ✅ | ✅ | Hook pre-commit |

## Catégories d'alias

| Catégorie | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Notes |
|----------|:---:|:---:|:---:|-------|
| AI | ✅ | ✅ | ✅ | Nécessite des clés API |
| Archives | ✅ | ✅ | ✅ | — |
| cd (zoxide) | ✅ | ✅ | ✅ | — |
| chmod | ✅ | ✅ | ✅ | — |
| Clear | ✅ | ✅ | ✅ | — |
| Configuration | ✅ | ✅ | ✅ | — |
| Default | ✅ | ✅ | ✅ | — |
| Diagnostics | ✅ | ✅ | ✅ | — |
| dig | ✅ | ✅ | ✅ | — |
| Disk Usage | ✅ | ✅ | ✅ | — |
| Docker | ✅ | ✅ | ✅ | Nécessite Docker |
| Editor | ✅ | ✅ | ✅ | — |
| Find (fd) | ✅ | ✅ | ✅ | — |
| Fonts | ✅ | ⚠️ | ⚠️ | Limité en headless |
| gcloud | ✅ | ✅ | ✅ | Nécessite SDK |
| Git | ✅ | ✅ | ✅ | — |
| GNU | ⚠️ | ✅ | ✅ | macOS nécessite coreutils |
| Go | ✅ | ✅ | ✅ | Nécessite Go |
| Heroku | ✅ | ✅ | ✅ | Nécessite CLI |
| Interactive | ✅ | ✅ | ✅ | — |
| Kubernetes | ✅ | ✅ | ✅ | Nécessite kubectl |
| Lua | ✅ | ✅ | ✅ | Nécessite Lua |
| macOS | ✅ | — | — | macOS uniquement |
| Make | ✅ | ✅ | ✅ | — |
| mkdir | ✅ | ✅ | ✅ | — |
| Modern | ✅ | ✅ | ✅ | Remplacements Rust |
| npm | ✅ | ✅ | ✅ | Nécessite Node |
| Permission | ✅ | ✅ | ✅ | — |
| pnpm | ✅ | ✅ | ✅ | Nécessite pnpm |
| ps | ✅ | ✅ | ✅ | — |
| Python | ✅ | ✅ | ✅ | Nécessite Python |
| rsync | ✅ | ✅ | ✅ | — |
| Rust | ✅ | ✅ | ✅ | Nécessite Rust |
| Security | ✅ | ✅ | ✅ | — |
| Subversion | ✅ | ✅ | ✅ | Nécessite svn |
| sudo | ✅ | ✅ | ✅ | — |
| Terraform | ✅ | ✅ | ✅ | Nécessite Terraform |
| tmux | ✅ | ✅ | ✅ | — |
| Update | ✅ | ✅ | ✅ | — |
| UUID | ✅ | ✅ | ✅ | — |
| wget | ✅ | ✅ | ✅ | — |
| Yarn | ✅ | ✅ | ✅ | Nécessite Yarn |

## Pages connexes

- [À propos](/fr/about/)
- [Alias](/fr/aliases/)
- [Meilleures pratiques de gestion des secrets](/fr/guides/secret-management/)
