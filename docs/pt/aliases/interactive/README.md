---
title: "Aliases Interativos: Operacoes Seguras com Confirmacao"
description: "Aliases de shell interativos para operacoes potencialmente destrutivas. Confirmacao antes de sobrescrever ou remover arquivos."
lang: pt-BR
metaTitle: "Aliases Interativos | Dotfiles"
permalink: /pt/aliases/interactive/
sidebar: true
meta:
  - name: keywords
    content: "aliases interativos, confirmacao, seguranca, cp, mv, rm, aliases shell, dotfiles"
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Aliases de shell interativos para operacoes potencialmente destrutivas. Confirmacao antes de sobrescrever ou remover arquivos.
  - name: twitter:title
    content: Aliases Interativos | Dotfiles
  - name: og:title
    content: Aliases Interativos | Dotfiles
  - name: og:description
    content: Aliases de shell interativos para operacoes potencialmente destrutivas. Confirmacao antes de sobrescrever ou remover arquivos.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: pt_BR
---

# Aliases Interativos

Aliases interativos para operacoes seguras no terminal.

## Visao Geral

Estes aliases sao definidos em `interactive.aliases.sh` e carregados automaticamente pelo Chezmoi. Eles adicionam prompts de confirmacao antes de operacoes potencialmente destrutivas.

## Referencia

### Operacoes de Arquivo

| Alias | Descricao |
|-------|-------------|
| `cp` | Copiar arquivos interativamente (perguntar antes de sobrescrever) |
| `del` | Remover arquivos/diretorios interativamente com saida detalhada |
| `ln` | Criar links simbolicos interativamente (perguntar antes de sobrescrever) |
| `mv` | Mover/renomear arquivos interativamente (perguntar antes de sobrescrever) |
| `rm` | Remover arquivos interativamente (perguntar antes de cada remocao) |
| `zap` | Alias para 'rm', remove interativamente |

### Lixeira

| Alias | Descricao |
|-------|-------------|
| `bin` | Remover todos os arquivos da lixeira (.Trash) |

### Utilitarios

| Alias | Descricao |
|-------|-------------|
| `chmod` | Alterar permissoes com saida detalhada |
| `chown` | Alterar proprietario e grupo com saida detalhada |
| `diff` | Comparar e mostrar diferencas em formato unificado |
| `grep` | Buscar padrao com numeros de linha e sem diferenciar maiusculas |
| `mkdir` | Criar diretorio e pais se necessario, com saida detalhada |
