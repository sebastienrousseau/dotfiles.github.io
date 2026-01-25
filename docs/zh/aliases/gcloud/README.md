---
description: Google Cloud SDK 的快捷别名。使用易记命令管理 Compute Engine、IAM、Cloud SQL 等。
lang: zh-CN
metaTitle: Google Cloud 别名 - Dotfiles (CN)
permalink: /aliases/gcloud/
sidebar: true

meta:
  - name: keywords
    content: gcloud 别名, google cloud cli, gcloud 快捷方式, cloud sdk 命令, dotfiles, shell 别名
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Google Cloud 别名 - Dotfiles
  - name: twitter:description
    content: Google Cloud SDK 的快捷别名。使用易记命令管理 Compute Engine、IAM、Cloud SQL 等。
  - name: og:title
    content: Google Cloud 别名 - Dotfiles
  - name: og:description
    content: Google Cloud SDK 的快捷别名。使用易记命令管理 Compute Engine、IAM、Cloud SQL 等。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# Google Cloud 别名

Google Cloud SDK 命令行的易记快捷方式。

## 概述

这些别名定义在 `gcloud.aliases.sh` 中，由 chezmoi 自动加载。它们包装了常用的 Google Cloud SDK 命令，简化 Compute Engine、IAM、Cloud SQL 和其他 GCP 服务的管理。

## 参考

### 核心命令

| 别名 | 描述 |
|:---|:---|
| `gcd` | 将默认项目设置为当前目录名 |
| `gck` | 列出所有配置 |
| `gcsa` | 设置当前配置的账户 |
| `gcso` | 打开当前项目的 Google Cloud 控制台 |

### Compute Engine

| 别名 | 描述 |
|:---|:---|
| `gci` | 管理 Compute Engine 实例 |
| `gcca` | 管理 Compute Engine IP 地址 |
| `gccc` | 创建新的虚拟机实例 |
| `gcco` | 通过 SSH 连接虚拟机实例 |
| `gcpha` | 显示 Compute Engine IP 地址详情 |

### 存储和数据库

| 别名 | 描述 |
|:---|:---|
| `gcss` | 管理 Cloud Storage |
| `gcsq` | 管理 Cloud SQL |
| `gcdb` | 管理 Cloud Datastore |

### 无服务器和容器

| 别名 | 描述 |
|:---|:---|
| `gcf` | 管理 Cloud Functions |
| `gcro` | 管理 Cloud Run |
| `gcu` | 管理 App Engine |
| `gcs` | 管理 Kubernetes Engine 集群 |
| `gcr` | 从 Container Registry 删除容器镜像 |

### 数据和分析

| 别名 | 描述 |
|:---|:---|
| `gcdp` | 管理 Cloud Dataproc |
| `gcps` | 管理 Cloud Pub/Sub |

### 网络和安全

| 别名 | 描述 |
|:---|:---|
| `gcn` | 管理 Cloud Networks |
| `gcic` | 管理身份和访问管理 |
| `gcki` | 管理 Cloud KMS |

### 运维和监控

| 别名 | 描述 |
|:---|:---|
| `gcla` | 管理 Cloud Logging |
| `gcma` | 管理 Cloud Monitoring |
| `gclb` | 管理 Cloud Build |
| `gct` | 管理 Cloud Tasks |
