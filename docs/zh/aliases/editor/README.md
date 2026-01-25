---
description: Neovim、VS Code、Vim、Nano、Emacs 和 Sublime Text 的 shell 别名。使用通用快捷方式更快地编辑文件。
lang: zh-CN
metaTitle: Editor 别名 - Dotfiles (CN)
permalink: /aliases/editor/
sidebar: true

meta:
  - name: keywords
    content: 编辑器别名, neovim, vim, vscode, nano, emacs, sublime text, shell 快捷方式, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Neovim、VS Code、Vim、Nano、Emacs 和 Sublime Text 的 shell 别名。使用通用快捷方式更快地编辑文件。
  - name: twitter:title
    content: Editor 别名 - Dotfiles
  - name: og:title
    content: Editor 别名 - Dotfiles
  - name: og:description
    content: Neovim、VS Code、Vim、Nano、Emacs 和 Sublime Text 的 shell 别名。使用通用快捷方式更快地编辑文件。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# Editor 别名

启动和配置首选文本编辑器的快捷方式。

## 概述

编辑器别名为多个应用程序提供了统一的文本编辑界面。定义在 `editor.aliases.sh` 中，由 chezmoi 自动加载，这些快捷方式与 `editor.sh` 协同工作，检测并配置系统上可用的最佳编辑器。

系统支持 Neovim、Visual Studio Code、Vim、Nano、Emacs、Sublime Text 和 Atom。通用别名适应任何活动编辑器，而专用别名提供编辑器特定的功能。

## 参考

### 通用别名

这些别名适用于 `editor.sh` 配置的任何编辑器。

| 别名 | 描述 |
|:---|:---|
| `e` | 快速编辑命令 |
| `edit` | 标准编辑命令 |
| `editor` | 完整编辑器命令 |
| `mate` | TextMate 风格命令 |
| `n` | 短编辑别名 |
| `v` | Vim 风格编辑别名 |

### Neovim 别名

| 别名 | 描述 |
|:---|:---|
| `vi` | 重定向到 Neovim |
| `vim` | 重定向到 Neovim |
| `nvimrc` | 编辑 Neovim Vimscript 配置 |
| `nvimlua` | 编辑 Neovim Lua 配置 |
| `nvimconf` | 打开 Neovim 配置目录 |

### Visual Studio Code 别名

| 别名 | 描述 |
|:---|:---|
| `vsc` | 启动 VS Code |
| `vsca` | 将文件夹添加到当前窗口 |
| `vscd` | 比较两个文件 |
| `vscn` | 打开新窗口 |
| `vscr` | 复用窗口打开文件 |
| `vscex` | 安装 VS Code 扩展 |
| `vsclist` | 列出已安装的扩展 |

### 配置编辑

`editrc` 函数提供对常用配置文件的快速访问。

| 命令 | 目标文件 |
|:---|:---|
| `editrc bash` | `~/.bashrc` |
| `editrc zsh` | `~/.zshrc` |
| `editrc vim` | `~/.vimrc` |
| `editrc nvim` | Neovim init 文件 |
| `editrc tmux` | `~/.tmux.conf` |
| `editrc git` | `~/.gitconfig` |
| `editrc ssh` | `~/.ssh/config` |
