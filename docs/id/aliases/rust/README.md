---
description: Alias Rust adalah koleksi alias yang memungkinkan Anda berinteraksi dengan perintah `rustup` dan `cargo`. Dirancang untuk digunakan dengan toolchain manager `rustup` dan package manager `cargo`.
lang: id-ID
metaTitle: Alias Rust - Dotfiles (ID)
permalink: /alias/rust/

meta:
  - name: keywords
    content: alias, cargo, rust, rustup, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias Rust adalah koleksi alias untuk berinteraksi dengan perintah `rustup` dan `cargo`.
  - name: twitter:title
    content: Alias Rust - Dotfiles (ID)
  - name: og:title
    content: Alias Rust - Dotfiles (ID)
  - name: og:description
    content: Alias Rust adalah koleksi alias untuk berinteraksi dengan perintah `rustup` dan `cargo`.
  - name: og:image:alt
    content: Dotfiles - Dirancang sederhana untuk menyesuaikan kehidupan shell Anda
  - name: og:locale
    content: id_ID
---

# Alias Rust

Kelola alias Rust. Bagian dari konfigurasi **Universal Dotfiles**.

## Ikhtisar

Alias ini didefinisikan di `rust.aliases.sh` dan dimuat secara otomatis oleh `chezmoi`.

## Alias

Kode ini menyediakan set alias komprehensif untuk pengembangan Rust menggunakan perintah `cargo` dan `rustup`.

### Perintah Dasar
- `cg` - Pintasan Cargo
- `cgn` - Buat proyek binary baru
- `cgni` - Buat proyek library baru
- `cginit` - Inisialisasi proyek di direktori saat ini

### Build dan Run
- `cgb` - Debug build
- `cgbr` - Release build
- `cgr` - Debug run
- `cgrr` - Release run
- `cgw` - Watch dan rebuild

### Testing dan Benchmark
- `cgt` - Jalankan test
- `cgtr` - Jalankan test dalam mode release
- `cgbh` - Jalankan benchmark
- `cgta` - Test semua target
- `cgtt` - Test single-threaded

### Kualitas Kode
- `cgc` - Periksa kompilasi
- `cgcl` - Bersihkan artifact build
- `cgcy` - Jalankan linter Clippy
- `cgf` - Format kode
- `cgfa` - Format semua kode
- `cgfx` - Auto-fix masalah kode
- `cgaud` - Periksa kerentanan keamanan

### Dokumentasi
- `cgd` - Build dan buka dokumentasi
- `cgdr` - Build dokumentasi release
- `cgdo` - Dokumentasi item private

### Dependensi
- `cga` - Tambah dependensi
- `cgad` - Tambah dependensi development
- `cgu` - Update dependensi
- `cgo` - Periksa dependensi outdated
- `cgtree` - Tampilkan tree dependensi

### Update dan Install
- `ru` - Update semua toolchain
- `rus` - Update toolchain stable
- `run` - Update toolchain nightly
- `rti` - Install toolchain tertentu

### Manajemen Toolchain
- `rtl` - List toolchain terinstal
- `rtu` - Uninstall toolchain
- `rde` - Atur toolchain default
