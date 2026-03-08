---
title: System Alias | Dotfiles
description: Explore los alias de System en Dotfiles v0.2.495. Comandos cortos y fáciles de recordar para flujos de trabajo de system en macOS, Linux y WSL.
lang: es-ES
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: System Alias | Dotfiles preview
canonical: /es/aliases/system/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System Alias
pageType: docs
schemaType: WebPage
metaTitle: System Alias | Dotfiles
permalink: /es/aliases/system/
sidebar: true
meta:
  - name: keywords
    content: system, alias, shell, bash, zsh, dotfiles, chezmoi, comandos system
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Explore los alias de System en Dotfiles v0.2.495. Comandos cortos para flujos de trabajo de system.
  - name: twitter:title
    content: System Alias | Dotfiles
  - name: og:title
    content: System Alias | Dotfiles
  - name: og:description
    content: Explore los alias de System en Dotfiles v0.2.495. Comandos cortos para flujos de trabajo de system.
  - name: og:image:alt
    content: Dotfiles – Diseñados para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---

# System Alias

Comandos cortos de system.

Esta página presenta un grupo de alias y sus atajos de comandos habituales. Léala primero para comprender las convenciones de nombres, las entradas esperadas y los patrones de ejecución seguros. Luego abra el apéndice de referencia para el inventario completo de comandos y la sintaxis exacta. Estos alias reducen la escritura repetitiva y mantienen un comportamiento de flujo de trabajo coherente en macOS, Linux y WSL.

## Cuándo usar

Use esta página antes del trabajo diario con el shell cuando necesite patrones de comandos predecibles.

## Qué incluye

- Alias: 24
- Funciones auxiliares: 0
- Archivos fuente: 1

## Ejemplos rápidos

- `h` → `history`
- `p` → `pwd`
- `path` → `echo -e ${PATH//:/\\n}`
- `ports` → `netstat -tulanp`
- `top` → `sudo btop`
- `now` → `date +"%T"`
- `nowdate` → `date +"%d-%m-%Y"`
- `wget` → `wget -c`
- `speedtest` → `curl -s ... | python3 -`
- `ping` → `ping -c 5`
- `fastping` → `ping -c 100 -s 1`
- `localip` → `ipconfig getifaddr en0`

## Siguiente paso

Abrir la lista completa:

- [Apéndice de referencia de System](./reference.md)
