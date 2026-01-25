---
description: Shell-Aliase fuer Subversion (SVN) Versionskontrolle. Checkout, Commit, Update und Merge mit einpraegsamen Befehlen.
lang: de-DE
metaTitle: Subversion Aliase - Dotfiles (DE)
permalink: /de/aliases/subversion/
sidebar: true

meta:
  - name: keywords
    content: subversion aliase, svn verknuepfungen, versionskontrolle, svn befehle, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Subversion Aliase - Dotfiles
  - name: twitter:description
    content: Shell-Aliase fuer Subversion (SVN) Versionskontrolle. Checkout, Commit, Update und Merge.
  - name: og:title
    content: Subversion Aliase - Dotfiles
  - name: og:description
    content: Shell-Aliase fuer Subversion (SVN) Versionskontrolle. Checkout, Commit, Update und Merge.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Subversion Aliase

Optimieren Sie Ihren SVN-Workflow mit einpraegsamen Shell-Verknuepfungen.

## Uebersicht

Diese Aliase sind in `subversion.aliases.sh` definiert und werden automatisch von Chezmoi geladen. Sie bieten schnellen Zugriff auf gaengige Subversion-Operationen fuer Versionskontrolle und Repository-Verwaltung.

## Referenz

### Grundlegende Operationen

| Alias | Beschreibung |
|:---|:---|
| `sco` | Working Copy aus einem Repository auschecken |
| `sup` | Aenderungen aus dem Repository holen |
| `sci` | Aenderungen aus der Working Copy ins Repository senden |
| `sst` | Status der Working Copy anzeigen |
| `sin` | Informationen zu lokalem oder Remote-Item anzeigen |

### Dateiverwaltung

| Alias | Beschreibung |
|:---|:---|
| `sad` | Neue Dateien und Verzeichnisse unter Versionskontrolle stellen |
| `sdl` | Dateien/Verzeichnisse aus Versionskontrolle entfernen |
| `smv` | Item in Working Copy oder Repository verschieben (umbenennen) |
| `scp` | Dateien/Verzeichnisse kopieren (Working Copy oder Repository) |
| `smd` | Neues Verzeichnis unter Versionskontrolle erstellen |

### Diff und Log

| Alias | Beschreibung |
|:---|:---|
| `sdi` | Lokale Aenderungen oder Unterschiede zwischen Revisionen anzeigen |
| `slg` | Log-Nachrichten fuer Revisionen/Pfade anzeigen |
| `sbl` | Zeigen, wann jede Zeile zuletzt geaendert wurde |
| `sct` | Inhalt angegebener Dateien oder URLs ausgeben |

### Branches und Merging

| Alias | Beschreibung |
|:---|:---|
| `smg` | Aenderungen in Working Copy mergen |
| `smgi` | Merge-Informationen anzeigen |
| `ssw` | Working Copy auf andere URL im Repository aktualisieren |

### Wiederherstellung

| Alias | Beschreibung |
|:---|:---|
| `srv` | Working Copy auf pristinen Zustand zuruecksetzen |
| `srs` | Konflikte in Working Copy aufloesen |
| `srsd` | Konfliktstatus entfernen |

### Properties

| Alias | Beschreibung |
|:---|:---|
| `sp` | Property-Wert setzen |
| `spgt` | Property-Wert ausgeben |
| `spls` | Alle Properties auflisten |
| `spdl` | Property entfernen |
| `spdt` | Property mit externem Editor bearbeiten |

### Locking

| Alias | Beschreibung |
|:---|:---|
| `slk` | Pfade/URLs im Repository sperren |
| `sulk` | Sperre fuer Pfade/URLs aufheben |

### Repository-Verwaltung

| Alias | Beschreibung |
|:---|:---|
| `sls` | Verzeichniseintraege im Repository anzeigen |
| `sip` | Unversionierte Datei/Baum ins Repository committen |
| `sxp` | Unversionierte Kopie eines Baums erstellen |
| `scl` | Unterbrochene Operationen beheben oder unerwuenschte Dateien entfernen |
| `supg` | Metadatenformat der Working Copy upgraden |

### Authentifizierung

| Alias | Beschreibung |
|:---|:---|
| `sau` | Gecachte Auth-Credentials verwalten |

### Hilfe

| Alias | Beschreibung |
|:---|:---|
| `shp` | Usage fuer Programm oder Unterbefehle anzeigen |
