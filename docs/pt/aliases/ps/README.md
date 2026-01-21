---
description: Os aliases do PS são uma coleção de aliases que permitem interagir com a ferramenta de linha de comando `ps`. Ps é uma ferramenta que relata um instantâneo dos processos atuais.
lang: pt-BR
metaTitle: Aliases do PS - Dotfiles (BR)
permalink: /pt/aliases/ps/
---

# Aliases do PS

O arquivo `ps.aliases.sh` cria aliases de atalho úteis para trabalhar com
processos.

Os aliases do PS são uma coleção de aliases que permitem interagir com
a ferramenta de linha de comando `ps`. Ps é uma ferramenta que relata um instantâneo dos processos atuais.

## PS

[PS](<https://pt.wikipedia.org/wiki/Ps_(Unix)>) é um comando que lista os
processos em execução no sistema.

| Alias | Comando  | Descrição                                                                                                                                |
| ----- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| pid   | `ps -f`  | Exibir o uid, pid, pid pai, uso recente da CPU, hora de início do processo, tty de controle, uso decorrido da CPU e o comando associado. |
| ps    | `ps -ef` | Exibir todos os processos.                                                                                                               |
| psa   | `ps aux` | Listar todos os processos.                                                                                                               |
