---
title: Tanılama Takma Adları | Dotfiles
description: Kısa sağlık kontrolü komutları. Dotfiles v0.2.495 genel bakış.
lang: tr-TR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Tanılama Takma Adları | Dotfiles önizleme
canonical: /tr/aliases/diagnostics/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Tanılama Takma Adları
pageType: docs
schemaType: WebPage
permalink: /tr/aliases/diagnostics/
---

# Tanılama Takma Adları

Kısa sağlık kontrolü komutları.

Bu sayfa bir takma ad grubunu ve yaygın komut kısayollarını tanıtır.
Adlandırma kurallarını, beklenen girdileri ve güvenli çalıştırma kalıplarını anlamak için önce bu sayfayı okuyun.
Ardından tam komut envanteri ve kesin sözdizimi için referans ekini açın.
Bu takma adlar tekrarlanan yazmayı azaltır ve macOS, Linux ve WSL'de tutarlı iş akışı davranışını korur.

## Ne zaman kullanılır

Öngörülebilir komut kalıplarına ihtiyaç duyduğunuzda günlük kabuk çalışmanızdan önce bu sayfayı kullanın.

## Neler dahil

- Takma adlar: 14
- Yardımcı fonksiyonlar: 1
- Kaynak dosyalar: 1

## Hızlı Örnekler

- `ca` → `chezmoi apply`
- `capply` → `dot apply`
- `cdiff` → `dot diff`
- `cdrift` → `dot drift`
- `ce` → `chezmoi edit`
- `crem` → `dot remove`
- `cupdate` → `dot update`
- `dot-doctor` → `dotdoc`
- `dot-drift` → `drift`
- `dot-heal` → `heal`
- `dotdoc` → `bash $HOME/.dotfiles/scripts/diagnostics/doctor.sh`
- `dotdoc-full` → `bash $HOME/.dotfiles/scripts/diagnostics/doctor.sh && echo "\n--- Path Info ---" && echo $PATH | tr ":" "\n" | glow -`

## Sonraki Adım

Tam listeyi açın:

