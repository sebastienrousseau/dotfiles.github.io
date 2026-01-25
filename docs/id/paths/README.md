---
description: Bagaimana Dotfiles mengelola hierarki PATH Anda untuk memastikan alat yang tepat dimuat dalam urutan yang benar.
lang: id-ID
metaTitle: Path - Dotfiles (ID)
permalink: /paths/

meta:
  - name: keywords
    content: path, lingkungan, variabel, hierarki, dotfiles, chezmoi, shell, konfigurasi
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Bagaimana Dotfiles mengelola hierarki PATH Anda untuk memastikan alat yang tepat dimuat dalam urutan yang benar.
  - name: twitter:title
    content: Path - Dotfiles
  - name: og:title
    content: Path - Dotfiles
  - name: og:description
    content: Bagaimana Dotfiles mengelola hierarki PATH Anda untuk memastikan alat yang tepat dimuat dalam urutan yang benar.
  - name: og:image:alt
    content: Dotfiles - Dirancang sederhana untuk menyesuaikan kehidupan shell Anda
  - name: og:locale
    content: id_ID
---

# Path

Manajemen `PATH` modular. Pastikan alat yang tepat dimuat dalam urutan yang benar.

## Temukan

Konfigurasi path dibagi menjadi file berbasis prioritas. Selama `chezmoi apply`:

1. File dalam direktori ini dipindai secara alfabetis
2. Konten digabungkan ke dalam `~/.config/shell/paths.sh`
3. Dimuat oleh `.zshrc` saat startup

## Referensi

| Skrip | Deskripsi |
|:---|:---|
| `00-default.paths.sh` | Path sistem dasar (`/usr/bin`, `/sbin`) dan Homebrew. Dimuat pertama. |
| `99-custom.paths.sh` | Path pengguna kustom (SDK bahasa, bin lokal). Dimuat terakhir untuk prioritas. |

## Mulai

### Menambahkan path pengguna

1. Edit `99-custom.paths.sh` atau buat file baru (misalnya, `50-myproject.paths.sh`)
2. Tambahkan path Anda:
   ```bash
   export PATH="$PATH:/path/to/dir"
   ```
3. Terapkan perubahan:
   ```bash
   chezmoi apply
   ```
4. Verifikasi:
   ```bash
   echo $PATH
   ```
