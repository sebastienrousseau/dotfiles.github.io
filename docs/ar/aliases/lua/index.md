---
title: "اختصارات Lua: الوصول السريع لمفسرات Lua REPL"
description: اختصارات الصدفة لتطوير Lua. قم بتشغيل Lua و LuaJIT و Lua 5.1 REPL باختصارات بسيطة. متوافق مع macOS وLinux وWSL عبر Dotfiles.
lang: ar
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: "اختصارات Lua: الوصول السريع لمفسرات Lua REPL preview"
canonical: /ar/aliases/lua/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "اختصارات Lua: الوصول السريع لمفسرات Lua REPL"
pageType: docs
schemaType: WebPage
metaTitle: اختصارات Lua | Dotfiles
permalink: /ar/aliases/lua/
sidebar: true
meta:
  - name: keywords
    content: اختصارات lua, lua repl, luajit, اختصارات صدفة lua, dotfiles, تطوير lua
---

# اختصارات Lua

الوصول السريع لمفسرات Lua REPL باختصارات صدفة بديهية.

![Dotfiles banner](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Dotfiles banner")

## نظرة عامة

هذه الاختصارات معرّفة في `lua.aliases.sh` ويتم تحميلها تلقائياً بواسطة chezmoi. توفر وصولاً سريعاً لمفسرات Lua المختلفة المتوفرة على نظامك.

## المرجع

| الاختصار     | الأمر      | الوصف                                    |
|--------------|------------|------------------------------------------|
| `lua-repl`   | `lua`      | تشغيل Lua REPL القياسي                   |
| `luajit-repl`| `luajit`   | تشغيل LuaJIT REPL (JIT أسرع)             |
| `lua51`      | `lua5.1`   | تشغيل مفسر Lua 5.1                       |

## ملاحظات

- كل اختصار متاح فقط إذا كان المفسر المقابل مثبتاً على نظامك.
- يوفر LuaJIT بيئة Lua مترجمة بـ JIT أسرع، متوافقة مع Lua 5.1.
- استخدم `lua51` عندما تحتاج تحديداً إلى توافق Lua 5.1.
