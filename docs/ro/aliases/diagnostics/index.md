---
title: Aliasuri Diagnosticare | Dotfiles
description: Comenzi scurte pentru verificarea sănătății. Prezentare generală pentru Dotfiles v0.2.495. Compatibil cu macOS, Linux și WSL prin Dotfiles.
lang: ro-RO
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Aliasuri Diagnosticare | Previzualizare Dotfiles
canonical: /ro/aliases/diagnostics/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Aliasuri Diagnosticare
pageType: docs
schemaType: WebPage
permalink: /ro/aliases/diagnostics/
---

# Aliasuri Diagnosticare

Comenzi scurte pentru verificarea sănătății sistemului.

Această pagină prezintă un grup de aliasuri și scurtăturile sale de comandă obișnuite.
Citiți-o mai întâi pentru a înțelege convențiile de denumire, intrările așteptate și tiparele de execuție sigure.
Apoi deschideți anexa de referință pentru inventarul complet de comenzi și sintaxa exactă.
Aceste aliasuri reduc tastarea repetitivă și mențin un comportament consistent pe macOS, Linux și WSL.

## Când se utilizează

Utilizați această pagină înainte de lucrul zilnic în shell când aveți nevoie de tipare de comandă previzibile.

## Ce este inclus

- Aliasuri: 14
- Funcții helper: 1
- Fișiere sursă: 1

## Exemple rapide

- `ca` → `chezmoi apply`
- `capply` → `dot apply`
- `cdiff` → `dot diff`
- `cdrift` → `dot drift`
- `ce` → `chezmoi edit`
- `crem` → `dot remove`
- `cupdate` → `dot update`
- `dot-doctor` → `dotdoc`
- `dot-drift` → `drift`
- `dot-heal` → `heal`
- `dotdoc` → `bash $HOME/.dotfiles/scripts/diagnostics/doctor.sh`
- `dotdoc-full` → `bash $HOME/.dotfiles/scripts/diagnostics/doctor.sh && echo "\n--- Path Info ---" && echo $PATH | tr ":" "\n" | glow -`

## Pasul următor

Deschideți lista completă:

