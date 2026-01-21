---
description: Sudo 别名是一组别名，允许您与 `sudo` 命令交互。Sudo 是一个允许您以另一个用户身份运行命令的工具。
lang: zh-CN
metaTitle: Sudo 别名 - Dotfiles (CN)
permalink: /zh/aliases/sudo/
---

# Sudo 别名

`sudo.aliases.sh` 文件为使用 `sudo` 命令创建了有用的快捷别名。

Sudo 别名是一组别名，允许您与 `sudo` 命令交互。Sudo 是一个允许您以另一个用户身份运行命令的工具。

## Sudo

[Sudo](https://zh.wikipedia.org/wiki/Sudo) 是一个允许用户以另一个用户身份执行命令的命令。

| 别名 | 命令      | 描述                     |
| ---- | --------- | ------------------------ |
| root | `s`       | 以超级用户身份执行命令。 |
| s    | `sudo -i` | 以超级用户身份执行命令。 |
| su   | `sudo su` | 以超级用户身份执行命令。 |
| sudo | `s`       | 以超级用户身份执行命令。 |
