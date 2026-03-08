---
title: "Алиасы Make: оптимизация рабочего процесса сборки"
description: Ярлыки-алиасы для команд Make. Упрощайте сборку, тесты и автоматизацию проектов.
lang: ru-RU
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: "Алиасы Make: оптимизация рабочего процесса сборки preview"
canonical: /ru/alias/make/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "Алиасы Make: оптимизация рабочего процесса сборки"
pageType: docs
schemaType: WebPage
metaTitle: Алиасы Make | Dotfiles
permalink: /ru/alias/make/
sidebar: true
meta:
  - name: keywords
    content: make алиасы, makefile ярлыки, автоматизация сборки, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Алиасы Make | Dotfiles
  - name: twitter:description
    content: Ярлыки-алиасы для команд Make. Упрощайте сборку, тесты и автоматизацию проектов.
  - name: og:title
    content: Алиасы Make | Dotfiles
  - name: og:description
    content: Ярлыки-алиасы для команд Make. Упрощайте сборку, тесты и автоматизацию проектов.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: ru_RU
---

# Алиасы Make

Упрощайте рабочий процесс сборки с помощью сокращённых команд для Make.

![Баннер Dotfiles][banner]

## Обзор

Эти алиасы обеспечивают быстрый доступ к типичным целям Make. Определённые в `make.aliases.sh` и загружаемые автоматически chezmoi как часть конфигурации Universal Dotfiles.

## Справочник

| Алиас | Команда | Описание |
|-------|---------|----------|
| `mk` | `make` | Запустить цель Make по умолчанию |
| `mka` | `make all` | Собрать все цели |
| `mkc` | `make clean` | Очистить артефакты сборки |
| `mkd` | `make doc` | Сгенерировать документацию |
| `mkf` | `make format` | Отформатировать исходные файлы |
| `mkh` | `make help` | Показать справочную информацию |
| `mki` | `make install` | Установить проект |
| `mkr` | `make run` | Запустить проект |
| `mkt` | `make test` | Запустить тесты |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
