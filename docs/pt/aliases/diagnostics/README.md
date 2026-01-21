---
description: Aliases de diagnósticos para Dotfiles
lang: pt-BR
metaTitle: Aliases de Diagnósticos - Dotfiles (BR)
permalink: /pt/aliases/diagnostics/
---

# Aliases de Diagnósticos

Ferramentas para auto-recuperação e verificações de integridade do sistema.

## 🩺 Saúde & Reparo

| Alias                | Descrição                                                                   |
| -------------------- | --------------------------------------------------------------------------- |
| `doc`, `dot-doctor`  | Executa o script de verificação de integridade do sistema (`doctor.sh`).    |
| `drift`, `dot-drift` | Verifica se os arquivos locais desviaram do estado gerenciado (`chezmoi verify`). |
| `heal`, `dot-heal`   | Aplica o estado gerenciado para reparar o desvio (`chezmoi apply`).         |
| `doc-full`           | Executa doctor com informações estendidas de depuração de caminho.          |
