---
description: 使用 fd 的 find 别名加速文件和目录搜索。比传统 find 更快的 Rust 替代品。
lang: zh-CN
metaTitle: Find 别名 - Dotfiles (CN)
permalink: /aliases/find/
sidebar: true

meta:
  - name: keywords
    content: find 别名, fd 命令, 文件搜索, 目录搜索, dotfiles, shell, rust
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 使用 fd 的 find 别名加速文件和目录搜索。比传统 find 更快的 Rust 替代品。
  - name: twitter:title
    content: Find 别名 - Dotfiles
  - name: og:title
    content: Find 别名 - Dotfiles
  - name: og:description
    content: 使用 fd 的 find 别名加速文件和目录搜索。比传统 find 更快的 Rust 替代品。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# Find 别名

使用 `fd` 更快更简单地搜索文件 — 传统 `find` 的现代替代品。

## 概述

这些别名定义在 `find.aliases.sh` 中，由 chezmoi 自动加载。它们包装了 `fd` 命令，这是一个用 Rust 编写的简单、快速且用户友好的 `find` 替代品。

## 参考

| 别名 | 描述 |
|:---|:---|
| `fd` | 带颜色输出运行 fd |
| `fda` | 列出带绝对路径的文件 |
| `fdc` | 不区分大小写搜索 |
| `fdd` | 列出带详情的文件 |
| `fde` | 按指定扩展名搜索 |
| `fdf` | 跟随符号链接 |
| `fdh` | 显示 fd 帮助 |
| `fdn` | 列出匹配 glob 模式的文件 |
| `fdo` | 列出带所有者信息的文件 |
| `fds` | 列出带大小的文件 |
| `fdu` | 使用排除规则列出文件 |
| `fdv` | 显示 fd 版本 |
| `fdx` | 对每个结果执行命令 |
