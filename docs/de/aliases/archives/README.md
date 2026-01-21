---
description: The archives aliases are able to create and handle archives in a variety of formats.
lang: de-DE
metaTitle: Archives aliases - Dotfiles (DE)
permalink: /de/aliases/archives/

meta:
  - name: keywords
    content: 7-zip, aliases, archives, bash, bzip2, dotfiles, gzip, jar, linux, macos, shell, tar, unzip, windows, xz, zip, zstd
  - name: twitter:card
    content: The archives aliases are able to create and handle archives in a variety of formats.
  - name: twitter:description
    content: The archives aliases are able to create and handle archives in a variety of formats.
  - name: twitter:title
    content: Archives aliases - Dotfiles (DE)
  - name: og:title
    content: Archives aliases - Dotfiles (DE)
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

| Alias | Befehl                | Beschreibung                                                               |
| ----- | ------- | -------------------------------------------------------------------- |
| c7z   | `7z a`  | Compress a whole Verzeichnis (including subdirectories) to a 7z Datei.  |
| e7z   | `7z x`  | Extract a whole Verzeichnis (including subdirectories) from a 7z Datei. |

## Bzip2

[Bzip2](http://www.bzip.org/) is a freely available, patent free, high-quality
data compressor.

| Alias | Befehl                | Beschreibung                                                               |
| ----- | --------- | ------------------------------- |
| cbz2  | `bzip2`   | Compress a Datei to a bz2 Datei.  |
| ebz2  | `bunzip2` | Extract a Datei from a bz2 Datei. |

## Gzip

[Gzip](https://www.gnu.org/software/gzip/) is a popular data compression program
as a replacement for compress.

| Alias | Befehl                | Beschreibung                                                               |
| ----- | -------- | ------------------------------ |
| cgz   | `gzip`   | Compress a Datei to a gz Datei.  |
| egz   | `gunzip` | Extract a Datei from a gz Datei. |

## Jar

[Jar](https://docs.oracle.com/javase/tutorial/deployment/jar/) is a file format
used to aggregate many files into one file to distribute application software or
libraries on the Java platform.

| Alias | Befehl                | Beschreibung                                                               |
| ----- | ---------- | --------------------------------------------------------------------- |
| cjar  | `jar -cvf` | Compress a whole Verzeichnis (including subdirectories) to a jar Datei.  |
| ejar  | `jar -xvf` | Extract a whole Verzeichnis (including subdirectories) from a jar Datei. |

## Tar

[Tar](https://www.gnu.org/software/tar/) is a computer program used to store
many files together in a single file.

| Alias | Befehl                | Beschreibung                                                               |
| ----- | ----------- | ------------------------------------------------------------------------ |
| ctar  | `tar -cvf`  | Compress a whole Verzeichnis (including subdirectories) to a tar Datei.     |
| etar  | `tar -xvf`  | Extract a whole Verzeichnis (including subdirectories) from a tar Datei.    |
| ctgz  | `tar -cvzf` | Compress a whole Verzeichnis (including subdirectories) to a tar.gz Datei.  |
| etgz  | `tar -xvzf` | Extract a whole Verzeichnis (including subdirectories) from a tar.gz Datei. |

## Xz

[Xz](https://tukaani.org/xz/) is a general-purpose data compression software
with a high compression ratio.

| Alias | Befehl                | Beschreibung                                                               |
| ----- | ---------- | -------------------------------------------------------------------- |
| cxz   | `xz -zcvf` | Compress a whole Verzeichnis (including subdirectories) to a xz Datei.  |
| exz   | `xz -zxvf` | Extract a whole Verzeichnis (including subdirectories) from a xz Datei. |

## Zip

[Zip](<https://en.wikipedia.org/wiki/Zip_(file_format)>) is a file format used to
output a single file containing one or more files.

| Alias | Befehl                | Beschreibung                                                               |
| ----- | -------- | --------------------------------------------------------------------- |
| cz    | `zip -r` | Compress a whole Verzeichnis (including subdirectories) to a zip Datei.  |
| ez    | `unzip`  | Extract a whole Verzeichnis (including subdirectories) from a zip Datei. |

## Zstd

[Zstd](https://facebook.github.io/zstd/) is a fast lossless compression
algorithm, targeting real-time compression scenarios at zlib-level and better
compression ratios.

| Alias | Befehl                | Beschreibung                                                               |
| ----- | ------------ | --------------------------------------------------------------------- |
| czstd | `zstd -zcvf` | Compress a whole Verzeichnis (including subdirectories) to a zst Datei.  |
| ezstd | `zstd -zxvf` | Extract a whole Verzeichnis (including subdirectories) from a zst Datei. |
