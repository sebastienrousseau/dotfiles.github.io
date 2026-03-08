---
title: System 레퍼런스 부록 | Dotfiles
description: Dotfiles v0.2.495의 System 별칭 및 헬퍼 함수 전체 레퍼런스. macOS, Linux, WSL용 모든 단축키, 사용 예시, 셸 함수 포함.
lang: ko-KR
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: System 레퍼런스 부록 | Dotfiles preview
canonical: /ko/aliases/system/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System Reference
pageType: docs
schemaType: WebPage
metaTitle: System Reference | Dotfiles
permalink: /ko/aliases/system/reference/
sidebar: true
meta:
  - name: keywords
    content: system, 레퍼런스, 별칭, 셸, Bash, Zsh, Dotfiles, Chezmoi
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Dotfiles v0.2.495의 System 별칭 전체 레퍼런스.
  - name: twitter:title
    content: System Reference | Dotfiles
  - name: og:title
    content: System Reference | Dotfiles
  - name: og:description
    content: Dotfiles v0.2.495의 System 별칭 전체 레퍼런스.
  - name: og:image:alt
    content: Dotfiles – 당신의 셸 라이프에 맞게 설계
  - name: og:locale
    content: ko_KR
---

# System 레퍼런스 부록

## 소스 파일

- `.chezmoitemplates/aliases/system/system.aliases.sh`

## 별칭 레퍼런스

| 별칭 | 명령어 |
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

## 검증

- 별칭 업데이트 후 `chezmoi apply`를 실행하세요.
- `dot doctor`를 실행하여 셸 상태를 검증하세요.
