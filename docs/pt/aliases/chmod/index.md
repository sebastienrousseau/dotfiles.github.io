---
title: "Aliases de Chmod: Atalhos de Permissão de Arquivo para Shell"
description: Simplifique o gerenciamento de permissões de arquivos e diretorios com aliases de chmod. Atalhos rapidos para padrões comuns de permissão como 755, 644 e mais.
lang: pt-BR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: "Aliases de Chmod: Atalhos de Permissão de Arquivo para Shell preview"
canonical: /pt/aliases/chmod/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "Aliases de Chmod: Atalhos de Permissão de Arquivo para Shell"
pageType: docs
schemaType: WebPage
metaTitle: Aliases de Chmod | Dotfiles
permalink: /pt/aliases/chmod/
sidebar: true
meta:
  - name: keywords
    content: aliases chmod, permissões de arquivo, atalhos shell, dotfiles, permissões unix
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Aliases de Chmod | Dotfiles
  - name: twitter:description
    content: Simplifique o gerenciamento de permissões de arquivos e diretorios com aliases de chmod.
  - name: og:title
    content: Aliases de Chmod | Dotfiles
  - name: og:description
    content: Simplifique o gerenciamento de permissões de arquivos e diretorios com aliases de chmod.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: pt_BR
---

# Aliases de Chmod

Atalhos para gerenciar permissões de arquivos e diretorios.

## Visão Geral

Os aliases de chmod fornecem uma maneira simplificada de gerenciar permissões de arquivos e diretorios pela linha de comando. Em vez de lembrar codigos de permissão numericos, use aliases intuitivos como `chmod_755` ou `chmod_u+x` para definir rapidamente o modo de acesso que voce precisa.

Estes aliases são definidos em `chmod.aliases.sh` e são carregados automaticamente pelo chezmoi.

## Referência

### Aliases de Permissão Comuns

| Alias | Permissões | Descrição |
|-------|-------------|-------------|
| `chmod_000` | `----------` | Sem permissões para ninguem |
| `chmod_400` | `r--------` | Somente leitura para o proprietario |
| `chmod_444` | `r--r--r--` | Somente leitura para todos |
| `chmod_600` | `rw-------` | Leitura/escrita para o proprietario |
| `chmod_644` | `rw-r--r--` | Leitura/escrita para o proprietario, somente leitura para outros |
| `chmod_666` | `rw-rw-rw-` | Leitura/escrita para todos |
| `chmod_755` | `rwxr-xr-x` | Total para proprietario, leitura/execução para outros |
| `chmod_764` | `rwxrw-r--` | Total para proprietario, leitura/escrita para o grupo |
| `chmod_777` | `rwxrwxrwx` | Permissões totais para todos |

### Aliases de Permissão do Proprietario

| Alias | Descrição |
|-------|-------------|
| `chmod_u+x` | Adicionar permissão de execução para o proprietario |
| `chmod_u-x` | Remover permissão de execução para o proprietario |
| `chmod_u+w` | Adicionar permissão de escrita para o proprietario |
| `chmod_u-w` | Remover permissão de escrita para o proprietario |
| `chmod_u+r` | Adicionar permissão de leitura para o proprietario |
| `chmod_u-r` | Remover permissão de leitura para o proprietario |

### Aliases de Permissão do Grupo

| Alias | Descrição |
|-------|-------------|
| `chmod_g+x` | Adicionar permissão de execução para o grupo |
| `chmod_g-x` | Remover permissão de execução para o grupo |
| `chmod_g+w` | Adicionar permissão de escrita para o grupo |
| `chmod_g-w` | Remover permissão de escrita para o grupo |
| `chmod_g+r` | Adicionar permissão de leitura para o grupo |
| `chmod_g-r` | Remover permissão de leitura para o grupo |

### Aliases de Permissão de Outros

| Alias | Descrição |
|-------|-------------|
| `chmod_o+x` | Adicionar permissão de execução para outros |
| `chmod_o-x` | Remover permissão de execução para outros |
| `chmod_o+w` | Adicionar permissão de escrita para outros |
| `chmod_o-w` | Remover permissão de escrita para outros |
| `chmod_o+r` | Adicionar permissão de leitura para outros |
| `chmod_o-r` | Remover permissão de leitura para outros |

### Aliases de Tipo de Arquivo

| Alias | Descrição |
|-------|-------------|
| `chmod_755d` | Definir permissões de todos os diretorios para `rwxr-xr-x` |
| `chmod_644f` | Definir permissões de todos os arquivos para `rw-r--r--` |

### Funcao de Permissão Recursiva

A funcao `change_permission` aplica permissões recursivamente com um prompt de confirmacao:

```bash
change_permission 755 /path/to/directory -R
```
