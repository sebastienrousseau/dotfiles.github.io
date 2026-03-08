---
title: Аліаси діагностики | Dotfiles
description: Короткі команди перевірки стану. Огляд для Dotfiles v0.2.495.
lang: uk-UA
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Аліаси діагностики | Dotfiles preview
canonical: /uk/aliases/diagnostics/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Аліаси діагностики
pageType: docs
schemaType: WebPage
permalink: /uk/aliases/diagnostics/
---

# Аліаси діагностики

Короткі команди перевірки стану.

Ця сторінка знайомить з однією групою аліасів та її поширеними скороченнями команд.
Прочитайте її спочатку, щоб зрозуміти угоди про іменування, очікувані вхідні дані та безпечні шаблони виконання.
Потім відкрийте довідковий додаток для повного переліку команд та точного синтаксису.
Ці аліаси зменшують повторний набір та зберігають послідовну поведінку робочого процесу на macOS, Linux та WSL.

## Коли використовувати

Використовуйте цю сторінку перед щоденною роботою в оболонці, коли вам потрібні передбачувані шаблони команд.

## Що включено

- Аліаси: 14
- Допоміжні функції: 1
- Файли джерел: 1

## Швидкі приклади

- `ca` → `chezmoi apply`
- `capply` → `dot apply`
- `cdiff` → `dot diff`
- `cdrift` → `dot drift`
- `ce` → `chezmoi edit`
- `crem` → `dot remove`
- `cupdate` → `dot update`
- `dot-doctor` → `dotdoc`
- `dot-drift` → `drift`
- `dot-heal` → `heal`
- `dotdoc` → `bash $HOME/.dotfiles/scripts/diagnostics/doctor.sh`
- `dotdoc-full` → `bash $HOME/.dotfiles/scripts/diagnostics/doctor.sh && echo "\n--- Path Info ---" && echo $PATH | tr ":" "\n" | glow -`

## Наступний крок

Відкрити повний перелік:

