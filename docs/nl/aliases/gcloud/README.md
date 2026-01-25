---
title: "Google Cloud-aliassen: Stroomlijn je gcloud CLI-workflow"
description: "Snelkoppeling-aliassen voor Google Cloud SDK. Beheer Compute Engine, IAM, Cloud SQL en meer met memorabele commando's."
lang: nl-NL
metaTitle: "Google Cloud-aliassen | Dotfiles"
permalink: /nl/aliases/gcloud/
sidebar: true
meta:
  - name: keywords
    content: "gcloud aliassen, google cloud cli, gcloud snelkoppelingen, cloud sdk commando's, dotfiles, shell aliassen"
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: "Google Cloud-aliassen | Dotfiles"
  - name: twitter:description
    content: "Snelkoppeling-aliassen voor Google Cloud SDK. Beheer Compute Engine, IAM, Cloud SQL en meer met memorabele commando's."
  - name: og:title
    content: "Google Cloud-aliassen | Dotfiles"
  - name: og:description
    content: "Snelkoppeling-aliassen voor Google Cloud SDK. Beheer Compute Engine, IAM, Cloud SQL en meer met memorabele commando's."
  - name: og:image:alt
    content: Dotfiles - Eenvoudig ontworpen om bij je shell-leven te passen
  - name: og:locale
    content: nl_NL
---

# Google Cloud-aliassen

Memorabele snelkoppelingen voor de Google Cloud SDK commandoregel.

![Dotfiles banner][banner]

## Overzicht

Deze aliassen zijn gedefinieerd in `gcloud.aliases.sh` en worden automatisch geladen door chezmoi. Ze wrappen gangbare Google Cloud SDK-commando's om het beheren van Compute Engine, IAM, Cloud SQL en andere GCP-services te vereenvoudigen.

## Referentie

### Kerncommando's

| Alias | Beschrijving |
|-------|-------------|
| `gcd` | Stel het standaardproject in op de huidige mapnaam |
| `gck` | Toon alle configuraties |
| `gcsa` | Stel het account in voor de huidige configuratie |
| `gcso` | Open de Google Cloud Console voor het huidige project |

### Compute Engine

| Alias | Beschrijving |
|-------|-------------|
| `gci` | Beheer Compute Engine-instanties |
| `gcca` | Beheer Compute Engine IP-adressen |
| `gccc` | Maak een nieuwe virtuele machine-instantie |
| `gcco` | Verbind met een virtuele machine-instantie via SSH |
| `gcpha` | Toon details voor een Compute Engine IP-adres |

### Opslag en databases

| Alias | Beschrijving |
|-------|-------------|
| `gcss` | Beheer Cloud Storage |
| `gcsq` | Beheer Cloud SQL |
| `gcdb` | Beheer Cloud Datastore |

### Serverless en containers

| Alias | Beschrijving |
|-------|-------------|
| `gcf` | Beheer Cloud Functions |
| `gcro` | Beheer Cloud Run |
| `gcu` | Beheer App Engine |
| `gcs` | Beheer Kubernetes Engine-clusters |
| `gcr` | Verwijder een container-image uit Container Registry |

### Netwerk en beveiliging

| Alias | Beschrijving |
|-------|-------------|
| `gcn` | Beheer Cloud Networks |
| `gcic` | Beheer Identity and Access Management |
| `gcki` | Beheer Cloud KMS |

### Operaties en monitoring

| Alias | Beschrijving |
|-------|-------------|
| `gcla` | Beheer Cloud Logging |
| `gcma` | Beheer Cloud Monitoring |
| `gclb` | Beheer Cloud Build |
| `gct` | Beheer Cloud Tasks |

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
