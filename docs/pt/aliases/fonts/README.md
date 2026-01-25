---
title: "Aliases de Fontes: Gerenciamento de Cache de Fontes"
description: "Aliases de shell para gerenciar fontes do sistema e atualizar cache de fontes no Linux e macOS."
lang: pt-BR
metaTitle: "Aliases de Fontes | Dotfiles"
permalink: /pt/aliases/fonts/
sidebar: true
meta:
  - name: keywords
    content: "aliases fontes, cache fontes, fc-cache, aliases shell, dotfiles"
---

# Aliases de Fontes

Gerencie fontes do sistema e cache de fontes.

## Visao Geral

Estes aliases sao definidos em `fonts.aliases.sh` e carregados automaticamente pelo Chezmoi.

## Referencia

| Alias | Descricao |
|-------|-------------|
| `update-fonts` | Atualiza cache de fontes (`fc-cache -fv`) |
| `list-fonts` | Lista familias de fontes instaladas |

## Fontes Instaladas

- **JetBrainsMono Nerd Font**: Fonte principal do terminal
- **Symbols Nerd Font**: Fallback de icones
