---
title: "Алиасы NPM: оптимизация управления пакетами Node"
description: "Ускорьте работу с npm с помощью интуитивных shell-алиасов для команд install, build, test и publish."
lang: ru-RU
metaTitle: "Алиасы NPM | Dotfiles"
permalink: /ru/alias/npm/
sidebar: true
meta:
  - name: keywords
    content: npm алиасы, node package manager, npm ярлыки, shell алиасы, dotfiles, npm команды
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Алиасы NPM | Dotfiles
  - name: twitter:description
    content: Ускорьте работу с npm с помощью интуитивных shell-алиасов для команд install, build, test и publish.
  - name: og:title
    content: Алиасы NPM | Dotfiles
  - name: og:description
    content: Ускорьте работу с npm с помощью интуитивных shell-алиасов для команд install, build, test и publish.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: ru_RU
---

# Алиасы NPM

Упрощайте разработку на Node.js с помощью сокращённых команд для пакетного менеджера npm.

![Баннер Dotfiles][banner]

## Обзор

Эти алиасы определены в `npm.aliases.sh` и загружаются автоматически chezmoi. Они обеспечивают быстрый доступ к типичным операциям npm.

## Справочник

### Управление пакетами

| Алиас | Команда | Описание |
|-------|---------|----------|
| `npi` | `npm install` | Установить npm пакет |
| `npg` | `npm install -g` | Установить глобальный npm пакет |
| `nprm` | `npm uninstall` | Удалить npm пакет |
| `npu` | `npm update` | Обновить npm пакет |
| `npl` | `npm list` | Список npm пакетов |
| `npc` | `npm cache` | Кэш npm пакета |

### Скрипты

| Алиас | Команда | Описание |
|-------|---------|----------|
| `npr` | `npm run` | Запустить npm скрипт |
| `nps` | `npm start` | Запустить npm start |
| `npb` | `npm run build` | Запустить npm build |
| `npd` | `npm run dev` | Запустить npm dev |
| `npt` | `npm test` | Запустить npm test |
| `nprw` | `npm run watch` | Запустить npm watch |
| `npsv` | `npm run serve` | Запустить npm serve |

### Публикация и анализ

| Алиас | Команда | Описание |
|-------|---------|----------|
| `npp` | `npm publish` | Опубликовать npm пакет |
| `npa` | `npm audit` | Аудит npm пакетов |
| `npx` | `npm exec` | Выполнить npm пакет |
| `npy` | `npm why` | Объяснить зависимость npm пакета |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
