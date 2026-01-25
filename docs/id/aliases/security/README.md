---
description: Alias Security untuk Dotfiles
lang: id-ID
metaTitle: Alias Security - Dotfiles (ID)
permalink: /alias/security/
---

# Alias Security

Alat untuk memperkuat lingkungan dan mengelola immutability konfigurasi.

## Immutability

| Alias | Deskripsi |
|-------|-------------|
| `lock-configs` | Kunci file penting (`.zshrc`, dll.) untuk mencegah perubahan (`chflags uchg` / `chattr +i`). |
| `unlock-configs` | Buka kunci file penting untuk diedit. |
| `check-locks` | Periksa status kunci file penting. |

## Penandatanganan Git

(Lihat [Alias Git](../git/README.md) untuk konfigurasi penandatanganan)
