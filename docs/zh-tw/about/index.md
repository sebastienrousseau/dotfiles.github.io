---
title: 關於 Dotfiles | Dotfiles
description: Dotfiles v0.2.495 技術概覽。 相容 macOS、Linux 和 WSL。透過 Dotfiles 管理。
lang: zh-TW
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: 關於 Dotfiles | Dotfiles 預覽
canonical: /zh-tw/about/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: 關於 Dotfiles
pageType: docs
schemaType: WebPage
permalink: /zh-tw/about/
---

# 關於 Dotfiles

Dotfiles v0.2.495 是由 Chezmoi 管理的跨平台 Shell 配置。

## 安裝

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/main/install.sh)"
```

## 驗證

```bash
dot doctor
```

## 核心指令

- `dot apply` 套用配置變更。
- `dot update` 更新儲存庫並預熱快取。
- `dot doctor` 驗證路徑、工具和 Shell 健康狀態。
- `dot heal` 修復遺失或損壞的狀態。
- `dot smoke-test` 驗證核心工具鏈。

## 相關連結

- [別名](/zh-tw/aliases/)
- [函式](/zh-tw/functions/)
- [路徑](/zh-tw/paths/)
