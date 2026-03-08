---
title: System Aliasy | Dotfiles
description: Odkryj aliasy System w Dotfiles v0.2.495. Krótkie i łatwe do zapamiętania polecenia system dla macOS, Linux i WSL.
lang: pl-PL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: System Aliasy | Dotfiles preview
canonical: /pl/aliases/system/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System Aliasy
pageType: docs
schemaType: WebPage
permalink: /pl/aliases/system/
---

# System Aliasy

Krótkie polecenia system.

Ta strona przedstawia grupę aliasów i powiązane z nią skróty poleceń. Przeczytaj ją najpierw, aby zrozumieć konwencje nazewnictwa, oczekiwane dane wejściowe i bezpieczne wzorce wykonania. Następnie otwórz dodatek referencyjny, aby zobaczyć pełną listę poleceń i dokładną składnię. Te aliasy zmniejszają powtarzalne wpisywanie i zapewniają spójne zachowanie przepływu pracy w macOS, Linux i WSL.

## Kiedy używać

Korzystaj z tej strony przed codzienną pracą w powłoce, gdy potrzebujesz przewidywalnych wzorców poleceń.

## Co zawiera

- Aliasy: 24
- Funkcje pomocnicze: 0
- Pliki źródłowe: 1

## Szybkie przykłady

- `h` → `history`
- `p` → `pwd`
- `path` → `echo -e ${PATH//:/\\n}`
- `ports` → `netstat -tulanp`
- `top` → `sudo btop`
- `now` → `date +"%T"`
- `nowdate` → `date +"%d-%m-%Y"`
- `wget` → `wget -c`
- `speedtest` → `curl -s ... | python3 -`
- `ping` → `ping -c 5`
- `fastping` → `ping -c 100 -s 1`
- `localip` → `ipconfig getifaddr en0`

## Następny krok

Otwórz pełną listę:

- [Dodatek referencyjny System](./reference.md)
