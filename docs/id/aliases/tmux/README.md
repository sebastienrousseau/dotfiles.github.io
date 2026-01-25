---
description: Alias Tmux adalah koleksi alias yang memungkinkan Anda berinteraksi dengan perintah `tmux`. Tmux adalah alat yang memungkinkan Anda menjalankan beberapa sesi terminal dalam satu jendela.
lang: id-ID
metaTitle: Alias Tmux - Dotfiles (ID)
permalink: /alias/tmux/

meta:
  - name: keywords
    content: alias, tmux, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias Tmux adalah koleksi alias untuk berinteraksi dengan perintah `tmux`.
  - name: twitter:title
    content: Alias Tmux - Dotfiles (ID)
  - name: og:title
    content: Alias Tmux - Dotfiles (ID)
  - name: og:description
    content: Alias Tmux adalah koleksi alias untuk berinteraksi dengan perintah `tmux`.
  - name: og:image:alt
    content: Dotfiles - Dirancang sederhana untuk menyesuaikan kehidupan shell Anda
  - name: og:locale
    content: id_ID
---

# Alias Tmux

Kelola alias Tmux. Bagian dari konfigurasi **Universal Dotfiles**.

## Ikhtisar

Alias ini didefinisikan di `tmux.aliases.sh` dan dimuat secara otomatis oleh `chezmoi`.

## Konfigurasi Tmux

Konfigurasi tmux komprehensif yang dirancang untuk produktivitas dan kemudahan penggunaan. Konfigurasi terdiri dari file modular untuk meningkatkan maintainability.

### Fitur Utama
- Skema warna modern dengan styling status bar khusus OS
- Key binding intuitif dengan Ctrl+a sebagai prefix key
- Kontrol manajemen window dan pane komprehensif
- Persistensi sesi dengan tmux-resurrect dan tmux-continuum
- Menu bantuan yang dapat di-scroll (akses dengan `Ctrl+a ?`)
- Dukungan mouse untuk navigasi mudah

### Alias

| Alias | Deskripsi |
|-------|-------------|
| `tm`  | Mulai tmux |
| `tma` | Attach ke sesi terakhir |
| `tmat` | Attach ke sesi tertentu |
| `tmks` | Kill semua sesi kecuali saat ini |
| `tmka` | Kill semua sesi (server) |
| `tml` | List semua sesi |
| `tmn` | Sesi baru tanpa nama |
| `tms` | Sesi baru dengan nama |
| `tmr` | Reload konfigurasi tmux |
| `tmls` | List window |
| `tmlp` | List pane |
| `tmi` | Tampilkan info tmux |

## Penggunaan

Untuk memulai sesi tmux baru:
```bash
tmux
```

Atau gunakan alias yang disediakan untuk operasi umum.
