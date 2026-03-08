---
title: "Aliases de Docker: Gerenciamento de Containers Simplificado"
description: Aliases de shell para Docker, Docker Compose e Docker Swarm. Gerencie containers, imagens, volumes e redes facilmente.
lang: pt-BR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: "Aliases de Docker: Gerenciamento de Containers Simplificado preview"
canonical: /pt/aliases/docker/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "Aliases de Docker: Gerenciamento de Containers Simplificado"
pageType: docs
schemaType: WebPage
metaTitle: Aliases de Docker | Dotfiles
permalink: /pt/aliases/docker/
sidebar: true
meta:
  - name: keywords
    content: aliases docker, docker compose, docker swarm, containers, aliases shell, dotfiles
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Aliases de shell para Docker, Docker Compose e Docker Swarm. Gerencie containers, imagens, volumes e redes facilmente.
  - name: twitter:title
    content: Aliases de Docker | Dotfiles
  - name: og:title
    content: Aliases de Docker | Dotfiles
  - name: og:description
    content: Aliases de shell para Docker, Docker Compose e Docker Swarm. Gerencie containers, imagens, volumes e redes facilmente.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: pt_BR
---

# Aliases de Docker

Gerencie containers Docker com comandos curtos e memoraveis.

## Visão Geral

Estes aliases são definidos em `docker.aliases.sh` e carregados automaticamente pelo Chezmoi.

## Referência

### Comandos Básicos

| Alias | Descrição |
|-------|-------------|
| `dk` | Atalho do Docker |
| `dkv` | Mostrar versão do Docker |
| `dki` | Mostrar informações do sistema |
| `dkl` | Login no registro Docker |
| `dklo` | Logout do registro Docker |

### Operações de Containers

| Alias | Descrição |
|-------|-------------|
| `dkps` | Listar containers em execução |
| `dkpsa` | Listar todos os containers |
| `dkr` | Executar comando em novo container |
| `dkri` | Executar container interativo |
| `dkrd` | Executar container em background |
| `dks` | Iniciar container |
| `dkst` | Parar container |
| `dkrs` | Reiniciar container |
| `dkrm` | Remover container |
| `dkrma` | Remover todos os containers |

### Imagens

| Alias | Descrição |
|-------|-------------|
| `dki` | Listar imagens |
| `dkia` | Listar todas as imagens |
| `dkb` | Construir imagem |
| `dkbt` | Construir e taguear imagem |
| `dkpu` | Enviar imagem ao registro |
| `dkpl` | Baixar imagem do registro |
| `dkrmi` | Remover imagem |
| `dkprune` | Remover dados não usados |

### Volumes

| Alias | Descrição |
|-------|-------------|
| `dkvls` | Listar volumes |
| `dkvc` | Criar volume |
| `dkvi` | Inspecionar volume |
| `dkvrm` | Remover volume |
| `dkvp` | Remover volumes não usados |

### Redes

| Alias | Descrição |
|-------|-------------|
| `dknls` | Listar redes |
| `dknc` | Criar rede |
| `dkni` | Inspecionar rede |
| `dknrm` | Remover rede |

### Docker Compose

| Alias | Descrição |
|-------|-------------|
| `dc` | Atalho de Docker Compose |
| `dcu` | Criar e iniciar containers |
| `dcud` | Criar e iniciar containers em background |
| `dcd` | Parar e remover containers |
| `dcr` | Reiniciar servicos |
| `dcps` | Listar containers |
| `dcl` | Ver logs |
| `dclf` | Seguir logs |
| `dcex` | Executar comando no container |
| `dcb` | Construir servicos |

### Docker Swarm

| Alias | Descrição |
|-------|-------------|
| `dksw` | Atalho de Swarm |
| `dkswi` | Inicializar Docker Swarm |
| `dkswj` | Entrar no Docker Swarm |
| `dkswl` | Sair do Swarm |
| `dksrvls` | Listar servicos |
| `dksrvc` | Criar servico |
| `dkstkls` | Listar stacks |
| `dkstkd` | Deploy de stack |
