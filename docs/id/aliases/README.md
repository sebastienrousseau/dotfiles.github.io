---
description: Alias shell yang membuat pintasan untuk perintah yang sering digunakan. Tingkatkan produktivitas dengan mengurangi pengetikan dalam alur kerja harian Anda.
lang: id-ID
metaTitle: Alias - Dotfiles (ID)
permalink: /id/alias/

meta:
  - name: keywords
    content: alias, shell, bash, zsh, pintasan, perintah, dotfiles, chezmoi, produktivitas, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias shell yang membuat pintasan untuk perintah yang sering digunakan. Tingkatkan produktivitas dengan mengurangi pengetikan dalam alur kerja harian Anda.
  - name: twitter:title
    content: Alias - Dotfiles
  - name: og:title
    content: Alias - Dotfiles
  - name: og:description
    content: Alias shell yang membuat pintasan untuk perintah yang sering digunakan. Tingkatkan produktivitas dengan mengurangi pengetikan dalam alur kerja harian Anda.
  - name: og:image:alt
    content: Dotfiles - Dirancang sederhana untuk menyesuaikan kehidupan shell Anda
  - name: og:locale
    content: id_ID
---

# Alias

Alias shell modular yang dikelola oleh **Chezmoi**. Ketik lebih sedikit, lakukan lebih banyak.

## Temukan

Alias diorganisir ke dalam file-file kecil yang terfokus — satu untuk setiap alat atau alur kerja. Selama `chezmoi apply`, semua file alias digabungkan ke dalam `~/.config/shell/aliases.sh` dan dimuat oleh shell Anda.

## Mulai

### Menambahkan alias

1. Buat file baru (misalnya, `mytool/mytool.aliases.sh`)
2. Definisikan alias Anda:
   ```bash
   alias mycmd="echo 'Hello World'"
   ```
3. Terapkan perubahan:
   ```bash
   chezmoi apply
   ```

## Referensi

Jelajahi alias berdasarkan kategori:

<!-- markdownlint-disable MD013-->

| Kategori | Deskripsi |
| :--- | :--- |
| [AI](ai/) | Pintasan asisten AI dan alat LLM |
| [Archives](archives/) | Kompres dan ekstrak file |
| [CD](cd/) | Navigasi sistem file |
| [Chmod](chmod/) | Ubah izin file |
| [Clear](clear/) | Bersihkan layar terminal |
| [Compliance](compliance/) | Alat SOC2 dan privasi |
| [Configuration](configuration/) | Kelola dotfiles dan konfigurasi shell |
| [Default](default/) | Alias shell default |
| [Diagnostics](diagnostics/) | Penyembuhan mandiri dan pemeriksaan kesehatan |
| [Dig](dig/) | Kueri server DNS |
| [Disk Usage](disk-usage/) | Tampilkan informasi penggunaan disk |
| [Docker](docker/) | Manajemen kontainer |
| [Editor](editor/) | Konfigurasi editor teks |
| [Find](find/) | Cari file dan direktori |
| [Fonts](fonts/) | Manajemen cache font |
| [GCloud](gcloud/) | Alat Google Cloud SDK |
| [Git](git/) | Kontrol versi Git |
| [GNU](gnu/) | Utilitas inti GNU |
| [Go](go/) | Alat bahasa Go |
| [Heroku](heroku/) | Heroku CLI |
| [Installer](installer/) | Bootstrap dan deployment |
| [Interactive](interactive/) | Perilaku shell interaktif |
| [Kubernetes](kubernetes/) | Kubernetes, Helm, K9s |
| [Legal](legal/) | Alat pemindaian lisensi |
| [macOS](macOS/) | Pengaturan khusus macOS |
| [Make](make/) | Utilitas GNU Make |
| [Mkdir](mkdir/) | Buat direktori |
| [Modern](modern/) | Pengganti alat berbasis Rust |
| [NPM](npm/) | Manajer paket Node.js |
| [Permission](permission/) | Izin file |
| [PNPM](pnpm/) | Manajer paket PNPM |
| [PS](ps/) | Status proses |
| [Python](python/) | Utilitas Python |
| [Rsync](rsync/) | Transfer file efisien |
| [Rust](rust/) | Alat pemrograman Rust |
| [Security](security/) | Immutability dan penandatanganan |
| [Subversion](subversion/) | Kontrol versi SVN |
| [Sudo](sudo/) | Operasi superuser |
| [Terraform](terraform/) | Infrastructure as code |
| [Tmux](tmux/) | Multiplexer terminal |
| [Update](update/) | Perbarui dotfiles |
| [UUID](uuid/) | Generate UUID |
| [Wget](wget/) | Pengunduh baris perintah |
| [Yarn](yarn/) | Manajer paket Yarn |

<!-- markdownlint-enable MD013-->
