---
title: Apéndice de referencia de Benchmarks | Dotfiles
description: Referencia completa de alias y funciones auxiliares para Benchmarks en Dotfiles v0.2.495. Incluye cada atajo, ejemplo de uso y función de shell para macOS, Linux y WSL.
lang: es-ES
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Apéndice de referencia de Benchmarks | Dotfiles preview
canonical: /es/aliases/benchmarks/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Benchmarks Reference
pageType: docs
schemaType: WebPage
metaTitle: Benchmarks Reference | Dotfiles
permalink: /es/aliases/benchmarks/reference/
sidebar: true
meta:
  - name: keywords
    content: benchmarks, referencia, alias, shell, bash, zsh, dotfiles, chezmoi
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Referencia completa de alias para Benchmarks en Dotfiles v0.2.495.
  - name: twitter:title
    content: Benchmarks Reference | Dotfiles
  - name: og:title
    content: Benchmarks Reference | Dotfiles
  - name: og:description
    content: Referencia completa de alias para Benchmarks en Dotfiles v0.2.495.
  - name: og:image:alt
    content: Dotfiles – Diseñados para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Apéndice de referencia de Benchmarks

## Archivos fuente

- `.chezmoitemplates/aliases/benchmarks/benchmarks.aliases.sh`

## Referencia de alias

| Alias | Comando |
| :--- | :--- |
| `bench` | `hyperfine` |
| `benchw` | `hyperfine --warmup 3` |

## Validación

- Ejecute `chezmoi apply` después de actualizar los alias.
- Ejecute `dot doctor` para validar el estado de su shell.
