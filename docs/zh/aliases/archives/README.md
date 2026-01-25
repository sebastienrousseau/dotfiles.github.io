---
description: 用于处理 tar、zip、7z 等格式的归档和压缩别名。使用简单命令提取、压缩和管理归档。
lang: zh-CN
metaTitle: Archives 别名 - Dotfiles (CN)
permalink: /aliases/archives/
sidebar: true

meta:
  - name: keywords
    content: 归档, 压缩, tar, zip, 7z, gzip, 提取, shell 别名, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 用于处理 tar、zip、7z 等格式的归档和压缩别名。使用简单命令提取、压缩和管理归档。
  - name: twitter:title
    content: Archives 别名 - Dotfiles
  - name: og:title
    content: Archives 别名 - Dotfiles
  - name: og:description
    content: 用于处理 tar、zip、7z 等格式的归档和压缩别名。使用简单命令提取、压缩和管理归档。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# Archives 别名

压缩、提取和管理归档。支持所有主要格式。

## 概述

这些别名定义在 `archives.aliases.sh` 中，由 Chezmoi 自动加载。

## 参考

### 通用提取

`extract` 命令（简写 `x`）自动检测并提取任何归档：

```bash
extract archive.tar.gz
```

**支持的格式：** `.tar.bz2`、`.tbz2`、`.tar.gz`、`.tgz`、`.tar.xz`、`.tar.zst`、`.tar`、`.bz2`、`.gz`、`.rar`、`.zip`、`.Z`、`.7z`、`.zst`、`.xz`、`.lz4`、`.lha`、`.lzh`、`.arj`、`.arc`、`.dms`

### 压缩

使用 `compress` 命令（简写 `ac`）创建归档：

```bash
compress tgz file1 file2 directory output.tar.gz
compress zip -l 9 important_files backup.zip
```

**支持的格式：** `tar`、`tgz`、`tbz2`、`txz`、`tzst`、`zip`、`7z`、`gz`、`bz2`、`xz`、`zst`、`lz4`、`rar`

### 备份

使用 `backup`（简写 `bak`）创建带时间戳的备份：

```bash
backup important_folder
backup database.sql zip
```

### 列出内容

使用 `list_archive`（简写 `lar`）查看归档内容：

```bash
list_archive backup.tar.gz
```

### 归档工具

| 别名 | 描述 |
|:---|:---|
| `c7z` | 创建 7z 归档 |
| `x7z` | 提取 7z 归档 |
| `l7z` | 列出 7z 内容 |
| `ctar` | 创建 tar 归档 |
| `xtar` | 提取 tar 归档 |
| `ltar` | 列出 tar 内容 |
| `ctgz` | 创建 tar.gz 归档 |
| `xtgz` | 提取 tar.gz 归档 |
| `ltgz` | 列出 tar.gz 内容 |
| `ctbz` | 创建 tar.bz2 归档 |
| `xtbz` | 提取 tar.bz2 归档 |
| `ltbz` | 列出 tar.bz2 内容 |
| `ctxz` | 创建 tar.xz 归档 |
| `xtxz` | 提取 tar.xz 归档 |
| `ltxz` | 列出 tar.xz 内容 |
| `ctzst` | 创建 tar.zst 归档 |
| `xtzst` | 提取 tar.zst 归档 |
| `ltzst` | 列出 tar.zst 内容 |
| `czip` | 创建 zip 归档 |
| `xzip` | 提取 zip 归档 |
| `lzip` | 列出 zip 内容 |
| `crar` | 创建 rar 归档 |
| `xrar` | 提取 rar 归档 |
| `lrar` | 列出 rar 内容 |

### 压缩工具

| 别名 | 描述 |
|:---|:---|
| `cgz` | 使用 gzip 压缩 |
| `xgz` | 提取 gzip |
| `cbz` | 使用 bzip2 压缩 |
| `xbz` | 提取 bzip2 |
| `cxz` | 使用 xz 压缩 |
| `xxz` | 提取 xz |
| `czst` | 使用 zstd 压缩 |
| `xzst` | 提取 zstd |
| `clz4` | 使用 lz4 压缩 |
| `xlz4` | 提取 lz4 |
