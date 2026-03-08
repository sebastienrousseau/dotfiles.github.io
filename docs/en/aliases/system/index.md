---
title: System Aliases | Dotfiles
description: Explore System aliases in Dotfiles v0.2.495. Short, memorable commands for system administration workflows on macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: System Aliases | Dotfiles preview
canonical: /en/aliases/system/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System Aliases
pageType: docs
schemaType: WebPage
permalink: /en/aliases/system/
---

# System Aliases

Short system commands.

This page introduces one alias group and its common command shortcuts.
Read it first to understand naming conventions, expected inputs, and safe execution patterns.
Then open the reference appendix for the complete command inventory and exact syntax.
These aliases reduce repeated typing and preserve consistent workflow behavior on macOS, Linux, and WSL.

## When to use

Use this page before daily shell work when you need predictable command patterns.

## What is included

- Aliases: 24
- Helper functions: 0
- Source files: 1

## Quick examples

- `h` → `history`
- `p` → `pwd`
- `path` → `echo -e ${PATH//:/\\n}`
- `ports` → `netstat -tulanp`
- `top` → `sudo btop`
- `now` → `date +"%T"`
- `nowdate` → `date +"%d-%m-%Y"`
- `wget` → `wget -c`
- `speedtest` → `curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python3 -`
- `ping` → `ping -c 5`
- `fastping` → `ping -c 100 -s 1`
- `localip` → `ipconfig getifaddr en0`

## Next step

Open the full list:

- [System Reference Appendix](./reference.md)
