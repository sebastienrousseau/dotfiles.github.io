---
description: The Update aliases create helpful shortcut aliases for updating the operating system and software installed. It helps secure and enhance the current Dotfiles installation to protect against security vulnerabilities, add new features and fix critical bugs.
lang: de-DE
metaTitle: The Update aliases - Dotfiles (DE)
permalink: /de/aliases/update/

meta:
  - name: keywords
    content: aliases, update, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: The Update aliases create helpful shortcut aliases for updating the operating system and software installed. It helps secure and enhance the current Dotfiles installation to protect against security vulnerabilities, add new features and fix critical bugs.
  - name: twitter:description
    content: The Update aliases create helpful shortcut aliases for updating the operating system and software installed. It helps secure and enhance the current Dotfiles installation to protect against security vulnerabilities, add new features and fix critical bugs.
  - name: twitter:title
    content: The Update aliases - Dotfiles (DE)
  - name: og:title
    content: The Update aliases - Dotfiles (DE)
  - name: og:description
    content: The Update aliases create helpful shortcut aliases for updating the operating system and software installed. It helps secure and enhance the current Dotfiles installation to protect against security vulnerabilities, add new features and fix critical bugs.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Update aliases

The `update.aliases.sh` file creates helpful shortcut aliases for updating the
operating system and software.

The updates help secure and enhance the current Dotfiles installation to protect
against security vulnerabilities, add new features and fix critical bugs.

## Update

For greater control, the update process is combined into a single command that
will:

1. Update the operating system and software packages,
2. Update to the latest version of Dotfiles.
3. This will also update the `update.aliases.sh` file, so you will always have
   the latest version of the updater.

## Platforms

### Linux

The `upd` alias has been adapted to work on Linux. It will update Debian-based
Linux distributions, via the `apt` package manager and other dependencies via
pnpm, rustup (Rust), and gem (Ruby).

| Alias | Befehl                | Beschreibung                                                               |
| ----- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| upd   | `sudo apt update && sudo apt upgrade -y && pnpm up && rustup update stable && sudo gem update && sudo gem cleanup` | Update command for Debian-based Linux operating systems. |

### macOS

The `upd` alias is also available for macOS. It will update macOS, via the
`softwareupdate` command line tool, and manage its dependencies using pnpm,
Homebrew, mas, rustup, and gem package managers.

| Alias | Befehl                | Beschreibung                                                               |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| upd   | `sudo softwareupdate -i -a && pnpm up && rustup update stable && brew cu -ayi && brew doctor && brew update && brew upgrade && brew cleanup && mas upgrade && sudo gem update && sudo gem cleanup` | Update the system. |
