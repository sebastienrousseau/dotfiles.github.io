---
title: Docker 別名 | Dotfiles
description: Docker 指令簡寫。Dotfiles v0.2.495 概覽。 相容 macOS、Linux 和 WSL。透過 Dotfiles 管理。
lang: zh-TW
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Docker 別名 | Dotfiles 預覽
canonical: /zh-tw/aliases/docker/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Docker 別名
pageType: docs
schemaType: WebPage
permalink: /zh-tw/aliases/docker/
---

# Docker 別名

Docker 指令簡寫。

本頁介紹一個別名群組及其常用指令捷徑。
請先閱讀以了解命名慣例、預期輸入和安全執行模式。
然後開啟參考附錄查看完整指令清單和精確語法。
這些別名減少重複輸入，並在 macOS、Linux 和 WSL 上保持一致的工作流程。

## 使用時機

在需要可預測指令模式的日常 Shell 工作前使用本頁。

## 包含內容

- 別名數：114
- 輔助函式：7
- 來源檔案：1

## 快速範例

- `d` → `docker`
- `dbprune` → `docker builder prune -f`
- `dbx` → `docker buildx`
- `dbxb` → `docker buildx build`
- `dbxbp` → `docker buildx build --push`
- `dbxcreate` → `docker buildx create`
- `dbxinspect` → `docker buildx inspect`
- `dbxls` → `docker buildx ls`
- `dbxmulti` → `docker buildx build --platform linux/amd64,linux/arm64`
- `dbxrm` → `docker buildx rm`
- `dbxstop` → `docker buildx stop`
- `dbxuse` → `docker buildx use`

## 下一步

開啟完整列表：

