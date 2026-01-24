---
description: Os alias List sao uma colecao de alias que permitem interagir com o comando `ls` de forma mais interativa para mostrar o conteudo de um diretorio.
lang: pt-PT
metaTitle: Os alias List (ls) - Dotfiles (PT)
permalink: /pt/aliases/list/

meta:
  - name: keywords
    content: aliases, ls, list, linux, macos, shell, terminal, windows
  - name: twitter:card
    content: Os alias List sao uma colecao de alias que permitem interagir com o comando `ls` de forma mais interativa para mostrar o conteudo de um diretorio.
  - name: twitter:description
    content: Os alias List sao uma colecao de alias que permitem interagir com o comando `ls` de forma mais interativa para mostrar o conteudo de um diretorio.
  - name: twitter:title
    content: Os alias List (ls) - Dotfiles (PT)
  - name: og:title
    content: Os alias List (ls) - Dotfiles (PT)
  - name: og:description
    content: Os alias List sao uma colecao de alias que permitem interagir com o comando `ls` de forma mais interativa para mostrar o conteudo de um diretorio.
  - name: og:image:alt
    content: Dotfiles - Simplesmente projetado para sua vida no shell
  - name: og:locale
    content: pt_PT
---

# Alias de List

O arquivo `list.aliases.sh` cria atalhos uteis para listar arquivos e
diretorios.

Os alias List sao uma colecao de alias que permitem interagir com
o comando `ls` de forma mais interativa para mostrar o conteudo de um
diretorio.

Para cada operando que nomeia um arquivo que nao e diretorio, `ls` mostra
seu nome e informacoes associadas. Para cada operando que nomeia um
diretorio, `ls` mostra os nomes dos arquivos contidos nele, com informacoes
associadas.

## ls

[ls](https://en.wikipedia.org/wiki/Ls) e um comando que lista o conteudo de um
diretorio.

| Alias  | Comando                          | Descricao                                            |
| ------ | -------------------------------- | ---------------------------------------------------- |
| l.     | `ls -dlhF .* \| grep -v "^d"`    | Listar arquivos ocultos.                             |
| l      | `ls -lFh`                         | Tamanho, mostrar tipo, legivel.                      |
| l1     | `ls -1`                           | Um arquivo por linha.                                |
| la     | `ls -lAFh`                        | Todos os arquivos, tipo, legivel.                    |
| labc   | `ls -lap`                         | Listar arquivos em ordem alfabetica.                 |
| lc     | `wc -l`                           | Contar numero de linhas do arquivo.                  |
| lct    | `ls -lcrh`                        | Listar por data, mais novos primeiro.                |
| ld     | `ls -ltrh`                        | Ordenar por data, mais antigos primeiro.             |
| ldir   | `ls -l \| egrep '^d'`             | Listar apenas diretorios.                            |
| ldot   | `l.`                              | Listar arquivos ocultos.                             |
| left   | `ls -t -1`                        | Listar por data, mais recentes no fim.               |
| right  | `ls -t -1r`                       | Listar por data, mais recentes no inicio.            |
| lf     | `ls -l \| egrep -v '^d'`          | Listar apenas arquivos.                              |
| lk     | `ls -lSrh`                        | Ordenar por tamanho, maiores primeiro.               |
| ll     | `la`                              | Lista longa, quase todos, tipo, legivel.             |
| lla    | `ls -l -d $PWD/*`                 | Listar caminho completo dos arquivos no diretorio.   |
| locale | `locale -a \| grep UTF-8`         | Listar locales disponiveis.                          |
| lp     | `sudo lsof -i -T -n`              | Listar portas abertas.                               |
| lr     | `ls -lRh`                         | Lista recursiva, tipo, legivel.                      |
| ls     | `ls --color`                      | Colorir a saida.                                     |
| lS     | `ls -1FSsh`                       | Ordenar por data e tamanho.                          |
| lt     | `tree`                            | Listar conteudo em formato de arvore.                |
| lu     | `ls -lurh`                        | Ordenar por data, mais antigos primeiro.             |
| lw     | `ls -xAh`                         | Lista larga, quase todos, tipo, legivel.             |
| lx     | `ls \| sort -k 1,1 -t .`          | Ordenar por extensao.                                |
| lz     | `ls -lSr`                         | Ordenar por tamanho, menores primeiro.               |
