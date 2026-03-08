---
title: Apéndice de referencia de System | Dotfiles
description: Referencia completa de alias y funciones auxiliares para System en Dotfiles v0.2.495. Incluye cada atajo, ejemplo de uso y función de shell para macOS, Linux y WSL.
lang: es-ES
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Apéndice de referencia de System | Dotfiles preview
canonical: /es/aliases/system/reference/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System Reference
pageType: docs
schemaType: WebPage
metaTitle: System Reference | Dotfiles
permalink: /es/aliases/system/reference/
sidebar: true
meta:
  - name: keywords
    content: system, referencia, alias, shell, bash, zsh, dotfiles, chezmoi
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Referencia completa de alias para System en Dotfiles v0.2.495.
  - name: twitter:title
    content: System Reference | Dotfiles
  - name: og:title
    content: System Reference | Dotfiles
  - name: og:description
    content: Referencia completa de alias para System en Dotfiles v0.2.495.
  - name: og:image:alt
    content: Dotfiles – Diseñados para adaptarse a tu vida en el shell
  - name: og:locale
    content: es_ES
---

# Apéndice de referencia de System

## Archivos fuente

- `.chezmoitemplates/aliases/system/system.aliases.sh`

## Referencia de alias

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

## Validación

- Ejecute `chezmoi apply` después de actualizar los alias.
- Ejecute `dot doctor` para validar el estado de su shell.
