---
description: Alias shell per tmux. Scorciatoie per gestione sessioni, finestre e pannelli del multiplexer terminale.
lang: it-IT
metaTitle: Alias Tmux - Dotfiles (IT)
permalink: /aliases/tmux/
sidebar: true

meta:
  - name: keywords
    content: alias tmux, multiplexer terminale, gestione sessioni, alias shell, dotfiles, produttivita terminale
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias shell per tmux. Scorciatoie per gestione sessioni, finestre e pannelli del multiplexer terminale.
  - name: twitter:title
    content: Alias Tmux - Dotfiles
  - name: og:title
    content: Alias Tmux - Dotfiles
  - name: og:description
    content: Alias shell per tmux. Scorciatoie per gestione sessioni, finestre e pannelli del multiplexer terminale.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias Tmux

Scorciatoie per il multiplexer terminale tmux.

## Panoramica

Questi alias sono definiti in `tmux.aliases.sh` e caricati automaticamente da chezmoi. Forniscono comandi brevi per le operazioni tmux comuni.

## Riferimento

| Alias | Descrizione |
|-------|-------------|
| `tm` | Avvia tmux |
| `tma` | Collega all'ultima sessione |
| `tmat` | Collega a sessione specifica |
| `tmks` | Uccidi tutte le sessioni tranne quella corrente |
| `tmka` | Uccidi tutte le sessioni (server) |
| `tml` | Elenca tutte le sessioni |
| `tmn` | Nuova sessione senza nome |
| `tms` | Nuova sessione con nome |
| `tmr` | Ricarica configurazione tmux |
| `tmls` | Elenca finestre |
| `tmlp` | Elenca pannelli |
| `tmi` | Mostra informazioni tmux |

## Configurazione

La configurazione tmux e organizzata in file modulari:

- **default** - Impostazioni principali e plugin
- **display** - Impostazioni visive e comportamento
- **linux** - Funzionalita specifiche piattaforma
- **navigation** - Binding tasti completi
- **panes** - Impostazioni pannelli
- **theme** - Barra stato e stile visivo

## Caratteristiche principali

- Combinazione colori moderna con barra stato specifica per OS
- Binding tasti intuitivi con Ctrl+a come prefisso
- Controlli completi gestione finestre e pannelli
- Persistenza sessione con tmux-resurrect e tmux-continuum
- Menu aiuto scorrevole (premi `Ctrl+a ?`)
- Supporto mouse per navigazione facile

## Navigazione

Premi `Ctrl+a ?` per vedere tutti i binding disponibili. Le funzionalita principali includono:

- **Gestione finestre** - Dividi, crea, naviga e rinomina
- **Navigazione pannelli** - Muoviti con h/j/k/l stile vim
- **Gestione sessioni** - Crea, rinomina e cambia sessione
- **Modalita copia** - Selezione vim, ricerca e clipboard
