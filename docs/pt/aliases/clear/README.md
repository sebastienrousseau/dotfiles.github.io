---
description: Os aliases do Clear são capazes de limpar a tela de várias maneiras.
lang: pt-BR
metaTitle: Aliases do Clear - Dotfiles (BR)
permalink: /pt/aliases/clear/
---

# Aliases do Clear

O arquivo `clear.aliases.sh` cria aliases de atalho úteis para limpar a
tela do terminal. Os aliases são capazes de limpar a tela de várias maneiras.

## Clear

[Clear](<https://en.wikipedia.org/wiki/Clear_(command)>) é um comando que limpa
a tela do terminal.

| Alias  | Comando                                         | Descrição                                                                   |
| ------ | ----------------------------------------------- | --------------------------------------------------------------------------- |
| c      | `clear`                                         | Limpar a tela do terminal.                                                  |
| cl     | `c`                                             | Limpar a tela do terminal.                                                  |
| clc    | `clear && cat`                                  | Limpar a tela do terminal e imprimir o conteúdo do diretório atual.         |
| clcat  | `clc`                                           | Limpar a tela do terminal e imprimir o conteúdo do diretório atual.         |
| clh    | `clear && history`                              | Limpar a tela do terminal e imprimir o histórico de comandos.               |
| clhist | `clh`                                           | Limpar a tela do terminal e imprimir o histórico de comandos.               |
| clp    | `clear && pwd`                                  | Limpar a tela do terminal e imprimir o diretório de trabalho atual.         |
| clpwd  | `clp`                                           | Limpar a tela do terminal e imprimir o diretório de trabalho atual.         |
| clr    | `c`                                             | Limpar a tela do terminal.                                                  |
| cls    | `c`                                             | Limpar a tela do terminal.                                                  |
| clt    | `clear && tree`                                 | Limpar a tela do terminal e imprimir a árvore de diretórios.                |
| cltree | `clt`                                           | Limpar a tela do terminal e imprimir a árvore de diretórios.                |
| ct     | `clear && tree ./`                              | Limpar a tela do terminal e imprimir a árvore de diretórios.                |
| ctree  | `ct`                                            | Limpar a tela do terminal e imprimir a árvore de diretórios.                |
| cpl    | `clear && pwd && echo '' && ls -a && echo ''`   | Limpar a tela e imprimir o diretório atual e o conteúdo do diretório atual. |
| cplt   | `clear && pwd && echo '' && tree ./ && echo ''` | Limpar a tela e imprimir o diretório atual e a árvore de diretórios.        |
