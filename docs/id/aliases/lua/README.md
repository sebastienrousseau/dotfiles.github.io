---
title: "Alias Lua: Akses Cepat ke Interpreter Lua REPL"
description: "Alias shell untuk pengembangan Lua. Jalankan Lua, LuaJIT, dan Lua 5.1 REPL dengan pintasan sederhana."
lang: id
metaTitle: "Alias Lua | Dotfiles"
permalink: /id/aliases/lua/
sidebar: true
meta:
  - name: keywords
    content: "alias lua, lua repl, luajit, pintasan shell lua, dotfiles, pengembangan lua"
---

# Alias Lua

Akses cepat ke interpreter Lua REPL dengan pintasan shell yang intuitif.

![Dotfiles banner](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Dotfiles banner")

## Ikhtisar

Alias ini didefinisikan dalam `lua.aliases.sh` dan dimuat secara otomatis oleh chezmoi. Mereka menyediakan akses cepat ke berbagai interpreter Lua yang tersedia di sistem Anda.

## Referensi

| Alias        | Perintah   | Deskripsi                                |
|--------------|------------|------------------------------------------|
| `lua-repl`   | `lua`      | Jalankan Lua REPL standar                |
| `luajit-repl`| `luajit`   | Jalankan LuaJIT REPL (JIT lebih cepat)   |
| `lua51`      | `lua5.1`   | Jalankan interpreter Lua 5.1             |

## Catatan

- Setiap alias hanya tersedia jika interpreter yang sesuai terinstal di sistem Anda.
- LuaJIT menyediakan lingkungan Lua yang dikompilasi JIT lebih cepat, kompatibel dengan Lua 5.1.
- Gunakan `lua51` ketika Anda secara khusus memerlukan kompatibilitas Lua 5.1.
