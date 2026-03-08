---
title: Cross-platform compatibiliteitsmatrix | Dotfiles
description: Geteste platformondersteuning voor shells, tools, terminals en aliascategorieën in Dotfiles v0.2.495.
lang: nl-NL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Cross-platform compatibiliteitsmatrix preview
canonical: /nl/compatibility/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Compatibiliteit
pageType: docs
schemaType: TechArticle
permalink: /nl/compatibility/
---

# Cross-platform compatibiliteitsmatrix

Deze pagina documenteert de geteste platformondersteuning voor Dotfiles v0.2.495 op macOS, Linux en WSL2.

## Badge-legenda

| Badge | Betekenis |
|-------|---------|
| ✅ | Volledig getest en ondersteund |
| ⚠️ | Gedeeltelijke ondersteuning — zie opmerkingen |
| ❌ | Niet ondersteund |
| — | Niet van toepassing |

## Shell-omgeving

| Component | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Opmerkingen |
|-----------|:---:|:---:|:---:|-------|
| Bash 5.x | ✅ | ✅ | ✅ | macOS vereist Homebrew Bash |
| Zsh 5.9+ | ✅ | ✅ | ✅ | Standaard op macOS |
| Fish 3.7+ | ✅ | ✅ | ✅ | `apt` / `brew install fish` |
| POSIX sh | ⚠️ | ✅ | ✅ | Beperkte alias-ondersteuning |
| PowerShell | — | — | ⚠️ | Alleen WSL-interop |

## Moderne kerntools

| Tool | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Installatie |
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

## Terminalemulators

| Terminal | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Opmerkingen |
|----------|:---:|:---:|:---:|-------|
| Ghostty | ✅ | ✅ | ⚠️ | Native Wayland op Linux |
| Alacritty | ✅ | ✅ | ⚠️ | GPU-versneld |
| WezTerm | ✅ | ✅ | ✅ | Lua-configuratie |
| iTerm2 | ✅ | — | — | Alleen macOS |
| Windows Terminal | — | — | ✅ | WSL-host |

## Pakketbeheerders

| Beheerder | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Opmerkingen |
|---------|:---:|:---:|:---:|-------|
| Homebrew | ✅ | ✅ | ✅ | Primair voor macOS |
| apt | — | ✅ | ✅ | Systeempakketten |
| Cargo | ✅ | ✅ | ✅ | Rust-tools |
| npm / pnpm | ✅ | ✅ | ✅ | Node-tools |
| pip / pipx | ✅ | ✅ | ✅ | Python-tools |

## Beveiliging & ondertekening

| Functie | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Opmerkingen |
|---------|:---:|:---:|:---:|-------|
| SSH commit signing | ✅ | ✅ | ✅ | Native, geen GPG |
| age encryption | ✅ | ✅ | ✅ | Chezmoi-integratie |
| SOPS | ✅ | ✅ | ✅ | age- of GPG-backend |
| 1Password CLI | ✅ | ✅ | ⚠️ | WSL vereist bridge |
| git-secrets | ✅ | ✅ | ✅ | Pre-commit hook |

## Aliascategorieën

| Categorie | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Opmerkingen |
|----------|:---:|:---:|:---:|-------|
| AI | ✅ | ✅ | ✅ | Vereist API-sleutels |
| Archives | ✅ | ✅ | ✅ | — |
| cd (zoxide) | ✅ | ✅ | ✅ | — |
| chmod | ✅ | ✅ | ✅ | — |
| Clear | ✅ | ✅ | ✅ | — |
| Configuration | ✅ | ✅ | ✅ | — |
| Default | ✅ | ✅ | ✅ | — |
| Diagnostics | ✅ | ✅ | ✅ | — |
| dig | ✅ | ✅ | ✅ | — |
| Disk Usage | ✅ | ✅ | ✅ | — |
| Docker | ✅ | ✅ | ✅ | Vereist Docker |
| Editor | ✅ | ✅ | ✅ | — |
| Find (fd) | ✅ | ✅ | ✅ | — |
| Fonts | ✅ | ⚠️ | ⚠️ | Beperkt op headless |
| gcloud | ✅ | ✅ | ✅ | Vereist SDK |
| Git | ✅ | ✅ | ✅ | — |
| GNU | ⚠️ | ✅ | ✅ | macOS heeft coreutils nodig |
| Go | ✅ | ✅ | ✅ | Vereist Go |
| Heroku | ✅ | ✅ | ✅ | Vereist CLI |
| Interactive | ✅ | ✅ | ✅ | — |
| Kubernetes | ✅ | ✅ | ✅ | Vereist kubectl |
| Lua | ✅ | ✅ | ✅ | Vereist Lua |
| macOS | ✅ | — | — | Alleen macOS |
| Make | ✅ | ✅ | ✅ | — |
| mkdir | ✅ | ✅ | ✅ | — |
| Modern | ✅ | ✅ | ✅ | Rust-vervangers |
| npm | ✅ | ✅ | ✅ | Vereist Node |
| Permission | ✅ | ✅ | ✅ | — |
| pnpm | ✅ | ✅ | ✅ | Vereist pnpm |
| ps | ✅ | ✅ | ✅ | — |
| Python | ✅ | ✅ | ✅ | Vereist Python |
| rsync | ✅ | ✅ | ✅ | — |
| Rust | ✅ | ✅ | ✅ | Vereist Rust |
| Security | ✅ | ✅ | ✅ | — |
| Subversion | ✅ | ✅ | ✅ | Vereist svn |
| sudo | ✅ | ✅ | ✅ | — |
| Terraform | ✅ | ✅ | ✅ | Vereist Terraform |
| tmux | ✅ | ✅ | ✅ | — |
| Update | ✅ | ✅ | ✅ | — |
| UUID | ✅ | ✅ | ✅ | — |
| wget | ✅ | ✅ | ✅ | — |
| Yarn | ✅ | ✅ | ✅ | Vereist Yarn |

## Gerelateerd

- [Over](/nl/about/)
- [Aliassen](/nl/aliases/)
- [Best practices voor geheimenbeheer](/nl/guides/secret-management/)
