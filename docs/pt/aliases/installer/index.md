---
title: "Aliases de Instalador: Bootstrap e Deploy Remoto"
description: Aliases de shell para bootstrapping e deploy remoto de dotfiles. Execute o script de instalacao ou teletransporte configuração para servidores.
lang: pt-BR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: "Aliases de Instalador: Bootstrap e Deploy Remoto preview"
canonical: /pt/aliases/installer/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "Aliases de Instalador: Bootstrap e Deploy Remoto"
pageType: docs
schemaType: WebPage
metaTitle: Aliases de Instalador | Dotfiles
permalink: /pt/aliases/installer/
sidebar: true
meta:
  - name: keywords
    content: aliases instalador, bootstrap, deploy remoto, teleport, dotfiles
---

# Aliases de Instalador

Ferramentas para bootstrapping e deploy remoto.

## Visão Geral

Estes aliases são definidos em `installer.aliases.sh` e carregados automaticamente pelo Chezmoi.

## Referência

| Alias | Descrição |
|-------|-------------|
| `dot-install` | Executar o script `install.sh` localmente |
| `dot-teleport` | Teletransportar configuração para servidor remoto (`dot-teleport usuario@host`) |
