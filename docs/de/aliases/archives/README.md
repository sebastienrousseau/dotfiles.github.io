---
description: Archiv- und Komprimierungsaliase für tar, zip, 7z und mehr. Entpacken, komprimieren und verwalten Sie Archive mit einfachen Befehlen.
lang: de-DE
metaTitle: Archives Aliase - Dotfiles (DE)
permalink: /de/aliases/archives/
sidebar: true

meta:
  - name: keywords
    content: archive, komprimierung, tar, zip, 7z, gzip, entpacken, shell aliase, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Archiv- und Komprimierungsaliase für tar, zip, 7z und mehr. Entpacken, komprimieren und verwalten Sie Archive mit einfachen Befehlen.
  - name: twitter:title
    content: Archives Aliase - Dotfiles
  - name: og:title
    content: Archives Aliase - Dotfiles
  - name: og:description
    content: Archiv- und Komprimierungsaliase für tar, zip, 7z und mehr. Entpacken, komprimieren und verwalten Sie Archive mit einfachen Befehlen.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Archives Aliase

Komprimieren, entpacken und verwalten Sie Archive. Unterstützung für alle gängigen Formate.

## Übersicht

Diese Aliase sind in `archives.aliases.sh` definiert und werden automatisch von Chezmoi geladen.

## Referenz

### Universelles Entpacken

Der `extract`-Befehl (Kurzform `x`) erkennt und entpackt automatisch jedes Archiv:

```bash
extract archive.tar.gz
```

**Unterstützte Formate:** `.tar.bz2`, `.tbz2`, `.tar.gz`, `.tgz`, `.tar.xz`, `.tar.zst`, `.tar`, `.bz2`, `.gz`, `.rar`, `.zip`, `.Z`, `.7z`, `.zst`, `.xz`, `.lz4`, `.lha`, `.lzh`, `.arj`, `.arc`, `.dms`

### Komprimieren

Erstellen Sie Archive mit dem `compress`-Befehl (Kurzform `ac`):

```bash
compress tgz file1 file2 directory output.tar.gz
compress zip -l 9 important_files backup.zip
```

**Unterstützte Formate:** `tar`, `tgz`, `tbz2`, `txz`, `tzst`, `zip`, `7z`, `gz`, `bz2`, `xz`, `zst`, `lz4`, `rar`

### Backup

Erstellen Sie zeitgestempelte Backups mit `backup` (Kurzform `bak`):

```bash
backup important_folder
backup database.sql zip
```

### Inhalt auflisten

Archivinhalt anzeigen mit `list_archive` (Kurzform `lar`):

```bash
list_archive backup.tar.gz
```

### Archiv-Tools

| Alias | Beschreibung |
|:---|:---|
| `c7z` | 7z-Archiv erstellen |
| `x7z` | 7z-Archiv entpacken |
| `l7z` | 7z-Inhalt auflisten |
| `ctar` | Tar-Archiv erstellen |
| `xtar` | Tar-Archiv entpacken |
| `ltar` | Tar-Inhalt auflisten |
| `ctgz` | Tar.gz-Archiv erstellen |
| `xtgz` | Tar.gz-Archiv entpacken |
| `ltgz` | Tar.gz-Inhalt auflisten |
| `ctbz` | Tar.bz2-Archiv erstellen |
| `xtbz` | Tar.bz2-Archiv entpacken |
| `ltbz` | Tar.bz2-Inhalt auflisten |
| `ctxz` | Tar.xz-Archiv erstellen |
| `xtxz` | Tar.xz-Archiv entpacken |
| `ltxz` | Tar.xz-Inhalt auflisten |
| `ctzst` | Tar.zst-Archiv erstellen |
| `xtzst` | Tar.zst-Archiv entpacken |
| `ltzst` | Tar.zst-Inhalt auflisten |
| `czip` | Zip-Archiv erstellen |
| `xzip` | Zip-Archiv entpacken |
| `lzip` | Zip-Inhalt auflisten |
| `crar` | Rar-Archiv erstellen |
| `xrar` | Rar-Archiv entpacken |
| `lrar` | Rar-Inhalt auflisten |

### Komprimierungs-Tools

| Alias | Beschreibung |
|:---|:---|
| `cgz` | Mit gzip komprimieren |
| `xgz` | Gzip entpacken |
| `cbz` | Mit bzip2 komprimieren |
| `xbz` | Bzip2 entpacken |
| `cxz` | Mit xz komprimieren |
| `xxz` | Xz entpacken |
| `czst` | Mit zstd komprimieren |
| `xzst` | Zstd entpacken |
| `clz4` | Mit lz4 komprimieren |
| `xlz4` | Lz4 entpacken |
