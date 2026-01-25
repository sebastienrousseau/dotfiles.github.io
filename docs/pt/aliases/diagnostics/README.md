---
title: "Aliases de Diagnostico: Verificacao de Saude e Auto-Reparo do Sistema"
description: "Aliases de shell para diagnosticos do sistema dotfiles, verificacao de desvio de configuracao e comandos de auto-reparo."
lang: pt-BR
metaTitle: "Aliases de Diagnostico | Dotfiles"
permalink: /pt/aliases/diagnostics/
sidebar: true
meta:
  - name: keywords
    content: "aliases diagnostico, dotfiles doctor, verificacao saude, chezmoi, auto-reparo"
---

# Aliases de Diagnostico

Ferramentas de auto-reparo e verificacao de saude para seu ambiente dotfiles.

## Visao Geral

Os aliases de diagnostico fornecem comandos para verificar a integridade do seu ambiente dotfiles, detectar desvios de configuracao e reparar problemas automaticamente. Estes aliases sao definidos em `diagnostics.aliases.sh` e carregados automaticamente pelo chezmoi.

## Referencia

| Alias | Descricao |
|-------|-------------|
| `doc`, `dot-doctor` | Executar verificacao de saude do sistema (`doctor.sh`). |
| `drift`, `dot-drift` | Verificar desvio do estado gerenciado (`chezmoi verify`). |
| `heal`, `dot-heal` | Aplicar estado gerenciado para reparar desvio (`chezmoi apply`). |
| `doc-full` | Executar doctor com informacao extendida de debug de caminhos. |
