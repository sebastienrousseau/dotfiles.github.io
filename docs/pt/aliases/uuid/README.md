---
description: Os aliases de UUID criam atalhos úteis para o comando `uuidgen`. O comando uuidgen gera um Identificador Único Universal (UUID), um valor de 128 bits garantido como único no espaço e no tempo.
lang: pt-BR
metaTitle: Aliases de UUID - Dotfiles (BR)
permalink: /pt/aliases/uuid/
---

# Aliases de UUID

O arquivo `uuid.aliases.sh` cria aliases de atalho úteis para gerar
[UUIDs](https://pt.wikipedia.org/wiki/Universally_unique_identifier).

Os aliases de UUID criam atalhos úteis para o comando `uuidgen`.
O comando uuidgen gera um Identificador Único Universal (UUID), um
valor de 128 bits garantido como único no espaço e no tempo.

## UUID

[UUID](https://pt.wikipedia.org/wiki/Universally_unique_identifier) é um número de 128 bits
usado para identificar informações em sistemas de computador.

| Alias | Comando                                                                            | Descrição                                     |
| ----- | ---------------------------------------------------------------------------------- | --------------------------------------------- |
| uuid  | `uuidgen \| tr -d '\n' \| tr '[:upper:]' '[:lower:]' \| pbcopy && pbpaste && echo` | Gerar um UUID e copiá-lo para a área de transferência. |
