---
description: Archive and compression aliases for handling tar, zip, 7z, and more. Extract, compress, and manage archives with simple commands.
lang: en-GB
metaTitle: Archives Aliases - Dotfiles (UK)
permalink: /aliases/archives/
sidebar: true

meta:
  - name: keywords
    content: archives, compression, tar, zip, 7z, gzip, extract, shell aliases, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Archive and compression aliases for handling tar, zip, 7z, and more. Extract, compress, and manage archives with simple commands.
  - name: twitter:title
    content: Archives Aliases - Dotfiles
  - name: og:title
    content: Archives Aliases - Dotfiles
  - name: og:description
    content: Archive and compression aliases for handling tar, zip, 7z, and more. Extract, compress, and manage archives with simple commands.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Archives Aliases

Compress, extract, and manage archives. Support for all major formats.

## Overview

These aliases are defined in `archives.aliases.sh` and loaded automatically by Chezmoi.

## Reference

### Universal extract

The `extract` command (shorthand `x`) auto-detects and extracts any archive:

```bash
extract archive.tar.gz
```

**Supported formats:** `.tar.bz2`, `.tbz2`, `.tar.gz`, `.tgz`, `.tar.xz`, `.tar.zst`, `.tar`, `.bz2`, `.gz`, `.rar`, `.zip`, `.Z`, `.7z`, `.zst`, `.xz`, `.lz4`, `.lha`, `.lzh`, `.arj`, `.arc`, `.dms`

### Compress

Create archives with the `compress` command (shorthand `ac`):

```bash
compress tgz file1 file2 directory output.tar.gz
compress zip -l 9 important_files backup.zip
```

**Supported formats:** `tar`, `tgz`, `tbz2`, `txz`, `tzst`, `zip`, `7z`, `gz`, `bz2`, `xz`, `zst`, `lz4`, `rar`

### Backup

Create timestamped backups with `backup` (shorthand `bak`):

```bash
backup important_folder
backup database.sql zip
```

### List contents

View archive contents with `list_archive` (shorthand `lar`):

```bash
list_archive backup.tar.gz
```

### Archive tools

| Alias | Description |
|:---|:---|
| `c7z` | Create 7z archive |
| `x7z` | Extract 7z archive |
| `l7z` | List 7z contents |
| `ctar` | Create tar archive |
| `xtar` | Extract tar archive |
| `ltar` | List tar contents |
| `ctgz` | Create tar.gz archive |
| `xtgz` | Extract tar.gz archive |
| `ltgz` | List tar.gz contents |
| `ctbz` | Create tar.bz2 archive |
| `xtbz` | Extract tar.bz2 archive |
| `ltbz` | List tar.bz2 contents |
| `ctxz` | Create tar.xz archive |
| `xtxz` | Extract tar.xz archive |
| `ltxz` | List tar.xz contents |
| `ctzst` | Create tar.zst archive |
| `xtzst` | Extract tar.zst archive |
| `ltzst` | List tar.zst contents |
| `czip` | Create zip archive |
| `xzip` | Extract zip archive |
| `lzip` | List zip contents |
| `crar` | Create rar archive |
| `xrar` | Extract rar archive |
| `lrar` | List rar contents |

### Compression tools

| Alias | Description |
|:---|:---|
| `cgz` | Compress with gzip |
| `xgz` | Extract gzip |
| `cbz` | Compress with bzip2 |
| `xbz` | Extract bzip2 |
| `cxz` | Compress with xz |
| `xxz` | Extract xz |
| `czst` | Compress with zstd |
| `xzst` | Extract zstd |
| `clz4` | Compress with lz4 |
| `xlz4` | Extract lz4 |
