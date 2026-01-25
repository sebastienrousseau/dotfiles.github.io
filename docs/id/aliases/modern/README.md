---
description: Alias Modern untuk Dotfiles
lang: id-ID
metaTitle: Alias Modern - Dotfiles (ID)
permalink: /alias/modern/
---

# Alias Alat Modern

Kelola alias alat modern. Bagian dari konfigurasi **Universal Dotfiles**.

## Ikhtisar

Alias ini didefinisikan di `modern.aliases.sh` dan dimuat secara otomatis oleh `chezmoi`.
Ini menggantikan alat Unix legacy dengan alternatif yang lebih cepat dan lebih pintar (berbasis Rust).

## Alias

### Daftar File (eza)
Jika `eza` terinstal (pengganti `ls`):
- `ls` - Daftar file (`eza --icons`)
- `ll` - Daftar panjang (`eza -alF`)
- `la` - Daftar semua (`eza -a`)
- `lt` - Tampilan tree (`eza --tree`)

*(Fallback ke standar `ls` jika `eza` tidak ditemukan)*

### Konten File (bat)
Jika `bat` terinstal (pengganti `cat`):
- `cat` - Tampilkan konten file dengan syntax highlighting

### Pencarian (rg)
Jika `rg` terinstal (pengganti `grep`):
- `grep` - Cari dengan Ripgrep
