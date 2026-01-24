---
description: 交互式别名用于更交互地使用 shell 和终端。
lang: zh-CN
metaTitle: 交互式别名 - Dotfiles (ZH)
permalink: /zh/aliases/interactive/

meta:
  - name: keywords
    content: aliases, bash, cp, interactive, linux, ln, macos, mv, rm, shell, terminal, windows
  - name: twitter:card
    content: 交互式别名用于更交互地使用 shell 和终端。
  - name: twitter:description
    content: 交互式别名用于更交互地使用 shell 和终端。
  - name: twitter:title
    content: 交互式别名 - Dotfiles (ZH)
  - name: og:title
    content: 交互式别名 - Dotfiles (ZH)
  - name: og:description
    content: 交互式别名用于更交互地使用 shell 和终端。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活而设计
  - name: og:locale
    content: zh_CN
---
# 交互式别名

管理交互式别名。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名定义在 `interactive.aliases.sh` 中，并由 `chezmoi` 自动加载。

## ⚡ 别名

这些交互式别名用于简化常见命令行操作，在执行潜在破坏性操作前
提供确认提示。
* `cp` 交互式复制（覆盖前询问），带详细输出。
* `del` 交互式删除（每次删除前询问），递归且带详细输出。
* `ln` 交互式创建符号链接（覆盖前询问），带详细输出。
* `mv` 交互式移动/重命名（覆盖前询问），带详细输出。
* `rm` 交互式删除（每次删除前询问），带详细输出。
* `zap` `rm` 的别名，交互式删除。
### 垃圾桶相关别名
* `bin` 强制递归清空垃圾桶（用户 .Trash）。
* `chmod` 修改权限并输出详细信息。
* `chown` 修改所有者与组并输出详细信息。
* `diff` 以 unified 格式显示差异。
* `grep` 搜索模式，显示行号并忽略大小写。
* `mkdir` 创建目录并自动创建父目录，带详细输出。

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
