---
description: Dateisuche optimieren mit fd-basierten Aliasen. Schnelle, farbige Ausgabe und intuitive Befehle fuer Unix-Systeme.
lang: de-DE
metaTitle: Find Aliase - Dotfiles (DE)
permalink: /de/aliases/find/
sidebar: true

meta:
  - name: keywords
    content: find aliase, fd befehl, dateisuche, shell aliase, dotfiles, unix find
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Find Aliase - Dotfiles
  - name: twitter:description
    content: Dateisuche optimieren mit fd-basierten Aliasen. Schnelle, farbige Ausgabe und intuitive Befehle.
  - name: og:title
    content: Find Aliase - Dotfiles
  - name: og:description
    content: Dateisuche optimieren mit fd-basierten Aliasen. Schnelle, farbige Ausgabe und intuitive Befehle.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Find Aliase

Leistungsstarke Dateisuche-Verknuepfungen mit fd, der modernen Alternative zu find.

## Uebersicht

Diese Aliase bieten eine optimierte Schnittstelle zu `fd`, einer schnellen und benutzerfreundlichen Alternative zum traditionellen `find`-Befehl. In `find.aliases.sh` definiert, werden sie automatisch von Chezmoi geladen und bieten farbige Ausgabe, intuitive Syntax und einpraegsame Befehle fuer gaengige Dateisuchoperationen.

Wenn `fd` auf Ihrem System verfuegbar ist, wird der `find`-Befehl automatisch als Alias fuer `fd` gesetzt, was Ihnen verbesserte Leistung und eine einfachere Syntax standardmaessig bietet.

## Referenz

### Kernbefehle

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `fd` | `fd --color always` | Dateien mit farbiger Ausgabe suchen |
| `find` | `fd` | fd als Standard-find-Ersatz verwenden |

### Suchoptionen

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `fda` | `fd --absolute-path` | Ergebnisse mit absoluten Pfaden anzeigen |
| `fdc` | `fd --ignore-case` | Gross-/Kleinschreibung ignorieren |
| `fdd` | `fd --list-details` | Detaillierte Dateiinformationen anzeigen |
| `fde` | `fd --extension` | Nach Dateierweiterung filtern |
| `fdf` | `fd --follow` | Symbolischen Links bei Suche folgen |
| `fdh` | `fd --hidden` | Versteckte Dateien in Ergebnissen einschliessen |
| `fdn` | `fd --glob` | Dateien mit Glob-Mustern abgleichen |
| `fdo` | `fd --owner` | Nach Dateieigentuemer filtern |
| `fds` | `fd --size` | Nach Dateigroesse filtern |
| `fdu` | `fd --exclude` | Dateien ausschliessen, die einem Muster entsprechen |
| `fdx` | `fd --exec` | Befehl fuer jedes Ergebnis ausfuehren |

### Hilfsbefehle

| Alias | Befehl | Beschreibung |
|:---|:---|:---|
| `fdv` | `fd --version` | fd-Versionsinformationen anzeigen |
