---
title: Dig 別名 | Dotfiles
description: DNS 查詢指令簡寫。Dotfiles v0.2.495 概覽。
lang: zh-TW
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Dig 別名 | Dotfiles 預覽
canonical: /zh-tw/aliases/dig/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Dig 別名
pageType: docs
schemaType: WebPage
permalink: /zh-tw/aliases/dig/
---

# Dig 別名

DNS 查詢指令簡寫。

本頁介紹一個別名群組及其常用指令捷徑。
請先閱讀以了解命名慣例、預期輸入和安全執行模式。
然後開啟參考附錄查看完整指令清單和精確語法。
這些別名減少重複輸入，並在 macOS、Linux 和 WSL 上保持一致的工作流程。

## 使用時機

在需要可預測指令模式的日常 Shell 工作前使用本頁。

## 包含內容

- 別名數：10
- 輔助函式：0
- 來源檔案：1

## 快速範例

- `d` → `dig`
- `d4` → `dig +short -4`
- `d6` → `dig +short -6`
- `dga` → `dig +all ANY`
- `dgs` → `dig +short`
- `digg` → `dig @8.8.8.8 +nocmd any +multiline +noall +answer`
- `ip4` → `dig +short myip.opendns.com @resolver1.opendns.com -4`
- `ip6` → `dig -6 AAAA +short myip.opendns.com. @resolver1.opendns.com.`
- `ips` → `ip4; ip6`
- `wip` → `dig +short myip.opendns.com @resolver1.opendns.com`

## 下一步

開啟完整列表：

