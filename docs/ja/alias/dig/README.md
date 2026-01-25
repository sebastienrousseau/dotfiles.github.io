---
description: DNSルックアップを簡素化するDigシェルエイリアス。ホストアドレス、メール交換、ネームサーバーなどを照会します。
lang: ja-JP
metaTitle: Digエイリアス - Dotfiles (JP)
permalink: /ja/alias/dig/
sidebar: true

meta:
  - name: keywords
    content: dig, dns, lookup, shell aliases, dotfiles, networking
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: DNSルックアップを簡素化するDigシェルエイリアス。ホストアドレス、メール交換、ネームサーバーなどを照会します。
  - name: twitter:title
    content: Digエイリアス - Dotfiles
  - name: og:title
    content: Digエイリアス - Dotfiles
  - name: og:description
    content: DNSルックアップを簡素化するDigシェルエイリアス。ホストアドレス、メール交換、ネームサーバーなどを照会します。
  - name: og:image:alt
    content: Dotfiles - シェルライフにフィットするシンプルな設計
  - name: og:locale
    content: ja_JP
---

# Digエイリアス

DNSルックアップとネットワーク診断のためのシェルショートカット。

## 概要

これらのエイリアスは`dig.aliases.sh`で定義され、Chezmoiによって自動的にロードされます。

## リファレンス

| エイリアス | 説明 |
|:---|:---|
| `d` | デフォルトオプションでdigを実行 |
| `d4` | IPv4アドレスのDNSルックアップ |
| `d6` | IPv6アドレスのDNSルックアップ |
| `dga` | すべてのレコードのDNSルックアップ |
| `dgs` | 短い回答のDNSルックアップ |
| `digg` | GoogleのDNSでdigを実行 |
| `ip4` | パブリックIPv4アドレスを取得 |
| `ip6` | パブリックIPv6アドレスを取得 |
| `ips` | パブリックIPv4およびIPv6アドレスを取得 |
| `wip` | パブリックIPアドレスを取得 |
