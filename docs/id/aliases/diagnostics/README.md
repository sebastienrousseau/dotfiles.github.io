---
description: Alias shell untuk penyembuhan mandiri dan pemeriksaan kesehatan sistem. Deteksi dan perbaiki masalah di lingkungan dotfiles.
lang: id-ID
metaTitle: Alias Diagnostics - Dotfiles (ID)
permalink: /id/alias/diagnostics/
sidebar: true

meta:
  - name: keywords
    content: diagnostics, health check, self-healing, dotfiles, shell aliases, chezmoi
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias shell untuk penyembuhan mandiri dan pemeriksaan kesehatan sistem. Deteksi dan perbaiki masalah di lingkungan dotfiles.
  - name: twitter:title
    content: Alias Diagnostics - Dotfiles
  - name: og:title
    content: Alias Diagnostics - Dotfiles
  - name: og:description
    content: Alias shell untuk penyembuhan mandiri dan pemeriksaan kesehatan sistem. Deteksi dan perbaiki masalah di lingkungan dotfiles.
  - name: og:image:alt
    content: Dotfiles - Dirancang sederhana untuk menyesuaikan kehidupan shell Anda
  - name: og:locale
    content: id_ID
---

# Alias Diagnostics

Alat penyembuhan mandiri dan pemeriksaan kesehatan sistem.

## Ikhtisar

Alias ini didefinisikan di `diagnostics.aliases.sh` dan dimuat secara otomatis oleh Chezmoi.

## Referensi

### Kesehatan dan Perbaikan

| Alias | Deskripsi |
|:---|:---|
| `doc`, `dot-doctor` | Jalankan skrip pemeriksaan kesehatan sistem (`doctor.sh`) |
| `drift`, `dot-drift` | Periksa apakah file lokal menyimpang dari status yang dikelola (`chezmoi verify`) |
| `heal`, `dot-heal` | Perbaiki penyimpangan dengan menerapkan status yang dikelola (`chezmoi apply`) |
| `doc-full` | Jalankan doctor dengan informasi debug path yang diperluas |
