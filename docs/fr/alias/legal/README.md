---
description: alias légaux pour Dotfiles
lang: fr-FR
metaTitle: Alias légaux - Dotfiles (FR)
permalink: /aliases/legal/
---
# Alias Légal & Licences

Outils pour gérer la conformité open source, le scan de licences et l'attribution.

## ⚖️ Alias

### Scan de licences
| Alias | Description | Type |
|-------|-------------|------|
| `fossology-start` | Démarrer un serveur FOSSology local sur le port 8081 | Docker |
| `fossology-stop` | Arrêter le serveur FOSSology | Docker |
| `license-scan` | Scan rapide des licences du répertoire courant (via Trivy) | Binaire |

### En-têtes de copyright
| Alias | Description | Type |
|-------|-------------|------|
| `add-headers` | ajouter récursivement des en-têtes de licence MIT à tous les fichiers source | Docker (google/addlicense) |

### Attribution
| Alias | Description | Type |
|-------|-------------|------|
| `gen-notice` | Générer un fichier `NOTICE` pour les dépendances (support Go au départ) | Docker |

### Contribution
| Alias | Description | Type |
|-------|-------------|------|
| `check-cla` | Surveiller les checks PR GitHub (incluant CLA) | CLI (`gh`) |

## 📦 Prérequis

- **Docker** : pour isoler les outils de conformité.
- **GitHub CLI (`gh`)** : pour vérifier PR/CLA.
- **Trivy** : installé/suggéré automatiquement pour un scan rapide.
