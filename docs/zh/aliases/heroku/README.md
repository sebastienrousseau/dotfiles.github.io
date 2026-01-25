---
description: 使用 200+ shell 别名加速 Heroku 工作流，涵盖应用、数据库、流水线和部署。
lang: zh-CN
metaTitle: Heroku 别名 - Dotfiles (CN)
permalink: /aliases/heroku/
sidebar: true

meta:
  - name: keywords
    content: heroku 别名, heroku cli 快捷方式, heroku shell 命令, dotfiles, paas 部署, heroku postgres
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Heroku 别名 - Dotfiles
  - name: twitter:description
    content: 使用 200+ shell 别名加速 Heroku 工作流，涵盖应用、数据库、流水线和部署。
  - name: og:title
    content: Heroku 别名 - Dotfiles
  - name: og:description
    content: 使用 200+ shell 别名加速 Heroku 工作流，涵盖应用、数据库、流水线和部署。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# Heroku 别名

Heroku CLI 的 Shell 快捷方式，定义在 `heroku.aliases.sh` 中，由 chezmoi 自动加载。

## 概述

此集合为 [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) 提供超过 200 个别名，涵盖应用管理、插件、数据库、流水线、容器等。

## 参考

### 通用命令

| 别名 | 描述 |
|:---|:---|
| `hkk` | Heroku CLI 命令快捷方式 |
| `hka` | 添加新用户到应用 |
| `hkh` | 显示 Heroku 帮助 |
| `hkl` | 列出所有命令 |
| `hklg` | 显示最近日志输出 |
| `hkn` | 显示通知 |
| `hks` | 显示 Heroku 平台当前状态 |
| `hku` | 更新 Heroku CLI |

### 应用

| 别名 | 描述 |
|:---|:---|
| `hkapc` | 创建新应用 |
| `hkapi` | 显示应用详情 |
| `hkapk` | 永久删除应用 |
| `hkapl` | 列出应用 |
| `hkapo` | 在浏览器中打开应用 |
| `hkapr` | 重命名应用 |
| `hkapt` | 转移应用到其他用户或团队 |

### 配置变量

| 别名 | 描述 |
|:---|:---|
| `hkcfv` | 显示应用的配置变量 |
| `hkcfs` | 设置一个或多个配置变量 |
| `hkcfu` | 取消设置一个或多个配置变量 |
| `hkcfg` | 显示单个配置值 |

### PostgreSQL

| 别名 | 描述 |
|:---|:---|
| `hkpg` | 显示数据库信息 |
| `hkpgbk` | 列出数据库备份 |
| `hkpgbkc` | 捕获新备份 |
| `hkpgbkr` | 恢复备份 |
| `hkpgpsql` | 打开数据库 psql shell |

### 流水线

| 别名 | 描述 |
|:---|:---|
| `hkpipe` | 列出可访问的流水线 |
| `hkpipec` | 创建新流水线 |
| `hkpipei` | 显示流水线中的应用列表 |
| `hkpipep` | 提升应用的最新版本到下游应用 |

### 容器

| 别名 | 描述 |
|:---|:---|
| `hkct` | 使用容器构建和部署 Heroku 应用 |
| `hkctin` | 登录 Heroku Container Registry |
| `hkctpush` | 构建并推送 Docker 镜像 |
| `hkctrelease` | 发布之前推送的 Docker 镜像 |
