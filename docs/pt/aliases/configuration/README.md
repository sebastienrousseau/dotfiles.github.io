---
title: "Aliases de Configuracao: Acesso Rapido a Arquivos de Config"
description: "Abra arquivos de configuracao de shell, Git, SSH e servidor instantaneamente com estes aliases de shell para Bash e Zsh."
lang: pt-BR
metaTitle: "Aliases de Configuracao | Dotfiles"
permalink: /pt/aliases/configuration/
sidebar: true
meta:
  - name: keywords
    content: "aliases configuracao, config shell, dotfiles, aliases bash, aliases zsh, config git, config ssh"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Aliases de Configuracao | Dotfiles
  - name: twitter:description
    content: Abra arquivos de configuracao de shell, Git, SSH e servidor instantaneamente com estes aliases de shell.
  - name: og:title
    content: Aliases de Configuracao | Dotfiles
  - name: og:description
    content: Abra arquivos de configuracao de shell, Git, SSH e servidor instantaneamente com estes aliases de shell.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: pt_BR
---

# Aliases de Configuracao

Abra arquivos de configuracao no seu editor padrao com um unico comando.

## Visao Geral

Os aliases de configuracao fornecem atalhos para abrir arquivos de configuracao editados frequentemente. Estes aliases sao definidos em `configuration.aliases.sh` e carregados automaticamente pelo chezmoi.

Cada alias inicia o arquivo correspondente no editor de texto padrao do seu sistema, eliminando a necessidade de lembrar caminhos de arquivo ou digitar comandos longos.

## Referencia

### Configuracao de Shell

| Alias | Descricao |
|-------|-------------|
| `bshrc` | Abrir arquivo de configuracao do Bash (~/.bashrc) |
| `bshp` | Abrir perfil do Bash (~/.bash_profile) |
| `zshrc` | Abrir arquivo de configuracao do Zsh (~/.zshrc) |
| `zshp` | Abrir perfil do Zsh (~/.zprofile) |

### Controle de Versao

| Alias | Descricao |
|-------|-------------|
| `gcfg` | Abrir arquivo de configuracao do Git (~/.gitconfig) |
| `gign` | Abrir arquivo de ignore do Git (~/.gitignore) |

### Rede e Servidores

| Alias | Descricao |
|-------|-------------|
| `apconf` | Abrir arquivo de configuracao do Apache |
| `ngconf` | Abrir arquivo de configuracao do Nginx |
| `sshconf` | Abrir arquivo de configuracao do SSH (~/.ssh/config) |
| `hosts` | Abrir arquivo hosts (/etc/hosts) |

### Ferramentas de Desenvolvimento

| Alias | Descricao |
|-------|-------------|
| `dockcomp` | Abrir arquivo Docker Compose |
| `eddir` | Abrir diretorio atual no editor padrao |
