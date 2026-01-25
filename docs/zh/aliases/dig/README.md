---
description: 使用 dig 别名简化 DNS 查询。使用这些 shell 快捷方式更快地查找 IPv4、IPv6 和 DNS 记录。
lang: zh-CN
metaTitle: Dig 别名 - Dotfiles (CN)
permalink: /aliases/dig/
sidebar: true

meta:
  - name: keywords
    content: dig 别名, dns 查找, shell 别名, dotfiles, ipv4 查找, ipv6 查找
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: 使用 dig 别名简化 DNS 查询。使用这些 shell 快捷方式更快地查找 IPv4、IPv6 和 DNS 记录。
  - name: twitter:title
    content: Dig 别名 - Dotfiles
  - name: og:title
    content: Dig 别名 - Dotfiles
  - name: og:description
    content: 使用 dig 别名简化 DNS 查询。使用这些 shell 快捷方式更快地查找 IPv4、IPv6 和 DNS 记录。
  - name: og:image:alt
    content: Dotfiles - 为你的 Shell 生活精心设计
  - name: og:locale
    content: zh_CN
---

# Dig 别名

使用简洁的 shell 别名简化 DNS 查找。

## 概述

这些别名简化了在 Unix 系统上使用 `dig` 命令进行 DNS（域名系统）查询的工作。定义在 `dig.aliases.sh` 中，作为 Universal Dotfiles 配置的一部分由 chezmoi 自动加载。

## 参考

下表列出了所有可用的 dig 别名及其功能。

| 别名 | 描述 |
|:---|:---|
| `d` | 使用默认选项运行 dig 命令 |
| `d4` | 执行 IPv4 地址的 DNS 查找 |
| `d6` | 执行 IPv6 地址的 DNS 查找 |
| `dga` | 执行所有记录的 DNS 查找 |
| `dgs` | 执行简短答案的 DNS 查找 |
| `digg` | 使用 Google DNS 执行 dig 查询 |
| `ip4` | 获取你的公网 IPv4 地址 |
| `ip6` | 获取你的公网 IPv6 地址 |
| `ips` | 获取你的公网 IPv4 和 IPv6 地址 |
| `wip` | 获取你的公网 IP 地址 |
