---
description: Os aliases Interativos são uma coleção de aliases que permitem interagir com seu shell e terminal de uma maneira mais interativa.
lang: pt-BR
metaTitle: Aliases Interativos - Dotfiles (BR)
permalink: /pt/aliases/interactive/
---

# Aliases Interativos

O arquivo `interactive.aliases.sh` cria aliases de atalho úteis para habilitar
o modo interativo para funcionalidades comuns críticas no terminal.

Os aliases Interativos são uma coleção de aliases que permitem interagir
com seu shell e terminal de uma maneira mais interativa.

## Modo interativo

[Modo interativo](https://pt.wikipedia.org/wiki/Interatividade) é um modo no
qual o usuário é solicitado a fornecer entrada antes que o comando seja executado.

Este é um recurso útil para comandos como `cp`, `mv`, `rm` e `ln` que
podem ser usados para substituir arquivos ou diretórios.

| Alias | Comando                 | Descrição                                                    |
| ----- | ----------------------- | ------------------------------------------------------------ |
| bin   | `rm -fr ${HOME}/.Trash` | Remover todos os arquivos na lixeira.                        |
| cp    | `cp -vi`                | Copiar arquivos e diretórios.                                |
| del   | `rm -rfvi`              | Remover um arquivo ou diretório.                             |
| ln    | `ln -vi`                | Link simbólico interativo.                                   |
| mv    | `mv -vi`                | Mover arquivos interativamente (perguntar antes de sobrescrever) e detalhado. |
| rm    | `rm -vi`                | Solicita confirmação para cada arquivo antes de remover.     |
| zap   | `rm -vi`                | Remover arquivos interativamente (perguntar antes de sobrescrever). |
