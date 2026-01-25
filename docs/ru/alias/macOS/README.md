---
title: "Алиасы macOS: shell-ярлыки для Mac"
description: "Shell-алиасы для управления системой macOS, контроля Finder и задач обслуживания в Dotfiles."
lang: ru-RU
metaTitle: "Алиасы macOS | Dotfiles"
permalink: /ru/alias/macOS/
sidebar: true
meta:
  - name: keywords
    content: "macOS алиасы, shell ярлыки, Finder алиасы, Mac терминал, dotfiles"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: "Алиасы macOS | Dotfiles"
  - name: twitter:description
    content: "Shell-алиасы для управления системой macOS, контроля Finder и задач обслуживания."
  - name: og:title
    content: "Алиасы macOS | Dotfiles"
  - name: og:description
    content: "Shell-алиасы для управления системой macOS, контроля Finder и задач обслуживания."
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: ru_RU
---

# Алиасы macOS

Shell-ярлыки для управления системой macOS и обслуживания.

## Обзор

Эти алиасы определены в `macOS.aliases.sh` и загружаются автоматически chezmoi. Они обеспечивают быстрый доступ к типичным операциям macOS, включая управление Finder, обслуживание системы и инструменты разработчика.

## Справочник

### Управление системой

| Алиас | Описание |
|-------|----------|
| `lockScreen` | Заблокировать экран |
| `wifiOn` | Включить Wi-Fi |
| `wifiOff` | Выключить Wi-Fi |
| `vp` | Проверить права macOS |
| `vv` | Проверить том macOS |

### Finder

| Алиас | Описание |
|-------|----------|
| `ofd` | Открыть текущий каталог в Finder |
| `finderShowHidden` | Показать скрытые файлы в Finder |
| `finderHideHidden` | Скрыть скрытые файлы в Finder |
| `showDesktopIcons` | Показать все иконки на рабочем столе |
| `hideDesktopIcons` | Скрыть все иконки на рабочем столе |

### Очистка

| Алиас | Описание |
|-------|----------|
| `clds` | Рекурсивно удалить файлы .DS_Store |
| `clls` | Очистить LaunchServices от дубликатов в меню "Открыть с помощью" |
| `trash` | Очистить корзину на всех подключённых томах и основном HDD |

### Инструменты разработчика

| Алиас | Описание |
|-------|----------|
| `xcode` | Запустить Xcode |
| `purge` | Очистить Xcode DerivedData |
| `iphone` | Открыть симуляторы устройств |
| `safariSafeMode` | Запустить Safari в безопасном режиме |

### Дисплей

| Алиас | Описание |
|-------|----------|
| `screensaverDesktop` | Запустить скринсейвер на рабочем столе |
