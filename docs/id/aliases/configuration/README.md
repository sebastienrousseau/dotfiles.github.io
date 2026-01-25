---
description: Alias shell untuk Bash dan Zsh yang langsung membuka file konfigurasi shell, Git, SSH, dan server.
lang: id-ID
metaTitle: Alias Configuration - Dotfiles (ID)
permalink: /id/alias/configuration/
sidebar: true

meta:
  - name: keywords
    content: configuration aliases, shell config, dotfiles, bash aliases, zsh aliases, git config, ssh config
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Alias Configuration - Dotfiles
  - name: twitter:description
    content: Alias shell yang langsung membuka file konfigurasi shell, Git, SSH, dan server.
  - name: og:title
    content: Alias Configuration - Dotfiles
  - name: og:description
    content: Alias shell yang langsung membuka file konfigurasi shell, Git, SSH, dan server.
  - name: og:image:alt
    content: Dotfiles - Dirancang sederhana untuk menyesuaikan kehidupan shell Anda
  - name: og:locale
    content: id_ID
---

# Alias Configuration

Buka file konfigurasi di editor default dengan satu perintah.

## Ikhtisar

Alias Configuration menyediakan pintasan untuk membuka file konfigurasi yang sering diedit. Alias ini didefinisikan di `configuration.aliases.sh` dan dimuat secara otomatis oleh chezmoi.

Setiap alias meluncurkan file yang sesuai di editor teks default sistem, menghilangkan kebutuhan untuk mengingat path file atau mengetik perintah panjang.

## Referensi

### Konfigurasi Shell

| Alias | Deskripsi |
|-------|-------------|
| `bshrc` | Buka file konfigurasi Bash (~/.bashrc) |
| `bshp` | Buka profil Bash (~/.bash_profile) |
| `zshrc` | Buka file konfigurasi Zsh (~/.zshrc) |
| `zshp` | Buka profil Zsh (~/.zprofile) |

### Kontrol Versi

| Alias | Deskripsi |
|-------|-------------|
| `gcfg` | Buka file konfigurasi Git (~/.gitconfig) |
| `gign` | Buka file Gitignore (~/.gitignore) |

### Jaringan dan Server

| Alias | Deskripsi |
|-------|-------------|
| `apconf` | Buka file konfigurasi Apache |
| `ngconf` | Buka file konfigurasi Nginx |
| `sshconf` | Buka file konfigurasi SSH (~/.ssh/config) |
| `hosts` | Buka file hosts (/etc/hosts) |

### Alat Pengembangan

| Alias | Deskripsi |
|-------|-------------|
| `dockcomp` | Buka file Docker Compose |
| `eddir` | Buka direktori saat ini di editor default |
