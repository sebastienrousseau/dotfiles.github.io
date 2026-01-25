---
description: Archief- en compressie-aliassen voor het werken met tar, zip, 7z en meer. Pak uit, comprimeer en beheer archieven met eenvoudige commando's.
lang: nl-NL
metaTitle: Archief-aliassen - Dotfiles (NL)
permalink: /nl/aliases/archives/
sidebar: true

meta:
  - name: keywords
    content: archieven, compressie, tar, zip, 7z, gzip, uitpakken, shell aliassen, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Archief- en compressie-aliassen voor het werken met tar, zip, 7z en meer. Pak uit, comprimeer en beheer archieven met eenvoudige commando's.
  - name: twitter:title
    content: Archief-aliassen - Dotfiles
  - name: og:title
    content: Archief-aliassen - Dotfiles
  - name: og:description
    content: Archief- en compressie-aliassen voor het werken met tar, zip, 7z en meer. Pak uit, comprimeer en beheer archieven met eenvoudige commando's.
  - name: og:image:alt
    content: Dotfiles - Eenvoudig ontworpen om bij je shell-leven te passen
  - name: og:locale
    content: nl_NL
---

# Archief-aliassen

Comprimeer, pak uit en beheer archieven. Ondersteuning voor alle gangbare formaten.

## Overzicht

Deze aliassen zijn gedefinieerd in `archives.aliases.sh` en worden automatisch geladen door Chezmoi.

## Referentie

### Universeel uitpakken

Het `extract` commando (afkorting `x`) detecteert automatisch en pakt elk archief uit:

```bash
extract archive.tar.gz
```

**Ondersteunde formaten:** `.tar.bz2`, `.tbz2`, `.tar.gz`, `.tgz`, `.tar.xz`, `.tar.zst`, `.tar`, `.bz2`, `.gz`, `.rar`, `.zip`, `.Z`, `.7z`, `.zst`, `.xz`, `.lz4`, `.lha`, `.lzh`, `.arj`, `.arc`, `.dms`

### Comprimeren

Maak archieven met het `compress` commando (afkorting `ac`):

```bash
compress tgz file1 file2 directory output.tar.gz
compress zip -l 9 important_files backup.zip
```

**Ondersteunde formaten:** `tar`, `tgz`, `tbz2`, `txz`, `tzst`, `zip`, `7z`, `gz`, `bz2`, `xz`, `zst`, `lz4`, `rar`

### Back-up

Maak back-ups met tijdstempel met `backup` (afkorting `bak`):

```bash
backup important_folder
backup database.sql zip
```

### Inhoud bekijken

Bekijk archiefinhoud met `list_archive` (afkorting `lar`):

```bash
list_archive backup.tar.gz
```

### Archieftools

| Alias | Beschrijving |
|:---|:---|
| `c7z` | Maak 7z-archief |
| `x7z` | Pak 7z-archief uit |
| `l7z` | Toon 7z-inhoud |
| `ctar` | Maak tar-archief |
| `xtar` | Pak tar-archief uit |
| `ltar` | Toon tar-inhoud |
| `ctgz` | Maak tar.gz-archief |
| `xtgz` | Pak tar.gz-archief uit |
| `ltgz` | Toon tar.gz-inhoud |
| `ctbz` | Maak tar.bz2-archief |
| `xtbz` | Pak tar.bz2-archief uit |
| `ltbz` | Toon tar.bz2-inhoud |
| `ctxz` | Maak tar.xz-archief |
| `xtxz` | Pak tar.xz-archief uit |
| `ltxz` | Toon tar.xz-inhoud |
| `ctzst` | Maak tar.zst-archief |
| `xtzst` | Pak tar.zst-archief uit |
| `ltzst` | Toon tar.zst-inhoud |
| `czip` | Maak zip-archief |
| `xzip` | Pak zip-archief uit |
| `lzip` | Toon zip-inhoud |
| `crar` | Maak rar-archief |
| `xrar` | Pak rar-archief uit |
| `lrar` | Toon rar-inhoud |

### Compressietools

| Alias | Beschrijving |
|:---|:---|
| `cgz` | Comprimeer met gzip |
| `xgz` | Pak gzip uit |
| `cbz` | Comprimeer met bzip2 |
| `xbz` | Pak bzip2 uit |
| `cxz` | Comprimeer met xz |
| `xxz` | Pak xz uit |
| `czst` | Comprimeer met zstd |
| `xzst` | Pak zstd uit |
| `clz4` | Comprimeer met lz4 |
| `xlz4` | Pak lz4 uit |
