---
title: "Lua Aliassen: Snelle Toegang tot Lua REPL Interpreters"
description: "Shell-aliassen voor Lua-ontwikkeling. Start Lua, LuaJIT en Lua 5.1 REPLs met eenvoudige snelkoppelingen."
lang: nl
metaTitle: "Lua Aliassen | Dotfiles"
permalink: /nl/aliases/lua/
sidebar: true
meta:
  - name: keywords
    content: "lua aliassen, lua repl, luajit, lua shell snelkoppelingen, dotfiles, lua ontwikkeling"
---

# Lua Aliassen

Snelle toegang tot Lua REPL interpreters met intuïtieve shell-snelkoppelingen.

![Dotfiles banner](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Dotfiles banner")

## Overzicht

Deze aliassen zijn gedefinieerd in `lua.aliases.sh` en worden automatisch geladen door chezmoi. Ze bieden snelle toegang tot verschillende Lua-interpreters die beschikbaar zijn op uw systeem.

## Referentie

| Alias        | Commando   | Beschrijving                             |
|--------------|------------|------------------------------------------|
| `lua-repl`   | `lua`      | Start de standaard Lua REPL              |
| `luajit-repl`| `luajit`   | Start de LuaJIT REPL (snellere JIT)      |
| `lua51`      | `lua5.1`   | Start de Lua 5.1 interpreter             |

## Opmerkingen

- Elke alias is alleen beschikbaar als de bijbehorende interpreter op uw systeem is geïnstalleerd.
- LuaJIT biedt een snellere, JIT-gecompileerde Lua-omgeving die compatibel is met Lua 5.1.
- Gebruik `lua51` wanneer u specifiek Lua 5.1-compatibiliteit nodig heeft.
