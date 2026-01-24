---
description: Disk Usage 别名用于 Dotfiles
lang: zh-CN
metaTitle: Disk Usage 别名 - Dotfiles
permalink: /zh/aliases/disk-usage/
---
# Disk Usage 别名

管理 Disk Usage 别名。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名定义在 `disk-usage.aliases.sh` 中，并由 `chezmoi` 自动加载。

## ⚡ 别名

这些别名用于快速查看磁盘使用情况，基于 `du` 变体并按大小排序。
- `du` 在当前目录执行 `du -h`。
- `du1` 列出第一级磁盘使用并按大小排序。
- `ducks` 显示当前目录最大的 10 个占用项。
- `duf` 显示深度为 1 的文件使用情况。
- `dufi` 同 `duf`，按大小倒序。
- `duh` 显示当前目录总用量（可读格式）。
- `dui` 显示磁盘与 inode 使用并排序。
- `dul` 按大小列出目录。
- `duls` 按大小列出当前目录使用情况。
- `dus` 按大小显示当前目录使用情况。

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
