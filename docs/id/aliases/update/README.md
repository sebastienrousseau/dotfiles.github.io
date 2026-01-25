---
description: Alias Update membuat alias pintasan yang nyaman untuk memperbarui sistem operasi dan perangkat lunak yang terinstal. Membantu melindungi dan meningkatkan instalasi Dotfiles Anda saat ini.
lang: id-ID
metaTitle: Alias Update - Dotfiles (ID)
permalink: /alias/update/

meta:
  - name: keywords
    content: alias, update, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias Update membuat alias pintasan untuk memperbarui sistem operasi dan perangkat lunak yang terinstal.
  - name: twitter:title
    content: Alias Update - Dotfiles (ID)
  - name: og:title
    content: Alias Update - Dotfiles (ID)
  - name: og:description
    content: Alias Update membuat alias pintasan untuk memperbarui sistem operasi dan perangkat lunak yang terinstal.
  - name: og:image:alt
    content: Dotfiles - Dirancang sederhana untuk menyesuaikan kehidupan shell Anda
  - name: og:locale
    content: id_ID
---

# Alias Update

Kelola alias Update. Bagian dari konfigurasi **Universal Dotfiles**.

## Ikhtisar

Alias ini didefinisikan di `update.aliases.sh` dan dimuat secara otomatis oleh `chezmoi`.

## Alias

Kode ini menyediakan set alias untuk memperbarui berbagai perangkat lunak di macOS dan Linux.

### macOS
- `upd` memperbarui perangkat lunak macOS, paket Homebrew, Homebrew Cask, aplikasi Mac App Store, Rust stable toolchain, Ruby Gems, paket Python, paket Node.js.

### Linux
- `open` membuka file atau URL di aplikasi pilihan pengguna.
- `pbcopy` salin ke clipboard.
- `pbpaste` paste dari clipboard.
- `upd` memperbarui paket Linux, membersihkan cache paket, memperbarui paket pnpm, memperbarui Rust stable toolchain, memperbarui Ruby Gems, memperbarui paket Python, memperbarui paket Node.js.
