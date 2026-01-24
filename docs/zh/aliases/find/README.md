---
description: Find 别名用于在目录层级中搜索文件并对结果执行操作。
lang: zh-CN
metaTitle: Find 别名 - Dotfiles (ZH)
permalink: /zh/aliases/find/

meta:
  - name: keywords
    content: aliases, code, editor, environment, gedit, nano, notepad++, text, vi, vim
  - name: twitter:card
    content: Find 别名用于在目录层级中搜索文件并对结果执行操作。
  - name: twitter:description
    content: Find 别名用于在目录层级中搜索文件并对结果执行操作。
  - name: twitter:title
    content: Find 别名 - Dotfiles (ZH)
  - name: og:title
    content: Find 别名 - Dotfiles (ZH)
  - name: og:description
    content: Find 别名用于在目录层级中搜索文件并对结果执行操作。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活而设计
  - name: og:locale
    content: zh_CN
---
# Find 别名

管理 Find 别名。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名定义在 `find.aliases.sh` 中，并由 `chezmoi` 自动加载。

## ⚡ 别名

此代码提供一组 `fd` 的命令别名，作为 Unix 系统上 `find` 的替代。
`fd` 简单、快速、易用，可用于搜索文件与目录。
别名让常用场景更容易记忆与使用。
- `fd` 默认别名，等同 `fd --color always`，带颜色输出。
- `fda` 列出带绝对路径的文件。
- `fdc` 不区分大小写搜索。
- `fdd` 列出带详情的文件。
- `fde` 按指定扩展名列出文件。
- `fdf` 跟随符号链接列出文件。
- `fdh` 显示 `fd` 帮助。
- `fdh` 列出包含隐藏文件。
- `fdn` 列出匹配指定 glob 的文件。
- `fdo` 列出包含所有者信息的文件。
- `fds` 列出文件大小。
- `fdu` 应用排除规则列出文件。
- `fdv` 显示 `fd` 版本。
- `fdx` 对每个结果执行命令。

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
