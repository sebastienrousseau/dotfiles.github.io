---
description: 简化 Go 开发工作流的 shell 别名。使用简单快捷方式运行、构建、测试和管理 Go 模块。
lang: zh-CN
metaTitle: Go 别名 - Dotfiles (CN)
permalink: /aliases/go/
sidebar: true

meta:
  - name: keywords
    content: go 别名, go shell 快捷方式, go 开发, dotfiles, golang 命令
---

# Go 别名

使用直观的 shell 快捷方式简化 Go 开发工作流。

## 概述

这些别名定义在 `go.aliases.sh` 中，由 chezmoi 自动加载。它们提供对常用 Go 命令的快速访问，用于运行、构建、测试和管理模块。

## 参考

| 别名 | 命令 | 描述 |
|:---|:---|:---|
| `go` | `go` | Go 快捷方式 |
| `gor` | `go run` | 运行 Go 程序 |
| `gob` | `go build` | 构建 Go 包 |
| `got` | `go test` | 运行 Go 测试 |
| `gomt` | `go mod tidy` | 整理 Go 模块依赖 |
| `goget` | `go get` | 下载并安装 Go 包 |
