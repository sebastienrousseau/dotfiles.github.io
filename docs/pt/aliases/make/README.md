---
description: Os aliases do Make são uma coleção de aliases que permitem interagir com a ferramenta de linha de comando `make`. Make é uma ferramenta que controla a geração de executáveis e outros arquivos não-fonte de um programa a partir dos arquivos fonte do programa.
lang: pt-BR
metaTitle: Aliases do Make - Dotfiles (BR)
permalink: /pt/aliases/make/
---

# Aliases do Make

O arquivo `make.aliases.sh` cria aliases de atalho úteis para executar comandos
`make`.

## Make

[Make](<https://en.wikipedia.org/wiki/Make_(software)>) é uma ferramenta que controla
a geração de executáveis e outros arquivos não-fonte de um programa a partir dos
arquivos fonte do programa.

Make obtém seu conhecimento de como construir seu programa de um arquivo chamado
`Makefile`, que lista cada um dos arquivos não-fonte e como calculá-lo a partir de
outros arquivos.

| Alias | Comando        | Descrição                       |
| ----- | -------------- | ------------------------------- |
| mk    | `make`         | Executar `make` sem argumentos. |
| mkc   | `make clean`   | Executar `make clean`.          |
| mkd   | `make doc`     | Executar `make doc`.            |
| mkf   | `make format`  | Executar `make format`.         |
| mkh   | `make help`    | Executar `make help`.           |
| mki   | `make install` | Executar `make install`.        |
| mkr   | `make run`     | Executar `make run`.            |
| mkt   | `make test`    | Executar `make test`.           |
