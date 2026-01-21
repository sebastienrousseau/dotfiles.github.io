---
description: Los alias de clear permiten limpiar la pantalla de varias formas.
lang: es-ES
metaTitle: Alias de Clear - Dotfiles (ES)
permalink: /es/aliases/clear/
---

# Alias de Clear

El archivo `clear.aliases.sh` crea atajos útiles para limpiar la pantalla del terminal.

## Clear

[Clear](<https://es.wikipedia.org/wiki/Clear_(Unix)>) es un comando que limpia la pantalla del terminal.

| Alias  | Comando                                         | Descripción                                                                                                  |
| ------ | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| c      | `clear`                                         | Limpiar la pantalla del terminal.                                                                                   |
| cl     | `c`                                             | Limpiar la pantalla del terminal.                                                                                   |
| clc    | `clear && cat`                                  | Limpiar la pantalla del terminal e imprimir el contenido del directorio actual.                                   |
| clcat  | `clc`                                           | Limpiar la pantalla del terminal e imprimir el contenido del directorio actual.                                   |
| clh    | `clear && history`                              | Limpiar la pantalla del terminal e imprimir el historial de comandos.                                                     |
| clhist | `clh`                                           | Limpiar la pantalla del terminal e imprimir el historial de comandos.                                                     |
| clp    | `clear && pwd`                                  | Limpiar la pantalla del terminal e imprimir el directorio de trabajo actual.                                           |
| clpwd  | `clp`                                           | Limpiar la pantalla del terminal e imprimir el directorio de trabajo actual.                                           |
| clr    | `c`                                             | Limpiar la pantalla del terminal.                                                                                   |
| cls    | `c`                                             | Limpiar la pantalla del terminal.                                                                                   |
| clt    | `clear && tree`                                 | Limpiar la pantalla del terminal e imprimir el árbol de directorios.                                                      |
| cltree | `clt`                                           | Limpiar la pantalla del terminal e imprimir el árbol de directorios.                                                      |
| ct     | `clear && tree ./`                              | Limpiar la pantalla del terminal e imprimir el árbol de directorios.                                                      |
| ctree  | `ct`                                            | Limpiar la pantalla del terminal e imprimir el árbol de directorios.                                                      |
| cpl    | `clear && pwd && echo '' && ls -a && echo ''`   | Limpiar la pantalla del terminal e imprimir el directorio de trabajo actual y el contenido del directorio actual. |
| cplt   | `clear && pwd && echo '' && tree ./ && echo ''` | Limpiar la pantalla del terminal e imprimir el directorio de trabajo actual y el árbol de directorios.                    |
