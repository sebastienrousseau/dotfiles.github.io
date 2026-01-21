---
description: Aliases de permissão para Dotfiles
lang: pt-BR
metaTitle: Aliases de Permissão - Dotfiles (BR)
permalink: /pt/aliases/permission/
---

# Aliases de Permissão

Gerencie aliases de Permissão. Parte da configuração **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descrição

Esses aliases são definidos em `permission.aliases.sh` e são carregados automaticamente pelo `chezmoi`.

## ⚡ Aliases

Este código fornece um conjunto de aliases para permissões de arquivos.

- `000` Definir permissões para sem leitura, escrita ou execução para usuário, grupo e outros.
- `400` Definir permissões para sem leitura ou escrita, mas permitir execução apenas para usuário.
- `444` Definir permissões para sem escrita ou execução, mas permitir leitura para todos.
- `600` Definir permissões de leitura e escrita apenas para usuário.
- `644` Definir permissões de leitura para todos, mas escrita apenas para usuário.
- `666` Definir permissões de leitura e escrita para todos.
- `755` Definir permissões de leitura, escrita e execução para usuário, mas apenas leitura e execução para grupo e outros.
- `764` Definir permissões de leitura e escrita para usuário e grupo, mas apenas leitura para outros.
- `777` Definir permissões de leitura, escrita e execução para todos.
- `chgrp` Alterar propriedade do grupo de arquivos ou diretórios.
- `chgrpr` Alterar propriedade do grupo de arquivos ou diretórios recursivamente.
- `chgrpu` Alterar propriedade do grupo de arquivos ou diretórios recursivamente para o usuário atual.
- `chmod` Alterar bits de modo de arquivo.
- `chmodr` Alterar bits de modo de arquivo recursivamente.
- `chmodu` Alterar bits de modo de arquivo recursivamente para o usuário atual.
- `chmox` Tornar um arquivo executável.
- `chown` Alterar proprietário e grupo do arquivo.
- `chownr` Alterar proprietário e grupo do arquivo recursivamente.
- `chownu` Alterar proprietário e grupo do arquivo recursivamente para o usuário atual.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
