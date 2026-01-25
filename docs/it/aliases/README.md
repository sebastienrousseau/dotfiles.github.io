---
description: Alias shell che creano scorciatoie per i comandi usati frequentemente. Aumenta la produttivita riducendo la digitazione nel tuo flusso di lavoro quotidiano.
lang: it-IT
metaTitle: Alias - Dotfiles (IT)
permalink: /aliases/

meta:
  - name: keywords
    content: alias, shell, bash, zsh, scorciatoie, comandi, dotfiles, chezmoi, produttivita, terminale
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias shell che creano scorciatoie per i comandi usati frequentemente. Aumenta la produttivita riducendo la digitazione nel tuo flusso di lavoro quotidiano.
  - name: twitter:title
    content: Alias - Dotfiles
  - name: og:title
    content: Alias - Dotfiles
  - name: og:description
    content: Alias shell che creano scorciatoie per i comandi usati frequentemente. Aumenta la produttivita riducendo la digitazione nel tuo flusso di lavoro quotidiano.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias

Alias shell modulari gestiti da **Chezmoi**. Scrivi meno, fai di piu.

## Scopri

Gli alias sono organizzati in file piccoli e focalizzati, uno per ogni strumento o flusso di lavoro. Durante `chezmoi apply`, tutti i file alias vengono aggregati in `~/.config/shell/aliases.sh` e caricati dalla tua shell.

## Inizia

### Aggiungi un alias

1. Crea un nuovo file (es., `mytool/mytool.aliases.sh`)
2. Definisci i tuoi alias:
   ```bash
   alias mycmd="echo 'Hello World'"
   ```
3. Applica le modifiche:
   ```bash
   chezmoi apply
   ```

## Riferimento

Sfoglia gli alias per categoria:

<!-- markdownlint-disable MD013-->

| Categoria | Descrizione |
| :--- | :--- |
| [AI](ai/) | Scorciatoie per assistenti AI e strumenti LLM |
| [Archives](archives/) | Comprimi ed estrai file |
| [CD](cd/) | Naviga nel file system |
| [Chmod](chmod/) | Modifica i permessi dei file |
| [Clear](clear/) | Pulisci lo schermo del terminale |
| [Compliance](compliance/) | Strumenti SOC2 e privacy |
| [Configuration](configuration/) | Gestisci dotfiles e configurazione shell |
| [Default](default/) | Alias shell predefiniti |
| [Diagnostics](diagnostics/) | Auto-riparazione e controlli di salute |
| [Dig](dig/) | Interroga server DNS |
| [Disk Usage](disk-usage/) | Visualizza informazioni sull'uso del disco |
| [Docker](docker/) | Gestione container |
| [Editor](editor/) | Configura editor di testo |
| [Find](find/) | Cerca file e directory |
| [Fonts](fonts/) | Gestione cache font |
| [GCloud](gcloud/) | Strumenti Google Cloud SDK |
| [Git](git/) | Controllo versione Git |
| [GNU](gnu/) | Utility core GNU |
| [Go](go/) | Strumenti linguaggio Go |
| [Heroku](heroku/) | Heroku CLI |
| [Installer](installer/) | Bootstrap e deployment |
| [Interactive](interactive/) | Comportamento shell interattiva |
| [Kubernetes](kubernetes/) | Kubernetes, Helm, K9s |
| [Legal](legal/) | Strumenti scansione licenze |
| [macOS](macOS/) | Impostazioni specifiche macOS |
| [Make](make/) | Utility GNU Make |
| [Mkdir](mkdir/) | Crea directory |
| [Modern](modern/) | Sostituti di strumenti basati su Rust |
| [NPM](npm/) | Gestore pacchetti Node.js |
| [Permission](permission/) | Permessi file |
| [PNPM](pnpm/) | Gestore pacchetti PNPM |
| [PS](ps/) | Stato processi |
| [Python](python/) | Utility Python |
| [Rsync](rsync/) | Trasferimento file efficiente |
| [Rust](rust/) | Strumenti programmazione Rust |
| [Security](security/) | Immutabilita e firma |
| [Subversion](subversion/) | Controllo versione SVN |
| [Sudo](sudo/) | Operazioni superuser |
| [Terraform](terraform/) | Infrastructure as code |
| [Tmux](tmux/) | Multiplexer terminale |
| [Update](update/) | Aggiorna dotfiles |
| [UUID](uuid/) | Genera UUID |
| [Wget](wget/) | Downloader da linea di comando |
| [Yarn](yarn/) | Gestore pacchetti Yarn |

<!-- markdownlint-enable MD013-->
