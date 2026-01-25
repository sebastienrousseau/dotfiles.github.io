---
title: "Aliases Legais: Compliance Open Source e Licencas"
description: "Aliases de shell para compliance open source, scans de licenca e atribuicao. Ferramentas para verificacao de licencas e geracao de NOTICE."
lang: pt-BR
metaTitle: "Aliases Legais | Dotfiles"
permalink: /pt/aliases/legal/
sidebar: true
meta:
  - name: keywords
    content: "aliases legais, licencas, open source, fossology, trivy, aliases shell, dotfiles"
---

# Aliases Legais e Licencas

Ferramentas para compliance open source, scans de licenca e atribuicao.

## Visao Geral

Estes aliases sao definidos em `legal.aliases.sh` e carregados automaticamente pelo Chezmoi.

## Referencia

### Scan de Licenca

| Alias | Descricao | Tipo |
|-------|-----------|------|
| `fossology-start` | Iniciar servidor FOSSology local na porta 8081 | Docker |
| `fossology-stop` | Parar servidor FOSSology | Docker |
| `license-scan` | Scan rapido de licenca (Trivy) | Binary |

### Headers de Copyright

| Alias | Descricao | Tipo |
|-------|-----------|------|
| `add-headers` | Adicionar headers MIT recursivamente | Docker (google/addlicense) |

### Atribuicao

| Alias | Descricao | Tipo |
|-------|-----------|------|
| `gen-notice` | Gerar arquivo `NOTICE` | Docker |

### Contribuicao

| Alias | Descricao | Tipo |
|-------|-----------|------|
| `check-cla` | Monitorar checks de PR (incluindo CLA) | CLI (`gh`) |

## Requisitos

- **Docker**
- **GitHub CLI (`gh`)**
- **Trivy**
