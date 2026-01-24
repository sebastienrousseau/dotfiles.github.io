---
description: Die Subversion-Aliase sind eine Sammlung von Aliasen, die die Arbeit mit dem `svn` Befehl erleichtern. Subversion ist ein Versionskontrollsystem.
lang: de-DE
metaTitle: Die Subversion-Aliase - Dotfiles (DE)
permalink: /de/aliases/subversion/

meta:
  - name: keywords
    content: aliases, subversion, svn, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Die Subversion-Aliase sind eine Sammlung von Aliasen, die die Arbeit mit dem `svn` Befehl erleichtern. Subversion ist ein Versionskontrollsystem.
  - name: twitter:description
    content: Die Subversion-Aliase sind eine Sammlung von Aliasen, die die Arbeit mit dem `svn` Befehl erleichtern. Subversion ist ein Versionskontrollsystem.
  - name: twitter:title
    content: Die Subversion-Aliase - Dotfiles (DE)
  - name: og:title
    content: Die Subversion-Aliase - Dotfiles (DE)
  - name: og:description
    content: Die Subversion-Aliase sind eine Sammlung von Aliasen, die die Arbeit mit dem `svn` Befehl erleichtern. Subversion ist ein Versionskontrollsystem.
  - name: og:image:alt
    content: Dotfiles - Einfach entworfen fuer dein Shell-Leben
  - name: og:locale
    content: de_DE
---
# Subversion-Aliase

Subversion-Aliase verwalten. Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `subversion.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.

## ⚡ Aliase

Dieser Code bietet Alias-Befehle fuer die Subversion-CLI.
- `sad` Neue Dateien und Verzeichnisse unter Versionskontrolle stellen.
- `sau` Gecachte Auth-Credentials verwalten.
- `sbl` Zeigen, wann jede Zeile zuletzt (oder naechstes) geaendert wurde.
- `scg` Changelist CLNAME mit Dateien verknuepfen oder loesen.
- `sci` Aenderungen aus der Working Copy ins Repository senden.
- `scl` Unterbrochene Operationen beheben oder unerwuenschte Dateien entfernen.
- `sco` Working Copy aus einem Repository auschecken.
- `scp` Dateien/Verzeichnisse kopieren (Working Copy oder Repo).
- `sct` Inhalt angegebener Dateien oder URLs ausgeben.
- `sdi` Lokale Aenderungen oder Diff zwischen Revisionen/Paths anzeigen.
- `sdl` Dateien/Verzeichnisse aus Versionskontrolle entfernen.
- `shp` Usage fuer Programm oder Subcommands anzeigen.
- `sin` Infos zu lokalem oder Remote-Item anzeigen.
- `sip` Unversionierte Datei/Tree ins Repo committen.
- `slg` Log-Messages fuer Revisionen/Paths anzeigen.
- `slk` Paths/URLs im Repo locken.
- `sls` Verzeichniseintraege im Repo anzeigen.
- `smd` Neues Verzeichnis unter Versionskontrolle erstellen.
- `smg` Changes in Working Copy mergen.
- `smgi` Merge-Infos anzeigen.
- `smv` Item in Working Copy/Repo verschieben (rename).
- `sp` Property-Wert setzen.
- `spdl` Property entfernen.
- `spdt` Property mit externem Editor bearbeiten.
- `spgt` Property-Wert ausgeben.
- `sph` Patch auf Working Copy anwenden.
- `spls` Alle Properties auflisten.
- `srl` Working Copy auf andere Repo-Root-URL umstellen.
- `srs` Konflikte in Working Copy aufloesen.
- `srsd` Konfliktstatus entfernen.
- `srv` Working Copy auf pristine Zustand zuruecksetzen.
- `sst` Status der Working Copy anzeigen.
- `ssw` Working Copy auf andere URL im Repo aktualisieren.
- `sulk` Lock fuer Paths/URLs aufheben.
- `sup` Aenderungen aus dem Repo holen.
- `supg` Metadatenformat der Working Copy upgraden.
- `sxp` Unversionierte Kopie eines Trees erstellen.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
