---
description: Semplifica la gestione dei permessi di file e directory con alias chmod. Scorciatoie rapide per pattern comuni come 755, 644 e altro.
lang: it-IT
metaTitle: Alias Chmod - Dotfiles (IT)
permalink: /aliases/chmod/
sidebar: true

meta:
  - name: keywords
    content: alias chmod, permessi file, scorciatoie shell, dotfiles, permessi unix
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Chmod - Dotfiles
  - name: twitter:description
    content: Semplifica la gestione dei permessi di file e directory con alias chmod.
  - name: og:title
    content: Alias Chmod - Dotfiles
  - name: og:description
    content: Semplifica la gestione dei permessi di file e directory con alias chmod.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias Chmod

Scorciatoie per gestire i permessi di file e directory.

## Panoramica

Gli alias chmod forniscono un modo semplificato per gestire i permessi di file e directory dalla linea di comando. Invece di ricordare codici numerici, usa alias intuitivi come `chmod_755` o `chmod_u+x` per impostare rapidamente la modalita di accesso necessaria.

Questi alias sono definiti in `chmod.aliases.sh` e caricati automaticamente da chezmoi.

## Riferimento

### Alias permessi comuni

| Alias | Permessi | Descrizione |
|-------|----------|-------------|
| `chmod_000` | `----------` | Nessun permesso per nessuno |
| `chmod_400` | `r--------` | Solo lettura per il proprietario |
| `chmod_444` | `r--r--r--` | Solo lettura per tutti |
| `chmod_600` | `rw-------` | Lettura/scrittura per il proprietario |
| `chmod_644` | `rw-r--r--` | Lettura/scrittura proprietario, solo lettura altri |
| `chmod_666` | `rw-rw-rw-` | Lettura/scrittura per tutti |
| `chmod_755` | `rwxr-xr-x` | Completo proprietario, lettura/esecuzione altri |
| `chmod_764` | `rwxrw-r--` | Completo proprietario, lettura/scrittura gruppo |
| `chmod_777` | `rwxrwxrwx` | Permessi completi per tutti |

### Alias permessi proprietario

| Alias | Descrizione |
|-------|-------------|
| `chmod_u+x` | Aggiungi permesso esecuzione al proprietario |
| `chmod_u-x` | Rimuovi permesso esecuzione al proprietario |
| `chmod_u+w` | Aggiungi permesso scrittura al proprietario |
| `chmod_u-w` | Rimuovi permesso scrittura al proprietario |
| `chmod_u+r` | Aggiungi permesso lettura al proprietario |
| `chmod_u-r` | Rimuovi permesso lettura al proprietario |

### Alias permessi gruppo

| Alias | Descrizione |
|-------|-------------|
| `chmod_g+x` | Aggiungi permesso esecuzione al gruppo |
| `chmod_g-x` | Rimuovi permesso esecuzione al gruppo |
| `chmod_g+w` | Aggiungi permesso scrittura al gruppo |
| `chmod_g-w` | Rimuovi permesso scrittura al gruppo |
| `chmod_g+r` | Aggiungi permesso lettura al gruppo |
| `chmod_g-r` | Rimuovi permesso lettura al gruppo |

### Alias permessi altri

| Alias | Descrizione |
|-------|-------------|
| `chmod_o+x` | Aggiungi permesso esecuzione agli altri |
| `chmod_o-x` | Rimuovi permesso esecuzione agli altri |
| `chmod_o+w` | Aggiungi permesso scrittura agli altri |
| `chmod_o-w` | Rimuovi permesso scrittura agli altri |
| `chmod_o+r` | Aggiungi permesso lettura agli altri |
| `chmod_o-r` | Rimuovi permesso lettura agli altri |

### Alias tipo file

| Alias | Descrizione |
|-------|-------------|
| `chmod_755d` | Imposta permessi directory a `rwxr-xr-x` |
| `chmod_644f` | Imposta permessi file a `rw-r--r--` |

### Funzione permessi ricorsiva

La funzione `change_permission` applica permessi ricorsivamente con richiesta di conferma:

```bash
change_permission 755 /path/to/directory -R
```
