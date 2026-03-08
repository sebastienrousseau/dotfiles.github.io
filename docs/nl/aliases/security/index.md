---
title: Beveiligingsaliassen | Dotfiles
description: Beveiligingsaliassen voor bestandsonveranderlijkheid en configuratiebescherming. Vergrendel en ontgrendel kritieke shell-bestanden.
lang: nl-NL
author: Sebastien Rousseau
lastUpdated: true
image: /logo.png
imageAlt: Beveiligingsaliassen preview
canonical: /nl/aliases/security/
robots: index, follow
draft: false
noindex: false
sitemap: true
breadcrumbTitle: Beveiligingsaliassen
pageType: docs
schemaType: WebPage
metaTitle: Beveiligingsaliassen - Dotfiles (NL)
permalink: /nl/aliases/security/
sidebar: true
meta:
  - name: keywords
    content: beveiliging, onveranderlijkheid, bestand vergrendelen, shell aliassen, dotfiles, configuratiebescherming
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Beveiligingsaliassen voor bestandsonveranderlijkheid en configuratiebescherming. Vergrendel en ontgrendel kritieke shell-bestanden.
  - name: twitter:title
    content: Beveiligingsaliassen - Dotfiles
  - name: og:title
    content: Beveiligingsaliassen - Dotfiles
  - name: og:description
    content: Beveiligingsaliassen voor bestandsonveranderlijkheid en configuratiebescherming. Vergrendel en ontgrendel kritieke shell-bestanden.
  - name: og:image:alt
    content: Dotfiles - Eenvoudig ontworpen om bij je shell-leven te passen
  - name: og:locale
    content: nl_NL
---

# Beveiligingsaliassen

Bescherm kritieke configuratiebestanden met onveranderlijkheidscontroles.

## Overzicht

Deze aliassen zijn gedefinieerd in `security.aliases.sh` en worden automatisch geladen door Chezmoi.

## Referentie

### Onveranderlijkheid

| Alias | Beschrijving |
|:---|:---|
| `lock-configs` | Vergrendel kritieke bestanden om wijziging te voorkomen |
| `unlock-configs` | Ontgrendel kritieke bestanden voor bewerking |
| `check-locks` | Controleer de vergrendelingsstatus van kritieke bestanden |
