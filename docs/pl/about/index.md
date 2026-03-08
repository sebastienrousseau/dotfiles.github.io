---
title: O Dotfiles | Dotfiles
description: Odkryj przeglad techniczny Dotfiles v0.2.495. Kompatybilny z macOS, Linux i WSL przez Dotfiles.
lang: pl-PL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: O Dotfiles | Dotfiles preview
canonical: /pl/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: O Dotfiles
pageType: docs
schemaType: WebPage
permalink: /pl/about/
---

# O Dotfiles

Dotfiles v0.2.495 to wieloplatformowa konfiguracja powloki zarzadzana przez Chezmoi.

## Instalacja

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/main/install.sh)"
```

## Weryfikacja

```bash
dot doctor
```

## Polecenia glowne

- `dot apply` stosuje zmiany konfiguracji.
- `dot update` aktualizuje repozytorium i odswieza pamiec podreczna.
- `dot doctor` weryfikuje sciezki, narzedzia i stan powloki.
- `dot heal` naprawia brakujacy lub uszkodzony stan.
- `dot smoke-test` waliduje glowne lancuchy narzedzi.

## Powiazane

- [Aliasy](/pl/aliases/)
- [Funkcje](/pl/functions/)
- [Sciezki](/pl/paths/)
