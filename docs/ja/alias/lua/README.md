---
title: "Lua エイリアス：Lua REPL インタープリターへの素早いアクセス"
description: "Lua 開発用のシェルエイリアス。シンプルなショートカットで Lua、LuaJIT、Lua 5.1 REPL を起動。"
lang: ja-JP
metaTitle: "Lua エイリアス | Dotfiles"
permalink: /ja/alias/lua/
sidebar: true
meta:
  - name: keywords
    content: "lua エイリアス, lua repl, luajit, lua シェルショートカット, dotfiles, lua 開発"
---

# Lua エイリアス

直感的なシェルショートカットで Lua REPL インタープリターに素早くアクセス。

![Dotfiles banner](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Dotfiles banner")

## 概要

これらのエイリアスは `lua.aliases.sh` で定義され、chezmoi によって自動的にロードされます。システムで利用可能な様々な Lua インタープリターへの素早いアクセスを提供します。

## リファレンス

| エイリアス   | コマンド   | 説明                                     |
|--------------|------------|------------------------------------------|
| `lua-repl`   | `lua`      | 標準 Lua REPL を起動                     |
| `luajit-repl`| `luajit`   | LuaJIT REPL を起動（高速 JIT）           |
| `lua51`      | `lua5.1`   | Lua 5.1 インタープリターを起動           |

## 注意事項

- 各エイリアスは、対応するインタープリターがシステムにインストールされている場合のみ利用可能です。
- LuaJIT は Lua 5.1 互換の高速な JIT コンパイル Lua 環境を提供します。
- Lua 5.1 の互換性が特に必要な場合は `lua51` を使用してください。
