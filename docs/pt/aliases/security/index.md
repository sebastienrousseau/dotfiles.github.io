---
title: "Aliases de Seguranca: Imutabilidade e Protecao de Arquivos"
description: Aliases de shell para seguranca. Bloqueie e desbloqueie arquivos de configuração criticos para evitar alterações acidentais.
lang: pt-BR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: "Aliases de Seguranca: Imutabilidade e Protecao de Arquivos preview"
canonical: /pt/aliases/security/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "Aliases de Seguranca: Imutabilidade e Protecao de Arquivos"
pageType: docs
schemaType: WebPage
metaTitle: Aliases de Seguranca | Dotfiles
permalink: /pt/aliases/security/
sidebar: true
meta:
  - name: keywords
    content: aliases seguranca, imutabilidade, chflags, chattr, aliases shell, dotfiles
---

# Aliases de Seguranca

Ferramentas para endurecer o ambiente e gerenciar imutabilidade de configuração.

## Visão Geral

Estes aliases são definidos em `security.aliases.sh` e carregados automaticamente pelo Chezmoi.

## Referência

### Imutabilidade

| Alias | Descrição |
|-------|-------------|
| `lock-configs` | Bloqueia arquivos criticos (`.zshrc`, etc.) para evitar alterações (`chflags uchg` / `chattr +i`) |
| `unlock-configs` | Desbloqueia arquivos criticos para edição |
| `check-locks` | Verifica o status de bloqueio de arquivos criticos |

### Assinatura Git

Veja [Aliases de Git](../git/) para configuração de assinatura.
