---
description: Make 命令的快捷别名。简化构建、测试和项目自动化。
lang: zh-CN
metaTitle: Make 别名 - Dotfiles (CN)
permalink: /aliases/make/
sidebar: true

meta:
  - name: keywords
    content: make 别名, makefile 快捷方式, 构建自动化, dotfiles, shell
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Make 别名 - Dotfiles
  - name: twitter:description
    content: Make 命令的快捷别名。简化构建、测试和项目自动化。
  - name: og:title
    content: Make 别名 - Dotfiles
  - name: og:description
    content: Make 命令的快捷别名。简化构建、测试和项目自动化。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# Make 别名

使用 Make 的简写命令简化构建工作流。

## 概述

这些别名提供对常用 Make 目标的快速访问。定义在 `make.aliases.sh` 中，由 chezmoi 自动加载，作为 Universal Dotfiles 配置的一部分。

## 参考

| 别名 | 命令 | 描述 |
|:---|:---|:---|
| `mk` | `make` | 运行默认 Make 目标 |
| `mka` | `make all` | 构建所有目标 |
| `mkc` | `make clean` | 清理构建产物 |
| `mkd` | `make doc` | 生成文档 |
| `mkf` | `make format` | 格式化源文件 |
| `mkh` | `make help` | 显示帮助信息 |
| `mki` | `make install` | 安装项目 |
| `mkr` | `make run` | 运行项目 |
| `mkt` | `make test` | 运行测试 |
