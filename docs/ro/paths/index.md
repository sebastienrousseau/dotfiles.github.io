---
title: Căi | Dotfiles
description: Prezentare generală a ordinii PATH și intrările declarate în Dotfiles v0.2.495. Compatibil cu macOS, Linux și WSL prin Dotfiles.
lang: ro-RO
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Căi | Previzualizare Dotfiles
canonical: /ro/paths/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Căi
pageType: docs
schemaType: WebPage
permalink: /ro/paths/
---

# Căi

Dotfiles configurează ordinea PATH într-un singur șablon și adaugă intrările după prioritate.

## Ordine de precedență

1. Se pornește de la căile de sistem.
2. Se adaugă căile de runtime și manager de pachete.
3. Se adaugă căile utilizatorului local ultimele, pentru prioritate maximă.
4. Se elimină duplicatele păstrând prima apariție.

## Intrări declarate

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
