---
description: Die Find-Aliase dienen der Suche nach Dateien in Verzeichnissen und dem Ausfuehren von Aktionen auf gefundene Dateien.
lang: de-DE
metaTitle: Find-Aliase - Dotfiles (DE)
permalink: /de/aliases/find/

meta:
  - name: keywords
    content: aliases, code, editor, environment, gedit, nano, notepad++, text, vi, vim
  - name: twitter:card
    content: Die Find-Aliase dienen der Suche nach Dateien in Verzeichnissen und dem Ausfuehren von Aktionen auf gefundene Dateien.
  - name: twitter:description
    content: Die Find-Aliase dienen der Suche nach Dateien in Verzeichnissen und dem Ausfuehren von Aktionen auf gefundene Dateien.
  - name: twitter:title
    content: Find-Aliase - Dotfiles (DE)
  - name: og:title
    content: Find-Aliase - Dotfiles (DE)
  - name: og:description
    content: Die Find-Aliase dienen der Suche nach Dateien in Verzeichnissen und dem Ausfuehren von Aktionen auf gefundene Dateien.
  - name: og:image:alt
    content: Dotfiles - Einfach entworfen fuer dein Shell-Leben
  - name: og:locale
    content: de_DE
---
# Find-Aliase

Find-Aliase verwalten. Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `find.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.

## ⚡ Aliase

Dieser Code bietet eine Reihe von Aliasen fuer das Werkzeug `fd`,
welches eine Alternative zum `find` Befehl auf Unix-Systemen ist.
`fd` ist ein einfaches, schnelles und benutzerfreundliches Tool, um
Dateien und Verzeichnisse in einem Pfad zu suchen. Diese Aliase machen
`fd` leichter nutzbar, indem sie einfache und merkbare Befehle fuer gaengige
Anwendungsfaelle bereitstellen.
Hier sind einige der verfuegbaren Aliase:
- `fd` ist der Standardalias fuer `fd --color always`, der alle Dateien mit
  farbiger Ausgabe auflistet.
- `fda` listet alle Dateien mit absoluten Pfaden auf.
- `fdc` listet alle Dateien mit case-insensitiver Suche auf.
- `fdd` listet alle Dateien mit Details auf.
- `fde` listet alle Dateien mit einer bestimmten Erweiterung auf.
- `fdf` listet alle Dateien unter Beachtung symbolischer Links auf.
- `fdh` zeigt Hilfe fuer `fd`.
- `fdh` listet alle Dateien, einschliesslich versteckter Dateien.
- `fdn` listet alle Dateien, die einem bestimmten Glob entsprechen.
- `fdo` listet alle Dateien mit Owner-Informationen auf.
- `fds` listet alle Dateien mit Groesse auf.
- `fdu` listet alle Dateien mit Ausschlussregeln auf.
- `fdv` zeigt die Version von `fd`.
- `fdx` fuehrt einen Befehl fuer jedes Suchergebnis aus.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
