---
title: "Aliases Modernos: Substituicoes Rust para Ferramentas Unix"
description: "Aliases de shell para ferramentas modernas baseadas em Rust. Use eza, bat e ripgrep como substituicoes para ls, cat e grep."
lang: pt-BR
metaTitle: "Aliases Modernos | Dotfiles"
permalink: /pt/aliases/modern/
sidebar: true
meta:
  - name: keywords
    content: "aliases modernos, eza, bat, ripgrep, rust, aliases shell, dotfiles"
---

# Aliases de Modern Tooling

Substituicoes modernas para ferramentas Unix legadas (baseadas em Rust).

## Visao Geral

Estes aliases sao definidos em `modern.aliases.sh` e carregados automaticamente pelo Chezmoi.

## Referencia

### Listagem de Arquivos (eza)

Se `eza` estiver instalado (substitui `ls`):

| Alias | Descricao |
|-------|-------------|
| `ls` | Listar arquivos (`eza --icons`) |
| `ll` | Lista longa (`eza -alF`) |
| `la` | Listar tudo (`eza -a`) |
| `lt` | Arvore (`eza --tree`) |

*(Usa `ls` padrao se `eza` nao estiver instalado)*

### Conteudo de Arquivo (bat)

Se `bat` estiver instalado (substitui `cat`):

| Alias | Descricao |
|-------|-------------|
| `cat` | Mostrar conteudo com syntax highlight |

### Busca (rg)

Se `rg` estiver instalado (substitui `grep`):

| Alias | Descricao |
|-------|-------------|
| `grep` | Busca com Ripgrep |
