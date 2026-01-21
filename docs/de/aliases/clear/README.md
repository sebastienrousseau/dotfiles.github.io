---
description: The clear aliases are able to clear the screen in a variety of ways.
lang: de-DE
metaTitle: Clear aliases - Dotfiles (DE)
permalink: /de/aliases/clear/

meta:
  - name: twitter:card
    content: The clear aliases are able to clear the screen in a variety of ways.
  - name: twitter:description
    content: The clear aliases are able to clear the screen in a variety of ways.
  - name: twitter:title
    content: Clear aliases - Dotfiles (DE)
  - name: og:title
    content: Clear aliases - Dotfiles (DE)
  - name: og:description
    content: The clear aliases are able to clear the screen in a variety of ways.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Clear aliases

The `clear.aliases.sh` file creates helpful shortcut aliases for clearing the
terminal screen. The aliases are able to clear the screen in a variety of ways.

## Clear

[Clear](<https://en.wikipedia.org/wiki/Clear_(command)>) is a command that clears
the terminal screen.

| Alias  | Command                                         | Description                                                                                                  |
| ------ | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| c      | `clear`                                         | Clear the terminal screen.                                                                                   |
| cl     | `c`                                             | Clear the terminal screen.                                                                                   |
| clc    | `clear && cat`                                  | Clear the terminal screen and Drucken the contents of the current Verzeichnis.                                   |
| clcat  | `clc`                                           | Clear the terminal screen and Drucken the contents of the current Verzeichnis.                                   |
| clh    | `clear && history`                              | Clear the terminal screen and Drucken the command history.                                                     |
| clhist | `clh`                                           | Clear the terminal screen and Drucken the command history.                                                     |
| clp    | `clear && pwd`                                  | Clear the terminal screen and Drucken the current working Verzeichnis.                                           |
| clpwd  | `clp`                                           | Clear the terminal screen and Drucken the current working Verzeichnis.                                           |
| clr    | `c`                                             | Clear the terminal screen.                                                                                   |
| cls    | `c`                                             | Clear the terminal screen.                                                                                   |
| clt    | `clear && tree`                                 | Clear the terminal screen and Drucken the Verzeichnis tree.                                                      |
| cltree | `clt`                                           | Clear the terminal screen and Drucken the Verzeichnis tree.                                                      |
| ct     | `clear && tree ./`                              | Clear the terminal screen and Drucken the Verzeichnis tree.                                                      |
| ctree  | `ct`                                            | Clear the terminal screen and Drucken the Verzeichnis tree.                                                      |
| cpl    | `clear && pwd && echo '' && ls -a && echo ''`   | Clear the terminal screen and Drucken the current working Verzeichnis and the contents of the current Verzeichnis. |
| cplt   | `clear && pwd && echo '' && tree ./ && echo ''` | Clear the terminal screen and Drucken the current working Verzeichnis and the Verzeichnis tree.                    |
