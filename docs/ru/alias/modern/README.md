---
title: "Алиасы Modern Tooling: замены Unix на базе Rust"
description: "Современные shell-алиасы для eza, bat и ripgrep. Замените устаревшие Unix-инструменты более быстрыми альтернативами на Rust."
lang: ru-RU
metaTitle: "Алиасы Modern Tooling | Dotfiles"
permalink: /ru/alias/modern/
sidebar: true
meta:
  - name: keywords
    content: "modern алиасы, eza, bat, ripgrep, rust cli инструменты, dotfiles, shell"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: "Алиасы Modern Tooling | Dotfiles"
  - name: twitter:description
    content: "Современные shell-алиасы для eza, bat и ripgrep. Замените устаревшие Unix-инструменты альтернативами на Rust."
  - name: og:title
    content: "Алиасы Modern Tooling | Dotfiles"
  - name: og:description
    content: "Современные shell-алиасы для eza, bat и ripgrep. Замените устаревшие Unix-инструменты альтернативами на Rust."
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: ru_RU
---

# Алиасы Modern Tooling

Более быстрые и умные замены для устаревших Unix-команд.

## Обзор

Алиасы modern, определённые в `modern.aliases.sh`, предоставляют альтернативы на базе Rust традиционным Unix-инструментам. Эти алиасы загружаются автоматически `chezmoi` и корректно откатываются к стандартным командам, когда современные инструменты недоступны.

## Справочник

### Список файлов с eza

Заменяет `ls` при установленном `eza`.

| Алиас | Команда | Описание |
|-------|---------|----------|
| `ls` | `eza --icons` | Список файлов с иконками |
| `ll` | `eza -alF` | Длинный формат списка |
| `la` | `eza -a` | Список всех файлов, включая скрытые |
| `lt` | `eza --tree` | Отобразить дерево каталогов |

Откатывается к стандартному `ls`, если `eza` не установлен.

### Содержимое файлов с bat

Заменяет `cat` при установленном `bat`.

| Алиас | Команда | Описание |
|-------|---------|----------|
| `cat` | `bat` | Показать содержимое файла с подсветкой синтаксиса |

### Поиск с ripgrep

Заменяет `grep` при установленном `rg`.

| Алиас | Команда | Описание |
|-------|---------|----------|
| `grep` | `rg` | Поиск в содержимом файлов с Ripgrep |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
