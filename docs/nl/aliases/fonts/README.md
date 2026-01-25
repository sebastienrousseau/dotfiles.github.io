---
title: "Lettertype-aliassen: Systeemlettertypen beheren"
description: "Shell-aliassen voor het beheren van systeemlettertypen en caches. Werk de lettertypecache bij en toon geinstalleerde lettertypefamilies met eenvoudige commando's."
lang: nl-NL
metaTitle: "Lettertype-aliassen | Dotfiles"
permalink: /nl/aliases/fonts/
sidebar: true
meta:
  - name: keywords
    content: "lettertype aliassen, font cache, fc-cache, lettertypen lijst, dotfiles, shell"
---

# Lettertype-aliassen

Shell-aliassen voor het beheren van systeemlettertypen en caches.

## Overzicht

Lettertype-aliassen bieden handige snelkoppelingen voor gangbare lettertypebeheer-taken. Deze commando's vereenvoudigen het bijwerken van de lettertypecache na het installeren van nieuwe lettertypen en het tonen van alle beschikbare lettertypefamilies op je systeem.

## Referentie

### Commando's

| Alias | Commando | Beschrijving |
|-------|---------|-------------|
| `update-fonts` | `fc-cache -fv` | Werk de systeemlettertypecache bij |
| `list-fonts` | — | Toon alle geinstalleerde lettertypefamilies |

### Geinstalleerde lettertypen

De volgende lettertypen zijn standaard geconfigureerd:

| Lettertype | Doel |
|------|---------|
| JetBrainsMono Nerd Font | Primair terminaallettertype |
| Symbols Nerd Font | Pictogram fallback |
