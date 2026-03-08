---
title: О проекте | Dotfiles
description: Конфигурационные файлы нового поколения, управляемые Chezmoi. Высокопроизводительные, безопасные, AI-нативные.
lang: ru-RU
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: О проекте preview
canonical: /ru/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: О проекте
pageType: docs
schemaType: WebPage
metaTitle: О проекте - Dotfiles (RU)
permalink: /ru/about/
meta:
  - name: keywords
    content: chezmoi, dotfiles, конфигурация, автоматизация, macos, linux, rust, zellij
---

# О Dotfiles v0.2.481

## Введение

Dotfiles представляет современный стандарт конфигурации окружения. Построен на **Chezmoi** и обеспечивает безопасное, надёжное и кроссплатформенное управление оболочкой, приложениями и секретами.

В отличие от устаревших dotfiles, полагающихся на сложные Makefile или скрипты символических ссылок, Dotfiles использует шаблонный подход — атомарный и быстрый.

## Что нового в v0.2.481

- **Современное ядро**: Замена устаревших Unix-инструментов высокопроизводительными альтернативами на Rust:
  - **Atuin** (замена `history`)
  - **Yazi** (замена `ls`/`ranger`)
  - **Zellij** (замена `tmux`)
  - **Ghostty** (современный GPU-ускоренный терминал)
  - **NeoVim** (современный редактор на базе Vim)
- **Нативная безопасность**: Полностью нативная подпись SSH без сторонних агентов.
- **Интерактивный режим**: Новая команда `dot learn` для знакомства с функциями.

## Установка

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/main/install.sh)"
```

## Проверка

```bash
dot doctor
```

## Основные команды

- `dot apply` применяет изменения конфигурации.
- `dot update` обновляет репозиторий и прогревает кэши.
- `dot doctor` проверяет пути, инструменты и состояние оболочки.
- `dot heal` восстанавливает отсутствующее или повреждённое состояние.
- `dot smoke-test` проверяет основные инструментальные цепочки.

## Связанные страницы

- [Алиасы](/ru/aliases/)
- [Функции](/ru/functions/)
- [Пути](/ru/paths/)
