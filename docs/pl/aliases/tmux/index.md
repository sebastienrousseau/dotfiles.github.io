---
title: Aliasy Tmux | Dotfiles
description: Skrocone polecenia tmux. Przeglad dla Dotfiles v0.2.495.
lang: pl-PL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Aliasy Tmux | Dotfiles preview
canonical: /pl/aliases/tmux/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Aliasy Tmux
pageType: docs
schemaType: WebPage
permalink: /pl/aliases/tmux/
---

# Aliasy Tmux

Skrocone polecenia tmux.

Ta strona przedstawia jedna grupe aliasow i jej typowe skroty polecen.
Przeczytaj ja najpierw, aby zrozumiec konwencje nazewnictwa, oczekiwane dane wejsciowe i bezpieczne wzorce wykonywania.
Nastepnie otworz dodatek referencyjny, aby zobaczyc pelny spis polecen i dokladna skladnie.
Te aliasy redukuja powtarzalne wpisywanie i zapewniaja spojne zachowanie przeplywy pracy na macOS, Linux i WSL.

## Kiedy uzywac

Uzyj tej strony przed codziennym uzywaniem powloki, gdy potrzebujesz przewidywalnych wzorcow polecen.

## Co zawiera

- Aliasy: 11
- Funkcje pomocnicze: 1
- Pliki zrodlowe: 1

## Szybkie przyklady

- `tma` -> `'tmux attach-session'     # Dolacz do ostatniej sesji`
- `tmat` -> `'tmux attach-session -t' # Dolacz do konkretnej sesji`
- `tmi` -> `'tmux info' # Pokaz informacje tmux`
- `tmka` -> `'tmux kill-server'     # Zamknij wszystkie sesje (serwer)`
- `tmks` -> `'tmux kill-session -a' # Zamknij wszystkie sesje oprocz biezacej`
- `tml` -> `'tmux list-sessions'    # Lista wszystkich sesji`
- `tmlp` -> `'tmux list-panes'   # Lista paneli`
- `tmls` -> `'tmux list-windows' # Lista okien`
- `tmn` -> `'tmux new-session'    # Nowa sesja bez nazwy`
- `tmr` -> `'tmux source ~/.dotfiles/lib/configurations/tmux/tmux' # Przeladuj konfiguracje`
- `tms` -> `'tmux new-session -s' # Nowa nazwana sesja`

## Nastepny krok

Otworz pelna liste:

