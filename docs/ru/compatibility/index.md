---
title: Матрица кроссплатформенной совместимости | Dotfiles
description: Протестированная поддержка платформ для оболочек, инструментов, терминалов и категорий алиасов в Dotfiles v0.2.495.
lang: ru-RU
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Матрица кроссплатформенной совместимости preview
canonical: /ru/compatibility/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Совместимость
pageType: docs
schemaType: TechArticle
permalink: /ru/compatibility/
---

# Матрица кроссплатформенной совместимости

Эта страница документирует протестированную поддержку платформ для Dotfiles v0.2.495 на macOS, Linux и WSL2.

## Легенда значков

| Значок | Значение |
|-------|---------|
| ✅ | Полностью протестировано и поддерживается |
| ⚠️ | Частичная поддержка — см. примечания |
| ❌ | Не поддерживается |
| — | Не применимо |

## Среда оболочки

| Компонент | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Примечания |
|-----------|:---:|:---:|:---:|-------|
| Bash 5.x | ✅ | ✅ | ✅ | macOS требует Bash из Homebrew |
| Zsh 5.9+ | ✅ | ✅ | ✅ | По умолчанию на macOS |
| Fish 3.7+ | ✅ | ✅ | ✅ | `apt` / `brew install fish` |
| POSIX sh | ⚠️ | ✅ | ✅ | Ограниченная поддержка алиасов |
| PowerShell | — | — | ⚠️ | Только взаимодействие с WSL |

## Современные основные инструменты

| Инструмент | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Установка |
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

## Эмуляторы терминала

| Терминал | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Примечания |
|----------|:---:|:---:|:---:|-------|
| Ghostty | ✅ | ✅ | ⚠️ | Нативный Wayland на Linux |
| Alacritty | ✅ | ✅ | ⚠️ | Ускорение GPU |
| WezTerm | ✅ | ✅ | ✅ | Конфигурация Lua |
| iTerm2 | ✅ | — | — | Только macOS |
| Windows Terminal | — | — | ✅ | Хост WSL |

## Менеджеры пакетов

| Менеджер | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Примечания |
|---------|:---:|:---:|:---:|-------|
| Homebrew | ✅ | ✅ | ✅ | Основной для macOS |
| apt | — | ✅ | ✅ | Системные пакеты |
| Cargo | ✅ | ✅ | ✅ | Инструменты Rust |
| npm / pnpm | ✅ | ✅ | ✅ | Инструменты Node |
| pip / pipx | ✅ | ✅ | ✅ | Инструменты Python |

## Безопасность и подпись

| Функция | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Примечания |
|---------|:---:|:---:|:---:|-------|
| SSH commit signing | ✅ | ✅ | ✅ | Нативный, без GPG |
| age encryption | ✅ | ✅ | ✅ | Интеграция Chezmoi |
| SOPS | ✅ | ✅ | ✅ | Бэкенд age или GPG |
| 1Password CLI | ✅ | ✅ | ⚠️ | WSL требует мост |
| git-secrets | ✅ | ✅ | ✅ | Хук pre-commit |

## Категории алиасов

| Категория | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Примечания |
|----------|:---:|:---:|:---:|-------|
| AI | ✅ | ✅ | ✅ | Требуются ключи API |
| Archives | ✅ | ✅ | ✅ | — |
| cd (zoxide) | ✅ | ✅ | ✅ | — |
| chmod | ✅ | ✅ | ✅ | — |
| Clear | ✅ | ✅ | ✅ | — |
| Configuration | ✅ | ✅ | ✅ | — |
| Default | ✅ | ✅ | ✅ | — |
| Diagnostics | ✅ | ✅ | ✅ | — |
| dig | ✅ | ✅ | ✅ | — |
| Disk Usage | ✅ | ✅ | ✅ | — |
| Docker | ✅ | ✅ | ✅ | Требуется Docker |
| Editor | ✅ | ✅ | ✅ | — |
| Find (fd) | ✅ | ✅ | ✅ | — |
| Fonts | ✅ | ⚠️ | ⚠️ | Ограничено на headless |
| gcloud | ✅ | ✅ | ✅ | Требуется SDK |
| Git | ✅ | ✅ | ✅ | — |
| GNU | ⚠️ | ✅ | ✅ | macOS нужны coreutils |
| Go | ✅ | ✅ | ✅ | Требуется Go |
| Heroku | ✅ | ✅ | ✅ | Требуется CLI |
| Interactive | ✅ | ✅ | ✅ | — |
| Kubernetes | ✅ | ✅ | ✅ | Требуется kubectl |
| Lua | ✅ | ✅ | ✅ | Требуется Lua |
| macOS | ✅ | — | — | Только macOS |
| Make | ✅ | ✅ | ✅ | — |
| mkdir | ✅ | ✅ | ✅ | — |
| Modern | ✅ | ✅ | ✅ | Замены на Rust |
| npm | ✅ | ✅ | ✅ | Требуется Node |
| Permission | ✅ | ✅ | ✅ | — |
| pnpm | ✅ | ✅ | ✅ | Требуется pnpm |
| ps | ✅ | ✅ | ✅ | — |
| Python | ✅ | ✅ | ✅ | Требуется Python |
| rsync | ✅ | ✅ | ✅ | — |
| Rust | ✅ | ✅ | ✅ | Требуется Rust |
| Security | ✅ | ✅ | ✅ | — |
| Subversion | ✅ | ✅ | ✅ | Требуется svn |
| sudo | ✅ | ✅ | ✅ | — |
| Terraform | ✅ | ✅ | ✅ | Требуется Terraform |
| tmux | ✅ | ✅ | ✅ | — |
| Update | ✅ | ✅ | ✅ | — |
| UUID | ✅ | ✅ | ✅ | — |
| wget | ✅ | ✅ | ✅ | — |
| Yarn | ✅ | ✅ | ✅ | Требуется Yarn |

## Связанные страницы

- [О проекте](/ru/about/)
- [Алиасы](/ru/aliases/)
- [Лучшие практики управления секретами](/ru/guides/secret-management/)
