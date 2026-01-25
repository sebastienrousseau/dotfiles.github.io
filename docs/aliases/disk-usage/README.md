---
title: "Disk Usage Aliases: Monitor Storage with Shell Commands"
description: "Shell aliases for disk usage monitoring. Display file sizes, find large directories, and manage storage efficiently."
lang: en-GB
metaTitle: Disk Usage Aliases | Dotfiles
permalink: /aliases/disk-usage/
sidebar: true
meta:
  - name: keywords
    content: disk usage aliases, du command, storage monitoring, file size, dotfiles, shell, bash, zsh
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Shell aliases for disk usage monitoring. Display file sizes, find large directories, and manage storage efficiently.
  - name: twitter:title
    content: Disk Usage Aliases | Dotfiles
  - name: og:title
    content: Disk Usage Aliases | Dotfiles
  - name: og:description
    content: Shell aliases for disk usage monitoring. Display file sizes, find large directories, and manage storage efficiently.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Disk Usage Aliases

Quickly monitor and analyse storage consumption across your filesystem.

## Overview

The disk usage aliases provide streamlined commands for monitoring storage consumption on Unix-based systems. Defined in `disk-usage.aliases.sh`, these shortcuts simplify common `du` operations and are automatically loaded by chezmoi as part of the Dotfiles configuration.

## Reference

The following table lists all available disk usage aliases and their functions.

| Alias | Description |
|-------|-------------|
| `du` | Display the disk usage of the current directory |
| `du1` | Show file size of files and directories in the current directory |
| `duh` | Show file size of files and directories in human-readable format |
| `ducks` | Display the top 10 largest files and directories in the current directory |
| `dus` | Show file size in human-readable format, sorted by size |
| `dusym` | Show file size of files and directories, including symlinks |
| `dut` | Show the total file size of the current directory |
