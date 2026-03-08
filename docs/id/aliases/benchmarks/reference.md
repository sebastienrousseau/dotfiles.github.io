---
title: Lampiran referensi Benchmarks | Dotfiles
description: Referensi lengkap alias dan fungsi pembantu untuk Benchmarks di Dotfiles v0.2.495. Mencakup setiap pintasan, contoh penggunaan, dan fungsi shell untuk macOS, Linux, dan WSL.
lang: id-ID
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Lampiran referensi Benchmarks | Dotfiles preview
canonical: /id/aliases/benchmarks/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Benchmarks Reference
pageType: docs
schemaType: WebPage
metaTitle: Benchmarks Reference | Dotfiles
permalink: /id/aliases/benchmarks/reference/
sidebar: true
meta:
  - name: keywords
    content: benchmarks, referensi, alias, shell, bash, zsh, dotfiles, chezmoi
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Referensi lengkap alias untuk Benchmarks di Dotfiles v0.2.495.
  - name: twitter:title
    content: Benchmarks Reference | Dotfiles
  - name: og:title
    content: Benchmarks Reference | Dotfiles
  - name: og:description
    content: Referensi lengkap alias untuk Benchmarks di Dotfiles v0.2.495.
  - name: og:image:alt
    content: Dotfiles – Dirancang untuk kehidupan shell Anda
  - name: og:locale
    content: id_ID
---

# Lampiran referensi Benchmarks

## File sumber

- `.chezmoitemplates/aliases/benchmarks/benchmarks.aliases.sh`

## Referensi alias

| Alias | Perintah |
| :--- | :--- |
| `bench` | `hyperfine` |
| `benchw` | `hyperfine --warmup 3` |

## Validasi

- Jalankan `chezmoi apply` setelah memperbarui alias.
- Jalankan `dot doctor` untuk memvalidasi status shell.
