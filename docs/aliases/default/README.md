---
title: "Default Aliases: Essential Shell Shortcuts"
description: "Essential shell aliases for navigation, system control, and daily tasks. Simplify your terminal workflow with these universal shortcuts."
lang: en-GB
metaTitle: "Default Aliases | Dotfiles"
permalink: /aliases/default/
sidebar: true
meta:
  - name: keywords
    content: "default aliases, shell aliases, terminal shortcuts, dotfiles, bash aliases"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Default Aliases | Dotfiles
  - name: twitter:description
    content: Essential shell aliases for navigation, system control, and daily tasks.
  - name: og:title
    content: Default Aliases | Dotfiles
  - name: og:description
    content: Essential shell aliases for navigation, system control, and daily tasks.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Default Aliases

Essential shell shortcuts for everyday terminal tasks.

![Dotfiles banner][banner]

## Overview

The default aliases provide a collection of universal shell shortcuts that streamline common terminal operations. These aliases are defined in `default.aliases.sh` and are automatically loaded by chezmoi across all supported shells.

These shortcuts cover general utilities, exit commands, network diagnostics, system monitoring, and file system navigation.

## Reference

### General

| Alias | Command | Description |
|-------|---------|-------------|
| `da` | `date "+%Y-%m-%d %A %T %Z"` | Display current date and time |
| `p` | `pwd` | Print working directory |
| `path` | `echo ${PATH//:/\\n}` | Display PATH variable on newlines |
| `r` | `reload` | Reload the shell |
| `t` | `tail -f` | Follow file output in real time |
| `wk` | `date +%V` | Show current week number |

### Exit and Shutdown

| Alias | Command | Description |
|-------|---------|-------------|
| `q` | `exit` | Exit the shell |
| `quit` | `exit` | Exit the shell |
| `bye` | `exit` | Exit the shell |
| `:q` | `exit` | Exit the shell (vim style) |
| `halt` | `sudo /sbin/halt` | Halt the system |
| `poweroff` | `sudo /sbin/shutdown` | Power off the system |
| `reboot` | `sudo /sbin/reboot` | Reboot the system |

### History

| Alias | Command | Description |
|-------|---------|-------------|
| `h` | `history` | View command history |
| `history` | `fc -il 1` | Show history with ISO 8601 timestamps |

### Network

| Alias | Command | Description |
|-------|---------|-------------|
| `ifconfig` | `sudo ifconfig` | Configure network interfaces |
| `ipinfo` | `ipconfig getpacket en0` | Get network parameters for en0 |
| `nls` | `sudo lsof -i -P \| grep LISTEN` | Show active network listeners |
| `op` | `sudo lsof -i -P` | List open ports |
| `ping` | `ping -c 5` | Ping with 5 packet limit |
| `ports` | `netstat -tulan` | List all listening ports |

### System Monitoring

| Alias | Command | Description |
|-------|---------|-------------|
| `top` | `sudo btop` | Interactive process monitor |
| `spd` | `sudo rm -rf /private/var/log/asl/*` | Clear ASL log files |

### Utilities

| Alias | Command | Description |
|-------|---------|-------------|
| `ctf` | `ls -1 \| wc -l` | Count files in current directory |
| `qfind` | `find . -name` | Quick file search |
| `reload` | `exec $SHELL -l` | Reload the shell |
| `wth` | `curl -s "wttr.in/?format=3"` | Get current weather |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
