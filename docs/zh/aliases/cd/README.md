---
description: The Change Directory aliases are a collection of aliases that allow you to interact with the `cd` command line tool. Cd is a tool which changes the current directory.
lang: zh-CN
metaTitle: Change Directory aliases - Dotfiles (CN)
permalink: /zh/aliases/cd/

meta:
  - name: keywords
    content: aliases, cd, chdir, change directory, directory, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: The Change Directory aliases are a collection of aliases that allow you to interact with the `cd` command line tool. Cd is a tool which changes the current directory.
  - name: twitter:description
    content: The Change Directory aliases are a collection of aliases that allow you to interact with the `cd` command line tool. Cd is a tool which changes the current directory.
  - name: twitter:title
    content: Change Directory aliases - Dotfiles (CN)
  - name: og:title
    content: Change Directory aliases - Dotfiles (CN)
  - name: og:description
    content: The Change Directory aliases are a collection of aliases that allow you to interact with the `cd` command line tool. Cd is a tool which changes the current directory.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Change Directory aliases

The `cd.aliases.sh` file creates helpful shortcut aliases for
navigating the terminal.

The Change Directory aliases are a collection of aliases that allow you to
interact with the `cd` command line tool. Cd is a tool which changes the current
directory.

## Navigation

The cd command, also known as chdir (change directory), is a command-line shell
command used to change the current working directory in various operating
systems.

| Alias | Command                       | Description                                                      |
| ----- | ----------------------------- | ---------------------------------------------------------------- |
| -     | `cd -`                        | Shortcut to go to previous directory.                            |
| ..    | `cd ..`                       | Shortcut to go to parent directory.                              |
| ...   | `cd ../..`                    | Shortcut to go to grandparent directory.                         |
| ....  | `cd ../../..`                 | Shortcut to go to great-grandparent directory.                   |
| ..... | `cd ../../../..`              | Shortcut to go to great-great-grandparent directory.             |
| ~     | `cd ~`                        | Shortcut to go to home directory.                                |
| app   | `cd ${HOME}/Applications; ls` | Shortcut to go to the Applications directory.                    |
| cod   | `cd ${HOME}/Code; ls`         | Shortcut to go to the Code directory and list its contents.      |
| des   | `cd ${HOME}/Desktop; ls`      | Shortcut to go to the Desktop directory and list its contents.   |
| doc   | `cd ${HOME}/Documents; ls`    | Shortcut to go to the Documents directory and list its contents. |
| dot   | `cd ${HOME}/.dotfiles; ls`    | Shortcut to go to the dotfiles directory.                        |
| dow   | `cd ${HOME}/Downloads; ls`    | Shortcut to go to the Downloads directory and list its contents. |
| hom   | `cd ${HOME}/; ls`             | Shortcut to go to home directory and list its contents.          |
| mus   | `cd ${HOME}/Music; ls`        | Shortcut to go to the Music directory and list its contents.     |
| pic   | `cd ${HOME}/Pictures; ls`     | Shortcut to go to the Pictures directory and list its contents.  |
| vid   | `cd ${HOME}/Videos; ls`       | Shortcut to go to the Videos directory and list its contents.    |
