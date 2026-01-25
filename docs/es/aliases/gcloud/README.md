---
title: "Alias Google Cloud: simplifica tu flujo de trabajo gcloud"
description: "Alias de atajo para Google Cloud SDK. Gestiona Compute Engine, IAM, Cloud SQL y más con comandos memorables."
lang: es-ES
metaTitle: "Alias Google Cloud | Dotfiles"
permalink: /aliases/gcloud/
sidebar: true
meta:
  - name: keywords
    content: "alias gcloud, google cloud cli, atajos gcloud, comandos cloud sdk, dotfiles, alias shell"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: "Alias Google Cloud | Dotfiles"
  - name: twitter:description
    content: "Alias de atajo para Google Cloud SDK. Gestiona Compute Engine, IAM, Cloud SQL y más con comandos memorables."
  - name: og:title
    content: "Alias Google Cloud | Dotfiles"
  - name: og:description
    content: "Alias de atajo para Google Cloud SDK. Gestiona Compute Engine, IAM, Cloud SQL y más con comandos memorables."
  - name: og:image:alt
    content: Dotfiles - Diseñado para tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Alias Google Cloud

Atajos memorables para la línea de comandos de Google Cloud SDK.

![Dotfiles banner][banner]

## Descubrir

Estos alias se definen en `gcloud.aliases.sh` y se cargan automáticamente por chezmoi. Envoltorios de comandos comunes de Google Cloud SDK para gestionar Compute Engine, IAM, Cloud SQL y otros servicios GCP.

## Referencia

### Comandos principales

| Alias | Descripción |
|-------|-------------|
| `gcd` | Establecer el proyecto por defecto al nombre del directorio actual |
| `gck` | Listar todas las configuraciones |
| `gcsa` | Establecer la cuenta para la configuración actual |
| `gcso` | Abrir la Google Cloud Console del proyecto actual |

### Compute Engine

| Alias | Descripción |
|-------|-------------|
| `gci` | Gestionar instancias de Compute Engine |
| `gcca` | Gestionar direcciones IP de Compute Engine |
| `gccc` | Crear una nueva instancia de VM |
| `gcco` | Conectar a una instancia por SSH |
| `gcpha` | Mostrar detalles de una IP de Compute Engine |

### Almacenamiento y bases de datos

| Alias | Descripción |
|-------|-------------|
| `gcss` | Gestionar Cloud Storage |
| `gcsq` | Gestionar Cloud SQL |
| `gcdb` | Gestionar Cloud Datastore |

### Serverless y contenedores

| Alias | Descripción |
|-------|-------------|
| `gcf` | Gestionar Cloud Functions |
| `gcro` | Gestionar Cloud Run |
| `gcu` | Gestionar App Engine |
| `gcs` | Gestionar clusters de Kubernetes Engine |
| `gcr` | Eliminar una imagen de Container Registry |

### Datos y analítica

| Alias | Descripción |
|-------|-------------|
| `gcdp` | Gestionar Cloud Dataproc |
| `gcps` | Gestionar Cloud Pub/Sub |

### Redes y seguridad

| Alias | Descripción |
|-------|-------------|
| `gcn` | Gestionar Cloud Networks |
| `gcic` | Gestionar Identity and Access Management |
| `gcki` | Gestionar Cloud KMS |

### Operaciones y monitorización

| Alias | Descripción |
|-------|-------------|
| `gcla` | Gestionar Cloud Logging |
| `gcma` | Gestionar Cloud Monitoring |
| `gclb` | Gestionar Cloud Build |
| `gct` | Gestionar Cloud Tasks |

### Servicios adicionales

| Alias | Descripción |
|-------|-------------|
| `gcp` | Gestionar proyectos de Cloud |
| `gcpd` | Eliminar un proyecto de Cloud |
| `gce` | Gestionar Cloud Endpoints |
| `gcem` | Gestionar Cloud Eventarc |
| `gcir` | Gestionar Cloud IoT Core |
| `gcrm` | Gestionar recursos Cloud |
| `gcsc` | Gestionar Cloud Source Repositories |
| `gcst` | Habilitar o deshabilitar servicios Cloud |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
