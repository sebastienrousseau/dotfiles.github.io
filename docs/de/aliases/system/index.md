---
title: System Aliase | Dotfiles
description: Entdecken Sie System-Aliase in Dotfiles v0.2.495. Kurze, einprägsame Befehle für system-Workflows unter macOS, Linux und WSL.
lang: de-DE
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: System Aliase | Dotfiles preview
canonical: /de/aliases/system/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System Aliase
pageType: docs
schemaType: WebPage
metaTitle: System Aliase | Dotfiles
permalink: /de/aliases/system/
sidebar: true
meta:
  - name: keywords
    content: system, Aliase, Shell, Bash, Zsh, Dotfiles, Chezmoi, system-Befehle
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Entdecken Sie System-Aliase in Dotfiles v0.2.495. Kurze, einprägsame Befehle für system-Workflows.
  - name: twitter:title
    content: System Aliase | Dotfiles
  - name: og:title
    content: System Aliase | Dotfiles
  - name: og:description
    content: Entdecken Sie System-Aliase in Dotfiles v0.2.495. Kurze, einprägsame Befehle für system-Workflows.
  - name: og:image:alt
    content: Dotfiles – Passend für Ihr Shell-Leben
  - name: og:locale
    content: de_DE
---

# System Aliase

Kurze system-Befehle.

Diese Seite stellt eine Alias-Gruppe und ihre häufig verwendeten Befehlskürzel vor. Lesen Sie diese Seite zuerst, um Namenskonventionen, erwartete Eingaben und sichere Ausführungsmuster zu verstehen. Öffnen Sie anschließend den Referenzanhang für das vollständige Befehlsinventar und die genaue Syntax. Diese Aliase reduzieren wiederholtes Tippen und gewährleisten ein einheitliches Workflow-Verhalten unter macOS, Linux und WSL.

## Wann verwenden

Nutzen Sie diese Seite vor der täglichen Shell-Arbeit, wenn Sie zuverlässige Befehlsmuster benötigen.

## Inhalt

- Aliase: 24
- Hilfsfunktionen: 0
- Quelldateien: 1

## Schnellbeispiele

- `h` → `history`
- `p` → `pwd`
- `path` → `echo -e ${PATH//:/\\n}`
- `ports` → `netstat -tulanp`
- `top` → `sudo btop`
- `now` → `date +"%T"`
- `nowdate` → `date +"%d-%m-%Y"`
- `wget` → `wget -c`
- `speedtest` → `curl -s ... | python3 -`
- `ping` → `ping -c 5`
- `fastping` → `ping -c 100 -s 1`
- `localip` → `ipconfig getifaddr en0`

## Nächster Schritt

Vollständige Liste öffnen:

- [System-Referenzanhang](./reference.md)
