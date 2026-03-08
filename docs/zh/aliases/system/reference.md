---
title: System 参考附录 | Dotfiles
description: Dotfiles v0.2.495 中 System 的完整别名和辅助函数参考。包含适用于 macOS、Linux 和 WSL 的所有快捷方式、使用示例和 Shell 函数。
lang: zh-CN
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: System 参考附录 | Dotfiles preview
canonical: /zh/aliases/system/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System Reference
pageType: docs
schemaType: WebPage
metaTitle: System Reference | Dotfiles
permalink: /zh/aliases/system/reference/
sidebar: true
meta:
  - name: keywords
    content: system, 参考, 别名, Shell, Bash, Zsh, Dotfiles, Chezmoi
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Dotfiles v0.2.495 中 System 的完整别名参考。
  - name: twitter:title
    content: System Reference | Dotfiles
  - name: og:title
    content: System Reference | Dotfiles
  - name: og:description
    content: Dotfiles v0.2.495 中 System 的完整别名参考。
  - name: og:image:alt
    content: Dotfiles – 为您的 Shell 生活量身打造
  - name: og:locale
    content: zh_CN
---

# System 参考附录

## 源文件

- `.chezmoitemplates/aliases/system/system.aliases.sh`

## 别名参考

| 别名 | 命令 |
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

## 验证

- 更新别名后运行 `chezmoi apply`。
- 运行 `dot doctor` 验证 Shell 状态。
