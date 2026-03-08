---
title: Матриця кросплатформної сумісності | Dotfiles
description: Протестована підтримка платформ для оболонок, інструментів, терміналів та категорій аліасів у Dotfiles v0.2.495.
lang: uk-UA
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Матриця кросплатформної сумісності preview
canonical: /uk/compatibility/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Сумісність
pageType: docs
schemaType: TechArticle
permalink: /uk/compatibility/
---

# Матриця кросплатформної сумісності

Ця сторінка документує протестовану підтримку платформ для Dotfiles v0.2.495 на macOS, Linux та WSL2.

## Легенда значків

| Значок | Значення |
|--------|----------|
| ✅ | Повністю протестовано та підтримується |
| ⚠️ | Часткова підтримка — див. примітки |
| ❌ | Не підтримується |
| — | Не застосовно |

## Середовище оболонки

| Компонент | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Примітки |
|-----------|:---:|:---:|:---:|---------|
| Bash 5.x | ✅ | ✅ | ✅ | macOS потребує Homebrew Bash |
| Zsh 5.9+ | ✅ | ✅ | ✅ | Типова на macOS |
| Fish 3.7+ | ✅ | ✅ | ✅ | `apt` / `brew install fish` |
| POSIX sh | ⚠️ | ✅ | ✅ | Обмежена підтримка аліасів |
| PowerShell | — | — | ⚠️ | Тільки WSL interop |

## Сучасні основні інструменти

| Інструмент | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Встановлення |
|------------|:---:|:---:|:---:|-------------|
| Atuin (історія) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| bat (cat) | ✅ | ✅ | ✅ | `brew` / `apt` |
| eza (ls) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| fd (find) | ✅ | ✅ | ✅ | `brew` / `apt` |
| fzf (нечіткий пошук) | ✅ | ✅ | ✅ | `brew` / `apt` |
| ripgrep (grep) | ✅ | ✅ | ✅ | `brew` / `apt` |
| starship (підказка) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| zoxide (cd) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| Yazi (файл. менеджер) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| Zellij (мультиплексор) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| NeoVim | ✅ | ✅ | ✅ | `brew` / `apt` |

## Емулятори терміналу

| Термінал | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Примітки |
|----------|:---:|:---:|:---:|---------|
| Ghostty | ✅ | ✅ | ⚠️ | Нативний Wayland на Linux |
| Alacritty | ✅ | ✅ | ⚠️ | GPU-прискорений |
| WezTerm | ✅ | ✅ | ✅ | Lua конфігурація |
| iTerm2 | ✅ | — | — | Тільки macOS |
| Windows Terminal | — | — | ✅ | Хост WSL |

## Менеджери пакетів

| Менеджер | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Примітки |
|----------|:---:|:---:|:---:|---------|
| Homebrew | ✅ | ✅ | ✅ | Основний для macOS |
| apt | — | ✅ | ✅ | Системні пакети |
| Cargo | ✅ | ✅ | ✅ | Інструменти Rust |
| npm / pnpm | ✅ | ✅ | ✅ | Інструменти Node |
| pip / pipx | ✅ | ✅ | ✅ | Інструменти Python |

## Безпека та підпис

| Функція | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Примітки |
|---------|:---:|:---:|:---:|---------|
| SSH підпис комітів | ✅ | ✅ | ✅ | Нативний, без GPG |
| age шифрування | ✅ | ✅ | ✅ | Інтеграція з Chezmoi |
| SOPS | ✅ | ✅ | ✅ | Бекенд age або GPG |
| 1Password CLI | ✅ | ✅ | ⚠️ | WSL потребує мосту |
| git-secrets | ✅ | ✅ | ✅ | Pre-commit хук |

## Категорії аліасів

| Категорія | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Примітки |
|-----------|:---:|:---:|:---:|---------|
| AI | ✅ | ✅ | ✅ | Потребує API-ключі |
| Архіви | ✅ | ✅ | ✅ | — |
| cd (zoxide) | ✅ | ✅ | ✅ | — |
| chmod | ✅ | ✅ | ✅ | — |
| Очищення | ✅ | ✅ | ✅ | — |
| Конфігурація | ✅ | ✅ | ✅ | — |
| Типові | ✅ | ✅ | ✅ | — |
| Діагностика | ✅ | ✅ | ✅ | — |
| dig | ✅ | ✅ | ✅ | — |
| Дисковий простір | ✅ | ✅ | ✅ | — |
| Docker | ✅ | ✅ | ✅ | Потребує Docker |
| Редактор | ✅ | ✅ | ✅ | — |
| Пошук (fd) | ✅ | ✅ | ✅ | — |
| Шрифти | ✅ | ⚠️ | ⚠️ | Обмежено на headless |
| gcloud | ✅ | ✅ | ✅ | Потребує SDK |
| Git | ✅ | ✅ | ✅ | — |
| GNU | ⚠️ | ✅ | ✅ | macOS потребує coreutils |
| Go | ✅ | ✅ | ✅ | Потребує Go |
| Heroku | ✅ | ✅ | ✅ | Потребує CLI |
| Інтерактивні | ✅ | ✅ | ✅ | — |
| Kubernetes | ✅ | ✅ | ✅ | Потребує kubectl |
| Lua | ✅ | ✅ | ✅ | Потребує Lua |
| macOS | ✅ | — | — | Тільки macOS |
| Make | ✅ | ✅ | ✅ | — |
| mkdir | ✅ | ✅ | ✅ | — |
| Сучасні | ✅ | ✅ | ✅ | Заміни на Rust |
| npm | ✅ | ✅ | ✅ | Потребує Node |
| Дозволи | ✅ | ✅ | ✅ | — |
| pnpm | ✅ | ✅ | ✅ | Потребує pnpm |
| ps | ✅ | ✅ | ✅ | — |
| Python | ✅ | ✅ | ✅ | Потребує Python |
| rsync | ✅ | ✅ | ✅ | — |
| Rust | ✅ | ✅ | ✅ | Потребує Rust |
| Безпека | ✅ | ✅ | ✅ | — |
| Subversion | ✅ | ✅ | ✅ | Потребує svn |
| sudo | ✅ | ✅ | ✅ | — |
| Terraform | ✅ | ✅ | ✅ | Потребує Terraform |
| tmux | ✅ | ✅ | ✅ | — |
| Оновлення | ✅ | ✅ | ✅ | — |
| UUID | ✅ | ✅ | ✅ | — |
| wget | ✅ | ✅ | ✅ | — |
| Yarn | ✅ | ✅ | ✅ | Потребує Yarn |

## Пов'язане

- [Про Dotfiles](/uk/about/)
- [Аліаси](/uk/aliases/)
- [Найкращі практики керування секретами](/uk/guides/secret-management/)
