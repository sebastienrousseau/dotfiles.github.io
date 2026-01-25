---
description: 使用别名简化 pnpm 工作流，用于安装、构建、测试和管理 Node.js 依赖。
lang: zh-CN
metaTitle: Pnpm 别名 - Dotfiles (CN)
permalink: /aliases/pnpm/
sidebar: true

meta:
  - name: keywords
    content: pnpm 别名, 包管理器, node.js, npm 替代, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Pnpm 别名 - Dotfiles
  - name: twitter:description
    content: 使用别名简化 pnpm 工作流，用于安装、构建、测试和管理 Node.js 依赖。
  - name: og:title
    content: Pnpm 别名 - Dotfiles
  - name: og:description
    content: 使用别名简化 pnpm 工作流，用于安装、构建、测试和管理 Node.js 依赖。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# Pnpm 别名

快速、节省磁盘空间的包管理器的快捷方式。

## 概述

这些别名定义在 `pnpm.aliases.sh` 中，由 chezmoi 自动加载。它们提供对常用 [pnpm](https://pnpm.io/) Node.js 包管理命令的快速访问。

## 参考

### 项目初始化

| 别名 | 描述 |
|:---|:---|
| `pni` | 初始化新项目 |
| `pnc` | 创建新项目 |
| `pnin` | 安装项目依赖 |
| `pnun` | 卸载项目依赖 |

### 开发

| 别名 | 描述 |
|:---|:---|
| `pnb` | 构建项目 |
| `pnrun` | 运行项目中的脚本 |
| `pnd` | 在开发模式下运行项目 |
| `pns` | 在服务模式下运行项目 |
| `pnst` | 启动项目 |
| `pnsv` | 在服务器模式下运行项目 |

### 测试和质量

| 别名 | 描述 |
|:---|:---|
| `pnt` | 测试项目 |
| `pntc` | 测试项目并包含覆盖率 |
| `pnln` | 对项目进行 lint 检查 |
| `pndoc` | 生成项目文档 |

### 依赖管理

| 别名 | 描述 |
|:---|:---|
| `pnls` | 列出所有依赖 |
| `pnout` | 检查过时的依赖 |
| `pnwhy` | 检查安装某个依赖的原因 |
| `pnad` | 添加开发依赖 |
| `pnap` | 添加对等依赖 |
| `pnrm` | 移除依赖 |
| `pnup` | 更新依赖 |
| `pnui` | 交互式更新依赖 |
| `pnuil` | 交互式更新依赖到最新版本 |

### 全局包

| 别名 | 描述 |
|:---|:---|
| `pnga` | 添加全局依赖 |
| `pngls` | 列出所有全局依赖 |
| `pngrm` | 移除全局依赖 |
| `pngu` | 更新全局依赖 |

### 发布和工具

| 别名 | 描述 |
|:---|:---|
| `pnpub` | 发布项目 |
| `pnx` | pnpx 的快捷方式 |
| `pnh` | 显示帮助 |
