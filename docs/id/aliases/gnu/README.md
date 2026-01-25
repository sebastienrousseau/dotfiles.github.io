---
description: Alias GNU Core Utilities menyediakan pintasan untuk perintah utilitas inti yang sering digunakan. Semua fungsi dan alias ini adalah pembungkus untuk GNU Core Utilities.
lang: id-ID
metaTitle: Alias GNU Core Utilities - Dotfiles (ID)
permalink: /alias/gnu/

meta:
  - name: keywords
    content: alias, gnu, coreutils, linux, macos, shell, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias GNU Core Utilities menyediakan pintasan untuk perintah utilitas inti yang sering digunakan.
  - name: twitter:title
    content: Alias GNU Core Utilities - Dotfiles (ID)
  - name: og:title
    content: Alias GNU Core Utilities - Dotfiles (ID)
  - name: og:description
    content: Alias GNU Core Utilities menyediakan pintasan untuk perintah utilitas inti yang sering digunakan.
  - name: og:image:alt
    content: Dotfiles - Dirancang sederhana untuk menyesuaikan kehidupan shell Anda
  - name: og:locale
    content: id_ID
---

# Alias GNU

Kelola alias GNU. Bagian dari konfigurasi **Universal Dotfiles**.

## Ikhtisar

Alias ini didefinisikan di `gnu.aliases.sh` dan dimuat secara otomatis oleh `chezmoi`.

## Alias

Ini adalah koleksi alias untuk paket GNU Coreutils, satu set utilitas Unix standar yang sering disertakan dalam distribusi Linux. Alias ini memudahkan penggunaan utilitas ini dengan menyediakan perintah singkat yang menggantikan nama utilitas lengkap.

### Utilitas Manajemen File Dasar
- `basename` Hapus direktori dan sufiks dari nama file.
- `cp` Salin file dan direktori.
- `dirname` Hapus sufiks non-direktori dari nama file.
- `ln` Buat link antar file.
- `ls` Daftar isi direktori.
- `mkdir` Buat direktori.
- `mv` Pindahkan atau ganti nama file atau direktori.
- `pwd` Cetak nama direktori kerja saat ini.
- `rm` Hapus file atau direktori.
- `rmdir` Hapus direktori kosong.

### Utilitas Manipulasi Konten File
- `awk` Bahasa pemindaian dan pemrosesan pola.
- `cat` Gabungkan dan tampilkan file.
- `cut` Hapus bagian dari setiap baris file.
- `diff` Bandingkan file baris per baris.
- `grep` Cetak baris yang cocok dengan pola.
- `head` Keluarkan bagian pertama file.
- `sed` Stream editor untuk memfilter dan mengubah teks.
- `sort` Urutkan baris file teks.
- `tail` Keluarkan bagian terakhir file.
- `tr` Terjemahkan atau hapus karakter.

### Utilitas Checksum dan Kriptografi File
- `md5sum` Cetak atau periksa message digest MD5.
- `sha1sum` Cetak atau periksa message digest SHA1.
- `sha256sum` Cetak atau periksa message digest SHA256.
- `sha512sum` Cetak atau periksa message digest SHA512.

### Utilitas File Lainnya
- `base64` Encode atau decode data base64.
