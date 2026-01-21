---
description: UUID 别名可以为 `uuidgen` 命令创建有用的快捷方式。uuidgen 命令生成通用唯一标识符 (UUID)，这是一个在空间和时间上保证唯一的 128 位值。
lang: zh-CN
metaTitle: UUID 别名 - Dotfiles (CN)
permalink: /zh/aliases/uuid/
---

# UUID 别名

`uuid.aliases.sh` 文件为生成 [UUID](https://zh.wikipedia.org/wiki/通用唯一识别码) 创建了有用的快捷别名。

UUID 别名为 `uuidgen` 命令创建了有用的快捷别名。
`uuidgen` 命令生成通用唯一标识符 (UUID)，这是一个在空间和时间上保证唯一的 128 位值。

## UUID

[UUID](https://zh.wikipedia.org/wiki/通用唯一识别码) 是一个 128 位数字，用于识别计算机系统中的信息。

| 别名 | 命令                                                                               | 描述                     |
| ---- | ---------------------------------------------------------------------------------- | ------------------------ |
| uuid | `uuidgen \| tr -d '\n' \| tr '[:upper:]' '[:lower:]' \| pbcopy && pbpaste && echo` | 生成 UUID 并将其复制到剪贴板。 |
