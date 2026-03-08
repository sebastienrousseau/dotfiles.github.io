---
title: Справочное приложение System | Dotfiles
description: Полный справочник псевдонимов и вспомогательных функций для System в Dotfiles v0.2.495. Включает все ярлыки, примеры использования и функции оболочки для macOS, Linux и WSL.
lang: ru-RU
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Справочное приложение System | Dotfiles preview
canonical: /ru/aliases/system/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System Reference
pageType: docs
schemaType: WebPage
metaTitle: System Reference | Dotfiles
permalink: /ru/aliases/system/reference/
sidebar: true
meta:
  - name: keywords
    content: system, справочник, псевдонимы, оболочка, Bash, Zsh, Dotfiles, Chezmoi
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Полный справочник псевдонимов для System в Dotfiles v0.2.495.
  - name: twitter:title
    content: System Reference | Dotfiles
  - name: og:title
    content: System Reference | Dotfiles
  - name: og:description
    content: Полный справочник псевдонимов для System в Dotfiles v0.2.495.
  - name: og:image:alt
    content: Dotfiles – Создано для вашей жизни в Shell
  - name: og:locale
    content: ru_RU
---

# Справочное приложение System

## Исходные файлы

- `.chezmoitemplates/aliases/system/system.aliases.sh`

## Справочник псевдонимов

| Псевдоним | Команда |
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

## Проверка

- Выполните `chezmoi apply` после обновления псевдонимов.
- Выполните `dot doctor` для проверки состояния оболочки.
