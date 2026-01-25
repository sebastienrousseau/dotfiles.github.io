---
description: 用于终端复用的 Tmux shell 别名。会话、窗口和窗格的快捷方式。
lang: zh-CN
metaTitle: Tmux 别名 - Dotfiles (CN)
permalink: /aliases/tmux/
sidebar: true

meta:
  - name: keywords
    content: tmux, 终端复用器, 会话, shell 别名, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 用于终端复用的 Tmux shell 别名。会话、窗口和窗格的快捷方式。
  - name: twitter:title
    content: Tmux 别名 - Dotfiles
  - name: og:title
    content: Tmux 别名 - Dotfiles
  - name: og:description
    content: 用于终端复用的 Tmux shell 别名。会话、窗口和窗格的快捷方式。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# Tmux 别名

使用 tmux 管理终端会话、窗口和窗格。

## 概述

这些别名定义在 `tmux.aliases.sh` 中，由 Chezmoi 自动加载。

## 参考

| 别名 | 描述 |
|:---|:---|
| `tm` | 启动 tmux |
| `tma` | 连接到上次会话 |
| `tmat` | 连接到特定会话 |
| `tmks` | 终止除当前会话外的所有会话 |
| `tmka` | 终止所有会话 |
| `tml` | 列出所有会话 |
| `tmn` | 新建无名会话 |
| `tms` | 新建命名会话 |
| `tmr` | 重新加载 tmux 配置 |
| `tmls` | 列出窗口 |
| `tmlp` | 列出窗格 |
| `tmi` | 显示 tmux 信息 |
