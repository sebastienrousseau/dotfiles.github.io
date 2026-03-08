---
title: System Псевдоніми | Dotfiles
description: Відкрийте для себе псевдоніми System у Dotfiles v0.2.495. Короткі та запам'ятовувані команди system для macOS, Linux та WSL.
lang: uk-UA
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: System Псевдоніми | Dotfiles preview
canonical: /uk/aliases/system/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System Псевдоніми
pageType: docs
schemaType: WebPage
permalink: /uk/aliases/system/
---

# System Псевдоніми

Короткі команди system.

Ця сторінка представляє групу псевдонімів та пов'язані з нею скорочені команди. Спочатку прочитайте цю сторінку, щоб зрозуміти угоди про іменування, очікувані вхідні дані та безпечні шаблони виконання. Потім відкрийте довідковий додаток для повного переліку команд та точного синтаксису. Ці псевдоніми зменшують повторне введення та забезпечують однакову поведінку робочого процесу в macOS, Linux та WSL.

## Коли використовувати

Використовуйте цю сторінку перед щоденною роботою в оболонці, коли вам потрібні передбачувані шаблони команд.

## Що включено

- Псевдоніми: 24
- Допоміжні функції: 0
- Вихідні файли: 1

## Швидкі приклади

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

## Наступний крок

Відкрити повний перелік:

- [Довідковий додаток System](./reference.md)
