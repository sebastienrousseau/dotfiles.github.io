---
description: Umfassende Docker-Aliase für Container, Images, Volumes, Netzwerke, Compose und Swarm. Produktivität steigern mit kurzen Befehlen.
lang: de-DE
metaTitle: Docker Aliase - Dotfiles (DE)
permalink: /de/aliases/docker/
sidebar: true

meta:
  - name: keywords
    content: docker aliase, docker verknüpfungen, container befehle, docker compose aliase, docker swarm aliase, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Umfassende Docker-Aliase für Container, Images, Volumes, Netzwerke, Compose und Swarm.
  - name: twitter:title
    content: Docker Aliase - Dotfiles
  - name: og:title
    content: Docker Aliase - Dotfiles
  - name: og:description
    content: Umfassende Docker-Aliase für Container, Images, Volumes, Netzwerke, Compose und Swarm.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Docker Aliase

Optimieren Sie Ihren Container-Workflow mit intuitiven Verknüpfungen für Docker, Compose und Swarm.

## Übersicht

Diese Aliase sind in `docker.aliases.sh` definiert und werden automatisch von Chezmoi geladen.

## Referenz

### Grundlegende Befehle

| Alias | Beschreibung |
|:---|:---|
| `dk` | Docker-Verknüpfung |
| `dkv` | Docker-Version anzeigen |
| `dki` | Systemweite Informationen anzeigen |
| `dkl` | Bei Docker-Registry anmelden |
| `dklo` | Von Docker-Registry abmelden |

### Container-Operationen

| Alias | Beschreibung |
|:---|:---|
| `dkps` | Laufende Container auflisten |
| `dkpsa` | Alle Container auflisten |
| `dkr` | Befehl in neuem Container ausführen |
| `dkri` | Interaktiven Container starten |
| `dkrd` | Container im Hintergrund starten |
| `dks` | Container starten |
| `dkst` | Container stoppen |
| `dkrs` | Container neu starten |
| `dkp` | Container pausieren |
| `dkup` | Container fortsetzen |
| `dkrm` | Container entfernen |
| `dkrma` | Alle Container entfernen |
| `dkrmf` | Container-Entfernung erzwingen |

### Container-Inspektion

| Alias | Beschreibung |
|:---|:---|
| `dkin` | Container inspizieren |
| `dklf` | Container-Logs folgen |
| `dkt` | Laufende Prozesse im Container anzeigen |
| `dkdf` | Container-Dateisystemänderungen anzeigen |
| `dkpl` | Image aus Registry ziehen |
| `dkex` | Befehl im Container ausführen |
| `dkeit` | Interaktiven Befehl ausführen |

### Images

| Alias | Beschreibung |
|:---|:---|
| `dkia` | Alle Images auflisten |
| `dkb` | Image bauen |
| `dkbt` | Image bauen und taggen |
| `dkpu` | Image zur Registry pushen |
| `dkrmi` | Image entfernen |
| `dkh` | Image-Verlauf anzeigen |
| `dksv` | Image als Tar-Archiv speichern |
| `dkld` | Image aus Tar-Archiv laden |
| `dkprune` | Unbenutzte Daten entfernen |
| `dkprunea` | Alle unbenutzten Daten entfernen |
| `dkrmi_dangling` | Dangling Images entfernen |

### Volumes

| Alias | Beschreibung |
|:---|:---|
| `dkvls` | Volumes auflisten |
| `dkvc` | Volume erstellen |
| `dkvi` | Volume inspizieren |
| `dkvrm` | Volume entfernen |
| `dkvp` | Unbenutzte Volumes entfernen |

### Netzwerke

| Alias | Beschreibung |
|:---|:---|
| `dknls` | Netzwerke auflisten |
| `dknc` | Netzwerk erstellen |
| `dkni` | Netzwerk inspizieren |
| `dknrm` | Netzwerk entfernen |
| `dknp` | Unbenutzte Netzwerke entfernen |
| `dkncon` | Container mit Netzwerk verbinden |
| `dkndis` | Container vom Netzwerk trennen |

### Docker Compose

| Alias | Beschreibung |
|:---|:---|
| `dc` | Docker Compose-Verknüpfung |
| `dcu` | Container erstellen und starten |
| `dcud` | Container im Hintergrund erstellen und starten |
| `dcd` | Container stoppen und entfernen |
| `dcdv` | Container und Volumes stoppen und entfernen |
| `dcr` | Services neu starten |
| `dcs` | Services stoppen |
| `dcsta` | Services starten |
| `dcps` | Container auflisten |
| `dcl` | Logs anzeigen |
| `dclf` | Logs folgen |
| `dcex` | Befehl im Container ausführen |
| `dcb` | Services bauen |
| `dcpull` | Service-Images ziehen |
| `dcpush` | Service-Images pushen |
| `dcrm` | Gestoppte Container entfernen |

### Swarm-Management

| Alias | Beschreibung |
|:---|:---|
| `dksw` | Swarm-Verknüpfung |
| `dkswi` | Docker Swarm initialisieren |
| `dkswj` | Docker Swarm beitreten |
| `dkswjt` | Join-Tokens verwalten |
| `dkswl` | Swarm verlassen |
| `dkswu` | Swarm aktualisieren |

### Services

| Alias | Beschreibung |
|:---|:---|
| `dksrvls` | Services auflisten |
| `dksrvc` | Service erstellen |
| `dksrvi` | Service inspizieren |
| `dksrvps` | Tasks des Services auflisten |
| `dksrvl` | Service-Logs anzeigen |
| `dksrvrm` | Service entfernen |
| `dksrvsc` | Service skalieren |
| `dksrvu` | Service aktualisieren |

### Stacks

| Alias | Beschreibung |
|:---|:---|
| `dkstkls` | Stacks auflisten |
| `dkstkd` | Stack deployen |
| `dkstkps` | Tasks im Stack auflisten |
| `dkstksrv` | Services im Stack auflisten |
| `dkstkrm` | Stack entfernen |

### Nodes

| Alias | Beschreibung |
|:---|:---|
| `dknls` | Nodes auflisten |
| `dkni` | Node inspizieren |
| `dknp` | Node zum Manager promoten |
| `dknd` | Node zum Worker degradieren |
| `dknrm` | Node entfernen |
| `dknu` | Node aktualisieren |
| `dknps` | Tasks auf Node auflisten |
