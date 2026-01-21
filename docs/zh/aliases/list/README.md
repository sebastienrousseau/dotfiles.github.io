---
description: The List aliases are a collection of aliases that allow you to interact with the `ls` command in a more interactive way in order to display the content of a directory.
lang: zh-CN
metaTitle: The List (ls) aliases - Dotfiles (CN)
permalink: /zh/aliases/list/

meta:
  - name: keywords
    content: aliases, ls, list, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: The List aliases are a collection of aliases that allow you to interact with the `ls` command in a more interactive way in order to display the content of a directory.
  - name: twitter:description
    content: The List aliases are a collection of aliases that allow you to interact with the `ls` command in a more interactive way in order to display the content of a directory.
  - name: twitter:title
    content: The List (ls) aliases - Dotfiles (CN)
  - name: og:title
    content: The List (ls) aliases - Dotfiles (CN)
  - name: og:description
    content: The List aliases are a collection of aliases that allow you to interact with the `ls` command in a more interactive way in order to display the content of a directory.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# List aliases

The `list.aliases.sh` file creates helpful shortcut aliases for listing files
and directories.

The List aliases are a collection of aliases that allow you to interact with
the `ls` command in a more interactive way in order to display the content of a
directory.

For each operand that names a file of a type other than directory, `ls` displays
its name as well as any requested, associated information. For each operand
that names a file of type directory, `ls` displays the names of files contained
within that directory, as well as any requested, associated information.

## ls

[ls](https://en.wikipedia.org/wiki/Ls) is a command that lists the contents of
a directory.

| Alias  | Command              | Description                                            |
| ------ | -------------------- | ------------------------------------------------------ | --------------------------- |
| l.     | `ls -dlhF .\*        | grep -v "^d"`                                          | 列出 hidden 文件.          |
| l      | `ls -lFh`            | Size, 显示 type, human readable.                       |
| l1     | `ls -1`              | Display one 文件 per line.                             |
| la     | `ls -lAFh`           | All 文件, 显示 type, human readable.                  |
| labc   | `ls -lap`            | 列出 all 文件 in alphabetical order.                  |
| lc     | `wc -l`              | Count the number of lines in the 文件.                 |
| lct    | `ls -lcrh`           | 列出 文件 by time, newest first.                      |
| ld     | `ls -ltrh`           | Sort by date, oldest first.                            |
| ldir   | `ls -l               | egrep '^d'`                                            | 列出 directories only.      |
| ldot   | `l.`                 | 列出 hidden 文件.                                     |
| left   | `ls -t -1`           | 列出 文件 by date, most recent last.                  |
| right  | `ls -t -1r`          | 列出 文件 by date, most recent first.                 |
| lf     | `ls -l               | egrep -v '^d'`                                         | 列出 文件 only.            |
| lk     | `ls -lSrh`           | Sort by size, largest first.                           |
| ll     | `la`                 | Long 列出, 显示 almost all, 显示 type, human readable. |
| lla    | `ls -l -d $PWD/*`    | 列出 full path of all 文件 in current 目录.      |
| locale | `locale -a           | grep UTF-8`                                            | 列出 all available locales. |
| lp     | `sudo lsof -i -T -n` | 列出 all 打开 ports.                                   |
| lr     | `ls -lRh`            | Recursive 列出, 显示 type, human readable.             |
| ls     | `ls --color`         | Colorize the output.                                   |
| lS     | `ls -1FSsh`          | Order 文件 Based on Last Modified Time and size.      |
| lt     | `tree`               | 列出 contents of directories in a tree-like format.    |
| lu     | `ls -lurh`           | Sort by date, oldest first.                            |
| lw     | `ls -xAh`            | Wide 列出, 显示 almost all, 显示 type, human readable. |
| lx     | `ls                  | sort -k 1,1 -t .`                                      | Sort by extension.          |
| lz     | `ls -lSr`            | Sort by size, smallest first.                          |
