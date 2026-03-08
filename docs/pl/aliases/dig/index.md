---
title: Aliasy Dig | Dotfiles
description: Skrocone polecenia zapytan DNS. Przeglad dla Dotfiles v0.2.495. Kompatybilny z macOS, Linux i WSL przez Dotfiles.
lang: pl-PL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Aliasy Dig | Dotfiles preview
canonical: /pl/aliases/dig/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Aliasy Dig
pageType: docs
schemaType: WebPage
permalink: /pl/aliases/dig/
---

# Aliasy Dig

Skrocone polecenia zapytan DNS.

Ta strona przedstawia jedna grupe aliasow i jej typowe skroty polecen.
Przeczytaj ja najpierw, aby zrozumiec konwencje nazewnictwa, oczekiwane dane wejsciowe i bezpieczne wzorce wykonywania.
Nastepnie otworz dodatek referencyjny, aby zobaczyc pelny spis polecen i dokladna skladnie.
Te aliasy redukuja powtarzalne wpisywanie i zapewniaja spojne zachowanie przeplywy pracy na macOS, Linux i WSL.

## Kiedy uzywac

Uzyj tej strony przed codziennym uzywaniem powloki, gdy potrzebujesz przewidywalnych wzorcow polecen.

## Co zawiera

- Aliasy: 10
- Funkcje pomocnicze: 0
- Pliki zrodlowe: 1

## Szybkie przyklady

- `d` -> `dig`
- `d4` -> `dig +short -4`
- `d6` -> `dig +short -6`
- `dga` -> `dig +all ANY`
- `dgs` -> `dig +short`
- `digg` -> `dig @8.8.8.8 +nocmd any +multiline +noall +answer`
- `ip4` -> `dig +short myip.opendns.com @resolver1.opendns.com -4`
- `ip6` -> `dig -6 AAAA +short myip.opendns.com. @resolver1.opendns.com.`
- `ips` -> `ip4; ip6`
- `wip` -> `dig +short myip.opendns.com @resolver1.opendns.com`

## Nastepny krok

Otworz pelna liste:

