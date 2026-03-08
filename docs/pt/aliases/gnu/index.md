---
title: "Aliases GNU: Atalhos para GNU Coreutils"
description: Aliases de shell para GNU Core Utilities. Atalhos para utilitarios basicos de gerenciamento de arquivos, manipulacao de conteudo e checksum.
lang: pt-BR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: "Aliases GNU: Atalhos para GNU Coreutils preview"
canonical: /pt/aliases/gnu/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "Aliases GNU: Atalhos para GNU Coreutils"
pageType: docs
schemaType: WebPage
metaTitle: Aliases GNU | Dotfiles
permalink: /pt/aliases/gnu/
sidebar: true
meta:
  - name: keywords
    content: aliases gnu, coreutils, utilitarios unix, aliases shell, dotfiles, linux
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Aliases de shell para GNU Core Utilities. Atalhos para utilitarios basicos de gerenciamento de arquivos.
  - name: twitter:title
    content: Aliases GNU | Dotfiles
  - name: og:title
    content: Aliases GNU | Dotfiles
  - name: og:description
    content: Aliases de shell para GNU Core Utilities. Atalhos para utilitarios basicos de gerenciamento de arquivos.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: pt_BR
---

# Aliases GNU

Atalhos para GNU Core Utilities em sistemas macOS.

## Visão Geral

Estes aliases são definidos em `gnu.aliases.sh` e carregados automaticamente pelo Chezmoi. Eles fornecem comandos abreviados para o conjunto de utilitarios Unix basicos.

## Referência

### Utilitarios de Gerenciamento de Arquivos

| Alias | Descrição |
|-------|-------------|
| `basename` | Remover diretorio e sufixo de nomes de arquivo |
| `cp` | Copiar arquivos e diretorios |
| `dirname` | Remover sufixo não-diretorio de nomes de arquivo |
| `ln` | Criar links entre arquivos |
| `ls` | Listar conteudo de diretorios |
| `mkdir` | Criar diretorios |
| `mv` | Mover ou renomear arquivos ou diretorios |
| `pwd` | Imprimir nome do diretorio de trabalho |
| `readlink` | Imprimir links simbolicos resolvidos |
| `realpath` | Imprimir caminho fisico resolvido |
| `rm` | Remover arquivos ou diretorios |
| `rmdir` | Remover diretorios vazios |

### Utilitarios de Manipulacao de Conteudo

| Alias | Descrição |
|-------|-------------|
| `awk` | Linguagem de varredura e processamento de padrões |
| `cat` | Concatenar e exibir arquivos |
| `cut` | Remover seções de cada linha de arquivos |
| `diff` | Comparar arquivos linha por linha |
| `grep` | Imprimir linhas que correspondem a um padrão |
| `head` | Exibir primeira parte de arquivos |
| `sed` | Editor de fluxo para filtrar e transformar texto |
| `sort` | Ordenar linhas de arquivos de texto |
| `tail` | Exibir ultima parte de arquivos |
| `tr` | Traduzir ou deletar caracteres |

### Utilitarios de Checksum e Criptografia

| Alias | Descrição |
|-------|-------------|
| `b2sum` | Imprimir ou verificar digests BLAKE2 |
| `cksum` | Imprimir checksum CRC e contagem de bytes |
| `sha1sum` | Imprimir ou verificar digests SHA1 |
| `sha256sum` | Imprimir ou verificar digests SHA256 |
| `sha512sum` | Imprimir ou verificar digests SHA512 |

### Outros Utilitarios

| Alias | Descrição |
|-------|-------------|
| `base64` | Codificar ou decodificar dados base64 |
| `base32` | Imprimir ou converter dados base32 |
