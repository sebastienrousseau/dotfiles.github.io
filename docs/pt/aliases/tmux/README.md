---
title: "Aliases de Tmux: Multiplexador de Terminal"
description: "Aliases de shell para tmux. Gerencie sessoes, janelas e panes do terminal com comandos curtos."
lang: pt-BR
metaTitle: "Aliases de Tmux | Dotfiles"
permalink: /pt/aliases/tmux/
sidebar: true
meta:
  - name: keywords
    content: "aliases tmux, terminal, multiplexador, sessoes, aliases shell, dotfiles"
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Aliases de shell para tmux. Gerencie sessoes, janelas e panes do terminal com comandos curtos.
  - name: twitter:title
    content: Aliases de Tmux | Dotfiles
  - name: og:title
    content: Aliases de Tmux | Dotfiles
  - name: og:description
    content: Aliases de shell para tmux. Gerencie sessoes, janelas e panes do terminal com comandos curtos.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: pt_BR
---

# Aliases de Tmux

Gerencie sessoes do terminal com o multiplexador tmux.

## Visao Geral

Estes aliases sao definidos em `tmux.aliases.sh` e carregados automaticamente pelo Chezmoi.

## Referencia

| Alias | Descricao |
|-------|-------------|
| `tm` | Iniciar tmux |
| `tma` | Anexar a ultima sessao |
| `tmat` | Anexar a uma sessao especifica |
| `tmks` | Encerrar todas as sessoes exceto a atual |
| `tmka` | Encerrar todas as sessoes (servidor) |
| `tml` | Listar todas as sessoes |
| `tmn` | Nova sessao sem nome |
| `tms` | Nova sessao com nome |
| `tmr` | Recarregar configuracao tmux |
| `tmls` | Listar janelas |
| `tmlp` | Listar panes |
| `tmi` | Mostrar info do tmux |

## Recursos-chave

- Esquema de cores moderno com barra de status por sistema
- Atalhos intuitivos com Ctrl+a como prefixo
- Controles completos de janelas e panes
- Persistencia de sessoes com tmux-resurrect e tmux-continuum
- Menu de ajuda rolavel (Ctrl+a ?)
- Suporte a mouse para navegacao

## Navegacao

Pressione `Ctrl+a ?` para ver todos os atalhos.
