---
title: Chmod Takma Adları | Dotfiles
description: Kısa izin komutları. Dotfiles v0.2.495 genel bakış. macOS, Linux ve WSL ile Dotfiles üzerinden uyumlu.
lang: tr-TR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Chmod Takma Adları | Dotfiles önizleme
canonical: /tr/aliases/chmod/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Chmod Takma Adları
pageType: docs
schemaType: WebPage
permalink: /tr/aliases/chmod/
---

# Chmod Takma Adları

Kısa izin komutları.

Bu sayfa bir takma ad grubunu ve yaygın komut kısayollarını tanıtır.
Adlandırma kurallarını, beklenen girdileri ve güvenli çalıştırma kalıplarını anlamak için önce bu sayfayı okuyun.
Ardından tam komut envanteri ve kesin sözdizimi için referans ekini açın.
Bu takma adlar tekrarlanan yazmayı azaltır ve macOS, Linux ve WSL'de tutarlı iş akışı davranışını korur.

## Ne zaman kullanılır

Öngörülebilir komut kalıplarına ihtiyaç duyduğunuzda günlük kabuk çalışmanızdan önce bu sayfayı kullanın.

## Neler dahil

- Takma adlar: 17
- Yardımcı fonksiyonlar: 0
- Kaynak dosyalar: 1

## Hızlı Örnekler

- `chmod_000` → `change_permission 000`
- `chmod_1755` → `'change_permission 1755' # Yapışkan bit + 755`
- `chmod_2755` → `'change_permission 2755' # Setgid + 755`
- `chmod_400` → `'change_permission 400' # Yalnızca sahibi için salt okunur`
- `chmod_444` → `'change_permission 444' # Herkes için salt okunur`
- `chmod_4755` → `'change_permission 4755' # Setuid + 755`
- `chmod_600` → `'change_permission 600' # Sahibi için okuma/yazma`
- `chmod_644` → `'change_permission 644' # Sahibi için okuma/yazma, diğerleri için salt okunur`
- `chmod_664` → `'change_permission 664' # Sahibi ve grup için okuma/yazma, diğerleri için salt okunur`
- `chmod_666` → `'change_permission 666' # Herkes için okuma/yazma`
- `chmod_700` → `'change_permission 700' # Yalnızca sahibi için tam erişim`
- `chmod_744` → `'change_permission 744' # Sahibi için tam erişim, diğerleri için salt okunur`

## Sonraki Adım

Tam listeyi açın:

