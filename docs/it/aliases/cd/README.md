---
description: Alias per navigazione directory con segnalibri, tracciamento cronologia e scorciatoie intelligenti. Naviga nel filesystem piu velocemente.
lang: it-IT
metaTitle: Alias CD - Dotfiles (IT)
permalink: /aliases/cd/
sidebar: true

meta:
  - name: keywords
    content: cd, directory, navigazione, segnalibri, alias shell, dotfiles, terminale
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias per navigazione directory con segnalibri, tracciamento cronologia e scorciatoie intelligenti. Naviga nel filesystem piu velocemente.
  - name: twitter:title
    content: Alias CD - Dotfiles
  - name: og:title
    content: Alias CD - Dotfiles
  - name: og:description
    content: Alias per navigazione directory con segnalibri, tracciamento cronologia e scorciatoie intelligenti. Naviga nel filesystem piu velocemente.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias CD

Naviga nel filesystem piu velocemente. Segnalibri, cronologia e scorciatoie intelligenti.

## Panoramica

Questi alias sono definiti in `cd.aliases.sh` e caricati automaticamente da Chezmoi.

## Riferimento

### Scorciatoie navigazione

| Alias | Descrizione |
|:---|:---|
| `-` | Passa alla directory precedente |
| `..` | Sali di un livello |
| `...` | Sali di due livelli |
| `....` | Sali di tre livelli |
| `.....` | Sali di quattro livelli |
| `hom` | Vai alla directory home |

### Scorciatoie directory

| Alias | Percorso | Descrizione |
|:---|:---|:---|
| `app` | `~/Applications` | Applicazioni |
| `cod` | `~/Code` | Directory codice |
| `dsk` | `~/Desktop` | Scrivania |
| `doc` | `~/Documents` | Documenti |
| `dot` | `~/.dotfiles` | Dotfiles |
| `dwn` | `~/Downloads` | Download |
| `mus` | `~/Music` | Musica |
| `pic` | `~/Pictures` | Immagini |
| `vid` | `~/Videos` | Video |

### Directory di sistema

| Alias | Percorso | Descrizione |
|:---|:---|:---|
| `etc` | `/etc` | Configurazione sistema |
| `var` | `/var` | File variabili |
| `tmp` | `/tmp` | File temporanei |
| `usr` | `/usr` | Programmi utente |

### Segnalibri

| Comando | Alias | Descrizione |
|:---|:---|:---|
| `bookmark [name]` | `bm` | Crea segnalibro |
| `bookmark_list` | `bml` | Elenca segnalibri |
| `bookmark_update` | `bmu` | Aggiorna segnalibro |
| `bookmark_remove` | `bmr` | Elimina segnalibro |
| `goto <name>` | `bmg` | Vai al segnalibro |

```bash
bm work-project      # Crea segnalibro
bmg work-project     # Naviga al segnalibro
bml                  # Elenca tutti i segnalibri
```

### Cronologia

| Comando | Alias | Descrizione |
|:---|:---|:---|
| `dirhistory` | `dh` | Mostra cronologia directory |
| `lwd` | `ld` | Torna all'ultima directory |

### Avanzato

| Comando | Alias | Descrizione |
|:---|:---|:---|
| `mkcd <dir>` | `mcd` | Crea ed entra nella directory |
| `proj` | `pr` | Vai alla root del progetto |
| `pushd` | `pd` | Aggiungi directory allo stack |
| `popd` | — | Rimuovi dallo stack |
| `dirs` | — | Elenca stack directory |

## Configurazione

Personalizza il comportamento con variabili d'ambiente:

```bash
export SHOW_HIDDEN_FILES=true
export ENABLE_COLOR_OUTPUT=true
export AUTO_LIST_AFTER_CD=true
export MAX_RECENT_DIRS=15
export RESTORE_LAST_DIR=true
```

## Aiuto

Esegui `cdhelp` per vedere tutti i comandi o `cdversion` per info sulla versione.
