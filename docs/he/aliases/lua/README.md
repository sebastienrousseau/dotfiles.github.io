---
title: "קיצורי Lua: גישה מהירה למפרשי Lua REPL"
description: "קיצורי מעטפת לפיתוח Lua. הפעל Lua, LuaJIT ו-Lua 5.1 REPL עם קיצורים פשוטים."
lang: he
metaTitle: "קיצורי Lua | Dotfiles"
permalink: /he/aliases/lua/
sidebar: true
meta:
  - name: keywords
    content: "קיצורי lua, lua repl, luajit, קיצורי מעטפת lua, dotfiles, פיתוח lua"
---

# קיצורי Lua

גישה מהירה למפרשי Lua REPL עם קיצורי מעטפת אינטואיטיביים.

![Dotfiles banner](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Dotfiles banner")

## סקירה כללית

קיצורים אלה מוגדרים ב-`lua.aliases.sh` ונטענים אוטומטית על ידי chezmoi. הם מספקים גישה מהירה למפרשי Lua שונים הזמינים במערכת שלך.

## מדריך

| קיצור        | פקודה      | תיאור                                    |
|--------------|------------|------------------------------------------|
| `lua-repl`   | `lua`      | הפעל את Lua REPL הסטנדרטי                |
| `luajit-repl`| `luajit`   | הפעל את LuaJIT REPL (JIT מהיר יותר)      |
| `lua51`      | `lua5.1`   | הפעל את מפרש Lua 5.1                     |

## הערות

- כל קיצור זמין רק אם המפרש המתאים מותקן במערכת שלך.
- LuaJIT מספק סביבת Lua מהודרת JIT מהירה יותר, תואמת ל-Lua 5.1.
- השתמש ב-`lua51` כאשר אתה צריך במיוחד תאימות ל-Lua 5.1.
