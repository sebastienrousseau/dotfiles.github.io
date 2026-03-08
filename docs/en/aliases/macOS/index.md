---
title: macOS Aliases | Dotfiles
description: Short macOS commands. Overview for Dotfiles v0.2.495.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: macOS Aliases | Dotfiles preview
canonical: /en/aliases/macOS/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: macOS Aliases
pageType: docs
schemaType: WebPage
permalink: /en/aliases/macOS/
---

# macOS Aliases

Short macOS commands.

This page introduces one alias group and its common command shortcuts.
Read it first to understand naming conventions, expected inputs, and safe execution patterns.
Then open the reference appendix for the complete command inventory and exact syntax.
These aliases reduce repeated typing and preserve consistent workflow behavior on macOS, Linux, and WSL.

## When to use

Use this page before daily shell work when you need predictable command patterns.

## What is included

- Aliases: 18
- Helper functions: 1
- Source files: 2

## Quick examples

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

## Next step

Open the full list:

- [macOS Reference Appendix](./reference.md)
