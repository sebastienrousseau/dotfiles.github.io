---
description: Die Archive-Aliase koennen Archive in verschiedenen Formaten erstellen und verwalten.
lang: de-DE
metaTitle: Archive-Aliase - Dotfiles (DE)
permalink: /de/aliases/archives/

meta:
  - name: keywords
    content: 7-zip, aliases, archives, bash, bzip2, dotfiles, gzip, jar, linux, macos, shell, tar, unzip, windows, xz, zip, zstd
  - name: twitter:card
    content: Die Archive-Aliase koennen Archive in verschiedenen Formaten erstellen und verwalten.
  - name: twitter:description
    content: Die Archive-Aliase koennen Archive in verschiedenen Formaten erstellen und verwalten.
  - name: twitter:title
    content: Archive-Aliase - Dotfiles (DE)
  - name: og:title
    content: Archive-Aliase - Dotfiles (DE)
  - name: og:description
    content: Die Archive-Aliase koennen Archive in verschiedenen Formaten erstellen und verwalten.
  - name: og:image:alt
    content: Dotfiles - Einfach entworfen fuer dein Shell-Leben
  - name: og:locale
    content: de_DE
---
# Archive-Aliase

Archive-Aliase verwalten. Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `archives.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.

## ⚡ Aliase

Dieses Modul bietet umfangreiche Werkzeuge zum Umgang mit Archiv- und
Kompressionsformaten.
### Universelle Entpack-Funktion
Der Befehl `extract` (oder Kurzform `x`) behandelt automatisch verschiedene Archivformate:
```bash
extract archive.tar.gz  # Format wird erkannt und entpackt
```
Unterstuetzte Formate:
- `.tar.bz2`, `.tbz2`
- `.tar.gz`, `.tgz`
- `.tar.xz`
- `.tar.zst`
- `.tar`
- `.bz2`
- `.gz`
- `.rar`
- `.zip`
- `.Z`
- `.7z`
- `.zst`
- `.xz`
- `.lz4`
- `.lha`, `.lzh`
- `.arj`
- `.arc`
- `.dms`
### Erweiterte Kompressionsfunktion
Die neue Funktion `compress` (Kurzform `ac`) bietet eine einheitliche Schnittstelle
fuer alle Kompressionsformate inkl. Kompressionslevel und Mehrfach-Inputs:
```bash
compress tgz file1 file2 directory output.tar.gz  # tar.gz aus mehreren Eingaben
compress zip -l 9 important_files backup.zip      # zip mit maximaler Kompression
```
Unterstuetzte Formate: `tar`, `tgz`, `tbz2`, `txz`, `tzst`, `zip`, `7z`, `gz`, `bz2`, `xz`, `zst`, `lz4`, `rar`
### Schnelle Backup-Funktion
Die Funktion `backup` (Kurzform `bak`) erstellt zeitgestempelte Backups:
```bash
backup important_folder            # important_folder-backup-20250312-123045.tar.gz
backup database.sql zip            # database.sql-backup-20250312-123045.zip
```
### Archivinhalt auflisten
Die Funktion `list_archive` (Kurzform `lar`) zeigt den Inhalt eines Archivs:
```bash
list_archive backup.tar.gz         # Alle Dateien im Archiv anzeigen
```
### Grossdatei-Kompression (Legacy)
Die Funktion `compress_large` (Kurzform `acl`) bleibt aus Kompatibilitaetsgruenden erhalten:
```bash
compress_large gz largefile.dat    # largefile.dat.gz
compress_large xz data.bin output.xz  # Spezifischer Outputname
```
### Archiv-Tools
- `c7z` - 7z-Archiv erstellen
- `x7z` - 7z-Archiv entpacken
- `l7z` - Inhalt auflisten
- `ctar` - tar-Archiv erstellen
- `xtar` - tar-Archiv entpacken
- `ltar` - Inhalt auflisten
- `ctgz` - tar.gz-Archiv erstellen
- `xtgz` - tar.gz-Archiv entpacken
- `ltgz` - Inhalt von tar.gz auflisten
- `ctbz` - tar.bz2-Archiv erstellen
- `xtbz` - tar.bz2-Archiv entpacken
- `ltbz` - Inhalt von tar.bz2 auflisten
- `ctxz` - tar.xz-Archiv erstellen
- `xtxz` - tar.xz-Archiv entpacken
- `ltxz` - Inhalt von tar.xz auflisten
- `ctzst` - tar.zst-Archiv erstellen
- `xtzst` - tar.zst-Archiv entpacken
- `ltzst` - Inhalt von tar.zst auflisten
- `czip` - zip-Archiv erstellen
- `xzip` - zip-Archiv entpacken
- `lzip` - Inhalt auflisten
- `crar` - rar-Archiv erstellen
- `xrar` - rar-Archiv entpacken
- `lrar` - Inhalt auflisten
### Kompressions-Tools
#### Gzip
- `cgz` - Mit gzip komprimieren
- `xgz` - gzip entpacken
#### Bzip2
- `cbz` - Mit bzip2 komprimieren
- `xbz` - bzip2 entpacken
#### XZ
- `cxz` - Mit xz komprimieren
- `xxz` - xz entpacken
#### Zstandard
- `czst` - Mit zstd komprimieren
- `xzst` - zstd entpacken
#### LZ4
- `clz4` - Mit lz4 komprimieren
- `xlz4` - lz4 entpacken
### Erweiterte Features
- Automatische Formaterkennung
- Tab-Completion fuer Befehle
- Robuste Fehlerbehandlung mit Logging
- Umgang mit Datei-/Verzeichnisnamen mit Leerzeichen
- Fortschrittsanzeigen fuer grosse Dateien (wenn `pv` verfuegbar)
- Multi-File-Input
- Optionen fuer Kompressionslevel
- Archiv-Integritaetspruefung
- Inhaltslisten fuer alle Formate
- Zeitgestempelte Backups
- Cross-Platform-Kompatibilitaet
### Beispiele
```bash
# Archiv entpacken
extract archive.tar.gz
# oder Kurzform
x archive.tar.gz
# Inhalt eines Archivs anzeigen
list_archive archive.zip
# oder Kurzform
lar archive.zip
# tar.gz mit mehreren Dateien erstellen
compress tgz file1.txt file2.txt docs/ archive.tar.gz
# zip mit maximaler Kompression erstellen
compress zip -l 9 important/ backup.zip
# Zeitgestempeltes Backup erstellen
backup project_folder
# oder mit spezifischem Format
backup database.sql 7z
# Grosse Datei mit Fortschritt komprimieren (pv erforderlich)
compress gz -l 9 largefile.dat compressed.gz
# Legacy Grossdatei-Kompression
compress_large xz largefile.dat
# 7z-Archiv mit Alias erstellen
c7z archive.7z files/  # Keine weiteren Parameter noetig
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
