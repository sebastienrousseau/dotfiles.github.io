---
description: alias legais para Dotfiles
lang: pt-PT
metaTitle: alias legais - Dotfiles
permalink: /pt/aliases/legal/
---
# Alias legais e licencas

Ferramentas para compliance open source, scans de licenca e atribuicao.

## ⚖️ Alias

### License Scanning
| Alias | Description | Type |
|-------|-------------|------|
| `fossology-start` | Iniciar servidor FOSSology local na porta 8081 | Docker |
| `fossology-stop` | Parar servidor FOSSology | Docker |
| `license-scan` | Scan rapido de licenca (Trivy) | Binary |

### Copyright Headers
| Alias | Description | Type |
|-------|-------------|------|
| `add-headers` | Adicionar headers MIT recursivamente | Docker (google/addlicense) |

### Attribution
| Alias | Description | Type |
|-------|-------------|------|
| `gen-notice` | Gerar arquivo `NOTICE` | Docker |

### Contribution
| Alias | Description | Type |
|-------|-------------|------|
| `check-cla` | Monitorar checks de PR (incluindo CLA) | CLI (`gh`) |

## 📦 Requisitos

- **Docker**
- **GitHub CLI (`gh`)**
- **Trivy**
