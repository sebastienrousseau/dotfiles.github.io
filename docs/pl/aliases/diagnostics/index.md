---
title: Aliasy Diagnostyki | Dotfiles
description: Skrocone polecenia diagnostyczne. Przeglad dla Dotfiles v0.2.495. Kompatybilny z macOS, Linux i WSL przez Dotfiles.
lang: pl-PL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Aliasy Diagnostyki | Dotfiles preview
canonical: /pl/aliases/diagnostics/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Aliasy Diagnostyki
pageType: docs
schemaType: WebPage
permalink: /pl/aliases/diagnostics/
---

# Aliasy Diagnostyki

Skrocone polecenia diagnostyczne.

Ta strona przedstawia jedna grupe aliasow i jej typowe skroty polecen.
Przeczytaj ja najpierw, aby zrozumiec konwencje nazewnictwa, oczekiwane dane wejsciowe i bezpieczne wzorce wykonywania.
Nastepnie otworz dodatek referencyjny, aby zobaczyc pelny spis polecen i dokladna skladnie.
Te aliasy redukuja powtarzalne wpisywanie i zapewniaja spojne zachowanie przeplywy pracy na macOS, Linux i WSL.

## Kiedy uzywac

Uzyj tej strony przed codziennym uzywaniem powloki, gdy potrzebujesz przewidywalnych wzorcow polecen.

## Co zawiera

- Aliasy: 14
- Funkcje pomocnicze: 1
- Pliki zrodlowe: 1

## Szybkie przyklady

- `ca` -> `chezmoi apply`
- `capply` -> `dot apply`
- `cdiff` -> `dot diff`
- `cdrift` -> `dot drift`
- `ce` -> `chezmoi edit`
- `crem` -> `dot remove`
- `cupdate` -> `dot update`
- `dot-doctor` -> `dotdoc`
- `dot-drift` -> `drift`
- `dot-heal` -> `heal`
- `dotdoc` -> `bash $HOME/.dotfiles/scripts/diagnostics/doctor.sh`
- `dotdoc-full` -> `bash $HOME/.dotfiles/scripts/diagnostics/doctor.sh && echo "\n--- Path Info ---" && echo $PATH | tr ":" "\n" | glow -`

## Nastepny krok

Otworz pelna liste:

