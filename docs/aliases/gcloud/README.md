---
title: "Google Cloud Aliases: Streamline Your gcloud CLI Workflow"
description: "Shortcut aliases for Google Cloud SDK. Manage Compute Engine, IAM, Cloud SQL, and more with memorable commands."
lang: en-GB
metaTitle: "Google Cloud Aliases | Dotfiles"
permalink: /aliases/gcloud/
sidebar: true
meta:
  - name: keywords
    content: "gcloud aliases, google cloud cli, gcloud shortcuts, cloud sdk commands, dotfiles, shell aliases"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: "Google Cloud Aliases | Dotfiles"
  - name: twitter:description
    content: "Shortcut aliases for Google Cloud SDK. Manage Compute Engine, IAM, Cloud SQL, and more with memorable commands."
  - name: og:title
    content: "Google Cloud Aliases | Dotfiles"
  - name: og:description
    content: "Shortcut aliases for Google Cloud SDK. Manage Compute Engine, IAM, Cloud SQL, and more with memorable commands."
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Google Cloud Aliases

Memorable shortcuts for the Google Cloud SDK command line.

![Dotfiles banner][banner]

## Overview

These aliases are defined in `gcloud.aliases.sh` and are automatically loaded by chezmoi. They wrap common Google Cloud SDK commands to simplify managing Compute Engine, IAM, Cloud SQL, and other GCP services.

## Reference

### Core Commands

| Alias | Description |
|-------|-------------|
| `gcd` | Set the default project to the current directory name |
| `gck` | List all configurations |
| `gcsa` | Set the account for the current configuration |
| `gcso` | Open the Google Cloud Console for the current project |

### Compute Engine

| Alias | Description |
|-------|-------------|
| `gci` | Manage Compute Engine instances |
| `gcca` | Manage Compute Engine IP addresses |
| `gccc` | Create a new virtual machine instance |
| `gcco` | Connect to a virtual machine instance via SSH |
| `gcpha` | Display details for a Compute Engine IP address |

### Storage and Databases

| Alias | Description |
|-------|-------------|
| `gcss` | Manage Cloud Storage |
| `gcsq` | Manage Cloud SQL |
| `gcdb` | Manage Cloud Datastore |

### Serverless and Containers

| Alias | Description |
|-------|-------------|
| `gcf` | Manage Cloud Functions |
| `gcro` | Manage Cloud Run |
| `gcu` | Manage App Engine |
| `gcs` | Manage Kubernetes Engine clusters |
| `gcr` | Delete a container image from Container Registry |

### Data and Analytics

| Alias | Description |
|-------|-------------|
| `gcdp` | Manage Cloud Dataproc |
| `gcps` | Manage Cloud Pub/Sub |

### Networking and Security

| Alias | Description |
|-------|-------------|
| `gcn` | Manage Cloud Networks |
| `gcic` | Manage Identity and Access Management |
| `gcki` | Manage Cloud KMS |

### Operations and Monitoring

| Alias | Description |
|-------|-------------|
| `gcla` | Manage Cloud Logging |
| `gcma` | Manage Cloud Monitoring |
| `gclb` | Manage Cloud Build |
| `gct` | Manage Cloud Tasks |

### Additional Services

| Alias | Description |
|-------|-------------|
| `gcp` | Manage Cloud projects |
| `gcpd` | Delete a Cloud project |
| `gce` | Manage Cloud Endpoints |
| `gcem` | Manage Cloud Eventarc |
| `gcir` | Manage Cloud IoT Core |
| `gcrm` | Manage Cloud resources |
| `gcsc` | Manage Cloud Source Repositories |
| `gcst` | Enable or disable Cloud services |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
