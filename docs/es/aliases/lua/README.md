---
title: "Alias Lua: Acceso rápido a intérpretes Lua REPL"
description: "Alias shell para desarrollo Lua. Lanza Lua, LuaJIT y Lua 5.1 REPL con atajos simples."
lang: es-ES
metaTitle: "Alias Lua | Dotfiles"
permalink: /es/aliases/lua/
sidebar: true
meta:
  - name: keywords
    content: "alias lua, lua repl, luajit, atajos shell lua, dotfiles, desarrollo lua"
---

# Alias Lua

Acceso rápido a intérpretes Lua REPL con atajos de shell intuitivos.

![Dotfiles banner](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Dotfiles banner")

## Descubrir

Estos alias se definen en `lua.aliases.sh` y se cargan automáticamente por chezmoi. Ofrecen acceso rápido a varios intérpretes Lua disponibles en tu sistema.

## Referencia

| Alias        | Comando    | Descripción                              |
|--------------|------------|------------------------------------------|
| `lua-repl`   | `lua`      | Lanzar el REPL Lua estándar              |
| `luajit-repl`| `luajit`   | Lanzar el REPL LuaJIT (JIT más rápido)   |
| `lua51`      | `lua5.1`   | Lanzar el intérprete Lua 5.1             |

## Notas

- Cada alias solo está disponible si el intérprete correspondiente está instalado en tu sistema.
- LuaJIT proporciona un entorno Lua compilado JIT más rápido, compatible con Lua 5.1.
- Usa `lua51` cuando necesites específicamente compatibilidad con Lua 5.1.
