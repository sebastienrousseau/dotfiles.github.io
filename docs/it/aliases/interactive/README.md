---
description: Alias shell interattivi per operazioni file sicure. Richiesta di conferma prima di sovrascrivere o eliminare file.
lang: it-IT
metaTitle: Alias Interactive - Dotfiles (IT)
permalink: /aliases/interactive/
sidebar: true

meta:
  - name: keywords
    content: alias interattivi, operazioni file sicure, conferma eliminazione, alias shell, dotfiles, comandi bash
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias shell interattivi per operazioni file sicure. Richiesta di conferma prima di sovrascrivere o eliminare file.
  - name: twitter:title
    content: Alias Interactive - Dotfiles
  - name: og:title
    content: Alias Interactive - Dotfiles
  - name: og:description
    content: Alias shell interattivi per operazioni file sicure. Richiesta di conferma prima di sovrascrivere o eliminare file.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias Interactive

Operazioni file sicure con prompt di conferma integrati.

## Panoramica

Gli alias interattivi aggiungono prompt di conferma alle operazioni file potenzialmente distruttive. Definiti in `interactive.aliases.sh`, vengono caricati automaticamente da chezmoi e aiutano a prevenire cancellazioni o sovrascritture accidentali.

## Riferimento

### Operazioni file

| Alias | Descrizione |
|-------|-------------|
| `cp` | Copia file interattivamente (chiede prima di sovrascrivere) |
| `mv` | Sposta o rinomina interattivamente (chiede prima di sovrascrivere) |
| `ln` | Crea link simbolici interattivamente |
| `rm` | Rimuovi file interattivamente (chiede prima di eliminare) |
| `del` | Rimuovi ricorsivamente interattivamente |
| `zap` | Alias per rm con conferma interattiva |

### Gestione cestino

| Alias | Descrizione |
|-------|-------------|
| `bin` | Rimuovi tutti i file dal cestino forzatamente |

### Altre utility

| Alias | Descrizione |
|-------|-------------|
| `chmod` | Cambia permessi con output dettagliato |
| `chown` | Cambia proprietario con output dettagliato |
| `diff` | Confronta file in formato unificato |
| `grep` | Cerca pattern con numeri di riga, case-insensitive |
| `mkdir` | Crea directory con directory padre se necessario |
