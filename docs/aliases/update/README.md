# Update aliases

The `update.aliases.sh` file creates helpful shortcut aliases for updating the
operating system and software.

The updates help secure and enhance the current Dotfiles installation to protect
against security vulnerabilities, add new features and fix critical bugs.

## 🔄 Update

For greater control, the update process is combined into a single command that
will:

1. Update the operating system and software packages,
2. Update to the latest version of Dotfiles.
3. This will also update the `update.aliases.sh` file, so you will always have
   the latest version of the updater.

## 🖥️ Platforms

### 🐧 Linux

The `upd` alias has been adapted to work on Linux. It will update Debian-based
Linux distributions, via the `apt` package manager and other dependencies via
PnPm, rustup (Rust), and gem (Ruby).

| Alias | Command | Description |
| ----- | ----- | ----- |
| upd | `sudo apt update && sudo apt upgrade -y && pnpm up && rustup update stable && sudo gem update && sudo gem cleanup` | Update command for Debian-based Linux operating systems. |

###  macOS

The `upd` alias is also available for macOS. It will update macOS, via the
`softwareupdate` command line tool, and manage its dependencies using PnPm,
Homebrew, mas, rustup, and gem package managers.

| Alias | Command | Description |
| ----- | ----- | ----- |
| upd | `sudo softwareupdate -i -a && pnpm up && rustup update stable && brew cu -ayi && brew doctor && brew update && brew upgrade && brew cleanup && mas upgrade && sudo gem update && sudo gem cleanup` | Update the system. |
