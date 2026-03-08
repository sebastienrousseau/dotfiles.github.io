---
title: System 别名 | Dotfiles
description: 探索 Dotfiles v0.2.495 中的 System 别名。适用于 macOS、Linux 和 WSL 的简短易记的 system 命令。
lang: zh-CN
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: System 别名 | Dotfiles preview
canonical: /zh/aliases/system/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System 别名
pageType: docs
schemaType: WebPage
metaTitle: System 别名 | Dotfiles
permalink: /zh/aliases/system/
sidebar: true
meta:
  - name: keywords
    content: system, 别名, Shell, Bash, Zsh, Dotfiles, Chezmoi, system 命令
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 探索 Dotfiles v0.2.495 中的 System 别名。简短易记的 system 命令。
  - name: twitter:title
    content: System 别名 | Dotfiles
  - name: og:title
    content: System 别名 | Dotfiles
  - name: og:description
    content: 探索 Dotfiles v0.2.495 中的 System 别名。简短易记的 system 命令。
  - name: og:image:alt
    content: Dotfiles – 为您的 Shell 生活量身打造
  - name: og:locale
    content: zh_CN
---

# System 别名

简短的 system 命令。

本页介绍一组别名及其常用命令快捷方式。请先阅读本页以了解命名约定、预期输入和安全执行模式。然后打开参考附录查看完整的命令清单和精确语法。这些别名减少了重复输入，并在 macOS、Linux 和 WSL 上保持一致的工作流行为。

## 何时使用

当您需要可预测的命令模式时，在日常 Shell 工作之前使用此页面。

## 包含内容

- 别名： 24
- 辅助函数： 0
- 源文件： 1

## 快速示例

- `h` → `history`
- `p` → `pwd`
- `path` → `echo -e ${PATH//:/\\n}`
- `ports` → `netstat -tulanp`
- `top` → `sudo btop`
- `now` → `date +"%T"`
- `nowdate` → `date +"%d-%m-%Y"`
- `wget` → `wget -c`
- `speedtest` → `curl -s ... | python3 -`
- `ping` → `ping -c 5`
- `fastping` → `ping -c 100 -s 1`
- `localip` → `ipconfig getifaddr en0`

## 下一步

打开完整列表：

- [System 参考附录](./reference.md)
