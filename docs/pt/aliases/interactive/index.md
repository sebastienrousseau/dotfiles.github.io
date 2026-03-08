---
title: "Aliases Interativos: Operações Seguras com Confirmação"
description: Aliases de shell interativos para operações potencialmente destrutivas. Confirmação antes de sobrescrever ou remover arquivos.
lang: pt-BR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: "Aliases Interativos: Operações Seguras com Confirmação preview"
canonical: /pt/aliases/interactive/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "Aliases Interativos: Operações Seguras com Confirmação"
pageType: docs
schemaType: WebPage
metaTitle: Aliases Interativos | Dotfiles
permalink: /pt/aliases/interactive/
sidebar: true
meta:
  - name: keywords
    content: aliases interativos, confirmacao, seguranca, cp, mv, rm, aliases shell, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Aliases de shell interativos para operações potencialmente destrutivas. Confirmação antes de sobrescrever ou remover arquivos.
  - name: twitter:title
    content: Aliases Interativos | Dotfiles
  - name: og:title
    content: Aliases Interativos | Dotfiles
  - name: og:description
    content: Aliases de shell interativos para operações potencialmente destrutivas. Confirmação antes de sobrescrever ou remover arquivos.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: pt_BR
---

# Aliases Interativos

Aliases interativos para operações seguras no terminal.

## Visão Geral

Estes aliases são definidos em `interactive.aliases.sh` e carregados automaticamente pelo Chezmoi. Eles adicionam prompts de confirmacao antes de operações potencialmente destrutivas.

## Referência

### Operações de Arquivo

| Alias | Descrição |
|-------|-------------|
| `cp` | Copiar arquivos interativamente (perguntar antes de sobrescrever) |
| `del` | Remover arquivos/diretorios interativamente com saida detalhada |
| `ln` | Criar links simbolicos interativamente (perguntar antes de sobrescrever) |
| `mv` | Mover/renomear arquivos interativamente (perguntar antes de sobrescrever) |
| `rm` | Remover arquivos interativamente (perguntar antes de cada remocao) |
| `zap` | Alias para 'rm', remove interativamente |

### Lixeira

| Alias | Descrição |
|-------|-------------|
| `bin` | Remover todos os arquivos da lixeira (.Trash) |

### Utilitarios

| Alias | Descrição |
|-------|-------------|
| `chmod` | Alterar permissões com saida detalhada |
| `chown` | Alterar proprietario e grupo com saida detalhada |
| `diff` | Comparar e mostrar diferencas em formato unificado |
| `grep` | Buscar padrão com numeros de linha e sem diferenciar maiusculas |
| `mkdir` | Criar diretorio e pais se necessario, com saida detalhada |
