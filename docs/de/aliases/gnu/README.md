---
description: Optimieren Sie Ihren Workflow mit GNU Coreutils-Aliasen fuer Dateiverwaltung, Textverarbeitung und Pruefsummen-Werkzeuge.
lang: de-DE
metaTitle: GNU Coreutils Aliase - Dotfiles (DE)
permalink: /de/aliases/gnu/
sidebar: true

meta:
  - name: keywords
    content: gnu coreutils, shell aliase, linux werkzeuge, dateiverwaltung, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: GNU Coreutils Aliase - Dotfiles
  - name: twitter:description
    content: GNU Coreutils-Aliase fuer Dateiverwaltung, Textverarbeitung und Pruefsummen-Werkzeuge.
  - name: og:title
    content: GNU Coreutils Aliase - Dotfiles
  - name: og:description
    content: GNU Coreutils-Aliase fuer Dateiverwaltung, Textverarbeitung und Pruefsummen-Werkzeuge.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# GNU Coreutils Aliase

Verknuepfungen zu essenziellen Unix-Werkzeugen fuer schnellere Befehlszeilen-Workflows.

## Uebersicht

GNU Coreutils-Aliase bieten Kurzform-Befehle fuer Standard-Unix-Werkzeuge. In `gnu.aliases.sh` definiert und automatisch von Chezmoi geladen, vereinfachen diese Aliase Dateioperationen, Textverarbeitung und Datenverifizierungsaufgaben.

## Referenz

### Dateiverwaltung

| Alias | Beschreibung |
|:---|:---|
| `basename` | Verzeichnis und Suffix von Dateinamen entfernen |
| `cp` | Dateien und Verzeichnisse kopieren |
| `dirname` | Nicht-Verzeichnis-Suffix von Dateinamen entfernen |
| `ln` | Links zwischen Dateien erstellen |
| `loname` | Namen des Links ausgeben |
| `ls` | Verzeichnisinhalte auflisten |
| `mkdir` | Verzeichnisse erstellen |
| `mkfifo` | Named Pipes (FIFOs) erstellen |
| `mknod` | Block- oder Zeichen-Spezialdateien erstellen |
| `mv` | Dateien oder Verzeichnisse verschieben oder umbenennen |
| `pathchk` | Gueltigkeit und Portabilitaet von Dateinamen pruefen |
| `pwd` | Name des Arbeitsverzeichnisses ausgeben |
| `readlink` | Aufgeloeste symbolische Links oder kanonische Dateinamen ausgeben |
| `realpath` | Aufgeloesten physischen Pfad ausgeben |
| `rm` | Dateien oder Verzeichnisse entfernen |
| `rmdir` | Leere Verzeichnisse entfernen |
| `unlink` | Dateien oder Verzeichnisse entfernen |

### Textverarbeitung

| Alias | Beschreibung |
|:---|:---|
| `awk` | Mustersuche und Verarbeitungssprache |
| `cat` | Dateien verketten und anzeigen |
| `csplit` | Datei in kontextbestimmte Teile aufteilen |
| `cut` | Abschnitte aus jeder Zeile entfernen |
| `diff` | Dateien Zeile fuer Zeile vergleichen |
| `fold` | Jede Eingabezeile auf bestimmte Breite umbrechen |
| `grep` | Zeilen ausgeben, die einem Muster entsprechen |
| `head` | Ersten Teil von Dateien ausgeben |
| `nl` | Zeilen von Dateien nummerieren |
| `paste` | Zeilen von Dateien zusammenfuehren |
| `patch` | Diff-Datei auf Original anwenden |
| `ptx` | Permutierter Index von Dateiinhalten erstellen |
| `sed` | Stream-Editor zum Filtern und Transformieren von Text |
| `sort` | Zeilen von Textdateien sortieren |
| `split` | Datei in Teile aufteilen |
| `tail` | Letzten Teil von Dateien ausgeben |
| `tr` | Zeichen uebersetzen oder loeschen |

### Pruefsummen-Werkzeuge

| Alias | Beschreibung |
|:---|:---|
| `b2sum` | BLAKE2-Nachrichten-Digests ausgeben oder pruefen |
| `cksum` | CRC-Pruefsumme und Byte-Anzahl ausgeben |
| `sha1sum` | SHA1-Nachrichten-Digests ausgeben oder pruefen |
| `sha224sum` | SHA224-Nachrichten-Digests ausgeben oder pruefen |
| `sha256sum` | SHA256-Nachrichten-Digests ausgeben oder pruefen |
| `sha384sum` | SHA384-Nachrichten-Digests ausgeben oder pruefen |
| `sha512sum` | SHA512-Nachrichten-Digests ausgeben oder pruefen |

### Kodierungs-Werkzeuge

| Alias | Beschreibung |
|:---|:---|
| `base32` | Base32-Daten ausgeben oder konvertieren |
| `base64` | Base64-Daten kodieren oder dekodieren |
| `basenc` | Daten in verschiedenen Formaten kodieren oder dekodieren |
