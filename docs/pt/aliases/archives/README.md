---
description: The archives aliases are able to create and handle archives in a variety of formats.
lang: pt-BR
metaTitle: Archives aliases - Dotfiles (BR)
permalink: /pt/aliases/archives/

meta:
  - name: keywords
    content: 7-zip, aliases, archives, bash, bzip2, dotfiles, gzip, jar, linux, macos, shell, tar, unzip, windows, xz, zip, zstd
  - name: twitter:card
    content: The archives aliases are able to create and handle archives in a variety of formats.
  - name: twitter:description
    content: The archives aliases are able to create and handle archives in a variety of formats.
  - name: twitter:title
    content: Archives aliases - Dotfiles (BR)
  - name: og:title
    content: Archives aliases - Dotfiles (BR)
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

| Alias | Comando               | Descrição                                                                  |
| ----- | ------- | -------------------------------------------------------------------- |
| c7z   | `7z a`  | Compress a whole diretório (including subdirectories) to a 7z arquivo.  |
| e7z   | `7z x`  | Extract a whole diretório (including subdirectories) from a 7z arquivo. |

## Bzip2

[Bzip2](http://www.bzip.org/) is a freely available, patent free, high-quality
data compressor.

| Alias | Comando               | Descrição                                                                  |
| ----- | --------- | ------------------------------- |
| cbz2  | `bzip2`   | Compress a arquivo to a bz2 arquivo.  |
| ebz2  | `bunzip2` | Extract a arquivo from a bz2 arquivo. |

## Gzip

[Gzip](https://www.gnu.org/software/gzip/) is a popular data compression program
as a replacement for compress.

| Alias | Comando               | Descrição                                                                  |
| ----- | -------- | ------------------------------ |
| cgz   | `gzip`   | Compress a arquivo to a gz arquivo.  |
| egz   | `gunzip` | Extract a arquivo from a gz arquivo. |

## Jar

[Jar](https://docs.oracle.com/javase/tutorial/deployment/jar/) is a file format
used to aggregate many files into one file to distribute application software or
libraries on the Java platform.

| Alias | Comando               | Descrição                                                                  |
| ----- | ---------- | --------------------------------------------------------------------- |
| cjar  | `jar -cvf` | Compress a whole diretório (including subdirectories) to a jar arquivo.  |
| ejar  | `jar -xvf` | Extract a whole diretório (including subdirectories) from a jar arquivo. |

## Tar

[Tar](https://www.gnu.org/software/tar/) is a computer program used to store
many files together in a single file.

| Alias | Comando               | Descrição                                                                  |
| ----- | ----------- | ------------------------------------------------------------------------ |
| ctar  | `tar -cvf`  | Compress a whole diretório (including subdirectories) to a tar arquivo.     |
| etar  | `tar -xvf`  | Extract a whole diretório (including subdirectories) from a tar arquivo.    |
| ctgz  | `tar -cvzf` | Compress a whole diretório (including subdirectories) to a tar.gz arquivo.  |
| etgz  | `tar -xvzf` | Extract a whole diretório (including subdirectories) from a tar.gz arquivo. |

## Xz

[Xz](https://tukaani.org/xz/) is a general-purpose data compression software
with a high compression ratio.

| Alias | Comando               | Descrição                                                                  |
| ----- | ---------- | -------------------------------------------------------------------- |
| cxz   | `xz -zcvf` | Compress a whole diretório (including subdirectories) to a xz arquivo.  |
| exz   | `xz -zxvf` | Extract a whole diretório (including subdirectories) from a xz arquivo. |

## Zip

[Zip](<https://en.wikipedia.org/wiki/Zip_(file_format)>) is a file format used to
output a single file containing one or more files.

| Alias | Comando               | Descrição                                                                  |
| ----- | -------- | --------------------------------------------------------------------- |
| cz    | `zip -r` | Compress a whole diretório (including subdirectories) to a zip arquivo.  |
| ez    | `unzip`  | Extract a whole diretório (including subdirectories) from a zip arquivo. |

## Zstd

[Zstd](https://facebook.github.io/zstd/) is a fast lossless compression
algorithm, targeting real-time compression scenarios at zlib-level and better
compression ratios.

| Alias | Comando               | Descrição                                                                  |
| ----- | ------------ | --------------------------------------------------------------------- |
| czstd | `zstd -zcvf` | Compress a whole diretório (including subdirectories) to a zst arquivo.  |
| ezstd | `zstd -zxvf` | Extract a whole diretório (including subdirectories) from a zst arquivo. |
