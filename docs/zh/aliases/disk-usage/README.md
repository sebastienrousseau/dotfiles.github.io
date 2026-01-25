---
description: 用于磁盘使用监控的 shell 别名。显示文件大小、查找大目录并高效管理存储。
lang: zh-CN
metaTitle: Disk Usage 别名 - Dotfiles (CN)
permalink: /aliases/disk-usage/
sidebar: true

meta:
  - name: keywords
    content: 磁盘使用别名, du 命令, 存储监控, 文件大小, dotfiles, shell, bash, zsh
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 用于磁盘使用监控的 shell 别名。显示文件大小、查找大目录并高效管理存储。
  - name: twitter:title
    content: Disk Usage 别名 - Dotfiles
  - name: og:title
    content: Disk Usage 别名 - Dotfiles
  - name: og:description
    content: 用于磁盘使用监控的 shell 别名。显示文件大小、查找大目录并高效管理存储。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# Disk Usage 别名

快速监控和分析文件系统中的存储消耗。

## 概述

磁盘使用别名提供了监控 Unix 系统存储消耗的简化命令。定义在 `disk-usage.aliases.sh` 中，这些快捷方式简化了常见的 `du` 操作，并作为 Dotfiles 配置的一部分由 chezmoi 自动加载。

## 参考

下表列出了所有可用的磁盘使用别名及其功能。

| 别名 | 描述 |
|:---|:---|
| `du` | 显示当前目录的磁盘使用情况 |
| `du1` | 显示当前目录中文件和目录的大小 |
| `duh` | 以人类可读格式显示文件和目录大小 |
| `ducks` | 显示当前目录中最大的 10 个文件和目录 |
| `dus` | 以人类可读格式按大小排序显示文件大小 |
| `dusym` | 显示文件和目录大小，包括符号链接 |
| `dut` | 显示当前目录的总文件大小 |
