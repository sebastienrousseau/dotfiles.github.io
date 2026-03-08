---
title: "Aliases Legais: Compliance Open Source e Licencas"
description: Aliases de shell para compliance open source, scans de licenca e atribuicao. Ferramentas para verificação de licencas e geracao de NOTICE.
lang: pt-BR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: "Aliases Legais: Compliance Open Source e Licencas preview"
canonical: /pt/aliases/legal/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: "Aliases Legais: Compliance Open Source e Licencas"
pageType: docs
schemaType: WebPage
metaTitle: Aliases Legais | Dotfiles
permalink: /pt/aliases/legal/
sidebar: true
meta:
  - name: keywords
    content: aliases legais, licencas, open source, fossology, trivy, aliases shell, dotfiles
---

# Aliases Legais e Licencas

Ferramentas para compliance open source, scans de licenca e atribuicao.

## Visão Geral

Estes aliases são definidos em `legal.aliases.sh` e carregados automaticamente pelo Chezmoi.

## Referência

### Scan de Licenca

| Alias | Descrição | Tipo |
|-------|-----------|------|
| `fossology-start` | Iniciar servidor FOSSology local na porta 8081 | Docker |
| `fossology-stop` | Parar servidor FOSSology | Docker |
| `license-scan` | Scan rapido de licenca (Trivy) | Binary |

### Headers de Copyright

| Alias | Descrição | Tipo |
|-------|-----------|------|
| `add-headers` | Adicionar headers MIT recursivamente | Docker (google/addlicense) |

### Atribuicao

| Alias | Descrição | Tipo |
|-------|-----------|------|
| `gen-notice` | Gerar arquivo `NOTICE` | Docker |

### Contribuicao

| Alias | Descrição | Tipo |
|-------|-----------|------|
| `check-cla` | Monitorar checks de PR (incluindo CLA) | CLI (`gh`) |

## Requisitos

- **Docker**
- **GitHub CLI (`gh`)**
- **Trivy**
