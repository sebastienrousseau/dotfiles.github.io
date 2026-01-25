---
title: "Aliases de Uso de Disco: Analise de Armazenamento"
description: "Aliases de shell para analise de uso de disco. Visualize tamanhos de arquivos e diretorios em formato legivel."
lang: pt-BR
metaTitle: "Aliases de Uso de Disco | Dotfiles"
permalink: /pt/aliases/disk-usage/
sidebar: true
meta:
  - name: keywords
    content: "aliases uso disco, du, armazenamento, sistema arquivos, dotfiles, linux, macos, shell"
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Aliases de shell para analise de uso de disco. Visualize tamanhos de arquivos e diretorios em formato legivel.
  - name: twitter:title
    content: Aliases de Uso de Disco | Dotfiles
  - name: og:title
    content: Aliases de Uso de Disco | Dotfiles
  - name: og:description
    content: Aliases de shell para analise de uso de disco. Visualize tamanhos de arquivos e diretorios em formato legivel.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: pt_BR
---

# Aliases de Uso de Disco

Analise o uso de disco com comandos simples e legibilidade humana.

## Visao Geral

Estes aliases sao definidos em `disk-usage.aliases.sh` e carregados automaticamente pelo Chezmoi.

## Referencia

| Alias | Descricao |
|-------|-------------|
| `du` | Executar `du -h` no diretorio atual |
| `du1` | Listar uso de disco do primeiro nivel, ordenado por tamanho |
| `ducks` | Mostrar os 10 maiores consumidores de espaco no diretorio atual |
| `duf` | Mostrar uso de disco de arquivos com profundidade 1 |
| `dufi` | Como `duf`, ordenado de maior para menor |
| `duh` | Mostrar uso total do diretorio atual, legivel |
| `dui` | Mostrar uso de disco e inode, ordenado |
| `dul` | Listar diretorios ordenados por tamanho |
| `duls` | Listar uso de disco do diretorio atual, ordenado por tamanho |
| `dus` | Mostrar uso de disco do diretorio atual, ordenado por tamanho |
