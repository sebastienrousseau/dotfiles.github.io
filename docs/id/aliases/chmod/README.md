---
description: Alias chmod untuk menyederhanakan manajemen izin file dan direktori. Pintasan cepat untuk pola izin umum seperti 755, 644, dan lainnya.
lang: id-ID
metaTitle: Alias Chmod - Dotfiles (ID)
permalink: /id/alias/chmod/
sidebar: true

meta:
  - name: keywords
    content: chmod aliases, file permissions, shell shortcuts, dotfiles, unix permissions
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Chmod - Dotfiles
  - name: twitter:description
    content: Alias chmod untuk menyederhanakan manajemen izin file dan direktori.
  - name: og:title
    content: Alias Chmod - Dotfiles
  - name: og:description
    content: Alias chmod untuk menyederhanakan manajemen izin file dan direktori.
  - name: og:image:alt
    content: Dotfiles - Dirancang sederhana untuk menyesuaikan kehidupan shell Anda
  - name: og:locale
    content: id_ID
---

# Alias Chmod

Pintasan untuk manajemen izin file dan direktori.

## Ikhtisar

Alias chmod menyediakan cara efisien untuk mengelola izin file dan direktori dari command line. Alih-alih mengingat kode izin numerik, gunakan alias intuitif seperti `chmod_755` atau `chmod_u+x` untuk mengatur mode akses yang diperlukan dengan cepat.

Alias ini didefinisikan di `chmod.aliases.sh` dan dimuat secara otomatis oleh chezmoi.

## Referensi

### Alias Izin Umum

| Alias | Izin | Deskripsi |
|-------|-------------|-------------|
| `chmod_000` | `----------` | Tidak ada izin untuk siapapun |
| `chmod_400` | `r--------` | Hanya baca untuk pemilik saja |
| `chmod_444` | `r--r--r--` | Hanya baca untuk semua |
| `chmod_600` | `rw-------` | Baca tulis untuk pemilik saja |
| `chmod_644` | `rw-r--r--` | Pemilik baca tulis, lainnya hanya baca |
| `chmod_666` | `rw-rw-rw-` | Baca tulis untuk semua |
| `chmod_755` | `rwxr-xr-x` | Penuh untuk pemilik, baca/eksekusi untuk lainnya |
| `chmod_764` | `rwxrw-r--` | Penuh untuk pemilik, baca tulis untuk grup |
| `chmod_777` | `rwxrwxrwx` | Izin penuh untuk semua |

### Alias Izin Pemilik

| Alias | Deskripsi |
|-------|-------------|
| `chmod_u+x` | Tambah izin eksekusi untuk pemilik |
| `chmod_u-x` | Hapus izin eksekusi dari pemilik |
| `chmod_u+w` | Tambah izin tulis untuk pemilik |
| `chmod_u-w` | Hapus izin tulis dari pemilik |
| `chmod_u+r` | Tambah izin baca untuk pemilik |
| `chmod_u-r` | Hapus izin baca dari pemilik |

### Alias Izin Grup

| Alias | Deskripsi |
|-------|-------------|
| `chmod_g+x` | Tambah izin eksekusi untuk grup |
| `chmod_g-x` | Hapus izin eksekusi dari grup |
| `chmod_g+w` | Tambah izin tulis untuk grup |
| `chmod_g-w` | Hapus izin tulis dari grup |
| `chmod_g+r` | Tambah izin baca untuk grup |
| `chmod_g-r` | Hapus izin baca dari grup |

### Alias Izin Lainnya

| Alias | Deskripsi |
|-------|-------------|
| `chmod_o+x` | Tambah izin eksekusi untuk lainnya |
| `chmod_o-x` | Hapus izin eksekusi dari lainnya |
| `chmod_o+w` | Tambah izin tulis untuk lainnya |
| `chmod_o-w` | Hapus izin tulis dari lainnya |
| `chmod_o+r` | Tambah izin baca untuk lainnya |
| `chmod_o-r` | Hapus izin baca dari lainnya |

### Alias Tipe File

| Alias | Deskripsi |
|-------|-------------|
| `chmod_755d` | Atur izin semua direktori ke `rwxr-xr-x` |
| `chmod_644f` | Atur izin semua file ke `rw-r--r--` |

### Fungsi Izin Rekursif

Fungsi `change_permission` menerapkan izin secara rekursif dengan konfirmasi:

```bash
change_permission 755 /path/to/directory -R
```
