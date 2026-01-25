---
description: Alias de архивado y compresión para tar, zip, 7z y más. Extrae, comprime y gestiona archivos fácilmente.
lang: es-ES
metaTitle: Alias Archives - Dotfiles (ES)
permalink: /aliases/archives/
sidebar: true

meta:
  - name: keywords
    content: archives, compresión, tar, zip, 7z, gzip, extract, alias shell, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias de archivado y compresión para tar, zip, 7z y más. Extrae, comprime y gestiona archivos fácilmente.
  - name: twitter:title
    content: Alias Archives - Dotfiles
  - name: og:title
    content: Alias Archives - Dotfiles
  - name: og:description
    content: Alias de archivado y compresión para tar, zip, 7z y más. Extrae, comprime y gestiona archivos fácilmente.
  - name: og:image:alt
    content: Dotfiles - Diseñado para tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias Archives

Comprime, extrae y gestiona archivos. Soporte para los formatos principales.

## Descubrir

Estos alias se definen en `archives.aliases.sh` y se cargan automáticamente por Chezmoi.

## Referencia

### Extracción universal

El comando `extract` (atajo `x`) detecta el formato y extrae automáticamente:

```bash
extract archive.tar.gz
```

**Formatos compatibles:** `.tar.bz2`, `.tbz2`, `.tar.gz`, `.tgz`, `.tar.xz`, `.tar.zst`, `.tar`, `.bz2`, `.gz`, `.rar`, `.zip`, `.Z`, `.7z`, `.zst`, `.xz`, `.lz4`, `.lha`, `.lzh`, `.arj`, `.arc`, `.dms`

### Compresión

Crea archivos con `compress` (atajo `ac`):

```bash
compress tgz file1 file2 directory output.tar.gz
compress zip -l 9 important_files backup.zip
```

**Formatos compatibles:** `tar`, `tgz`, `tbz2`, `txz`, `tzst`, `zip`, `7z`, `gz`, `bz2`, `xz`, `zst`, `lz4`, `rar`

### Copia de seguridad

Crea copias con timestamp con `backup` (atajo `bak`):

```bash
backup important_folder
backup database.sql zip
```

### Listar contenido

Ver el contenido de un archivo con `list_archive` (atajo `lar`):

```bash
list_archive backup.tar.gz
```

### Herramientas de archivo

| Alias | Descripción |
|:---|:---|
| `c7z` | Crear archivo 7z |
| `x7z` | Extraer archivo 7z |
| `l7z` | Listar contenido 7z |
| `ctar` | Crear archivo tar |
| `xtar` | Extraer archivo tar |
| `ltar` | Listar contenido tar |
| `ctgz` | Crear archivo tar.gz |
| `xtgz` | Extraer archivo tar.gz |
| `ltgz` | Listar contenido tar.gz |
| `ctbz` | Crear archivo tar.bz2 |
| `xtbz` | Extraer archivo tar.bz2 |
| `ltbz` | Listar contenido tar.bz2 |
| `ctxz` | Crear archivo tar.xz |
| `xtxz` | Extraer archivo tar.xz |
| `ltxz` | Listar contenido tar.xz |
| `ctzst` | Crear archivo tar.zst |
| `xtzst` | Extraer archivo tar.zst |
| `ltzst` | Listar contenido tar.zst |
| `czip` | Crear archivo zip |
| `xzip` | Extraer archivo zip |
| `lzip` | Listar contenido zip |
| `crar` | Crear archivo rar |
| `xrar` | Extraer archivo rar |
| `lrar` | Listar contenido rar |

### Herramientas de compresión

| Alias | Descripción |
|:---|:---|
| `cgz` | Comprimir con gzip |
| `xgz` | Extraer gzip |
| `cbz` | Comprimir con bzip2 |
| `xbz` | Extraer bzip2 |
| `cxz` | Comprimir con xz |
| `xxz` | Extraer xz |
| `czst` | Comprimir con zstd |
| `xzst` | Extraer zstd |
| `clz4` | Comprimir con lz4 |
| `xlz4` | Extraer lz4 |
