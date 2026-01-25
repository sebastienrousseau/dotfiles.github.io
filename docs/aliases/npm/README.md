---
title: "NPM Aliases: Streamline Your Node Package Management"
description: "Speed up npm workflows with intuitive shell aliases for install, build, test, and publish commands."
lang: en-GB
metaTitle: "NPM Aliases | Dotfiles"
permalink: /aliases/npm/
sidebar: true
meta:
  - name: keywords
    content: npm aliases, node package manager, npm shortcuts, shell aliases, dotfiles, npm commands
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: NPM Aliases | Dotfiles
  - name: twitter:description
    content: Speed up npm workflows with intuitive shell aliases for install, build, test, and publish commands.
  - name: og:title
    content: NPM Aliases | Dotfiles
  - name: og:description
    content: Speed up npm workflows with intuitive shell aliases for install, build, test, and publish commands.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# NPM Aliases

Simplify your Node.js development with shorthand commands for the npm package manager.

![Dotfiles banner][banner]

## Overview

These aliases are defined in `npm.aliases.sh` and are automatically loaded by chezmoi. They provide quick access to common npm operations.

## Reference

### Package Management

| Alias | Command | Description |
|-------|---------|-------------|
| `npi` | `npm install` | Install npm package |
| `npg` | `npm install -g` | Global npm package |
| `nprm` | `npm uninstall` | Remove npm package |
| `npu` | `npm update` | Update npm package |
| `npl` | `npm list` | List npm packages |
| `npc` | `npm cache` | Cache npm package |

### Scripts

| Alias | Command | Description |
|-------|---------|-------------|
| `npr` | `npm run` | Run npm script |
| `nps` | `npm start` | Start npm script |
| `npb` | `npm run build` | Build npm script |
| `npd` | `npm run dev` | Dev npm script |
| `npt` | `npm test` | Test npm script |
| `nprw` | `npm run watch` | Run npm script watch |
| `npsv` | `npm run serve` | Serve npm script |

### Publishing and Analysis

| Alias | Command | Description |
|-------|---------|-------------|
| `npp` | `npm publish` | Publish npm package |
| `npa` | `npm audit` | Audit npm packages |
| `npx` | `npm exec` | Exec npm package |
| `npy` | `npm why` | Why npm package |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
