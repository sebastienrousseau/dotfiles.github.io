---
title: Sciezki | Dotfiles
description: Przeglad kolejnosci PATH i wpisow z Dotfiles v0.2.495. Kompatybilny z macOS, Linux i WSL przez Dotfiles.
lang: pl-PL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Sciezki | Dotfiles preview
canonical: /pl/paths/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Sciezki
pageType: docs
schemaType: WebPage
permalink: /pl/paths/
---

# Sciezki

Dotfiles ustawia kolejnosc PATH w jednym szablonie i dodaje wpisy wedlug priorytetu.

## Kolejnosc

1. Rozpocznij od sciezek systemowych.
2. Dodaj sciezki srodowisk uruchomieniowych i menedzerow pakietow.
3. Dodaj lokalne sciezki uzytkownika na koncu dla najwyzszego priorytetu.
4. Usun duplikaty zachowujac pierwsze wystapienie.

## Zadeklarowane wpisy

- `"/usr/bin"`
- `"/bin"`
- `"/sbin"`
- `"/opt/homebrew/sbin"`
- `"/opt/homebrew/bin"`
- `"/opt/homebrew/opt/ruby/bin"`
- `"${HOME}/.gem/ruby/bin"`
- `"${PIPX_BIN_DIR}"`
- `"${HOME}/.cargo/bin"`
- `"${HOME}/go/bin"`
- `"${HOME}/.node_modules/bin"`
- `"/Library/Apple/usr/bin"`
- `"/Library/TeX/texbin"`
- `"/Applications/Topaz Photo AI.app/Contents/Resources/bin"`
- `"/Applications/Little Snitch.app/Contents/Components"`
- `"/Applications/iTerm.app/Contents/Resources/utilities"`
- `"/home/linuxbrew/.linuxbrew/bin"`
- `"${HOME}/.local/bin"`
- `"${HOME}/bin"`
