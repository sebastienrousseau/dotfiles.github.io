---
title: System Alias | Dotfiles
description: Jelajahi alias System di Dotfiles v0.2.495. Perintah system singkat dan mudah diingat untuk macOS, Linux, dan WSL.
lang: id-ID
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: System Alias | Dotfiles preview
canonical: /id/aliases/system/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System Alias
pageType: docs
schemaType: WebPage
metaTitle: System Alias | Dotfiles
permalink: /id/aliases/system/
sidebar: true
meta:
  - name: keywords
    content: system, alias, shell, bash, zsh, dotfiles, chezmoi, perintah system
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Jelajahi alias System di Dotfiles v0.2.495. Perintah system singkat dan mudah diingat.
  - name: twitter:title
    content: System Alias | Dotfiles
  - name: og:title
    content: System Alias | Dotfiles
  - name: og:description
    content: Jelajahi alias System di Dotfiles v0.2.495. Perintah system singkat dan mudah diingat.
  - name: og:image:alt
    content: Dotfiles – Dirancang untuk kehidupan shell Anda
  - name: og:locale
    content: id_ID
---

# System Alias

Perintah singkat system.

Halaman ini memperkenalkan satu grup alias dan pintasan perintah umum yang terkait. Baca halaman ini terlebih dahulu untuk memahami konvensi penamaan, input yang diharapkan, dan pola eksekusi yang aman. Kemudian buka lampiran referensi untuk inventaris perintah lengkap dan sintaksis yang tepat. Alias ini mengurangi pengetikan berulang dan menjaga perilaku alur kerja yang konsisten di macOS, Linux, dan WSL.

## Kapan digunakan

Gunakan halaman ini sebelum pekerjaan shell harian ketika Anda membutuhkan pola perintah yang dapat diprediksi.

## Apa yang disertakan

- Alias: 24
- Fungsi pembantu: 0
- File sumber: 1

## Contoh cepat

- `h` → `history`
- `p` → `pwd`
- `path` → `echo -e ${PATH//:/\\n}`
- `ports` → `netstat -tulanp`
- `top` → `sudo btop`
- `now` → `date +"%T"`
- `nowdate` → `date +"%d-%m-%Y"`
- `wget` → `wget -c`
- `speedtest` → `curl -s ... | python3 -`
- `ping` → `ping -c 5`
- `fastping` → `ping -c 100 -s 1`
- `localip` → `ipconfig getifaddr en0`

## Langkah selanjutnya

Buka daftar lengkap:

- [Lampiran referensi System](./reference.md)
