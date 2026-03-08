---
title: "Aliases de Permissão: Atalhos para chmod e chown"
description: Aliases de shell para gerenciamento de permissões de arquivo. Atalhos para padrões comuns de permissão como 755, 644 e mais.
lang: pt-BR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: "Aliases de Permissão: Atalhos para chmod e chown preview"
canonical: /pt/aliases/permission/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "Aliases de Permissão: Atalhos para chmod e chown"
pageType: docs
schemaType: WebPage
metaTitle: Aliases de Permissão | Dotfiles
permalink: /pt/aliases/permission/
sidebar: true
meta:
  - name: keywords
    content: aliases permissão, chmod, chown, permissões arquivo, aliases shell, dotfiles
---

# Aliases de Permissão

Atalhos para gerenciamento de permissões de arquivo.

## Visão Geral

Estes aliases são definidos em `permission.aliases.sh` e carregados automaticamente pelo Chezmoi.

## Referência

### Permissões Numericas

| Alias | Descrição |
|-------|-------------|
| `000` | Sem leitura, escrita ou execução para usuario, grupo e outros |
| `400` | Sem leitura/escrita, mas com execução apenas para o usuario |
| `444` | Sem escrita/execução, mas leitura para todos |
| `600` | Leitura e escrita apenas para o usuario |
| `644` | Leitura para todos, escrita apenas para o usuario |
| `666` | Leitura e escrita para todos |
| `755` | Leitura/escrita/execução para usuario, leitura/execução para grupo e outros |
| `764` | Leitura/escrita para usuario e grupo, leitura para outros |
| `777` | Leitura/escrita/execução para todos |

### Comandos de Permissão

| Alias | Descrição |
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
