---
description: Funzioni shell che migliorano la tua esperienza con il terminale. Utility per test API, gestione file, operazioni di sistema e altro.
lang: it-IT
metaTitle: Funzioni - Dotfiles (IT)
permalink: /functions/

meta:
  - name: keywords
    content: funzioni, shell, bash, zsh, dotfiles, produttivita, utility, api, file, sistema
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Funzioni shell che migliorano la tua esperienza con il terminale. Utility per test API, gestione file, operazioni di sistema e altro.
  - name: twitter:title
    content: Funzioni - Dotfiles
  - name: og:title
    content: Funzioni - Dotfiles
  - name: og:description
    content: Funzioni shell che migliorano la tua esperienza con il terminale. Utility per test API, gestione file, operazioni di sistema e altro.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Funzioni

Utility shell per aumentare la tua produttivita su macOS, Linux e Windows.

## Scopri

Le funzioni sono definite come singoli file `.sh`. Durante `chezmoi apply`, vengono aggregate in `~/.config/shell/functions.sh` e caricate dalla tua shell.

## Inizia

### Aggiungi una funzione

1. Crea un nuovo file `.sh` (es., `myfunc.sh`)
2. Aggiungi la definizione della tua funzione
3. Applica le modifiche:
   ```bash
   chezmoi apply
   ```

## Riferimento

### Test API

| Funzione | Descrizione | Utilizzo |
|:---|:---|:---|
| `apihealth` | Controlla lo stato di una o piu API | `apihealth [OPTIONS] URL [URL ...]` |
| `apilatency` | Monitora il tempo di risposta API | `apilatency URL [COUNT] [INTERVAL]` |
| `apiload` | Esegui test di carico base | `apiload URL [REQUESTS] [DELAY]` |
| `httpdebug` | Debug richieste HTTP con timing | `httpdebug [options] [url]` |

### Utility HTTP

| Funzione | Descrizione | Utilizzo |
|:---|:---|:---|
| `curlheader` | Visualizza header HTTP | `curlheader [header] [url]` |
| `curlstatus` | Controlla codice stato HTTP | `curlstatus [url]` |
| `curltime` | Misura metriche timing HTTP | `curltime [url]` |
| `view-source` | Visualizza codice sorgente sito web | `view-source URL` |
| `whoisport` | Trova processo che usa una porta | `whoisport PORT` |

### Gestione file

| Funzione | Descrizione | Utilizzo |
|:---|:---|:---|
| `backup` | Crea backup con timestamp | `backup [--max-size SIZE] [--keep N] <files...>` |
| `encode64` / `decode64` | Codifica e decodifica Base64 | `encode64 "string"` |
| `extract` | Estrai formati archivio | `extract [file]` |
| `hexdump` | Visualizza file in formato hex | `hexdump [file] [lines]` |
| `ren` | Rinomina estensioni in batch | `ren OLD_EXT NEW_EXT` |
| `size` | Controlla dimensione file o directory | `size [file/directory]` |
| `zipf` | Crea archivi ZIP | `zipf [folder]` |

### Nomi file

| Funzione | Descrizione | Utilizzo |
|:---|:---|:---|
| `kebabcase` | Converti in kebab-case | `kebabcase <files...>` |
| `lowercase` | Converti in minuscolo | `lowercase <files...>` |
| `sentencecase` | Converti in sentence case | `sentencecase <files...>` |
| `snakecase` | Converti in snake_case | `snakecase <files...>` |
| `titlecase` | Converti in Title Case | `titlecase <files...>` |
| `uppercase` | Converti in MAIUSCOLO | `uppercase <files...>` |

### Utility di sistema

| Funzione | Descrizione | Utilizzo |
|:---|:---|:---|
| `caffeine` | Impedisci al sistema di andare in sleep | `caffeine [command]` |
| `environment` | Rileva ambiente OS | `environment` |
| `freespace` | Pulisci spazio disco purgabile | `freespace [disk]` |
| `hiddenfiles` | Attiva/disattiva file nascosti nel Finder | `hiddenfiles [show\|hide]` |
| `hostinfo` | Visualizza informazioni host | `hostinfo` |
| `hstats` | Visualizza statistiche uso comandi | `hstats` |
| `last` | Elenca file modificati di recente | `last [minutes]` |
| `logout` | Logout multipiattaforma | `logout [--force]` |
| `myproc` | Elenca processi utente | `myproc` |
| `stopwatch` | Cronometro da terminale | `stopwatch` |
| `sysinfo` | Visualizza informazioni di sistema | `sysinfo` |

### Comandi Caffeine

Impedisci al sistema di andare in sleep o attivare lo screensaver.

| Comando | Descrizione |
|:---|:---|
| `caffeine daemon` | Avvia il daemon caffeine |
| `caffeine status` | Controlla se il daemon e in esecuzione |
| `caffeine start` | Mantieni lo schermo attivo |
| `caffeine stop` | Permetti allo schermo di andare in sleep |
| `caffeine toggle` | Attiva/disattiva schermo attivo |
| `caffeine shutdown` | Arresta il daemon |

Funziona su macOS (`caffeinate` nativo), Linux (`xdg-screensaver`) e Windows (PowerShell).

### Sicurezza

| Funzione | Descrizione | Utilizzo |
|:---|:---|:---|
| `genpass` | Genera password sicure | `genpass [num_blocks] [separator]` |
| `keygen` | Genera coppie di chiavi SSH | `keygen [name] [email] [type] [bits]` |

### Navigazione

| Funzione | Descrizione | Utilizzo |
|:---|:---|:---|
| `cdls` | Cambia directory ed elenca | `cdls [directory]` |
| `goto` | Navigazione rapida directory | `goto [directory]` |
| `mount_read_only` | Monta sola lettura come lettura-scrittura | `mount_read_only [image]` |
| `rd` | Rimuovi directory | `rd [directory]` |
| `remove_disk` | Espelli disco in sicurezza | `remove_disk [disk]` |

### Varie

| Funzione | Descrizione | Utilizzo |
|:---|:---|:---|
| `matrix` | Effetti Matrix nel terminale | `matrix [options]` |
| `prependpath` | Aggiungi directory al PATH | `prependpath [directory]` |
| `ql` | Apri in macOS Quick Look | `ql [file]` |
| `vscode` | Apri in VS Code | `vscode [file]` |

## Compatibilita

- **macOS** — Supporto completo con utility specifiche macOS
- **Linux** — Compatibile con le distribuzioni comuni
- **Windows** — Supporto tramite WSL, Cygwin o Git Bash

## Aiuto

Ogni funzione include documentazione tramite `--help`:

```bash
apihealth --help
```
