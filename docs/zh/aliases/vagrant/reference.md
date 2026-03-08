---
title: Vagrant 参考附录 | Dotfiles
description: Dotfiles v0.2.495 中 Vagrant 的完整别名和辅助函数参考。包含适用于 macOS、Linux 和 WSL 的所有快捷方式、使用示例和 Shell 函数。
lang: zh-CN
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Vagrant 参考附录 | Dotfiles preview
canonical: /zh/aliases/vagrant/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Vagrant Reference
pageType: docs
schemaType: WebPage
metaTitle: Vagrant Reference | Dotfiles
permalink: /zh/aliases/vagrant/reference/
sidebar: true
meta:
  - name: keywords
    content: vagrant, 参考, 别名, Shell, Bash, Zsh, Dotfiles, Chezmoi
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Dotfiles v0.2.495 中 Vagrant 的完整别名参考。
  - name: twitter:title
    content: Vagrant Reference | Dotfiles
  - name: og:title
    content: Vagrant Reference | Dotfiles
  - name: og:description
    content: Dotfiles v0.2.495 中 Vagrant 的完整别名参考。
  - name: og:image:alt
    content: Dotfiles – 为您的 Shell 生活量身打造
  - name: og:locale
    content: zh_CN
---

# Vagrant 参考附录

## 源文件

- `.chezmoitemplates/aliases/vagrant/vagrant.aliases.sh`

## 别名参考

| 别名 | 命令 |
| :--- | :--- |
| `vg` | `vagrant` |

## 验证

- 更新别名后运行 `chezmoi apply`。
- 运行 `dot doctor` 验证 Shell 状态。
