---
title: "Alias Lua: Accesso rapido agli interpreti Lua REPL"
description: "Alias shell per lo sviluppo Lua. Avvia Lua, LuaJIT e Lua 5.1 REPL con semplici scorciatoie."
lang: it-IT
metaTitle: "Alias Lua | Dotfiles"
permalink: /it/aliases/lua/
sidebar: true
meta:
  - name: keywords
    content: "alias lua, lua repl, luajit, scorciatoie shell lua, dotfiles, sviluppo lua"
---

# Alias Lua

Accesso rapido agli interpreti Lua REPL con scorciatoie shell intuitive.

![Dotfiles banner](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Dotfiles banner")

## Panoramica

Questi alias sono definiti in `lua.aliases.sh` e caricati automaticamente da chezmoi. Forniscono accesso rapido ai vari interpreti Lua disponibili sul tuo sistema.

## Riferimento

| Alias        | Comando    | Descrizione                              |
|--------------|------------|------------------------------------------|
| `lua-repl`   | `lua`      | Avvia il REPL Lua standard               |
| `luajit-repl`| `luajit`   | Avvia il REPL LuaJIT (JIT più veloce)    |
| `lua51`      | `lua5.1`   | Avvia l'interprete Lua 5.1               |

## Note

- Ogni alias è disponibile solo se l'interprete corrispondente è installato sul tuo sistema.
- LuaJIT fornisce un ambiente Lua compilato JIT più veloce, compatibile con Lua 5.1.
- Usa `lua51` quando hai bisogno specificamente della compatibilità Lua 5.1.
