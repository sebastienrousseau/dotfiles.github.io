---
description: Die Google-Cloud-Aliase bieten merkbare Befehle fuer die Arbeit mit der Google-Cloud-Plattform. Alle Funktionen und Aliase sind Wrapper um die Google-Cloud-SDK CLI.
lang: de-DE
metaTitle: Die Google-Cloud-Aliase - Dotfiles (DE)
permalink: /de/aliases/gcloud/

meta:
  - name: keywords
    content: aliases, gcloud, googlecloud, google, cloud, sdk, command line, cli, bash, configuration, dotfiles, linux, macos, shell, windows
  - name: twitter:card
    content: Die Google-Cloud-Aliase bieten merkbare Befehle fuer die Arbeit mit der Google-Cloud-Plattform. Alle Funktionen und Aliase sind Wrapper um die Google-Cloud-SDK CLI.
  - name: twitter:description
    content: Die Google-Cloud-Aliase bieten merkbare Befehle fuer die Arbeit mit der Google-Cloud-Plattform. Alle Funktionen und Aliase sind Wrapper um die Google-Cloud-SDK CLI.
  - name: twitter:title
    content: Die Google-Cloud-Aliase - Dotfiles (DE)
  - name: og:title
    content: Die Google-Cloud-Aliase - Dotfiles (DE)
  - name: og:description
    content: Die Google-Cloud-Aliase bieten merkbare Befehle fuer die Arbeit mit der Google-Cloud-Plattform. Alle Funktionen und Aliase sind Wrapper um die Google-Cloud-SDK CLI.
  - name: og:image:alt
    content: Dotfiles - Einfach entworfen fuer dein Shell-Leben
  - name: og:locale
    content: de_DE
---
# Google-Cloud-Aliase

Google-Cloud-Aliase verwalten. Teil der **Universal Dotfiles** Konfiguration.

![Dotfiles banner][banner]

## 📖 Beschreibung

Diese Aliase sind in `gcloud.aliases.sh` definiert und werden automatisch von `chezmoi` geladen.

## ⚡ Aliase

Dieser Code bietet eine Reihe von Aliasen fuer verschiedene Google-Cloud-Services
wie Compute Engine, Identity and Access Management und Cloud SQL.
- `gclb` verwaltet Google Cloud Build.
- `gcca` verwaltet Compute-Engine-IP-Adressen.
- `gccc` erstellt eine neue VM-Instanz.
- `gcco` verbindet per SSH mit einer VM-Instanz.
- `gcd` setzt das Standardprojekt auf den aktuellen Verzeichnisnamen.
- `gcdb` verwaltet Google Cloud Datastore.
- `gcdp` verwaltet Google Cloud Dataproc.
- `gce` verwaltet Google Cloud Endpoints.
- `gcem` verwaltet Google Cloud Eventarc.
- `gcf` verwaltet Google Cloud Functions.
- `gci` verwaltet Google-Cloud-Compute-Engine-Instanzen.
- `gcic` verwaltet Google Cloud Identity and Access Management.
- `gcir` verwaltet Google Cloud IoT Core.
- `gck` listet alle Konfigurationen.
- `gcki` verwaltet Google Cloud KMS.
- `gcla` verwaltet Google Cloud Logging.
- `gcma` verwaltet Google Cloud Monitoring.
- `gcn` verwaltet Google Cloud Networks.
- `gcp` verwaltet Google Cloud Projekte.
- `gcpd` loescht ein Google-Cloud-Projekt.
- `gcpha` zeigt Details zu einer Compute-Engine-IP.
- `gcps` verwaltet Google Cloud Pub/Sub.
- `gcr` loescht ein Container-Image aus Google Container Registry.
- `gcrm` verwaltet Google-Cloud-Ressourcen.
- `gcro` verwaltet Google Cloud Run.
- `gcs` verwaltet Google Cloud Kubernetes Engine Cluster.
- `gcsa` setzt das Konto fuer die aktuelle Konfiguration.
- `gcsc` verwaltet Google Cloud Source Repositories.
- `gcso` oeffnet die Google-Cloud-Konsole fuer das aktuelle Projekt.
- `gcsq` verwaltet Google Cloud SQL.
- `gcss` verwaltet Google Cloud Storage.
- `gcst` aktiviert oder deaktiviert Google-Cloud-Services.
- `gct` verwaltet Google Cloud Tasks.
- `gcu` verwaltet Google Cloud App Engine.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
