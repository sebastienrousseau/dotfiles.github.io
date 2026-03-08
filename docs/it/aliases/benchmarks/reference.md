---
title: Appendice di riferimento Benchmarks | Dotfiles
description: Riferimento completo degli alias e delle funzioni ausiliarie per Benchmarks in Dotfiles v0.2.495. Include ogni scorciatoia, esempio d'uso e funzione shell per macOS, Linux e WSL.
lang: it-IT
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Appendice di riferimento Benchmarks | Dotfiles preview
canonical: /it/aliases/benchmarks/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Benchmarks Reference
pageType: docs
schemaType: WebPage
metaTitle: Benchmarks Reference | Dotfiles
permalink: /it/aliases/benchmarks/reference/
sidebar: true
meta:
  - name: keywords
    content: benchmarks, riferimento, alias, shell, bash, zsh, dotfiles, chezmoi
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Riferimento completo degli alias per Benchmarks in Dotfiles v0.2.495.
  - name: twitter:title
    content: Benchmarks Reference | Dotfiles
  - name: og:title
    content: Benchmarks Reference | Dotfiles
  - name: og:description
    content: Riferimento completo degli alias per Benchmarks in Dotfiles v0.2.495.
  - name: og:image:alt
    content: Dotfiles – Progettati per adattarsi alla tua vita nella shell
  - name: og:locale
    content: it_IT
---

# Appendice di riferimento Benchmarks

## File sorgente

- `.chezmoitemplates/aliases/benchmarks/benchmarks.aliases.sh`

## Riferimento alias

| Alias | Comando |
| :--- | :--- |
| `bench` | `hyperfine` |
| `benchw` | `hyperfine --warmup 3` |

## Validazione

- Esegui `chezmoi apply` dopo l'aggiornamento degli alias.
- Esegui `dot doctor` per verificare lo stato della shell.
