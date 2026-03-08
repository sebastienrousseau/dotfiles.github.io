---
title: Типові аліаси | Dotfiles
description: Основні щоденні аліаси оболонки. Огляд для Dotfiles v0.2.495. Сумісно з macOS, Linux та WSL через Dotfiles.
lang: uk-UA
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Типові аліаси | Dotfiles preview
canonical: /uk/aliases/default/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Типові аліаси
pageType: docs
schemaType: WebPage
permalink: /uk/aliases/default/
---

# Типові аліаси

Основні щоденні аліаси оболонки.

Ця сторінка знайомить з однією групою аліасів та її поширеними скороченнями команд.
Прочитайте її спочатку, щоб зрозуміти угоди про іменування, очікувані вхідні дані та безпечні шаблони виконання.
Потім відкрийте довідковий додаток для повного переліку команд та точного синтаксису.
Ці аліаси зменшують повторний набір та зберігають послідовну поведінку робочого процесу на macOS, Linux та WSL.

## Коли використовувати

Використовуйте цю сторінку перед щоденною роботою в оболонці, коли вам потрібні передбачувані шаблони команд.

## Що включено

- Аліаси: 17
- Допоміжні функції: 2
- Файли джерел: 1

## Швидкі приклади

- `clearasl` → `clear_asl_logs`
- `ctf` → `echo $(ls -1 | wc -l)`
- `da` → `date "+%Y-%m-%d %A %T %Z"`
- `halt` → `sudo shutdown -h now`
- `history` → `'fc -il 1' # Показати історію з мітками часу ISO 8601 (zsh)`
- `ipinfo` → `ip -br addr`
- `ipinfo` → `ipconfig getpacket en0`
- `ping` → `ping -c 5`
- `poweroff` → `sudo shutdown -h now`
- `q` → `quit`
- `qfind` → `find . -name `
- `quit` → `exit`

## Наступний крок

Відкрити повний перелік:

