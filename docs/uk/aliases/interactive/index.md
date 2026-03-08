---
title: Інтерактивні аліаси | Dotfiles
description: Короткі інтерактивні команди оболонки. Огляд для Dotfiles v0.2.495. Сумісно з macOS, Linux та WSL через Dotfiles.
lang: uk-UA
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Інтерактивні аліаси | Dotfiles preview
canonical: /uk/aliases/interactive/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Інтерактивні аліаси
pageType: docs
schemaType: WebPage
permalink: /uk/aliases/interactive/
---

# Інтерактивні аліаси

Короткі інтерактивні команди оболонки.

Ця сторінка знайомить з однією групою аліасів та її поширеними скороченнями команд.
Прочитайте її спочатку, щоб зрозуміти угоди про іменування, очікувані вхідні дані та безпечні шаблони виконання.
Потім відкрийте довідковий додаток для повного переліку команд та точного синтаксису.
Ці аліаси зменшують повторний набір та зберігають послідовну поведінку робочого процесу на macOS, Linux та WSL.

## Коли використовувати

Використовуйте цю сторінку перед щоденною роботою в оболонці, коли вам потрібні передбачувані шаблони команд.

## Що включено

- Аліаси: 8
- Допоміжні функції: 0
- Файли джерел: 1

## Швидкі приклади

- `bin` → `dot_confirm_destructive "rm -fr ${HOME}/.Trash" && rm -fr ${HOME}/.Trash`
- `cp` → `cp -vi`
- `del` → `dot_confirm_destructive "rm -rfvi (del)" && rm -rfvi`
- `diff` → `diff -u`
- `ln` → `ln -vi`
- `mkdir` → `mkdir -pv`
- `mv` → `mv -vi`
- `rm` → `rm -vi`

## Наступний крок

Відкрити повний перелік:

