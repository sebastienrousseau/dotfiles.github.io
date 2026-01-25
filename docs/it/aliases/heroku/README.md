---
description: Alias CLI Heroku per app, componenti aggiuntivi, pipeline, database e distribuzione. Oltre 200 scorciatoie per lo sviluppo PaaS.
lang: it-IT
metaTitle: Alias Heroku - Dotfiles (IT)
permalink: /aliases/heroku/
sidebar: true

meta:
  - name: keywords
    content: alias heroku, cli heroku, deployment paas, comandi cloud, alias shell, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias CLI Heroku per app, componenti aggiuntivi, pipeline, database e distribuzione.
  - name: twitter:title
    content: Alias Heroku - Dotfiles
  - name: og:title
    content: Alias Heroku - Dotfiles
  - name: og:description
    content: Alias CLI Heroku per app, componenti aggiuntivi, pipeline, database e distribuzione.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias Heroku

Ottimizza il workflow Heroku con scorciatoie per ogni operazione CLI.

## Panoramica

Questi alias sono definiti in `heroku.aliases.sh` e caricati automaticamente da chezmoi. Forniscono oltre 200 scorciatoie per la CLI Heroku coprendo app, addon, pipeline, database, domini e molto altro.

## Riferimento

### Core

| Alias | Descrizione |
|-------|-------------|
| `hkk` | Scorciatoia CLI Heroku |
| `hkh` | Visualizza aiuto |
| `hkl` | Elenca tutti i comandi |
| `hku` | Aggiorna CLI Heroku |

### App

| Alias | Descrizione |
|-------|-------------|
| `hkapc` | Crea nuova app |
| `hkapi` | Mostra informazioni app |
| `hkapk` | Elimina permanentemente app |
| `hkapl` | Elenca le tue app |
| `hkapo` | Apri app nel browser |
| `hkapr` | Rinomina app |

### Database

| Alias | Descrizione |
|-------|-------------|
| `hkpg` | Mostra info database |
| `hkpgbk` | Elenca backup database |
| `hkpgbkc` | Cattura nuovo backup |
| `hkpgbkr` | Ripristina backup |
| `hkpgpsql` | Apri shell psql |

### Log e monitoraggio

| Alias | Descrizione |
|-------|-------------|
| `hklg` | Visualizza output log recenti |
| `hkdyk` | Ferma dyno app |
| `hkdyrs` | Riavvia dyno app |
| `hkdysc` | Scala quantita dyno |

### Pipeline

| Alias | Descrizione |
|-------|-------------|
| `hkpipe` | Elenca pipeline |
| `hkpipec` | Crea nuova pipeline |
| `hkpipep` | Promuovi alla pipeline downstream |

### Addon

| Alias | Descrizione |
|-------|-------------|
| `hkadc` | Crea nuovo addon |
| `hkadi` | Mostra info addon |
| `hkadk` | Elimina addon |
| `hkadl` | Elenca addon |
