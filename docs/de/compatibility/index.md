---
title: Plattformübergreifende Kompatibilitätsmatrix | Dotfiles
description: Getestete Plattformunterstützung für Shells, Tools, Terminals und Alias-Kategorien in Dotfiles v0.2.495.
lang: de-DE
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Plattformübergreifende Kompatibilitätsmatrix preview
canonical: /de/compatibility/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Kompatibilität
pageType: docs
schemaType: TechArticle
permalink: /de/compatibility/
---

# Plattformübergreifende Kompatibilitätsmatrix

Diese Seite dokumentiert die getestete Plattformunterstützung für Dotfiles v0.2.495 auf macOS, Linux und WSL2.

## Badge-Legende

| Badge | Bedeutung |
|-------|---------|
| ✅ | Vollständig getestet und unterstützt |
| ⚠️ | Teilweise Unterstützung — siehe Hinweise |
| ❌ | Nicht unterstützt |
| — | Nicht zutreffend |

## Shell-Umgebung

| Komponente | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Hinweise |
|-----------|:---:|:---:|:---:|-------|
| Bash 5.x | ✅ | ✅ | ✅ | macOS erfordert Homebrew Bash |
| Zsh 5.9+ | ✅ | ✅ | ✅ | Standard auf macOS |
| Fish 3.7+ | ✅ | ✅ | ✅ | `apt` / `brew install fish` |
| POSIX sh | ⚠️ | ✅ | ✅ | Eingeschränkte Alias-Unterstützung |
| PowerShell | — | — | ⚠️ | Nur WSL-Interop |

## Moderne Kernwerkzeuge

| Werkzeug | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Installation |
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

## Terminal-Emulatoren

| Terminal | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Hinweise |
|----------|:---:|:---:|:---:|-------|
| Ghostty | ✅ | ✅ | ⚠️ | Natives Wayland auf Linux |
| Alacritty | ✅ | ✅ | ⚠️ | GPU-beschleunigt |
| WezTerm | ✅ | ✅ | ✅ | Lua-Konfiguration |
| iTerm2 | ✅ | — | — | Nur macOS |
| Windows Terminal | — | — | ✅ | WSL-Host |

## Paketmanager

| Manager | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Hinweise |
|---------|:---:|:---:|:---:|-------|
| Homebrew | ✅ | ✅ | ✅ | Primär für macOS |
| apt | — | ✅ | ✅ | Systempakete |
| Cargo | ✅ | ✅ | ✅ | Rust-Werkzeuge |
| npm / pnpm | ✅ | ✅ | ✅ | Node-Werkzeuge |
| pip / pipx | ✅ | ✅ | ✅ | Python-Werkzeuge |

## Sicherheit & Signierung

| Funktion | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Hinweise |
|---------|:---:|:---:|:---:|-------|
| SSH commit signing | ✅ | ✅ | ✅ | Nativ, kein GPG |
| age encryption | ✅ | ✅ | ✅ | Chezmoi-Integration |
| SOPS | ✅ | ✅ | ✅ | age- oder GPG-Backend |
| 1Password CLI | ✅ | ✅ | ⚠️ | WSL erfordert Bridge |
| git-secrets | ✅ | ✅ | ✅ | Pre-Commit-Hook |

## Alias-Kategorien

| Kategorie | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Hinweise |
|----------|:---:|:---:|:---:|-------|
| AI | ✅ | ✅ | ✅ | Erfordert API-Schlüssel |
| Archives | ✅ | ✅ | ✅ | — |
| cd (zoxide) | ✅ | ✅ | ✅ | — |
| chmod | ✅ | ✅ | ✅ | — |
| Clear | ✅ | ✅ | ✅ | — |
| Configuration | ✅ | ✅ | ✅ | — |
| Default | ✅ | ✅ | ✅ | — |
| Diagnostics | ✅ | ✅ | ✅ | — |
| dig | ✅ | ✅ | ✅ | — |
| Disk Usage | ✅ | ✅ | ✅ | — |
| Docker | ✅ | ✅ | ✅ | Erfordert Docker |
| Editor | ✅ | ✅ | ✅ | — |
| Find (fd) | ✅ | ✅ | ✅ | — |
| Fonts | ✅ | ⚠️ | ⚠️ | Eingeschränkt auf Headless |
| gcloud | ✅ | ✅ | ✅ | Erfordert SDK |
| Git | ✅ | ✅ | ✅ | — |
| GNU | ⚠️ | ✅ | ✅ | macOS benötigt coreutils |
| Go | ✅ | ✅ | ✅ | Erfordert Go |
| Heroku | ✅ | ✅ | ✅ | Erfordert CLI |
| Interactive | ✅ | ✅ | ✅ | — |
| Kubernetes | ✅ | ✅ | ✅ | Erfordert kubectl |
| Lua | ✅ | ✅ | ✅ | Erfordert Lua |
| macOS | ✅ | — | — | Nur macOS |
| Make | ✅ | ✅ | ✅ | — |
| mkdir | ✅ | ✅ | ✅ | — |
| Modern | ✅ | ✅ | ✅ | Rust-Ersetzungen |
| npm | ✅ | ✅ | ✅ | Erfordert Node |
| Permission | ✅ | ✅ | ✅ | — |
| pnpm | ✅ | ✅ | ✅ | Erfordert pnpm |
| ps | ✅ | ✅ | ✅ | — |
| Python | ✅ | ✅ | ✅ | Erfordert Python |
| rsync | ✅ | ✅ | ✅ | — |
| Rust | ✅ | ✅ | ✅ | Erfordert Rust |
| Security | ✅ | ✅ | ✅ | — |
| Subversion | ✅ | ✅ | ✅ | Erfordert svn |
| sudo | ✅ | ✅ | ✅ | — |
| Terraform | ✅ | ✅ | ✅ | Erfordert Terraform |
| tmux | ✅ | ✅ | ✅ | — |
| Update | ✅ | ✅ | ✅ | — |
| UUID | ✅ | ✅ | ✅ | — |
| wget | ✅ | ✅ | ✅ | — |
| Yarn | ✅ | ✅ | ✅ | Erfordert Yarn |

## Verwandte Seiten

- [Über Dotfiles](/de/about/)
- [Aliase](/de/aliases/)
- [Best Practices für die Geheimnisverwaltung](/de/guides/secret-management/)
