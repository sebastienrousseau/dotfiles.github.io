---
description: 在破坏性操作（如 rm、mv 和 cp）之前添加交互式提示的 shell 别名。防止意外删除文件。
lang: zh-CN
metaTitle: Interactive 别名 - Dotfiles (CN)
permalink: /aliases/interactive/
sidebar: true

meta:
  - name: keywords
    content: 交互式别名, shell 安全, rm 确认, cp 交互式, mv 提示, dotfiles, bash 别名
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Interactive 别名 - Dotfiles
  - name: twitter:description
    content: 在破坏性操作（如 rm、mv 和 cp）之前添加交互式提示的 shell 别名。
  - name: og:title
    content: Interactive 别名 - Dotfiles
  - name: og:description
    content: 在破坏性操作（如 rm、mv 和 cp）之前添加交互式提示的 shell 别名。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# Interactive 别名

在破坏性操作之前带有确认提示的安全 shell 命令。

## 概述

交互式别名为可能永久修改或删除文件的常用 shell 命令添加确认提示。定义在 `interactive.aliases.sh` 中，由 chezmoi 自动加载，这些别名通过在执行潜在破坏性操作之前要求用户确认来帮助防止意外数据丢失。

## 参考

### 文件操作

| 别名 | 描述 |
|:---|:---|
| `cp` | 交互式复制文件和目录，带详细输出。覆盖前询问。 |
| `mv` | 交互式移动或重命名文件，带详细输出。覆盖前询问。 |
| `ln` | 交互式创建符号链接，带详细输出。覆盖前询问。 |

### 文件删除

| 别名 | 描述 |
|:---|:---|
| `rm` | 交互式删除文件或目录，带详细输出。每次删除前询问。 |
| `del` | 交互式递归删除文件或目录，带详细输出。每次删除前询问。 |
| `zap` | `rm` 的别名。交互式删除文件或目录，带详细输出。 |

### 垃圾桶管理

| 别名 | 描述 |
|:---|:---|
| `bin` | 强制递归删除垃圾目录（`~/.Trash`）中的所有文件。 |

### 权限和工具

| 别名 | 描述 |
|:---|:---|
| `chmod` | 更改文件或目录权限，带详细输出。 |
| `chown` | 更改文件或目录所有者和组，带详细输出。 |
| `diff` | 以统一格式比较并显示两个文件之间的差异。 |
| `grep` | 在文件或输出中搜索模式，显示行号且不区分大小写。 |
| `mkdir` | 根据需要创建新目录及父目录，带详细输出。 |
