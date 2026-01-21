---
description: The clear aliases are able to clear the screen in a variety of ways.
lang: es-ES
metaTitle: Clear aliases - Dotfiles (ES)
permalink: /es/aliases/clear/

meta:
  - name: twitter:card
    content: The clear aliases are able to clear the screen in a variety of ways.
  - name: twitter:description
    content: The clear aliases are able to clear the screen in a variety of ways.
  - name: twitter:title
    content: Clear aliases - Dotfiles (ES)
  - name: og:title
    content: Clear aliases - Dotfiles (ES)
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
| clc    | `clear && cat`                                  | Clear the terminal screen and Imprimir the contents of the current directorio.                                   |
| clcat  | `clc`                                           | Clear the terminal screen and Imprimir the contents of the current directorio.                                   |
| clh    | `clear && history`                              | Clear the terminal screen and Imprimir the command history.                                                     |
| clhist | `clh`                                           | Clear the terminal screen and Imprimir the command history.                                                     |
| clp    | `clear && pwd`                                  | Clear the terminal screen and Imprimir the current working directorio.                                           |
| clpwd  | `clp`                                           | Clear the terminal screen and Imprimir the current working directorio.                                           |
| clr    | `c`                                             | Clear the terminal screen.                                                                                   |
| cls    | `c`                                             | Clear the terminal screen.                                                                                   |
| clt    | `clear && tree`                                 | Clear the terminal screen and Imprimir the directorio tree.                                                      |
| cltree | `clt`                                           | Clear the terminal screen and Imprimir the directorio tree.                                                      |
| ct     | `clear && tree ./`                              | Clear the terminal screen and Imprimir the directorio tree.                                                      |
| ctree  | `ct`                                            | Clear the terminal screen and Imprimir the directorio tree.                                                      |
| cpl    | `clear && pwd && echo '' && ls -a && echo ''`   | Clear the terminal screen and Imprimir the current working directorio and the contents of the current directorio. |
| cplt   | `clear && pwd && echo '' && tree ./ && echo ''` | Clear the terminal screen and Imprimir the current working directorio and the directorio tree.                    |
