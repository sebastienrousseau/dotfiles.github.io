---
description: Disk usage 别名用于显示磁盘使用统计，计算并输出文件或目录占用空间。
lang: zh-CN
metaTitle: Disk usage 别名 - Dotfiles (ZH)
permalink: /zh/aliases/du/

meta:
  - name: twitter:card
    content: Disk usage 别名用于显示磁盘使用统计，计算并输出文件或目录占用空间。
  - name: twitter:description
    content: Disk usage 别名用于显示磁盘使用统计，计算并输出文件或目录占用空间。
  - name: twitter:title
    content: Disk usage 别名 - Dotfiles (ZH)
  - name: og:title
    content: Disk usage 别名 - Dotfiles (ZH)
  - name: og:description
    content: Disk usage 别名用于显示磁盘使用统计，计算并输出文件或目录占用空间。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活而设计
  - name: og:locale
    content: zh_CN
---

# Disk usage 别名

`du.aliases.sh` 为 `du` 提供快捷别名。

## Disk usage

[Disk usage](<https://en.wikipedia.org/wiki/Du_(Unix)>) 用于估算磁盘空间占用。

| Alias | Command | Description |
| ----- | ------- | ----------- |
| du | `du -h` | 显示当前目录磁盘占用。 |
| du1 | `du -hxd 1 | sort -h` | 当前目录中文件和目录大小。 |
| ducks | `du -cks * | sort -rn | head -n 10` | 当前目录前 10 大文件与目录。 |
| duh | `du` | 文件与目录大小。 |
| dus | `du -hs *` | 人类可读大小并排序。 |
| dusym | `du * -hsLc` | 包含符号链接的大小。 |
| dut | `dus` | 当前目录总大小。 |
