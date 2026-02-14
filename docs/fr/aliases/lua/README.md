---
title: "Alias Lua : Accès rapide aux interpréteurs Lua REPL"
description: "Alias shell pour le développement Lua. Lancez Lua, LuaJIT et Lua 5.1 REPL avec des raccourcis simples."
lang: fr-FR
metaTitle: "Alias Lua | Dotfiles"
permalink: /fr/aliases/lua/
sidebar: true
meta:
  - name: keywords
    content: "alias lua, lua repl, luajit, raccourcis shell lua, dotfiles, développement lua"
---

# Alias Lua

Accès rapide aux interpréteurs Lua REPL avec des raccourcis shell intuitifs.

![Dotfiles banner](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Dotfiles banner")

## Aperçu

Ces alias sont définis dans `lua.aliases.sh` et chargés automatiquement par chezmoi. Ils offrent un accès rapide aux différents interpréteurs Lua disponibles sur votre système.

## Référence

| Alias        | Commande   | Description                              |
|--------------|------------|------------------------------------------|
| `lua-repl`   | `lua`      | Lancer le REPL Lua standard              |
| `luajit-repl`| `luajit`   | Lancer le REPL LuaJIT (JIT plus rapide)  |
| `lua51`      | `lua5.1`   | Lancer l'interpréteur Lua 5.1            |

## Notes

- Chaque alias n'est disponible que si l'interpréteur correspondant est installé sur votre système.
- LuaJIT fournit un environnement Lua compilé JIT plus rapide, compatible avec Lua 5.1.
- Utilisez `lua51` lorsque vous avez besoin de la compatibilité Lua 5.1.
