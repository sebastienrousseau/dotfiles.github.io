---
description: eza、bat 和 ripgrep 的现代 shell 别名。使用更快的基于 Rust 的替代品取代传统 Unix 工具。
lang: zh-CN
metaTitle: Modern Tooling 别名 - Dotfiles (CN)
permalink: /aliases/modern/
sidebar: true

meta:
  - name: keywords
    content: 现代别名, eza, bat, ripgrep, rust cli 工具, dotfiles, shell
---

# Modern Tooling 别名

更快、更智能的传统 Unix 命令替代品。

## 概述

定义在 `modern.aliases.sh` 中的现代别名提供了传统 Unix 工具的基于 Rust 的替代品。这些别名由 `chezmoi` 自动加载，当现代工具不可用时会优雅地回退到标准命令。

## 参考

### 使用 eza 列出文件

当安装了 `eza` 时替换 `ls`。

| 别名 | 命令 | 描述 |
|:---|:---|:---|
| `ls` | `eza --icons` | 带图标列出文件 |
| `ll` | `eza -alF` | 长列表格式 |
| `la` | `eza -a` | 列出所有文件（包括隐藏文件） |
| `lt` | `eza --tree` | 显示目录树 |

如果未安装 `eza`，则回退到标准 `ls`。

### 使用 bat 查看文件内容

当安装了 `bat` 时替换 `cat`。

| 别名 | 命令 | 描述 |
|:---|:---|:---|
| `cat` | `bat` | 显示带语法高亮的文件内容 |

### 使用 ripgrep 搜索

当安装了 `rg` 时替换 `grep`。

| 别名 | 命令 | 描述 |
|:---|:---|:---|
| `grep` | `rg` | 使用 Ripgrep 搜索文件内容 |
