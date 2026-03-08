---
title: Cd 別名 | Dotfiles
description: 資料夾切換指令簡寫。Dotfiles v0.2.495 概覽。 相容 macOS、Linux 和 WSL。透過 Dotfiles 管理。
lang: zh-TW
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Cd 別名 | Dotfiles 預覽
canonical: /zh-tw/aliases/cd/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Cd 別名
pageType: docs
schemaType: WebPage
permalink: /zh-tw/aliases/cd/
---

# Cd 別名

資料夾切換指令簡寫。

本頁介紹一個別名群組及其常用指令捷徑。
請先閱讀以了解命名慣例、預期輸入和安全執行模式。
然後開啟參考附錄查看完整指令清單和精確語法。
這些別名減少重複輸入，並在 macOS、Linux 和 WSL 上保持一致的工作流程。

## 使用時機

在需要可預測指令模式的日常 Shell 工作前使用本頁。

## 包含內容

- 別名數：16
- 輔助函式：6
- 來源檔案：12

## 快速範例

- `bm` → `'bm add'            # 建立書籤`
- `bmg` → `'cd "$(bm goto $1)"' # 前往書籤（需要 shell cd）`
- `bml` → `'bm list'           # 列出書籤`
- `bmr` → `'bm remove'         # 移除書籤`
- `bmu` → `'bm update'         # 更新書籤`
- `cd` → `'cd_with_history' # 覆寫預設 cd 指令`
- `cdh` → `'cd_with_history' # 明確的增強 cd 輔助`
- `cdhelp` → `cd_aliases_help`
- `cdversion` → `cd_aliases_version`
- `dh` → `'dirhistory' # 顯示目錄歷史`
- `dirs` → `'dirs -v'        # 列出目錄堆疊與索引`
- `ld` → `'lwd'        # 返回上一個目錄`

## 下一步

開啟完整列表：

