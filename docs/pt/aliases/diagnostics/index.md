---
title: "Aliases de Diagnostico: Verificacao de Saude e Auto-Reparo do Sistema"
description: Aliases de shell para diagnosticos do sistema dotfiles, verificação de desvio de configuração e comandos de auto-reparo.
lang: pt-BR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: "Aliases de Diagnostico: Verificacao de Saude e Auto-Reparo do Sistema preview"
canonical: /pt/aliases/diagnostics/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "Aliases de Diagnostico: Verificacao de Saude e Auto-Reparo do Sistema"
pageType: docs
schemaType: WebPage
metaTitle: Aliases de Diagnostico | Dotfiles
permalink: /pt/aliases/diagnostics/
sidebar: true
meta:
  - name: keywords
    content: aliases diagnostico, dotfiles doctor, verificação saude, chezmoi, auto-reparo
---

# Aliases de Diagnostico

Ferramentas de auto-reparo e verificação de saude para seu ambiente dotfiles.

## Visão Geral

Os aliases de diagnostico fornecem comandos para verificar a integridade do seu ambiente dotfiles, detectar desvios de configuração e reparar problemas automaticamente. Estes aliases são definidos em `diagnostics.aliases.sh` e carregados automaticamente pelo chezmoi.

## Referência

| Alias | Descrição |
|-------|-------------|
| `doc`, `dot-doctor` | Executar verificação de saude do sistema (`doctor.sh`). |
| `drift`, `dot-drift` | Verificar desvio do estado gerenciado (`chezmoi verify`). |
| `heal`, `dot-heal` | Aplicar estado gerenciado para reparar desvio (`chezmoi apply`). |
| `doc-full` | Executar doctor com informacao extendida de debug de caminhos. |
