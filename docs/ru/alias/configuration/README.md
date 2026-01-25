---
description: Мгновенно открывайте файлы конфигурации оболочки, Git, SSH и серверов с помощью этих псевдонимов для Bash и Zsh.
lang: ru-RU
metaTitle: Псевдонимы конфигурации - Dotfiles (RU)
permalink: /ru/alias/configuration/
sidebar: true

meta:
  - name: keywords
    content: configuration aliases, shell config, dotfiles, bash aliases, zsh aliases, git config, ssh config
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Псевдонимы конфигурации - Dotfiles
  - name: twitter:description
    content: Мгновенно открывайте файлы конфигурации оболочки, Git, SSH и серверов с помощью этих псевдонимов.
  - name: og:title
    content: Псевдонимы конфигурации - Dotfiles
  - name: og:description
    content: Мгновенно открывайте файлы конфигурации оболочки, Git, SSH и серверов с помощью этих псевдонимов.
  - name: og:image:alt
    content: Dotfiles - Простой дизайн для вашей жизни в командной оболочке
  - name: og:locale
    content: ru_RU
---

# Псевдонимы конфигурации

Открывайте файлы конфигурации в вашем редакторе по умолчанию одной командой.

## Обзор

Псевдонимы конфигурации предоставляют ярлыки для открытия часто редактируемых файлов конфигурации. Эти псевдонимы определены в `configuration.aliases.sh` и автоматически загружаются chezmoi.

Каждый псевдоним запускает соответствующий файл в текстовом редакторе вашей системы по умолчанию, устраняя необходимость запоминать пути к файлам или вводить длинные команды.

## Справочник

### Конфигурация оболочки

| Псевдоним | Описание |
|-------|-------------|
| `bshrc` | Открыть файл конфигурации Bash (~/.bashrc) |
| `bshp` | Открыть профиль Bash (~/.bash_profile) |
| `zshrc` | Открыть файл конфигурации Zsh (~/.zshrc) |
| `zshp` | Открыть профиль Zsh (~/.zprofile) |

### Контроль версий

| Псевдоним | Описание |
|-------|-------------|
| `gcfg` | Открыть файл конфигурации Git (~/.gitconfig) |
| `gign` | Открыть файл Git ignore (~/.gitignore) |

### Сеть и серверы

| Псевдоним | Описание |
|-------|-------------|
| `apconf` | Открыть файл конфигурации Apache |
| `ngconf` | Открыть файл конфигурации Nginx |
| `sshconf` | Открыть файл конфигурации SSH (~/.ssh/config) |
| `hosts` | Открыть файл hosts (/etc/hosts) |

### Инструменты разработки

| Псевдоним | Описание |
|-------|-------------|
| `dockcomp` | Открыть файл Docker Compose |
| `eddir` | Открыть текущую директорию в редакторе по умолчанию |
