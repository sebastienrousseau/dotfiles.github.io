---
title: "Aliases de Chmod: Atalhos de Permissao de Arquivo para Shell"
description: "Simplifique o gerenciamento de permissoes de arquivos e diretorios com aliases de chmod. Atalhos rapidos para padroes comuns de permissao como 755, 644 e mais."
lang: pt-BR
metaTitle: "Aliases de Chmod | Dotfiles"
permalink: /pt/aliases/chmod/
sidebar: true
meta:
  - name: keywords
    content: "aliases chmod, permissoes de arquivo, atalhos shell, dotfiles, permissoes unix"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Aliases de Chmod | Dotfiles
  - name: twitter:description
    content: Simplifique o gerenciamento de permissoes de arquivos e diretorios com aliases de chmod.
  - name: og:title
    content: Aliases de Chmod | Dotfiles
  - name: og:description
    content: Simplifique o gerenciamento de permissoes de arquivos e diretorios com aliases de chmod.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: pt_BR
---

# Aliases de Chmod

Atalhos para gerenciar permissoes de arquivos e diretorios.

## Visao Geral

Os aliases de chmod fornecem uma maneira simplificada de gerenciar permissoes de arquivos e diretorios pela linha de comando. Em vez de lembrar codigos de permissao numericos, use aliases intuitivos como `chmod_755` ou `chmod_u+x` para definir rapidamente o modo de acesso que voce precisa.

Estes aliases sao definidos em `chmod.aliases.sh` e sao carregados automaticamente pelo chezmoi.

## Referencia

### Aliases de Permissao Comuns

| Alias | Permissoes | Descricao |
|-------|-------------|-------------|
| `chmod_000` | `----------` | Sem permissoes para ninguem |
| `chmod_400` | `r--------` | Somente leitura para o proprietario |
| `chmod_444` | `r--r--r--` | Somente leitura para todos |
| `chmod_600` | `rw-------` | Leitura/escrita para o proprietario |
| `chmod_644` | `rw-r--r--` | Leitura/escrita para o proprietario, somente leitura para outros |
| `chmod_666` | `rw-rw-rw-` | Leitura/escrita para todos |
| `chmod_755` | `rwxr-xr-x` | Total para proprietario, leitura/execucao para outros |
| `chmod_764` | `rwxrw-r--` | Total para proprietario, leitura/escrita para o grupo |
| `chmod_777` | `rwxrwxrwx` | Permissoes totais para todos |

### Aliases de Permissao do Proprietario

| Alias | Descricao |
|-------|-------------|
| `chmod_u+x` | Adicionar permissao de execucao para o proprietario |
| `chmod_u-x` | Remover permissao de execucao para o proprietario |
| `chmod_u+w` | Adicionar permissao de escrita para o proprietario |
| `chmod_u-w` | Remover permissao de escrita para o proprietario |
| `chmod_u+r` | Adicionar permissao de leitura para o proprietario |
| `chmod_u-r` | Remover permissao de leitura para o proprietario |

### Aliases de Permissao do Grupo

| Alias | Descricao |
|-------|-------------|
| `chmod_g+x` | Adicionar permissao de execucao para o grupo |
| `chmod_g-x` | Remover permissao de execucao para o grupo |
| `chmod_g+w` | Adicionar permissao de escrita para o grupo |
| `chmod_g-w` | Remover permissao de escrita para o grupo |
| `chmod_g+r` | Adicionar permissao de leitura para o grupo |
| `chmod_g-r` | Remover permissao de leitura para o grupo |

### Aliases de Permissao de Outros

| Alias | Descricao |
|-------|-------------|
| `chmod_o+x` | Adicionar permissao de execucao para outros |
| `chmod_o-x` | Remover permissao de execucao para outros |
| `chmod_o+w` | Adicionar permissao de escrita para outros |
| `chmod_o-w` | Remover permissao de escrita para outros |
| `chmod_o+r` | Adicionar permissao de leitura para outros |
| `chmod_o-r` | Remover permissao de leitura para outros |

### Aliases de Tipo de Arquivo

| Alias | Descricao |
|-------|-------------|
| `chmod_755d` | Definir permissoes de todos os diretorios para `rwxr-xr-x` |
| `chmod_644f` | Definir permissoes de todos os arquivos para `rw-r--r--` |

### Funcao de Permissao Recursiva

A funcao `change_permission` aplica permissoes recursivamente com um prompt de confirmacao:

```bash
change_permission 755 /path/to/directory -R
```
