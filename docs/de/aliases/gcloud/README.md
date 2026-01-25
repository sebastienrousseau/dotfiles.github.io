---
description: Verknuepfungs-Aliase fuer Google Cloud SDK. Compute Engine, IAM, Cloud SQL und mehr mit einpraegsamen Befehlen verwalten.
lang: de-DE
metaTitle: Google Cloud Aliase - Dotfiles (DE)
permalink: /de/aliases/gcloud/
sidebar: true

meta:
  - name: keywords
    content: gcloud aliase, google cloud cli, gcloud verknuepfungen, cloud sdk befehle, dotfiles, shell aliase
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Google Cloud Aliase - Dotfiles
  - name: twitter:description
    content: Verknuepfungs-Aliase fuer Google Cloud SDK. Compute Engine, IAM, Cloud SQL und mehr verwalten.
  - name: og:title
    content: Google Cloud Aliase - Dotfiles
  - name: og:description
    content: Verknuepfungs-Aliase fuer Google Cloud SDK. Compute Engine, IAM, Cloud SQL und mehr verwalten.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: de_DE
---

# Google Cloud Aliase

Einpraegsame Verknuepfungen fuer die Google Cloud SDK-Befehlszeile.

## Uebersicht

Diese Aliase sind in `gcloud.aliases.sh` definiert und werden automatisch von Chezmoi geladen. Sie umhuellen gaengige Google Cloud SDK-Befehle, um die Verwaltung von Compute Engine, IAM, Cloud SQL und anderen GCP-Diensten zu vereinfachen.

## Referenz

### Kernbefehle

| Alias | Beschreibung |
|:---|:---|
| `gcd` | Standardprojekt auf den Namen des aktuellen Verzeichnisses setzen |
| `gck` | Alle Konfigurationen auflisten |
| `gcsa` | Konto fuer aktuelle Konfiguration setzen |
| `gcso` | Google Cloud Console fuer aktuelles Projekt oeffnen |

### Compute Engine

| Alias | Beschreibung |
|:---|:---|
| `gci` | Compute Engine-Instanzen verwalten |
| `gcca` | Compute Engine-IP-Adressen verwalten |
| `gccc` | Neue virtuelle Maschinen-Instanz erstellen |
| `gcco` | Ueber SSH mit virtueller Maschinen-Instanz verbinden |
| `gcpha` | Details fuer Compute Engine-IP-Adresse anzeigen |

### Speicher und Datenbanken

| Alias | Beschreibung |
|:---|:---|
| `gcss` | Cloud Storage verwalten |
| `gcsq` | Cloud SQL verwalten |
| `gcdb` | Cloud Datastore verwalten |

### Serverless und Container

| Alias | Beschreibung |
|:---|:---|
| `gcf` | Cloud Functions verwalten |
| `gcro` | Cloud Run verwalten |
| `gcu` | App Engine verwalten |
| `gcs` | Kubernetes Engine-Cluster verwalten |
| `gcr` | Container-Image aus Container Registry loeschen |

### Daten und Analysen

| Alias | Beschreibung |
|:---|:---|
| `gcdp` | Cloud Dataproc verwalten |
| `gcps` | Cloud Pub/Sub verwalten |

### Netzwerk und Sicherheit

| Alias | Beschreibung |
|:---|:---|
| `gcn` | Cloud Networks verwalten |
| `gcic` | Identity and Access Management verwalten |
| `gcki` | Cloud KMS verwalten |

### Betrieb und Ueberwachung

| Alias | Beschreibung |
|:---|:---|
| `gcla` | Cloud Logging verwalten |
| `gcma` | Cloud Monitoring verwalten |
| `gclb` | Cloud Build verwalten |
| `gct` | Cloud Tasks verwalten |

### Zusaetzliche Dienste

| Alias | Beschreibung |
|:---|:---|
| `gcp` | Cloud-Projekte verwalten |
| `gcpd` | Cloud-Projekt loeschen |
| `gce` | Cloud Endpoints verwalten |
| `gcem` | Cloud Eventarc verwalten |
| `gcir` | Cloud IoT Core verwalten |
| `gcrm` | Cloud-Ressourcen verwalten |
| `gcsc` | Cloud Source Repositories verwalten |
| `gcst` | Cloud-Dienste aktivieren oder deaktivieren |
