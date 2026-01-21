---
description: Os aliases de Find são projetados para procurar arquivos em uma hierarquia de diretórios e executar ações nos arquivos encontrados.
lang: pt-BR
metaTitle: Aliases de Find - Dotfiles (BR)
permalink: /pt/aliases/find/
---

# Aliases de Find

O arquivo `find.aliases.sh` cria aliases de atalho úteis para o comando `fd`
. O comando `fd` é uma alternativa multiplataforma ao `find`.

Tradicionalmente, o comando `find` é usado para procurar arquivos em uma hierarquia de diretórios
e executar ações nos arquivos encontrados.

Decidimos substituir o comando `find` pelo comando `fd` que é
uma alternativa mais simples, rápida e amigável ao usuário para o `find`.

## Find

[fd](https://github.com/sharkdp/fd) é uma alternativa simples, rápida e amigável ao usuário
para o `find`. Embora não pretenda suportar toda a poderosa funcionalidade do find,
ele fornece padrões sensatos (opinativos) para a maioria dos casos de uso.

| Alias | Comando              | Descrição                                                              |
| ----- | -------------------- | ---------------------------------------------------------------------- |
| fd    | `fd --color always`  | sempre colorir a saída por padrão.                                     |
| fda   | `fd --absolute-path` | listar todos os arquivos com caminho absoluto.                         |
| fdc   | `fd --ignore-case`   | listar todos os arquivos com busca insensível a maiúsculas/minúsculas. |
| fdd   | `fd --list-details`  | listar todos os arquivos com detalhes.                                 |
| fde   | `fd --extension`     | listar todos os arquivos com extensão.                                 |
| fdf   | `fd --follow`        | listar todos os arquivos seguindo links simbólicos.                    |
| fdh   | `fd --help`          | listar todos os arquivos com ajuda.                                    |
| fdh   | `fd --hidden`        | listar todos os arquivos com arquivos ocultos.                         |
| fdn   | `fd --glob`          | listar todos os arquivos com glob.                                     |
| fdo   | `fd --owner`         | listar todos os arquivos com proprietário.                             |
| fds   | `fd --size`          | listar todos os arquivos com tamanho.                                  |
| fdu   | `fd --exclude`       | listar todos os arquivos com exclusão.                                 |
| fdv   | `fd --version`       | listar todos os arquivos com versão.                                   |
| fdx   | `fd --exec`          | Executar um comando para cada resultado de pesquisa.                   |
| find  | `fd`                 | fd é uma alternativa simples, rápida e amigável ao find.               |
