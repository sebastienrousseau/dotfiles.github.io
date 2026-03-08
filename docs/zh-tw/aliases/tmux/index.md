---
title: Tmux 別名 | Dotfiles
description: tmux 指令簡寫。Dotfiles v0.2.495 概覽。
lang: zh-TW
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Tmux 別名 | Dotfiles 預覽
canonical: /zh-tw/aliases/tmux/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Tmux 別名
pageType: docs
schemaType: WebPage
permalink: /zh-tw/aliases/tmux/
---

# Tmux 別名

tmux 指令簡寫。

本頁介紹一個別名群組及其常用指令捷徑。
請先閱讀以了解命名慣例、預期輸入和安全執行模式。
然後開啟參考附錄查看完整指令清單和精確語法。
這些別名減少重複輸入，並在 macOS、Linux 和 WSL 上保持一致的工作流程。

## 使用時機

在需要可預測指令模式的日常 Shell 工作前使用本頁。

## 包含內容

- 別名數：11
- 輔助函式：1
- 來源檔案：1

## 快速範例

- `tma` → `'tmux attach-session'     # 附加到上一個工作階段`
- `tmat` → `'tmux attach-session -t' # 附加到指定工作階段`
- `tmi` → `'tmux info' # 顯示 tmux 資訊`
- `tmka` → `'tmux kill-server'     # 終止所有工作階段（伺服器）`
- `tmks` → `'tmux kill-session -a' # 終止目前以外的所有工作階段`
- `tml` → `'tmux list-sessions'    # 列出所有工作階段`
- `tmlp` → `'tmux list-panes'   # 列出面板`
- `tmls` → `'tmux list-windows' # 列出視窗`
- `tmn` → `'tmux new-session'    # 新建未命名工作階段`
- `tmr` → `'tmux source ~/.dotfiles/lib/configurations/tmux/tmux' # 重新載入配置`
- `tms` → `'tmux new-session -s' # 新建命名工作階段`

## 下一步

開啟完整列表：

