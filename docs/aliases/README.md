---
description: Shell aliases that create shortcuts for frequently used commands. Boost productivity by reducing typing in your daily workflow.
lang: en-GB
metaTitle: Aliases - Dotfiles (UK)
permalink: /aliases/

meta:
  - name: keywords
    content: aliases, shell, bash, zsh, shortcuts, commands, dotfiles, chezmoi, productivity, terminal
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Shell aliases that create shortcuts for frequently used commands. Boost productivity by reducing typing in your daily workflow.
  - name: twitter:title
    content: Aliases - Dotfiles
  - name: og:title
    content: Aliases - Dotfiles
  - name: og:description
    content: Shell aliases that create shortcuts for frequently used commands. Boost productivity by reducing typing in your daily workflow.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Aliases

Modular shell aliases managed by **Chezmoi**. Type less, do more.

## Discover

Aliases are organised into small, focused files — one for each tool or workflow. During `chezmoi apply`, all alias files are aggregated into `~/.config/shell/aliases.sh` and sourced by your shell.

## Get started

### Add an alias

1. Create a new file (e.g., `mytool/mytool.aliases.sh`)
2. Define your aliases:
   ```bash
   alias mycmd="echo 'Hello World'"
   ```
3. Apply changes:
   ```bash
   chezmoi apply
   ```

## Reference

Browse aliases by category:

<!-- markdownlint-disable MD013-->

| Category | Description |
| :--- | :--- |
| [AI](ai/) | AI assistant and LLM tool shortcuts |
| [Archives](archives/) | Compress and extract files |
| [CD](cd/) | Navigate the file system |
| [Chmod](chmod/) | Change file permissions |
| [Clear](clear/) | Clear the terminal screen |
| [Compliance](compliance/) | SOC2 and privacy tools |
| [Configuration](configuration/) | Manage dotfiles and shell config |
| [Default](default/) | Default shell aliases |
| [Diagnostics](diagnostics/) | Self-healing and health checks |
| [Dig](dig/) | Query DNS servers |
| [Disk Usage](disk-usage/) | Display disk usage information |
| [Docker](docker/) | Container management |
| [Editor](editor/) | Configure text editors |
| [Find](find/) | Search files and directories |
| [Fonts](fonts/) | Font cache management |
| [GCloud](gcloud/) | Google Cloud SDK tools |
| [Git](git/) | Git version control |
| [GNU](gnu/) | GNU core utilities |
| [Go](go/) | Go language tools |
| [Heroku](heroku/) | Heroku CLI |
| [Installer](installer/) | Bootstrap and deployment |
| [Interactive](interactive/) | Interactive shell behaviour |
| [Kubernetes](kubernetes/) | Kubernetes, Helm, K9s |
| [Legal](legal/) | License scanning tools |
| [macOS](macOS/) | macOS-specific settings |
| [Make](make/) | GNU Make utilities |
| [Mkdir](mkdir/) | Create directories |
| [Modern](modern/) | Rust-based tool replacements |
| [NPM](npm/) | Node.js package manager |
| [Permission](permission/) | File permissions |
| [PNPM](pnpm/) | PNPM package manager |
| [PS](ps/) | Process status |
| [Python](python/) | Python utilities |
| [Rsync](rsync/) | Efficient file transfer |
| [Rust](rust/) | Rust programming tools |
| [Security](security/) | Immutability and signing |
| [Subversion](subversion/) | SVN version control |
| [Sudo](sudo/) | Superuser operations |
| [Terraform](terraform/) | Infrastructure as code |
| [Tmux](tmux/) | Terminal multiplexer |
| [Update](update/) | Update dotfiles |
| [UUID](uuid/) | Generate UUIDs |
| [Wget](wget/) | Command-line downloader |
| [Yarn](yarn/) | Yarn package manager |

<!-- markdownlint-enable MD013-->
