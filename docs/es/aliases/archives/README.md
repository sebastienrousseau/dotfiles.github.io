---
description: The archives aliases are able to create and handle archives in a variety of formats.
lang: es-ES
metaTitle: Archives aliases - Dotfiles (ES)
permalink: /es/aliases/archives/

meta:
  - name: keywords
    content: 7-zip, aliases, archives, bash, bzip2, dotfiles, gzip, jar, linux, macos, shell, tar, unzip, windows, xz, zip, zstd
  - name: twitter:card
    content: The archives aliases are able to create and handle archives in a variety of formats.
  - name: twitter:description
    content: The archives aliases are able to create and handle archives in a variety of formats.
  - name: twitter:title
    content: Archives aliases - Dotfiles (ES)
  - name: og:title
    content: Archives aliases - Dotfiles (ES)
  - name: og:description
    content: The archives aliases are able to create and handle archives in a variety of formats.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Archives aliases

The `archives.aliases.sh` file creates helpful shortcut aliases for archiving
files and directories. The aliases are able to create and handle archives in a
variety of formats.

## 7-Zip

[7-Zip](http://www.7-zip.org/) is a file archiver with a high compression ratio.

| Alias | Comando               | Descripción                                                                |
| ----- | ------- | -------------------------------------------------------------------- |
| c7z   | `7z a`  | Compress a whole directorio (including subdirectories) to a 7z archivo.  |
| e7z   | `7z x`  | Extract a whole directorio (including subdirectories) from a 7z archivo. |

## Bzip2

[Bzip2](http://www.bzip.org/) is a freely available, patent free, high-quality
data compressor.

| Alias | Comando               | Descripción                                                                |
| ----- | --------- | ------------------------------- |
| cbz2  | `bzip2`   | Compress a archivo to a bz2 archivo.  |
| ebz2  | `bunzip2` | Extract a archivo from a bz2 archivo. |

## Gzip

[Gzip](https://www.gnu.org/software/gzip/) is a popular data compression program
as a replacement for compress.

| Alias | Comando               | Descripción                                                                |
| ----- | -------- | ------------------------------ |
| cgz   | `gzip`   | Compress a archivo to a gz archivo.  |
| egz   | `gunzip` | Extract a archivo from a gz archivo. |

## Jar

[Jar](https://docs.oracle.com/javase/tutorial/deployment/jar/) is a file format
used to aggregate many files into one file to distribute application software or
libraries on the Java platform.

| Alias | Comando               | Descripción                                                                |
| ----- | ---------- | --------------------------------------------------------------------- |
| cjar  | `jar -cvf` | Compress a whole directorio (including subdirectories) to a jar archivo.  |
| ejar  | `jar -xvf` | Extract a whole directorio (including subdirectories) from a jar archivo. |

## Tar

[Tar](https://www.gnu.org/software/tar/) is a computer program used to store
many files together in a single file.

| Alias | Comando               | Descripción                                                                |
| ----- | ----------- | ------------------------------------------------------------------------ |
| ctar  | `tar -cvf`  | Compress a whole directorio (including subdirectories) to a tar archivo.     |
| etar  | `tar -xvf`  | Extract a whole directorio (including subdirectories) from a tar archivo.    |
| ctgz  | `tar -cvzf` | Compress a whole directorio (including subdirectories) to a tar.gz archivo.  |
| etgz  | `tar -xvzf` | Extract a whole directorio (including subdirectories) from a tar.gz archivo. |

## Xz

[Xz](https://tukaani.org/xz/) is a general-purpose data compression software
with a high compression ratio.

| Alias | Comando               | Descripción                                                                |
| ----- | ---------- | -------------------------------------------------------------------- |
| cxz   | `xz -zcvf` | Compress a whole directorio (including subdirectories) to a xz archivo.  |
| exz   | `xz -zxvf` | Extract a whole directorio (including subdirectories) from a xz archivo. |

## Zip

[Zip](<https://en.wikipedia.org/wiki/Zip_(file_format)>) is a file format used to
output a single file containing one or more files.

| Alias | Comando               | Descripción                                                                |
| ----- | -------- | --------------------------------------------------------------------- |
| cz    | `zip -r` | Compress a whole directorio (including subdirectories) to a zip archivo.  |
| ez    | `unzip`  | Extract a whole directorio (including subdirectories) from a zip archivo. |

## Zstd

[Zstd](https://facebook.github.io/zstd/) is a fast lossless compression
algorithm, targeting real-time compression scenarios at zlib-level and better
compression ratios.

| Alias | Comando               | Descripción                                                                |
| ----- | ------------ | --------------------------------------------------------------------- |
| czstd | `zstd -zcvf` | Compress a whole directorio (including subdirectories) to a zst archivo.  |
| ezstd | `zstd -zxvf` | Extract a whole directorio (including subdirectories) from a zst archivo. |
