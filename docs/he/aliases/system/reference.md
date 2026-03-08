---
title: נספח הפניה System | Dotfiles
description: הפניה מלאה לקיצורים ופונקציות עזר עבור System ב-Dotfiles v0.2.495. כולל כל קיצור, דוגמת שימוש ופונקציית Shell עבור macOS, Linux ו-WSL.
lang: he-IL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: נספח הפניה System | Dotfiles preview
canonical: /he/aliases/system/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System Reference
pageType: docs
schemaType: WebPage
metaTitle: System Reference | Dotfiles
permalink: /he/aliases/system/reference/
sidebar: true
meta:
  - name: keywords
    content: system, הפניה, קיצורים, של, Bash, Zsh, Dotfiles, Chezmoi
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: הפניה מלאה לקיצורים עבור System ב-Dotfiles v0.2.495.
  - name: twitter:title
    content: System Reference | Dotfiles
  - name: og:title
    content: System Reference | Dotfiles
  - name: og:description
    content: הפניה מלאה לקיצורים עבור System ב-Dotfiles v0.2.495.
  - name: og:image:alt
    content: Dotfiles – מעוצב להתאים לחיי ה-Shell שלך
  - name: og:locale
    content: he_IL
---

# נספח הפניה System

## קבצי מקור

- `.chezmoitemplates/aliases/system/system.aliases.sh`

## הפניית קיצורים

| קיצור | פקודה |
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

## אימות

- הריצו `chezmoi apply` לאחר עדכון הקיצורים.
- הריצו `dot doctor` כדי לאמת את מצב ה-Shell.
