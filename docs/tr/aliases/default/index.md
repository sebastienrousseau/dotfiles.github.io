---
title: Varsayılan Takma Adları | Dotfiles
description: Temel günlük kabuk takma adları. Dotfiles v0.2.495 genel bakış.
lang: tr-TR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Varsayılan Takma Adları | Dotfiles önizleme
canonical: /tr/aliases/default/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Varsayılan Takma Adları
pageType: docs
schemaType: WebPage
permalink: /tr/aliases/default/
---

# Varsayılan Takma Adları

Temel günlük kabuk takma adları.

Bu sayfa bir takma ad grubunu ve yaygın komut kısayollarını tanıtır.
Adlandırma kurallarını, beklenen girdileri ve güvenli çalıştırma kalıplarını anlamak için önce bu sayfayı okuyun.
Ardından tam komut envanteri ve kesin sözdizimi için referans ekini açın.
Bu takma adlar tekrarlanan yazmayı azaltır ve macOS, Linux ve WSL'de tutarlı iş akışı davranışını korur.

## Ne zaman kullanılır

Öngörülebilir komut kalıplarına ihtiyaç duyduğunuzda günlük kabuk çalışmanızdan önce bu sayfayı kullanın.

## Neler dahil

- Takma adlar: 17
- Yardımcı fonksiyonlar: 2
- Kaynak dosyalar: 1

## Hızlı Örnekler

- `clearasl` → `clear_asl_logs`
- `ctf` → `echo $(ls -1 | wc -l)`
- `da` → `date "+%Y-%m-%d %A %T %Z"`
- `halt` → `sudo shutdown -h now`
- `history` → `'fc -il 1' # Geçmişi ISO 8601 zaman damgalarıyla göster (zsh)`
- `ipinfo` → `ip -br addr`
- `ipinfo` → `ipconfig getpacket en0`
- `ping` → `ping -c 5`
- `poweroff` → `sudo shutdown -h now`
- `q` → `quit`
- `qfind` → `find . -name `
- `quit` → `exit`

## Sonraki Adım

Tam listeyi açın:

