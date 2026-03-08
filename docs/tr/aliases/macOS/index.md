---
title: macOS Takma Adları | Dotfiles
description: Kısa macOS komutları. Dotfiles v0.2.495 genel bakış.
lang: tr-TR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: macOS Takma Adları | Dotfiles önizleme
canonical: /tr/aliases/macOS/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: macOS Takma Adları
pageType: docs
schemaType: WebPage
permalink: /tr/aliases/macOS/
---

# macOS Takma Adları

Kısa macOS komutları.

Bu sayfa bir takma ad grubunu ve yaygın komut kısayollarını tanıtır.
Adlandırma kurallarını, beklenen girdileri ve güvenli çalıştırma kalıplarını anlamak için önce bu sayfayı okuyun.
Ardından tam komut envanteri ve kesin sözdizimi için referans ekini açın.
Bu takma adlar tekrarlanan yazmayı azaltır ve macOS, Linux ve WSL'de tutarlı iş akışı davranışını korur.

## Ne zaman kullanılır

Öngörülebilir komut kalıplarına ihtiyaç duyduğunuzda günlük kabuk çalışmanızdan önce bu sayfayı kullanın.

## Neler dahil

- Takma adlar: 18
- Yardımcı fonksiyonlar: 1
- Kaynak dosyalar: 2

## Hızlı Örnekler

- `cleanup_dsstore` → `find . -type f -name "*.DS_Store" -ls -delete`
- `cleanup_ls` → ``
- `code` → `/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code`
- `desktop_hide` → `defaults write com.apple.finder CreateDesktop false; killall Finder`
- `desktop_show` → `defaults write com.apple.finder CreateDesktop true; killall Finder`
- `finder_hide` → `defaults write com.apple.finder ShowAllFiles FALSE; killall Finder`
- `finder_show` → `defaults write com.apple.finder ShowAllFiles TRUE; killall Finder`
- `iphone` → `open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app`
- `lockscreen` → `/System/Library/CoreServices/Menu\ Extras/User.menu/Contents/Resources/CGSession -suspend`
- `no_network_ds` → `defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true`
- `ofd` → `open $PWD`
- `safari_safe` → `open -a Safari --args -safe-mode`

## Sonraki Adım

Tam listeyi açın:

