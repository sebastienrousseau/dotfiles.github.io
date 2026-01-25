---
description: Alias shell Dig yang menyederhanakan pencarian DNS. Kueri alamat host, mail exchanger, nameserver, dan lainnya.
lang: id-ID
metaTitle: Alias Dig - Dotfiles (ID)
permalink: /id/alias/dig/
sidebar: true

meta:
  - name: keywords
    content: dig, dns, lookup, shell aliases, dotfiles, networking
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias shell Dig yang menyederhanakan pencarian DNS. Kueri alamat host, mail exchanger, nameserver, dan lainnya.
  - name: twitter:title
    content: Alias Dig - Dotfiles
  - name: og:title
    content: Alias Dig - Dotfiles
  - name: og:description
    content: Alias shell Dig yang menyederhanakan pencarian DNS. Kueri alamat host, mail exchanger, nameserver, dan lainnya.
  - name: og:image:alt
    content: Dotfiles - Dirancang sederhana untuk menyesuaikan kehidupan shell Anda
  - name: og:locale
    content: id_ID
---

# Alias Dig

Pintasan shell untuk pencarian DNS dan diagnostik jaringan.

## Ikhtisar

Alias ini didefinisikan di `dig.aliases.sh` dan dimuat secara otomatis oleh Chezmoi.

## Referensi

| Alias | Deskripsi |
|:---|:---|
| `d` | Jalankan dig dengan opsi default |
| `d4` | Pencarian DNS untuk alamat IPv4 |
| `d6` | Pencarian DNS untuk alamat IPv6 |
| `dga` | Pencarian DNS untuk semua record |
| `dgs` | Pencarian DNS untuk jawaban singkat |
| `digg` | Jalankan dig dengan DNS Google |
| `ip4` | Dapatkan alamat IPv4 publik |
| `ip6` | Dapatkan alamat IPv6 publik |
| `ips` | Dapatkan alamat IPv4 dan IPv6 publik |
| `wip` | Dapatkan alamat IP publik |
