---
description: 现代别名用于 Dotfiles
lang: zh-CN
metaTitle: 现代别名 - Dotfiles
permalink: /zh/aliases/modern/
---
# 现代工具别名

管理现代工具别名。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名定义在 `modern.aliases.sh` 中，并由 `chezmoi` 自动加载。
它们提供 Rust 现代替代品。

## ⚡ 别名

### 文件列表（eza）
若已安装 `eza`（替代 `ls`）：
- `ls` - 列出文件（`eza --icons`）
- `ll` - 长列表（`eza -alF`）
- `la` - 列出全部（`eza -a`）
- `lt` - 树形列表（`eza --tree`）

*(若缺失 `eza`，则回退到 `ls`)*

### 文件内容（bat）
若已安装 `bat`：
- `cat` - 显示文件内容并高亮语法

### 搜索（rg）
若已安装 `rg`：
- `grep` - 使用 Ripgrep 搜索

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
