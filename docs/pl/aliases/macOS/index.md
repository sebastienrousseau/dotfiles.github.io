---
title: Aliasy macOS | Dotfiles
description: Skrocone polecenia macOS. Przeglad dla Dotfiles v0.2.495. Kompatybilny z macOS, Linux i WSL przez Dotfiles.
lang: pl-PL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Aliasy macOS | Dotfiles preview
canonical: /pl/aliases/macOS/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Aliasy macOS
pageType: docs
schemaType: WebPage
permalink: /pl/aliases/macOS/
---

# Aliasy macOS

Skrocone polecenia macOS.

Ta strona przedstawia jedna grupe aliasow i jej typowe skroty polecen.
Przeczytaj ja najpierw, aby zrozumiec konwencje nazewnictwa, oczekiwane dane wejsciowe i bezpieczne wzorce wykonywania.
Nastepnie otworz dodatek referencyjny, aby zobaczyc pelny spis polecen i dokladna skladnie.
Te aliasy redukuja powtarzalne wpisywanie i zapewniaja spojne zachowanie przeplywy pracy na macOS, Linux i WSL.

## Kiedy uzywac

Uzyj tej strony przed codziennym uzywaniem powloki, gdy potrzebujesz przewidywalnych wzorcow polecen.

## Co zawiera

- Aliasy: 18
- Funkcje pomocnicze: 1
- Pliki zrodlowe: 2

## Szybkie przyklady

- `cleanup_dsstore` -> `find . -type f -name "*.DS_Store" -ls -delete`
- `cleanup_ls` -> ``
- `code` -> `/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code`
- `desktop_hide` -> `defaults write com.apple.finder CreateDesktop false; killall Finder`
- `desktop_show` -> `defaults write com.apple.finder CreateDesktop true; killall Finder`
- `finder_hide` -> `defaults write com.apple.finder ShowAllFiles FALSE; killall Finder`
- `finder_show` -> `defaults write com.apple.finder ShowAllFiles TRUE; killall Finder`
- `iphone` -> `open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app`
- `lockscreen` -> `/System/Library/CoreServices/Menu\ Extras/User.menu/Contents/Resources/CGSession -suspend`
- `no_network_ds` -> `defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true`
- `ofd` -> `open $PWD`
- `safari_safe` -> `open -a Safari --args -safe-mode`

## Nastepny krok

Otworz pelna liste:

