---
description: Alias navigasi direktori dengan bookmark, pelacakan riwayat, dan pintasan cerdas. Navigasi sistem file lebih cepat.
lang: id-ID
metaTitle: Alias CD - Dotfiles (ID)
permalink: /id/alias/cd/
sidebar: true

meta:
  - name: keywords
    content: cd, directory, navigation, bookmarks, shell aliases, dotfiles, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias navigasi direktori dengan bookmark, pelacakan riwayat, dan pintasan cerdas. Navigasi sistem file lebih cepat.
  - name: twitter:title
    content: Alias CD - Dotfiles
  - name: og:title
    content: Alias CD - Dotfiles
  - name: og:description
    content: Alias navigasi direktori dengan bookmark, pelacakan riwayat, dan pintasan cerdas. Navigasi sistem file lebih cepat.
  - name: og:image:alt
    content: Dotfiles - Dirancang sederhana untuk menyesuaikan kehidupan shell Anda
  - name: og:locale
    content: id_ID
---

# Alias CD

Navigasi sistem file lebih cepat. Bookmark, riwayat, pintasan cerdas.

## Ikhtisar

Alias ini didefinisikan di `cd.aliases.sh` dan dimuat secara otomatis oleh Chezmoi.

## Referensi

### Pintasan Navigasi

| Alias | Deskripsi |
|:---|:---|
| `-` | Beralih ke direktori sebelumnya |
| `..` | Naik 1 level |
| `...` | Naik 2 level |
| `....` | Naik 3 level |
| `.....` | Naik 4 level |
| `hom` | Ke direktori home |

### Pintasan Direktori

| Alias | Path | Deskripsi |
|:---|:---|:---|
| `app` | `~/Applications` | Aplikasi |
| `cod` | `~/Code` | Direktori kode |
| `dsk` | `~/Desktop` | Desktop |
| `doc` | `~/Documents` | Dokumen |
| `dot` | `~/.dotfiles` | Dotfiles |
| `dwn` | `~/Downloads` | Unduhan |
| `mus` | `~/Music` | Musik |
| `pic` | `~/Pictures` | Gambar |
| `vid` | `~/Videos` | Video |

### Direktori Sistem

| Alias | Path | Deskripsi |
|:---|:---|:---|
| `etc` | `/etc` | Konfigurasi sistem |
| `var` | `/var` | File variabel |
| `tmp` | `/tmp` | File sementara |
| `usr` | `/usr` | Program pengguna |

### Bookmark

| Perintah | Alias | Deskripsi |
|:---|:---|:---|
| `bookmark [name]` | `bm` | Buat bookmark |
| `bookmark_list` | `bml` | Daftar bookmark |
| `bookmark_update` | `bmu` | Perbarui bookmark |
| `bookmark_remove` | `bmr` | Hapus bookmark |
| `goto <name>` | `bmg` | Pergi ke bookmark |

```bash
bm work-project      # Buat bookmark
bmg work-project     # Pergi ke bookmark
bml                  # Daftar semua bookmark
```

### Riwayat

| Perintah | Alias | Deskripsi |
|:---|:---|:---|
| `dirhistory` | `dh` | Tampilkan riwayat direktori |
| `lwd` | `ld` | Kembali ke direktori terakhir |

### Fitur Lanjutan

| Perintah | Alias | Deskripsi |
|:---|:---|:---|
| `mkcd <dir>` | `mcd` | Buat direktori dan pindah ke sana |
| `proj` | `pr` | Pergi ke root proyek |
| `pushd` | `pd` | Push direktori ke stack |
| `popd` | - | Pop dari stack |
| `dirs` | - | Daftar stack direktori |

## Konfigurasi

Sesuaikan perilaku dengan variabel lingkungan:

```bash
export SHOW_HIDDEN_FILES=true
export ENABLE_COLOR_OUTPUT=true
export AUTO_LIST_AFTER_CD=true
export MAX_RECENT_DIRS=15
export RESTORE_LAST_DIR=true
```

## Bantuan

`cdhelp` untuk menampilkan semua perintah, `cdversion` untuk informasi versi.
