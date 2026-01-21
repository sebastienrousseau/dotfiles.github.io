---
description: The dot command is the unified entry point for managing your dotfiles, learning features, and verifying system health.
lang: zh-CN
metaTitle: The dot command - Dotfiles (CN)
permalink: /zh/aliases/dot/

meta:
  - name: keywords
    content: dot, cli, learn, doctor, update, dotfiles
---

# The `dot` Command

The `dot` command is the new, unified interface for interacting with your dotfiles. It wraps `chezmoi` and other utilities to provide a seamless experience.

## Usage

```bash
dot [command]
```

## Commands

| Command      | Description                                                                                                                      |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `dot learn`  | **Interactive Mode**: Launches a tour of the Modern Core tools (Atuin, Yazi, Zellij) and AI features.                            |
| `dot doctor` | **Health 检查**: Verifies that your system is correctly configured and all dependencies are installed. (Wraps `chezmoi doctor`) |
| `dot update` | **更新 System**: Pulls the latest changes from the repository and reapplies them. (Wraps `chezmoi 更新`)                     |
| `dot help`   | **Help**: Displays usage information.                                                                                            |

## Examples

### Interactive Learning

Start the guided tour to learn new keybindings:

```bash
dot learn
```

### System Verification

Check if everything is running smoothly:

```bash
dot doctor
```
