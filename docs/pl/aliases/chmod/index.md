---
title: Aliasy Chmod | Dotfiles
description: Skrocone polecenia uprawnien. Przeglad dla Dotfiles v0.2.495.
lang: pl-PL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Aliasy Chmod | Dotfiles preview
canonical: /pl/aliases/chmod/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Aliasy Chmod
pageType: docs
schemaType: WebPage
permalink: /pl/aliases/chmod/
---

# Aliasy Chmod

Skrocone polecenia uprawnien.

Ta strona przedstawia jedna grupe aliasow i jej typowe skroty polecen.
Przeczytaj ja najpierw, aby zrozumiec konwencje nazewnictwa, oczekiwane dane wejsciowe i bezpieczne wzorce wykonywania.
Nastepnie otworz dodatek referencyjny, aby zobaczyc pelny spis polecen i dokladna skladnie.
Te aliasy redukuja powtarzalne wpisywanie i zapewniaja spojne zachowanie przeplywy pracy na macOS, Linux i WSL.

## Kiedy uzywac

Uzyj tej strony przed codziennym uzywaniem powloki, gdy potrzebujesz przewidywalnych wzorcow polecen.

## Co zawiera

- Aliasy: 17
- Funkcje pomocnicze: 0
- Pliki zrodlowe: 1

## Szybkie przyklady

- `chmod_000` -> `change_permission 000`
- `chmod_1755` -> `'change_permission 1755' # Sticky bit + 755`
- `chmod_2755` -> `'change_permission 2755' # Setgid + 755`
- `chmod_400` -> `'change_permission 400' # Tylko odczyt dla wlasciciela`
- `chmod_444` -> `'change_permission 444' # Tylko odczyt dla wszystkich`
- `chmod_4755` -> `'change_permission 4755' # Setuid + 755`
- `chmod_600` -> `'change_permission 600' # Odczyt/zapis dla wlasciciela`
- `chmod_644` -> `'change_permission 644' # Odczyt/zapis dla wlasciciela, odczyt dla innych`
- `chmod_664` -> `'change_permission 664' # Odczyt/zapis dla wlasciciela i grupy, odczyt dla innych`
- `chmod_666` -> `'change_permission 666' # Odczyt/zapis dla wszystkich`
- `chmod_700` -> `'change_permission 700' # Pelne dla wlasciciela`
- `chmod_744` -> `'change_permission 744' # Pelne dla wlasciciela, odczyt dla innych`

## Nastepny krok

Otworz pelna liste:

