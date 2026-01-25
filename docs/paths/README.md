---
description: How Dotfiles manages your PATH hierarchy to ensure the right tools are loaded in the right order.
lang: en-GB
metaTitle: Paths - Dotfiles (UK)
permalink: /paths/

meta:
  - name: keywords
    content: path, environment, variables, hierarchy, dotfiles, chezmoi, shell, configuration
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: How Dotfiles manages your PATH hierarchy to ensure the right tools are loaded in the right order.
  - name: twitter:title
    content: Paths - Dotfiles
  - name: og:title
    content: Paths - Dotfiles
  - name: og:description
    content: How Dotfiles manages your PATH hierarchy to ensure the right tools are loaded in the right order.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Paths

Modular `PATH` management. Ensure the right tools load in the right order.

## Discover

Path configurations are split into priority-based files. During `chezmoi apply`:

1. Files in this directory are scanned alphabetically
2. Content is aggregated into `~/.config/shell/paths.sh`
3. Sourced by `.zshrc` at startup

## Reference

| Script | Description |
|:---|:---|
| `00-default.paths.sh` | Base system paths (`/usr/bin`, `/sbin`) and Homebrew. Loaded first. |
| `99-custom.paths.sh` | Custom user paths (language SDKs, local bins). Loaded last for precedence. |

## Get started

### Add a user path

1. Edit `99-custom.paths.sh` or create a new file (e.g., `50-myproject.paths.sh`)
2. Add your path:
   ```bash
   export PATH="$PATH:/path/to/dir"
   ```
3. Apply changes:
   ```bash
   chezmoi apply
   ```
4. Verify:
   ```bash
   echo $PATH
   ```
