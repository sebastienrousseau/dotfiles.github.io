---
title: "Aliases Lua: Acesso rápido aos interpretadores Lua REPL"
description: "Aliases shell para desenvolvimento Lua. Inicie Lua, LuaJIT e Lua 5.1 REPL com atalhos simples."
lang: pt-BR
metaTitle: "Aliases Lua | Dotfiles"
permalink: /pt/aliases/lua/
sidebar: true
meta:
  - name: keywords
    content: "aliases lua, lua repl, luajit, atalhos shell lua, dotfiles, desenvolvimento lua"
---

# Aliases Lua

Acesso rápido aos interpretadores Lua REPL com atalhos de shell intuitivos.

![Dotfiles banner](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Dotfiles banner")

## Visão Geral

Estes aliases são definidos em `lua.aliases.sh` e carregados automaticamente pelo chezmoi. Eles fornecem acesso rápido a vários interpretadores Lua disponíveis no seu sistema.

## Referência

| Alias        | Comando    | Descrição                                |
|--------------|------------|------------------------------------------|
| `lua-repl`   | `lua`      | Iniciar o REPL Lua padrão                |
| `luajit-repl`| `luajit`   | Iniciar o REPL LuaJIT (JIT mais rápido)  |
| `lua51`      | `lua5.1`   | Iniciar o interpretador Lua 5.1          |

## Notas

- Cada alias só está disponível se o interpretador correspondente estiver instalado no seu sistema.
- LuaJIT fornece um ambiente Lua compilado JIT mais rápido, compatível com Lua 5.1.
- Use `lua51` quando precisar especificamente de compatibilidade com Lua 5.1.
