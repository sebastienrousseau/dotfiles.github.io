---
description: Alternative Rust moderne agli strumenti Unix legacy. eza per ls, bat per cat, ripgrep per grep con supporto fallback intelligente.
lang: it-IT
metaTitle: Alias Modern - Dotfiles (IT)
permalink: /aliases/modern/
sidebar: true

meta:
  - name: keywords
    content: alias modern, strumenti rust, eza, bat, ripgrep, alternative unix, alias shell, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Modern - Dotfiles
  - name: twitter:description
    content: Alternative Rust moderne a strumenti Unix legacy con supporto fallback intelligente.
  - name: og:title
    content: Alias Modern - Dotfiles
  - name: og:description
    content: Alternative Rust moderne a strumenti Unix legacy con supporto fallback intelligente.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias Modern

Sostituzioni Rust moderne per strumenti Unix legacy con fallback intelligente.

## Panoramica

Questi alias sono definiti in `modern.aliases.sh` e caricati automaticamente da chezmoi. Forniscono alternative veloci basate su Rust ai comandi Unix classici mantenendo la compatibilita con i fallback standard quando gli strumenti moderni non sono installati.

## Riferimento

### Elenco file (eza)

Se `eza` e installato (sostituisce `ls`):

| Alias | Descrizione |
|-------|-------------|
| `ls` | Elenca file (`eza --icons`) |
| `ll` | Elenco lungo (`eza -alF`) |
| `la` | Elenca tutti (`eza -a`) |
| `lt` | Elenco ad albero (`eza --tree`) |

Se `eza` non e disponibile, ritorna al `ls` standard.

### Contenuto file (bat)

Se `bat` e installato (sostituisce `cat`):

| Alias | Descrizione |
|-------|-------------|
| `cat` | Visualizza contenuto file con evidenziazione sintassi |

### Ricerca (ripgrep)

Se `rg` e installato (sostituisce `grep`):

| Alias | Descrizione |
|-------|-------------|
| `grep` | Cerca con ripgrep |
