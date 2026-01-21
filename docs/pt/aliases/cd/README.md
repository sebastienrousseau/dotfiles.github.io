---
description: Os aliases de Change Directory são uma coleção de aliases que permitem interagir com a ferramenta de linha de comando `cd`. Cd é uma ferramenta que altera o diretório atual.
lang: pt-BR
metaTitle: Aliases de Change Directory - Dotfiles (BR)
permalink: /pt/aliases/cd/
---

# Aliases de Change Directory

O arquivo `cd.aliases.sh` cria aliases de atalho úteis para
navegar no terminal.

Os aliases de Change Directory são uma coleção de aliases que permitem
interagir com a ferramenta de linha de comando `cd`. Cd é uma ferramenta que altera o diretório
atual.

## Navegação

O comando cd, também conhecido como chdir (change directory), é um comando shell
de linha de comando usado para alterar o diretório de trabalho atual em vários sistemas
operacionais.

| Alias | Comando                       | Descrição                                                        |
| ----- | ----------------------------- | ---------------------------------------------------------------- |
| -     | `cd -`                        | Atalho para ir para o diretório anterior.                        |
| ..    | `cd ..`                       | Atalho para ir para o diretório pai.                             |
| ...   | `cd ../..`                    | Atalho para ir para o diretório avô.                             |
| ....  | `cd ../../..`                 | Atalho para ir para o diretório bisavô.                          |
| ..... | `cd ../../../..`              | Atalho para ir para o diretório trisavô.                         |
| ~     | `cd ~`                        | Atalho para ir para o diretório home.                            |
| app   | `cd ${HOME}/Applications; ls` | Atalho para ir para o diretório Applications.                    |
| cod   | `cd ${HOME}/Code; ls`         | Atalho para ir para o diretório Code e listar seu conteúdo.      |
| des   | `cd ${HOME}/Desktop; ls`      | Atalho para ir para o diretório Desktop e listar seu conteúdo.   |
| doc   | `cd ${HOME}/Documents; ls`    | Atalho para ir para o diretório Documents e listar seu conteúdo. |
| dot   | `cd ${HOME}/.dotfiles; ls`    | Atalho para ir para o diretório dotfiles.                        |
| dow   | `cd ${HOME}/Downloads; ls`    | Atalho para ir para o diretório Downloads e listar seu conteúdo. |
| hom   | `cd ${HOME}/; ls`             | Atalho para ir para o diretório home e listar seu conteúdo.      |
| mus   | `cd ${HOME}/Music; ls`        | Atalho para ir para o diretório Music e listar seu conteúdo.     |
| pic   | `cd ${HOME}/Pictures; ls`     | Atalho para ir para o diretório Pictures e listar seu conteúdo.  |
| vid   | `cd ${HOME}/Videos; ls`       | Atalho para ir para o diretório Videos e listar seu conteúdo.    |
