---
title: Шляхи | Dotfiles
description: Огляд пріоритетів PATH та записів з Dotfiles v0.2.495. Сумісно з macOS, Linux та WSL через Dotfiles.
lang: uk-UA
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Шляхи | Dotfiles preview
canonical: /uk/paths/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Шляхи
pageType: docs
schemaType: WebPage
permalink: /uk/paths/
---

# Шляхи

Dotfiles встановлює порядок PATH в одному шаблоні та додає записи за пріоритетом.

## Пріоритетність

1. Починати із системних шляхів.
2. Додати на початок шляхи середовищ виконання та менеджерів пакетів.
3. Додати на початок локальні шляхи користувача останніми для найвищого пріоритету.
4. Видалити дублікати, зберігаючи перший збіг.

## Оголошені записи

- `"/opt/homebrew/sbin"`
- `"/opt/homebrew/bin"`
- `"/opt/homebrew/opt/ruby/bin"`
- `"${HOME}/.gem/ruby/bin"`
- `"${PIPX_BIN_DIR}"`
- `"${HOME}/.cargo/bin"`
- `"${HOME}/go/bin"`
- `"${BUN_INSTALL}/bin"`
- `"${HOME}/.node_modules/bin"`
- `"${HOME}/.luarocks/bin"`
- `"/Library/Apple/usr/bin"`
- `"/Library/TeX/texbin"`
- `"/Applications/Topaz Photo AI.app/Contents/Resources/bin"`
- `"/Applications/Little Snitch.app/Contents/Components"`
- `"/Applications/iTerm.app/Contents/Resources/utilities"`
- `"/Applications/Visual Studio Code.app/Contents/Resources/app/bin"`
- `"${HOME}/.local/bin"`
- `"${HOME}/.local/share/mise/shims"`
- `"${HOME}/bin"`
