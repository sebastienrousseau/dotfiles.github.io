---
title: Alias Heroku | Dotfiles
description: Alias Heroku CLI untuk Dotfiles. Pintasan untuk perintah app, addon, pipeline, database, dan deploy.
lang: id-ID
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Alias Heroku preview
canonical: /id/aliases/heroku/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Alias Heroku
pageType: docs
schemaType: WebPage
metaTitle: Alias Heroku - Dotfiles (ID)
permalink: /id/aliases/heroku/
meta:
  - name: keywords
    content: alias, heroku, cli, deploy, paas, cloud, dotfiles, linux, macos, shell, bash, zsh
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias Heroku CLI untuk Dotfiles. Pintasan untuk perintah app, addon, pipeline, database, dan deploy.
  - name: twitter:title
    content: Alias Heroku - Dotfiles (ID)
  - name: og:title
    content: Alias Heroku - Dotfiles (ID)
  - name: og:description
    content: Alias Heroku CLI untuk Dotfiles. Pintasan untuk perintah app, addon, pipeline, database, dan deploy.
  - name: og:image:alt
    content: Dotfiles - Dirancang sederhana untuk menyesuaikan kehidupan shell Anda
  - name: og:locale
    content: id_ID
---

# Alias Heroku

Kelola alias Heroku. Bagian dari konfigurasi **Universal Dotfiles**.

## Ikhtisar

Alias ini didefinisikan di `heroku.aliases.sh` dan dimuat secara otomatis oleh `chezmoi`.

## Alias

Koleksi alias untuk [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

### Dasar
- `hkk` Pintasan perintah Heroku CLI.
- `hkh` Tampilkan bantuan Heroku.
- `hkl` Daftar semua perintah.
- `hku` Perbarui Heroku CLI.

### Aplikasi
- `hkapc` Buat aplikasi baru.
- `hkapi` Tampilkan informasi detail aplikasi.
- `hkapk` Hancurkan aplikasi secara permanen.
- `hkapl` Daftar aplikasi.
- `hkapo` Buka aplikasi di browser web.
- `hkapr` Ganti nama aplikasi.

### Log dan Status
- `hklg` Tampilkan output log terbaru.
- `hks` Tampilkan status platform Heroku saat ini.

### Deploy
- `hkrun` Jalankan proses one-off di dyno Heroku.
- `hkrel` Tampilkan rilis aplikasi.
