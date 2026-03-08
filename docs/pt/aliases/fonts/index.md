---
title: "Aliases de Fontes: Gerenciamento de Cache de Fontes"
description: Aliases de shell para gerenciar fontes do sistema e atualizar cache de fontes no Linux e macOS. Compatível com macOS, Linux e WSL via Dotfiles.
lang: pt-BR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: "Aliases de Fontes: Gerenciamento de Cache de Fontes preview"
canonical: /pt/aliases/fonts/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "Aliases de Fontes: Gerenciamento de Cache de Fontes"
pageType: docs
schemaType: WebPage
metaTitle: Aliases de Fontes | Dotfiles
permalink: /pt/aliases/fonts/
sidebar: true
meta:
  - name: keywords
    content: aliases fontes, cache fontes, fc-cache, aliases shell, dotfiles
---

# Aliases de Fontes

Gerencie fontes do sistema e cache de fontes.

## Visão Geral

Estes aliases são definidos em `fonts.aliases.sh` e carregados automaticamente pelo Chezmoi.

## Referência

| Alias | Descrição |
|-------|-------------|
| `update-fonts` | Atualiza cache de fontes (`fc-cache -fv`) |
| `list-fonts` | Lista familias de fontes instaladas |

## Fontes Instaladas

- **JetBrainsMono Nerd Font**: Fonte principal do terminal
- **Symbols Nerd Font**: Fallback de icones
