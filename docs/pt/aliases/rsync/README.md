---
description: Os aliases do Rsync são uma coleção de aliases que permitem interagir com a ferramenta de linha de comando `rsync`. Rsync é uma ferramenta que sincroniza arquivos e diretórios entre dois locais.
lang: pt-BR
metaTitle: Aliases do Rsync - Dotfiles (BR)
permalink: /pt/aliases/rsync/
---

# Aliases do Rsync

O arquivo `rsync.aliases.sh` cria aliases de atalho úteis para
[rsync](https://pt.wikipedia.org/wiki/Rsync).

## Rsync

[Rsync](https://pt.wikipedia.org/wiki/Rsync) é um comando que copia arquivos e
diretórios para outro local.

| Alias | Comando      | Descrição                           |
| ----- | ------------ | ----------------------------------- |
| rs    | `rsync -avz` | Rsync com modo verbose e progresso. |
| rsync | `rs`         | Rsync com modo verbose e progresso. |
