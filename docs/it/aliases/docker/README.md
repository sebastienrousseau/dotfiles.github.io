---
description: Alias Docker completi per container, immagini, volumi, reti, Compose e Swarm. Aumenta la produttivita con comandi brevi.
lang: it-IT
metaTitle: Alias Docker - Dotfiles (IT)
permalink: /aliases/docker/
sidebar: true

meta:
  - name: keywords
    content: alias docker, scorciatoie docker, comandi container, alias docker compose, alias docker swarm, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Docker - Dotfiles
  - name: twitter:description
    content: Alias Docker completi per container, immagini, volumi, reti, Compose e Swarm.
  - name: og:title
    content: Alias Docker - Dotfiles
  - name: og:description
    content: Alias Docker completi per container, immagini, volumi, reti, Compose e Swarm.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias Docker

Ottimizza il flusso di lavoro container con scorciatoie intuitive per Docker, Compose e Swarm.

## Panoramica

Questi alias sono definiti in `docker.aliases.sh` e caricati automaticamente da chezmoi. Forniscono un set completo di scorciatoie per lo sviluppo Docker, coprendo container, immagini, volumi, reti, Docker Compose e operazioni Docker Swarm.

## Riferimento

### Comandi base

| Alias | Descrizione |
|-------|-------------|
| `dk` | Scorciatoia Docker |
| `dkv` | Mostra versione Docker |
| `dki` | Visualizza informazioni di sistema |
| `dkl` | Accedi al registro Docker |
| `dklo` | Disconnetti dal registro Docker |

### Operazioni container

| Alias | Descrizione |
|-------|-------------|
| `dkps` | Elenca container in esecuzione |
| `dkpsa` | Elenca tutti i container |
| `dkr` | Esegui comando in nuovo container |
| `dkri` | Esegui container interattivo |
| `dkrd` | Esegui container in background |
| `dks` | Avvia container |
| `dkst` | Ferma container |
| `dkrs` | Riavvia container |
| `dkrm` | Rimuovi container |
| `dkrma` | Rimuovi tutti i container |

### Immagini

| Alias | Descrizione |
|-------|-------------|
| `dki` | Elenca immagini |
| `dkia` | Elenca tutte le immagini |
| `dkb` | Costruisci un'immagine |
| `dkbt` | Costruisci e tagga un'immagine |
| `dkpu` | Invia immagine al registro |
| `dkrmi` | Rimuovi immagine |
| `dkprune` | Rimuovi dati non utilizzati |

### Docker Compose

| Alias | Descrizione |
|-------|-------------|
| `dc` | Scorciatoia Docker Compose |
| `dcu` | Crea e avvia container |
| `dcud` | Crea e avvia container in background |
| `dcd` | Ferma e rimuovi container |
| `dcr` | Riavvia servizi |
| `dcl` | Visualizza log |
| `dclf` | Segui log |
| `dcb` | Costruisci servizi |

### Gestione Swarm

| Alias | Descrizione |
|-------|-------------|
| `dksw` | Scorciatoia Swarm |
| `dkswi` | Inizializza Docker Swarm |
| `dkswj` | Unisciti a Docker Swarm |
| `dkswl` | Lascia lo Swarm |

## Flussi di lavoro comuni

### Sviluppo container

```bash
# Avvia un container di sviluppo
dkri --name dev-container -v $(pwd):/app -p 3000:3000 node:latest bash
```

### Sviluppo Docker Compose

```bash
# Avvia servizi, ricostruisci se necessario, in background
dcb && dcud
```

### Pulizia

```bash
# Rimuovi tutti i container fermati, reti non utilizzate e immagini dangling
dkrm $(dk ps -aq --filter status=exited) && dknp && dkrmi_dangling
```
