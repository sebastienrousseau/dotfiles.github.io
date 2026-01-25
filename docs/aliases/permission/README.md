---
title: "Permission Aliases: File Permission Shortcuts for Shell"
description: "Shell aliases for chmod, chown, and chgrp commands. Quickly set file permissions with numeric shortcuts like 755, 644, and 777."
lang: en-GB
metaTitle: "Permission Aliases | Dotfiles"
permalink: /aliases/permission/
sidebar: true
meta:
  - name: keywords
    content: "permission aliases, chmod shortcuts, file permissions, chown, chgrp, dotfiles, shell"
---

# Permission Aliases

Shortcuts for managing file and directory permissions in your shell environment.

## Overview

These aliases are defined in `permission.aliases.sh` and are automatically loaded by chezmoi. They provide quick access to common permission patterns and ownership commands.

## Reference

### Numeric Permission Shortcuts

| Alias | Description |
|-------|-------------|
| `000` | Set permissions to no read, write, or execute for user, group, and others |
| `400` | Set permissions to no read or write, but allow execute for user only |
| `444` | Set permissions to no write or execute, but allow read for all |
| `600` | Set permissions to read and write for user only |
| `644` | Set permissions to read for all, but write only for user |
| `666` | Set permissions to read and write for all |
| `755` | Set permissions to read, write, and execute for user, but only read and execute for group and others |
| `764` | Set permissions to read and write for user and group, but only read for others |
| `777` | Set permissions to read, write, and execute for all |

### File Mode Commands

| Alias | Description |
|-------|-------------|
| `chmod` | Change file mode bits |
| `chmodr` | Change file mode bits recursively |
| `chmodu` | Change file mode bits recursively to the current user |
| `chmox` | Make a file executable |

### Ownership Commands

| Alias | Description |
|-------|-------------|
| `chown` | Change file owner and group |
| `chownr` | Change file owner and group recursively |
| `chownu` | Change file owner and group recursively to the current user |
| `chgrp` | Change group ownership of files or directories |
| `chgrpr` | Change group ownership of files or directories recursively |
| `chgrpu` | Change group ownership of files or directories recursively to the current user |
