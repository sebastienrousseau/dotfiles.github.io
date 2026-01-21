---
description: Os aliases de List são uma coleção de aliases que permitem interagir com o comando `ls` de uma maneira mais interativa para exibir o conteúdo de um diretório.
lang: pt-BR
metaTitle: Aliases de List (ls) - Dotfiles (BR)
permalink: /pt/aliases/list/
---

# Aliases de List

O arquivo `list.aliases.sh` cria aliases de atalho úteis para listar arquivos
e diretórios.

Os aliases de List são uma coleção de aliases que permitem interagir com o
comando `ls` de uma maneira mais interativa para exibir o conteúdo de um
diretório.

## ls

[ls](https://pt.wikipedia.org/wiki/Ls) é um comando que lista o conteúdo de
um diretório.

| Alias  | Comando              | Descrição                                                           |
| ------ | -------------------- | ------------------------------------------------------------------- | ----------------------------------- |
| l.     | `ls -dlhF .\*        | grep -v "^d"`                                                       | Listar arquivos ocultos.            |
| l      | `ls -lFh`            | Tamanho, mostrar tipo, legível por humanos.                         |
| l1     | `ls -1`              | Exibir um arquivo por linha.                                        |
| la     | `ls -lAFh`           | Todos os arquivos, mostrar tipo, legível por humanos.               |
| labc   | `ls -lap`            | Listar todos os arquivos em ordem alfabética.                       |
| lc     | `wc -l`              | Contar o número de linhas no arquivo.                               |
| lct    | `ls -lcrh`           | Listar arquivos por tempo, mais novos primeiro.                     |
| ld     | `ls -ltrh`           | Classificar por data, mais antigos primeiro.                        |
| ldir   | `ls -l               | egrep '^d'`                                                         | Listar apenas diretórios.           |
| ldot   | `l.`                 | Listar arquivos ocultos.                                            |
| left   | `ls -t -1`           | Listar arquivos por data, mais recentes por último.                 |
| right  | `ls -t -1r`          | Listar arquivos por data, mais recentes primeiro.                   |
| lf     | `ls -l               | egrep -v '^d'`                                                      | Listar apenas arquivos.             |
| lk     | `ls -lSrh`           | Classificar por tamanho, maiores primeiro.                          |
| ll     | `la`                 | Lista longa, mostrar quase tudo, mostrar tipo, legível por humanos. |
| lla    | `ls -l -d $PWD/*`    | Listar caminho completo de todos os arquivos no diretório atual.    |
| locale | `locale -a           | grep UTF-8`                                                         | Listar todos os locais disponíveis. |
| lp     | `sudo lsof -i -T -n` | Listar todas as portas abertas.                                     |
| lr     | `ls -lRh`            | Lista recursiva, mostrar tipo, legível por humanos.                 |
| ls     | `ls --color`         | Colorir a saída.                                                    |
| lS     | `ls -1FSsh`          | Ordenar arquivos com base na última modificação e tamanho.          |
| lt     | `tree`               | Listar conteúdo de diretórios em formato de árvore.                 |
| lu     | `ls -lurh`           | Classificar por data, mais antigos primeiro.                        |
| lw     | `ls -xAh`            | Lista ampla, mostrar quase tudo, mostrar tipo, legível por humanos. |
| lx     | `ls                  | sort -k 1,1 -t .`                                                   | Classificar por extensão.           |
| lz     | `ls -lSr`            | Classificar por tamanho, menores primeiro.                          |
