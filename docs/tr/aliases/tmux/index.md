---
title: Tmux Takma Adları | Dotfiles
description: Kısa tmux komutları. Dotfiles v0.2.495 genel bakış.
lang: tr-TR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Tmux Takma Adları | Dotfiles önizleme
canonical: /tr/aliases/tmux/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Tmux Takma Adları
pageType: docs
schemaType: WebPage
permalink: /tr/aliases/tmux/
---

# Tmux Takma Adları

Kısa tmux komutları.

Bu sayfa bir takma ad grubunu ve yaygın komut kısayollarını tanıtır.
Adlandırma kurallarını, beklenen girdileri ve güvenli çalıştırma kalıplarını anlamak için önce bu sayfayı okuyun.
Ardından tam komut envanteri ve kesin sözdizimi için referans ekini açın.
Bu takma adlar tekrarlanan yazmayı azaltır ve macOS, Linux ve WSL'de tutarlı iş akışı davranışını korur.

## Ne zaman kullanılır

Öngörülebilir komut kalıplarına ihtiyaç duyduğunuzda günlük kabuk çalışmanızdan önce bu sayfayı kullanın.

## Neler dahil

- Takma adlar: 11
- Yardımcı fonksiyonlar: 1
- Kaynak dosyalar: 1

## Hızlı Örnekler

- `tma` → `'tmux attach-session'     # Son oturuma bağlan`
- `tmat` → `'tmux attach-session -t' # Belirli oturuma bağlan`
- `tmi` → `'tmux info' # tmux bilgisini göster`
- `tmka` → `'tmux kill-server'     # Tüm oturumları sonlandır (sunucu)`
- `tmks` → `'tmux kill-session -a' # Mevcut oturum hariç tümünü sonlandır`
- `tml` → `'tmux list-sessions'    # Tüm oturumları listele`
- `tmlp` → `'tmux list-panes'   # Panelleri listele`
- `tmls` → `'tmux list-windows' # Pencereleri listele`
- `tmn` → `'tmux new-session'    # Yeni adsız oturum`
- `tmr` → `'tmux source ~/.dotfiles/lib/configurations/tmux/tmux' # Yapılandırmayı yeniden yükle`
- `tms` → `'tmux new-session -s' # Yeni adlandırılmış oturum`

## Sonraki Adım

Tam listeyi açın:

