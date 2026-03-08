---
title: Аліаси Dig | Dotfiles
description: Короткі команди DNS-запитів. Огляд для Dotfiles v0.2.495.
lang: uk-UA
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Аліаси Dig | Dotfiles preview
canonical: /uk/aliases/dig/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Аліаси Dig
pageType: docs
schemaType: WebPage
permalink: /uk/aliases/dig/
---

# Аліаси Dig

Короткі команди DNS-запитів.

Ця сторінка знайомить з однією групою аліасів та її поширеними скороченнями команд.
Прочитайте її спочатку, щоб зрозуміти угоди про іменування, очікувані вхідні дані та безпечні шаблони виконання.
Потім відкрийте довідковий додаток для повного переліку команд та точного синтаксису.
Ці аліаси зменшують повторний набір та зберігають послідовну поведінку робочого процесу на macOS, Linux та WSL.

## Коли використовувати

Використовуйте цю сторінку перед щоденною роботою в оболонці, коли вам потрібні передбачувані шаблони команд.

## Що включено

- Аліаси: 10
- Допоміжні функції: 0
- Файли джерел: 1

## Швидкі приклади

- `d` → `dig`
- `d4` → `dig +short -4`
- `d6` → `dig +short -6`
- `dga` → `dig +all ANY`
- `dgs` → `dig +short`
- `digg` → `dig @8.8.8.8 +nocmd any +multiline +noall +answer`
- `ip4` → `dig +short myip.opendns.com @resolver1.opendns.com -4`
- `ip6` → `dig -6 AAAA +short myip.opendns.com. @resolver1.opendns.com.`
- `ips` → `ip4; ip6`
- `wip` → `dig +short myip.opendns.com @resolver1.opendns.com`

## Наступний крок

Відкрити повний перелік:

