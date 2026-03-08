---
title: "Aliases de Configuração: Acesso Rapido a Arquivos de Config"
description: Abra arquivos de configuração de shell, Git, SSH e servidor instantaneamente com estes aliases de shell para Bash e Zsh.
lang: pt-BR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: "Aliases de Configuração: Acesso Rapido a Arquivos de Config preview"
canonical: /pt/aliases/configuration/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "Aliases de Configuração: Acesso Rapido a Arquivos de Config"
pageType: docs
schemaType: WebPage
metaTitle: Aliases de Configuração | Dotfiles
permalink: /pt/aliases/configuration/
sidebar: true
meta:
  - name: keywords
    content: aliases configuração, config shell, dotfiles, aliases bash, aliases zsh, config git, config ssh
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Aliases de Configuração | Dotfiles
  - name: twitter:description
    content: Abra arquivos de configuração de shell, Git, SSH e servidor instantaneamente com estes aliases de shell.
  - name: og:title
    content: Aliases de Configuração | Dotfiles
  - name: og:description
    content: Abra arquivos de configuração de shell, Git, SSH e servidor instantaneamente com estes aliases de shell.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: pt_BR
---

# Aliases de Configuração

Abra arquivos de configuração no seu editor padrão com um unico comando.

## Visão Geral

Os aliases de configuração fornecem atalhos para abrir arquivos de configuração editados frequentemente. Estes aliases são definidos em `configuration.aliases.sh` e carregados automaticamente pelo chezmoi.

Cada alias inicia o arquivo correspondente no editor de texto padrão do seu sistema, eliminando a necessidade de lembrar caminhos de arquivo ou digitar comandos longos.

## Referência

### Configuração de Shell

| Alias | Descrição |
|-------|-------------|
| `bshrc` | Abrir arquivo de configuração do Bash (~/.bashrc) |
| `bshp` | Abrir perfil do Bash (~/.bash_profile) |
| `zshrc` | Abrir arquivo de configuração do Zsh (~/.zshrc) |
| `zshp` | Abrir perfil do Zsh (~/.zprofile) |

### Controle de Versao

| Alias | Descrição |
|-------|-------------|
| `gcfg` | Abrir arquivo de configuração do Git (~/.gitconfig) |
| `gign` | Abrir arquivo de ignore do Git (~/.gitignore) |

### Rede e Servidores

| Alias | Descrição |
|-------|-------------|
| `apconf` | Abrir arquivo de configuração do Apache |
| `ngconf` | Abrir arquivo de configuração do Nginx |
| `sshconf` | Abrir arquivo de configuração do SSH (~/.ssh/config) |
| `hosts` | Abrir arquivo hosts (/etc/hosts) |

### Ferramentas de Desenvolvimento

| Alias | Descrição |
|-------|-------------|
| `dockcomp` | Abrir arquivo Docker Compose |
| `eddir` | Abrir diretorio atual no editor padrão |
