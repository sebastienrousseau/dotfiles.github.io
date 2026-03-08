---
title: Аліаси Tmux | Dotfiles
description: Короткі команди tmux. Огляд для Dotfiles v0.2.495. Сумісно з macOS, Linux та WSL через Dotfiles.
lang: uk-UA
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Аліаси Tmux | Dotfiles preview
canonical: /uk/aliases/tmux/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Аліаси Tmux
pageType: docs
schemaType: WebPage
permalink: /uk/aliases/tmux/
---

# Аліаси Tmux

Короткі команди tmux.

Ця сторінка знайомить з однією групою аліасів та її поширеними скороченнями команд.
Прочитайте її спочатку, щоб зрозуміти угоди про іменування, очікувані вхідні дані та безпечні шаблони виконання.
Потім відкрийте довідковий додаток для повного переліку команд та точного синтаксису.
Ці аліаси зменшують повторний набір та зберігають послідовну поведінку робочого процесу на macOS, Linux та WSL.

## Коли використовувати

Використовуйте цю сторінку перед щоденною роботою в оболонці, коли вам потрібні передбачувані шаблони команд.

## Що включено

- Аліаси: 11
- Допоміжні функції: 1
- Файли джерел: 1

## Швидкі приклади

- `tma` → `'tmux attach-session'     # Приєднатися до останньої сесії`
- `tmat` → `'tmux attach-session -t' # Приєднатися до конкретної сесії`
- `tmi` → `'tmux info' # Показати інформацію tmux`
- `tmka` → `'tmux kill-server'     # Завершити всі сесії (сервер)`
- `tmks` → `'tmux kill-session -a' # Завершити всі сесії крім поточної`
- `tml` → `'tmux list-sessions'    # Список всіх сесій`
- `tmlp` → `'tmux list-panes'   # Список панелей`
- `tmls` → `'tmux list-windows' # Список вікон`
- `tmn` → `'tmux new-session'    # Нова безіменна сесія`
- `tmr` → `'tmux source ~/.dotfiles/lib/configurations/tmux/tmux' # Перезавантажити конфіг`
- `tms` → `'tmux new-session -s' # Нова іменована сесія`

## Наступний крок

Відкрити повний перелік:

