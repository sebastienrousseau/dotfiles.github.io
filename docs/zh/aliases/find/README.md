---
description: The Find aliases, are designed to search for files in a directory hierarchy and perform actions on the files that are found.
lang: zh-CN
metaTitle: Find aliases - Dotfiles (CN)
permalink: /zh/aliases/find/

meta:
  - name: keywords
    content: aliases, code, editor, environment, gedit, nano, notepad++, text, vi, vim
  - name: twitter:card
    content: The Find aliases, are designed to search for files in a directory hierarchy and perform actions on the files that are found.
  - name: twitter:description
    content: The Find aliases, are designed to search for files in a directory hierarchy and perform actions on the files that are found.
  - name: twitter:title
    content: Find aliases - Dotfiles (CN)
  - name: og:title
    content: Find aliases - Dotfiles (CN)
  - name: og:description
    content: The Find aliases, are designed to search for files in a directory hierarchy and perform actions on the files that are found.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Find aliases

The `find.aliases.sh` file creates helpful shortcut aliases for the `fd` command
. The `fd` command is a cross-platform alternative to `find`.

Traditionally, the `find` command is used to search for files in a directory
hierarchy and perform actions on the files that are found.

We decided to substitute the `find` command with the `fd` command which is
simpler, fast and user-friendly alternative to `find`.

## Find

[fd](https://github.com/sharkdp/fd) is a simple, fast and user-friendly
alternative to `find`. While it does not aim to support all of find's powerful
functionality, it provides sensible (opinionated) defaults for a majority of
use cases.

| 别名  | 命令                   | 描述                                                                       |
| ----- | -------------------- | ----------------------------------------------------------- |
| fd    | `fd --color always`  | always colorize output by default.                          |
| fda   | `fd --absolute-path` | 列出 all 文件 with absolute path.                          |
| fdc   | `fd --ignore-case`   | 列出 all 文件 with case insensitive 搜索.                |
| fdd   | `fd --list-details`  | 列出 all 文件 with details.                                |
| fde   | `fd --extension`     | 列出 all 文件 with extension.                              |
| fdf   | `fd --follow`        | 列出 all 文件 with follow symlinks.                        |
| fdh   | `fd --help`          | 列出 all 文件 with help.                                   |
| fdh   | `fd --hidden`        | 列出 all 文件 with hidden 文件.                           |
| fdn   | `fd --glob`          | 列出 all 文件 with glob.                                   |
| fdo   | `fd --owner`         | 列出 all 文件 with owner.                                  |
| fds   | `fd --size`          | 列出 all 文件 with size.                                   |
| fdu   | `fd --exclude`       | 列出 all 文件 with exclude.                                |
| fdv   | `fd --version`       | 列出 all 文件 with version.                                |
| fdx   | `fd --exec`          | Execute a command for each 搜索 result.                   |
| find  | `fd`                 | fd is a simple, fast and user-friendly alternative to 查找. |
