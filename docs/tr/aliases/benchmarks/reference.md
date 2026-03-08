---
title: Benchmarks Başvuru eki | Dotfiles
description: Dotfiles v0.2.495'te Benchmarks için eksiksiz takma ad ve yardımcı fonksiyon referansı. macOS, Linux ve WSL için her kısayol, kullanım örneği ve shell fonksiyonunu içerir.
lang: tr-TR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Benchmarks Başvuru eki | Dotfiles preview
canonical: /tr/aliases/benchmarks/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Benchmarks Reference
pageType: docs
schemaType: WebPage
permalink: /tr/aliases/benchmarks/reference/
---

# Benchmarks Başvuru eki

## Kaynak dosyalar

- `.chezmoitemplates/aliases/benchmarks/benchmarks.aliases.sh`

## Takma ad referansı

| Takma ad | Komut |
| :--- | :--- |
| `bench` | `hyperfine` |
| `benchw` | `hyperfine --warmup 3` |

## Doğrulama

- Takma ad güncellemelerinden sonra `chezmoi apply` çalıştırın.
- Shell durumunu doğrulamak için `dot doctor` çalıştırın.
