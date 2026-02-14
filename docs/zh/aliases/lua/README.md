---
title: "Lua 别名：快速访问 Lua REPL 解释器"
description: "用于 Lua 开发的 Shell 别名。使用简单的快捷方式启动 Lua、LuaJIT 和 Lua 5.1 REPL。"
lang: zh-CN
metaTitle: "Lua 别名 | Dotfiles"
permalink: /zh/aliases/lua/
sidebar: true
meta:
  - name: keywords
    content: "lua 别名, lua repl, luajit, lua shell 快捷方式, dotfiles, lua 开发"
---

# Lua 别名

使用直观的 Shell 快捷方式快速访问 Lua REPL 解释器。

![Dotfiles banner](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Dotfiles banner")

## 概述

这些别名定义在 `lua.aliases.sh` 中，由 chezmoi 自动加载。它们提供对系统上可用的各种 Lua 解释器的快速访问。

## 参考

| 别名         | 命令       | 描述                                     |
|--------------|------------|------------------------------------------|
| `lua-repl`   | `lua`      | 启动标准 Lua REPL                        |
| `luajit-repl`| `luajit`   | 启动 LuaJIT REPL（更快的 JIT）           |
| `lua51`      | `lua5.1`   | 启动 Lua 5.1 解释器                      |

## 注意事项

- 每个别名仅在系统上安装了相应的解释器时才可用。
- LuaJIT 提供更快的 JIT 编译 Lua 环境，与 Lua 5.1 兼容。
- 当您特别需要 Lua 5.1 兼容性时，请使用 `lua51`。
