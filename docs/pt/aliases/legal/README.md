---
description: Aliases legais para Dotfiles
lang: pt-BR
metaTitle: Aliases Legais - Dotfiles (BR)
permalink: /pt/aliases/legal/
---

# Aliases Legais e de Licenciamento

Ferramentas para gerenciar conformidade de código aberto, verificação de licença e atribuição.

## ⚖️ Aliases

### Verificação de Licença

| Alias             | Descrição                                                    | Tipo    |
| ----------------- | ------------------------------------------------------------ | ------- |
| `fossology-start` | Iniciar servidor FOSSology local na porta 8081               | Docker  |
| `fossology-stop`  | Parar servidor FOSSology                                     | Docker  |
| `license-scan`    | Verificação rápida de licença do diretório atual (via Trivy) | Binário |

### Cabeçalhos de Copyright

| Alias         | Descrição                                                                        | Tipo                       |
| ------------- | -------------------------------------------------------------------------------- | -------------------------- |
| `add-headers` | adicionar recursivamente cabeçalhos de licença MIT a todos os arquivos de origem | Docker (google/addlicense) |

### Atribuição

| Alias        | Descrição                                                             | Tipo   |
| ------------ | --------------------------------------------------------------------- | ------ |
| `gen-notice` | Gerar um arquivo `NOTICE` para dependências (suporte Go inicialmente) | Docker |

### Contribuição

| Alias       | Descrição                                             | Tipo       |
| ----------- | ----------------------------------------------------- | ---------- |
| `check-cla` | Observar verificações de PR do GitHub (incluindo CLA) | CLI (`gh`) |

## 📦 Requisitos

- **Docker**: Para isolamento de ferramentas de conformidade.
- **GitHub CLI (`gh`)**: Para verificação de PR/CLA.
- **Trivy**: Instalado/sugerido automaticamente para verificação rápida.
