---
title: Аліаси macOS | Dotfiles
description: Короткі команди macOS. Огляд для Dotfiles v0.2.495.
lang: uk-UA
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Аліаси macOS | Dotfiles preview
canonical: /uk/aliases/macOS/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Аліаси macOS
pageType: docs
schemaType: WebPage
permalink: /uk/aliases/macOS/
---

# Аліаси macOS

Короткі команди macOS.

Ця сторінка знайомить з однією групою аліасів та її поширеними скороченнями команд.
Прочитайте її спочатку, щоб зрозуміти угоди про іменування, очікувані вхідні дані та безпечні шаблони виконання.
Потім відкрийте довідковий додаток для повного переліку команд та точного синтаксису.
Ці аліаси зменшують повторний набір та зберігають послідовну поведінку робочого процесу на macOS, Linux та WSL.

## Коли використовувати

Використовуйте цю сторінку перед щоденною роботою в оболонці, коли вам потрібні передбачувані шаблони команд.

## Що включено

- Аліаси: 18
- Допоміжні функції: 1
- Файли джерел: 2

## Швидкі приклади

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

## Наступний крок

Відкрити повний перелік:

