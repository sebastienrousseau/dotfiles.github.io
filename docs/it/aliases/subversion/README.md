---
description: Alias shell per SVN. Scorciatoie per commit, update, checkout e operazioni di controllo versione Subversion.
lang: it-IT
metaTitle: Alias Subversion - Dotfiles (IT)
permalink: /aliases/subversion/
sidebar: true

meta:
  - name: keywords
    content: alias svn, alias subversion, controllo versione, alias shell, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias shell per SVN. Scorciatoie per commit, update, checkout e operazioni di controllo versione Subversion.
  - name: twitter:title
    content: Alias Subversion - Dotfiles
  - name: og:title
    content: Alias Subversion - Dotfiles
  - name: og:description
    content: Alias shell per SVN. Scorciatoie per commit, update, checkout e operazioni di controllo versione Subversion.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias Subversion

Scorciatoie per il sistema di controllo versione SVN.

## Panoramica

Questi alias sono definiti in `subversion.aliases.sh` e caricati automaticamente da chezmoi. Forniscono comandi brevi per le operazioni SVN comuni.

## Riferimento

### Operazioni base

| Alias | Descrizione |
|-------|-------------|
| `sco` | Checkout copia di lavoro |
| `sup` | Aggiorna copia di lavoro |
| `sci` | Commit modifiche al repository |
| `sst` | Stampa stato file e directory |
| `sdi` | Visualizza modifiche locali o diff |

### Gestione file

| Alias | Descrizione |
|-------|-------------|
| `sad` | Aggiungi file sotto controllo versione |
| `sdl` | Rimuovi file dal controllo versione |
| `smv` | Sposta o rinomina elemento |
| `scp` | Copia file e directory |
| `smd` | Crea nuova directory |

### Cronologia e info

| Alias | Descrizione |
|-------|-------------|
| `slg` | Mostra messaggi di log |
| `sin` | Visualizza informazioni su elemento |
| `sbl` | Mostra quando ogni riga e stata modificata |
| `sct` | Stampa contenuto file |
| `sls` | Elenca voci directory |

### Risoluzione conflitti

| Alias | Descrizione |
|-------|-------------|
| `srs` | Risolvi conflitti |
| `srsd` | Rimuovi stato conflitto |
| `srv` | Ripristina copia di lavoro originale |

### Avanzato

| Alias | Descrizione |
|-------|-------------|
| `smg` | Unisci modifiche |
| `smgi` | Visualizza info unione |
| `ssw` | Aggiorna copia a URL diverso |
| `slk` | Blocca percorsi |
| `sulk` | Sblocca percorsi |
