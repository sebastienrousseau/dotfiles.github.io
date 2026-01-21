---
description: Wget 别名可以为 `wget` 命令创建有用的快捷方式。Wget 是一个从互联网下载文件的工具。
lang: zh-CN
metaTitle: Wget 别名 - Dotfiles (CN)
permalink: /zh/aliases/wget/
---

# Wget 别名

`wget.aliases.sh` 文件为许多常用的 [wget](https://www.gnu.org/software/wget/) 命令创建了有用的快捷别名。

Wget 别名为 `wget` 命令创建了有用的快捷别名。Wget 是一个从互联网下载文件的工具。

## Wget

GNU [Wget](https://www.gnu.org/software/wget/) 是一个用于从 Web 非交互式下载文件的免费实用程序。它支持 HTTP、HTTPS 和 FTP 协议，以及通过 HTTP 代理进行检索。

| 别名 | 命令               | 描述                        |
| ---- | ------------------ | --------------------------- |
| wg   | `wget`             | 下载文件。                  |
| wgc  | `wg`               | 继续部分下载的文件。        |
| wge  | `wg -e robots=off` | 下载文件，忽略 robots.txt。 |
| wget | `wget -c`          | 继续部分下载的文件。        |
