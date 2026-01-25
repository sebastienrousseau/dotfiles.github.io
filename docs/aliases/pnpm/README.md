---
title: "Pnpm Aliases: Fast Package Management Shortcuts"
description: "Streamline pnpm workflows with aliases for installing, building, testing, and managing Node.js dependencies."
lang: en-GB
metaTitle: "Pnpm Aliases | Dotfiles"
permalink: /aliases/pnpm/
sidebar: true
meta:
  - name: keywords
    content: "pnpm aliases, package manager, node.js, npm alternative, dotfiles, shell"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: "Pnpm Aliases | Dotfiles"
  - name: twitter:description
    content: "Streamline pnpm workflows with aliases for installing, building, testing, and managing Node.js dependencies."
  - name: og:title
    content: "Pnpm Aliases | Dotfiles"
  - name: og:description
    content: "Streamline pnpm workflows with aliases for installing, building, testing, and managing Node.js dependencies."
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Pnpm Aliases

Shortcuts for the fast, disk-efficient package manager.

![Dotfiles banner][banner]

## Overview

These aliases are defined in `pnpm.aliases.sh` and are automatically loaded by chezmoi. They provide quick access to common [pnpm](https://pnpm.io/) commands for Node.js package management.

## Reference

### Project Initialisation

| Alias | Description |
|-------|-------------|
| `pni` | Initialise a new project |
| `pnc` | Create a new project |
| `pnin` | Install project dependencies |
| `pnun` | Uninstall project dependencies |

### Development

| Alias | Description |
|-------|-------------|
| `pnb` | Build the project |
| `pnrun` | Run a script from the project |
| `pnd` | Run the project in dev mode |
| `pns` | Run the project in serve mode |
| `pnst` | Start the project |
| `pnsv` | Run the project in server mode |

### Testing and Quality

| Alias | Description |
|-------|-------------|
| `pnt` | Test the project |
| `pntc` | Test the project with coverage |
| `pnln` | Lint the project |
| `pndoc` | Generate project documentation |

### Dependency Management

| Alias | Description |
|-------|-------------|
| `pnls` | List all dependencies |
| `pnout` | Check for outdated dependencies |
| `pnwhy` | Check why a dependency is installed |
| `pnad` | Add a dev dependency |
| `pnap` | Add a peer dependency |
| `pnrm` | Remove a dependency |
| `pnup` | Update a dependency |
| `pnui` | Update a dependency interactively |
| `pnuil` | Update a dependency interactively to latest |

### Global Packages

| Alias | Description |
|-------|-------------|
| `pnga` | Add a global dependency |
| `pngls` | List all global dependencies |
| `pngrm` | Remove a global dependency |
| `pngu` | Update a global dependency |

### Publishing and Utilities

| Alias | Description |
|-------|-------------|
| `pnpub` | Publish the project |
| `pnx` | Shortcut to pnpx |
| `pnh` | Show help |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
