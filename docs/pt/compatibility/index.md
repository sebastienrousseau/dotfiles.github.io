---
title: Matriz de compatibilidade multiplataforma | Dotfiles
description: Suporte de plataformas testado para shells, ferramentas, terminais e categorias de alias no Dotfiles v0.2.495.
lang: pt-BR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Matriz de compatibilidade multiplataforma preview
canonical: /pt/compatibility/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Compatibilidade
pageType: docs
schemaType: TechArticle
permalink: /pt/compatibility/
---

# Matriz de compatibilidade multiplataforma

Esta página documenta o suporte de plataformas testado para o Dotfiles v0.2.495 no macOS, Linux e WSL2.

## Legenda dos badges

| Badge | Significado |
|-------|---------|
| ✅ | Totalmente testado e suportado |
| ⚠️ | Suporte parcial — veja notas |
| ❌ | Não suportado |
| — | Não aplicável |

## Ambiente de shell

| Componente | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Notas |
|-----------|:---:|:---:|:---:|-------|
| Bash 5.x | ✅ | ✅ | ✅ | macOS requer Bash do Homebrew |
| Zsh 5.9+ | ✅ | ✅ | ✅ | Padrão no macOS |
| Fish 3.7+ | ✅ | ✅ | ✅ | `apt` / `brew install fish` |
| POSIX sh | ⚠️ | ✅ | ✅ | Suporte limitado a alias |
| PowerShell | — | — | ⚠️ | Apenas interoperabilidade WSL |

## Ferramentas principais modernas

| Ferramenta | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Instalação |
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
| Ghostty | ✅ | ✅ | ⚠️ | Wayland nativo no Linux |
| Alacritty | ✅ | ✅ | ⚠️ | Acelerado por GPU |
| WezTerm | ✅ | ✅ | ✅ | Configuração Lua |
| iTerm2 | ✅ | — | — | Apenas macOS |
| Windows Terminal | — | — | ✅ | Host WSL |

## Gerenciadores de pacotes

| Gerenciador | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Notas |
|---------|:---:|:---:|:---:|-------|
| Homebrew | ✅ | ✅ | ✅ | Principal para macOS |
| apt | — | ✅ | ✅ | Pacotes do sistema |
| Cargo | ✅ | ✅ | ✅ | Ferramentas Rust |
| npm / pnpm | ✅ | ✅ | ✅ | Ferramentas Node |
| pip / pipx | ✅ | ✅ | ✅ | Ferramentas Python |

## Segurança e assinatura

| Recurso | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Notas |
|---------|:---:|:---:|:---:|-------|
| SSH commit signing | ✅ | ✅ | ✅ | Nativo, sem GPG |
| age encryption | ✅ | ✅ | ✅ | Integração Chezmoi |
| SOPS | ✅ | ✅ | ✅ | Backend age ou GPG |
| 1Password CLI | ✅ | ✅ | ⚠️ | WSL requer bridge |
| git-secrets | ✅ | ✅ | ✅ | Hook pre-commit |

## Categorias de alias

| Categoria | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Notas |
|----------|:---:|:---:|:---:|-------|
| AI | ✅ | ✅ | ✅ | Requer chaves API |
| Archives | ✅ | ✅ | ✅ | — |
| cd (zoxide) | ✅ | ✅ | ✅ | — |
| chmod | ✅ | ✅ | ✅ | — |
| Clear | ✅ | ✅ | ✅ | — |
| Configuration | ✅ | ✅ | ✅ | — |
| Default | ✅ | ✅ | ✅ | — |
| Diagnostics | ✅ | ✅ | ✅ | — |
| dig | ✅ | ✅ | ✅ | — |
| Disk Usage | ✅ | ✅ | ✅ | — |
| Docker | ✅ | ✅ | ✅ | Requer Docker |
| Editor | ✅ | ✅ | ✅ | — |
| Find (fd) | ✅ | ✅ | ✅ | — |
| Fonts | ✅ | ⚠️ | ⚠️ | Limitado em headless |
| gcloud | ✅ | ✅ | ✅ | Requer SDK |
| Git | ✅ | ✅ | ✅ | — |
| GNU | ⚠️ | ✅ | ✅ | macOS precisa de coreutils |
| Go | ✅ | ✅ | ✅ | Requer Go |
| Heroku | ✅ | ✅ | ✅ | Requer CLI |
| Interactive | ✅ | ✅ | ✅ | — |
| Kubernetes | ✅ | ✅ | ✅ | Requer kubectl |
| Lua | ✅ | ✅ | ✅ | Requer Lua |
| macOS | ✅ | — | — | Apenas macOS |
| Make | ✅ | ✅ | ✅ | — |
| mkdir | ✅ | ✅ | ✅ | — |
| Modern | ✅ | ✅ | ✅ | Substituições Rust |
| npm | ✅ | ✅ | ✅ | Requer Node |
| Permission | ✅ | ✅ | ✅ | — |
| pnpm | ✅ | ✅ | ✅ | Requer pnpm |
| ps | ✅ | ✅ | ✅ | — |
| Python | ✅ | ✅ | ✅ | Requer Python |
| rsync | ✅ | ✅ | ✅ | — |
| Rust | ✅ | ✅ | ✅ | Requer Rust |
| Security | ✅ | ✅ | ✅ | — |
| Subversion | ✅ | ✅ | ✅ | Requer svn |
| sudo | ✅ | ✅ | ✅ | — |
| Terraform | ✅ | ✅ | ✅ | Requer Terraform |
| tmux | ✅ | ✅ | ✅ | — |
| Update | ✅ | ✅ | ✅ | — |
| UUID | ✅ | ✅ | ✅ | — |
| wget | ✅ | ✅ | ✅ | — |
| Yarn | ✅ | ✅ | ✅ | Requer Yarn |

## Relacionado

- [Sobre](/pt/about/)
- [Aliases](/pt/aliases/)
- [Melhores práticas de gerenciamento de segredos](/pt/guides/secret-management/)
