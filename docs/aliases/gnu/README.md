---
title: "GNU Coreutils Aliases: Shell Shortcuts for Linux"
description: "Streamline your workflow with GNU Coreutils aliases for file management, text processing, and checksum utilities."
lang: en-GB
metaTitle: "GNU Coreutils Aliases | Dotfiles"
permalink: /aliases/gnu/
sidebar: true
meta:
  - name: keywords
    content: gnu coreutils, shell aliases, linux utilities, file management, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: GNU Coreutils Aliases | Dotfiles
  - name: twitter:description
    content: Streamline your workflow with GNU Coreutils aliases for file management, text processing, and checksum utilities.
  - name: og:title
    content: GNU Coreutils Aliases | Dotfiles
  - name: og:description
    content: Streamline your workflow with GNU Coreutils aliases for file management, text processing, and checksum utilities.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# GNU Coreutils Aliases

Shortcuts to essential Unix utilities for faster command-line workflows.

![Dotfiles banner][banner]

## Overview

GNU Coreutils aliases provide shorthand commands for standard Unix utilities. Defined in `gnu.aliases.sh` and loaded automatically by chezmoi, these aliases simplify file operations, text processing, and data verification tasks.

## Reference

### File Management

| Alias | Description |
|-------|-------------|
| `basename` | Strip directory and suffix from filenames |
| `cp` | Copy files and directories |
| `dirname` | Strip non-directory suffix from filenames |
| `ln` | Create links between files |
| `loname` | Print the name of the link |
| `ls` | List directory contents |
| `mkdir` | Create directories |
| `mkfifo` | Make named pipes (FIFOs) |
| `mknod` | Make block or character special files |
| `mv` | Move or rename files or directories |
| `pathchk` | Check file name validity and portability |
| `pwd` | Print working directory name |
| `readlink` | Print resolved symbolic links or canonical file names |
| `realpath` | Print the resolved physical path |
| `rm` | Remove files or directories |
| `rmdir` | Remove empty directories |
| `unlink` | Remove files or directories |

### Text Processing

| Alias | Description |
|-------|-------------|
| `awk` | Pattern scanning and processing language |
| `cat` | Concatenate and display files |
| `csplit` | Split a file into context-determined pieces |
| `cut` | Remove sections from each line of files |
| `diff` | Compare files line by line |
| `fold` | Wrap each input line to fit in specified width |
| `grep` | Print lines matching a pattern |
| `head` | Output the first part of files |
| `nl` | Number lines of files |
| `paste` | Merge lines of files |
| `patch` | Apply a diff file to an original |
| `ptx` | Produce a permuted index of file contents |
| `sed` | Stream editor for filtering and transforming text |
| `sort` | Sort lines of text files |
| `split` | Split a file into pieces |
| `tail` | Output the last part of files |
| `tr` | Translate or delete characters |

### Checksum Utilities

| Alias | Description |
|-------|-------------|
| `b2sum` | Print or check BLAKE2 message digests |
| `cksum` | Print CRC checksum and byte counts |
| `sha1sum` | Print or check SHA1 message digests |
| `sha224sum` | Print or check SHA224 message digests |
| `sha256sum` | Print or check SHA256 message digests |
| `sha384sum` | Print or check SHA384 message digests |
| `sha512sum` | Print or check SHA512 message digests |

### Encoding Utilities

| Alias | Description |
|-------|-------------|
| `base32` | Print or convert base32 data |
| `base64` | Encode or decode base64 data |
| `basenc` | Encode or decode data in various formats |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
