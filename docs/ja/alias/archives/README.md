---
description: tar、zip、7zなどを扱うアーカイブおよび圧縮エイリアス。シンプルなコマンドでアーカイブの展開、圧縮、管理を行います。
lang: ja-JP
metaTitle: Archivesエイリアス - Dotfiles (JP)
permalink: /ja/alias/archives/
sidebar: true

meta:
  - name: keywords
    content: archives, compression, tar, zip, 7z, gzip, extract, shell aliases, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: tar、zip、7zなどを扱うアーカイブおよび圧縮エイリアス。シンプルなコマンドでアーカイブの展開、圧縮、管理を行います。
  - name: twitter:title
    content: Archivesエイリアス - Dotfiles
  - name: og:title
    content: Archivesエイリアス - Dotfiles
  - name: og:description
    content: tar、zip、7zなどを扱うアーカイブおよび圧縮エイリアス。シンプルなコマンドでアーカイブの展開、圧縮、管理を行います。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# Archivesエイリアス

アーカイブの圧縮、展開、管理。すべての主要フォーマットをサポート。

## 概要

これらのエイリアスは`archives.aliases.sh`で定義され、Chezmoiによって自動的にロードされます。

## リファレンス

### ユニバーサル展開

`extract`コマンド（短縮形`x`）はあらゆるアーカイブを自動検出して展開します：

```bash
extract archive.tar.gz
```

**サポートフォーマット:** `.tar.bz2`, `.tbz2`, `.tar.gz`, `.tgz`, `.tar.xz`, `.tar.zst`, `.tar`, `.bz2`, `.gz`, `.rar`, `.zip`, `.Z`, `.7z`, `.zst`, `.xz`, `.lz4`, `.lha`, `.lzh`, `.arj`, `.arc`, `.dms`

### 圧縮

`compress`コマンド（短縮形`ac`）でアーカイブを作成：

```bash
compress tgz file1 file2 directory output.tar.gz
compress zip -l 9 important_files backup.zip
```

**サポートフォーマット:** `tar`, `tgz`, `tbz2`, `txz`, `tzst`, `zip`, `7z`, `gz`, `bz2`, `xz`, `zst`, `lz4`, `rar`

### バックアップ

`backup`（短縮形`bak`）でタイムスタンプ付きバックアップを作成：

```bash
backup important_folder
backup database.sql zip
```

### コンテンツ一覧

`list_archive`（短縮形`lar`）でアーカイブの内容を表示：

```bash
list_archive backup.tar.gz
```

### アーカイブツール

| エイリアス | 説明 |
|:---|:---|
| `c7z` | 7zアーカイブを作成 |
| `x7z` | 7zアーカイブを展開 |
| `l7z` | 7zの内容を一覧表示 |
| `ctar` | tarアーカイブを作成 |
| `xtar` | tarアーカイブを展開 |
| `ltar` | tarの内容を一覧表示 |
| `ctgz` | tar.gzアーカイブを作成 |
| `xtgz` | tar.gzアーカイブを展開 |
| `ltgz` | tar.gzの内容を一覧表示 |
| `ctbz` | tar.bz2アーカイブを作成 |
| `xtbz` | tar.bz2アーカイブを展開 |
| `ltbz` | tar.bz2の内容を一覧表示 |
| `ctxz` | tar.xzアーカイブを作成 |
| `xtxz` | tar.xzアーカイブを展開 |
| `ltxz` | tar.xzの内容を一覧表示 |
| `ctzst` | tar.zstアーカイブを作成 |
| `xtzst` | tar.zstアーカイブを展開 |
| `ltzst` | tar.zstの内容を一覧表示 |
| `czip` | zipアーカイブを作成 |
| `xzip` | zipアーカイブを展開 |
| `lzip` | zipの内容を一覧表示 |
| `crar` | rarアーカイブを作成 |
| `xrar` | rarアーカイブを展開 |
| `lrar` | rarの内容を一覧表示 |

### 圧縮ツール

| エイリアス | 説明 |
|:---|:---|
| `cgz` | gzipで圧縮 |
| `xgz` | gzipを展開 |
| `cbz` | bzip2で圧縮 |
| `xbz` | bzip2を展開 |
| `cxz` | xzで圧縮 |
| `xxz` | xzを展開 |
| `czst` | zstdで圧縮 |
| `xzst` | zstdを展開 |
| `clz4` | lz4で圧縮 |
| `xlz4` | lz4を展開 |
