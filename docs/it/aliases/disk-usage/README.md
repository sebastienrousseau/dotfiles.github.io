---
description: Alias shell per monitoraggio uso disco. Visualizza dimensioni file, trova directory grandi e gestisci lo storage in modo efficiente.
lang: it-IT
metaTitle: Alias Disk Usage - Dotfiles (IT)
permalink: /aliases/disk-usage/
sidebar: true

meta:
  - name: keywords
    content: alias uso disco, comando du, monitoraggio storage, dimensione file, dotfiles, shell, bash, zsh
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias shell per monitoraggio uso disco. Visualizza dimensioni file, trova directory grandi e gestisci lo storage in modo efficiente.
  - name: twitter:title
    content: Alias Disk Usage - Dotfiles
  - name: og:title
    content: Alias Disk Usage - Dotfiles
  - name: og:description
    content: Alias shell per monitoraggio uso disco. Visualizza dimensioni file, trova directory grandi e gestisci lo storage in modo efficiente.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias Disk Usage

Monitora e analizza rapidamente il consumo di storage nel tuo filesystem.

## Panoramica

Gli alias disk usage forniscono comandi semplificati per monitorare il consumo di storage su sistemi Unix-based. Definiti in `disk-usage.aliases.sh`, queste scorciatoie semplificano le operazioni comuni di `du` e vengono caricate automaticamente da chezmoi come parte della configurazione Dotfiles.

## Riferimento

La seguente tabella elenca tutti gli alias disk usage disponibili e le loro funzioni.

| Alias | Descrizione |
|-------|-------------|
| `du` | Visualizza l'uso disco della directory corrente |
| `du1` | Mostra dimensione file e directory nella directory corrente |
| `duh` | Mostra dimensione file e directory in formato leggibile |
| `ducks` | Visualizza i 10 file e directory piu grandi nella directory corrente |
| `dus` | Mostra dimensione file in formato leggibile, ordinati per dimensione |
| `dusym` | Mostra dimensione file e directory, inclusi symlink |
| `dut` | Mostra la dimensione totale della directory corrente |
