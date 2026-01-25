---
description: 用于管理系统字体和缓存的 shell 别名。安装新字体后更新字体缓存并列出已安装的字体系列。
lang: zh-CN
metaTitle: Font 别名 - Dotfiles (CN)
permalink: /aliases/fonts/
sidebar: true

meta:
  - name: keywords
    content: 字体别名, 字体缓存, fc-cache, 列出字体, dotfiles, shell
---

# Font 别名

用于管理系统字体和缓存的 Shell 别名。

## 概述

字体别名提供了常见字体管理任务的便捷快捷方式。这些命令简化了安装新字体后更新字体缓存以及列出系统上所有可用字体系列的操作。

## 参考

### 命令

| 别名 | 命令 | 描述 |
|:---|:---|:---|
| `update-fonts` | `fc-cache -fv` | 更新系统字体缓存 |
| `list-fonts` | — | 列出所有已安装的字体系列 |

### 已安装字体

默认配置了以下字体：

| 字体 | 用途 |
|:---|:---|
| JetBrainsMono Nerd Font | 主要终端字体 |
| Symbols Nerd Font | 图标回退 |
