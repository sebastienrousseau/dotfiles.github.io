---
title: "Aliases de Tmux: Multiplexador de Terminal"
description: Aliases de shell para tmux. Gerencie sessões, janelas e panes do terminal com comandos curtos. Compatível com macOS, Linux e WSL via Dotfiles.
lang: pt-BR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: "Aliases de Tmux: Multiplexador de Terminal preview"
canonical: /pt/aliases/tmux/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "Aliases de Tmux: Multiplexador de Terminal"
pageType: docs
schemaType: WebPage
metaTitle: Aliases de Tmux | Dotfiles
permalink: /pt/aliases/tmux/
sidebar: true
meta:
  - name: keywords
    content: aliases tmux, terminal, multiplexador, sessões, aliases shell, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Aliases de shell para tmux. Gerencie sessões, janelas e panes do terminal com comandos curtos.
  - name: twitter:title
    content: Aliases de Tmux | Dotfiles
  - name: og:title
    content: Aliases de Tmux | Dotfiles
  - name: og:description
    content: Aliases de shell para tmux. Gerencie sessões, janelas e panes do terminal com comandos curtos.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: pt_BR
---

# Aliases de Tmux

Gerencie sessões do terminal com o multiplexador tmux.

## Visão Geral

Estes aliases são definidos em `tmux.aliases.sh` e carregados automaticamente pelo Chezmoi.

## Referência

| Alias | Descrição |
|-------|-------------|
| `tm` | Iniciar tmux |
| `tma` | Anexar a ultima sessão |
| `tmat` | Anexar a uma sessão especifica |
| `tmks` | Encerrar todas as sessões exceto a atual |
| `tmka` | Encerrar todas as sessões (servidor) |
| `tml` | Listar todas as sessões |
| `tmn` | Nova sessão sem nome |
| `tms` | Nova sessão com nome |
| `tmr` | Recarregar configuração tmux |
| `tmls` | Listar janelas |
| `tmlp` | Listar panes |
| `tmi` | Mostrar info do tmux |

## Recursos-chave

- Esquema de cores moderno com barra de status por sistema
- Atalhos intuitivos com Ctrl+a como prefixo
- Controles completos de janelas e panes
- Persistencia de sessões com tmux-resurrect e tmux-continuum
- Menu de ajuda rolavel (Ctrl+a ?)
- Suporte a mouse para navegação

## Navegacao

Pressione `Ctrl+a ?` para ver todos os atalhos.
