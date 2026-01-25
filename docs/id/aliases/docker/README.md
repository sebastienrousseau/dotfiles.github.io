---
description: Alias shell untuk Docker, Docker Compose, dan Docker Swarm. Kelola kontainer, image, volume, dan jaringan secara efisien.
lang: id-ID
metaTitle: Alias Docker - Dotfiles (ID)
permalink: /id/alias/docker/
sidebar: true

meta:
  - name: keywords
    content: docker, docker-compose, container, shell aliases, dotfiles, devops
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias shell untuk Docker, Docker Compose, dan Docker Swarm. Kelola kontainer, image, volume, dan jaringan secara efisien.
  - name: twitter:title
    content: Alias Docker - Dotfiles
  - name: og:title
    content: Alias Docker - Dotfiles
  - name: og:description
    content: Alias shell untuk Docker, Docker Compose, dan Docker Swarm. Kelola kontainer, image, volume, dan jaringan secara efisien.
  - name: og:image:alt
    content: Dotfiles - Dirancang sederhana untuk menyesuaikan kehidupan shell Anda
  - name: og:locale
    content: id_ID
---

# Alias Docker

Pintasan shell untuk Docker, Docker Compose, dan Docker Swarm.

## Ikhtisar

Alias ini didefinisikan di `docker.aliases.sh` dan dimuat secara otomatis oleh Chezmoi.

## Referensi

### Perintah Dasar

| Alias | Deskripsi |
|:---|:---|
| `dk` | Pintasan Docker |
| `dkv` | Tampilkan versi Docker |
| `dki` | Tampilkan informasi sistem |
| `dkl` | Login ke registry Docker |
| `dklo` | Logout dari registry Docker |

### Operasi Kontainer

| Alias | Deskripsi |
|:---|:---|
| `dkps` | Daftar kontainer yang berjalan |
| `dkpsa` | Daftar semua kontainer |
| `dkr` | Jalankan perintah di kontainer baru |
| `dkri` | Jalankan kontainer interaktif |
| `dkrd` | Jalankan kontainer di background |
| `dks` | Mulai kontainer |
| `dkst` | Hentikan kontainer |
| `dkrs` | Mulai ulang kontainer |
| `dkrm` | Hapus kontainer |
| `dkrma` | Hapus semua kontainer |

### Image

| Alias | Deskripsi |
|:---|:---|
| `dki` | Daftar image |
| `dkia` | Daftar semua image |
| `dkb` | Build image |
| `dkbt` | Build dan tag image |
| `dkpu` | Push image |
| `dkpl` | Pull image |
| `dkrmi` | Hapus image |

### Docker Compose

| Alias | Deskripsi |
|:---|:---|
| `dc` | Pintasan Docker Compose |
| `dcu` | Buat dan mulai kontainer |
| `dcud` | Mulai di background |
| `dcd` | Hentikan dan hapus kontainer |
| `dcr` | Mulai ulang layanan |
| `dcps` | Daftar kontainer |
| `dcl` | Tampilkan log |
| `dclf` | Ikuti log |

### Volume dan Jaringan

| Alias | Deskripsi |
|:---|:---|
| `dkvls` | Daftar volume |
| `dkvc` | Buat volume |
| `dkvrm` | Hapus volume |
| `dknls` | Daftar jaringan |
| `dknc` | Buat jaringan |
| `dknrm` | Hapus jaringan |
