---
description: Scorciatoie per il cercatore file fd. Alias veloci per le attivita comuni di ricerca file tra directory e tipi di file.
lang: it-IT
metaTitle: Alias Find - Dotfiles (IT)
permalink: /aliases/find/
sidebar: true

meta:
  - name: keywords
    content: alias find, cercatore file fd, ricerca file, alias shell, dotfiles, strumenti linea comando
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Scorciatoie per il cercatore file fd. Alias veloci per le attivita comuni di ricerca file tra directory e tipi di file.
  - name: twitter:title
    content: Alias Find - Dotfiles
  - name: og:title
    content: Alias Find - Dotfiles
  - name: og:description
    content: Scorciatoie per il cercatore file fd. Alias veloci per le attivita comuni di ricerca file tra directory e tipi di file.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias Find

Cerca file e directory con la potenza di fd.

## Panoramica

Questi alias forniscono scorciatoie per il cercatore file `fd`, un'alternativa veloce e user-friendly a `find`. Definiti in `find.aliases.sh`, vengono caricati automaticamente da chezmoi come parte della configurazione Universal Dotfiles.

## Riferimento

| Alias | Descrizione |
|-------|-------------|
| `fd` | Alias predefinito per `fd --color always` - elenca file con output colorato |
| `fda` | Elenca file con percorsi assoluti |
| `fdc` | Elenca file con ricerca case-insensitive |
| `fdd` | Elenca file con dettagli |
| `fde` | Elenca file con un'estensione specificata |
| `fdf` | Elenca file seguendo i collegamenti simbolici |
| `fdh` | Elenca tutti i file, inclusi quelli nascosti |
| `fdn` | Elenca file che corrispondono a un glob specificato |
| `fdo` | Elenca file con informazioni proprietario |
| `fds` | Elenca file con dimensione |
| `fdu` | Elenca file con regole di esclusione |
| `fdv` | Mostra la versione di fd |
| `fdx` | Esegui un comando per ogni risultato della ricerca |
