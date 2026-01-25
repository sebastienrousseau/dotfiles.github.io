---
title: "Schijfgebruik-aliassen: Monitor opslag met shell-commando's"
description: "Shell-aliassen voor het monitoren van schijfgebruik. Toon bestandsgroottes, vind grote mappen en beheer opslag efficient."
lang: nl-NL
metaTitle: Schijfgebruik-aliassen | Dotfiles
permalink: /nl/aliases/disk-usage/
sidebar: true
meta:
  - name: keywords
    content: schijfgebruik aliassen, du commando, opslagmonitoring, bestandsgrootte, dotfiles, shell, bash, zsh
  - name: twitter:card
    content: summary
  - name: twitter:description
    content: Shell-aliassen voor het monitoren van schijfgebruik. Toon bestandsgroottes, vind grote mappen en beheer opslag efficient.
  - name: twitter:title
    content: Schijfgebruik-aliassen | Dotfiles
  - name: og:title
    content: Schijfgebruik-aliassen | Dotfiles
  - name: og:description
    content: Shell-aliassen voor het monitoren van schijfgebruik. Toon bestandsgroottes, vind grote mappen en beheer opslag efficient.
  - name: og:image:alt
    content: Dotfiles - Eenvoudig ontworpen om bij je shell-leven te passen
  - name: og:locale
    content: nl_NL
---

# Schijfgebruik-aliassen

Snel monitoren en analyseren van opslagverbruik in je bestandssysteem.

## Overzicht

De schijfgebruik-aliassen bieden gestroomlijnde commando's voor het monitoren van opslagverbruik op Unix-gebaseerde systemen. Gedefinieerd in `disk-usage.aliases.sh`, vereenvoudigen deze snelkoppelingen gangbare `du`-operaties en worden automatisch geladen door chezmoi als onderdeel van de Dotfiles-configuratie.

## Referentie

De volgende tabel toont alle beschikbare schijfgebruik-aliassen en hun functies.

| Alias | Beschrijving |
|-------|-------------|
| `du` | Toon het schijfgebruik van de huidige map |
| `du1` | Toon bestandsgrootte van bestanden en mappen in de huidige map |
| `duh` | Toon bestandsgrootte van bestanden en mappen in leesbaar formaat |
| `ducks` | Toon de top 10 grootste bestanden en mappen in de huidige map |
| `dus` | Toon bestandsgrootte in leesbaar formaat, gesorteerd op grootte |
| `dusym` | Toon bestandsgrootte van bestanden en mappen, inclusief symlinks |
| `dut` | Toon de totale bestandsgrootte van de huidige map |
