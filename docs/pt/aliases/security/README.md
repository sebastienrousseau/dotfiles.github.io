---
title: "Aliases de Seguranca: Imutabilidade e Protecao de Arquivos"
description: "Aliases de shell para seguranca. Bloqueie e desbloqueie arquivos de configuracao criticos para evitar alteracoes acidentais."
lang: pt-BR
metaTitle: "Aliases de Seguranca | Dotfiles"
permalink: /pt/aliases/security/
sidebar: true
meta:
  - name: keywords
    content: "aliases seguranca, imutabilidade, chflags, chattr, aliases shell, dotfiles"
---

# Aliases de Seguranca

Ferramentas para endurecer o ambiente e gerenciar imutabilidade de configuracao.

## Visao Geral

Estes aliases sao definidos em `security.aliases.sh` e carregados automaticamente pelo Chezmoi.

## Referencia

### Imutabilidade

| Alias | Descricao |
|-------|-------------|
| `lock-configs` | Bloqueia arquivos criticos (`.zshrc`, etc.) para evitar alteracoes (`chflags uchg` / `chattr +i`) |
| `unlock-configs` | Desbloqueia arquivos criticos para edicao |
| `check-locks` | Verifica o status de bloqueio de arquivos criticos |

### Assinatura Git

Veja [Aliases de Git](../git/) para configuracao de assinatura.
