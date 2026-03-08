---
title: Аліаси Chmod | Dotfiles
description: Короткі команди прав доступу. Огляд для Dotfiles v0.2.495. Сумісно з macOS, Linux та WSL через Dotfiles.
lang: uk-UA
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Аліаси Chmod | Dotfiles preview
canonical: /uk/aliases/chmod/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Аліаси Chmod
pageType: docs
schemaType: WebPage
permalink: /uk/aliases/chmod/
---

# Аліаси Chmod

Короткі команди прав доступу.

Ця сторінка знайомить з однією групою аліасів та її поширеними скороченнями команд.
Прочитайте її спочатку, щоб зрозуміти угоди про іменування, очікувані вхідні дані та безпечні шаблони виконання.
Потім відкрийте довідковий додаток для повного переліку команд та точного синтаксису.
Ці аліаси зменшують повторний набір та зберігають послідовну поведінку робочого процесу на macOS, Linux та WSL.

## Коли використовувати

Використовуйте цю сторінку перед щоденною роботою в оболонці, коли вам потрібні передбачувані шаблони команд.

## Що включено

- Аліаси: 17
- Допоміжні функції: 0
- Файли джерел: 1

## Швидкі приклади

- `chmod_000` → `change_permission 000`
- `chmod_1755` → `'change_permission 1755' # Sticky bit + 755`
- `chmod_2755` → `'change_permission 2755' # Setgid + 755`
- `chmod_400` → `'change_permission 400' # Тільки читання для власника`
- `chmod_444` → `'change_permission 444' # Тільки читання для всіх`
- `chmod_4755` → `'change_permission 4755' # Setuid + 755`
- `chmod_600` → `'change_permission 600' # Читання/запис для власника`
- `chmod_644` → `'change_permission 644' # Читання/запис для власника, читання для інших`
- `chmod_664` → `'change_permission 664' # Читання/запис для власника та групи, читання для інших`
- `chmod_666` → `'change_permission 666' # Читання/запис для всіх`
- `chmod_700` → `'change_permission 700' # Повний доступ тільки для власника`
- `chmod_744` → `'change_permission 744' # Повний для власника, читання для інших`

## Наступний крок

Відкрити повний перелік:

