---
description: The Google Cloud aliases, provide memorable commands for operating on the Google Cloud platform. All of these functions and aliases are wrappers around the Google Cloud SDK command line tools.
lang: de-DE
metaTitle: The Google Cloud aliases - Dotfiles (DE)
permalink: /de/aliases/gcloud/

meta:
  - name: keywords
    content: aliases, gcloud, googlecloud, google, cloud, sdk, command line, cli, bash, configuration, dotfiles, linux, macos, shell, windows
  - name: twitter:card
    content: The Google Cloud aliases, provide memorable commands for operating on the Google Cloud platform. All of these functions and aliases are wrappers around the Google Cloud SDK command line tools.
  - name: twitter:description
    content: The Google Cloud aliases, provide memorable commands for operating on the Google Cloud platform. All of these functions and aliases are wrappers around the Google Cloud SDK command line tools.
  - name: twitter:title
    content: The Google Cloud aliases - Dotfiles (DE)
  - name: og:title
    content: The Google Cloud aliases - Dotfiles (DE)
  - name: og:description
    content: The Google Cloud aliases, provide memorable commands for operating on the Google Cloud platform. All of these functions and aliases are wrappers around the Google Cloud SDK command line tools.
  - name: og:image:alt
    content: Dotfiles - Simply designed to fit your shell life
  - name: og:locale
    content: en_GB
---

# Google Cloud aliases

The `gcloud.aliases.sh` file creates helpful shortcut aliases for many commonly
[Google Cloud](https://cloud.google.com/) commands.

The Google Cloud aliases, provide memorable commands for operating on the Google
Cloud platform. All of these functions and aliases are wrappers around the
Google Cloud SDK command line tools.

## Command-line tool

| Alias | Befehl                | Beschreibung                                                               |
| ----- | --------------------------- | ----------------------------------------------------- |
| gcci  | `gcloud components install` | Installieren specific components.                          |
| gccsp | `gcloud config set project` | Set a default Google Cloud project to work on.        |
| gccu  | `gcloud components update`  | Aktualisieren your Cloud SDK to the latest version.          |
| gci   | `gcloud init`               | Initialisieren, authorize, and configure the gcloud tool. |
| gcinf | `gcloud info`               | Display current gcloud tool environment details.      |
| gcv   | `gcloud version`            | Display version and installed components.             |

## Custom

| Alias | Befehl                | Beschreibung                                                               |
| ----- | --------------------------------------- | -------------------------------------------------------------------- |
| gccca | `gcloud config configurations activate` | Switch to an existing named configuration.                           |
| gcccc | `gcloud config configurations create`   | Erstellen a new named configuration.                                    |
| gcccl | `gcloud config configurations list`     | Display a Auflisten of all available configurations.                      |
| gccgv | `gcloud config get-value`               | Fetch value of a Cloud SDK property.                                 |
| gccl  | `gcloud config list`                    | Display all the properties for the current configuration.            |
| gccs  | `gcloud config set`                     | Define a property (like compute/zone) for the current configuration. |

## Authorization

| Alias  | Command                                | Description                                                                                                       |
| ------ | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| gcaasa | `gcloud auth activate-service-account` | Like gcloud auth login but with service account credentials.                                                      |
| gcacd  | `gcloud auth configure-docker`         | Register the gcloud tool as a Docker credential helper.                                                           |
| gcal   | `gcloud auth list`                     | Auflisten all credentialed accounts.                                                                                   |
| gcal   | `gcloud auth login`                    | Authorize Google Cloud access for the gcloud tool with Google user credentials and set current account as active. |
| gcapat | `gcloud auth print-access-token`       | Display the current account's access token.                                                                       |
| gcar   | `gcloud auth revoke`                   | Entfernen access credentials for an account.                                                                         |

## Cloud Identity & Access Management (IAM)

| Alias  | Command                                              | Description                                     |
| ------ | ---------------------------------------------------- | ----------------------------------------------- |
| gciamk | `gcloud iam service-accounts keys list`              | Auflisten a service account's keys.                  |
| gciaml | `gcloud iam list-grantable-roles`                    | Auflisten IAM grantable roles for a resource.        |
| gciamp | `gcloud iam service-accounts add-iam-policy-binding` | Hinzufügen an IAM policy binding to a service account. |
| gciamr | `gcloud iam roles create`                            | Erstellen a custom role for a project or org.      |
| gciams | `gcloud iam service-accounts set-iam-policy`         | Replace existing IAM policy binding.            |
| gciamv | `gcloud iam service-accounts create`                 | Erstellen a service account for a project.         |

## Access policies

| Alias | Befehl                | Beschreibung                                                               |
| ----- | ---------------------------------------- | -------------------------------------------------- |
| gcpa  | `gcloud projects add-iam-policy-binding` | Hinzufügen an IAM policy binding to a specified project.  |
| gcpd  | `gcloud projects describe`               | Display metadata for a project (including its ID). |

## Kubernetes

| Alias | Befehl                | Beschreibung                                                               |
| ----- | ------------------------------------------- | ------------------------------------------------------ |
| gcccc | `gcloud container clusters create`          | Erstellen a cluster to run GKE containers.                |
| gcccg | `gcloud container clusters get-credentials` | Aktualisieren kubeconfig to get kubectl to use a GKE cluster. |
| gcccl | `gcloud container clusters list`            | Auflisten clusters for running GKE containers.              |
| gccil | `gcloud container images list-tags`         | Auflisten tag and digest metadata for a container image.    |

## VMs

| Alias   | Command                             | Description                            |
| ------- | ----------------------------------- | -------------------------------------- |
| gcpc    | `gcloud compute copy-files`         | Kopieren Dateien                             |
| gcpdown | `gcloud compute instances stop`     | Stoppen instance                          |
| gcpds   | `gcloud compute disks snapshot`     | Erstellen snapshot of persistent disks.   |
| gcpid   | `gcloud compute instances describe` | Display a VM instance's details.       |
| gcpil   | `gcloud compute instances list`     | Auflisten all VM instances in a project.    |
| gcprm   | `gcloud compute instances delete`   | Löschen instance                        |
| gcpsk   | `gcloud compute snapshots delete`   | Löschen a snapshot.                     |
| gcpssh  | `gcloud compute ssh`                | Connect to a VM instance by using SSH. |
| gcpup   | `gcloud compute instances start`    | Starten instance.                        |
| gcpzl   | `gcloud compute zones list`         | Auflisten Compute Engine zones.             |

## gcloud aliases to build highly scalable applications on a fully managed serverless platform

| Alias | Befehl                | Beschreibung                                                               |
| ----- | -------------------------- | -------------------------------------------------------------------- |
| gcapb | `gcloud app browse`        | Öffnen the current app in a web browser.                               |
| gcapc | `gcloud app create`        | Erstellen an App Engine app within your current project.                |
| gcapd | `gcloud app deploy`        | Deploy your app's code and configuration to the App Engine server.   |
| gcapl | `gcloud app logs read`     | Display the latest App Engine app logs.                              |
| gcapv | `gcloud app versions list` | Auflisten all versions of all services deployed to the App Engine server. |

## gcloud aliases to commands that might come in handy

| Alias  | Command                       | Description                                                                                    |
| ------ | ----------------------------- | ---------------------------------------------------------------------------------------------- |
| gckmsd | `gcloud kms decrypt`          | Decrypt ciphertext (to a plaintext Datei) using a Cloud Key Management Service (Cloud KMS) key. |
| gclll  | `gcloud logging logs list`    | Auflisten your project's logs.                                                                      |
| gcsqlb | `gcloud sql backups describe` | Display info about a Cloud SQL instance backup.                                                |
| gcsqle | `gcloud sql export sql`       | Export data from a Cloud SQL instance to a SQL Datei.                                           |
