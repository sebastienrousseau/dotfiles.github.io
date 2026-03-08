---
title: 診斷別名 | Dotfiles
description: 健康檢查指令簡寫。Dotfiles v0.2.495 概覽。
lang: zh-TW
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: 診斷別名 | Dotfiles 預覽
canonical: /zh-tw/aliases/diagnostics/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: 診斷別名
pageType: docs
schemaType: WebPage
permalink: /zh-tw/aliases/diagnostics/
---

# 診斷別名

健康檢查指令簡寫。

本頁介紹一個別名群組及其常用指令捷徑。
請先閱讀以了解命名慣例、預期輸入和安全執行模式。
然後開啟參考附錄查看完整指令清單和精確語法。
這些別名減少重複輸入，並在 macOS、Linux 和 WSL 上保持一致的工作流程。

## 使用時機

在需要可預測指令模式的日常 Shell 工作前使用本頁。

## 包含內容

- 別名數：14
- 輔助函式：1
- 來源檔案：1

## 快速範例

- `ca` → `chezmoi apply`
- `capply` → `dot apply`
- `cdiff` → `dot diff`
- `cdrift` → `dot drift`
- `ce` → `chezmoi edit`
- `crem` → `dot remove`
- `cupdate` → `dot update`
- `dot-doctor` → `dotdoc`
- `dot-drift` → `drift`
- `dot-heal` → `heal`
- `dotdoc` → `bash $HOME/.dotfiles/scripts/diagnostics/doctor.sh`
- `dotdoc-full` → `bash $HOME/.dotfiles/scripts/diagnostics/doctor.sh && echo "\n--- Path Info ---" && echo $PATH | tr ":" "\n" | glow -`

## 下一步

開啟完整列表：

