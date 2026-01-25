---
title: "Aliases de Permissao: Atalhos para chmod e chown"
description: "Aliases de shell para gerenciamento de permissoes de arquivo. Atalhos para padroes comuns de permissao como 755, 644 e mais."
lang: pt-BR
metaTitle: "Aliases de Permissao | Dotfiles"
permalink: /pt/aliases/permission/
sidebar: true
meta:
  - name: keywords
    content: "aliases permissao, chmod, chown, permissoes arquivo, aliases shell, dotfiles"
---

# Aliases de Permissao

Atalhos para gerenciamento de permissoes de arquivo.

## Visao Geral

Estes aliases sao definidos em `permission.aliases.sh` e carregados automaticamente pelo Chezmoi.

## Referencia

### Permissoes Numericas

| Alias | Descricao |
|-------|-------------|
| `000` | Sem leitura, escrita ou execucao para usuario, grupo e outros |
| `400` | Sem leitura/escrita, mas com execucao apenas para o usuario |
| `444` | Sem escrita/execucao, mas leitura para todos |
| `600` | Leitura e escrita apenas para o usuario |
| `644` | Leitura para todos, escrita apenas para o usuario |
| `666` | Leitura e escrita para todos |
| `755` | Leitura/escrita/execucao para usuario, leitura/execucao para grupo e outros |
| `764` | Leitura/escrita para usuario e grupo, leitura para outros |
| `777` | Leitura/escrita/execucao para todos |

### Comandos de Permissao

| Alias | Descricao |
|-------|-------------|
| `chgrp` | Alterar grupo de arquivos/diretorios |
| `chgrpr` | Alterar grupo recursivamente |
| `chgrpu` | Alterar grupo recursivamente para o usuario atual |
| `chmod` | Alterar bits de modo do arquivo |
| `chmodr` | Alterar bits de modo recursivamente |
| `chmodu` | Alterar bits de modo recursivamente para o usuario atual |
| `chmox` | Tornar arquivo executavel |
| `chown` | Alterar proprietario e grupo |
| `chownr` | Alterar proprietario e grupo recursivamente |
| `chownu` | Alterar proprietario e grupo recursivamente para o usuario atual |
