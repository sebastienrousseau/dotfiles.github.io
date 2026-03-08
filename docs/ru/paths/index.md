---
title: Управление путями | Dotfiles
description: Как Dotfiles управляет иерархией $PATH, обеспечивая загрузку правильных инструментов в правильном порядке.
lang: ru-RU
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Управление путями preview
canonical: /ru/paths/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Управление путями
pageType: docs
schemaType: WebPage
metaTitle: Управление путями - Dotfiles (RU)
permalink: /ru/paths/
meta:
  - name: keywords
    content: путь, окружение, переменные, иерархия, dotfiles, chezmoi
---

# Управление путями

Одна из важнейших задач Dotfiles — управление переменной окружения `$PATH`. Она определяет, какая версия инструмента запускается при вводе команды.

Мы придерживаемся строгой иерархии для обеспечения согласованности между macOS и Linux.
