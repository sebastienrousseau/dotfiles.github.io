---
description: Les alias GCloud fournissent des raccourcis pour les commandes CLI de Google Cloud.
lang: fr-FR
metaTitle: Les alias GCloud - Dotfiles (FR)
permalink: /aliases/gcloud/

meta:
  - name: keywords
    content: aliases, gcloud, googlecloud, google, cloud, sdk, command line, cli, bash, configuration, dotfiles, linux, macos, shell, windows
  - name: twitter:card
    content: Les alias GCloud fournissent des raccourcis pour les commandes CLI de Google Cloud.
  - name: twitter:description
    content: Les alias GCloud fournissent des raccourcis pour les commandes CLI de Google Cloud.
  - name: twitter:title
    content: Les alias GCloud - Dotfiles (FR)
  - name: og:title
    content: Les alias GCloud - Dotfiles (FR)
  - name: og:description
    content: Les alias GCloud fournissent des raccourcis pour les commandes CLI de Google Cloud.
  - name: og:image:alt
    content: Les Dotfiles - Conçus pour s'adapter à votre vie de shell
  - name: og:locale
    content: fr_FR
---

# Les alias GCloud

Le fichier `gcloud.aliases.bash` contient des alias pour les commandes du
[Google Cloud CLI][gcloud]. Ils sont utilisés pour effectuer des tâches
courantes à partir de la ligne de commande.

Google Cloud CLI est un ensemble d'outils permettant de créer et de gérer les
ressources Google Cloud.

## Raccourcis GCloud

### Commandes de base

| Alias | Commande                    | Description                                                         |
| ----- | --------------------------- | ------------------------------------------------------------------- |
| gcci  | `gcloud components install` | Installe un composant de la CLI de Google Cloud                     |
| gccsp | `gcloud config set project` | Définit le projet actuel pour la CLI de Google Cloud                |
| gccu  | `gcloud components update`  | Met à jour les composants de la CLI de Google Cloud                 |
| gci   | `gcloud init`               | Initialise la CLI de Google Cloud                                   |
| gcinf | `gcloud info`               | Affiche les informations de configuration de la CLI de Google Cloud |
| gcv   | `gcloud version`            | Affiche la version de la CLI de Google Cloud                        |

### Configuration de la CLI de Google Cloud

| Alias | Commande                                | Description                                                                  |
| ----- | --------------------------------------- | ---------------------------------------------------------------------------- |
| gccca | `gcloud config configurations activate` | Active une configuration de la CLI de Google Cloud                           |
| gcccc | `gcloud config configurations create`   | Crée une configuration de la CLI de Google Cloud                             |
| gcccl | `gcloud config configurations list`     | Affiche la liste des configurations de la CLI de Google Cloud                |
| gccgv | `gcloud config get-value`               | Affiche la valeur d'une propriété de configuration de la CLI de Google Cloud |
| gccl  | `gcloud config list`                    | Affiche la liste des propriétés de configuration de la CLI de Google Cloud   |
| gccs  | `gcloud config set`                     | Définit une propriété de configuration de la CLI de Google Cloud             |

### Autorisation de la CLI de Google Cloud

| Alias  | Commande                               | Description                                                      |
| ------ | -------------------------------------- | ---------------------------------------------------------------- |
| gcaasa | `gcloud auth activate-service-account` | Active un compte de service de la CLI de Google Cloud            |
| gcacd  | `gcloud auth configure-docker`         | Configure l'authentification Docker pour la CLI de Google Cloud  |
| gcal   | `gcloud auth list`                     | Affiche la liste des comptes de la CLI de Google Cloud           |
| gcal   | `gcloud auth login`                    | Connecte un compte utilisateur à la CLI de Google Cloud          |
| gcapat | `gcloud auth print-access-token`       | Affiche le jeton d'accès de la CLI de Google Cloud               |
| gcar   | `gcloud auth revoke`                   | Révoque l'accès d'un compte utilisateur à la CLI de Google Cloud |

### Services des comptes de la CLI de Google Cloud

