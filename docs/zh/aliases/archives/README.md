---
description: The archives aliases are able to create and handle archives in a variety of formats.
lang: zh-CN
metaTitle: Archives aliases - Dotfiles (CN)
permalink: /zh/aliases/archives/

meta:
  - name: keywords
    content: 7-zip, aliases, archives, bash, bzip2, dotfiles, gzip, jar, linux, macos, shell, tar, unzip, windows, xz, zip, zstd
  - name: twitter:card
    content: The archives aliases are able to create and handle archives in a variety of formats.
  - name: twitter:description
    content: The archives aliases are able to create and handle archives in a variety of formats.
  - name: twitter:title
    content: Archives aliases - Dotfiles (CN)
  - name: og:title
    content: Archives aliases - Dotfiles (CN)
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

| 别名  | 命令                   | 描述                                                                       |
| ----- | ------- | -------------------------------------------------------------------- |
| c7z   | `7z a`  | Compress a whole 目录 (including subdirectories) to a 7z 文件.  |
| e7z   | `7z x`  | Extract a whole 目录 (including subdirectories) from a 7z 文件. |

## Bzip2

[Bzip2](http://www.bzip.org/) is a freely available, patent free, high-quality
data compressor.

| 别名  | 命令                   | 描述                                                                       |
| ----- | --------- | ------------------------------- |
| cbz2  | `bzip2`   | Compress a 文件 to a bz2 文件.  |
| ebz2  | `bunzip2` | Extract a 文件 from a bz2 文件. |

## Gzip

[Gzip](https://www.gnu.org/software/gzip/) is a popular data compression program
as a replacement for compress.

| 别名  | 命令                   | 描述                                                                       |
| ----- | -------- | ------------------------------ |
| cgz   | `gzip`   | Compress a 文件 to a gz 文件.  |
| egz   | `gunzip` | Extract a 文件 from a gz 文件. |

## Jar

[Jar](https://docs.oracle.com/javase/tutorial/deployment/jar/) is a file format
used to aggregate many files into one file to distribute application software or
libraries on the Java platform.

| 别名  | 命令                   | 描述                                                                       |
| ----- | ---------- | --------------------------------------------------------------------- |
| cjar  | `jar -cvf` | Compress a whole 目录 (including subdirectories) to a jar 文件.  |
| ejar  | `jar -xvf` | Extract a whole 目录 (including subdirectories) from a jar 文件. |

## Tar

[Tar](https://www.gnu.org/software/tar/) is a computer program used to store
many files together in a single file.

| 别名  | 命令                   | 描述                                                                       |
| ----- | ----------- | ------------------------------------------------------------------------ |
| ctar  | `tar -cvf`  | Compress a whole 目录 (including subdirectories) to a tar 文件.     |
| etar  | `tar -xvf`  | Extract a whole 目录 (including subdirectories) from a tar 文件.    |
| ctgz  | `tar -cvzf` | Compress a whole 目录 (including subdirectories) to a tar.gz 文件.  |
| etgz  | `tar -xvzf` | Extract a whole 目录 (including subdirectories) from a tar.gz 文件. |

## Xz

[Xz](https://tukaani.org/xz/) is a general-purpose data compression software
with a high compression ratio.

| 别名  | 命令                   | 描述                                                                       |
| ----- | ---------- | -------------------------------------------------------------------- |
| cxz   | `xz -zcvf` | Compress a whole 目录 (including subdirectories) to a xz 文件.  |
| exz   | `xz -zxvf` | Extract a whole 目录 (including subdirectories) from a xz 文件. |

## Zip

[Zip](<https://en.wikipedia.org/wiki/Zip_(file_format)>) is a file format used to
output a single file containing one or more files.

| 别名  | 命令                   | 描述                                                                       |
| ----- | -------- | --------------------------------------------------------------------- |
| cz    | `zip -r` | Compress a whole 目录 (including subdirectories) to a zip 文件.  |
| ez    | `unzip`  | Extract a whole 目录 (including subdirectories) from a zip 文件. |

## Zstd

[Zstd](https://facebook.github.io/zstd/) is a fast lossless compression
algorithm, targeting real-time compression scenarios at zlib-level and better
compression ratios.

| 别名  | 命令                   | 描述                                                                       |
| ----- | ------------ | --------------------------------------------------------------------- |
| czstd | `zstd -zcvf` | Compress a whole 目录 (including subdirectories) to a zst 文件.  |
| ezstd | `zstd -zxvf` | Extract a whole 目录 (including subdirectories) from a zst 文件. |
