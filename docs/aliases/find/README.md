---
title: "Find Aliases: Fast File Search Commands"
description: "Streamline file searches with fd-based aliases. Fast, colorized output and intuitive commands for Unix systems."
lang: en-GB
metaTitle: "Find Aliases | Dotfiles"
permalink: /aliases/find/
sidebar: true
meta:
  - name: keywords
    content: "find aliases, fd command, file search, shell aliases, dotfiles, unix find"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Find Aliases | Dotfiles
  - name: twitter:description
    content: Streamline file searches with fd-based aliases. Fast, colorized output and intuitive commands for Unix systems.
  - name: og:title
    content: Find Aliases | Dotfiles
  - name: og:description
    content: Streamline file searches with fd-based aliases. Fast, colorized output and intuitive commands for Unix systems.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Find Aliases

Powerful file search shortcuts using fd, the modern alternative to find.

![Dotfiles banner][banner]

## Overview

These aliases provide a streamlined interface to `fd`, a fast and user-friendly alternative to the traditional `find` command. Defined in `find.aliases.sh`, they are automatically loaded by chezmoi and offer colorized output, intuitive syntax, and memorable commands for common file search operations.

When `fd` is available on your system, the `find` command is automatically aliased to use `fd` instead, giving you improved performance and a simpler syntax by default.

## Reference

### Core Commands

| Alias | Command | Description |
|-------|---------|-------------|
| `fd` | `fd --color always` | Search files with colorized output |
| `find` | `fd` | Use fd as the default find replacement |

### Search Options

| Alias | Command | Description |
|-------|---------|-------------|
| `fda` | `fd --absolute-path` | Display results with absolute paths |
| `fdc` | `fd --ignore-case` | Perform case-insensitive search |
| `fdd` | `fd --list-details` | Show detailed file information |
| `fde` | `fd --extension` | Filter by file extension |
| `fdf` | `fd --follow` | Follow symbolic links during search |
| `fdh` | `fd --hidden` | Include hidden files in results |
| `fdn` | `fd --glob` | Match files using glob patterns |
| `fdo` | `fd --owner` | Filter by file owner |
| `fds` | `fd --size` | Filter by file size |
| `fdu` | `fd --exclude` | Exclude files matching a pattern |
| `fdx` | `fd --exec` | Execute a command for each result |

### Utility Commands

| Alias | Command | Description |
|-------|---------|-------------|
| `fdv` | `fd --version` | Display fd version information |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
