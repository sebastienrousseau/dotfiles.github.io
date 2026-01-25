---
title: "Make Aliases: Streamline Your Build Workflow"
description: "Shortcut aliases for Make commands. Simplify builds, tests, and project automation."
lang: en-GB
metaTitle: Make Aliases | Dotfiles
permalink: /aliases/make/
sidebar: true
meta:
  - name: keywords
    content: make aliases, makefile shortcuts, build automation, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Make Aliases | Dotfiles
  - name: twitter:description
    content: Shortcut aliases for Make commands. Simplify builds, tests, and project automation.
  - name: og:title
    content: Make Aliases | Dotfiles
  - name: og:description
    content: Shortcut aliases for Make commands. Simplify builds, tests, and project automation.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Make Aliases

Simplify your build workflow with shorthand commands for Make.

![Dotfiles banner][banner]

## Overview

These aliases provide quick access to common Make targets. Defined in `make.aliases.sh` and automatically loaded by chezmoi as part of the Universal Dotfiles configuration.

## Reference

| Alias | Command | Description |
|-------|---------|-------------|
| `mk` | `make` | Run default Make target |
| `mka` | `make all` | Build all targets |
| `mkc` | `make clean` | Clean build artifacts |
| `mkd` | `make doc` | Generate documentation |
| `mkf` | `make format` | Format source files |
| `mkh` | `make help` | Display help information |
| `mki` | `make install` | Install the project |
| `mkr` | `make run` | Run the project |
| `mkt` | `make test` | Run tests |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
