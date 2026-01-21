---
description: 编辑器别名将在 `editor` 环境变量中设置的编辑器列表中打开文件。
lang: zh-CN
metaTitle: 编辑器别名 - Dotfiles (CN)
permalink: /zh/aliases/editor/
---

# 编辑器别名

`editor.aliases.sh` 文件创建了有用的快捷别名，用于在您首选的文本编辑器中打开文件。
这些别名将在 `editor` 环境变量中设置的编辑器列表中打开文件。

截至目前，以下编辑器按优先顺序列在 `editor` 环境变量中。
可以通过编辑 `editor.aliases.sh` 文件中的 `editor` 环境变量来更改此列表：

- [nano][nn],
- [vim][vi],
- [vi][vi],
- [code][cod],
- [gedit][gdt],
- [notepad++][np++],

## 编辑器

[编辑器](https://zh.wikipedia.org/wiki/文本编辑器) 是一个用于编辑纯文本文件的程序。

| 别名   | 命令        | 描述       |
| ------ | ----------- | ---------- |
| e      | `${editor}` | 编辑文件。 |
| edit   | `${editor}` | 编辑文件。 |
| editor | `${editor}` | 编辑文件。 |
| mate   | `${editor}` | 编辑文件。 |
| n      | `${editor}` | 编辑文件。 |
| v      | `${editor}` | 编辑文件。 |

[np++]: https://notepad-plus-plus.org/
[gdt]: https://wiki.gnome.org/Apps/Gedit
[cod]: https://code.visualstudio.com/
[vi]: https://www.vim.org/
[nn]: https://www.nano-editor.org/
