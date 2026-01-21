---
description: 查找别名旨在搜索目录层次结构中的文件，并对找到的文件执行操作。
lang: zh-CN
metaTitle: 查找别名 - Dotfiles (CN)
permalink: /zh/aliases/find/
---

# 查找别名

`find.aliases.sh` 文件为 `fd` 命令创建了有用的快捷别名。
`fd` 命令是 `find` 的跨平台替代品。

传统上，`find` 命令用于搜索目录层次结构中的文件，并对找到的文件执行操作。

我们决定用 `fd` 命令替换 `find` 命令，它是 `find` 的一个更简单、更快速且用户友好的替代品。

## 查找 (Find)

[fd](https://github.com/sharkdp/fd) 是 `find` 的一个简单、快速且用户友好的替代品。
虽然它并不旨在支持 find 的所有强大功能，但它为大多数用例提供了合理的（固执己见的）默认设置。

| 别名  | 命令                 | 描述                                         |
| ----- | -------------------- | -------------------------------------------- |
| fd    | `fd --color always`  | 默认情况下始终着色输出。                     |
| fda   | `fd --absolute-path` | 列出所有文件的绝对路径。                     |
| fdc   | `fd --ignore-case`   | 不区分大小写地列出所有文件。                 |
| fdd   | `fd --list-details`  | 列出所有文件的详细信息。                     |
| fde   | `fd --extension`     | 列出具有特定扩展名的所有文件。               |
| fdf   | `fd --follow`        | 列出所有文件并跟随符号链接。                 |
| fdh   | `fd --help`          | 列出帮助信息。                               |
| fdh   | `fd --hidden`        | 列出所有文件，包括隐藏文件。                 |
| fdn   | `fd --glob`          | 使用 glob 模式列出所有文件。                 |
| fdo   | `fd --owner`         | 列出具有特定所有者的所有文件。               |
| fds   | `fd --size`          | 列出具有特定大小的所有文件。                 |
| fdu   | `fd --exclude`       | 列出所有文件，排除特定模式。                 |
| fdv   | `fd --version`       | 列出版本信息。                               |
| fdx   | `fd --exec`          | 对每个搜索结果执行命令。                     |
| find  | `fd`                 | fd 是 find 的一个简单、快速且用户友好的替代品。 |
