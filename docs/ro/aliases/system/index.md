---
title: System Aliasuri | Dotfiles
description: Explorați aliasurile System în Dotfiles v0.2.495. Comenzi scurte și ușor de reținut pentru fluxuri de lucru system pe macOS, Linux și WSL.
lang: ro-RO
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: System Aliasuri | Dotfiles preview
canonical: /ro/aliases/system/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: System Aliasuri
pageType: docs
schemaType: WebPage
permalink: /ro/aliases/system/
---

# System Aliasuri

Comenzi scurte system.

Această pagină prezintă un grup de aliasuri și comenzile rapide asociate. Citiți-o mai întâi pentru a înțelege convențiile de denumire, intrările așteptate și modelele de execuție sigure. Apoi deschideți anexa de referință pentru inventarul complet al comenzilor și sintaxa exactă. Aceste aliasuri reduc tastarea repetitivă și mențin un comportament de workflow consecvent pe macOS, Linux și WSL.

## Când se folosește

Folosiți această pagină înainte de lucrul zilnic cu shell-ul când aveți nevoie de modele de comenzi predictibile.

## Ce este inclus

- Aliasuri: 24
- Funcții auxiliare: 0
- Fișiere sursă: 1

## Exemple rapide

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

## Pasul următor

Deschideți lista completă:

- [Anexă de referință System](./reference.md)
