---
title: Benchmarks 參考附錄 | Dotfiles
description: Dotfiles v0.2.495 中 Benchmarks 的完整別名和輔助函數參考。包含適用於 macOS、Linux 和 WSL 的所有捷徑、使用範例和 Shell 函數。
lang: zh-TW
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Benchmarks 參考附錄 | Dotfiles preview
canonical: /zh-tw/aliases/benchmarks/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Benchmarks Reference
pageType: docs
schemaType: WebPage
permalink: /zh-tw/aliases/benchmarks/reference/
---

# Benchmarks 參考附錄

## 原始檔案

- `.chezmoitemplates/aliases/benchmarks/benchmarks.aliases.sh`

## 別名參考

| 別名 | 命令 |
| :--- | :--- |
| `bench` | `hyperfine` |
| `benchw` | `hyperfine --warmup 3` |

## 驗證

- 更新別名後執行 `chezmoi apply`。
- 執行 `dot doctor` 驗證 Shell 狀態。
