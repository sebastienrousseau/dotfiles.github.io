---
title: Dotfiles Hakkında | Dotfiles
description: Dotfiles v0.2.495 teknik genel bakış.
lang: tr-TR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Dotfiles Hakkında | Dotfiles önizleme
canonical: /tr/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Hakkında
pageType: docs
schemaType: WebPage
permalink: /tr/about/
---

# Dotfiles Hakkında

Dotfiles v0.2.495, Chezmoi tarafından yönetilen çapraz platform kabuk yapılandırmasıdır.

## Kurulum

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/main/install.sh)"
```

## Doğrulama

```bash
dot doctor
```

## Temel Komutlar

- `dot apply` yapılandırma değişikliklerini uygular.
- `dot update` depoyu günceller ve önbellekleri ısıtır.
- `dot doctor` yolları, araçları ve kabuk sağlığını doğrular.
- `dot heal` eksik veya bozuk durumu onarır.
- `dot smoke-test` temel araç zincirlerini doğrular.

## İlgili

- [Takma adlar](/tr/aliases/)
- [Fonksiyonlar](/tr/functions/)
- [Yollar](/tr/paths/)
- [Uyumluluk matrisi](/tr/compatibility/)
