---
title: Aliasuri macOS | Dotfiles
description: Comenzi scurte pentru macOS. Prezentare generală pentru Dotfiles v0.2.495. Compatibil cu macOS, Linux și WSL prin Dotfiles.
lang: ro-RO
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Aliasuri macOS | Previzualizare Dotfiles
canonical: /ro/aliases/macOS/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Aliasuri macOS
pageType: docs
schemaType: WebPage
permalink: /ro/aliases/macOS/
---

# Aliasuri macOS

Comenzi scurte pentru macOS.

Această pagină prezintă un grup de aliasuri și scurtăturile sale de comandă obișnuite.
Citiți-o mai întâi pentru a înțelege convențiile de denumire, intrările așteptate și tiparele de execuție sigure.
Apoi deschideți anexa de referință pentru inventarul complet de comenzi și sintaxa exactă.
Aceste aliasuri reduc tastarea repetitivă și mențin un comportament consistent pe macOS, Linux și WSL.

## Când se utilizează

Utilizați această pagină înainte de lucrul zilnic în shell când aveți nevoie de tipare de comandă previzibile.

## Ce este inclus

- Aliasuri: 18
- Funcții helper: 1
- Fișiere sursă: 2

## Exemple rapide

- `cleanup_dsstore` → `find . -type f -name "*.DS_Store" -ls -delete`
- `cleanup_ls` → ``
- `code` → `/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code`
- `desktop_hide` → `defaults write com.apple.finder CreateDesktop false; killall Finder`
- `desktop_show` → `defaults write com.apple.finder CreateDesktop true; killall Finder`
- `finder_hide` → `defaults write com.apple.finder ShowAllFiles FALSE; killall Finder`
- `finder_show` → `defaults write com.apple.finder ShowAllFiles TRUE; killall Finder`
- `iphone` → `open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app`
- `lockscreen` → `/System/Library/CoreServices/Menu\ Extras/User.menu/Contents/Resources/CGSession -suspend`
- `no_network_ds` → `defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true`
- `ofd` → `open $PWD`
- `safari_safe` → `open -a Safari --args -safe-mode`

## Pasul următor

Deschideți lista completă:

