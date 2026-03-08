---
title: System Alias | Dotfiles
description: Explore os alias de System no Dotfiles v0.2.495. Comandos curtos e fáceis de lembrar para workflows system no macOS, Linux e WSL.
lang: pt-BR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: System Alias | Dotfiles preview
canonical: /pt/aliases/system/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System Alias
pageType: docs
schemaType: WebPage
metaTitle: System Alias | Dotfiles
permalink: /pt/aliases/system/
sidebar: true
meta:
  - name: keywords
    content: system, alias, shell, bash, zsh, dotfiles, chezmoi, comandos system
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Explore os alias de System no Dotfiles v0.2.495. Comandos curtos para workflows system.
  - name: twitter:title
    content: System Alias | Dotfiles
  - name: og:title
    content: System Alias | Dotfiles
  - name: og:description
    content: Explore os alias de System no Dotfiles v0.2.495. Comandos curtos para workflows system.
  - name: og:image:alt
    content: Dotfiles – Projetados para se adaptar à sua vida no shell
  - name: og:locale
    content: pt_BR
---

# System Alias

Comandos curtos de system.

Esta página apresenta um grupo de alias e seus atalhos de comandos comuns. Leia-a primeiro para entender as convenções de nomenclatura, as entradas esperadas e os padrões de execução seguros. Em seguida, abra o apêndice de referência para o inventário completo de comandos e a sintaxe exata. Esses alias reduzem a digitação repetitiva e mantêm um comportamento de workflow consistente no macOS, Linux e WSL.

## Quando usar

Use esta página antes do trabalho diário com o shell quando precisar de padrões de comandos confiáveis.

## O que está incluído

- Alias: 24
- Funções auxiliares: 0
- Arquivos fonte: 1

## Exemplos rápidos

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

## Próximo passo

Abrir a lista completa:

- [Apêndice de referência System](./reference.md)
