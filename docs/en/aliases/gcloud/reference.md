---
title: Gcloud Reference Appendix | Dotfiles
description: Complete alias and helper function reference for Gcloud in Dotfiles v0.2.495. Includes every shortcut, usage example, and shell function for macOS, Linux, and WSL.
lang: en-GB
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Gcloud Reference Appendix | Dotfiles preview
canonical: /en/aliases/gcloud/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Gcloud Reference
pageType: docs
schemaType: WebPage
permalink: /en/aliases/gcloud/reference/
---

# Gcloud Reference Appendix

## Source files

- `.chezmoitemplates/aliases/gcloud/gcloud.aliases.sh`

## Alias reference

| Alias | Command |
| :--- | :--- |
| `gcaasa` | `gcloud auth activate-service-account` |
| `gcacd` | `gcloud auth configure-docker` |
| `gcal` | `gcloud auth list` |
| `gcapat` | `gcloud auth print-access-token` |
| `gcapb` | `gcloud app browse` |
| `gcapc` | `gcloud app create` |
| `gcapd` | `gcloud app deploy` |
| `gcapl` | `gcloud app logs read` |
| `gcapv` | `gcloud app versions list` |
| `gcar` | `gcloud auth revoke` |
| `gcca` | `gcloud compute addresses` |
| `gccc` | `gcloud compute instances create` |
| `gccca` | `gcloud config configurations activate` |
| `gcccc` | `gcloud config configurations create` |
| `gcccc` | `gcloud container clusters create` |
| `gcccg` | `gcloud container clusters get-credentials` |
| `gcccl` | `gcloud config configurations list` |
| `gcccl` | `gcloud container clusters list` |
| `gccgv` | `gcloud config get-value` |
| `gcci` | `gcloud components install` |
| `gccil` | `gcloud container images list-tags` |
| `gccl` | `gcloud config list` |
| `gcco` | `gcloud compute ssh` |
| `gccs` | `gcloud config set` |
| `gccsp` | `gcloud config set project` |
| `gccu` | `gcloud components update` |
| `gcd` | `gcloud config set project $(gcloud projects list --format="value(projectId)" --filter="name:${PWD##\*/}")` |
| `gcdb` | `gcloud datastore` |
| `gcdp` | `gcloud dataproc` |
| `gce` | `gcloud endpoints` |
| `gcem` | `gcloud eventarc` |
| `gcf` | `gcloud functions` |
| `gci` | `gcloud init` |
| `gci` | `gcloud compute instances` |
| `gciamk` | `gcloud iam service-accounts keys list` |
| `gciaml` | `gcloud iam list-grantable-roles` |
| `gciamp` | `gcloud iam service-accounts add-iam-policy-binding` |
| `gciamr` | `gcloud iam roles create` |
| `gciams` | `gcloud iam service-accounts set-iam-policy` |
| `gciamv` | `gcloud iam service-accounts create` |
| `gcic` | `gcloud iam` |
| `gcinf` | `gcloud info` |
| `gcir` | `gcloud iot` |
| `gck` | `gcloud config configurations list` |
| `gcki` | `gcloud kms` |
| `gckmsd` | `gcloud kms decrypt` |
| `gcla` | `gcloud logging` |
| `gclb` | `gcloud builds` |
| `gclll` | `gcloud logging logs list` |
| `gcma` | `gcloud monitoring` |
| `gcn` | `gcloud networks` |
| `gcp` | `gcloud projects` |
| `gcpa` | `gcloud projects add-iam-policy-binding` |
| `gcpc` | `gcloud compute copy-files` |
| `gcpd` | `gcloud projects describe` |
| `gcpd` | `gcloud projects delete` |
| `gcpdown` | `gcloud compute instances stop` |
| `gcpds` | `gcloud compute disks snapshot` |
| `gcpha` | `gcloud compute addresses describe` |
| `gcpid` | `gcloud compute instances describe` |
| `gcpil` | `gcloud compute instances list` |
| `gcprm` | `gcloud compute instances delete` |
| `gcps` | `gcloud pubsub` |
| `gcpsk` | `gcloud compute snapshots delete` |
| `gcpssh` | `gcloud compute ssh` |
| `gcpup` | `gcloud compute instances start` |
| `gcpzl` | `gcloud compute zones list` |
| `gcr` | `gcloud container images delete` |
| `gcrm` | `gcloud resource-manager` |
| `gcro` | `gcloud run` |
| `gcs` | `gcloud container clusters` |
| `gcsa` | `gcloud config set account` |
| `gcsc` | `gcloud source` |
| `gcso` | `gcloud organizations` |
| `gcsq` | `gcloud sql` |
| `gcsqlb` | `gcloud sql backups describe` |
| `gcsqle` | `gcloud sql export sql` |
| `gcss` | `gcloud storage` |
| `gcst` | `gcloud services` |
| `gct` | `gcloud tasks` |
| `gcu` | `gcloud app` |
| `gcv` | `gcloud version` |

## Validation

- Run `chezmoi apply` after alias updates.
- Run `dot doctor` to validate your shell state.
