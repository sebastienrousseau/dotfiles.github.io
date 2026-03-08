---
title: Tentang Dotfiles
description: Konfigurasi shell generasi berikutnya. Performa tinggi, aman, dan AI-native. Dikelola oleh Chezmoi. Kompatibel dengan macOS, Linux, dan WSL melalui Dotfiles.
lang: id-ID
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Tentang Dotfiles preview
canonical: /id/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Tentang Dotfiles
pageType: docs
schemaType: WebPage
metaTitle: Tentang Dotfiles - Dotfiles (ID)
permalink: /id/about/
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

Dotfiles v0.2.481 mengubah terminal Anda menjadi ruang kerja yang kuat dan terpadu. Berbeda dengan dotfiles lama yang bergantung pada Makefile kompleks atau skrip symlink, Dotfiles menggunakan pendekatan berbasis template yang atomik, cepat, dan dapat direproduksi.

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
sh -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/v0.2.481/install.sh)"
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

## Perintah inti

CLI `dot` menyediakan 53 perintah yang diorganisir berdasarkan kategori.

### Inti

- `dot apply` — menerapkan perubahan konfigurasi.
- `dot sync` — mengambil status repo terbaru dan menerapkannya.
- `dot update` — memperbarui repo dan menghangatkan cache.
- `dot add` — menambahkan file baru ke sumber Chezmoi.
- `dot diff` — menampilkan perubahan yang tertunda sebelum diterapkan.
- `dot status` — menampilkan status file yang dikelola.
- `dot remove` — menghapus file dari pengelolaan dan menghapus entri sumber.
- `dot cd` — membuka shell di direktori sumber Chezmoi.
- `dot edit` — membuka file yang dikelola di editor Anda.
- `dot clean-cache` — membersihkan cache sementara.
- `dot prewarm` — mengisi cache terlebih dahulu untuk startup shell yang lebih cepat.

### Diagnostik

- `dot doctor` — memvalidasi path, alat, dan status shell.
- `dot heal` — memperbaiki status yang hilang atau rusak secara otomatis.
- `dot health` — menjalankan pemeriksaan kesehatan ringan.
- `dot verify` — memeriksa integritas file terhadap sumber.
- `dot scorecard` — menampilkan skor kualitas konfigurasi.
- `dot snapshot` — menangkap status saat ini untuk perbandingan nanti.
- `dot smoke-test` — memvalidasi toolchain inti secara end-to-end.
- `dot chaos` — menyuntikkan kesalahan untuk menguji penyembuhan diri.
- `dot bundle` — mengekspor bundel konfigurasi portabel.
- `dot rollback` — mengembalikan ke snapshot sebelumnya.
- `dot drift` — mendeteksi perubahan tak terduga pada file yang dikelola.
- `dot history` — menampilkan log riwayat apply/sync.
- `dot benchmark` — mengukur waktu startup shell.
- `dot perf` — memprofilkan inisialisasi shell yang lambat.

### Tampilan

- `dot theme` — mengubah skema warna terminal.
- `dot wallpaper` — mengatur wallpaper desktop (macOS).
- `dot fonts` — menginstal atau memperbarui Nerd Fonts.
- `dot tune` — menyesuaikan kepadatan UI dan gaya prompt.

### Keamanan

- `dot backup` — membuat cadangan konfigurasi terenkripsi.
- `dot encrypt-check` — memverifikasi enkripsi rahasia saat disimpan.
- `dot firewall` — mengonfigurasi aturan firewall host.
- `dot telemetry` — mengontrol telemetri penggunaan anonim.
- `dot dns-doh` — mengaktifkan DNS-over-HTTPS.
- `dot lock-screen` — mengunci layar segera.
- `dot usb-safety` — membatasi auto-mount penyimpanan massal USB.

### Rahasia

- `dot secrets-init` — menginisialisasi backend rahasia (age / GPG).
- `dot secrets` — menampilkan daftar entri rahasia terenkripsi.
- `dot secrets-create` — membuat rahasia terenkripsi baru.
- `dot ssh-key` — menghasilkan atau merotasi pasangan kunci SSH.
- `dot ssh-cert` — meminta sertifikat SSH dari CA.

### AI

- `dot ai` — membuka sesi asisten AI interaktif.
- `dot ai-setup` — mengonfigurasi kunci API untuk penyedia AI.
- `dot ai-query` — mengirim prompt sekali pakai ke model AI.
- Wrapper alat AI: `cl`, `gemini`, `kiro`, `sgpt`, `ollama`, `opencode`, `aider`.

### Alat

- `dot tools` — menampilkan pengganti CLI yang disertakan dan statusnya.
- `dot new` — membuat file alias atau fungsi baru.
- `dot sandbox` — membuka shell sandbox sekali pakai.
- `dot keys` — menampilkan binding tombol saat ini.
- `dot learn` — memulai tutorial interaktif.

### Meta

- `dot upgrade` — memperbarui Dotfiles ke rilis terbaru.
- `dot packages` — menampilkan paket yang diinstal yang dikelola oleh Dotfiles.
- `dot version` / `dot help` — menampilkan informasi versi atau penggunaan
