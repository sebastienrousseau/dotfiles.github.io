---
title: Псевдонимы шрифтов | Dotfiles
description: Псевдонимы оболочки для управления системными шрифтами и кэшем. Обновляйте кэш шрифтов и просматривайте установленные семейства шрифтов простыми командами.
lang: ru-RU
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Псевдонимы шрифтов preview
canonical: /ru/aliases/fonts/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Псевдонимы шрифтов
pageType: docs
schemaType: WebPage
metaTitle: Псевдонимы шрифтов - Dotfiles (RU)
permalink: /ru/aliases/fonts/
sidebar: true
meta:
  - name: keywords
    content: font aliases, font cache, fc-cache, list fonts, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Псевдонимы оболочки для управления системными шрифтами и кэшем.
  - name: twitter:title
    content: Псевдонимы шрифтов - Dotfiles
  - name: og:title
    content: Псевдонимы шрифтов - Dotfiles
  - name: og:description
    content: Псевдонимы оболочки для управления системными шрифтами и кэшем.
  - name: og:image:alt
    content: Dotfiles - Простой дизайн для вашей жизни в командной оболочке
  - name: og:locale
    content: ru_RU
---

# Псевдонимы шрифтов

Псевдонимы оболочки для управления системными шрифтами и кэшем.

## Обзор

Псевдонимы шрифтов предоставляют удобные ярлыки для распространённых задач управления шрифтами. Эти команды упрощают обновление кэша шрифтов после установки новых шрифтов и просмотр всех доступных семейств шрифтов в вашей системе.

## Справочник

### Команды

| Псевдоним | Команда | Описание |
|-------|---------|-------------|
| `update-fonts` | `fc-cache -fv` | Обновить системный кэш шрифтов |
| `list-fonts` | — | Показать все установленные семейства шрифтов |

### Установленные шрифты

Следующие шрифты настроены по умолчанию:

| Шрифт | Назначение |
|------|---------|
| JetBrainsMono Nerd Font | Основной шрифт терминала |
| Symbols Nerd Font | Резервный шрифт для иконок |
