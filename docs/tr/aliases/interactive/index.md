---
title: Etkileşimli Takma Adları | Dotfiles
description: Kısa etkileşimli kabuk komutları. Dotfiles v0.2.495 genel bakış. macOS, Linux ve WSL ile Dotfiles üzerinden uyumlu.
lang: tr-TR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Etkileşimli Takma Adları | Dotfiles önizleme
canonical: /tr/aliases/interactive/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Etkileşimli Takma Adları
pageType: docs
schemaType: WebPage
permalink: /tr/aliases/interactive/
---

# Etkileşimli Takma Adları

Kısa etkileşimli kabuk komutları.

Bu sayfa bir takma ad grubunu ve yaygın komut kısayollarını tanıtır.
Adlandırma kurallarını, beklenen girdileri ve güvenli çalıştırma kalıplarını anlamak için önce bu sayfayı okuyun.
Ardından tam komut envanteri ve kesin sözdizimi için referans ekini açın.
Bu takma adlar tekrarlanan yazmayı azaltır ve macOS, Linux ve WSL'de tutarlı iş akışı davranışını korur.

## Ne zaman kullanılır

Öngörülebilir komut kalıplarına ihtiyaç duyduğunuzda günlük kabuk çalışmanızdan önce bu sayfayı kullanın.

## Neler dahil

- Takma adlar: 8
- Yardımcı fonksiyonlar: 0
- Kaynak dosyalar: 1

## Hızlı Örnekler

- `bin` → `dot_confirm_destructive "rm -fr ${HOME}/.Trash" && rm -fr ${HOME}/.Trash`
- `cp` → `cp -vi`
- `del` → `dot_confirm_destructive "rm -rfvi (del)" && rm -rfvi`
- `diff` → `diff -u`
- `ln` → `ln -vi`
- `mkdir` → `mkdir -pv`
- `mv` → `mv -vi`
- `rm` → `rm -vi`

## Sonraki Adım

Tam listeyi açın:

