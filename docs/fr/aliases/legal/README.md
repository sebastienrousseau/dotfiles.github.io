---
title: "Alias Legal : outils de conformité open source"
description: "Alias shell pour le scan de licences, les en-têtes de copyright et la gestion des attributions."
lang: fr-FR
metaTitle: "Alias Legal | Dotfiles"
permalink: /aliases/legal/
sidebar: true
meta:
  - name: keywords
    content: "alias legal, scan licences, en-têtes copyright, conformité open source, dotfiles"
---

# Alias Legal

Outils shell pour la conformité open source, le scan de licences et les attributions.

## Aperçu

Les alias legal offrent un workflow simplifié pour la conformité open source. Ces outils gèrent le scan de licences, l’ajout d’en-têtes de copyright et l’attribution des dépendances.

## Référence

### Scan de licences

| Alias | Description | Type |
|-------|-------------|------|
| `fossology-start` | Démarrer un serveur FOSSology local sur le port 8081 | Docker |
| `fossology-stop` | Arrêter le serveur FOSSology | Docker |
| `license-scan` | Scan rapide des licences du répertoire courant via Trivy | Binaire |

### En-têtes de copyright

| Alias | Description | Type |
|-------|-------------|------|
| `add-headers` | Ajouter récursivement les en-têtes MIT à tous les fichiers sources | Docker (google/addlicense) |

### Attribution

| Alias | Description | Type |
|-------|-------------|------|
| `gen-notice` | Générer un fichier NOTICE pour les dépendances (support Go initial) | Docker |

### Contribution

| Alias | Description | Type |
|-------|-------------|------|
| `check-cla` | Surveiller les checks PR GitHub, y compris le statut CLA | CLI (gh) |

## Prérequis

- **Docker** - Requis pour isoler les outils de conformité
- **GitHub CLI (gh)** - Requis pour les checks PR et CLA
- **Trivy** - Installé automatiquement ou suggéré pour le scan rapide
