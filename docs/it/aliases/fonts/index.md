---
title: Alias Fonts | Dotfiles
description: Alias shell per gestire font di sistema e cache font. Aggiorna ed elenca font installati rapidamente.
lang: it-IT
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Alias Fonts preview
canonical: /it/aliases/fonts/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Alias Fonts
pageType: docs
schemaType: WebPage
metaTitle: Alias Fonts - Dotfiles (IT)
permalink: /it/aliases/fonts/
sidebar: true
meta:
  - name: keywords
    content: alias font, gestione font, cache font, fc-cache, alias shell, dotfiles, nerd font
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Fonts - Dotfiles
  - name: twitter:description
    content: Alias shell per gestire font di sistema e cache font. Aggiorna ed elenca font installati rapidamente.
  - name: og:title
    content: Alias Fonts - Dotfiles
  - name: og:description
    content: Alias shell per gestire font di sistema e cache font. Aggiorna ed elenca font installati rapidamente.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias Fonts

Alias per gestire font di sistema e cache font.

## Panoramica

Questi alias semplificano la gestione dei font, permettendoti di aggiornare la cache font ed elencare le famiglie di font installate dal terminale. Definiti in `fonts.aliases.sh` e caricati automaticamente da chezmoi.

## Riferimento

| Alias | Descrizione |
|-------|-------------|
| `update-fonts` | Aggiorna la cache font di sistema (`fc-cache -fv`). |
| `list-fonts` | Elenca tutte le famiglie di font installate. |

## Font installati

- **JetBrainsMono Nerd Font** - Font principale del terminale con legature.
- **Symbols Nerd Font** - Fallback per icone e simboli.
