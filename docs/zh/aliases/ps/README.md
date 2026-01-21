---
description: PS 别名是一组别名，允许您与 `ps` 命令行工具交互。Ps 是一个报告当前进程快照的工具。
lang: zh-CN
metaTitle: PS 别名 - Dotfiles (CN)
permalink: /zh/aliases/ps/
---

# PS 别名

`ps.aliases.sh` 文件为处理进程创建了有用的快捷别名。

PS 别名是一组别名，允许您与 `ps` 命令行工具交互。Ps 是一个报告当前进程快照的工具。

## PS

[PS](<https://zh.wikipedia.org/wiki/Ps_(Unix)>) 是一个列出系统上运行的进程的命令。

| 别名 | 命令     | 描述                                                                                              |
| ---- | -------- | ------------------------------------------------------------------------------------------------- |
| pid  | `ps -f`  | 显示 uid、pid、父 pid、最近的 CPU 使用率、进程开始时间、控制 tty、经过的 CPU 使用率和关联的命令。 |
| ps   | `ps -ef` | 显示所有进程。                                                                                    |
| psa  | `ps aux` | 列出所有进程。                                                                                    |
