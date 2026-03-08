---
title: System Aliassen | Dotfiles
description: Ontdek System-aliassen in Dotfiles v0.2.495. Korte, makkelijk te onthouden opdrachten voor system-workflows op macOS, Linux en WSL.
lang: nl-NL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: System Aliassen | Dotfiles preview
canonical: /nl/aliases/system/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System Aliassen
pageType: docs
schemaType: WebPage
metaTitle: System Aliassen | Dotfiles
permalink: /nl/aliases/system/
sidebar: true
meta:
  - name: keywords
    content: system, aliassen, shell, bash, zsh, dotfiles, chezmoi, system-opdrachten
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Ontdek System-aliassen in Dotfiles v0.2.495. Korte opdrachten voor system-workflows.
  - name: twitter:title
    content: System Aliassen | Dotfiles
  - name: og:title
    content: System Aliassen | Dotfiles
  - name: og:description
    content: Ontdek System-aliassen in Dotfiles v0.2.495. Korte opdrachten voor system-workflows.
  - name: og:image:alt
    content: Dotfiles – Ontworpen om in uw shellleven te passen
  - name: og:locale
    content: nl_NL
---

# System Aliassen

Korte system-opdrachten.

Deze pagina introduceert een aliasgroep en de bijbehorende veelgebruikte sneltoetsen. Lees deze pagina eerst om naamconventies, verwachte invoer en veilige uitvoeringspatronen te begrijpen. Open vervolgens de referentiebijlage voor het volledige commandoinventaris en de exacte syntaxis. Deze aliassen verminderen herhaald typen en zorgen voor consistent workflowgedrag op macOS, Linux en WSL.

## Wanneer gebruiken

Gebruik deze pagina vóór dagelijks shellwerk wanneer u voorspelbare commandopatronen nodig hebt.

## Wat is inbegrepen

- Aliassen: 24
- Helperfuncties: 0
- Bronbestanden: 1

## Snelle voorbeelden

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

## Volgende stap

Open de volledige lijst:

- [System-referentiebijlage](./reference.md)
