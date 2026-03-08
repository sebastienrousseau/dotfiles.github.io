---
title: 路徑 | Dotfiles
description: Dotfiles v0.2.495 的 PATH 優先順序概覽與路徑項目。 相容 macOS、Linux 和 WSL。透過 Dotfiles 管理。
lang: zh-TW
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: 路徑 | Dotfiles 預覽
canonical: /zh-tw/paths/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: 路徑
pageType: docs
schemaType: WebPage
permalink: /zh-tw/paths/
---

# 路徑

Dotfiles 在一個範本中設定 PATH 順序，並依優先順序前置項目。

## 優先順序

1. 從系統路徑開始。
2. 前置執行環境和套件管理器路徑。
3. 最後前置本地使用者路徑以取得最高優先順序。
4. 去除重複項目，同時保留首次匹配。

## 宣告的項目

- `"/opt/homebrew/sbin"`
- `"/opt/homebrew/bin"`
- `"/opt/homebrew/opt/ruby/bin"`
- `"${HOME}/.gem/ruby/bin"`
- `"${PIPX_BIN_DIR}"`
- `"${HOME}/.cargo/bin"`
- `"${HOME}/go/bin"`
- `"${BUN_INSTALL}/bin"`
- `"${HOME}/.node_modules/bin"`
- `"${HOME}/.luarocks/bin"`
- `"/Library/Apple/usr/bin"`
- `"/Library/TeX/texbin"`
- `"/Applications/Topaz Photo AI.app/Contents/Resources/bin"`
- `"/Applications/Little Snitch.app/Contents/Components"`
- `"/Applications/iTerm.app/Contents/Resources/utilities"`
- `"/Applications/Visual Studio Code.app/Contents/Resources/app/bin"`
- `"${HOME}/.local/bin"`
- `"${HOME}/.local/share/mise/shims"`
- `"${HOME}/bin"`
