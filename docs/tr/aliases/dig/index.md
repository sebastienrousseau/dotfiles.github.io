---
title: Dig Takma Adları | Dotfiles
description: Kısa DNS sorgu komutları. Dotfiles v0.2.495 genel bakış. macOS, Linux ve WSL ile Dotfiles üzerinden uyumlu.
lang: tr-TR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Dig Takma Adları | Dotfiles önizleme
canonical: /tr/aliases/dig/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Dig Takma Adları
pageType: docs
schemaType: WebPage
permalink: /tr/aliases/dig/
---

# Dig Takma Adları

Kısa DNS sorgu komutları.

Bu sayfa bir takma ad grubunu ve yaygın komut kısayollarını tanıtır.
Adlandırma kurallarını, beklenen girdileri ve güvenli çalıştırma kalıplarını anlamak için önce bu sayfayı okuyun.
Ardından tam komut envanteri ve kesin sözdizimi için referans ekini açın.
Bu takma adlar tekrarlanan yazmayı azaltır ve macOS, Linux ve WSL'de tutarlı iş akışı davranışını korur.

## Ne zaman kullanılır

Öngörülebilir komut kalıplarına ihtiyaç duyduğunuzda günlük kabuk çalışmanızdan önce bu sayfayı kullanın.

## Neler dahil

- Takma adlar: 10
- Yardımcı fonksiyonlar: 0
- Kaynak dosyalar: 1

## Hızlı Örnekler

- `d` → `dig`
- `d4` → `dig +short -4`
- `d6` → `dig +short -6`
- `dga` → `dig +all ANY`
- `dgs` → `dig +short`
- `digg` → `dig @8.8.8.8 +nocmd any +multiline +noall +answer`
- `ip4` → `dig +short myip.opendns.com @resolver1.opendns.com -4`
- `ip6` → `dig -6 AAAA +short myip.opendns.com. @resolver1.opendns.com.`
- `ips` → `ip4; ip6`
- `wip` → `dig +short myip.opendns.com @resolver1.opendns.com`

## Sonraki Adım

Tam listeyi açın:

