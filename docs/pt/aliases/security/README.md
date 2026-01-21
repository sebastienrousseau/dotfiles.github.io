---
description: Aliases de segurança para Dotfiles
lang: pt-BR
metaTitle: Aliases de segurança - Dotfiles (BR)
permalink: /pt/aliases/security/
---

# Aliases de Segurança

Ferramentas para fortalecer o ambiente e gerenciar a imutabilidade da configuração.

## 🔒 Imutabilidade

| Alias            | Descrição                                                                                            |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| `lock-configs`   | Bloqueia arquivos críticos (`.zshrc`, etc.) para evitar modificações (`chflags uchg` / `chattr +i`). |
| `unlock-configs` | Desbloqueia arquivos críticos para edição.                                                           |
| `check-locks`    | Verifica o status de bloqueio de arquivos críticos.                                                  |

## 🔑 Assinatura Git

(Veja [Aliases do Git](../git/README.md) para configuração de assinatura)
