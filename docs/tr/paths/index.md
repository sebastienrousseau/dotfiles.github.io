---
title: Yollar | Dotfiles
description: Dotfiles v0.2.495 tarafından sağlanan PATH öncelik sırası ve girişleri. macOS, Linux ve WSL ile Dotfiles üzerinden uyumlu.
lang: tr-TR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Yollar | Dotfiles önizleme
canonical: /tr/paths/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Yollar
pageType: docs
schemaType: WebPage
permalink: /tr/paths/
---

# Yollar

Dotfiles PATH sırasını tek bir şablonda ayarlar ve girişleri önceliğe göre başa ekler.

## Öncelik Sırası

1. Sistem yollarıyla başla.
2. Çalışma zamanı ve paket yöneticisi yollarını başa ekle.
3. En yüksek öncelik için yerel kullanıcı yollarını en son başa ekle.
4. İlk eşleşmeyi koruyarak yinelenenleri temizle.

## Tanımlı Girişler

- `"/opt/homebrew/sbin"`
- `"/opt/homebrew/bin"`
- `"/opt/homebrew/opt/ruby/bin"`
- `"${HOME}/.gem/ruby/bin"`
- `"${PIPX_BIN_DIR}"`
- `"${HOME}/.cargo/bin"`
- `"${HOME}/go/bin"`
- `"${BUN_INSTALL}/bin"`
- `"${HOME}/.node_modules/bin"`
- `"${HOME}/.luarocks/bin"`
- `"/Library/Apple/usr/bin"`
- `"/Library/TeX/texbin"`
- `"/Applications/Topaz Photo AI.app/Contents/Resources/bin"`
- `"/Applications/Little Snitch.app/Contents/Components"`
- `"/Applications/iTerm.app/Contents/Resources/utilities"`
- `"/Applications/Visual Studio Code.app/Contents/Resources/app/bin"`
- `"${HOME}/.local/bin"`
- `"${HOME}/.local/share/mise/shims"`
- `"${HOME}/bin"`
