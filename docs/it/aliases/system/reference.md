---
title: Appendice di riferimento System | Dotfiles
description: Riferimento completo degli alias e delle funzioni ausiliarie per System in Dotfiles v0.2.495. Include ogni scorciatoia, esempio d'uso e funzione shell per macOS, Linux e WSL.
lang: it-IT
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Appendice di riferimento System | Dotfiles preview
canonical: /it/aliases/system/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System Reference
pageType: docs
schemaType: WebPage
metaTitle: System Reference | Dotfiles
permalink: /it/aliases/system/reference/
sidebar: true
meta:
  - name: keywords
    content: system, riferimento, alias, shell, bash, zsh, dotfiles, chezmoi
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Riferimento completo degli alias per System in Dotfiles v0.2.495.
  - name: twitter:title
    content: System Reference | Dotfiles
  - name: og:title
    content: System Reference | Dotfiles
  - name: og:description
    content: Riferimento completo degli alias per System in Dotfiles v0.2.495.
  - name: og:image:alt
    content: Dotfiles – Progettati per adattarsi alla tua vita nella shell
  - name: og:locale
    content: it_IT
---

# Appendice di riferimento System

## File sorgente

- `.chezmoitemplates/aliases/system/system.aliases.sh`

## Riferimento alias

| Alias | Comando |
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

## Validazione

- Esegui `chezmoi apply` dopo l'aggiornamento degli alias.
- Esegui `dot doctor` per verificare lo stato della shell.
