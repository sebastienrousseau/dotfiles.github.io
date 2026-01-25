---
description: Directory navigation aliases with bookmarks, history tracking, and smart shortcuts. Navigate your filesystem faster.
lang: en-GB
metaTitle: CD Aliases - Dotfiles (UK)
permalink: /aliases/cd/
sidebar: true

meta:
  - name: keywords
    content: cd, directory, navigation, bookmarks, shell aliases, dotfiles, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Directory navigation aliases with bookmarks, history tracking, and smart shortcuts. Navigate your filesystem faster.
  - name: twitter:title
    content: CD Aliases - Dotfiles
  - name: og:title
    content: CD Aliases - Dotfiles
  - name: og:description
    content: Directory navigation aliases with bookmarks, history tracking, and smart shortcuts. Navigate your filesystem faster.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# CD Aliases

Navigate your filesystem faster. Bookmarks, history, and smart shortcuts.

## Overview

These aliases are defined in `cd.aliases.sh` and loaded automatically by Chezmoi.

## Reference

### Navigation shortcuts

| Alias | Description |
|:---|:---|
| `-` | Switch to previous directory |
| `..` | Go up one level |
| `...` | Go up two levels |
| `....` | Go up three levels |
| `.....` | Go up four levels |
| `hom` | Navigate to home directory |

### Directory shortcuts

| Alias | Path | Description |
|:---|:---|:---|
| `app` | `~/Applications` | Applications |
| `cod` | `~/Code` | Code directory |
| `dsk` | `~/Desktop` | Desktop |
| `doc` | `~/Documents` | Documents |
| `dot` | `~/.dotfiles` | Dotfiles |
| `dwn` | `~/Downloads` | Downloads |
| `mus` | `~/Music` | Music |
| `pic` | `~/Pictures` | Pictures |
| `vid` | `~/Videos` | Videos |

### System directories

| Alias | Path | Description |
|:---|:---|:---|
| `etc` | `/etc` | System configuration |
| `var` | `/var` | Variable files |
| `tmp` | `/tmp` | Temporary files |
| `usr` | `/usr` | User programs |

### Bookmarks

| Command | Alias | Description |
|:---|:---|:---|
| `bookmark [name]` | `bm` | Create bookmark |
| `bookmark_list` | `bml` | List bookmarks |
| `bookmark_update` | `bmu` | Update bookmark |
| `bookmark_remove` | `bmr` | Delete bookmark |
| `goto <name>` | `bmg` | Go to bookmark |

```bash
bm work-project      # Create bookmark
bmg work-project     # Navigate to bookmark
bml                  # List all bookmarks
```

### History

| Command | Alias | Description |
|:---|:---|:---|
| `dirhistory` | `dh` | Show directory history |
| `lwd` | `ld` | Return to last directory |

### Advanced

| Command | Alias | Description |
|:---|:---|:---|
| `mkcd <dir>` | `mcd` | Create and enter directory |
| `proj` | `pr` | Go to project root |
| `pushd` | `pd` | Push directory to stack |
| `popd` | — | Pop from stack |
| `dirs` | — | List directory stack |

## Configuration

Customise behaviour with environment variables:

```bash
export SHOW_HIDDEN_FILES=true
export ENABLE_COLOR_OUTPUT=true
export AUTO_LIST_AFTER_CD=true
export MAX_RECENT_DIRS=15
export RESTORE_LAST_DIR=true
```

## Help

Run `cdhelp` to view all commands or `cdversion` for version info.
