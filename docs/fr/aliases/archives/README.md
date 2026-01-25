---
description: Alias d’archives et de compression pour tar, zip, 7z, etc. Extraire, compresser et gérer les archives facilement.
lang: fr-FR
metaTitle: Alias Archives - Dotfiles (FR)
permalink: /aliases/archives/
sidebar: true

meta:
  - name: keywords
    content: archives, compression, tar, zip, 7z, gzip, extract, alias shell, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias d’archives et de compression pour tar, zip, 7z, etc. Extraire, compresser et gérer les archives facilement.
  - name: twitter:title
    content: Alias Archives - Dotfiles
  - name: og:title
    content: Alias Archives - Dotfiles
  - name: og:description
    content: Alias d’archives et de compression pour tar, zip, 7z, etc. Extraire, compresser et gérer les archives facilement.
  - name: og:image:alt
    content: Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Alias Archives

Compresser, extraire et gérer les archives. Support des formats majeurs.

## Aperçu

Ces alias sont définis dans `archives.aliases.sh` et chargés automatiquement par Chezmoi.

## Référence

### Extraction universelle

La commande `extract` (raccourci `x`) détecte le format et extrait automatiquement :

```bash
extract archive.tar.gz
```

**Formats pris en charge :** `.tar.bz2`, `.tbz2`, `.tar.gz`, `.tgz`, `.tar.xz`, `.tar.zst`, `.tar`, `.bz2`, `.gz`, `.rar`, `.zip`, `.Z`, `.7z`, `.zst`, `.xz`, `.lz4`, `.lha`, `.lzh`, `.arj`, `.arc`, `.dms`

### Compression

Créer des archives avec la commande `compress` (raccourci `ac`) :

```bash
compress tgz file1 file2 directory output.tar.gz
compress zip -l 9 important_files backup.zip
```

**Formats pris en charge :** `tar`, `tgz`, `tbz2`, `txz`, `tzst`, `zip`, `7z`, `gz`, `bz2`, `xz`, `zst`, `lz4`, `rar`

### Sauvegarde

Créer des sauvegardes horodatées avec `backup` (raccourci `bak`) :

```bash
backup important_folder
backup database.sql zip
```

### Lister le contenu

Afficher le contenu d’une archive avec `list_archive` (raccourci `lar`) :

```bash
list_archive backup.tar.gz
```

### Outils d’archivage

| Alias | Description |
|:---|:---|
| `c7z` | Créer une archive 7z |
| `x7z` | Extraire une archive 7z |
| `l7z` | Lister le contenu 7z |
| `ctar` | Créer une archive tar |
| `xtar` | Extraire une archive tar |
| `ltar` | Lister le contenu tar |
| `ctgz` | Créer une archive tar.gz |
| `xtgz` | Extraire une archive tar.gz |
| `ltgz` | Lister le contenu tar.gz |
| `ctbz` | Créer une archive tar.bz2 |
| `xtbz` | Extraire une archive tar.bz2 |
| `ltbz` | Lister le contenu tar.bz2 |
| `ctxz` | Créer une archive tar.xz |
| `xtxz` | Extraire une archive tar.xz |
| `ltxz` | Lister le contenu tar.xz |
| `ctzst` | Créer une archive tar.zst |
| `xtzst` | Extraire une archive tar.zst |
| `ltzst` | Lister le contenu tar.zst |
| `czip` | Créer une archive zip |
| `xzip` | Extraire une archive zip |
| `lzip` | Lister le contenu zip |
| `crar` | Créer une archive rar |
| `xrar` | Extraire une archive rar |
| `lrar` | Lister le contenu rar |

### Outils de compression

| Alias | Description |
|:---|:---|
| `cgz` | Compresser avec gzip |
| `xgz` | Extraire gzip |
| `cbz` | Compresser avec bzip2 |
| `xbz` | Extraire bzip2 |
| `cxz` | Compresser avec xz |
| `xxz` | Extraire xz |
| `czst` | Compresser avec zstd |
| `xzst` | Extraire zstd |
| `clz4` | Compresser avec lz4 |
| `xlz4` | Extraire lz4 |
