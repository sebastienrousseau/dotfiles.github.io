---
description: Konfigurasi shell generasi berikutnya. Performa tinggi, aman, dan AI-native. Dikelola oleh Chezmoi.
lang: id-ID
metaTitle: Tentang Dotfiles - Dotfiles (ID)
permalink: /about/

meta:
  - name: keywords
    content: chezmoi, dotfiles, konfigurasi, otomatisasi, macos, linux, rust, zellij, shell, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Konfigurasi shell generasi berikutnya. Performa tinggi, aman, dan AI-native. Dikelola oleh Chezmoi.
  - name: twitter:title
    content: Tentang Dotfiles
  - name: og:title
    content: Tentang Dotfiles
  - name: og:description
    content: Konfigurasi shell generasi berikutnya. Performa tinggi, aman, dan AI-native. Dikelola oleh Chezmoi.
  - name: og:image:alt
    content: Dotfiles - Dirancang sederhana untuk menyesuaikan kehidupan shell Anda
  - name: og:locale
    content: id_ID
---

# Tentang Dotfiles

Standar modern untuk konfigurasi shell. Dibangun di atas **Chezmoi** untuk manajemen lingkungan lintas platform yang aman.

## Temukan

Dotfiles v0.2.474 mengubah terminal Anda menjadi ruang kerja yang kuat dan terpadu. Berbeda dengan dotfiles lama yang bergantung pada Makefile kompleks atau skrip symlink, Dotfiles menggunakan pendekatan berbasis template yang atomik, cepat, dan dapat direproduksi.

### Yang Baru

- **Inti Modern** — Alternatif Rust berperforma tinggi menggantikan alat Unix lama:
  - **Atuin** untuk riwayat shell
  - **Yazi** untuk manajemen file
  - **Zellij** untuk multiplexing terminal
  - **Ghostty** untuk terminal dengan akselerasi GPU
  - **NeoVim** untuk pengeditan modern
- **Keamanan Native** — Penandatanganan SSH native sepenuhnya tanpa agen pihak ketiga
- **Mode Interaktif** — Perintah `dot learn` baru memandu Anda melalui fitur-fitur

## Mulai

### Persyaratan

- **macOS**, **Linux (Ubuntu/Debian)**, atau **Windows (WSL)**
- **Curl** dan **Git**
- **Chezmoi** (diinstal secara otomatis)
- **Nerd Font** (untuk ikon terminal)

### Instalasi

Jalankan satu perintah untuk menginstal seluruh suite:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/v0.2.474/install.sh)"
```

Installer akan:

1. Menginstal binary `chezmoi`
2. Mengkloning repositori
3. Menginstal paket yang diperlukan melalui Homebrew (macOS) atau Apt (Linux)
4. Menerapkan konfigurasi Anda

### Jelajahi

Setelah instalasi, restart terminal Anda dan jalankan:

```bash
dot learn
```

Ini meluncurkan tur interaktif lingkungan baru Anda.

## Sesuaikan

Konfigurasi Anda berada di `~/.local/share/chezmoi`:

```
~/.local/share/chezmoi
├── dot_zshenv              # Titik masuk shell
├── dot_config/             # XDG Base Config (~/.config)
│   ├── atuin/              # Riwayat shell
│   ├── ghostty/            # Emulator terminal
│   ├── git/                # Konfigurasi Git
│   ├── yazi/               # Manajer file
│   ├── zellij/             # Multiplexer terminal
│   ├── zsh/                # Konfigurasi Zsh
│   └── shell/              # Alias dan path bersama
├── provision/              # Skrip siklus hidup
├── install.sh              # Installer universal
└── docs/                   # Dokumentasi
```

## Kontribusi

Bergabunglah dengan komunitas. Tinjau [Kode Etik][code-of-conduct-url] dan [Panduan Kontribusi][contributing-url] kami.

[code-of-conduct-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CODE-OF-CONDUCT.md
[contributing-url]: https://github.com/sebastienrousseau/dotfiles/blob/master/.github/CONTRIBUTING.md
