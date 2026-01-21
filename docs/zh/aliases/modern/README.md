---
description: Dotfiles 的现代工具 (Modern) 别名
lang: zh-CN
metaTitle: 现代工具别名 - Dotfiles (CN)
permalink: /zh/aliases/modern/
---

# 现代工具别名

管理现代工具别名。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名在 `modern.aliases.sh` 中定义，并由 `chezmoi` 自动加载。
它们提供了基于 Rust 的工具作为旧版 Unix 工具的现代替代品。

## ⚡ 别名

### 文件列表 (eza)

如果安装了 `eza`（替换 `ls`）：

- `ls` - 列出文件 (`eza --icons`)
- `ll` - 长列表 (`eza -alF`)
- `la` - 列出所有 (`eza -a`)
- `lt` - 列出树 (`eza --tree`)

_(如果缺少 `eza`，则回退到标准 `ls`)_

### 文件内容 (bat)

如果安装了 `bat`（替换 `cat`）：

- `cat` - 显示具有语法高亮的文件内容

### 搜索 (rg)

如果安装了 `rg`（替换 `grep`）：

- `grep` - 使用 Ripgrep 搜索

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
