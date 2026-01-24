---
description: List 别名是与 `ls` 交互的别名集合，用于更方便地显示目录内容。
lang: zh-CN
metaTitle: List (ls) 别名 - Dotfiles (ZH)
permalink: /zh/aliases/list/

meta:
  - name: keywords
    content: aliases, ls, list, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: List 别名是与 `ls` 交互的别名集合，用于更方便地显示目录内容。
  - name: twitter:description
    content: List 别名是与 `ls` 交互的别名集合，用于更方便地显示目录内容。
  - name: twitter:title
    content: List (ls) 别名 - Dotfiles (ZH)
  - name: og:title
    content: List (ls) 别名 - Dotfiles (ZH)
  - name: og:description
    content: List 别名是与 `ls` 交互的别名集合，用于更方便地显示目录内容。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活而设计
  - name: og:locale
    content: zh_CN
---

# List 别名

`list.aliases.sh` 文件为列出文件和目录提供快捷别名。

List 别名用于更交互地使用 `ls`，以显示目录内容。

对于非目录文件，`ls` 会显示文件名及相关信息；对于目录，
`ls` 会显示目录中的文件名及相关信息。

## ls

[ls](https://en.wikipedia.org/wiki/Ls) 用于列出目录内容。

| Alias  | 命令                            | 说明                                   |
| ------ | ------------------------------- | -------------------------------------- |
| l.     | `ls -dlhF .* \| grep -v "^d"`  | 列出隐藏文件。                         |
| l      | `ls -lFh`                        | 大小、类型，可读。                     |
| l1     | `ls -1`                          | 每行一个文件。                         |
| la     | `ls -lAFh`                       | 所有文件，类型，可读。                 |
| labc   | `ls -lap`                        | 按字母顺序列出所有文件。               |
| lc     | `wc -l`                          | 统计文件行数。                         |
| lct    | `ls -lcrh`                       | 按时间列出，最新在前。                 |
| ld     | `ls -ltrh`                       | 按日期排序，最旧在前。                 |
| ldir   | `ls -l \| egrep '^d'`            | 仅列出目录。                           |
| ldot   | `l.`                             | 列出隐藏文件。                         |
| left   | `ls -t -1`                       | 按时间列出，最新在后。                 |
| right  | `ls -t -1r`                      | 按时间列出，最新在前。                 |
| lf     | `ls -l \| egrep -v '^d'`         | 仅列出文件。                           |
| lk     | `ls -lSrh`                       | 按大小排序，最大在前。                 |
| ll     | `la`                             | 长列表，几乎所有，类型，可读。         |
| lla    | `ls -l -d $PWD/*`                | 列出当前目录的完整路径。               |
| locale | `locale -a \| grep UTF-8`        | 列出可用 locale。                      |
| lp     | `sudo lsof -i -T -n`             | 列出打开的端口。                       |
| lr     | `ls -lRh`                        | 递归列表，类型，可读。                 |
| ls     | `ls --color`                     | 输出着色。                             |
| lS     | `ls -1FSsh`                      | 按时间与大小排序。                     |
| lt     | `tree`                           | 以树形显示目录内容。                   |
| lu     | `ls -lurh`                       | 按日期排序，最旧在前。                 |
| lw     | `ls -xAh`                        | 宽列表，几乎所有，类型，可读。         |
| lx     | `ls \| sort -k 1,1 -t .`         | 按扩展名排序。                         |
| lz     | `ls -lSr`                        | 按大小排序，最小在前。                 |
