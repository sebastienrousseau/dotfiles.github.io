---
description: alias de permissao para Dotfiles
lang: pt-PT
metaTitle: alias de permissao - Dotfiles
permalink: /pt/aliases/permission/
---
# Alias de permissao

Gerenciar alias de permissao. Parte da configuracao **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descricao

Esses alias sao definidos em `permission.aliases.sh` e sao carregados automaticamente pelo `chezmoi`.

## ⚡ Alias

Este codigo fornece alias para permissoes de arquivos.
- `000` Sem leitura, escrita ou execucao para usuario, grupo e outros.
- `400` Sem leitura/escrita, mas com execucao apenas para o usuario.
- `444` Sem escrita/execucao, mas leitura para todos.
- `600` Leitura e escrita apenas para o usuario.
- `644` Leitura para todos, escrita apenas para o usuario.
- `666` Leitura e escrita para todos.
- `755` Leitura/escrita/execucao para usuario, leitura/execucao para grupo e outros.
- `764` Leitura/escrita para usuario e grupo, leitura para outros.
- `777` Leitura/escrita/execucao para todos.
- `chgrp` Alterar grupo de arquivos/diretorios.
- `chgrpr` Alterar grupo recursivamente.
- `chgrpu` Alterar grupo recursivamente para o usuario atual.
- `chmod` Alterar bits de modo do arquivo.
- `chmodr` Alterar bits de modo recursivamente.
- `chmodu` Alterar bits de modo recursivamente para o usuario atual.
- `chmox` Tornar arquivo executavel.
- `chown` Alterar proprietario e grupo.
- `chownr` Alterar proprietario e grupo recursivamente.
- `chownu` Alterar proprietario e grupo recursivamente para o usuario atual.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
