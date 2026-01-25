---
title: "Configuration Aliases: Quick Access to Config Files"
description: "Open shell, Git, SSH, and server configuration files instantly with these shell aliases for Bash and Zsh."
lang: en-GB
metaTitle: "Configuration Aliases | Dotfiles"
permalink: /aliases/configuration/
sidebar: true
meta:
  - name: keywords
    content: "configuration aliases, shell config, dotfiles, bash aliases, zsh aliases, git config, ssh config"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Configuration Aliases | Dotfiles
  - name: twitter:description
    content: Open shell, Git, SSH, and server configuration files instantly with these shell aliases.
  - name: og:title
    content: Configuration Aliases | Dotfiles
  - name: og:description
    content: Open shell, Git, SSH, and server configuration files instantly with these shell aliases.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Configuration Aliases

Open configuration files in your default editor with a single command.

## Overview

Configuration aliases provide shortcuts to open frequently edited configuration files. These aliases are defined in `configuration.aliases.sh` and loaded automatically by chezmoi.

Each alias launches the corresponding file in your system's default text editor, eliminating the need to remember file paths or type lengthy commands.

## Reference

### Shell Configuration

| Alias | Description |
|-------|-------------|
| `bshrc` | Open Bash configuration file (~/.bashrc) |
| `bshp` | Open Bash profile (~/.bash_profile) |
| `zshrc` | Open Zsh configuration file (~/.zshrc) |
| `zshp` | Open Zsh profile (~/.zprofile) |

### Version Control

| Alias | Description |
|-------|-------------|
| `gcfg` | Open Git configuration file (~/.gitconfig) |
| `gign` | Open Git ignore file (~/.gitignore) |

### Network and Servers

| Alias | Description |
|-------|-------------|
| `apconf` | Open Apache configuration file |
| `ngconf` | Open Nginx configuration file |
| `sshconf` | Open SSH configuration file (~/.ssh/config) |
| `hosts` | Open hosts file (/etc/hosts) |

### Development Tools

| Alias | Description |
|-------|-------------|
| `dockcomp` | Open Docker Compose file |
| `eddir` | Open current directory in default editor |
