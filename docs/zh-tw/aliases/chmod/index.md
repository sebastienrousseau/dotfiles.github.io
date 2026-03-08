---
title: Chmod 別名 | Dotfiles
description: 權限設定指令簡寫。Dotfiles v0.2.495 概覽。
lang: zh-TW
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Chmod 別名 | Dotfiles 預覽
canonical: /zh-tw/aliases/chmod/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Chmod 別名
pageType: docs
schemaType: WebPage
permalink: /zh-tw/aliases/chmod/
---

# Chmod 別名

權限設定指令簡寫。

本頁介紹一個別名群組及其常用指令捷徑。
請先閱讀以了解命名慣例、預期輸入和安全執行模式。
然後開啟參考附錄查看完整指令清單和精確語法。
這些別名減少重複輸入，並在 macOS、Linux 和 WSL 上保持一致的工作流程。

## 使用時機

在需要可預測指令模式的日常 Shell 工作前使用本頁。

## 包含內容

- 別名數：17
- 輔助函式：0
- 來源檔案：1

## 快速範例

- `chmod_000` → `change_permission 000`
- `chmod_1755` → `'change_permission 1755' # Sticky bit + 755`
- `chmod_2755` → `'change_permission 2755' # Setgid + 755`
- `chmod_400` → `'change_permission 400' # 擁有者唯讀`
- `chmod_444` → `'change_permission 444' # 所有人唯讀`
- `chmod_4755` → `'change_permission 4755' # Setuid + 755`
- `chmod_600` → `'change_permission 600' # 擁有者讀寫`
- `chmod_644` → `'change_permission 644' # 擁有者讀寫，其他人唯讀`
- `chmod_664` → `'change_permission 664' # 擁有者和群組讀寫，其他人唯讀`
- `chmod_666` → `'change_permission 666' # 所有人讀寫`
- `chmod_700` → `'change_permission 700' # 擁有者完全存取`
- `chmod_744` → `'change_permission 744' # 擁有者完全存取，其他人唯讀`

## 下一步

開啟完整列表：

