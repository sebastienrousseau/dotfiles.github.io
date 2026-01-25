---
description: 使用直观的 shell 别名加速 npm 工作流，用于安装、构建、测试和发布命令。
lang: zh-CN
metaTitle: NPM 别名 - Dotfiles (CN)
permalink: /aliases/npm/
sidebar: true

meta:
  - name: keywords
    content: npm 别名, node 包管理器, npm 快捷方式, shell 别名, dotfiles, npm 命令
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: NPM 别名 - Dotfiles
  - name: twitter:description
    content: 使用直观的 shell 别名加速 npm 工作流，用于安装、构建、测试和发布命令。
  - name: og:title
    content: NPM 别名 - Dotfiles
  - name: og:description
    content: 使用直观的 shell 别名加速 npm 工作流，用于安装、构建、测试和发布命令。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# NPM 别名

使用 npm 包管理器的简写命令简化 Node.js 开发。

## 概述

这些别名定义在 `npm.aliases.sh` 中，由 chezmoi 自动加载。它们提供对常用 npm 操作的快速访问。

## 参考

### 包管理

| 别名 | 命令 | 描述 |
|:---|:---|:---|
| `npi` | `npm install` | 安装 npm 包 |
| `npg` | `npm install -g` | 全局安装 npm 包 |
| `nprm` | `npm uninstall` | 移除 npm 包 |
| `npu` | `npm update` | 更新 npm 包 |
| `npl` | `npm list` | 列出 npm 包 |
| `npc` | `npm cache` | 缓存 npm 包 |

### 脚本

| 别名 | 命令 | 描述 |
|:---|:---|:---|
| `npr` | `npm run` | 运行 npm 脚本 |
| `nps` | `npm start` | 启动 npm 脚本 |
| `npb` | `npm run build` | 构建 npm 脚本 |
| `npd` | `npm run dev` | 开发 npm 脚本 |
| `npt` | `npm test` | 测试 npm 脚本 |
| `nprw` | `npm run watch` | 运行 npm 脚本并监听 |
| `npsv` | `npm run serve` | 服务 npm 脚本 |

### 发布和分析

| 别名 | 命令 | 描述 |
|:---|:---|:---|
| `npp` | `npm publish` | 发布 npm 包 |
| `npa` | `npm audit` | 审计 npm 包 |
| `npx` | `npm exec` | 执行 npm 包 |
| `npy` | `npm why` | 为什么 npm 包 |
