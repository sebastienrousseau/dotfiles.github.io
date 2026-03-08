---
title: Çapraz Platform Uyumluluk Matrisi | Dotfiles
description: Dotfiles v0.2.495'te kabuklar, araçlar, terminaller ve takma ad kategorileri için test edilmiş platform desteği.
lang: tr-TR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Çapraz Platform Uyumluluk Matrisi önizleme
canonical: /tr/compatibility/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Uyumluluk
pageType: docs
schemaType: TechArticle
permalink: /tr/compatibility/
---

# Çapraz Platform Uyumluluk Matrisi

Bu sayfa, Dotfiles v0.2.495 icin macOS, Linux ve WSL2 genelinde test edilmis platform destegini belgelemektedir.

## Rozet Aciklamalari

| Rozet | Anlami |
|-------|--------|
| ✅ | Tam olarak test edilmis ve destekleniyor |
| ⚠️ | Kismi destek — notlara bakin |
| ❌ | Desteklenmiyor |
| — | Uygulanabilir degil |

## Kabuk Ortami

| Bilesen | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Notlar |
|---------|:---:|:---:|:---:|-------|
| Bash 5.x | ✅ | ✅ | ✅ | macOS icin Homebrew Bash gerekli |
| Zsh 5.9+ | ✅ | ✅ | ✅ | macOS'ta varsayilan |
| Fish 3.7+ | ✅ | ✅ | ✅ | `apt` / `brew install fish` |
| POSIX sh | ⚠️ | ✅ | ✅ | Sinirli takma ad destegi |
| PowerShell | — | — | ⚠️ | Yalnizca WSL birlikte calisma |

## Modern Cekirdek Araclar

| Arac | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Kurulum |
|------|:---:|:---:|:---:|---------|
| Atuin (gecmis) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| bat (cat) | ✅ | ✅ | ✅ | `brew` / `apt` |
| eza (ls) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| fd (find) | ✅ | ✅ | ✅ | `brew` / `apt` |
| fzf (bulanik) | ✅ | ✅ | ✅ | `brew` / `apt` |
| ripgrep (grep) | ✅ | ✅ | ✅ | `brew` / `apt` |
| starship (istem) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| zoxide (cd) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| Yazi (dosya ynt.) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| Zellij (cokl.) | ✅ | ✅ | ✅ | `brew` / `cargo` |
| NeoVim | ✅ | ✅ | ✅ | `brew` / `apt` |

## Terminal Emulatorleri

| Terminal | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Notlar |
|----------|:---:|:---:|:---:|-------|
| Ghostty | ✅ | ✅ | ⚠️ | Linux'ta yerel Wayland |
| Alacritty | ✅ | ✅ | ⚠️ | GPU hizlandirmali |
| WezTerm | ✅ | ✅ | ✅ | Lua yapilandirmasi |
| iTerm2 | ✅ | — | — | Yalnizca macOS |
| Windows Terminal | — | — | ✅ | WSL ana bilgisayari |

## Paket Yoneticileri

| Yonetici | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Notlar |
|----------|:---:|:---:|:---:|-------|
| Homebrew | ✅ | ✅ | ✅ | macOS icin birincil |
| apt | — | ✅ | ✅ | Sistem paketleri |
| Cargo | ✅ | ✅ | ✅ | Rust araclari |
| npm / pnpm | ✅ | ✅ | ✅ | Node araclari |
| pip / pipx | ✅ | ✅ | ✅ | Python araclari |

## Guvenlik ve Imzalama

| Ozellik | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Notlar |
|---------|:---:|:---:|:---:|-------|
| SSH commit imzalama | ✅ | ✅ | ✅ | Yerel, GPG yok |
| age sifreleme | ✅ | ✅ | ✅ | Chezmoi entegrasyonu |
| SOPS | ✅ | ✅ | ✅ | age veya GPG arka ucu |
| 1Password CLI | ✅ | ✅ | ⚠️ | WSL kopru gerektirir |
| git-secrets | ✅ | ✅ | ✅ | On-commit kancasi |

## Takma Ad Kategorileri

| Kategori | macOS Sonoma+ | Ubuntu 24.04 | WSL2 (Ubuntu) | Notlar |
|----------|:---:|:---:|:---:|-------|
| AI | ✅ | ✅ | ✅ | API anahtarlari gerekli |
| Arsivler | ✅ | ✅ | ✅ | — |
| cd (zoxide) | ✅ | ✅ | ✅ | — |
| chmod | ✅ | ✅ | ✅ | — |
| Temizle | ✅ | ✅ | ✅ | — |
| Yapilandirma | ✅ | ✅ | ✅ | — |
| Varsayilan | ✅ | ✅ | ✅ | — |
| Tanilama | ✅ | ✅ | ✅ | — |
| dig | ✅ | ✅ | ✅ | — |
| Disk Kullanimi | ✅ | ✅ | ✅ | — |
| Docker | ✅ | ✅ | ✅ | Docker gerekli |
| Editor | ✅ | ✅ | ✅ | — |
| Bul (fd) | ✅ | ✅ | ✅ | — |
| Yazi Tipleri | ✅ | ⚠️ | ⚠️ | Basliksiz ortamda sinirli |
| gcloud | ✅ | ✅ | ✅ | SDK gerekli |
| Git | ✅ | ✅ | ✅ | — |
| GNU | ⚠️ | ✅ | ✅ | macOS coreutils gerektirir |
| Go | ✅ | ✅ | ✅ | Go gerekli |
| Heroku | ✅ | ✅ | ✅ | CLI gerekli |
| Etkilesimli | ✅ | ✅ | ✅ | — |
| Kubernetes | ✅ | ✅ | ✅ | kubectl gerekli |
| Lua | ✅ | ✅ | ✅ | Lua gerekli |
| macOS | ✅ | — | — | Yalnizca macOS |
| Make | ✅ | ✅ | ✅ | — |
| mkdir | ✅ | ✅ | ✅ | — |
| Modern | ✅ | ✅ | ✅ | Rust alternatifleri |
| npm | ✅ | ✅ | ✅ | Node gerekli |
| Izin | ✅ | ✅ | ✅ | — |
| pnpm | ✅ | ✅ | ✅ | pnpm gerekli |
| ps | ✅ | ✅ | ✅ | — |
| Python | ✅ | ✅ | ✅ | Python gerekli |
| rsync | ✅ | ✅ | ✅ | — |
| Rust | ✅ | ✅ | ✅ | Rust gerekli |
| Guvenlik | ✅ | ✅ | ✅ | — |
| Subversion | ✅ | ✅ | ✅ | svn gerekli |
| sudo | ✅ | ✅ | ✅ | — |
| Terraform | ✅ | ✅ | ✅ | Terraform gerekli |
| tmux | ✅ | ✅ | ✅ | — |
| Guncelleme | ✅ | ✅ | ✅ | — |
| UUID | ✅ | ✅ | ✅ | — |
| wget | ✅ | ✅ | ✅ | — |
| Yarn | ✅ | ✅ | ✅ | Yarn gerekli |

## Ilgili

- [Hakkinda](/tr/about/)
- [Takma Adlar](/tr/aliases/)
- [Gizli Bilgi Yonetimi En Iyi Uygulamalari](/tr/guides/secret-management/)
