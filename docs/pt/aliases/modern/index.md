---
title: "Aliases Modernos: Substituições Rust para Ferramentas Unix"
description: Aliases de shell para ferramentas modernas baseadas em Rust. Use eza, bat e ripgrep como substituições para ls, cat e grep.
lang: pt-BR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: "Aliases Modernos: Substituições Rust para Ferramentas Unix preview"
canonical: /pt/aliases/modern/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "Aliases Modernos: Substituições Rust para Ferramentas Unix"
pageType: docs
schemaType: WebPage
metaTitle: Aliases Modernos | Dotfiles
permalink: /pt/aliases/modern/
sidebar: true
meta:
  - name: keywords
    content: aliases modernos, eza, bat, ripgrep, rust, aliases shell, dotfiles
---

# Aliases de Modern Tooling

Substituições modernas para ferramentas Unix legadas (baseadas em Rust).

## Visão Geral

Estes aliases são definidos em `modern.aliases.sh` e carregados automaticamente pelo Chezmoi.

## Referência

### Listagem de Arquivos (eza)

Se `eza` estiver instalado (substitui `ls`):

| Alias | Descrição |
|-------|-------------|
| `ls` | Listar arquivos (`eza --icons`) |
| `ll` | Lista longa (`eza -alF`) |
| `la` | Listar tudo (`eza -a`) |
| `lt` | Arvore (`eza --tree`) |

*(Usa `ls` padrão se `eza` não estiver instalado)*

### Conteudo de Arquivo (bat)

Se `bat` estiver instalado (substitui `cat`):

| Alias | Descrição |
|-------|-------------|
| `cat` | Mostrar conteudo com syntax highlight |

### Busca (rg)

Se `rg` estiver instalado (substitui `grep`):

| Alias | Descrição |
|-------|-------------|
| `grep` | Busca com Ripgrep |
