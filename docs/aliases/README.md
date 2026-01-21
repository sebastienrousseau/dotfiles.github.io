---
description: Aliases allow you to create shortcuts for shell commands that you use frequently. This allows you to be more productive and efficient by reducing the amount of typing you have to do when using the shell regularly.
lang: en-GB
metaTitle: Aliases - Dotfiles (UK)
permalink: /aliases/

meta:
  - name: keywords
    content: aliases, archives, cd, chmod, clear, commands, default, dig, dotfiles, du, editor, find, gcloud, git, gnu, heroku, interactive, jekyll, list, make, mkdir, npm, pnpm, ps, rsync, rust, shell, subversion, sudo, tmux, typing, update, uuid, wget
  - name: twitter:card
    content: Aliases allow you to create shortcuts for shell commands that you use frequently. This allows you to be more productive and efficient by reducing the amount of typing you have to do when using the shell regularly.
  - name: twitter:description
    content: Aliases allow you to create shortcuts for shell commands that you use frequently. This allows you to be more productive and efficient by reducing the amount of typing you have to do when using the shell regularly.
  - name: twitter:title
    content: Aliases - Dotfiles (UK)
  - name: og:title
    content: Aliases - Dotfiles (UK)
  - name: og:description
    content: Aliases allow you to create shortcuts for shell commands that you use frequently. This allows you to be more productive and efficient by reducing the amount of typing you have to do when using the shell regularly.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Aliases

Aliases allow you to create shortcuts for shell commands that you use
frequently. This allows you to be more productive and efficient by reducing the
amount of typing you have to do when using the shell regularly. As an example,
instead of typing `git status` you could type `gst` to obtain the same result.

This is a great way to save time and reduce considerably the amount of typing
you have to do when using the terminal on a daily basis which helps you to be
more productive and efficient.

## Presets

Dotfiles has a collection of configuration presets and diverse recipes that you
can use to get started with.

### Automatic System detection

Dotfiles contains a utility function for detecting the current `ls` flavor that
is in use in order to help setting up the right `LS_COLORS` environment
variables to your system.

The `LS_COLORS` environment variable is used by the `ls` command to colorize the
output of the command.

### Check built-in aliases

Type the following alias command in your terminal:

```bash
alias
```

### GNU Find utilities aliases

macOS systems are based on BSD, rather than on GNU/Linux like RedHat, Debian,
and Ubuntu. As a result, a lot of the command line tools that ship with macOS
aren’t 100% compatible. For example, the `find` command on macOS doesn’t support
the `-printf` option, which is used by the `locate` command. This means that the
`locate` command doesn’t work on macOS. To fix this, you can install the GNU
versions of these commands, which are fully compatible with the Linux versions.

The GNU Find Utilities are the basic directory searching utilities of the GNU
operating system. These programs are typically used in conjunction with other
programs to provide modular and powerful directory search and file locating
capabilities to other commands.

The tools supplied with this package are:

- find - search for files in a directory hierarchy
- locate - list files in databases that match a pattern
- updatedb - update a file name database
- xargs - build and execute command lines from standard input

Type the following alias command in your terminal:

```bash
brew install findutils
```

### The Dotfiles aliases

The files provided in Dotfiles contain a few opinionated aliases that you might
find useful. These are defined in the `./dist/lib/aliases` directory and loaded
automatically when you start a new shell session.

The aliases are loaded either by the `~/.bashrc` file if you are using the Bash
shell, or in the `~/.zshrc` file if you are using the Zsh shell.

They have been grouped by logical categories:

- [archives][archives] - Aliases for working with archives.
- [cd][cd] - Aliases for working with directories.
- [chmod][chmod] - Aliases for working with file permissions.
- [clear][clear] - Aliases for clearing the terminal screen.
- [default][default] - The default aliases that are loaded for all users,
  regardless of the shell they are using, and of the operating system they are
  on,
- [default][default] - The default aliases that are loaded for all users,
  regardless of the shell they are using, and of the operating system they are
  on,
- [dig][dig] - Aliases for working with DNS.
- [dot][dot] - The unified CLI for managing your dotfiles.
- [du][du] - Aliases for working with disk usage.
- [editor][editor] - Aliases for working with the editor.
- [find][find] - Aliases for working with the `fd` command.
- [gcloud][gcloud] - Aliases for working with the `gcloud` command.
- [git][git] - Aliases for working with Git.
- [gnu][gnu] - Aliases for working with GNU Core utilities.

- [interactive][interactive] - Aliases for working with interactive commands.
- [jekyll][jekyll] - Aliases for working with Jekyll.
- [list][list] - Aliases for working with the `ls` command.
- [make][make] - Aliases for working with the `make` command.
- [mkdir][mkdir] - Aliases for working with the `mkdir` command.
- [modern-core][modern-core] - High-performance tools (Atuin, Yazi, Zellij).
- [npm][npm] - Aliases for working with the `npm` command.
- [pnpm][pnpm] - Aliases for working with the `pnpm` command.
- [ps][ps] - Aliases for working with the `ps` command.
- [rsync][rsync] - Aliases for working with the `rsync` command.
- [rust][rust] - Aliases for working with the Rust programming language.
- [subversion][subversion] - Aliases for working with Subversion.
- [sudo][sudo] - Aliases for working with the `sudo` command.
- [tmux][tmux] - Aliases for working with the `tmux` command.
- [update][update] - Aliases for working with the `update` command.
- [uuid][uuid] - Aliases for working with the `uuid` command.
- [wget][wget] - Aliases for working with the `wget` command.

[archives]: ./archives/
[cd]: ./cd/
[chmod]: ./chmod/
[clear]: ./clear/
[default]: ./default/
[dig]: ./dig/
[dot]: ./dot/
[du]: ./du/
[editor]: ./editor/
[find]: ./find/
[gcloud]: ./gcloud/
[git]: ./git/
[gnu]: ./gnu/

[interactive]: ./interactive/
[jekyll]: ./jekyll/
[list]: ./list/
[make]: ./make/
[mkdir]: ./mkdir/
[modern-core]: ./modern-core/
[npm]: ./npm/
[pnpm]: ./pnpm/
[ps]: ./ps/
[rsync]: ./rsync/
[rust]: ./rust/
[subversion]: ./subversion/
[sudo]: ./sudo/
[tmux]: ./tmux/
[update]: ./update/
[uuid]: ./uuid/
[wget]: ./wget/
