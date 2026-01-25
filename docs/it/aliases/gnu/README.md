---
description: Alias per GNU Coreutils su macOS. Usa versioni GNU di strumenti come ls, cp, mv, rm e altre utility Unix standard.
lang: it-IT
metaTitle: Alias GNU - Dotfiles (IT)
permalink: /aliases/gnu/
sidebar: true

meta:
  - name: keywords
    content: alias gnu, gnu coreutils, strumenti unix, alias shell macos, dotfiles, strumenti linea comando
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias per GNU Coreutils su macOS. Usa versioni GNU di strumenti come ls, cp, mv, rm e altre utility Unix standard.
  - name: twitter:title
    content: Alias GNU - Dotfiles
  - name: og:title
    content: Alias GNU - Dotfiles
  - name: og:description
    content: Alias per GNU Coreutils su macOS. Usa versioni GNU di strumenti come ls, cp, mv, rm e altre utility Unix standard.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias GNU

Alias per GNU Coreutils, fornendo versioni GNU degli strumenti standard Unix.

## Panoramica

Questi alias rendono le GNU Coreutils disponibili su macOS, dove le versioni BSD predefinite differiscono nel comportamento. Definiti in `gnu.aliases.sh`, vengono caricati automaticamente da chezmoi e forniscono comandi abbreviati per le utility piu utilizzate.

## Riferimento

### Gestione file

| Alias | Descrizione |
|-------|-------------|
| `basename` | Rimuovi directory e suffisso dai nomi file |
| `cp` | Copia file e directory |
| `dirname` | Rimuovi suffisso non-directory dai nomi file |
| `ln` | Crea collegamenti tra file |
| `ls` | Elenca contenuti directory |
| `mkdir` | Crea directory |
| `mv` | Sposta o rinomina file o directory |
| `rm` | Rimuovi file o directory |
| `rmdir` | Rimuovi directory vuote |

### Elaborazione testo

| Alias | Descrizione |
|-------|-------------|
| `awk` | Linguaggio di scansione ed elaborazione pattern |
| `cat` | Concatena e visualizza file |
| `cut` | Rimuovi sezioni da ogni riga dei file |
| `grep` | Stampa righe che corrispondono a un pattern |
| `head` | Output della prima parte dei file |
| `sed` | Editor di flusso per filtrare e trasformare testo |
| `sort` | Ordina righe dei file di testo |
| `tail` | Output dell'ultima parte dei file |
| `tr` | Traduci o elimina caratteri |

### Checksum e crittografia

| Alias | Descrizione |
|-------|-------------|
| `b2sum` | Stampa o controlla digest messaggi BLAKE2 |
| `cksum` | Stampa checksum CRC e conteggio byte |
| `md5sum` | Stampa o controlla digest MD5 |
| `sha1sum` | Stampa o controlla digest SHA1 |
| `sha256sum` | Stampa o controlla digest SHA256 |
| `sha512sum` | Stampa o controlla digest SHA512 |

### Altre utility

| Alias | Descrizione |
|-------|-------------|
| `base64` | Codifica o decodifica dati base64 |
| `csplit` | Dividi file in parti determinate dal contesto |
| `diff` | Confronta file riga per riga |
| `nl` | Numera righe dei file |
| `paste` | Unisci righe dei file |
| `split` | Dividi file in parti |
