---
title: Alias Fonts | Dotfiles
description: Alias shell untuk mengelola font sistem dan cache font.
lang: id-ID
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Alias Fonts preview
canonical: /id/aliases/fonts/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Alias Fonts
pageType: docs
schemaType: WebPage
metaTitle: Alias Fonts - Dotfiles (ID)
permalink: /id/aliases/fonts/
sidebar: true
meta:
  - name: keywords
    content: fonts, font cache, shell aliases, dotfiles, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Alias shell untuk mengelola font sistem dan cache font.
  - name: twitter:title
    content: Alias Fonts - Dotfiles
  - name: og:title
    content: Alias Fonts - Dotfiles
  - name: og:description
    content: Alias shell untuk mengelola font sistem dan cache font.
  - name: og:image:alt
    content: Dotfiles - Dirancang sederhana untuk menyesuaikan kehidupan shell Anda
  - name: og:locale
    content: id_ID
---

# Alias Fonts

Pintasan untuk mengelola font sistem dan cache.

## Ikhtisar

Alias ini didefinisikan di `fonts.aliases.sh` dan dimuat secara otomatis oleh Chezmoi.

## Referensi

| Alias | Deskripsi |
|:---|:---|
| `update-fonts` | Perbarui cache font sistem (`fc-cache -fv`) |
| `list-fonts` | Daftar semua keluarga font yang terinstal |

## Font yang Terinstal

- **JetBrainsMono Nerd Font**: Font terminal utama
- **Symbols Nerd Font**: Fallback ikon
