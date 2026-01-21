---
description: Docker Aliase für Dotfiles
lang: de-DE
metaTitle: Docker Aliase - Dotfiles (DE)
permalink: /de/aliases/docker/
---

# Docker Aliase

Verwalten Sie Docker Aliase. Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `docker.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.

## ⚡ Aliase

Dieser Code bietet einen umfassenden Satz von Aliasen für die Docker-Entwicklung
unter Verwendung von `docker`, `docker-compose` und Docker Swarm Befehlen.

#### Grundlegende Befehle

- `dk` - Docker Kurzbefehl
- `dkv` - Docker Version anzeigen
- `dki` - Systemweite Informationen anzeigen
- `dkl` - Login in Docker Registry
- `dklo` - Logout aus Docker Registry

#### Container Operationen

- `dkps` - Laufende Container auflisten
- `dkpsa` - Alle Container auflisten
- `dkr` - Befehl in neuem Container ausführen
- `dkri` - Interaktiven Container ausführen
- `dkrd` - Container im Hintergrund ausführen
- `dks` - Container starten
- `dkst` - Container stoppen
- `dkrs` - Container neu starten
- `dkp` - Container pausieren
- `dkup` - Container fortsetzen
- `dkrm` - Container entfernen
- `dkrma` - Alle Container entfernen
- `dkrmf` - Container Entfernen erzwingen

#### Container Inspektion

- `dkin` - Container inspizieren
- `dkl` - Container-Logs anzeigen
- `dklf` - Container-Logs folgen
- `dkt` - Laufende Prozesse im Container anzeigen
- `dkst` - Container-Ressourcennutzung anzeigen
- `dkdf` - Container-Dateisystemänderungen anzeigen
- `dkpl` - Image aus Registry ziehen
- `dkex` - Befehl im Container ausführen
- `dkeit` - Interaktiven Befehl ausführen

#### Images

- `dki` - Images auflisten
- `dkia` - Alle Images auflisten
- `dkb` - Image bauen
- `dkbt` - Image bauen und taggen
- `dkpu` - Image zur Registry pushen
- `dkrmi` - Image entfernen
- `dkh` - Image-Verlauf anzeigen
- `dksv` - Image als Tar-Archiv speichern
- `dkld` - Image aus Tar-Archiv laden
- `dkprune` - Unbenutzte Daten entfernen
- `dkprunea` - Alle unbenutzten Daten entfernen
- `dkrmi_dangling` - Dangling Images entfernen

#### Volumes

- `dkv` - Volume Kurzbefehl
- `dkvls` - Volumes auflisten
- `dkvc` - Volume erstellen
- `dkvi` - Volume inspizieren
- `dkvrm` - Volume entfernen
- `dkvp` - Unbenutzte Volumes entfernen

#### Netzwerke

- `dkn` - Netzwerk Kurzbefehl
- `dknls` - Netzwerke auflisten
- `dknc` - Netzwerk erstellen
- `dkni` - Netzwerk inspizieren
- `dknrm` - Netzwerk entfernen
- `dknp` - Unbenutzte Netzwerke entfernen
- `dkncon` - Container mit Netzwerk verbinden
- `dkndis` - Container von Netzwerk trennen

#### System

- `dks` - System Kurzbefehl
- `dksdf` - Docker Speicherbelegung anzeigen
- `dksev` - Echtzeit-Events von Docker erhalten
- `dksi` - Systemweite Informationen anzeigen
- `dksp` - Unbenutzte Daten entfernen
- `dkspa` - Alle unbenutzten Daten entfernen
- `dkcon` - Kontextverwaltung

#### Verschiedenes

- `dkcp` - Dateien zwischen Container und lokalem Dateisystem kopieren
- `dkw` - Blockieren bis Container stoppt
- `dkk` - Container killen
- `dkatt` - An Container anhängen
- `dkd` - Änderungen am Container-Dateisystem inspizieren
- `dkcom` - Image aus Container erstellen
- `dktag` - Image taggen
- `dkexp` - Container-Dateisystem exportieren
- `dkimp` - Container-Dateisystem importieren
- `dkscan` - Image auf Schwachstellen scannen
- `dc` - Docker Compose Kurzbefehl
- `dcu` - Container erstellen und starten
- `dcud` - Container im Hintergrund erstellen und starten
- `dcd` - Container stoppen und entfernen
- `dcdv` - Container und Volumes stoppen und entfernen
- `dcr` - Dienste neu starten
- `dcs` - Dienste stoppen
- `dcsta` - Dienste starten
- `dcp` - Dienste pausieren
- `dcup` - Dienste fortsetzen
- `dcps` - Container auflisten
- `dcl` - Logs anzeigen
- `dclf` - Logs folgen
- `dcex` - Befehl im Container ausführen
- `dcb` - Dienste bauen
- `dcpull` - Dienst-Images ziehen
- `dcpush` - Dienst-Images pushen
- `dcrm` - Gestoppte Container entfernen
- `dcrun` - Einmaligen Befehl ausführen
- `dci` - Images auflisten
- `dck` - Container killen
- `dccfg` - Compose-Konfiguration validieren und anzeigen
- `dcev` - Events von Containern empfangen
- `dctop` - Laufende Prozesse anzeigen
- `dcv` - Docker Compose Version anzeigen

#### Swarm Management

- `dksw` - Swarm Kurzbefehl
- `dkswi` - Docker Swarm initialisieren
- `dkswj` - Docker Swarm beitreten
- `dkswjt` - Join-Token verwalten
- `dkswl` - Swarm verlassen
- `dkswu` - Swarm aktualisieren
- `dkswunl` - Swarm entsperren
- `dkswunk` - Entsperrschlüssel verwalten

#### Services

- `dksrv` - Service Kurzbefehl
- `dksrvls` - Services auflisten
- `dksrvc` - Service erstellen
- `dksrvi` - Service inspizieren
- `dksrvps` - Aufgaben eines Services auflisten
- `dksrvl` - Service-Logs anzeigen
- `dksrvlf` - Service-Logs folgen
- `dksrvrm` - Service entfernen
- `dksrvsc` - Service skalieren
- `dksrvu` - Service aktualisieren
- `dksrvrl` - Service zurückrollen (Rollback)

#### Stacks

- `dkstk` - Stack Kurzbefehl
- `dkstkls` - Stacks auflisten
- `dkstkd` - Stack deployen
- `dkstkps` - Aufgaben im Stack auflisten
- `dkstksrv` - Services im Stack auflisten
- `dkstkrm` - Stack entfernen

#### Nodes

- `dkn` - Node Kurzbefehl
- `dknls` - Nodes auflisten
- `dkni` - Node inspizieren
- `dknp` - Node zum Manager befördern
- `dknd` - Node zum Worker degradieren
- `dknrm` - Node entfernen
- `dknu` - Node aktualisieren
- `dknps` - Aufgaben auf Node auflisten

### Gängige Workflows

#### Container-Entwicklungs-Workflow

```bash
# Starten eines Entwicklungs-Containers
dkri --name dev-container -v $(pwd):/app -p 3000:3000 node:latest bash
```

#### Docker Compose Entwicklung

```bash
# Dienste starten, bei Bedarf neu bauen, im Hintergrund
dcb && dcud
```

#### Aufräum-Workflow

```bash
# Alle gestoppten Container, unbenutzte Netzwerke und Dangling Images entfernen
dkrm $(dk ps -aq --filter status=exited) && dknp && dkrmi_dangling
```

#### Deployment in Swarm

```bash
# Einen Stack aus einer Compose-Datei deployen oder aktualisieren
dkstkd -c docker-compose.yml my-stack
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
