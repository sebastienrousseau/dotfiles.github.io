---
description: Alias arsip dan kompresi untuk menangani tar, zip, 7z, dan lainnya. Ekstrak, kompres, dan kelola arsip dengan perintah sederhana.
lang: id-ID
metaTitle: Alias Archives - Dotfiles (ID)
permalink: /id/alias/archives/
sidebar: true

meta:
  - name: keywords
    content: archives, compression, tar, zip, 7z, gzip, extract, shell aliases, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias arsip dan kompresi untuk menangani tar, zip, 7z, dan lainnya. Ekstrak, kompres, dan kelola arsip dengan perintah sederhana.
  - name: twitter:title
    content: Alias Archives - Dotfiles
  - name: og:title
    content: Alias Archives - Dotfiles
  - name: og:description
    content: Alias arsip dan kompresi untuk menangani tar, zip, 7z, dan lainnya. Ekstrak, kompres, dan kelola arsip dengan perintah sederhana.
  - name: og:image:alt
    content: Dotfiles - Dirancang sederhana untuk menyesuaikan kehidupan shell Anda
  - name: og:locale
    content: id_ID
---

# Alias Archives

Kompres, ekstrak, dan kelola arsip. Mendukung semua format utama.

## Ikhtisar

Alias ini didefinisikan di `archives.aliases.sh` dan dimuat secara otomatis oleh Chezmoi.

## Referensi

### Ekstraksi Universal

Perintah `extract` (singkatan `x`) secara otomatis mendeteksi dan mengekstrak arsip apapun:

```bash
extract archive.tar.gz
```

**Format yang didukung:** `.tar.bz2`, `.tbz2`, `.tar.gz`, `.tgz`, `.tar.xz`, `.tar.zst`, `.tar`, `.bz2`, `.gz`, `.rar`, `.zip`, `.Z`, `.7z`, `.zst`, `.xz`, `.lz4`, `.lha`, `.lzh`, `.arj`, `.arc`, `.dms`

### Kompresi

Perintah `compress` (singkatan `ac`) untuk membuat arsip:

```bash
compress tgz file1 file2 directory output.tar.gz
compress zip -l 9 important_files backup.zip
```

**Format yang didukung:** `tar`, `tgz`, `tbz2`, `txz`, `tzst`, `zip`, `7z`, `gz`, `bz2`, `xz`, `zst`, `lz4`, `rar`

### Backup

`backup` (singkatan `bak`) untuk membuat backup dengan timestamp:

```bash
backup important_folder
backup database.sql zip
```

### Daftar Isi

`list_archive` (singkatan `lar`) untuk melihat isi arsip:

```bash
list_archive backup.tar.gz
```

### Alat Arsip

| Alias | Deskripsi |
|:---|:---|
| `c7z` | Buat arsip 7z |
| `x7z` | Ekstrak arsip 7z |
| `l7z` | Daftar isi 7z |
| `ctar` | Buat arsip tar |
| `xtar` | Ekstrak arsip tar |
| `ltar` | Daftar isi tar |
| `ctgz` | Buat arsip tar.gz |
| `xtgz` | Ekstrak arsip tar.gz |
| `ltgz` | Daftar isi tar.gz |
| `ctbz` | Buat arsip tar.bz2 |
| `xtbz` | Ekstrak arsip tar.bz2 |
| `ltbz` | Daftar isi tar.bz2 |
| `ctxz` | Buat arsip tar.xz |
| `xtxz` | Ekstrak arsip tar.xz |
| `ltxz` | Daftar isi tar.xz |
| `ctzst` | Buat arsip tar.zst |
| `xtzst` | Ekstrak arsip tar.zst |
| `ltzst` | Daftar isi tar.zst |
| `czip` | Buat arsip zip |
| `xzip` | Ekstrak arsip zip |
| `lzip` | Daftar isi zip |
| `crar` | Buat arsip rar |
| `xrar` | Ekstrak arsip rar |
| `lrar` | Daftar isi rar |

### Alat Kompresi

| Alias | Deskripsi |
|:---|:---|
| `cgz` | Kompres dengan gzip |
| `xgz` | Ekstrak gzip |
| `cbz` | Kompres dengan bzip2 |
| `xbz` | Ekstrak bzip2 |
| `cxz` | Kompres dengan xz |
| `xxz` | Ekstrak xz |
| `czst` | Kompres dengan zstd |
| `xzst` | Ekstrak zstd |
| `clz4` | Kompres dengan lz4 |
| `xlz4` | Ekstrak lz4 |
