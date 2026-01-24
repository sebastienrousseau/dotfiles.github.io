---
description: Archives 别名用于创建与处理多种压缩格式。
lang: zh-CN
metaTitle: Archives 别名 - Dotfiles (ZH)
permalink: /zh/aliases/archives/

meta:
  - name: keywords
    content: 7-zip, aliases, archives, bash, bzip2, dotfiles, gzip, jar, linux, macos, shell, tar, unzip, windows, xz, zip, zstd
  - name: twitter:card
    content: Archives 别名用于创建与处理多种压缩格式。
  - name: twitter:description
    content: Archives 别名用于创建与处理多种压缩格式。
  - name: twitter:title
    content: Archives 别名 - Dotfiles (ZH)
  - name: og:title
    content: Archives 别名 - Dotfiles (ZH)
  - name: og:description
    content: Archives 别名用于创建与处理多种压缩格式。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活而设计
  - name: og:locale
    content: zh_CN
---
# Archives 别名

管理 Archives 别名。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名定义在 `archives.aliases.sh` 中，并由 `chezmoi` 自动加载。

## ⚡ 别名

该模块提供多种归档与压缩工具。
### 通用解压函数
`extract`（或 `x`）自动识别格式：
```bash
extract archive.tar.gz
```
支持格式：
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
### 高级压缩
`compress`（`ac`）提供统一接口：
```bash
compress tgz file1 file2 directory output.tar.gz
compress zip -l 9 important_files backup.zip
```
支持格式：`tar`, `tgz`, `tbz2`, `txz`, `tzst`, `zip`, `7z`, `gz`, `bz2`, `xz`, `zst`, `lz4`, `rar`
### 快速备份
`backup`（`bak`）创建带时间戳的备份：
```bash
backup important_folder
backup database.sql zip
```
### 列出归档内容
`list_archive`（`lar`）：
```bash
list_archive backup.tar.gz
```
### 大文件压缩（兼容）
`compress_large`（`acl`）：
```bash
compress_large gz largefile.dat
compress_large xz data.bin output.xz
```
### 归档工具
- `c7z` - 创建 7z
- `x7z` - 解压 7z
- `l7z` - 列表
- `ctar` - 创建 tar
- `xtar` - 解压 tar
- `ltar` - 列表
- `ctgz` - 创建 tar.gz
- `xtgz` - 解压 tar.gz
- `ltgz` - 列表
- `ctbz` - 创建 tar.bz2
- `xtbz` - 解压 tar.bz2
- `ltbz` - 列表
- `ctxz` - 创建 tar.xz
- `xtxz` - 解压 tar.xz
- `ltxz` - 列表
- `ctzst` - 创建 tar.zst
- `xtzst` - 解压 tar.zst
- `ltzst` - 列表
- `czip` - 创建 zip
- `xzip` - 解压 zip
- `lzip` - 列表
- `crar` - 创建 rar
- `xrar` - 解压 rar
- `lrar` - 列表
### 压缩工具
#### Gzip
- `cgz` - gzip 压缩
- `xgz` - gzip 解压
#### Bzip2
- `cbz` - bzip2 压缩
- `xbz` - bzip2 解压
#### XZ
- `cxz` - xz 压缩
- `xxz` - xz 解压
#### Zstandard
- `czst` - zstd 压缩
- `xzst` - zstd 解压
#### LZ4
- `clz4` - lz4 压缩
- `xlz4` - lz4 解压
### 功能增强
- 自动格式识别
- 命令补全
- 错误处理与日志
- 支持空格文件名
- 大文件进度显示（需要 `pv`）
- 多文件输入
- 压缩级别选项
- 归档完整性检查
- 内容列表
- 时间戳备份
- 跨平台兼容
### 示例
```bash
extract archive.tar.gz
x archive.tar.gz
list_archive archive.zip
lar archive.zip
compress tgz file1.txt file2.txt docs/ archive.tar.gz
compress zip -l 9 important/ backup.zip
backup project_folder
backup database.sql 7z
compress gz -l 9 largefile.dat compressed.gz
compress_large xz largefile.dat
c7z archive.7z files/
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
