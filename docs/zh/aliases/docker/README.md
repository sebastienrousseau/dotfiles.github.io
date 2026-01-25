---
description: 全面的 Docker 别名，用于容器、镜像、卷、网络、Compose 和 Swarm。使用简短命令提高生产力。
lang: zh-CN
metaTitle: Docker 别名 - Dotfiles (CN)
permalink: /aliases/docker/
sidebar: true

meta:
  - name: keywords
    content: docker 别名, docker 快捷方式, 容器命令, docker compose 别名, docker swarm 别名, dotfiles
---

# Docker 别名

使用直观的 Docker、Compose 和 Swarm 快捷方式简化容器工作流。

## 概述

这些别名定义在 `docker.aliases.sh` 中，由 chezmoi 自动加载。它们为 Docker 开发提供了全面的快捷方式集合，涵盖容器、镜像、卷、网络、Docker Compose 和 Docker Swarm 操作。

## 参考

### 基本命令

| 别名 | 描述 |
|:---|:---|
| `dk` | Docker 快捷方式 |
| `dkv` | 显示 Docker 版本 |
| `dki` | 显示系统信息 |
| `dkl` | 登录 Docker 注册表 |
| `dklo` | 退出 Docker 注册表 |

### 容器操作

| 别名 | 描述 |
|:---|:---|
| `dkps` | 列出运行中的容器 |
| `dkpsa` | 列出所有容器 |
| `dkr` | 在新容器中运行命令 |
| `dkri` | 运行交互式容器 |
| `dkrd` | 后台运行容器 |
| `dks` | 启动容器 |
| `dkst` | 停止容器 |
| `dkrs` | 重启容器 |
| `dkp` | 暂停容器 |
| `dkup` | 恢复容器 |
| `dkrm` | 删除容器 |
| `dkrma` | 删除所有容器 |
| `dkrmf` | 强制删除容器 |

### 镜像

| 别名 | 描述 |
|:---|:---|
| `dki` | 列出镜像 |
| `dkia` | 列出所有镜像 |
| `dkb` | 构建镜像 |
| `dkbt` | 构建并标记镜像 |
| `dkpu` | 推送镜像到注册表 |
| `dkrmi` | 删除镜像 |
| `dkh` | 显示镜像历史 |
| `dkprune` | 删除未使用的数据 |

### Docker Compose

| 别名 | 描述 |
|:---|:---|
| `dc` | Docker Compose 快捷方式 |
| `dcu` | 创建并启动容器 |
| `dcud` | 后台创建并启动容器 |
| `dcd` | 停止并删除容器 |
| `dcr` | 重启服务 |
| `dcs` | 停止服务 |
| `dcps` | 列出容器 |
| `dcl` | 查看日志 |
| `dclf` | 跟踪日志 |
| `dcex` | 在容器中执行命令 |
| `dcb` | 构建服务 |

### Swarm 管理

| 别名 | 描述 |
|:---|:---|
| `dksw` | Swarm 快捷方式 |
| `dkswi` | 初始化 Docker Swarm |
| `dkswj` | 加入 Docker Swarm |
| `dkswl` | 离开 Swarm |
| `dksrv` | 服务快捷方式 |
| `dksrvls` | 列出服务 |
| `dksrvc` | 创建服务 |
| `dksrvsc` | 扩展服务 |
