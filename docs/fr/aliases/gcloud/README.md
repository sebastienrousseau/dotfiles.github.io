---
title: "Alias Google Cloud : simplifiez votre workflow gcloud"
description: "Alias de raccourci pour Google Cloud SDK. Gérez Compute Engine, IAM, Cloud SQL, etc. avec des commandes mémorables."
lang: fr-FR
metaTitle: "Alias Google Cloud | Dotfiles"
permalink: /aliases/gcloud/
sidebar: true
meta:
  - name: keywords
    content: "alias gcloud, google cloud cli, raccourcis gcloud, commandes cloud sdk, dotfiles, alias shell"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: "Alias Google Cloud | Dotfiles"
  - name: twitter:description
    content: "Alias de raccourci pour Google Cloud SDK. Gérez Compute Engine, IAM, Cloud SQL, etc. avec des commandes mémorables."
  - name: og:title
    content: "Alias Google Cloud | Dotfiles"
  - name: og:description
    content: "Alias de raccourci pour Google Cloud SDK. Gérez Compute Engine, IAM, Cloud SQL, etc. avec des commandes mémorables."
  - name: og:image:alt
    content: Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Alias Google Cloud

Raccourcis mémorables pour la ligne de commande Google Cloud SDK.

![Dotfiles banner][banner]

## Aperçu

Ces alias sont définis dans `gcloud.aliases.sh` et chargés automatiquement par chezmoi. Ils encapsulent les commandes Google Cloud SDK les plus courantes pour simplifier la gestion de Compute Engine, IAM, Cloud SQL et d’autres services GCP.

## Référence

### Commandes principales

| Alias | Description |
|-------|-------------|
| `gcd` | Définir le projet par défaut sur le nom du répertoire courant |
| `gck` | Lister toutes les configurations |
| `gcsa` | Définir le compte pour la configuration courante |
| `gcso` | Ouvrir la Google Cloud Console pour le projet courant |

### Compute Engine

| Alias | Description |
|-------|-------------|
| `gci` | Gérer les instances Compute Engine |
| `gcca` | Gérer les adresses IP Compute Engine |
| `gccc` | Créer une nouvelle VM |
| `gcco` | Se connecter à une VM via SSH |
| `gcpha` | Afficher les détails d’une IP Compute Engine |

### Stockage et bases de données

| Alias | Description |
|-------|-------------|
| `gcss` | Gérer Cloud Storage |
| `gcsq` | Gérer Cloud SQL |
| `gcdb` | Gérer Cloud Datastore |

### Serverless et conteneurs

| Alias | Description |
|-------|-------------|
| `gcf` | Gérer Cloud Functions |
| `gcro` | Gérer Cloud Run |
| `gcu` | Gérer App Engine |
| `gcs` | Gérer les clusters Kubernetes Engine |
| `gcr` | Supprimer une image du Container Registry |

### Données et analytique

| Alias | Description |
|-------|-------------|
| `gcdp` | Gérer Cloud Dataproc |
| `gcps` | Gérer Cloud Pub/Sub |

### Réseau et sécurité

| Alias | Description |
|-------|-------------|
| `gcn` | Gérer Cloud Networks |
| `gcic` | Gérer Identity and Access Management |
| `gcki` | Gérer Cloud KMS |

### Opérations et supervision

| Alias | Description |
|-------|-------------|
| `gcla` | Gérer Cloud Logging |
| `gcma` | Gérer Cloud Monitoring |
| `gclb` | Gérer Cloud Build |
| `gct` | Gérer Cloud Tasks |

### Services supplémentaires

| Alias | Description |
|-------|-------------|
| `gcp` | Gérer les projets Cloud |
| `gcpd` | Supprimer un projet Cloud |
| `gce` | Gérer Cloud Endpoints |
| `gcem` | Gérer Cloud Eventarc |
| `gcir` | Gérer Cloud IoT Core |
| `gcrm` | Gérer les ressources Cloud |
| `gcsc` | Gérer Cloud Source Repositories |
| `gcst` | Activer ou désactiver des services Cloud |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
