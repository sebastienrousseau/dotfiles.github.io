---
title: Aliasy Interaktywne | Dotfiles
description: Skrocone polecenia interaktywne. Przeglad dla Dotfiles v0.2.495. Kompatybilny z macOS, Linux i WSL przez Dotfiles.
lang: pl-PL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Aliasy Interaktywne | Dotfiles preview
canonical: /pl/aliases/interactive/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Aliasy Interaktywne
pageType: docs
schemaType: WebPage
permalink: /pl/aliases/interactive/
---

# Aliasy Interaktywne

Skrocone polecenia interaktywne powloki.

Ta strona przedstawia jedna grupe aliasow i jej typowe skroty polecen.
Przeczytaj ja najpierw, aby zrozumiec konwencje nazewnictwa, oczekiwane dane wejsciowe i bezpieczne wzorce wykonywania.
Nastepnie otworz dodatek referencyjny, aby zobaczyc pelny spis polecen i dokladna skladnie.
Te aliasy redukuja powtarzalne wpisywanie i zapewniaja spojne zachowanie przeplywy pracy na macOS, Linux i WSL.

## Kiedy uzywac

Uzyj tej strony przed codziennym uzywaniem powloki, gdy potrzebujesz przewidywalnych wzorcow polecen.

## Co zawiera

- Aliasy: 8
- Funkcje pomocnicze: 0
- Pliki zrodlowe: 1

## Szybkie przyklady

- `bin` -> `dot_confirm_destructive "rm -fr ${HOME}/.Trash" && rm -fr ${HOME}/.Trash`
- `cp` -> `cp -vi`
- `del` -> `dot_confirm_destructive "rm -rfvi (del)" && rm -rfvi`
- `diff` -> `diff -u`
- `ln` -> `ln -vi`
- `mkdir` -> `mkdir -pv`
- `mv` -> `mv -vi`
- `rm` -> `rm -vi`

## Nastepny krok

Otworz pelna liste:

