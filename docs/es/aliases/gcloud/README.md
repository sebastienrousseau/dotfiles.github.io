---
description: Los alias de Google Cloud proporcionan comandos memorables para operar en la plataforma Google Cloud. Todas estas funciones y alias son envoltorios alrededor de las herramientas de linea de comandos del SDK de Google Cloud.
lang: es-ES
metaTitle: Los alias de Google Cloud - Dotfiles (ES)
permalink: /es/aliases/gcloud/

meta:
  - name: keywords
    content: aliases, gcloud, googlecloud, google, cloud, sdk, command line, cli, bash, configuration, dotfiles, linux, macos, shell, windows
  - name: twitter:card
    content: Los alias de Google Cloud proporcionan comandos memorables para operar en la plataforma Google Cloud. Todas estas funciones y alias son envoltorios alrededor de las herramientas de linea de comandos del SDK de Google Cloud.
  - name: twitter:description
    content: Los alias de Google Cloud proporcionan comandos memorables para operar en la plataforma Google Cloud. Todas estas funciones y alias son envoltorios alrededor de las herramientas de linea de comandos del SDK de Google Cloud.
  - name: twitter:title
    content: Los alias de Google Cloud - Dotfiles (ES)
  - name: og:title
    content: Los alias de Google Cloud - Dotfiles (ES)
  - name: og:description
    content: Los alias de Google Cloud proporcionan comandos memorables para operar en la plataforma Google Cloud. Todas estas funciones y alias son envoltorios alrededor de las herramientas de linea de comandos del SDK de Google Cloud.
  - name: og:image:alt
    content: Dotfiles - Simplemente disenado para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---
# Alias de Google Cloud

Gestionar alias de Google Cloud. Parte de la configuracion **Universal Dotfiles**.

![Dotfiles banner][banner]

## 📖 Descripcion

Estos alias estan definidos en `gcloud.aliases.sh` y se cargan automaticamente por `chezmoi`.

## ⚡ Alias

Este codigo proporciona un conjunto de alias de comandos para gestionar varios servicios de Google
Cloud, como Compute Engine, Identity and Access Management y Cloud SQL. Estos alias ayudan a
agilizar la gestion de recursos de Google Cloud con comandos simples y memorables para casos de uso
comunes.
- `gclb` gestiona Google Cloud Build.
- `gcca` gestiona direcciones IP de Compute Engine.
- `gccc` crea una nueva instancia de maquina virtual.
- `gcco` conecta a una instancia de maquina virtual usando SSH.
- `gcd` establece el proyecto por defecto con el nombre del directorio actual.
- `gcdb` gestiona Google Cloud Datastore.
- `gcdp` gestiona Google Cloud Dataproc.
- `gce` gestiona Google Cloud Endpoints.
- `gcem` gestiona Google Cloud Eventarc.
- `gcf` gestiona Google Cloud Functions.
- `gci` gestiona instancias de Google Cloud Compute Engine.
- `gcic` gestiona Google Cloud Identity and Access Management.
- `gcir` gestiona Google Cloud IoT Core.
- `gck` lista todas las configuraciones.
- `gcki` gestiona Google Cloud KMS.
- `gcla` gestiona Google Cloud Logging.
- `gcma` gestiona Google Cloud Monitoring.
- `gcn` gestiona Google Cloud Networks.
- `gcp` gestiona proyectos de Google Cloud.
- `gcpd` elimina un proyecto de Google Cloud.
- `gcpha` muestra detalles de una IP de Compute Engine.
- `gcps` gestiona Google Cloud Pub/Sub.
- `gcr` elimina una imagen de contenedor de Google Container Registry.
- `gcrm` gestiona recursos de Google Cloud.
- `gcro` gestiona Google Cloud Run.
- `gcs` gestiona clusters de Google Cloud Kubernetes Engine.
- `gcsa` establece la cuenta para la configuracion actual.
- `gcsc` gestiona Google Cloud Source Repositories.
- `gcso` abre la consola de Google Cloud para el proyecto actual.
- `gcsq` gestiona Google Cloud SQL.
- `gcss` gestiona Google Cloud Storage.
- `gcst` habilita o deshabilita servicios de Google Cloud.
- `gct` gestiona Google Cloud Tasks.
- `gcu` gestiona Google Cloud App Engine.

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
