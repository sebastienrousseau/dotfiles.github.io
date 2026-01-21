---
description: 清除别名能够以多种方式清除屏幕。
lang: zh-CN
metaTitle: 清除别名 - Dotfiles (CN)
permalink: /zh/aliases/clear/
---

# 清除 (Clear) 别名

`clear.aliases.sh` 文件为清除终端屏幕创建了有用的快捷别名。这些别名能够以多种方式清除屏幕。

## 清除

[Clear](<https://zh.wikipedia.org/wiki/Clear_(Unix)>) 是一个清除终端屏幕的命令。

| 别名   | 命令                                            | 描述                                                     |
| ------ | ----------------------------------------------- | -------------------------------------------------------- |
| c      | `clear`                                         | 清除终端屏幕。                                           |
| cl     | `c`                                             | 清除终端屏幕。                                           |
| clc    | `clear && cat`                                  | 清除终端屏幕并打印当前目录的内容。                       |
| clcat  | `clc`                                           | 清除终端屏幕并打印当前目录的内容。                       |
| clh    | `clear && history`                              | 清除终端屏幕并打印命令历史记录。                         |
| clhist | `clh`                                           | 清除终端屏幕并打印命令历史记录。                         |
| clp    | `clear && pwd`                                  | 清除终端屏幕并打印当前工作目录。                         |
| clpwd  | `clp`                                           | 清除终端屏幕并打印当前工作目录。                         |
| clr    | `c`                                             | 清除终端屏幕。                                           |
| cls    | `c`                                             | 清除终端屏幕。                                           |
| clt    | `clear && tree`                                 | 清除终端屏幕并打印目录树。                               |
| cltree | `clt`                                           | 清除终端屏幕并打印目录树。                               |
| ct     | `clear && tree ./`                              | 清除终端屏幕并打印目录树。                               |
| ctree  | `ct`                                            | 清除终端屏幕并打印目录树。                               |
| cpl    | `clear && pwd && echo '' && ls -a && echo ''`   | 清除终端屏幕并打印当前工作目录和当前目录的内容。         |
| cplt   | `clear && pwd && echo '' && tree ./ && echo ''` | 清除终端屏幕并打印当前工作目录和目录树。                 |
