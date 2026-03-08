---
title: Matriz de compatibilidad multiplataforma | Dotfiles
description: Soporte de plataformas probado para shells, herramientas, terminales y categorías de alias en Dotfiles v0.2.495.
lang: es-ES
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Matriz de compatibilidad multiplataforma preview
canonical: /es/compatibility/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Compatibilidad
pageType: docs
schemaType: TechArticle
permalink: /es/compatibility/
---

# Matriz de compatibilidad multiplataforma

Esta página documenta el soporte de plataformas probado para Dotfiles v0.2.495 en macOS, Linux y WSL2.

## Leyenda de insignias

| Insignia | Significado |
|-------|---------|
| ✅ | Totalmente probado y soportado |
| ⚠️ | Soporte parcial — ver notas |
| ❌ | No soportado |
| — | No aplica |

## Entorno de shell

| Componente | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Notas |
|-----------|:---:|:---:|:---:|-------|
| Bash 5.x | ✅ | ✅ | ✅ | macOS requiere Bash de Homebrew |
| Zsh 5.9+ | ✅ | ✅ | ✅ | Predeterminado en macOS |
| Fish 3.7+ | ✅ | ✅ | ✅ | `apt` / `brew install fish` |
| POSIX sh | ⚠️ | ✅ | ✅ | Soporte limitado de alias |
| PowerShell | — | — | ⚠️ | Solo interoperabilidad WSL |

## Herramientas principales modernas

| Herramienta | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Instalación |
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

## Emuladores de terminal

| Terminal | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Notas |
|----------|:---:|:---:|:---:|-------|
| Ghostty | ✅ | ✅ | ⚠️ | Wayland nativo en Linux |
| Alacritty | ✅ | ✅ | ⚠️ | Acelerado por GPU |
| WezTerm | ✅ | ✅ | ✅ | Configuración Lua |
| iTerm2 | ✅ | — | — | Solo macOS |
| Windows Terminal | — | — | ✅ | Host WSL |

## Gestores de paquetes

| Gestor | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Notas |
|---------|:---:|:---:|:---:|-------|
| Homebrew | ✅ | ✅ | ✅ | Principal para macOS |
| apt | — | ✅ | ✅ | Paquetes del sistema |
| Cargo | ✅ | ✅ | ✅ | Herramientas Rust |
| npm / pnpm | ✅ | ✅ | ✅ | Herramientas Node |
| pip / pipx | ✅ | ✅ | ✅ | Herramientas Python |

## Seguridad y firma

| Característica | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Notas |
|---------|:---:|:---:|:---:|-------|
| SSH commit signing | ✅ | ✅ | ✅ | Nativo, sin GPG |
| age encryption | ✅ | ✅ | ✅ | Integración Chezmoi |
| SOPS | ✅ | ✅ | ✅ | Backend age o GPG |
| 1Password CLI | ✅ | ✅ | ⚠️ | WSL requiere bridge |
| git-secrets | ✅ | ✅ | ✅ | Hook pre-commit |

## Categorías de alias

| Categoría | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Notas |
|----------|:---:|:---:|:---:|-------|
| AI | ✅ | ✅ | ✅ | Requiere claves API |
| Archives | ✅ | ✅ | ✅ | — |
| cd (zoxide) | ✅ | ✅ | ✅ | — |
| chmod | ✅ | ✅ | ✅ | — |
| Clear | ✅ | ✅ | ✅ | — |
| Configuration | ✅ | ✅ | ✅ | — |
| Default | ✅ | ✅ | ✅ | — |
| Diagnostics | ✅ | ✅ | ✅ | — |
| dig | ✅ | ✅ | ✅ | — |
| Disk Usage | ✅ | ✅ | ✅ | — |
| Docker | ✅ | ✅ | ✅ | Requiere Docker |
| Editor | ✅ | ✅ | ✅ | — |
| Find (fd) | ✅ | ✅ | ✅ | — |
| Fonts | ✅ | ⚠️ | ⚠️ | Limitado en headless |
| gcloud | ✅ | ✅ | ✅ | Requiere SDK |
| Git | ✅ | ✅ | ✅ | — |
| GNU | ⚠️ | ✅ | ✅ | macOS necesita coreutils |
| Go | ✅ | ✅ | ✅ | Requiere Go |
| Heroku | ✅ | ✅ | ✅ | Requiere CLI |
| Interactive | ✅ | ✅ | ✅ | — |
| Kubernetes | ✅ | ✅ | ✅ | Requiere kubectl |
| Lua | ✅ | ✅ | ✅ | Requiere Lua |
| macOS | ✅ | — | — | Solo macOS |
| Make | ✅ | ✅ | ✅ | — |
| mkdir | ✅ | ✅ | ✅ | — |
| Modern | ✅ | ✅ | ✅ | Reemplazos Rust |
| npm | ✅ | ✅ | ✅ | Requiere Node |
| Permission | ✅ | ✅ | ✅ | — |
| pnpm | ✅ | ✅ | ✅ | Requiere pnpm |
| ps | ✅ | ✅ | ✅ | — |
| Python | ✅ | ✅ | ✅ | Requiere Python |
| rsync | ✅ | ✅ | ✅ | — |
| Rust | ✅ | ✅ | ✅ | Requiere Rust |
| Security | ✅ | ✅ | ✅ | — |
| Subversion | ✅ | ✅ | ✅ | Requiere svn |
| sudo | ✅ | ✅ | ✅ | — |
| Terraform | ✅ | ✅ | ✅ | Requiere Terraform |
| tmux | ✅ | ✅ | ✅ | — |
| Update | ✅ | ✅ | ✅ | — |
| UUID | ✅ | ✅ | ✅ | — |
| wget | ✅ | ✅ | ✅ | — |
| Yarn | ✅ | ✅ | ✅ | Requiere Yarn |

## Relacionado

- [Acerca de](/es/about/)
- [Alias](/es/aliases/)
- [Mejores prácticas de gestión de secretos](/es/guides/secret-management/)