| Alias  | Commande                                             | Description                                                                                        |
| ------ | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| gciamk | `gcloud iam service-accounts keys list`              | Affiche la liste des clés de service des comptes de la CLI de Google Cloud                         |
| gciaml | `gcloud iam list-grantable-roles`                    | Affiche la liste des rôles pouvant être attribués à un compte de service de la CLI de Google Cloud |
| gciamp | `gcloud iam service-accounts add-iam-policy-binding` | Ajoute un rôle à un compte de service de la CLI de Google Cloud                                    |
| gciamr | `gcloud iam roles create`                            | Crée un rôle de la CLI de Google Cloud                                                             |
| gciams | `gcloud iam service-accounts set-iam-policy`         | Définit la politique de compte de service de la CLI de Google Cloud                                |
| gciamv | `gcloud iam service-accounts create`                 | Crée un compte de service de la CLI de Google Cloud                                                |

### Les polices d'accès de la CLI de Google Cloud

| Alias | Commande                                 | Description                                                    |
| ----- | ---------------------------------------- | -------------------------------------------------------------- |
| gcpa  | `gcloud projects add-iam-policy-binding` | Ajoute un rôle à un projet de la CLI de Google Cloud           |
| gcpd  | `gcloud projects describe`               | Affiche les informations d'un projet de la CLI de Google Cloud |

### Kubernetes

| Alias | Commande                                    | Description                                                            |
| ----- | ------------------------------------------- | ---------------------------------------------------------------------- |
| gcccc | `gcloud container clusters create`          | Crée un cluster Kubernetes de la CLI de Google Cloud                   |
| gcccg | `gcloud container clusters get-credentials` | Configure l'accès à un cluster Kubernetes de la CLI de Google Cloud    |
| gcccl | `gcloud container clusters list`            | Affiche la liste des clusters Kubernetes de la CLI de Google Cloud     |
| gccil | `gcloud container images list-tags`         | Affiche la liste des tags d'une image Docker de la CLI de Google Cloud |

### VMs

| Alias   | Commande                            | Description                                                                |
| ------- | ----------------------------------- | -------------------------------------------------------------------------- |
| gcpc    | `gcloud compute copy-files`         | Copie des fichiers vers une machine virtuelle de la CLI de Google Cloud    |
| gcpdown | `gcloud compute instances stop`     | Arrête une machine virtuelle de la CLI de Google Cloud                     |
| gcpds   | `gcloud compute disks snapshot`     | Crée une image instantanée d'un disque de la CLI de Google Cloud           |
| gcpid   | `gcloud compute instances describe` | Affiche les informations d'une machine virtuelle de la CLI de Google Cloud |
| gcpil   | `gcloud compute instances list`     | Affiche la liste des machines virtuelles de la CLI de Google Cloud         |
| gcprm   | `gcloud compute instances delete`   | Supprime une machine virtuelle de la CLI de Google Cloud                   |
| gcpsk   | `gcloud compute snapshots delete`   | Supprime une image instantanée de la CLI de Google Cloud                   |
| gcpssh  | `gcloud compute ssh`                | Connecte à une machine virtuelle de la CLI de Google Cloud                 |
| gcpup   | `gcloud compute instances start`    | Démarre une machine virtuelle de la CLI de Google Cloud                    |
| gcpzl   | `gcloud compute zones list`         | Affiche la liste des zones de la CLI de Google Cloud                       |

### Alias pour créer des applications scalable et répliquées

| Alias | Commande                   | Description                                                               |
| ----- | -------------------------- | ------------------------------------------------------------------------- |
| gcapb | `gcloud app browse`        | Ouvre l'application dans le navigateur de la CLI de Google Cloud          |
| gcapc | `gcloud app create`        | Crée une application de la CLI de Google Cloud                            |
| gcapd | `gcloud app deploy`        | Déploie une application de la CLI de Google Cloud                         |
| gcapl | `gcloud app logs read`     | Affiche les logs d'une application de la CLI de Google Cloud              |
| gcapv | `gcloud app versions list` | Affiche la liste des versions d'une application de la CLI de Google Cloud |

### Alias pratiques

| Alias  | Commande                      | Description                                                         |
| ------ | ----------------------------- | ------------------------------------------------------------------- |
| gckmsd | `gcloud kms decrypt`          | Déchiffre un fichier avec KMS de la CLI de Google Cloud             |
| gclll  | `gcloud logging logs list`    | Affiche la liste des logs de la CLI de Google Cloud                 |
| gcsqlb | `gcloud sql backups describe` | Affiche les informations d'une sauvegarde de la CLI de Google Cloud |
| gcsqle | `gcloud sql export sql`       | Exporte une base de données de la CLI de Google Cloud               |

[gcloud]: https://cloud.google.com/sdk/gcloud/
