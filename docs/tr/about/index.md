---
title: Dotfiles Hakkında | Dotfiles
description: Keşfedin dotfiles v0.2.495 teknik genel bakış. macOS, Linux ve WSL ile Dotfiles üzerinden uyumlu.
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

## Temel komutlar

`dot` CLI, kategorilere göre düzenlenmiş 53 komut sunar.

### Çekirdek

- `dot apply` — yapılandırma değişikliklerini uygular.
- `dot sync` — en son repo durumunu çeker ve uygular.
- `dot update` — repoyu günceller ve önbellekleri ısıtır.
- `dot add` — Chezmoi kaynağına yeni dosyalar ekler.
- `dot diff` — uygulamadan önce bekleyen değişiklikleri gösterir.
- `dot status` — yönetilen dosyaların durumunu görüntüler.
- `dot remove` — bir dosyayı yönetimden çıkarır ve kaynak kaydını siler.
- `dot cd` — Chezmoi kaynak dizininde bir shell açar.
- `dot edit` — yönetilen bir dosyayı düzenleyicinizde açar.
- `dot clean-cache` — geçici önbellekleri temizler.
- `dot prewarm` — daha hızlı shell başlatma için önbellekleri önceden doldurur.

### Tanılama

- `dot doctor` — yolları, araçları ve shell durumunu doğrular.
- `dot heal` — eksik veya bozuk durumu otomatik olarak onarır.
- `dot health` — hafif bir sağlık kontrolü çalıştırır.
- `dot verify` — dosya bütünlüğünü kaynağa göre kontrol eder.
- `dot scorecard` — yapılandırma kalite puanını yazdırır.
- `dot snapshot` — sonraki karşılaştırma için mevcut durumu yakalar.
- `dot smoke-test` — temel araç zincirlerini uçtan uca doğrular.
- `dot chaos` — kendi kendini onarımı test etmek için hatalar enjekte eder.
- `dot bundle` — taşınabilir bir yapılandırma paketi dışa aktarır.
- `dot rollback` — önceki bir anlık görüntüye geri döner.
- `dot drift` — yönetilen dosyalardaki beklenmeyen değişiklikleri algılar.
- `dot history` — apply/sync geçmiş günlüğünü gösterir.
- `dot benchmark` — shell başlatma süresini ölçer.
- `dot perf` — yavaş shell başlatmayı profiller.

### Görünüm

- `dot theme` — terminal renk şemasını değiştirir.
- `dot wallpaper` — masaüstü duvar kağıdını ayarlar (macOS).
- `dot fonts` — Nerd Fonts'u yükler veya günceller.
- `dot tune` — arayüz yoğunluğunu ve komut istemi stilini ayarlar.

### Güvenlik

- `dot backup` — şifrelenmiş yapılandırma yedekleri oluşturur.
- `dot encrypt-check` — durağan haldeki gizli anahtar şifrelemesini doğrular.
- `dot firewall` — ana bilgisayar güvenlik duvarı kurallarını yapılandırır.
- `dot telemetry` — anonim kullanım telemetrisini kontrol eder.
- `dot dns-doh` — DNS-over-HTTPS'yi etkinleştirir.
- `dot lock-screen` — ekranı hemen kilitler.
- `dot usb-safety` — USB yığın depolama otomatik bağlamayı kısıtlar.

### Gizli anahtarlar

- `dot secrets-init` — gizli anahtar arka ucunu başlatır (age / GPG).
- `dot secrets` — şifrelenmiş gizli anahtar girdilerini listeler.
- `dot secrets-create` — yeni şifrelenmiş bir gizli anahtar oluşturur.
- `dot ssh-key` — SSH anahtar çiftleri oluşturur veya döndürür.
- `dot ssh-cert` — bir CA'dan SSH sertifikası talep eder.

### Yapay Zeka

- `dot ai` — etkileşimli bir yapay zeka asistanı oturumu açar.
- `dot ai-setup` — yapay zeka sağlayıcıları için API anahtarlarını yapılandırır.
- `dot ai-query` — bir yapay zeka modeline tek seferlik istem gönderir.
- Yapay zeka araç sarmalayıcıları: `cl`, `gemini`, `kiro`, `sgpt`, `ollama`, `opencode`, `aider`.

### Araçlar

- `dot tools` — paketlenmiş CLI alternatiflerini ve durumlarını listeler.
- `dot new` — yeni bir takma ad veya fonksiyon dosyası oluşturur.
- `dot sandbox` — tek kullanımlık bir sandbox shell açar.
- `dot keys` — mevcut tuş atamalarını gösterir.
- `dot learn` — etkileşimli öğreticiyi başlatır.

### Meta

- `dot upgrade` — Dotfiles'ı en son sürüme yükseltir.
- `dot packages` — Dotfiles tarafından yönetilen yüklü paketleri listeler.
- `dot version` / `dot help` — sürüm veya kullanım bilgilerini yazdırır
