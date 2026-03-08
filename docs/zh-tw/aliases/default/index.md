---
title: 預設別名 | Dotfiles
description: 日常 Shell 主要別名。Dotfiles v0.2.495 概覽。
lang: zh-TW
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: 預設別名 | Dotfiles 預覽
canonical: /zh-tw/aliases/default/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: 預設別名
pageType: docs
schemaType: WebPage
permalink: /zh-tw/aliases/default/
---

# 預設別名

日常 Shell 主要別名。

本頁介紹一個別名群組及其常用指令捷徑。
請先閱讀以了解命名慣例、預期輸入和安全執行模式。
然後開啟參考附錄查看完整指令清單和精確語法。
這些別名減少重複輸入，並在 macOS、Linux 和 WSL 上保持一致的工作流程。

## 使用時機

在需要可預測指令模式的日常 Shell 工作前使用本頁。

## 包含內容

- 別名數：17
- 輔助函式：2
- 來源檔案：1

## 快速範例

- `clearasl` → `clear_asl_logs`
- `ctf` → `echo $(ls -1 | wc -l)`
- `da` → `date "+%Y-%m-%d %A %T %Z"`
- `halt` → `sudo shutdown -h now`
- `history` → `'fc -il 1' # 顯示帶有 ISO 8601 時間戳的歷史記錄（zsh）`
- `ipinfo` → `ip -br addr`
- `ipinfo` → `ipconfig getpacket en0`
- `ping` → `ping -c 5`
- `poweroff` → `sudo shutdown -h now`
- `q` → `quit`
- `qfind` → `find . -name `
- `quit` → `exit`

## 下一步

開啟完整列表：

