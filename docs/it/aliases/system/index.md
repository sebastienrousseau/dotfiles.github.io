---
title: System Alias | Dotfiles
description: Esplora gli alias System in Dotfiles v0.2.495. Comandi brevi e facili da ricordare per i workflow system su macOS, Linux e WSL.
lang: it-IT
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: System Alias | Dotfiles preview
canonical: /it/aliases/system/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System Alias
pageType: docs
schemaType: WebPage
metaTitle: System Alias | Dotfiles
permalink: /it/aliases/system/
sidebar: true
meta:
  - name: keywords
    content: system, alias, shell, bash, zsh, dotfiles, chezmoi, comandi system
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Esplora gli alias System in Dotfiles v0.2.495. Comandi brevi per i workflow system.
  - name: twitter:title
    content: System Alias | Dotfiles
  - name: og:title
    content: System Alias | Dotfiles
  - name: og:description
    content: Esplora gli alias System in Dotfiles v0.2.495. Comandi brevi per i workflow system.
  - name: og:image:alt
    content: Dotfiles – Progettati per adattarsi alla tua vita nella shell
  - name: og:locale
    content: it_IT
---

# System Alias

Comandi system brevi.

Questa pagina presenta un gruppo di alias e le sue scorciatoie di comando più comuni. Leggila prima per comprendere le convenzioni di denominazione, gli input previsti e i pattern di esecuzione sicuri. Poi apri l'appendice di riferimento per l'inventario completo dei comandi e la sintassi esatta. Questi alias riducono la digitazione ripetitiva e garantiscono un comportamento di workflow coerente su macOS, Linux e WSL.

## Quando usare

Usa questa pagina prima del lavoro quotidiano con la shell quando hai bisogno di pattern di comandi affidabili.

## Contenuto

- Alias: 24
- Funzioni ausiliarie: 0
- File sorgente: 1

## Esempi rapidi

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

## Prossimo passo

Apri la lista completa:

- [Appendice di riferimento System](./reference.md)
