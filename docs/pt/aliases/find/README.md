---
title: "Aliases de Find: Busca de Arquivos com fd"
description: "Aliases de shell para busca de arquivos usando fd, uma alternativa moderna e rapida ao find. Busque arquivos e diretorios facilmente."
lang: pt-BR
metaTitle: "Aliases de Find | Dotfiles"
permalink: /pt/aliases/find/
sidebar: true
meta:
  - name: keywords
    content: "aliases find, fd, busca arquivos, aliases shell, dotfiles"
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Aliases de shell para busca de arquivos usando fd, uma alternativa moderna e rapida ao find.
  - name: twitter:title
    content: Aliases de Find | Dotfiles
  - name: og:title
    content: Aliases de Find | Dotfiles
  - name: og:description
    content: Aliases de shell para busca de arquivos usando fd, uma alternativa moderna e rapida ao find.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: pt_BR
---

# Aliases de Find

Busque arquivos e diretorios com fd, uma alternativa moderna ao find.

## Visao Geral

Estes aliases sao definidos em `find.aliases.sh` e carregados automaticamente pelo Chezmoi. Eles utilizam `fd`, uma ferramenta simples, rapida e amigavel para buscar arquivos e diretorios.

## Referencia

| Alias | Descricao |
|-------|-------------|
| `fd` | Alias padrao para `fd --color always`, lista com cores |
| `fda` | Lista arquivos com caminhos absolutos |
| `fdc` | Busca sem diferenciar maiusculas |
| `fdd` | Lista arquivos com detalhes |
| `fde` | Lista arquivos com extensao especifica |
| `fdf` | Lista arquivos seguindo links simbolicos |
| `fdh` | Mostra ajuda do `fd` |
| `fdh` | Lista arquivos, incluindo ocultos |
| `fdn` | Lista arquivos que combinam com glob |
| `fdo` | Lista arquivos com informacao do proprietario |
| `fds` | Lista arquivos com tamanho |
| `fdu` | Lista arquivos com regras de exclusao |
| `fdv` | Mostra versao do `fd` |
| `fdx` | Executa um comando para cada resultado |
