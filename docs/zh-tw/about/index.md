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
bash -c "$(curl -fsSL https://raw.githubusercontent.com/sebastienrousseau/dotfiles/master/install.sh)"
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

## 核心命令

`dot` CLI 提供 53 個按類別組織的命令。

### 核心

- `dot apply` — 套用設定變更.
- `dot sync` — 擷取最新儲存庫狀態並套用.
- `dot update` — 更新儲存庫並預熱快取.
- `dot add` — 將新檔案新增至 Chezmoi 來源.
- `dot diff` — 顯示套用前的待處理變更.
- `dot status` — 顯示受管檔案的狀態.
- `dot remove` — 取消管理檔案並刪除來源項目.
- `dot cd` — 在 Chezmoi 來源目錄中開啟 Shell.
- `dot edit` — 在編輯器中開啟受管檔案.
- `dot clean-cache` — 清除暫存快取.
- `dot prewarm` — 預先填充快取以加快 Shell 啟動.

### 診斷

- `dot doctor` — 驗證路徑、工具和 Shell 狀態.
- `dot heal` — 自動修復遺失或損壞的狀態.
- `dot health` — 執行輕量級健康探測.
- `dot verify` — 根據來源檢查檔案完整性.
- `dot scorecard` — 輸出設定品質評分.
- `dot snapshot` — 擷取當前狀態以供後續比較.
- `dot smoke-test` — 端到端驗證核心工具鏈.
- `dot chaos` — 注入故障以測試自我修復.
- `dot bundle` — 匯出可攜式設定套件.
- `dot rollback` — 回復到先前的快照.
- `dot drift` — 偵測受管檔案的意外變更.
- `dot history` — 顯示 apply/sync 歷史記錄.
- `dot benchmark` — 測量 Shell 啟動時間.
- `dot perf` — 分析 Shell 初始化緩慢問題.

### 外觀

- `dot theme` — 切換終端機配色方案.
- `dot wallpaper` — 設定桌面桌布（macOS）.
- `dot fonts` — 安裝或更新 Nerd Fonts.
- `dot tune` — 調整介面密度和提示符樣式.

### 安全

- `dot backup` — 建立加密的設定備份.
- `dot encrypt-check` — 驗證靜態密鑰加密.
- `dot firewall` — 設定主機防火牆規則.
- `dot telemetry` — 控制匿名使用遙測.
- `dot dns-doh` — 啟用 DNS-over-HTTPS.
- `dot lock-screen` — 立即鎖定螢幕.
- `dot usb-safety` — 限制 USB 大容量儲存自動掛載.

### 密鑰

- `dot secrets-init` — 初始化密鑰後端（age / GPG）.
- `dot secrets` — 列出加密的密鑰項目.
- `dot secrets-create` — 建立新的加密密鑰.
- `dot ssh-key` — 產生或輪換 SSH 金鑰對.
- `dot ssh-cert` — 從 CA 請求 SSH 憑證.

### AI

- `dot ai` — 開啟互動式 AI 助理工作階段.
- `dot ai-setup` — 設定 AI 供應商的 API 金鑰.
- `dot ai-query` — 向 AI 模型傳送一次性提示.
- AI 工具包裝器: `cl`, `gemini`, `kiro`, `sgpt`, `ollama`, `opencode`, `aider`.

### 工具

- `dot tools` — 列出內建的 CLI 替代工具及其狀態.
- `dot new` — 建立新的別名或函數檔案.
- `dot sandbox` — 開啟一次性沙盒 Shell.
- `dot keys` — 顯示目前按鍵繫結.
- `dot learn` — 啟動互動式教學.

### 元資訊

- `dot upgrade` — 將 Dotfiles 升級到最新版本.
- `dot packages` — 列出 Dotfiles 管理的已安裝套件.
- `dot version` / `dot help` — 顯示版本或使用資訊
