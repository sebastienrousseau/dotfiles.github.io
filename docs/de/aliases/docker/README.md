---
description: docker-Aliase fuer Dotfiles
lang: de-DE
metaTitle: docker-Aliase - Dotfiles
permalink: /de/aliases/docker/
---
# Docker-Aliase

Docker-Aliase verwalten. Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `docker.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.

## ⚡ Aliase

Dieser Code bietet einen umfassenden Satz von Aliasen fuer die Docker-Entwicklung
mit `docker`, `docker-compose` und Docker Swarm.
#### Grundlegende Befehle
- `dk` - Docker-Kurzbefehl
- `dkv` - Docker-Version anzeigen
- `dki` - Systemweite Informationen anzeigen
- `dkl` - Login in die Docker-Registry
- `dklo` - Logout aus der Docker-Registry
#### Container-Operationen
- `dkps` - Laufende Container auflisten
- `dkpsa` - Alle Container auflisten
- `dkr` - Befehl in neuem Container ausfuehren
- `dkri` - Interaktiven Container starten
- `dkrd` - Container im Hintergrund starten
- `dks` - Container starten
- `dkst` - Container stoppen
- `dkrs` - Container neu starten
- `dkp` - Container pausieren
- `dkup` - Container fortsetzen
- `dkrm` - Container entfernen
- `dkrma` - Alle Container entfernen
- `dkrmf` - Container-Entfernung erzwingen
#### Container-Inspektion
- `dkin` - Container inspizieren
- `dkl` - Container-Logs anzeigen
- `dklf` - Container-Logs folgen
- `dkt` - Laufende Prozesse im Container anzeigen
- `dkst` - Container-Ressourcennutzung anzeigen
- `dkdf` - Container-Dateisystemaenderungen anzeigen
- `dkpl` - Image aus Registry ziehen
- `dkex` - Befehl im Container ausfuehren
- `dkeit` - Interaktiven Befehl ausfuehren
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
- `dkv` - Volume-Kurzbefehl
- `dkvls` - Volumes auflisten
- `dkvc` - Volume erstellen
- `dkvi` - Volume inspizieren
- `dkvrm` - Volume entfernen
- `dkvp` - Unbenutzte Volumes entfernen
#### Netzwerke
- `dkn` - Netzwerk-Kurzbefehl
- `dknls` - Netzwerke auflisten
- `dknc` - Netzwerk erstellen
- `dkni` - Netzwerk inspizieren
- `dknrm` - Netzwerk entfernen
- `dknp` - Unbenutzte Netzwerke entfernen
- `dkncon` - Container mit Netzwerk verbinden
- `dkndis` - Container vom Netzwerk trennen
#### System
- `dks` - System-Kurzbefehl
- `dksdf` - Docker-Speicherbelegung anzeigen
- `dksev` - Echtzeit-Events von Docker erhalten
- `dksi` - Systemweite Informationen anzeigen
- `dksp` - Unbenutzte Daten entfernen
- `dkspa` - Alle unbenutzten Daten entfernen
- `dkcon` - Kontextverwaltung
#### Verschiedenes
- `dkcp` - Dateien zwischen Container und lokalem Dateisystem kopieren
- `dkw` - Blockieren bis Container stoppt
- `dkk` - Container killen
- `dkatt` - An Container anhaengen
- `dkd` - Aenderungen am Container-Dateisystem inspizieren
- `dkcom` - Image aus Container erstellen
- `dktag` - Image taggen
- `dkexp` - Container-Dateisystem exportieren
- `dkimp` - Container-Dateisystem importieren
- `dkscan` - Image auf Schwachstellen scannen
- `dc` - Docker Compose-Kurzbefehl
- `dcu` - Container erstellen und starten
- `dcud` - Container im Hintergrund erstellen und starten
- `dcd` - Container stoppen und entfernen
- `dcdv` - Container und Volumes stoppen und entfernen
- `dcr` - Services neu starten
- `dcs` - Services stoppen
- `dcsta` - Services starten
- `dcp` - Services pausieren
- `dcup` - Services fortsetzen
- `dcps` - Container auflisten
- `dcl` - Logs anzeigen
- `dclf` - Logs folgen
- `dcex` - Befehl im Container ausfuehren
- `dcb` - Services bauen
- `dcpull` - Service-Images ziehen
- `dcpush` - Service-Images pushen
- `dcrm` - Gestoppte Container entfernen
- `dcrun` - Einmaligen Befehl ausfuehren
- `dci` - Images auflisten
- `dck` - Container killen
- `dccfg` - Compose-Konfiguration pruefen und anzeigen
- `dcev` - Events empfangen
- `dctop` - Laufende Prozesse anzeigen
- `dcv` - Docker Compose-Version anzeigen
#### Swarm-Management
- `dksw` - Swarm-Kurzbefehl
- `dkswi` - Docker Swarm initialisieren
- `dkswj` - Docker Swarm beitreten
- `dkswjt` - Join-Tokens verwalten
- `dkswl` - Swarm verlassen
- `dkswu` - Swarm aktualisieren
- `dkswunl` - Swarm entsperren
- `dkswunk` - Unlock-Keys verwalten
#### Services
- `dksrv` - Service-Kurzbefehl
- `dksrvls` - Services auflisten
- `dksrvc` - Service erstellen
- `dksrvi` - Service inspizieren
- `dksrvps` - Tasks des Services auflisten
- `dksrvl` - Service-Logs anzeigen
- `dksrvlf` - Service-Logs folgen
- `dksrvrm` - Service entfernen
- `dksrvsc` - Service skalieren
- `dksrvu` - Service aktualisieren
- `dksrvrl` - Service rollback
#### Stacks
- `dkstk` - Stack-Kurzbefehl
- `dkstkls` - Stacks auflisten
- `dkstkd` - Stack deployen
- `dkstkps` - Tasks im Stack auflisten
- `dkstksrv` - Services im Stack auflisten
- `dkstkrm` - Stack entfernen
#### Nodes
- `dkn` - Node-Kurzbefehl
- `dknls` - Nodes auflisten
- `dkni` - Node inspizieren
- `dknp` - Node zum Manager promoten
- `dknd` - Node zum Worker degradieren
- `dknrm` - Node entfernen
- `dknu` - Node aktualisieren
- `dknps` - Tasks auf Node auflisten

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
