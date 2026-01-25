---
description: Alias per archivi e compressione per gestire tar, zip, 7z e altro. Estrai, comprimi e gestisci archivi con comandi semplici.
lang: it-IT
metaTitle: Alias Archives - Dotfiles (IT)
permalink: /aliases/archives/
sidebar: true

meta:
  - name: keywords
    content: archivi, compressione, tar, zip, 7z, gzip, estrai, alias shell, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias per archivi e compressione per gestire tar, zip, 7z e altro. Estrai, comprimi e gestisci archivi con comandi semplici.
  - name: twitter:title
    content: Alias Archives - Dotfiles
  - name: og:title
    content: Alias Archives - Dotfiles
  - name: og:description
    content: Alias per archivi e compressione per gestire tar, zip, 7z e altro. Estrai, comprimi e gestisci archivi con comandi semplici.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: it_IT
---

# Alias Archives

Comprimi, estrai e gestisci archivi. Supporto per tutti i formati principali.

## Panoramica

Questi alias sono definiti in `archives.aliases.sh` e caricati automaticamente da Chezmoi.

## Riferimento

### Estrazione universale

Il comando `extract` (abbreviazione `x`) rileva automaticamente ed estrae qualsiasi archivio:

```bash
extract archive.tar.gz
```

**Formati supportati:** `.tar.bz2`, `.tbz2`, `.tar.gz`, `.tgz`, `.tar.xz`, `.tar.zst`, `.tar`, `.bz2`, `.gz`, `.rar`, `.zip`, `.Z`, `.7z`, `.zst`, `.xz`, `.lz4`, `.lha`, `.lzh`, `.arj`, `.arc`, `.dms`

### Comprimi

Crea archivi con il comando `compress` (abbreviazione `ac`):

```bash
compress tgz file1 file2 directory output.tar.gz
compress zip -l 9 important_files backup.zip
```

**Formati supportati:** `tar`, `tgz`, `tbz2`, `txz`, `tzst`, `zip`, `7z`, `gz`, `bz2`, `xz`, `zst`, `lz4`, `rar`

### Backup

Crea backup con timestamp usando `backup` (abbreviazione `bak`):

```bash
backup important_folder
backup database.sql zip
```

### Elenca contenuti

Visualizza i contenuti dell'archivio con `list_archive` (abbreviazione `lar`):

```bash
list_archive backup.tar.gz
```

### Strumenti archivio

| Alias | Descrizione |
|:---|:---|
| `c7z` | Crea archivio 7z |
| `x7z` | Estrai archivio 7z |
| `l7z` | Elenca contenuti 7z |
| `ctar` | Crea archivio tar |
| `xtar` | Estrai archivio tar |
| `ltar` | Elenca contenuti tar |
| `ctgz` | Crea archivio tar.gz |
| `xtgz` | Estrai archivio tar.gz |
| `ltgz` | Elenca contenuti tar.gz |
| `ctbz` | Crea archivio tar.bz2 |
| `xtbz` | Estrai archivio tar.bz2 |
| `ltbz` | Elenca contenuti tar.bz2 |
| `ctxz` | Crea archivio tar.xz |
| `xtxz` | Estrai archivio tar.xz |
| `ltxz` | Elenca contenuti tar.xz |
| `ctzst` | Crea archivio tar.zst |
| `xtzst` | Estrai archivio tar.zst |
| `ltzst` | Elenca contenuti tar.zst |
| `czip` | Crea archivio zip |
| `xzip` | Estrai archivio zip |
| `lzip` | Elenca contenuti zip |
| `crar` | Crea archivio rar |
| `xrar` | Estrai archivio rar |
| `lrar` | Elenca contenuti rar |

### Strumenti compressione

| Alias | Descrizione |
|:---|:---|
| `cgz` | Comprimi con gzip |
| `xgz` | Estrai gzip |
| `cbz` | Comprimi con bzip2 |
| `xbz` | Estrai bzip2 |
| `cxz` | Comprimi con xz |
| `xxz` | Estrai xz |
| `czst` | Comprimi con zstd |
| `xzst` | Estrai zstd |
| `clz4` | Comprimi con lz4 |
| `xlz4` | Estrai lz4 |
