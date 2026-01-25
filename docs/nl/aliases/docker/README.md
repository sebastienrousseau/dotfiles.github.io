---
title: "Docker-aliassen: Stroomlijn je container-workflow"
description: "Uitgebreide Docker-aliassen voor containers, images, volumes, netwerken, Compose en Swarm. Verhoog productiviteit met korte commando's."
lang: nl-NL
metaTitle: "Docker-aliassen | Dotfiles"
permalink: /nl/aliases/docker/
sidebar: true
meta:
  - name: keywords
    content: "docker aliassen, docker snelkoppelingen, container commando's, docker compose aliassen, docker swarm aliassen, dotfiles"
---

# Docker-aliassen

Stroomlijn je container-workflow met intuitive snelkoppelingen voor Docker, Compose en Swarm.

![Dotfiles banner][banner]

## Overzicht

Deze aliassen zijn gedefinieerd in `docker.aliases.sh` en worden automatisch geladen door chezmoi. Ze bieden een uitgebreide set snelkoppelingen voor Docker-ontwikkeling, inclusief containers, images, volumes, netwerken, Docker Compose en Docker Swarm-operaties.

## Referentie

### Basiscommando's

| Alias | Beschrijving |
|-------|-------------|
| `dk` | Docker-snelkoppeling |
| `dkv` | Toon Docker-versie |
| `dki` | Toon systeembrede informatie |
| `dkl` | Inloggen bij Docker-register |
| `dklo` | Uitloggen van Docker-register |

### Container-operaties

| Alias | Beschrijving |
|-------|-------------|
| `dkps` | Lijst draaiende containers |
| `dkpsa` | Lijst alle containers |
| `dkr` | Voer commando uit in nieuwe container |
| `dkri` | Voer interactieve container uit |
| `dkrd` | Voer container uit op achtergrond |
| `dks` | Start container |
| `dkst` | Stop container |
| `dkrs` | Herstart container |
| `dkp` | Pauzeer container |
| `dkup` | Hervat container |
| `dkrm` | Verwijder container |
| `dkrma` | Verwijder alle containers |
| `dkrmf` | Forceer verwijderen container |

### Container-inspectie

| Alias | Beschrijving |
|-------|-------------|
| `dkin` | Inspecteer container |
| `dkl` | Toon containerlogs |
| `dklf` | Volg containerlogs |
| `dkt` | Toon draaiende processen in container |
| `dkst` | Toon container-resourcegebruik |
| `dkdf` | Toon container-bestandssysteemwijzigingen |
| `dkpl` | Pull image van register |
| `dkex` | Voer commando uit in container |
| `dkeit` | Voer interactief commando uit |

### Images

| Alias | Beschrijving |
|-------|-------------|
| `dki` | Lijst images |
| `dkia` | Lijst alle images |
| `dkb` | Bouw een image |
| `dkbt` | Bouw en tag een image |
| `dkpu` | Push image naar register |
| `dkrmi` | Verwijder image |
| `dkh` | Toon image-geschiedenis |
| `dksv` | Sla image op naar tar-archief |
| `dkld` | Laad image van tar-archief |
| `dkprune` | Verwijder ongebruikte data |
| `dkprunea` | Verwijder alle ongebruikte data |
| `dkrmi_dangling` | Verwijder losse images |

### Volumes

| Alias | Beschrijving |
|-------|-------------|
| `dkv` | Volume-snelkoppeling |
| `dkvls` | Lijst volumes |
| `dkvc` | Maak volume |
| `dkvi` | Inspecteer volume |
| `dkvrm` | Verwijder volume |
| `dkvp` | Verwijder ongebruikte volumes |

### Netwerken

| Alias | Beschrijving |
|-------|-------------|
| `dkn` | Netwerk-snelkoppeling |
| `dknls` | Lijst netwerken |
| `dknc` | Maak netwerk |
| `dkni` | Inspecteer netwerk |
| `dknrm` | Verwijder netwerk |
| `dknp` | Verwijder ongebruikte netwerken |
| `dkncon` | Verbind container met netwerk |
| `dkndis` | Verbreek container van netwerk |

### Docker Compose

| Alias | Beschrijving |
|-------|-------------|
| `dc` | Docker Compose-snelkoppeling |
| `dcu` | Maak en start containers |
| `dcud` | Maak en start containers op achtergrond |
| `dcd` | Stop en verwijder containers |
| `dcdv` | Stop en verwijder containers en volumes |
| `dcr` | Herstart services |
| `dcs` | Stop services |
| `dcsta` | Start services |
| `dcp` | Pauzeer services |
| `dcup` | Hervat services |
| `dcps` | Lijst containers |
| `dcl` | Bekijk logs |
| `dclf` | Volg logs |
| `dcex` | Voer commando uit in container |
| `dcb` | Bouw services |

### Swarm-beheer

| Alias | Beschrijving |
|-------|-------------|
| `dksw` | Swarm-snelkoppeling |
| `dkswi` | Initialiseer Docker Swarm |
| `dkswj` | Join Docker Swarm |
| `dkswjt` | Beheer join-tokens |
| `dkswl` | Verlaat de Swarm |
| `dkswu` | Update Swarm |

## Gangbare workflows

### Container-ontwikkeling

```bash
# Start een ontwikkelcontainer
dkri --name dev-container -v $(pwd):/app -p 3000:3000 node:latest bash
```

### Docker Compose-ontwikkeling

```bash
# Start services, herbouw indien nodig, op achtergrond
dcb && dcud
```

### Opschonen

```bash
# Verwijder alle gestopte containers, ongebruikte netwerken en losse images
dkrm $(dk ps -aq --filter status=exited) && dknp && dkrmi_dangling
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
