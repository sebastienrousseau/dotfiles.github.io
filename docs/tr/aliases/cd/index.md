---
title: Cd Takma Adları | Dotfiles
description: Kısa dizin değiştirme komutları. Dotfiles v0.2.495 genel bakış.
lang: tr-TR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Cd Takma Adları | Dotfiles önizleme
canonical: /tr/aliases/cd/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Cd Takma Adları
pageType: docs
schemaType: WebPage
permalink: /tr/aliases/cd/
---

# Cd Takma Adları

Kısa dizin değiştirme komutları.

Bu sayfa bir takma ad grubunu ve yaygın komut kısayollarını tanıtır.
Adlandırma kurallarını, beklenen girdileri ve güvenli çalıştırma kalıplarını anlamak için önce bu sayfayı okuyun.
Ardından tam komut envanteri ve kesin sözdizimi için referans ekini açın.
Bu takma adlar tekrarlanan yazmayı azaltır ve macOS, Linux ve WSL'de tutarlı iş akışı davranışını korur.

## Ne zaman kullanılır

Öngörülebilir komut kalıplarına ihtiyaç duyduğunuzda günlük kabuk çalışmanızdan önce bu sayfayı kullanın.

## Neler dahil

- Takma adlar: 16
- Yardımcı fonksiyonlar: 6
- Kaynak dosyalar: 12

## Hızlı Örnekler

- `bm` → `'bm add'            # Yer imi oluştur`
- `bmg` → `'cd "$(bm goto $1)"' # Yer imine git (kabuk cd gerektirir)`
- `bml` → `'bm list'           # Yer imlerini listele`
- `bmr` → `'bm remove'         # Yer imini sil`
- `bmu` → `'bm update'         # Yer imini güncelle`
- `cd` → `'cd_with_history' # Varsayılan cd komutunu geçersiz kıl`
- `cdh` → `'cd_with_history' # Geliştirilmiş cd yardımcısı`
- `cdhelp` → `cd_aliases_help`
- `cdversion` → `cd_aliases_version`
- `dh` → `'dirhistory' # Dizin geçmişini göster`
- `dirs` → `'dirs -v'        # Dizin yığınını indekslerle listele`
- `ld` → `'lwd'        # Son dizine dön`

## Sonraki Adım

Tam listeyi açın:

