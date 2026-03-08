---
title: macOS 別名 | Dotfiles
description: macOS 指令簡寫。Dotfiles v0.2.495 概覽。
lang: zh-TW
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: macOS 別名 | Dotfiles 預覽
canonical: /zh-tw/aliases/macOS/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: macOS 別名
pageType: docs
schemaType: WebPage
permalink: /zh-tw/aliases/macOS/
---

# macOS 別名

macOS 指令簡寫。

本頁介紹一個別名群組及其常用指令捷徑。
請先閱讀以了解命名慣例、預期輸入和安全執行模式。
然後開啟參考附錄查看完整指令清單和精確語法。
這些別名減少重複輸入，並在 macOS、Linux 和 WSL 上保持一致的工作流程。

## 使用時機

在需要可預測指令模式的日常 Shell 工作前使用本頁。

## 包含內容

- 別名數：18
- 輔助函式：1
- 來源檔案：2

## 快速範例

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

## 下一步

開啟完整列表：

