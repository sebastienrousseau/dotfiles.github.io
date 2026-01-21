---
description: Mkdir 别名是一组别名，允许您与 `mkdir` 命令行工具交互。Mkdir 是一个创建目录的工具。
lang: zh-CN
metaTitle: Mkdir 别名 - Dotfiles (CN)
permalink: /zh/aliases/mkdir/
---

# Mkdir 别名

`mkdir.aliases.sh` 文件为创建目录创建了有用的快捷别名。

Mkdir 别名是一组别名，允许您与 `mkdir` 命令行工具交互。Mkdir 是一个创建目录的工具。

## Mkdir

[Mkdir](<https://zh.wikipedia.org/wiki/Mkdir>) 是一个创建目录的命令。mkdir 实用程序使用模式“rwxrwxrwx”(0777)，按指定的顺序创建作为操作数命名的目录。

| 别名  | 命令                        | 描述                          |
| ----- | --------------------------- | ----------------------------- |
| mcd   | `mkdir -pv && cd`           | 创建目录并进入该目录。        |
| mcdp  | `mkdir -pv && cd`           | 创建目录和父目录并进入该目录。|
| md    | `mkd`                       | 创建目录。                    |
| mdd   | `mkdir -pv $(date +%Y%m%d)` | 使用日期创建目录。            |
| mdp   | `mkdir -pv`                 | 创建目录和父目录。            |
| mdt   | `mkdir -pv $(date +%h%m%s)` | 使用时间创建目录。            |
