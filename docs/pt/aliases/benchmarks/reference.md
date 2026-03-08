---
title: Apêndice de referência Benchmarks | Dotfiles
description: Referência completa de alias e funções auxiliares para Benchmarks no Dotfiles v0.2.495. Inclui cada atalho, exemplo de uso e função shell para macOS, Linux e WSL.
lang: pt-BR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Apêndice de referência Benchmarks | Dotfiles preview
canonical: /pt/aliases/benchmarks/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Benchmarks Reference
pageType: docs
schemaType: WebPage
metaTitle: Benchmarks Reference | Dotfiles
permalink: /pt/aliases/benchmarks/reference/
sidebar: true
meta:
  - name: keywords
    content: benchmarks, referência, alias, shell, bash, zsh, dotfiles, chezmoi
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Referência completa de alias para Benchmarks no Dotfiles v0.2.495.
  - name: twitter:title
    content: Benchmarks Reference | Dotfiles
  - name: og:title
    content: Benchmarks Reference | Dotfiles
  - name: og:description
    content: Referência completa de alias para Benchmarks no Dotfiles v0.2.495.
  - name: og:image:alt
    content: Dotfiles – Projetados para se adaptar à sua vida no shell
  - name: og:locale
    content: pt_BR
---

# Apêndice de referência Benchmarks

## Arquivos fonte

- `.chezmoitemplates/aliases/benchmarks/benchmarks.aliases.sh`

## Referência de alias

| Alias | Comando |
| :--- | :--- |
| `bench` | `hyperfine` |
| `benchw` | `hyperfine --warmup 3` |

## Validação

- Execute `chezmoi apply` após atualizar os alias.
- Execute `dot doctor` para validar o estado do seu shell.
