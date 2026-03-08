---
title: Dodatek referencyjny Benchmarks | Dotfiles
description: Kompletna referencja aliasów i funkcji pomocniczych dla Benchmarks w Dotfiles v0.2.495. Zawiera każdy skrót, przykład użycia i funkcję powłoki dla macOS, Linux i WSL.
lang: pl-PL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Dodatek referencyjny Benchmarks | Dotfiles preview
canonical: /pl/aliases/benchmarks/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Benchmarks Reference
pageType: docs
schemaType: WebPage
permalink: /pl/aliases/benchmarks/reference/
---

# Dodatek referencyjny Benchmarks

## Pliki źródłowe

- `.chezmoitemplates/aliases/benchmarks/benchmarks.aliases.sh`

## Referencja aliasów

| Alias | Polecenie |
| :--- | :--- |
| `bench` | `hyperfine` |
| `benchw` | `hyperfine --warmup 3` |

## Walidacja

- Uruchom `chezmoi apply` po aktualizacji aliasów.
- Uruchom `dot doctor`, aby zweryfikować stan powłoki.
