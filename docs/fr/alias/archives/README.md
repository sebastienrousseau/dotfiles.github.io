---
description: Les alias d'archivage sont capables de créer et de gérer des fichiers d'archives dans une variété de formats.
lang: fr-FR
metaTitle: Les alias d'archivage - Dotfiles (FR)
permalink: /alias/archives/

meta:
  - name: keywords
    content: 7-zip, aliases, archives, bash, bzip2, dotfiles, gzip, jar, linux, macos, raccourcis, shell, tar, unzip, windows, xz, zip, zstd
  - name: twitter:card
    content: Les alias d'archivage sont capables de créer et de gérer des fichiers d'archives dans une variété de formats.
  - name: twitter:description
    content: Les alias d'archivage sont capables de créer et de gérer des fichiers d'archives dans une variété de formats.
  - name: twitter:title
    content: Les alias d'archivage - Dotfiles (FR)
  - name: og:title
    content: Les alias d'archivage - Dotfiles (FR)
  - name: og:description
    content: Les alias d'archivage sont capables de créer et de gérer des fichiers d'archives dans une variété de formats.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---
# Alias d'archivage

Gérer les alias d'archives. Fait partie de la configuration **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Description

Ces alias sont définis dans `archives.aliases.sh` et sont chargés automatiquement par `chezmoi`.

## ⚡ Alias

Ce module fournit des outils complets pour gérer divers formats d'archives et de compression.
### Fonction d'extraction universelle
La commande `extract` (ou le raccourci `x`) gère automatiquement différents formats d'archives :
```bash
extract archive.tar.gz  # Détecte automatiquement le format et extrait
```
Formats pris en charge :
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
### Fonction de compression avancée
La nouvelle fonction `compress` (raccourci `ac`) fournit une interface unifiée pour tous les formats de compression avec prise en charge des niveaux de compression et de plusieurs fichiers :
```bash
compress tgz file1 file2 directory output.tar.gz  # Créer un tar.gz avec plusieurs entrées
compress zip -l 9 important_files backup.zip      # Créer un zip avec niveau de compression maximal
```
Formats pris en charge : `tar`, `tgz`, `tbz2`, `txz`, `tzst`, `zip`, `7z`, `gz`, `bz2`, `xz`, `zst`, `lz4`, `rar`
### Fonction de sauvegarde rapide
La fonction `backup` (ou le raccourci `bak`) crée des sauvegardes horodatées de fichiers ou répertoires :
```bash
backup important_folder            # Crée important_folder-backup-20250312-123045.tar.gz
backup database.sql zip            # Crée database.sql-backup-20250312-123045.zip
```
### Liste du contenu d'une archive
La fonction `list_archive` (ou le raccourci `lar`) affiche le contenu de toute archive prise en charge :
```bash
list_archive backup.tar.gz         # Liste tous les fichiers de l'archive
```
### Compression de gros fichiers (hérité)
La fonction `compress_large` (raccourci `acl`) est maintenue pour compatibilité :
```bash
compress_large gz largefile.dat    # Crée largefile.dat.gz
compress_large xz data.bin output.xz  # Nom de sortie spécifique
```
### Outils d'archive
- `c7z` - Créer une archive 7z
- `x7z` - Extraire une archive 7z
- `l7z` - Lister le contenu
- `ctar` - Créer une archive tar
- `xtar` - Extraire une archive tar
- `ltar` - Lister le contenu
- `ctgz` - Créer une archive tar.gz
- `xtgz` - Extraire une archive tar.gz
- `ltgz` - Lister le contenu tar.gz
- `ctbz` - Créer une archive tar.bz2
- `xtbz` - Extraire une archive tar.bz2
- `ltbz` - Lister le contenu tar.bz2
- `ctxz` - Créer une archive tar.xz
- `xtxz` - Extraire une archive tar.xz
- `ltxz` - Lister le contenu tar.xz
- `ctzst` - Créer une archive tar.zst
- `xtzst` - Extraire une archive tar.zst
- `ltzst` - Lister le contenu tar.zst
- `czip` - Créer une archive zip
- `xzip` - Extraire une archive zip
- `lzip` - Lister le contenu
- `crar` - Créer une archive rar
- `xrar` - Extraire une archive rar
- `lrar` - Lister le contenu
### Outils de compression
#### Gzip
- `cgz` - Compresser avec gzip
- `xgz` - Extraire gzip
#### Bzip2
- `cbz` - Compresser avec bzip2
- `xbz` - Extraire bzip2
#### XZ
- `cxz` - Compresser avec xz
- `xxz` - Extraire xz
#### Zstandard
- `czst` - Compresser avec zstd
- `xzst` - Extraire zstd
#### LZ4
- `clz4` - Compresser avec lz4
- `xlz4` - Extraire lz4
### Fonctionnalités avancées
- Détection automatique des formats
- Autocomplétion des commandes
- Gestion robuste des erreurs avec journalisation
- Gestion des fichiers et répertoires avec espaces
- Indicateurs de progression pour les gros fichiers (si `pv` est disponible)
- Support multi-fichiers
- Options de niveau de compression
- Vérification d'intégrité des archives
- Listing du contenu pour tous les formats
- Sauvegardes horodatées
- Compatibilité multiplateforme
### Exemples d'utilisation
```bash
# Extraire n'importe quelle archive prise en charge
extract archive.tar.gz
# ou utiliser le raccourci
x archive.tar.gz
# Lister le contenu d'une archive
list_archive archive.zip
# ou utiliser le raccourci
lar archive.zip
# Créer une archive tar.gz avec plusieurs fichiers
compress tgz file1.txt file2.txt docs/ archive.tar.gz
# Créer un zip avec compression maximale
compress zip -l 9 important/ backup.zip
# Créer une sauvegarde horodatée
backup project_folder
# ou avec un format spécifique
backup database.sql 7z
# Compresser un gros fichier avec progression (nécessite pv)
compress gz -l 9 largefile.dat compressed.gz
# Compression de gros fichiers (hérité)
compress_large xz largefile.dat
# Créer une archive 7z via l'alias
c7z archive.7z files/  # Aucun paramètre supplémentaire requis
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
