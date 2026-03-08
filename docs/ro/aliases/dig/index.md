---
title: Aliasuri Dig | Dotfiles
description: Comenzi scurte pentru interogări DNS. Prezentare generală pentru Dotfiles v0.2.495. Compatibil cu macOS, Linux și WSL prin Dotfiles.
lang: ro-RO
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Aliasuri Dig | Previzualizare Dotfiles
canonical: /ro/aliases/dig/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Aliasuri Dig
pageType: docs
schemaType: WebPage
permalink: /ro/aliases/dig/
---

# Aliasuri Dig

Comenzi scurte pentru interogări DNS.

Această pagină prezintă un grup de aliasuri și scurtăturile sale de comandă obișnuite.
Citiți-o mai întâi pentru a înțelege convențiile de denumire, intrările așteptate și tiparele de execuție sigure.
Apoi deschideți anexa de referință pentru inventarul complet de comenzi și sintaxa exactă.
Aceste aliasuri reduc tastarea repetitivă și mențin un comportament consistent pe macOS, Linux și WSL.

## Când se utilizează

Utilizați această pagină înainte de lucrul zilnic în shell când aveți nevoie de tipare de comandă previzibile.

## Ce este inclus

- Aliasuri: 10
- Funcții helper: 0
- Fișiere sursă: 1

## Exemple rapide

- `d` → `dig`
- `d4` → `dig +short -4`
- `d6` → `dig +short -6`
- `dga` → `dig +all ANY`
- `dgs` → `dig +short`
- `digg` → `dig @8.8.8.8 +nocmd any +multiline +noall +answer`
- `ip4` → `dig +short myip.opendns.com @resolver1.opendns.com -4`
- `ip6` → `dig -6 AAAA +short myip.opendns.com. @resolver1.opendns.com.`
- `ips` → `ip4; ip6`
- `wip` → `dig +short myip.opendns.com @resolver1.opendns.com`

## Pasul următor

Deschideți lista completă:

