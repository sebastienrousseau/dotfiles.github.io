---
description: Dig 别名允许查询有关各种 DNS 记录的信息，包括主机地址、邮件交换和名称服务器。
lang: zh-CN
metaTitle: Dig 别名 - Dotfiles (CN)
permalink: /zh/aliases/dig/
---

# Dig 别名

`dig.aliases.sh` 文件为 `dig` 命令创建了有用的快捷别名。

`dig` (domain information groper) 是一个灵活的工具，用于询问 DNS 名称服务器。
它执行 DNS 查找并显示从被查询的名称服务器返回的应答。它主要用于解决 DNS 问题和查找有关域的信息，例如 IP 地址。

## Dig

[Dig](https://zh.wikipedia.org/wiki/Dig) 是一个执行 DNS 查找并显示从被查询的名称服务器返回的应答的命令。

| 别名 | 命令                                                                    | 描述                             |
| ---- | ----------------------------------------------------------------------- | -------------------------------- |
| d    | `$(which dig)`                                                          | 使用默认选项运行 dig 命令。      |
| d4   | `$(which dig) +short -4`                                                | 对 IPv4 地址执行 DNS 查找。      |
| d6   | `$(which dig) +short -6`                                                | 对 IPv6 地址执行 DNS 查找。      |
| dga  | `$(which dig) +all ANY`                                                 | 查询所有记录的 DNS 查找。        |
| dgs  | `$(which dig) +short`                                                   | 执行简短应答的 DNS 查找。        |
| digg | `$(which dig) @8.8.8.8 +nocmd any +multiline +noall +answer`            | 使用 Google 的 DNS 进行 Dig。    |
| ip4  | `$(which dig) +short myip.opendns.com @resolver1.opendns.com -4`        | 获取您的公共 IPv4 地址。         |
| ip6  | `$(which dig) -6 AAAA +short myip.opendns.com. @resolver1.opendns.com.` | 获取您的公共 IPv6 地址。         |
| ips  | `ip4; ip6`                                                              | 获取您的公共 IPv4 和 IPv6 地址。 |
| wip  | `$(which dig) +short myip.opendns.com @resolver1.opendns.com`           | 获取您的公共 IP 地址。           |
