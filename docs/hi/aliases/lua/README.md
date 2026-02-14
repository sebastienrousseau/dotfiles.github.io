---
title: "Lua उपनाम: Lua REPL इंटरप्रेटर तक त्वरित पहुँच"
description: "Lua विकास के लिए शेल उपनाम। सरल शॉर्टकट के साथ Lua, LuaJIT और Lua 5.1 REPL लॉन्च करें।"
lang: hi
metaTitle: "Lua उपनाम | Dotfiles"
permalink: /hi/aliases/lua/
sidebar: true
meta:
  - name: keywords
    content: "lua उपनाम, lua repl, luajit, lua शेल शॉर्टकट, dotfiles, lua विकास"
---

# Lua उपनाम

सहज शेल शॉर्टकट के साथ Lua REPL इंटरप्रेटर तक त्वरित पहुँच।

![Dotfiles banner](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Dotfiles banner")

## अवलोकन

ये उपनाम `lua.aliases.sh` में परिभाषित हैं और chezmoi द्वारा स्वचालित रूप से लोड किए जाते हैं। वे आपके सिस्टम पर उपलब्ध विभिन्न Lua इंटरप्रेटर तक त्वरित पहुँच प्रदान करते हैं।

## संदर्भ

| उपनाम        | कमांड      | विवरण                                    |
|--------------|------------|------------------------------------------|
| `lua-repl`   | `lua`      | मानक Lua REPL लॉन्च करें                 |
| `luajit-repl`| `luajit`   | LuaJIT REPL लॉन्च करें (तेज़ JIT)        |
| `lua51`      | `lua5.1`   | Lua 5.1 इंटरप्रेटर लॉन्च करें            |

## नोट्स

- प्रत्येक उपनाम केवल तभी उपलब्ध है जब संबंधित इंटरप्रेटर आपके सिस्टम पर स्थापित हो।
- LuaJIT एक तेज़, JIT-संकलित Lua वातावरण प्रदान करता है जो Lua 5.1 के साथ संगत है।
- जब आपको विशेष रूप से Lua 5.1 संगतता की आवश्यकता हो तो `lua51` का उपयोग करें।
