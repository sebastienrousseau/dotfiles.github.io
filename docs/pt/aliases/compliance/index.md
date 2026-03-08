---
title: "Aliases de Compliance: Controles de Privacidade e Auditoria"
description: Aliases de shell para conformidade regulatoria, aplicacao de privacidade e auditoria de configuração no seu ambiente de terminal.
lang: pt-BR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: "Aliases de Compliance: Controles de Privacidade e Auditoria preview"
canonical: /pt/aliases/compliance/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "Aliases de Compliance: Controles de Privacidade e Auditoria"
pageType: docs
schemaType: WebPage
metaTitle: Aliases de Compliance | Dotfiles
permalink: /pt/aliases/compliance/
sidebar: true
meta:
  - name: keywords
    content: aliases compliance, modo privacidade, desativar telemetria, trilha de auditoria, dotfiles, shell
---

# Aliases de Compliance

Ferramentas de shell para conformidade regulatoria e aplicacao de privacidade.

## Visão Geral

Os aliases de compliance fornecem controles essenciais para gerenciar privacidade e manter trilhas de auditoria no seu ambiente de shell. Estes aliases ajudam a desativar telemetria em ferramentas CLI comuns e rastrear alterações de configuração para requisitos de conformidade.

## Referência

### Controles

| Alias | Descrição |
|-------|-------------|
| `privacy-mode` | Desativa telemetria para ferramentas CLI (Homebrew, Dotnet, Azure, etc.) para a sessão atual. |
| `dot-audit` | Exibe a trilha de auditoria de configuração recente (historico Git ou log de auditoria). |
