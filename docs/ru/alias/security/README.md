---
title: "Алиасы Security: защита конфигурационных файлов"
description: "Алиасы безопасности для неизменяемости файлов и защиты конфигурации. Блокировка и разблокировка критических shell-файлов."
lang: ru-RU
metaTitle: "Алиасы Security | Dotfiles"
permalink: /ru/alias/security/
sidebar: true
meta:
  - name: keywords
    content: безопасность, неизменяемость, блокировка файлов, shell алиасы, dotfiles, защита конфигурации
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: "Алиасы Security | Dotfiles"
  - name: twitter:description
    content: "Алиасы безопасности для неизменяемости файлов и защиты конфигурации."
  - name: og:title
    content: "Алиасы Security | Dotfiles"
  - name: og:description
    content: "Алиасы безопасности для неизменяемости файлов и защиты конфигурации."
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: ru_RU
---

# Алиасы Security

Защитите критические конфигурационные файлы с помощью контроля неизменяемости.

## Обзор

Эти алиасы определены в `security.aliases.sh` и загружаются автоматически Chezmoi.

## Справочник

### Неизменяемость

| Алиас | Описание |
|-------|----------|
| `lock-configs` | Заблокировать критические файлы для предотвращения изменений |
| `unlock-configs` | Разблокировать критические файлы для редактирования |
| `check-locks` | Проверить статус блокировки критических файлов |
