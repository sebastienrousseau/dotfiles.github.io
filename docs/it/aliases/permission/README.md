---
description: Alias shell per gestione permessi file e directory. Scorciatoie per chmod, chown, chgrp e pattern comuni come 755 e 644.
lang: it-IT
metaTitle: Alias Permission - Dotfiles (IT)
permalink: /aliases/permission/
sidebar: true

meta:
  - name: keywords
    content: alias permessi, chmod, chown, chgrp, permessi file, permessi unix, alias shell, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Permission - Dotfiles
  - name: twitter:description
    content: Alias shell per gestione permessi file e directory con scorciatoie per pattern comuni.
  - name: og:title
    content: Alias Permission - Dotfiles
  - name: og:description
    content: Alias shell per gestione permessi file e directory con scorciatoie per pattern comuni.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias Permission

Scorciatoie per gestire permessi, proprieta e gruppi di file.

## Panoramica

Questi alias sono definiti in `permission.aliases.sh` e caricati automaticamente da chezmoi. Semplificano le operazioni comuni sui permessi file.

## Riferimento

### Pattern permessi numerici

| Alias | Permessi | Descrizione |
|-------|----------|-------------|
| `000` | `----------` | Nessun permesso per nessuno |
| `400` | `r--------` | Solo lettura per proprietario |
| `444` | `r--r--r--` | Solo lettura per tutti |
| `600` | `rw-------` | Lettura/scrittura per proprietario |
| `644` | `rw-r--r--` | Lettura/scrittura proprietario, lettura altri |
| `666` | `rw-rw-rw-` | Lettura/scrittura per tutti |
| `755` | `rwxr-xr-x` | Completo proprietario, lettura/esecuzione altri |
| `764` | `rwxrw-r--` | Completo proprietario, lettura/scrittura gruppo |
| `777` | `rwxrwxrwx` | Permessi completi per tutti |

### Comandi chmod

| Alias | Descrizione |
|-------|-------------|
| `chmod` | Cambia bit modalita file |
| `chmodr` | Cambia permessi ricorsivamente |
| `chmodu` | Cambia permessi per utente corrente |
| `chmox` | Rendi file eseguibile |

### Comandi chown

| Alias | Descrizione |
|-------|-------------|
| `chown` | Cambia proprietario e gruppo file |
| `chownr` | Cambia proprietario ricorsivamente |
| `chownu` | Cambia proprietario a utente corrente |

### Comandi chgrp

| Alias | Descrizione |
|-------|-------------|
| `chgrp` | Cambia proprieta gruppo |
| `chgrpr` | Cambia gruppo ricorsivamente |
| `chgrpu` | Cambia gruppo a utente corrente |
