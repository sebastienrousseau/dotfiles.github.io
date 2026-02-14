---
title: "Lua 별칭: Lua REPL 인터프리터 빠른 액세스"
description: "Lua 개발을 위한 셸 별칭. 간단한 단축키로 Lua, LuaJIT 및 Lua 5.1 REPL을 실행하세요."
lang: ko-KR
metaTitle: "Lua 별칭 | Dotfiles"
permalink: /ko/alias/lua/
sidebar: true
meta:
  - name: keywords
    content: "lua 별칭, lua repl, luajit, lua 셸 단축키, dotfiles, lua 개발"
---

# Lua 별칭

직관적인 셸 단축키로 Lua REPL 인터프리터에 빠르게 액세스하세요.

![Dotfiles banner](https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg "Dotfiles banner")

## 개요

이 별칭들은 `lua.aliases.sh`에 정의되어 있으며 chezmoi에 의해 자동으로 로드됩니다. 시스템에서 사용 가능한 다양한 Lua 인터프리터에 빠르게 액세스할 수 있습니다.

## 참조

| 별칭         | 명령어     | 설명                                     |
|--------------|------------|------------------------------------------|
| `lua-repl`   | `lua`      | 표준 Lua REPL 실행                       |
| `luajit-repl`| `luajit`   | LuaJIT REPL 실행 (더 빠른 JIT)           |
| `lua51`      | `lua5.1`   | Lua 5.1 인터프리터 실행                  |

## 참고사항

- 각 별칭은 해당 인터프리터가 시스템에 설치된 경우에만 사용할 수 있습니다.
- LuaJIT는 Lua 5.1과 호환되는 더 빠른 JIT 컴파일 Lua 환경을 제공합니다.
- Lua 5.1 호환성이 특별히 필요한 경우 `lua51`을 사용하세요.
