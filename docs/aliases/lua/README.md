---
title: "Lua Aliases: Quick Access to Lua REPL Interpreters"
description: "Shell aliases for Lua development. Launch Lua, LuaJIT, and Lua 5.1 REPLs with simple shortcuts."
lang: en-GB
metaTitle: "Lua Aliases | Dotfiles"
permalink: /aliases/lua/
sidebar: true
meta:
  - name: keywords
    content: "lua aliases, lua repl, luajit, lua shell shortcuts, dotfiles, lua development"
---

# Lua Aliases

Quick access to Lua REPL interpreters with intuitive shell shortcuts.

![Dotfiles banner](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Dotfiles banner")

## Overview

These aliases are defined in `lua.aliases.sh` and are automatically loaded by chezmoi. They provide quick access to various Lua interpreters when available on your system.

## Reference

| Alias        | Command    | Description                              |
|--------------|------------|------------------------------------------|
| `lua-repl`   | `lua`      | Launch the standard Lua REPL             |
| `luajit-repl`| `luajit`   | Launch the LuaJIT REPL (faster JIT)      |
| `lua51`      | `lua5.1`   | Launch Lua 5.1 interpreter               |

## Notes

- Each alias is only available if the corresponding interpreter is installed on your system.
- LuaJIT provides a faster, JIT-compiled Lua environment compatible with Lua 5.1.
- Use `lua51` when you specifically need Lua 5.1 compatibility.
