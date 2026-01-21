---
description: Google Cloud 别名提供了用于在 Google Cloud 平台上操作的易记命令。所有这些函数和别名都是对 Google Cloud SDK 命令行工具的封装。
lang: zh-CN
metaTitle: Google Cloud 别名 - Dotfiles (CN)
permalink: /zh/aliases/gcloud/
---

# Google Cloud 别名

`gcloud.aliases.sh` 文件为许多常用的 [Google Cloud](https://cloud.google.com/) 命令创建了有用的快捷别名。

Google Cloud 别名提供了用于在 Google Cloud 平台上操作的易记命令。
所有这些函数和别名都是对 Google Cloud SDK 命令行工具的封装。

## 命令行工具

| 别名  | 命令                        | 描述                                 |
| ----- | --------------------------- | ------------------------------------ |
| gcci  | `gcloud components install` | 安装特定组件。                       |
| gccsp | `gcloud config set project` | 设置要工作的默认 Google Cloud 项目。 |
| gccu  | `gcloud components update`  | 将您的 Cloud SDK 更新到最新版本。    |
| gci   | `gcloud init`               | 初始化、授权并配置 gcloud 工具。     |
| gcinf | `gcloud info`               | 显示当前 gcloud 工具环境详细信息。   |
| gcv   | `gcloud version`            | 显示版本和已安装的组件。             |

## 自定义

| 别名  | 命令                                    | 描述                                    |
| ----- | --------------------------------------- | --------------------------------------- |
| gccca | `gcloud config configurations activate` | 切换到现有的命名配置。                  |
| gcccc | `gcloud config configurations create`   | 创建一个新的命名配置。                  |
| gcccl | `gcloud config configurations list`     | 显示所有可用配置的列表。                |
| gccgv | `gcloud config get-value`               | 获取 Cloud SDK 属性的值。               |
| gccl  | `gcloud config list`                    | 显示当前配置的所有属性。                |
| gccs  | `gcloud config set`                     | 为当前配置定义属性（如 compute/zone）。 |

## 授权

| 别名   | 命令                                   | 描述                                                                                |
| ------ | -------------------------------------- | ----------------------------------------------------------------------------------- |
| gcaasa | `gcloud auth activate-service-account` | 类似于 gcloud auth login，但使用服务帐户凭据。                                      |
| gcacd  | `gcloud auth configure-docker`         | 将 gcloud 工具注册为 Docker 凭据帮助程序。                                          |
| gcal   | `gcloud auth list`                     | 列出所有已获得凭据的帐户。                                                          |
| gcal   | `gcloud auth login`                    | 使用 Google 用户凭据授权 gcloud 工具访问 Google Cloud，并将当前帐户设置为活动帐户。 |
| gcapat | `gcloud auth print-access-token`       | 显示当前帐户的访问令牌。                                                            |
| gcar   | `gcloud auth revoke`                   | 删除帐户的访问凭据。                                                                |

## Cloud Identity & Access Management (IAM)

| 别名   | 命令                                                 | 描述                          |
| ------ | ---------------------------------------------------- | ----------------------------- |
| gciamk | `gcloud iam service-accounts keys list`              | 列出服务帐户的密钥。          |
| gciaml | `gcloud iam list-grantable-roles`                    | 列出资源的可授予 IAM 角色。   |
| gciamp | `gcloud iam service-accounts add-iam-policy-binding` | 向服务帐户添加 IAM 策略绑定。 |
| gciamr | `gcloud iam roles create`                            | 为项目或组织创建自定义角色。  |
| gciams | `gcloud iam service-accounts set-iam-policy`         | 替换现有的 IAM 策略绑定。     |
| gciamv | `gcloud iam service-accounts create`                 | 为项目创建服务帐户。          |

## 访问策略

| 别名 | 命令                                     | 描述                            |
| ---- | ---------------------------------------- | ------------------------------- |
| gcpa | `gcloud projects add-iam-policy-binding` | 向指定项目添加 IAM 策略绑定。   |
| gcpd | `gcloud projects describe`               | 显示项目的元数据（包括其 ID）。 |

## Kubernetes

| 别名  | 命令                                        | 描述                                         |
| ----- | ------------------------------------------- | -------------------------------------------- |
| gcccc | `gcloud container clusters create`          | 创建一个集群来运行 GKE 容器。                |
| gcccg | `gcloud container clusters get-credentials` | 更新 kubeconfig 以使 kubectl 使用 GKE 集群。 |
| gcccl | `gcloud container clusters list`            | 列出用于运行 GKE 容器的集群。                |
| gccil | `gcloud container images list-tags`         | 列出容器镜像的标签和摘要元数据。             |

## 虚拟机 (VMs)

| 别名    | 命令                                | 描述                       |
| ------- | ----------------------------------- | -------------------------- |
| gcpc    | `gcloud compute copy-files`         | 复制文件。                 |
| gcpdown | `gcloud compute instances stop`     | 停止实例。                 |
| gcpds   | `gcloud compute disks snapshot`     | 创建持久磁盘的快照。       |
| gcpid   | `gcloud compute instances describe` | 显示 VM 实例的详细信息。   |
| gcpil   | `gcloud compute instances list`     | 列出项目中的所有 VM 实例。 |
| gcprm   | `gcloud compute instances delete`   | 删除实例。                 |
| gcpsk   | `gcloud compute snapshots delete`   | 删除快照。                 |
| gcpssh  | `gcloud compute ssh`                | 使用 SSH 连接到 VM 实例。  |
| gcpup   | `gcloud compute instances start`    | 启动实例。                 |
| gcpzl   | `gcloud compute zones list`         | 列出 Compute Engine 区域。 |

## 用于在完全托管的无服务器平台上构建高度可扩展应用程序的 gcloud 别名

| 别名  | 命令                       | 描述                                               |
| ----- | -------------------------- | -------------------------------------------------- |
| gcapb | `gcloud app browse`        | 在 Web 浏览器中打开当前应用程序。                  |
| gcapc | `gcloud app create`        | 在当前项目中创建 App Engine 应用程序。             |
| gcapd | `gcloud app deploy`        | 将应用程序的代码和配置部署到 App Engine 服务器。   |
| gcapl | `gcloud app logs read`     | 显示最新的 App Engine 应用程序日志。               |
| gcapv | `gcloud app versions list` | 列出部署到 App Engine 服务器的所有服务的所有版本。 |

## 可能派上用场的 gcloud 别名

| 别名   | 命令                          | 描述                                                                             |
| ------ | ----------------------------- | -------------------------------------------------------------------------------- |
| gckmsd | `gcloud kms decrypt`          | 使用 Cloud Key Management Service (Cloud KMS) 密钥解密密文（解密为纯文本文件）。 |
| gclll  | `gcloud logging logs list`    | 列出项目的日志。                                                                 |
| gcsqlb | `gcloud sql backups describe` | 显示有关 Cloud SQL 实例备份的信息。                                              |
| gcsqle | `gcloud sql export sql`       | 将数据从 Cloud SQL 实例导出到 SQL 文件。                                         |
