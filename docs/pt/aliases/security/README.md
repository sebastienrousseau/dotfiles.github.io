---
description: alias de seguranca para Dotfiles
lang: pt-PT
metaTitle: alias de seguranca - Dotfiles
permalink: /pt/aliases/security/
---
# Alias de seguranca

Ferramentas para endurecer o ambiente e gerenciar imutabilidade de configuracao.

## 🔒 Imutabilidade

| Alias | Descricao |
|-------|-----------|
| `lock-configs` | Bloqueia arquivos criticos (`.zshrc`, etc.) para evitar alteracoes (`chflags uchg` / `chattr +i`). |
| `unlock-configs` | Desbloqueia arquivos criticos para edicao. |
| `check-locks` | Verifica o status de bloqueio de arquivos criticos. |

## 🔑 Assinatura Git

(Veja [Alias de Git](../git/README.md) para configuracao de assinatura)
