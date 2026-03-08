---
title: System Takma adlar | Dotfiles
description: Dotfiles v0.2.495'te System takma adlarını keşfedin. macOS, Linux ve WSL için kısa ve akılda kalıcı system komutları.
lang: tr-TR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: System Takma adlar | Dotfiles preview
canonical: /tr/aliases/system/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System Takma adlar
pageType: docs
schemaType: WebPage
permalink: /tr/aliases/system/
---

# System Takma adlar

Kısa system komutları.

Bu sayfa bir takma ad grubunu ve yaygın komut kısayollarını tanıtır. Adlandırma kurallarını, beklenen girdileri ve güvenli çalıştırma kalıplarını anlamak için önce bu sayfayı okuyun. Ardından eksiksiz komut envanteri ve doğru sözdizimi için başvuru ekini açın. Bu takma adlar tekrarlayan yazmayı azaltır ve macOS, Linux ve WSL'de tutarlı iş akışı davranışı sağlar.

## Ne zaman kullanılır

Öngörülebilir komut kalıplarına ihtiyaç duyduğunuzda günlük shell çalışmanızdan önce bu sayfayı kullanın.

## Neler dahil

- Takma adlar: 24
- Yardımcı fonksiyonlar: 0
- Kaynak dosyalar: 1

## Hızlı örnekler

- `h` → `history`
- `p` → `pwd`
- `path` → `echo -e ${PATH//:/\\n}`
- `ports` → `netstat -tulanp`
- `top` → `sudo btop`
- `now` → `date +"%T"`
- `nowdate` → `date +"%d-%m-%Y"`
- `wget` → `wget -c`
- `speedtest` → `curl -s ... | python3 -`
- `ping` → `ping -c 5`
- `fastping` → `ping -c 100 -s 1`
- `localip` → `ipconfig getifaddr en0`

## Sonraki adım

Tam listeyi açın:

- [System Başvuru eki](./reference.md)
