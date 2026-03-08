---
title: System リファレンス付録 | Dotfiles
description: Dotfiles v0.2.495 の System の完全なエイリアスおよびヘルパー関数リファレンス。macOS、Linux、WSL 向けのすべてのショートカット、使用例、シェル関数を含みます。
lang: ja-JP
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: System リファレンス付録 | Dotfiles preview
canonical: /ja/aliases/system/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System Reference
pageType: docs
schemaType: WebPage
metaTitle: System Reference | Dotfiles
permalink: /ja/aliases/system/reference/
sidebar: true
meta:
  - name: keywords
    content: system, リファレンス, エイリアス, シェル, Bash, Zsh, Dotfiles, Chezmoi
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Dotfiles v0.2.495 の System の完全なエイリアスリファレンス。
  - name: twitter:title
    content: System Reference | Dotfiles
  - name: og:title
    content: System Reference | Dotfiles
  - name: og:description
    content: Dotfiles v0.2.495 の System の完全なエイリアスリファレンス。
  - name: og:image:alt
    content: Dotfiles – あなたのシェルライフにフィット
  - name: og:locale
    content: ja_JP
---

# System リファレンス付録

## ソースファイル

- `.chezmoitemplates/aliases/system/system.aliases.sh`

## エイリアスリファレンス

| エイリアス | コマンド |
| :--- | :--- |
| `h` | `history` |
| `j` | `jobs -l` |
| `p` | `pwd` |
| `now` | `date +"%T"` |
| `nowdate` | `date +"%d-%m-%Y"` |
| `path` | `echo -e ${PATH//:/\\n}` |
| `ports` | `netstat -tulanp` |
| `top` | `sudo btop` |
| `wget` | `wget -c` |
| `speedtest` | `curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py \| python3 -` |
| `ping` | `ping -c 5` |
| `fastping` | `ping -c 100 -s 1` |
| `localip` | `ipconfig getifaddr en0` |
| `ips` | `ifconfig -a \| grep -o 'inet6\? \(addr:\)\?\s\?\(\(\([0-9]\+\.\)\{3\}[0-9]\+\)\|[a-fA-F0-9:]\+\)' \| awk '{ sub(/inet6? (addr:)? ?/, ""); print }'` |
| `nmap_open_ports` | `nmap --open` |
| `nmap_list_interfaces` | `nmap --iflist` |
| `nmap_slow` | `nmap -sS -v -T1` |
| `nmap_fin` | `nmap -sF -v` |
| `nmap_full` | `nmap -sS -T4 -PE -PP -PS80,443 -PY -g 53 -A -p1-65535 -v` |
| `nmap_check_for_firewall` | `nmap -sA -p1-65535 -v -T4` |
| `nmap_ping_through_firewall` | `nmap -PS -PA` |
| `nmap_fast` | `nmap -F -T5 --version-light --top-ports 300` |
| `nmap_detect_versions` | `nmap -sV -p1-65535 -O --osscan-guess -T4 -Pn` |
| `nmap_check_for_vulns` | `nmap --script=vulscan` |

## 検証

- エイリアスの更新後に `chezmoi apply` を実行してください。
- `dot doctor` を実行してシェルの状態を検証してください。
