---
title: "macOS Aliases: Shell Shortcuts for Mac"
description: "Shell aliases for macOS system management, Finder control, and maintenance tasks in Dotfiles."
lang: en-GB
metaTitle: "macOS Aliases | Dotfiles"
permalink: /aliases/macOS/
sidebar: true
meta:
  - name: keywords
    content: "macOS aliases, shell shortcuts, Finder aliases, Mac terminal, dotfiles"
---

# macOS Aliases

Shell shortcuts for macOS system management and maintenance.

## Overview

These aliases are defined in `macOS.aliases.sh` and are automatically loaded by chezmoi. They provide quick access to common macOS operations including Finder control, system maintenance, and developer tools.

## Reference

### System Management

| Alias | Description |
|-------|-------------|
| `lockScreen` | Lock the screen |
| `wifiOn` | Turn on Wi-Fi |
| `wifiOff` | Turn off Wi-Fi |
| `vp` | Verify macOS Permissions |
| `vv` | Verify macOS Volume |

### Finder

| Alias | Description |
|-------|-------------|
| `ofd` | Open the current directory in Finder |
| `finderShowHidden` | Show hidden files in Finder |
| `finderHideHidden` | Hide hidden files in Finder |
| `showDesktopIcons` | Show all icons on the Desktop |
| `hideDesktopIcons` | Hide all icons on the Desktop |

### Cleanup

| Alias | Description |
|-------|-------------|
| `clds` | Recursively delete .DS_Store files |
| `clls` | Clean up LaunchServices to remove duplicates in the Open With menu |
| `trash` | Empty the Trash on all mounted volumes and the main HDD |

### Developer Tools

| Alias | Description |
|-------|-------------|
| `xcode` | Launch Xcode |
| `purge` | Purge Xcode DerivedData |
| `iphone` | Open device simulators |
| `safariSafeMode` | Launch Safari in Safe Mode |

### Display

| Alias | Description |
|-------|-------------|
| `screensaverDesktop` | Run a screensaver on the Desktop |
