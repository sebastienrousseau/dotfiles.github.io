---
description: Shell-Aliase zum Verwalten von Dateiberechtigungen mit chmod und chown. Schnelle Zugriffssteuerung mit numerischen Kuerzeln.
lang: de-DE
metaTitle: Permission Aliase - Dotfiles (DE)
permalink: /de/aliases/permission/
sidebar: true

meta:
  - name: keywords
    content: permission aliase, chmod aliase, chown aliase, dateiberechtigungen, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Permission Aliase - Dotfiles
  - name: twitter:description
    content: Shell-Aliase zum Verwalten von Dateiberechtigungen mit chmod und chown.
  - name: og:title
    content: Permission Aliase - Dotfiles
  - name: og:description
    content: Shell-Aliase zum Verwalten von Dateiberechtigungen mit chmod und chown.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Permission Aliase

Schnelle Berechtigungsverwaltung mit numerischen Kuerzeln.

## Uebersicht

Diese Aliase sind in `permission.aliases.sh` definiert und werden automatisch von Chezmoi geladen. Sie bieten schnellen Zugriff auf gaengige Berechtigungseinstellungen ueber numerische Oktal-Kuerzel sowie Befehle zur Verwaltung von Dateibesitz.

## Referenz

### Numerische Berechtigungskuerzel

| Alias | Beschreibung |
|:---|:---|
| `000` | Keine Lese-, Schreib- oder Ausfuehrrechte fuer jemanden |
| `400` | Nur Lesen fuer Besitzer |
| `444` | Nur Lesen fuer alle |
| `600` | Lesen und Schreiben nur fuer Besitzer |
| `644` | Lesen fuer alle, Schreiben nur fuer Besitzer |
| `666` | Lesen und Schreiben fuer alle |
| `755` | Voller Zugriff fuer Besitzer, Lesen/Ausfuehren fuer andere |
| `764` | Lesen/Schreiben fuer Besitzer und Gruppe, Lesen fuer andere |
| `777` | Voller Zugriff fuer alle |

### chmod-Befehle

| Alias | Beschreibung |
|:---|:---|
| `chmod` | Dateimodus-Bits aendern |
| `chmodr` | Dateimodus-Bits rekursiv aendern |
| `chmodu` | Dateimodus-Bits rekursiv fuer aktuellen Benutzer aendern |
| `chmox` | Datei ausfuehrbar machen |

### chown-Befehle

| Alias | Beschreibung |
|:---|:---|
| `chown` | Dateibesitzer und -gruppe aendern |
| `chownr` | Dateibesitzer und -gruppe rekursiv aendern |
| `chownu` | Dateibesitzer und -gruppe rekursiv auf aktuellen Benutzer setzen |

### chgrp-Befehle

| Alias | Beschreibung |
|:---|:---|
| `chgrp` | Gruppenbesitz aendern |
| `chgrpr` | Gruppenbesitz rekursiv aendern |
| `chgrpu` | Gruppenbesitz rekursiv auf aktuelle Benutzergruppe setzen |
