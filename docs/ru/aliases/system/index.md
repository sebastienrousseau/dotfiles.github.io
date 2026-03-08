---
title: System Псевдонимы | Dotfiles
description: Откройте для себя псевдонимы System в Dotfiles v0.2.495. Короткие и запоминающиеся команды system для macOS, Linux и WSL.
lang: ru-RU
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: System Псевдонимы | Dotfiles preview
canonical: /ru/aliases/system/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System Псевдонимы
pageType: docs
schemaType: WebPage
metaTitle: System Псевдонимы | Dotfiles
permalink: /ru/aliases/system/
sidebar: true
meta:
  - name: keywords
    content: system, псевдонимы, оболочка, Bash, Zsh, Dotfiles, Chezmoi, команды system
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Откройте для себя псевдонимы System в Dotfiles v0.2.495. Короткие команды system.
  - name: twitter:title
    content: System Псевдонимы | Dotfiles
  - name: og:title
    content: System Псевдонимы | Dotfiles
  - name: og:description
    content: Откройте для себя псевдонимы System в Dotfiles v0.2.495. Короткие команды system.
  - name: og:image:alt
    content: Dotfiles – Создано для вашей жизни в Shell
  - name: og:locale
    content: ru_RU
---

# System Псевдонимы

Короткие команды system.

На этой странице представлена группа псевдонимов и связанные с ней сокращённые команды. Сначала прочитайте эту страницу, чтобы понять соглашения об именовании, ожидаемые входные данные и безопасные шаблоны выполнения. Затем откройте справочное приложение для полного списка команд и точного синтаксиса. Эти псевдонимы сокращают повторный ввод и обеспечивают единообразное поведение рабочего процесса в macOS, Linux и WSL.

## Когда использовать

Используйте эту страницу перед ежедневной работой в оболочке, когда вам нужны предсказуемые шаблоны команд.

## Содержимое

- Псевдонимы: 24
- Вспомогательные функции: 0
- Исходные файлы: 1

## Краткие примеры

- `h` → `history`
- `p` → `pwd`
- `path` → `echo -e ${PATH//:/\\n}`
- `ports` → `netstat -tulanp`
- `top` → `sudo btop`
- `now` → `date +"%T"`
- `nowdate` → `date +"%d-%m-%Y"`
- `wget` → `wget -c`
- `speedtest` → `curl -s ... | python3 -`
- `ping` → `ping -c 5`
- `fastping` → `ping -c 100 -s 1`
- `localip` → `ipconfig getifaddr en0`

## Следующий шаг

Открыть полный список:

- [Справочное приложение System](./reference.md)
