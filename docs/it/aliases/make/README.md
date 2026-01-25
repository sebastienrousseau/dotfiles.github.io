---
description: Alias shell per GNU Make. Scorciatoie per make clean, make install, make test e attivita di build comuni.
lang: it-IT
metaTitle: Alias Make - Dotfiles (IT)
permalink: /aliases/make/
sidebar: true

meta:
  - name: keywords
    content: alias make, gnu make, automazione build, alias shell, dotfiles, makefile
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Make - Dotfiles
  - name: twitter:description
    content: Alias shell per GNU Make. Scorciatoie per operazioni build comuni.
  - name: og:title
    content: Alias Make - Dotfiles
  - name: og:description
    content: Alias shell per GNU Make. Scorciatoie per operazioni build comuni.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias Make

Scorciatoie per GNU Make e automazione build.

## Panoramica

Questi alias sono definiti in `make.aliases.sh` e caricati automaticamente da chezmoi. Forniscono comandi brevi per i target Make di uso comune.

## Riferimento

| Alias | Comando | Descrizione |
|-------|---------|-------------|
| `mk` | `make` | Esegui make |
| `mka` | `make all` | Costruisci tutto |
| `mkc` | `make clean` | Pulisci artefatti build |
| `mkd` | `make doc` | Genera documentazione |
| `mkf` | `make format` | Formatta codice sorgente |
| `mkh` | `make help` | Mostra aiuto |
| `mki` | `make install` | Installa target |
| `mkr` | `make run` | Esegui applicazione |
| `mkt` | `make test` | Esegui test |
