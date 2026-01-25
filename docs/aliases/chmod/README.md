---
title: "Chmod Aliases: File Permission Shortcuts for Shell"
description: "Simplify file and directory permission management with chmod aliases. Quick shortcuts for common permission patterns like 755, 644, and more."
lang: en-GB
metaTitle: "Chmod Aliases | Dotfiles"
permalink: /aliases/chmod/
sidebar: true
meta:
  - name: keywords
    content: "chmod aliases, file permissions, shell shortcuts, dotfiles, unix permissions"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Chmod Aliases | Dotfiles
  - name: twitter:description
    content: Simplify file and directory permission management with chmod aliases.
  - name: og:title
    content: Chmod Aliases | Dotfiles
  - name: og:description
    content: Simplify file and directory permission management with chmod aliases.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Chmod Aliases

Shortcuts for managing file and directory permissions.

![Dotfiles banner][banner]

## Overview

The chmod aliases provide a streamlined way to manage file and directory permissions from the command line. Instead of remembering numeric permission codes, use intuitive aliases like `chmod_755` or `chmod_u+x` to quickly set the access mode you need.

These aliases are defined in `chmod.aliases.sh` and are automatically loaded by chezmoi.

## Reference

### Common Permission Aliases

| Alias | Permissions | Description |
|-------|-------------|-------------|
| `chmod_000` | `----------` | No permissions for anyone |
| `chmod_400` | `r--------` | Read-only for the owner |
| `chmod_444` | `r--r--r--` | Read-only for everyone |
| `chmod_600` | `rw-------` | Read/write for the owner |
| `chmod_644` | `rw-r--r--` | Read/write for the owner, read-only for others |
| `chmod_666` | `rw-rw-rw-` | Read/write for everyone |
| `chmod_755` | `rwxr-xr-x` | Full owner, read/execute for others |
| `chmod_764` | `rwxrw-r--` | Full owner, read/write for the group |
| `chmod_777` | `rwxrwxrwx` | Full permissions for everyone |

### Owner Permission Aliases

| Alias | Description |
|-------|-------------|
| `chmod_u+x` | Add execute permission for the owner |
| `chmod_u-x` | Remove execute permission for the owner |
| `chmod_u+w` | Add write permission for the owner |
| `chmod_u-w` | Remove write permission for the owner |
| `chmod_u+r` | Add read permission for the owner |
| `chmod_u-r` | Remove read permission for the owner |

### Group Permission Aliases

| Alias | Description |
|-------|-------------|
| `chmod_g+x` | Add execute permission for the group |
| `chmod_g-x` | Remove execute permission for the group |
| `chmod_g+w` | Add write permission for the group |
| `chmod_g-w` | Remove write permission for the group |
| `chmod_g+r` | Add read permission for the group |
| `chmod_g-r` | Remove read permission for the group |

### Others Permission Aliases

| Alias | Description |
|-------|-------------|
| `chmod_o+x` | Add execute permission for others |
| `chmod_o-x` | Remove execute permission for others |
| `chmod_o+w` | Add write permission for others |
| `chmod_o-w` | Remove write permission for others |
| `chmod_o+r` | Add read permission for others |
| `chmod_o-r` | Remove read permission for others |

### File Type Aliases

| Alias | Description |
|-------|-------------|
| `chmod_755d` | Set permissions of all directories to `rwxr-xr-x` |
| `chmod_644f` | Set permissions of all files to `rw-r--r--` |

### Recursive Permission Function

The `change_permission` function applies permissions recursively with a confirmation prompt:

```bash
change_permission 755 /path/to/directory -R
```

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
