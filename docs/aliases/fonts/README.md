---
title: "Font Aliases: Manage System Fonts"
description: "Shell aliases for managing system fonts and caches. Update font cache and list installed font families with simple commands."
lang: en-GB
metaTitle: "Font Aliases | Dotfiles"
permalink: /aliases/fonts/
sidebar: true
meta:
  - name: keywords
    content: "font aliases, font cache, fc-cache, list fonts, dotfiles, shell"
---

# Font Aliases

Shell aliases for managing system fonts and caches.

## Overview

Font aliases provide convenient shortcuts for common font management tasks. These commands simplify updating the font cache after installing new fonts and listing all available font families on your system.

## Reference

### Commands

| Alias | Command | Description |
|-------|---------|-------------|
| `update-fonts` | `fc-cache -fv` | Updates the system font cache |
| `list-fonts` | — | Lists all installed font families |

### Installed Fonts

The following fonts are configured by default:

| Font | Purpose |
|------|---------|
| JetBrainsMono Nerd Font | Primary terminal font |
| Symbols Nerd Font | Icon fallback |
