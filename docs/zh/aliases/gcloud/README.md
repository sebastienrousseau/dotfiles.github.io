---
description: The Google Cloud aliases, provide memorable commands for operating on the Google Cloud platform. All of these functions and aliases are wrappers around the Google Cloud SDK command line tools.
lang: zh-CN
metaTitle: The Google Cloud aliases - Dotfiles (CN)
permalink: /zh/aliases/gcloud/

meta:
  - name: keywords
    content: aliases, gcloud, googlecloud, google, cloud, sdk, command line, cli, bash, configuration, dotfiles, linux, macos, shell, windows
  - name: twitter:card
    content: The Google Cloud aliases, provide memorable commands for operating on the Google Cloud platform. All of these functions and aliases are wrappers around the Google Cloud SDK command line tools.
  - name: twitter:description
    content: The Google Cloud aliases, provide memorable commands for operating on the Google Cloud platform. All of these functions and aliases are wrappers around the Google Cloud SDK command line tools.
  - name: twitter:title
    content: The Google Cloud aliases - Dotfiles (CN)
  - name: og:title
    content: The Google Cloud aliases - Dotfiles (CN)
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

| 别名  | 命令                   | 描述                                                                       |
| ----- | --------------------------- | ----------------------------------------------------- |
| gcci  | `gcloud components install` | 安装 specific components.                          |
| gccsp | `gcloud config set project` | Set a default Google Cloud project to work on.        |
| gccu  | `gcloud components update`  | 更新 your Cloud SDK to the latest version.          |
| gci   | `gcloud init`               | 初始化, authorize, and configure the gcloud tool. |
| gcinf | `gcloud info`               | Display current gcloud tool environment details.      |
| gcv   | `gcloud version`            | Display version and installed components.             |

## Custom

| 别名  | 命令                   | 描述                                                                       |
| ----- | --------------------------------------- | -------------------------------------------------------------------- |
| gccca | `gcloud config configurations activate` | Switch to an existing named configuration.                           |
| gcccc | `gcloud config configurations create`   | 创建 a new named configuration.                                    |
| gcccl | `gcloud config configurations list`     | Display a 列出 of all available configurations.                      |
| gccgv | `gcloud config get-value`               | Fetch value of a Cloud SDK property.                                 |
| gccl  | `gcloud config list`                    | Display all the properties for the current configuration.            |
| gccs  | `gcloud config set`                     | Define a property (like compute/zone) for the current configuration. |

## Authorization

| Alias  | Command                                | Description                                                                                                       |
| ------ | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| gcaasa | `gcloud auth activate-service-account` | Like gcloud auth login but with service account credentials.                                                      |
| gcacd  | `gcloud auth configure-docker`         | Register the gcloud tool as a Docker credential helper.                                                           |
| gcal   | `gcloud auth list`                     | 列出 all credentialed accounts.                                                                                   |
| gcal   | `gcloud auth login`                    | Authorize Google Cloud access for the gcloud tool with Google user credentials and set current account as active. |
| gcapat | `gcloud auth print-access-token`       | Display the current account's access token.                                                                       |
| gcar   | `gcloud auth revoke`                   | 移除 access credentials for an account.                                                                         |

## Cloud Identity & Access Management (IAM)

| Alias  | Command                                              | Description                                     |
| ------ | ---------------------------------------------------- | ----------------------------------------------- |
| gciamk | `gcloud iam service-accounts keys list`              | 列出 a service account's keys.                  |
| gciaml | `gcloud iam list-grantable-roles`                    | 列出 IAM grantable roles for a resource.        |
| gciamp | `gcloud iam service-accounts add-iam-policy-binding` | 添加 an IAM policy binding to a service account. |
| gciamr | `gcloud iam roles create`                            | 创建 a custom role for a project or org.      |
| gciams | `gcloud iam service-accounts set-iam-policy`         | Replace existing IAM policy binding.            |
| gciamv | `gcloud iam service-accounts create`                 | 创建 a service account for a project.         |

## Access policies

| 别名  | 命令                   | 描述                                                                       |
| ----- | ---------------------------------------- | -------------------------------------------------- |
| gcpa  | `gcloud projects add-iam-policy-binding` | 添加 an IAM policy binding to a specified project.  |
| gcpd  | `gcloud projects describe`               | Display metadata for a project (including its ID). |

## Kubernetes

| 别名  | 命令                   | 描述                                                                       |
| ----- | ------------------------------------------- | ------------------------------------------------------ |
| gcccc | `gcloud container clusters create`          | 创建 a cluster to run GKE containers.                |
| gcccg | `gcloud container clusters get-credentials` | 更新 kubeconfig to get kubectl to use a GKE cluster. |
| gcccl | `gcloud container clusters list`            | 列出 clusters for running GKE containers.              |
| gccil | `gcloud container images list-tags`         | 列出 tag and digest metadata for a container image.    |

## VMs

| Alias   | Command                             | Description                            |
| ------- | ----------------------------------- | -------------------------------------- |
| gcpc    | `gcloud compute copy-files`         | 复制 文件                             |
| gcpdown | `gcloud compute instances stop`     | 停止 instance                          |
| gcpds   | `gcloud compute disks snapshot`     | 创建 snapshot of persistent disks.   |
| gcpid   | `gcloud compute instances describe` | Display a VM instance's details.       |
| gcpil   | `gcloud compute instances list`     | 列出 all VM instances in a project.    |
| gcprm   | `gcloud compute instances delete`   | 删除 instance                        |
| gcpsk   | `gcloud compute snapshots delete`   | 删除 a snapshot.                     |
| gcpssh  | `gcloud compute ssh`                | Connect to a VM instance by using SSH. |
| gcpup   | `gcloud compute instances start`    | 开始 instance.                        |
| gcpzl   | `gcloud compute zones list`         | 列出 Compute Engine zones.             |

## gcloud aliases to build highly scalable applications on a fully managed serverless platform

| 别名  | 命令                   | 描述                                                                       |
| ----- | -------------------------- | -------------------------------------------------------------------- |
| gcapb | `gcloud app browse`        | 打开 the current app in a web browser.                               |
| gcapc | `gcloud app create`        | 创建 an App Engine app within your current project.                |
| gcapd | `gcloud app deploy`        | Deploy your app's code and configuration to the App Engine server.   |
| gcapl | `gcloud app logs read`     | Display the latest App Engine app logs.                              |
| gcapv | `gcloud app versions list` | 列出 all versions of all services deployed to the App Engine server. |

## gcloud aliases to commands that might come in handy

| Alias  | Command                       | Description                                                                                    |
| ------ | ----------------------------- | ---------------------------------------------------------------------------------------------- |
| gckmsd | `gcloud kms decrypt`          | Decrypt ciphertext (to a plaintext 文件) using a Cloud Key Management Service (Cloud KMS) key. |
| gclll  | `gcloud logging logs list`    | 列出 your project's logs.                                                                      |
| gcsqlb | `gcloud sql backups describe` | Display info about a Cloud SQL instance backup.                                                |
| gcsqle | `gcloud sql export sql`       | Export data from a Cloud SQL instance to a SQL 文件.                                           |
