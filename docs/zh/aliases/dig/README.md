---
description: Dig 别名用于查询 DNS 记录信息，包括主机地址、邮件交换与名称服务器。
lang: zh-CN
metaTitle: Dig 别名 - Dotfiles (ZH)
permalink: /zh/aliases/dig/

meta:
  - name: twitter:card
    content: Dig 别名用于查询 DNS 记录信息，包括主机地址、邮件交换与名称服务器。
  - name: twitter:description
    content: Dig 别名用于查询 DNS 记录信息，包括主机地址、邮件交换与名称服务器。
  - name: twitter:title
    content: Dig 别名 - Dotfiles (ZH)
  - name: og:title
    content: Dig 别名 - Dotfiles (ZH)
  - name: og:description
    content: Dig 别名用于查询 DNS 记录信息，包括主机地址、邮件交换与名称服务器。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活而设计
  - name: og:locale
    content: zh_CN
---
# Dig 别名

管理 Dig 别名。**Universal Dotfiles** 配置的一部分。

![Dotfiles banner][banner]

## 📖 描述

这些别名定义在 `dig.aliases.sh` 中，并由 `chezmoi` 自动加载。

## ⚡ 别名

该代码提供 DNS 查询别名：
- `d`: 使用默认选项执行 dig。
- `d4`: 查询 IPv4。
- `d6`: 查询 IPv6。
- `dga`: 查询所有记录。
- `dgs`: 短格式输出。
- `digg`: 使用 Google DNS 进行查询。
- `ip4`: 获取公网 IPv4。
- `ip6`: 获取公网 IPv6。
- `ips`: 获取公网 IPv4 与 IPv6。
- `wip`: 获取公网 IP。

[banner]: https://kura.pro/dotfiles/v2/images/titles/title-dotfiles.svg
