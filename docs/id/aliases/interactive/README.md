---
description: Alias Interaktif adalah koleksi alias yang memungkinkan Anda berinteraksi lebih interaktif dengan shell atau terminal.
lang: id-ID
metaTitle: Alias Interaktif - Dotfiles (ID)
permalink: /alias/interactive/

meta:
  - name: keywords
    content: alias, bash, cp, interaktif, linux, ln, macos, mv, rm, shell, terminal, windows
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias Interaktif adalah koleksi alias yang memungkinkan Anda berinteraksi lebih interaktif dengan shell atau terminal.
  - name: twitter:title
    content: Alias Interaktif - Dotfiles (ID)
  - name: og:title
    content: Alias Interaktif - Dotfiles (ID)
  - name: og:description
    content: Alias Interaktif adalah koleksi alias yang memungkinkan Anda berinteraksi lebih interaktif dengan shell atau terminal.
  - name: og:image:alt
    content: Dotfiles - Dirancang sederhana untuk menyesuaikan kehidupan shell Anda
  - name: og:locale
    content: id_ID
---

# Alias Interaktif

Kelola alias interaktif. Bagian dari konfigurasi **Universal Dotfiles**.

## Ikhtisar

Alias ini didefinisikan di `interactive.aliases.sh` dan dimuat secara otomatis oleh `chezmoi`.

## Alias

Kode ini menyediakan set alias interaktif untuk operasi command line umum. Alias dirancang untuk menyederhanakan dan meningkatkan pengalaman pengguna dengan menambahkan prompt interaktif sebelum menjalankan operasi yang berpotensi destruktif.

* `cp` Salin file dan direktori secara interaktif (konfirmasi sebelum overwrite), tampilkan output verbose.
* `del` Hapus file atau direktori secara interaktif (konfirmasi sebelum setiap penghapusan), tampilkan output verbose secara rekursif.
* `ln` Buat symlink secara interaktif (konfirmasi sebelum overwrite), tampilkan output verbose.
* `mv` Pindahkan atau ganti nama file atau direktori secara interaktif (konfirmasi sebelum overwrite), tampilkan output verbose.
* `rm` Hapus file atau direktori secara interaktif (konfirmasi sebelum setiap penghapusan), tampilkan output verbose.
* `zap` Alias untuk 'rm', hapus file atau direktori secara interaktif, tampilkan output verbose.

### Alias Operasi Trash
* `bin` Paksa hapus secara rekursif semua file di direktori Trash (user's .Trash).
* `chmod` Ubah izin file atau direktori dengan output verbose.
* `chown` Ubah pemilik dan grup file atau direktori dengan output verbose.
* `diff` Bandingkan dan tampilkan perbedaan antara dua file dalam format unified.
* `grep` Cari pola dalam file atau output, tampilkan nomor baris dan pencarian case-insensitive.
* `mkdir` Buat direktori baru, buat direktori parent jika perlu dengan output verbose.
